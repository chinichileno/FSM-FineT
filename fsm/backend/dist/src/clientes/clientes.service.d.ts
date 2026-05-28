import { PrismaService } from '../prisma/prisma.service.js';
import { RegistrarClienteDto } from './dto/registrar-cliente.dto.js';
import { EditarClienteDto } from './dto/editar-cliente.dto.js';
import { MarcarConflictivoDto } from './dto/marcar-conflictivo.dto.js';
export declare class ClientesService {
    private prisma;
    constructor(prisma: PrismaService);
    registrarCliente(dto: RegistrarClienteDto, userId: number, id_empresa: number): Promise<{
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
    }>;
    consultarPorRut(rut: string, id_empresa: number): Promise<{
        cliente: {
            id_cliente: number;
            rut: string | null;
            nombre_completo: string;
            email: string | null;
            telefono: string | null;
            estado: string;
            es_conflictivo: boolean;
            obs_conflictivo: string | null;
            fecha_creacion: Date;
            direccion_principal: {
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                id_cliente: number | null;
                es_principal: boolean;
                id_direccion: number;
            };
            contrato_activo: {
                plan: {
                    id_empresa: number | null;
                    descripcion: string | null;
                    activo: boolean;
                    id_plan: number;
                    nombre_comercial: string;
                    tipo_plan: string;
                    tipo_cliente: string;
                    velocidad_mbps: number | null;
                    precio_mensual: import("@prisma/client-runtime-utils").Decimal;
                } | null;
            } & {
                id_empresa: number | null;
                id_plan: number | null;
                estado: string;
                id_cliente: number | null;
                id_contrato: number;
                fecha_inicio: Date;
                dia_vencimiento: number;
                fecha_suspension: Date | null;
            };
        };
        historial_ot: {
            fecha_creacion: Date;
            estado: string;
            id_ot: number;
            tipo_ot: string;
            prioridad: string;
            fecha_completada: Date | null;
        }[];
    }>;
    editarFicha(id_cliente: number, dto: EditarClienteDto, userId: number): Promise<({
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
    }) | null>;
    marcarConflictivo(id_cliente: number, dto: MarcarConflictivoDto, userId: number): Promise<void>;
    listarClientes(id_empresa: number, page?: number, limit?: number): Promise<{
        data: ({
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
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    listarPlanes(id_empresa: number): Promise<{
        id_plan: number;
        nombre_comercial: string;
        velocidad_mbps: number | null;
        precio_mensual: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
}
