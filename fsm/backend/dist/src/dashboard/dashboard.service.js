var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async indicadoresDelDia(id_empresa) {
        const hoy = new Date();
        hoy.setHours(0, 0, 0, 0);
        const manana = new Date(hoy);
        manana.setDate(manana.getDate() + 1);
        const [otsPorEstado, criticas, tecnicosRaw, ultimasCompletadas, totalClientes, resueltasRemoto,] = await Promise.all([
            this.prisma.orden_trabajo.groupBy({
                by: ['estado'],
                where: { id_empresa },
                _count: { estado: true },
            }),
            this.prisma.orden_trabajo.count({
                where: {
                    id_empresa,
                    prioridad: 'CRITICA',
                    estado: { notIn: ['COMPLETADA', 'CANCELADA'] },
                },
            }),
            this.prisma.usuario.findMany({
                where: {
                    id_empresa,
                    activo: true,
                    roles: { some: { rol: { nombre_rol: 'TECNICO' } } },
                },
                select: { id_usuario: true, nombre_completo: true },
            }),
            this.prisma.orden_trabajo.findMany({
                where: {
                    id_empresa,
                    estado: 'COMPLETADA',
                    fecha_completada: { gte: hoy, lt: manana },
                },
                orderBy: { fecha_completada: 'desc' },
                take: 5,
                include: {
                    cliente: { select: { nombre_completo: true } },
                    tecnico: { select: { nombre_completo: true } },
                },
            }),
            this.prisma.cliente.count({
                where: { id_empresa, estado: 'ACTIVO' },
            }),
            this.prisma.orden_trabajo.count({
                where: {
                    id_empresa,
                    estado: 'COMPLETADA',
                    resuelto_remotamente: true,
                    fecha_completada: { gte: hoy, lt: manana },
                },
            }),
        ]);
        const ot_por_estado = {
            PENDIENTE: 0,
            ASIGNADA: 0,
            EN_CURSO: 0,
            COMPLETADA: 0,
            CANCELADA: 0,
        };
        for (const row of otsPorEstado) {
            ot_por_estado[row.estado] = row._count.estado;
        }
        const tecnicos = await Promise.all(tecnicosRaw.map(async (t) => {
            const [ot_activas, en_cursoCount] = await Promise.all([
                this.prisma.orden_trabajo.count({
                    where: {
                        id_tecnico: t.id_usuario,
                        estado: { in: ['ASIGNADA', 'EN_CURSO'] },
                    },
                }),
                this.prisma.orden_trabajo.count({
                    where: { id_tecnico: t.id_usuario, estado: 'EN_CURSO' },
                }),
            ]);
            return {
                id_usuario: t.id_usuario,
                nombre_completo: t.nombre_completo,
                ot_activas,
                en_curso: en_cursoCount > 0,
            };
        }));
        return {
            ot_por_estado,
            ot_criticas_activas: criticas,
            tecnicos,
            ultimas_completadas: ultimasCompletadas,
            total_clientes_activos: totalClientes,
            resueltas_remotamente_hoy: resueltasRemoto,
            fecha_actualizacion: new Date(),
        };
    }
    async datosPorEmpresa(id_empresa) {
        const [empresa, totalClientes, otActivas] = await Promise.all([
            this.prisma.empresa.findUnique({ where: { id_empresa } }),
            this.prisma.cliente.count({ where: { id_empresa } }),
            this.prisma.orden_trabajo.count({
                where: {
                    id_empresa,
                    estado: { notIn: ['COMPLETADA', 'CANCELADA'] },
                },
            }),
        ]);
        return { empresa, total_clientes: totalClientes, ot_activas: otActivas };
    }
    async listarEmpresas() {
        return this.prisma.empresa.findMany({
            select: { id_empresa: true, nombre: true, rut_empresa: true },
            orderBy: { nombre: 'asc' },
        });
    }
};
DashboardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map