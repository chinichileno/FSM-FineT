import { PrismaService } from '../prisma/prisma.service.js';
import { CrearOtDto } from './dto/crear-ot.dto.js';
import { AsignarTecnicoDto } from './dto/asignar-tecnico.dto.js';
import { ActualizarEstadoDto } from './dto/actualizar-estado.dto.js';
export declare class OrdenesService {
    private prisma;
    constructor(prisma: PrismaService);
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
}
