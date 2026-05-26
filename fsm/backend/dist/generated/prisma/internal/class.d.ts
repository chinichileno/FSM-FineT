import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get empresa(): Prisma.empresaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usuario(): Prisma.usuarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get rol(): Prisma.rolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usuario_rol(): Prisma.usuario_rolDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get log_auditoria(): Prisma.log_auditoriaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cliente(): Prisma.clienteDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get direccion_servicio(): Prisma.direccion_servicioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get plan(): Prisma.planDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get contrato(): Prisma.contratoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get factura(): Prisma.facturaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get pago(): Prisma.pagoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get ticket(): Prisma.ticketDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get plantilla_notificacion(): Prisma.plantilla_notificacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get log_notificacion(): Prisma.log_notificacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tipo_equipo(): Prisma.tipo_equipoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get unidad_equipo(): Prisma.unidad_equipoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get caja_nap(): Prisma.caja_napDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orden_trabajo(): Prisma.orden_trabajoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get historial_ot(): Prisma.historial_otDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get categoria_falla(): Prisma.categoria_fallaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get uso_material_ot(): Prisma.uso_material_otDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get evidencia_foto(): Prisma.evidencia_fotoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get llamada_cortes(): Prisma.llamada_cortesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get lista_negra(): Prisma.lista_negraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get bodega(): Prisma.bodegaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get stock_consumible(): Prisma.stock_consumibleDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get proveedor(): Prisma.proveedorDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get orden_ingreso(): Prisma.orden_ingresoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get detalle_orden_ingreso(): Prisma.detalle_orden_ingresoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get historial_estado_equipo(): Prisma.historial_estado_equipoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get movimiento_inventario(): Prisma.movimiento_inventarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get prestamo_externo(): Prisma.prestamo_externoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get baja_equipo(): Prisma.baja_equipoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get sesion_portal(): Prisma.sesion_portalDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get intento_fallido(): Prisma.intento_fallidoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get punto_cobertura(): Prisma.punto_coberturaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get consentimiento_cookies(): Prisma.consentimiento_cookiesDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get configuracion_seo(): Prisma.configuracion_seoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tecnico_externo(): Prisma.tecnico_externoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get olt(): Prisma.oltDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get tarjeta_pon(): Prisma.tarjeta_ponDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mufa(): Prisma.mufaDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get puerto_nap(): Prisma.puerto_napDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get monitoreo_ont(): Prisma.monitoreo_ontDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get historial_conexion_ont(): Prisma.historial_conexion_ontDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get prospecto(): Prisma.prospectoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get cotizacion(): Prisma.cotizacionDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get canal_whatsapp(): Prisma.canal_whatsappDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get plantilla_whatsapp(): Prisma.plantilla_whatsappDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mensaje_whatsapp(): Prisma.mensaje_whatsappDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get conversacion_bot(): Prisma.conversacion_botDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mensaje_bot(): Prisma.mensaje_botDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get credenciales_tvip(): Prisma.credenciales_tvipDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get transferencia_equipo(): Prisma.transferencia_equipoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
