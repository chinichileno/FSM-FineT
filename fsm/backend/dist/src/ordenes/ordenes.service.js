var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, BadRequestException, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { validarRut } from '../common/utils/rut.util.js';
const TRANSICIONES_VALIDAS = {
    PENDIENTE: ['ASIGNADA', 'CANCELADA'],
    ASIGNADA: ['EN_CURSO', 'PENDIENTE', 'CANCELADA'],
    EN_CURSO: ['COMPLETADA', 'CANCELADA'],
    COMPLETADA: [],
    CANCELADA: [],
};
const PRIORIDAD_ORDEN = { CRITICA: 0, ALTA: 1, MEDIA: 2, BAJA: 3 };
const OT_INCLUDE = {
    cliente: { select: { id_cliente: true, nombre_completo: true, rut: true, es_conflictivo: true } },
    tecnico: { select: { id_usuario: true, nombre_completo: true, nombre_usuario: true } },
    direccion: { select: { direccion_completa: true, comuna: true } },
};
let OrdenesService = class OrdenesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async crearOT(dto, userId, id_empresa) {
        if (!validarRut(dto.rut_cliente)) {
            throw new BadRequestException('RUT inválido');
        }
        const cliente = await this.prisma.cliente.findFirst({
            where: { rut: dto.rut_cliente, id_empresa },
            include: { direcciones: { where: { es_principal: true }, take: 1 } },
        });
        if (!cliente)
            throw new NotFoundException('Cliente no encontrado');
        if (cliente.es_conflictivo && dto.tipo_ot === 'INSTALACION') {
            throw new BadRequestException('Cliente en lista negra. No se puede crear OT de instalación');
        }
        let estado = 'PENDIENTE';
        if (dto.id_tecnico) {
            const tecnico = await this.prisma.usuario.findFirst({
                where: { id_usuario: dto.id_tecnico, id_empresa, activo: true },
            });
            if (!tecnico)
                throw new NotFoundException('Técnico no encontrado');
            estado = 'ASIGNADA';
        }
        const id_direccion = dto.id_direccion ?? cliente.direcciones[0]?.id_direccion ?? null;
        const nueva = await this.prisma.$transaction(async (tx) => {
            const ot = await tx.orden_trabajo.create({
                data: {
                    id_empresa,
                    id_cliente: cliente.id_cliente,
                    id_tecnico: dto.id_tecnico ?? null,
                    id_direccion,
                    tipo_ot: dto.tipo_ot,
                    prioridad: dto.prioridad ?? 'MEDIA',
                    estado,
                    fecha_creacion: new Date(),
                    fecha_programada: dto.bloque_horario ? new Date(dto.bloque_horario) : null,
                    observaciones: dto.observaciones ?? null,
                },
            });
            await tx.historial_ot.create({
                data: {
                    id_ot: ot.id_ot,
                    id_usuario: userId,
                    estado_anterior: null,
                    estado_nuevo: estado,
                    fecha_hora: new Date(),
                },
            });
            await tx.log_auditoria.create({
                data: {
                    id_usuario: userId,
                    accion: 'CREAR_OT',
                    entidad_afectada: 'orden_trabajo',
                    id_entidad_afectada: ot.id_ot,
                    fecha_hora: new Date(),
                },
            });
            return ot;
        });
        return this.prisma.orden_trabajo.findUnique({
            where: { id_ot: nueva.id_ot },
            include: OT_INCLUDE,
        });
    }
    async listarOT(id_empresa, filtros) {
        const page = filtros.page ?? 1;
        const limit = filtros.limit ?? 20;
        const where = { id_empresa };
        if (filtros.estado)
            where.estado = filtros.estado;
        if (filtros.tipo_ot)
            where.tipo_ot = filtros.tipo_ot;
        if (filtros.prioridad)
            where.prioridad = filtros.prioridad;
        if (filtros.id_tecnico)
            where.id_tecnico = filtros.id_tecnico;
        if (filtros.fecha_desde || filtros.fecha_hasta) {
            where.fecha_creacion = {
                ...(filtros.fecha_desde && { gte: new Date(filtros.fecha_desde) }),
                ...(filtros.fecha_hasta && { lte: new Date(filtros.fecha_hasta) }),
            };
        }
        const all = await this.prisma.orden_trabajo.findMany({
            where,
            include: OT_INCLUDE,
        });
        all.sort((a, b) => {
            const pa = PRIORIDAD_ORDEN[a.prioridad ?? ''] ?? 99;
            const pb = PRIORIDAD_ORDEN[b.prioridad ?? ''] ?? 99;
            if (pa !== pb)
                return pa - pb;
            return new Date(b.fecha_creacion).getTime() - new Date(a.fecha_creacion).getTime();
        });
        const total = all.length;
        const data = all.slice((page - 1) * limit, page * limit);
        return { data, total, page, limit };
    }
    async obtenerOT(id_ot, id_empresa) {
        const ot = await this.prisma.orden_trabajo.findFirst({
            where: { id_ot, id_empresa },
            include: {
                cliente: {
                    include: { direcciones: { where: { es_principal: true }, take: 1 } },
                },
                tecnico: { select: { id_usuario: true, nombre_completo: true, nombre_usuario: true } },
                direccion: { select: { direccion_completa: true, comuna: true } },
                historial: { orderBy: { fecha_hora: 'desc' } },
            },
        });
        if (!ot)
            throw new NotFoundException('OT no encontrada');
        return ot;
    }
    async listarTecnicos(id_empresa) {
        const tecnicos = await this.prisma.usuario.findMany({
            where: {
                id_empresa,
                activo: true,
                roles: { some: { rol: { nombre_rol: 'TECNICO' } } },
            },
            select: { id_usuario: true, nombre_completo: true, nombre_usuario: true },
        });
        return Promise.all(tecnicos.map(async (t) => {
            const ot_activas_hoy = await this.prisma.orden_trabajo.count({
                where: { id_tecnico: t.id_usuario, estado: { in: ['ASIGNADA', 'EN_CURSO'] } },
            });
            return { ...t, ot_activas_hoy };
        }));
    }
    async asignarTecnico(id_ot, dto, userId, id_empresa) {
        const ot = await this.prisma.orden_trabajo.findFirst({ where: { id_ot, id_empresa } });
        if (!ot)
            throw new NotFoundException('OT no encontrada');
        if (ot.estado !== 'PENDIENTE') {
            throw new BadRequestException('Solo se pueden asignar OT en estado PENDIENTE');
        }
        const tecnico = await this.prisma.usuario.findFirst({
            where: { id_usuario: dto.id_tecnico, activo: true },
        });
        if (!tecnico)
            throw new NotFoundException('Técnico no encontrado');
        await this.prisma.$transaction(async (tx) => {
            await tx.orden_trabajo.update({
                where: { id_ot },
                data: {
                    id_tecnico: dto.id_tecnico,
                    estado: 'ASIGNADA',
                    fecha_programada: dto.bloque_horario
                        ? new Date(dto.bloque_horario)
                        : ot.fecha_programada,
                },
            });
            await tx.historial_ot.create({
                data: {
                    id_ot,
                    id_usuario: userId,
                    estado_anterior: 'PENDIENTE',
                    estado_nuevo: 'ASIGNADA',
                    fecha_hora: new Date(),
                },
            });
            await tx.log_auditoria.create({
                data: {
                    id_usuario: userId,
                    accion: 'ASIGNAR_TECNICO',
                    entidad_afectada: 'orden_trabajo',
                    id_entidad_afectada: id_ot,
                    fecha_hora: new Date(),
                },
            });
        });
        return this.obtenerOT(id_ot, id_empresa);
    }
    async actualizarEstado(id_ot, dto, userId, id_empresa) {
        const ot = await this.prisma.orden_trabajo.findFirst({ where: { id_ot, id_empresa } });
        if (!ot)
            throw new NotFoundException('OT no encontrada');
        const transicionesValidas = TRANSICIONES_VALIDAS[ot.estado] ?? [];
        if (!transicionesValidas.includes(dto.estado)) {
            throw new BadRequestException(`Transición de estado no permitida: ${ot.estado} → ${dto.estado}`);
        }
        if (dto.estado === 'CANCELADA' && !dto.obs_cancelacion) {
            throw new BadRequestException('Se requiere motivo de cancelación');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.orden_trabajo.update({
                where: { id_ot },
                data: {
                    estado: dto.estado,
                    ...(dto.estado === 'CANCELADA' && { observaciones: dto.obs_cancelacion }),
                    ...(dto.estado === 'COMPLETADA' && { fecha_completada: new Date() }),
                },
            });
            await tx.historial_ot.create({
                data: {
                    id_ot,
                    id_usuario: userId,
                    estado_anterior: ot.estado,
                    estado_nuevo: dto.estado,
                    observaciones: dto.obs_cancelacion ?? null,
                    fecha_hora: new Date(),
                },
            });
            await tx.log_auditoria.create({
                data: {
                    id_usuario: userId,
                    accion: 'ACTUALIZAR_ESTADO_OT',
                    entidad_afectada: 'orden_trabajo',
                    id_entidad_afectada: id_ot,
                    valor_anterior: { estado: ot.estado },
                    valor_nuevo: { estado: dto.estado },
                    fecha_hora: new Date(),
                },
            });
        });
        return this.obtenerOT(id_ot, id_empresa);
    }
    async cerrarOT(id_ot, dto, userId, id_empresa) {
        const ot = await this.prisma.orden_trabajo.findFirst({ where: { id_ot, id_empresa } });
        if (!ot)
            throw new NotFoundException('OT no encontrada');
        if (ot.estado !== 'EN_CURSO') {
            throw new BadRequestException('Solo se pueden cerrar OT en estado EN_CURSO');
        }
        if (ot.id_tecnico !== userId) {
            throw new ForbiddenException('Solo el técnico asignado puede cerrar esta OT');
        }
        await this.prisma.$transaction(async (tx) => {
            await tx.evidencia_foto.createMany({
                data: dto.fotos.map((f) => ({
                    id_ot,
                    url_cloudinary: f.url_cloudinary,
                    formato: f.formato.slice(0, 5),
                    tamano_kb: f.tamano_kb,
                })),
            });
            for (const material of dto.materiales) {
                const tipo = await tx.tipo_equipo.findUnique({
                    where: { id_tipo_equipo: material.id_tipo_equipo },
                });
                const stock = await tx.stock_consumible.findFirst({
                    where: { id_tipo_equipo: material.id_tipo_equipo },
                });
                if (!stock || Number(stock.cantidad_disponible) < material.cantidad) {
                    throw new BadRequestException(`Stock insuficiente para ${tipo?.nombre ?? String(material.id_tipo_equipo)}`);
                }
                await tx.stock_consumible.update({
                    where: { id_stock: stock.id_stock },
                    data: { cantidad_disponible: { decrement: material.cantidad } },
                });
            }
            if (dto.materiales.length > 0) {
                await tx.uso_material_ot.createMany({
                    data: dto.materiales.map((m) => ({
                        id_ot,
                        id_tipo_equipo: m.id_tipo_equipo,
                        cantidad: m.cantidad,
                    })),
                });
            }
            await tx.llamada_cortes.create({
                data: {
                    id_ot,
                    resultado: dto.resultado_llamada,
                    observaciones: dto.obs_llamada ?? null,
                },
            });
            await tx.orden_trabajo.update({
                where: { id_ot },
                data: {
                    estado: 'COMPLETADA',
                    fecha_completada: new Date(),
                    potencia_optica_dbm: dto.potencia_optica_dbm,
                    resuelto_remotamente: dto.resuelto_remotamente ?? false,
                },
            });
            await tx.historial_ot.create({
                data: {
                    id_ot,
                    id_usuario: userId,
                    estado_anterior: 'EN_CURSO',
                    estado_nuevo: 'COMPLETADA',
                },
            });
            await tx.log_auditoria.create({
                data: {
                    id_usuario: userId,
                    accion: 'CERRAR_OT',
                    entidad_afectada: 'orden_trabajo',
                    id_entidad_afectada: id_ot,
                },
            });
        });
        const otActualizada = await this.prisma.orden_trabajo.findUnique({
            where: { id_ot },
            include: {
                cliente: { select: { id_cliente: true, nombre_completo: true, rut: true, es_conflictivo: true } },
                tecnico: { select: { id_usuario: true, nombre_completo: true, nombre_usuario: true } },
                direccion: { select: { direccion_completa: true, comuna: true } },
                fotos: true,
                materiales: { include: { tipo_equipo: { select: { nombre: true } } } },
                llamada: true,
            },
        });
        const advertencia_potencia = dto.potencia_optica_dbm < -24 || dto.potencia_optica_dbm > -19;
        return { ...otActualizada, advertencia_potencia };
    }
    async obtenerMateriales(id_empresa) {
        const tipos = await this.prisma.tipo_equipo.findMany({
            where: { id_empresa, activo: true },
            include: {
                stock: {
                    select: { id_stock: true, cantidad_disponible: true, umbral_minimo: true },
                    take: 1,
                },
            },
        });
        return tipos.map((t) => ({
            id_tipo_equipo: t.id_tipo_equipo,
            nombre: t.nombre,
            categoria: t.categoria,
            requiere_serie_individual: t.requiere_serie_individual ?? false,
            stock: t.stock[0]
                ? {
                    cantidad_disponible: Number(t.stock[0].cantidad_disponible),
                    umbral_minimo: t.stock[0].umbral_minimo
                        ? Number(t.stock[0].umbral_minimo)
                        : null,
                }
                : null,
        }));
    }
};
OrdenesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], OrdenesService);
export { OrdenesService };
//# sourceMappingURL=ordenes.service.js.map