import { DashboardService } from './dashboard.service.js';
interface UserPayload {
    userId: number;
    id_empresa: number;
    rol: string;
}
export declare class DashboardController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    indicadores(user: UserPayload): Promise<{
        ot_por_estado: Record<string, number>;
        ot_criticas_activas: number;
        tecnicos: {
            id_usuario: number;
            nombre_completo: string;
            ot_activas: number;
            en_curso: boolean;
        }[];
        ultimas_completadas: ({
            cliente: {
                nombre_completo: string;
            } | null;
            tecnico: {
                nombre_completo: string;
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
        total_clientes_activos: number;
        resueltas_remotamente_hoy: number;
        fecha_actualizacion: Date;
    }>;
    listarEmpresas(): Promise<{
        id_empresa: number;
        rut_empresa: string | null;
        nombre: string;
    }[]>;
    datosPorEmpresa(id: string): Promise<{
        empresa: {
            id_empresa: number;
            rut_empresa: string | null;
            nombre: string;
            esquema_db: string | null;
        } | null;
        total_clientes: number;
        ot_activas: number;
    }>;
}
export {};
