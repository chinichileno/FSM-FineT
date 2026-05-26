import { ClientesService } from './clientes.service.js';
import { RegistrarClienteDto } from './dto/registrar-cliente.dto.js';
import { EditarClienteDto } from './dto/editar-cliente.dto.js';
import { MarcarConflictivoDto } from './dto/marcar-conflictivo.dto.js';
export declare class ClientesController {
    private clientesService;
    constructor(clientesService: ClientesService);
    listarClientes(user: {
        id_empresa: number;
    }, page?: number, limit?: number): Promise<{
        data: ({
            direcciones: {
                id_cliente: number | null;
                id_direccion: number;
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                es_principal: boolean;
            }[];
        } & {
            id_empresa: number | null;
            nombre_completo: string;
            email: string | null;
            fecha_creacion: Date;
            id_cliente: number;
            rut: string | null;
            telefono: string | null;
            password_portal_hash: string | null;
            estado: string;
            es_conflictivo: boolean;
            obs_conflictivo: string | null;
            importado_masivo: boolean;
        })[];
        total: number;
        page: number;
        limit: number;
    }>;
    listarPlanes(user: {
        id_empresa: number;
    }): Promise<{
        id_plan: number;
        nombre_comercial: string;
        velocidad_mbps: number | null;
        precio_mensual: import("@prisma/client-runtime-utils").Decimal;
    }[]>;
    consultarPorRut(rut: string, user: {
        id_empresa: number;
    }): Promise<{
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
                id_cliente: number | null;
                id_direccion: number;
                direccion_completa: string;
                comuna: string;
                ciudad: string | null;
                es_principal: boolean;
            };
            contrato_activo: {
                plan: {
                    id_empresa: number | null;
                    activo: boolean;
                    descripcion: string | null;
                    id_plan: number;
                    nombre_comercial: string;
                    tipo_plan: string;
                    tipo_cliente: string;
                    velocidad_mbps: number | null;
                    precio_mensual: import("@prisma/client-runtime-utils").Decimal;
                } | null;
            } & {
                id_empresa: number | null;
                id_cliente: number | null;
                estado: string;
                id_plan: number | null;
                id_contrato: number;
                fecha_inicio: Date;
                dia_vencimiento: number;
                fecha_suspension: Date | null;
            };
        };
        historial_ot: {
            fecha_creacion: Date;
            estado: string;
            prioridad: string;
            id_ot: number;
            tipo_ot: string;
            fecha_completada: Date | null;
        }[];
    }>;
    registrarCliente(dto: RegistrarClienteDto, user: {
        userId: number;
        id_empresa: number;
    }): Promise<{
        direcciones: {
            id_cliente: number | null;
            id_direccion: number;
            direccion_completa: string;
            comuna: string;
            ciudad: string | null;
            es_principal: boolean;
        }[];
    } & {
        id_empresa: number | null;
        nombre_completo: string;
        email: string | null;
        fecha_creacion: Date;
        id_cliente: number;
        rut: string | null;
        telefono: string | null;
        password_portal_hash: string | null;
        estado: string;
        es_conflictivo: boolean;
        obs_conflictivo: string | null;
        importado_masivo: boolean;
    }>;
    editarFicha(id: string, dto: EditarClienteDto, user: {
        userId: number;
    }): Promise<({
        direcciones: {
            id_cliente: number | null;
            id_direccion: number;
            direccion_completa: string;
            comuna: string;
            ciudad: string | null;
            es_principal: boolean;
        }[];
    } & {
        id_empresa: number | null;
        nombre_completo: string;
        email: string | null;
        fecha_creacion: Date;
        id_cliente: number;
        rut: string | null;
        telefono: string | null;
        password_portal_hash: string | null;
        estado: string;
        es_conflictivo: boolean;
        obs_conflictivo: string | null;
        importado_masivo: boolean;
    }) | null>;
    marcarConflictivo(id: string, dto: MarcarConflictivoDto, user: {
        userId: number;
    }): Promise<void>;
}
