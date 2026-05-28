import { PrismaService } from '../prisma/prisma.service.js';
import { CrearOtDto } from './dto/crear-ot.dto.js';
import { AsignarTecnicoDto } from './dto/asignar-tecnico.dto.js';
import { ActualizarEstadoDto } from './dto/actualizar-estado.dto.js';
import { CerrarOtDto } from './dto/cerrar-ot.dto.js';
import { DashboardGateway } from '../dashboard/dashboard.gateway.js';
export declare class OrdenesService {
    private prisma;
    private dashboardGateway;
    constructor(prisma: PrismaService, dashboardGateway: DashboardGateway);
    crearOT(dto: CrearOtDto, userId: number, id_empresa: number): Promise<({
        cliente: {
            nombre_completo: string;
            rut: string | null;
            es_conflictivo: boolean;
            id_cliente: number;
        } | null;
        tecnico: {
            id_usuario: number;
            nombre_usuario: string | null;
            nombre_completo: string;
        } | null;
        direccion: {
            direccion_completa: string;
            comuna: string;
        } | null;
    } & {
        id_empresa: number | null;
        fecha_creacion: Date;
        estado: string;
        id_cliente: number | null;
        id_direccion: number | null;
        id_ot: number;
        id_tecnico: number | null;
        id_tecnico_externo: number | null;
        id_ticket: number | null;
        tipo_ot: string;
        prioridad: string;
        fecha_programada: Date | null;
        fecha_completada: Date | null;
        potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones: string | null;
        resuelto_remotamente: boolean;
    }) | null>;
    listarOT(id_empresa: number, filtros: {
        estado?: string;
        tipo_ot?: string;
        prioridad?: string;
        id_tecnico?: number;
        fecha_desde?: string;
        fecha_hasta?: string;
        page?: number;
        limit?: number;
    }): Promise<{
        data: ({
            cliente: {
                nombre_completo: string;
                rut: string | null;
                es_conflictivo: boolean;
                id_cliente: number;
            } | null;
            tecnico: {
                id_usuario: number;
                nombre_usuario: string | null;
                nombre_completo: string;
            } | null;
            direccion: {
                direccion_completa: string;
                comuna: string;
            } | null;
        } & {
            id_empresa: number | null;
            fecha_creacion: Date;
            estado: string;
            id_cliente: number | null;
            id_direccion: number | null;
            id_ot: number;
            id_tecnico: number | null;
            id_tecnico_externo: number | null;
            id_ticket: number | null;
            tipo_ot: string;
            prioridad: string;
            fecha_programada: Date | null;
            fecha_completada: Date | null;
            potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
            observaciones: string | null;
            resuelto_remotamente: boolean;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    obtenerOT(id_ot: number, id_empresa: number): Promise<{
        cliente: ({
            direcciones: {
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                id_cliente: number | null;
                es_principal: boolean;
                id_direccion: number;
            }[];
        } & {
            id_empresa: number | null;
            email: string | null;
            nombre_completo: string;
            fecha_creacion: Date;
            rut: string | null;
            telefono: string | null;
            estado: string;
            es_conflictivo: boolean;
            obs_conflictivo: string | null;
            id_cliente: number;
            password_portal_hash: string | null;
            importado_masivo: boolean;
        }) | null;
        tecnico: {
            id_usuario: number;
            nombre_usuario: string | null;
            nombre_completo: string;
        } | null;
        direccion: {
            direccion_completa: string;
            comuna: string;
        } | null;
        historial: {
            id_usuario: number | null;
            fecha_hora: Date;
            id_ot: number | null;
            observaciones: string | null;
            id_historial_ot: bigint;
            estado_anterior: string | null;
            estado_nuevo: string | null;
        }[];
    } & {
        id_empresa: number | null;
        fecha_creacion: Date;
        estado: string;
        id_cliente: number | null;
        id_direccion: number | null;
        id_ot: number;
        id_tecnico: number | null;
        id_tecnico_externo: number | null;
        id_ticket: number | null;
        tipo_ot: string;
        prioridad: string;
        fecha_programada: Date | null;
        fecha_completada: Date | null;
        potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones: string | null;
        resuelto_remotamente: boolean;
    }>;
    listarTecnicos(id_empresa: number): Promise<{
        ot_activas_hoy: number;
        id_usuario: number;
        nombre_usuario: string | null;
        nombre_completo: string;
    }[]>;
    asignarTecnico(id_ot: number, dto: AsignarTecnicoDto, userId: number, id_empresa: number): Promise<{
        cliente: ({
            direcciones: {
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                id_cliente: number | null;
                es_principal: boolean;
                id_direccion: number;
            }[];
        } & {
            id_empresa: number | null;
            email: string | null;
            nombre_completo: string;
            fecha_creacion: Date;
            rut: string | null;
            telefono: string | null;
            estado: string;
            es_conflictivo: boolean;
            obs_conflictivo: string | null;
            id_cliente: number;
            password_portal_hash: string | null;
            importado_masivo: boolean;
        }) | null;
        tecnico: {
            id_usuario: number;
            nombre_usuario: string | null;
            nombre_completo: string;
        } | null;
        direccion: {
            direccion_completa: string;
            comuna: string;
        } | null;
        historial: {
            id_usuario: number | null;
            fecha_hora: Date;
            id_ot: number | null;
            observaciones: string | null;
            id_historial_ot: bigint;
            estado_anterior: string | null;
            estado_nuevo: string | null;
        }[];
    } & {
        id_empresa: number | null;
        fecha_creacion: Date;
        estado: string;
        id_cliente: number | null;
        id_direccion: number | null;
        id_ot: number;
        id_tecnico: number | null;
        id_tecnico_externo: number | null;
        id_ticket: number | null;
        tipo_ot: string;
        prioridad: string;
        fecha_programada: Date | null;
        fecha_completada: Date | null;
        potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones: string | null;
        resuelto_remotamente: boolean;
    }>;
    actualizarEstado(id_ot: number, dto: ActualizarEstadoDto, userId: number, id_empresa: number): Promise<{
        cliente: ({
            direcciones: {
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                id_cliente: number | null;
                es_principal: boolean;
                id_direccion: number;
            }[];
        } & {
            id_empresa: number | null;
            email: string | null;
            nombre_completo: string;
            fecha_creacion: Date;
            rut: string | null;
            telefono: string | null;
            estado: string;
            es_conflictivo: boolean;
            obs_conflictivo: string | null;
            id_cliente: number;
            password_portal_hash: string | null;
            importado_masivo: boolean;
        }) | null;
        tecnico: {
            id_usuario: number;
            nombre_usuario: string | null;
            nombre_completo: string;
        } | null;
        direccion: {
            direccion_completa: string;
            comuna: string;
        } | null;
        historial: {
            id_usuario: number | null;
            fecha_hora: Date;
            id_ot: number | null;
            observaciones: string | null;
            id_historial_ot: bigint;
            estado_anterior: string | null;
            estado_nuevo: string | null;
        }[];
    } & {
        id_empresa: number | null;
        fecha_creacion: Date;
        estado: string;
        id_cliente: number | null;
        id_direccion: number | null;
        id_ot: number;
        id_tecnico: number | null;
        id_tecnico_externo: number | null;
        id_ticket: number | null;
        tipo_ot: string;
        prioridad: string;
        fecha_programada: Date | null;
        fecha_completada: Date | null;
        potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
        observaciones: string | null;
        resuelto_remotamente: boolean;
    }>;
    cerrarOT(id_ot: number, dto: CerrarOtDto, userId: number, id_empresa: number): Promise<{
        advertencia_potencia: boolean;
        cliente?: {
            nombre_completo: string;
            rut: string | null;
            es_conflictivo: boolean;
            id_cliente: number;
        } | null | undefined;
        tecnico?: {
            id_usuario: number;
            nombre_usuario: string | null;
            nombre_completo: string;
        } | null | undefined;
        direccion?: {
            direccion_completa: string;
            comuna: string;
        } | null | undefined;
        materiales?: ({
            tipo_equipo: {
                nombre: string;
            } | null;
        } & {
            id_ot: number | null;
            id_tipo_equipo: number | null;
            cantidad: import("@prisma/client-runtime-utils").Decimal;
            id_uso: number;
            id_unidad: number | null;
        })[] | undefined;
        fotos?: {
            id_ot: number | null;
            url_cloudinary: string;
            formato: string | null;
            tamano_kb: number | null;
            id_foto: number;
            fecha_subida: Date;
        }[] | undefined;
        llamada?: {
            id_ot: number | null;
            observaciones: string | null;
            id_llamada: number;
            resultado: string;
            fecha_llamada: Date;
        } | null | undefined;
        id_empresa?: number | null | undefined;
        fecha_creacion?: Date | undefined;
        estado?: string | undefined;
        id_cliente?: number | null | undefined;
        id_direccion?: number | null | undefined;
        id_ot?: number | undefined;
        id_tecnico?: number | null | undefined;
        id_tecnico_externo?: number | null | undefined;
        id_ticket?: number | null | undefined;
        tipo_ot?: string | undefined;
        prioridad?: string | undefined;
        fecha_programada?: Date | null | undefined;
        fecha_completada?: Date | null | undefined;
        potencia_optica_dbm?: import("@prisma/client-runtime-utils").Decimal | null | undefined;
        observaciones?: string | null | undefined;
        resuelto_remotamente?: boolean | undefined;
    }>;
    historialFallas(id_cliente: number, id_empresa: number): Promise<{
        historial: ({
            ticket: ({
                categoria: {
                    nombre: string;
                    id_categoria: number;
                    sla_horas: number | null;
                };
            } & {
                id_empresa: number | null;
                descripcion: string | null;
                fecha_creacion: Date;
                id_categoria: number;
                estado: string;
                id_cliente: number | null;
                id_ticket: number;
                prioridad: string;
                resuelto_remotamente: boolean;
                id_usuario_asignado: number | null;
                id_conversacion_bot: number | null;
                codigo_seguimiento: string | null;
                fecha_cierre: Date | null;
                origen: string | null;
            }) | null;
            historial: {
                id_usuario: number | null;
                fecha_hora: Date;
                id_ot: number | null;
                observaciones: string | null;
                id_historial_ot: bigint;
                estado_anterior: string | null;
                estado_nuevo: string | null;
            }[];
            materiales: ({
                tipo_equipo: {
                    nombre: string;
                    categoria: string | null;
                } | null;
            } & {
                id_ot: number | null;
                id_tipo_equipo: number | null;
                cantidad: import("@prisma/client-runtime-utils").Decimal;
                id_uso: number;
                id_unidad: number | null;
            })[];
            fotos: {
                url_cloudinary: string;
                formato: string | null;
            }[];
            llamada: {
                id_ot: number | null;
                observaciones: string | null;
                id_llamada: number;
                resultado: string;
                fecha_llamada: Date;
            } | null;
        } & {
            id_empresa: number | null;
            fecha_creacion: Date;
            estado: string;
            id_cliente: number | null;
            id_direccion: number | null;
            id_ot: number;
            id_tecnico: number | null;
            id_tecnico_externo: number | null;
            id_ticket: number | null;
            tipo_ot: string;
            prioridad: string;
            fecha_programada: Date | null;
            fecha_completada: Date | null;
            potencia_optica_dbm: import("@prisma/client-runtime-utils").Decimal | null;
            observaciones: string | null;
            resuelto_remotamente: boolean;
        })[];
        categoria_frecuente: {
            id_categoria: number;
            nombre: string;
            sla_horas: number | null;
        } | null;
        estadisticas: {
            total_reparaciones: number;
            reparaciones_completadas: number;
            tiempo_promedio_dias: number | null;
            potencia_promedio_dbm: number | null;
        };
    }>;
    obtenerMateriales(id_empresa: number): Promise<{
        id_tipo_equipo: number;
        nombre: string;
        categoria: string | null;
        requiere_serie_individual: boolean;
        stock: {
            cantidad_disponible: number;
            umbral_minimo: number | null;
        } | null;
    }[]>;
}
