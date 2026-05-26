import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly empresa: "empresa";
    readonly usuario: "usuario";
    readonly rol: "rol";
    readonly usuario_rol: "usuario_rol";
    readonly log_auditoria: "log_auditoria";
    readonly cliente: "cliente";
    readonly direccion_servicio: "direccion_servicio";
    readonly plan: "plan";
    readonly contrato: "contrato";
    readonly factura: "factura";
    readonly pago: "pago";
    readonly ticket: "ticket";
    readonly plantilla_notificacion: "plantilla_notificacion";
    readonly log_notificacion: "log_notificacion";
    readonly tipo_equipo: "tipo_equipo";
    readonly unidad_equipo: "unidad_equipo";
    readonly caja_nap: "caja_nap";
    readonly orden_trabajo: "orden_trabajo";
    readonly historial_ot: "historial_ot";
    readonly categoria_falla: "categoria_falla";
    readonly uso_material_ot: "uso_material_ot";
    readonly evidencia_foto: "evidencia_foto";
    readonly llamada_cortes: "llamada_cortes";
    readonly lista_negra: "lista_negra";
    readonly bodega: "bodega";
    readonly stock_consumible: "stock_consumible";
    readonly proveedor: "proveedor";
    readonly orden_ingreso: "orden_ingreso";
    readonly detalle_orden_ingreso: "detalle_orden_ingreso";
    readonly historial_estado_equipo: "historial_estado_equipo";
    readonly movimiento_inventario: "movimiento_inventario";
    readonly prestamo_externo: "prestamo_externo";
    readonly baja_equipo: "baja_equipo";
    readonly sesion_portal: "sesion_portal";
    readonly intento_fallido: "intento_fallido";
    readonly punto_cobertura: "punto_cobertura";
    readonly consentimiento_cookies: "consentimiento_cookies";
    readonly configuracion_seo: "configuracion_seo";
    readonly tecnico_externo: "tecnico_externo";
    readonly olt: "olt";
    readonly tarjeta_pon: "tarjeta_pon";
    readonly mufa: "mufa";
    readonly puerto_nap: "puerto_nap";
    readonly monitoreo_ont: "monitoreo_ont";
    readonly historial_conexion_ont: "historial_conexion_ont";
    readonly prospecto: "prospecto";
    readonly cotizacion: "cotizacion";
    readonly canal_whatsapp: "canal_whatsapp";
    readonly plantilla_whatsapp: "plantilla_whatsapp";
    readonly mensaje_whatsapp: "mensaje_whatsapp";
    readonly conversacion_bot: "conversacion_bot";
    readonly mensaje_bot: "mensaje_bot";
    readonly credenciales_tvip: "credenciales_tvip";
    readonly transferencia_equipo: "transferencia_equipo";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "empresa" | "usuario" | "rol" | "usuario_rol" | "log_auditoria" | "cliente" | "direccion_servicio" | "plan" | "contrato" | "factura" | "pago" | "ticket" | "plantilla_notificacion" | "log_notificacion" | "tipo_equipo" | "unidad_equipo" | "caja_nap" | "orden_trabajo" | "historial_ot" | "categoria_falla" | "uso_material_ot" | "evidencia_foto" | "llamada_cortes" | "lista_negra" | "bodega" | "stock_consumible" | "proveedor" | "orden_ingreso" | "detalle_orden_ingreso" | "historial_estado_equipo" | "movimiento_inventario" | "prestamo_externo" | "baja_equipo" | "sesion_portal" | "intento_fallido" | "punto_cobertura" | "consentimiento_cookies" | "configuracion_seo" | "tecnico_externo" | "olt" | "tarjeta_pon" | "mufa" | "puerto_nap" | "monitoreo_ont" | "historial_conexion_ont" | "prospecto" | "cotizacion" | "canal_whatsapp" | "plantilla_whatsapp" | "mensaje_whatsapp" | "conversacion_bot" | "mensaje_bot" | "credenciales_tvip" | "transferencia_equipo";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        empresa: {
            payload: Prisma.$empresaPayload<ExtArgs>;
            fields: Prisma.empresaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.empresaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.empresaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                findFirst: {
                    args: Prisma.empresaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.empresaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                findMany: {
                    args: Prisma.empresaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>[];
                };
                create: {
                    args: Prisma.empresaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                createMany: {
                    args: Prisma.empresaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.empresaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>[];
                };
                delete: {
                    args: Prisma.empresaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                update: {
                    args: Prisma.empresaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                deleteMany: {
                    args: Prisma.empresaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.empresaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.empresaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>[];
                };
                upsert: {
                    args: Prisma.empresaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$empresaPayload>;
                };
                aggregate: {
                    args: Prisma.EmpresaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmpresa>;
                };
                groupBy: {
                    args: Prisma.empresaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmpresaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.empresaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmpresaCountAggregateOutputType> | number;
                };
            };
        };
        usuario: {
            payload: Prisma.$usuarioPayload<ExtArgs>;
            fields: Prisma.usuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findFirst: {
                    args: Prisma.usuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findMany: {
                    args: Prisma.usuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                create: {
                    args: Prisma.usuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                createMany: {
                    args: Prisma.usuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                delete: {
                    args: Prisma.usuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                update: {
                    args: Prisma.usuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.usuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                upsert: {
                    args: Prisma.usuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.usuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        rol: {
            payload: Prisma.$rolPayload<ExtArgs>;
            fields: Prisma.rolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.rolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.rolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                findFirst: {
                    args: Prisma.rolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.rolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                findMany: {
                    args: Prisma.rolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>[];
                };
                create: {
                    args: Prisma.rolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                createMany: {
                    args: Prisma.rolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.rolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>[];
                };
                delete: {
                    args: Prisma.rolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                update: {
                    args: Prisma.rolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                deleteMany: {
                    args: Prisma.rolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.rolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.rolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>[];
                };
                upsert: {
                    args: Prisma.rolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$rolPayload>;
                };
                aggregate: {
                    args: Prisma.RolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRol>;
                };
                groupBy: {
                    args: Prisma.rolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.rolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RolCountAggregateOutputType> | number;
                };
            };
        };
        usuario_rol: {
            payload: Prisma.$usuario_rolPayload<ExtArgs>;
            fields: Prisma.usuario_rolFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuario_rolFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuario_rolFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                findFirst: {
                    args: Prisma.usuario_rolFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuario_rolFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                findMany: {
                    args: Prisma.usuario_rolFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>[];
                };
                create: {
                    args: Prisma.usuario_rolCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                createMany: {
                    args: Prisma.usuario_rolCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usuario_rolCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>[];
                };
                delete: {
                    args: Prisma.usuario_rolDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                update: {
                    args: Prisma.usuario_rolUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                deleteMany: {
                    args: Prisma.usuario_rolDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuario_rolUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usuario_rolUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>[];
                };
                upsert: {
                    args: Prisma.usuario_rolUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuario_rolPayload>;
                };
                aggregate: {
                    args: Prisma.Usuario_rolAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario_rol>;
                };
                groupBy: {
                    args: Prisma.usuario_rolGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuario_rolGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuario_rolCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Usuario_rolCountAggregateOutputType> | number;
                };
            };
        };
        log_auditoria: {
            payload: Prisma.$log_auditoriaPayload<ExtArgs>;
            fields: Prisma.log_auditoriaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.log_auditoriaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.log_auditoriaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                findFirst: {
                    args: Prisma.log_auditoriaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.log_auditoriaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                findMany: {
                    args: Prisma.log_auditoriaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>[];
                };
                create: {
                    args: Prisma.log_auditoriaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                createMany: {
                    args: Prisma.log_auditoriaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.log_auditoriaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>[];
                };
                delete: {
                    args: Prisma.log_auditoriaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                update: {
                    args: Prisma.log_auditoriaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                deleteMany: {
                    args: Prisma.log_auditoriaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.log_auditoriaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.log_auditoriaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>[];
                };
                upsert: {
                    args: Prisma.log_auditoriaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_auditoriaPayload>;
                };
                aggregate: {
                    args: Prisma.Log_auditoriaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLog_auditoria>;
                };
                groupBy: {
                    args: Prisma.log_auditoriaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Log_auditoriaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.log_auditoriaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Log_auditoriaCountAggregateOutputType> | number;
                };
            };
        };
        cliente: {
            payload: Prisma.$clientePayload<ExtArgs>;
            fields: Prisma.clienteFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.clienteFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.clienteFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                findFirst: {
                    args: Prisma.clienteFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.clienteFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                findMany: {
                    args: Prisma.clienteFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>[];
                };
                create: {
                    args: Prisma.clienteCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                createMany: {
                    args: Prisma.clienteCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.clienteCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>[];
                };
                delete: {
                    args: Prisma.clienteDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                update: {
                    args: Prisma.clienteUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                deleteMany: {
                    args: Prisma.clienteDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.clienteUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.clienteUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>[];
                };
                upsert: {
                    args: Prisma.clienteUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$clientePayload>;
                };
                aggregate: {
                    args: Prisma.ClienteAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCliente>;
                };
                groupBy: {
                    args: Prisma.clienteGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteGroupByOutputType>[];
                };
                count: {
                    args: Prisma.clienteCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ClienteCountAggregateOutputType> | number;
                };
            };
        };
        direccion_servicio: {
            payload: Prisma.$direccion_servicioPayload<ExtArgs>;
            fields: Prisma.direccion_servicioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.direccion_servicioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.direccion_servicioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                findFirst: {
                    args: Prisma.direccion_servicioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.direccion_servicioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                findMany: {
                    args: Prisma.direccion_servicioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>[];
                };
                create: {
                    args: Prisma.direccion_servicioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                createMany: {
                    args: Prisma.direccion_servicioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.direccion_servicioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>[];
                };
                delete: {
                    args: Prisma.direccion_servicioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                update: {
                    args: Prisma.direccion_servicioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                deleteMany: {
                    args: Prisma.direccion_servicioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.direccion_servicioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.direccion_servicioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>[];
                };
                upsert: {
                    args: Prisma.direccion_servicioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$direccion_servicioPayload>;
                };
                aggregate: {
                    args: Prisma.Direccion_servicioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDireccion_servicio>;
                };
                groupBy: {
                    args: Prisma.direccion_servicioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Direccion_servicioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.direccion_servicioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Direccion_servicioCountAggregateOutputType> | number;
                };
            };
        };
        plan: {
            payload: Prisma.$planPayload<ExtArgs>;
            fields: Prisma.planFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.planFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.planFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                findFirst: {
                    args: Prisma.planFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.planFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                findMany: {
                    args: Prisma.planFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>[];
                };
                create: {
                    args: Prisma.planCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                createMany: {
                    args: Prisma.planCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.planCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>[];
                };
                delete: {
                    args: Prisma.planDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                update: {
                    args: Prisma.planUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                deleteMany: {
                    args: Prisma.planDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.planUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.planUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>[];
                };
                upsert: {
                    args: Prisma.planUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$planPayload>;
                };
                aggregate: {
                    args: Prisma.PlanAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlan>;
                };
                groupBy: {
                    args: Prisma.planGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanGroupByOutputType>[];
                };
                count: {
                    args: Prisma.planCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PlanCountAggregateOutputType> | number;
                };
            };
        };
        contrato: {
            payload: Prisma.$contratoPayload<ExtArgs>;
            fields: Prisma.contratoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.contratoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.contratoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                findFirst: {
                    args: Prisma.contratoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.contratoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                findMany: {
                    args: Prisma.contratoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>[];
                };
                create: {
                    args: Prisma.contratoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                createMany: {
                    args: Prisma.contratoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.contratoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>[];
                };
                delete: {
                    args: Prisma.contratoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                update: {
                    args: Prisma.contratoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                deleteMany: {
                    args: Prisma.contratoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.contratoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.contratoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>[];
                };
                upsert: {
                    args: Prisma.contratoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$contratoPayload>;
                };
                aggregate: {
                    args: Prisma.ContratoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateContrato>;
                };
                groupBy: {
                    args: Prisma.contratoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.contratoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ContratoCountAggregateOutputType> | number;
                };
            };
        };
        factura: {
            payload: Prisma.$facturaPayload<ExtArgs>;
            fields: Prisma.facturaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.facturaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.facturaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                findFirst: {
                    args: Prisma.facturaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.facturaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                findMany: {
                    args: Prisma.facturaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>[];
                };
                create: {
                    args: Prisma.facturaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                createMany: {
                    args: Prisma.facturaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.facturaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>[];
                };
                delete: {
                    args: Prisma.facturaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                update: {
                    args: Prisma.facturaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                deleteMany: {
                    args: Prisma.facturaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.facturaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.facturaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>[];
                };
                upsert: {
                    args: Prisma.facturaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$facturaPayload>;
                };
                aggregate: {
                    args: Prisma.FacturaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFactura>;
                };
                groupBy: {
                    args: Prisma.facturaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.facturaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacturaCountAggregateOutputType> | number;
                };
            };
        };
        pago: {
            payload: Prisma.$pagoPayload<ExtArgs>;
            fields: Prisma.pagoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.pagoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.pagoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                findFirst: {
                    args: Prisma.pagoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.pagoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                findMany: {
                    args: Prisma.pagoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>[];
                };
                create: {
                    args: Prisma.pagoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                createMany: {
                    args: Prisma.pagoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.pagoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>[];
                };
                delete: {
                    args: Prisma.pagoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                update: {
                    args: Prisma.pagoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                deleteMany: {
                    args: Prisma.pagoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.pagoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.pagoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>[];
                };
                upsert: {
                    args: Prisma.pagoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$pagoPayload>;
                };
                aggregate: {
                    args: Prisma.PagoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePago>;
                };
                groupBy: {
                    args: Prisma.pagoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.pagoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PagoCountAggregateOutputType> | number;
                };
            };
        };
        ticket: {
            payload: Prisma.$ticketPayload<ExtArgs>;
            fields: Prisma.ticketFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ticketFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ticketFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                findFirst: {
                    args: Prisma.ticketFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ticketFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                findMany: {
                    args: Prisma.ticketFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>[];
                };
                create: {
                    args: Prisma.ticketCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                createMany: {
                    args: Prisma.ticketCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ticketCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>[];
                };
                delete: {
                    args: Prisma.ticketDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                update: {
                    args: Prisma.ticketUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                deleteMany: {
                    args: Prisma.ticketDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ticketUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ticketUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>[];
                };
                upsert: {
                    args: Prisma.ticketUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketPayload>;
                };
                aggregate: {
                    args: Prisma.TicketAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTicket>;
                };
                groupBy: {
                    args: Prisma.ticketGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ticketCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketCountAggregateOutputType> | number;
                };
            };
        };
        plantilla_notificacion: {
            payload: Prisma.$plantilla_notificacionPayload<ExtArgs>;
            fields: Prisma.plantilla_notificacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.plantilla_notificacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.plantilla_notificacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                findFirst: {
                    args: Prisma.plantilla_notificacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.plantilla_notificacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                findMany: {
                    args: Prisma.plantilla_notificacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>[];
                };
                create: {
                    args: Prisma.plantilla_notificacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                createMany: {
                    args: Prisma.plantilla_notificacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.plantilla_notificacionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>[];
                };
                delete: {
                    args: Prisma.plantilla_notificacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                update: {
                    args: Prisma.plantilla_notificacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                deleteMany: {
                    args: Prisma.plantilla_notificacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.plantilla_notificacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.plantilla_notificacionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>[];
                };
                upsert: {
                    args: Prisma.plantilla_notificacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_notificacionPayload>;
                };
                aggregate: {
                    args: Prisma.Plantilla_notificacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlantilla_notificacion>;
                };
                groupBy: {
                    args: Prisma.plantilla_notificacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Plantilla_notificacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.plantilla_notificacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Plantilla_notificacionCountAggregateOutputType> | number;
                };
            };
        };
        log_notificacion: {
            payload: Prisma.$log_notificacionPayload<ExtArgs>;
            fields: Prisma.log_notificacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.log_notificacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.log_notificacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                findFirst: {
                    args: Prisma.log_notificacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.log_notificacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                findMany: {
                    args: Prisma.log_notificacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>[];
                };
                create: {
                    args: Prisma.log_notificacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                createMany: {
                    args: Prisma.log_notificacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.log_notificacionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>[];
                };
                delete: {
                    args: Prisma.log_notificacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                update: {
                    args: Prisma.log_notificacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                deleteMany: {
                    args: Prisma.log_notificacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.log_notificacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.log_notificacionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>[];
                };
                upsert: {
                    args: Prisma.log_notificacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$log_notificacionPayload>;
                };
                aggregate: {
                    args: Prisma.Log_notificacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLog_notificacion>;
                };
                groupBy: {
                    args: Prisma.log_notificacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Log_notificacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.log_notificacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Log_notificacionCountAggregateOutputType> | number;
                };
            };
        };
        tipo_equipo: {
            payload: Prisma.$tipo_equipoPayload<ExtArgs>;
            fields: Prisma.tipo_equipoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tipo_equipoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tipo_equipoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                findFirst: {
                    args: Prisma.tipo_equipoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tipo_equipoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                findMany: {
                    args: Prisma.tipo_equipoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>[];
                };
                create: {
                    args: Prisma.tipo_equipoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                createMany: {
                    args: Prisma.tipo_equipoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tipo_equipoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>[];
                };
                delete: {
                    args: Prisma.tipo_equipoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                update: {
                    args: Prisma.tipo_equipoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                deleteMany: {
                    args: Prisma.tipo_equipoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tipo_equipoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tipo_equipoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>[];
                };
                upsert: {
                    args: Prisma.tipo_equipoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tipo_equipoPayload>;
                };
                aggregate: {
                    args: Prisma.Tipo_equipoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTipo_equipo>;
                };
                groupBy: {
                    args: Prisma.tipo_equipoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tipo_equipoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tipo_equipoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tipo_equipoCountAggregateOutputType> | number;
                };
            };
        };
        unidad_equipo: {
            payload: Prisma.$unidad_equipoPayload<ExtArgs>;
            fields: Prisma.unidad_equipoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.unidad_equipoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.unidad_equipoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                findFirst: {
                    args: Prisma.unidad_equipoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.unidad_equipoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                findMany: {
                    args: Prisma.unidad_equipoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>[];
                };
                create: {
                    args: Prisma.unidad_equipoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                createMany: {
                    args: Prisma.unidad_equipoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.unidad_equipoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>[];
                };
                delete: {
                    args: Prisma.unidad_equipoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                update: {
                    args: Prisma.unidad_equipoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                deleteMany: {
                    args: Prisma.unidad_equipoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.unidad_equipoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.unidad_equipoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>[];
                };
                upsert: {
                    args: Prisma.unidad_equipoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$unidad_equipoPayload>;
                };
                aggregate: {
                    args: Prisma.Unidad_equipoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUnidad_equipo>;
                };
                groupBy: {
                    args: Prisma.unidad_equipoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Unidad_equipoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.unidad_equipoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Unidad_equipoCountAggregateOutputType> | number;
                };
            };
        };
        caja_nap: {
            payload: Prisma.$caja_napPayload<ExtArgs>;
            fields: Prisma.caja_napFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.caja_napFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.caja_napFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                findFirst: {
                    args: Prisma.caja_napFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.caja_napFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                findMany: {
                    args: Prisma.caja_napFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>[];
                };
                create: {
                    args: Prisma.caja_napCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                createMany: {
                    args: Prisma.caja_napCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.caja_napCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>[];
                };
                delete: {
                    args: Prisma.caja_napDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                update: {
                    args: Prisma.caja_napUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                deleteMany: {
                    args: Prisma.caja_napDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.caja_napUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.caja_napUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>[];
                };
                upsert: {
                    args: Prisma.caja_napUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$caja_napPayload>;
                };
                aggregate: {
                    args: Prisma.Caja_napAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCaja_nap>;
                };
                groupBy: {
                    args: Prisma.caja_napGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Caja_napGroupByOutputType>[];
                };
                count: {
                    args: Prisma.caja_napCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Caja_napCountAggregateOutputType> | number;
                };
            };
        };
        orden_trabajo: {
            payload: Prisma.$orden_trabajoPayload<ExtArgs>;
            fields: Prisma.orden_trabajoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.orden_trabajoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.orden_trabajoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                findFirst: {
                    args: Prisma.orden_trabajoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.orden_trabajoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                findMany: {
                    args: Prisma.orden_trabajoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>[];
                };
                create: {
                    args: Prisma.orden_trabajoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                createMany: {
                    args: Prisma.orden_trabajoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.orden_trabajoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>[];
                };
                delete: {
                    args: Prisma.orden_trabajoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                update: {
                    args: Prisma.orden_trabajoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                deleteMany: {
                    args: Prisma.orden_trabajoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.orden_trabajoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.orden_trabajoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>[];
                };
                upsert: {
                    args: Prisma.orden_trabajoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_trabajoPayload>;
                };
                aggregate: {
                    args: Prisma.Orden_trabajoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrden_trabajo>;
                };
                groupBy: {
                    args: Prisma.orden_trabajoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orden_trabajoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.orden_trabajoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orden_trabajoCountAggregateOutputType> | number;
                };
            };
        };
        historial_ot: {
            payload: Prisma.$historial_otPayload<ExtArgs>;
            fields: Prisma.historial_otFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.historial_otFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.historial_otFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                findFirst: {
                    args: Prisma.historial_otFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.historial_otFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                findMany: {
                    args: Prisma.historial_otFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>[];
                };
                create: {
                    args: Prisma.historial_otCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                createMany: {
                    args: Prisma.historial_otCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.historial_otCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>[];
                };
                delete: {
                    args: Prisma.historial_otDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                update: {
                    args: Prisma.historial_otUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                deleteMany: {
                    args: Prisma.historial_otDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.historial_otUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.historial_otUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>[];
                };
                upsert: {
                    args: Prisma.historial_otUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_otPayload>;
                };
                aggregate: {
                    args: Prisma.Historial_otAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorial_ot>;
                };
                groupBy: {
                    args: Prisma.historial_otGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_otGroupByOutputType>[];
                };
                count: {
                    args: Prisma.historial_otCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_otCountAggregateOutputType> | number;
                };
            };
        };
        categoria_falla: {
            payload: Prisma.$categoria_fallaPayload<ExtArgs>;
            fields: Prisma.categoria_fallaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.categoria_fallaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.categoria_fallaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                findFirst: {
                    args: Prisma.categoria_fallaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.categoria_fallaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                findMany: {
                    args: Prisma.categoria_fallaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>[];
                };
                create: {
                    args: Prisma.categoria_fallaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                createMany: {
                    args: Prisma.categoria_fallaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.categoria_fallaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>[];
                };
                delete: {
                    args: Prisma.categoria_fallaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                update: {
                    args: Prisma.categoria_fallaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                deleteMany: {
                    args: Prisma.categoria_fallaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.categoria_fallaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.categoria_fallaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>[];
                };
                upsert: {
                    args: Prisma.categoria_fallaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$categoria_fallaPayload>;
                };
                aggregate: {
                    args: Prisma.Categoria_fallaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCategoria_falla>;
                };
                groupBy: {
                    args: Prisma.categoria_fallaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Categoria_fallaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.categoria_fallaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Categoria_fallaCountAggregateOutputType> | number;
                };
            };
        };
        uso_material_ot: {
            payload: Prisma.$uso_material_otPayload<ExtArgs>;
            fields: Prisma.uso_material_otFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.uso_material_otFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.uso_material_otFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                findFirst: {
                    args: Prisma.uso_material_otFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.uso_material_otFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                findMany: {
                    args: Prisma.uso_material_otFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>[];
                };
                create: {
                    args: Prisma.uso_material_otCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                createMany: {
                    args: Prisma.uso_material_otCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.uso_material_otCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>[];
                };
                delete: {
                    args: Prisma.uso_material_otDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                update: {
                    args: Prisma.uso_material_otUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                deleteMany: {
                    args: Prisma.uso_material_otDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.uso_material_otUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.uso_material_otUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>[];
                };
                upsert: {
                    args: Prisma.uso_material_otUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$uso_material_otPayload>;
                };
                aggregate: {
                    args: Prisma.Uso_material_otAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUso_material_ot>;
                };
                groupBy: {
                    args: Prisma.uso_material_otGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Uso_material_otGroupByOutputType>[];
                };
                count: {
                    args: Prisma.uso_material_otCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Uso_material_otCountAggregateOutputType> | number;
                };
            };
        };
        evidencia_foto: {
            payload: Prisma.$evidencia_fotoPayload<ExtArgs>;
            fields: Prisma.evidencia_fotoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.evidencia_fotoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.evidencia_fotoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                findFirst: {
                    args: Prisma.evidencia_fotoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.evidencia_fotoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                findMany: {
                    args: Prisma.evidencia_fotoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>[];
                };
                create: {
                    args: Prisma.evidencia_fotoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                createMany: {
                    args: Prisma.evidencia_fotoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.evidencia_fotoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>[];
                };
                delete: {
                    args: Prisma.evidencia_fotoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                update: {
                    args: Prisma.evidencia_fotoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                deleteMany: {
                    args: Prisma.evidencia_fotoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.evidencia_fotoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.evidencia_fotoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>[];
                };
                upsert: {
                    args: Prisma.evidencia_fotoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$evidencia_fotoPayload>;
                };
                aggregate: {
                    args: Prisma.Evidencia_fotoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvidencia_foto>;
                };
                groupBy: {
                    args: Prisma.evidencia_fotoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Evidencia_fotoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.evidencia_fotoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Evidencia_fotoCountAggregateOutputType> | number;
                };
            };
        };
        llamada_cortes: {
            payload: Prisma.$llamada_cortesPayload<ExtArgs>;
            fields: Prisma.llamada_cortesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.llamada_cortesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.llamada_cortesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                findFirst: {
                    args: Prisma.llamada_cortesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.llamada_cortesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                findMany: {
                    args: Prisma.llamada_cortesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>[];
                };
                create: {
                    args: Prisma.llamada_cortesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                createMany: {
                    args: Prisma.llamada_cortesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.llamada_cortesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>[];
                };
                delete: {
                    args: Prisma.llamada_cortesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                update: {
                    args: Prisma.llamada_cortesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                deleteMany: {
                    args: Prisma.llamada_cortesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.llamada_cortesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.llamada_cortesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>[];
                };
                upsert: {
                    args: Prisma.llamada_cortesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$llamada_cortesPayload>;
                };
                aggregate: {
                    args: Prisma.Llamada_cortesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLlamada_cortes>;
                };
                groupBy: {
                    args: Prisma.llamada_cortesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Llamada_cortesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.llamada_cortesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Llamada_cortesCountAggregateOutputType> | number;
                };
            };
        };
        lista_negra: {
            payload: Prisma.$lista_negraPayload<ExtArgs>;
            fields: Prisma.lista_negraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.lista_negraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.lista_negraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                findFirst: {
                    args: Prisma.lista_negraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.lista_negraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                findMany: {
                    args: Prisma.lista_negraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>[];
                };
                create: {
                    args: Prisma.lista_negraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                createMany: {
                    args: Prisma.lista_negraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.lista_negraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>[];
                };
                delete: {
                    args: Prisma.lista_negraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                update: {
                    args: Prisma.lista_negraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                deleteMany: {
                    args: Prisma.lista_negraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.lista_negraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.lista_negraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>[];
                };
                upsert: {
                    args: Prisma.lista_negraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$lista_negraPayload>;
                };
                aggregate: {
                    args: Prisma.Lista_negraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLista_negra>;
                };
                groupBy: {
                    args: Prisma.lista_negraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lista_negraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.lista_negraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Lista_negraCountAggregateOutputType> | number;
                };
            };
        };
        bodega: {
            payload: Prisma.$bodegaPayload<ExtArgs>;
            fields: Prisma.bodegaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.bodegaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.bodegaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                findFirst: {
                    args: Prisma.bodegaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.bodegaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                findMany: {
                    args: Prisma.bodegaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>[];
                };
                create: {
                    args: Prisma.bodegaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                createMany: {
                    args: Prisma.bodegaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.bodegaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>[];
                };
                delete: {
                    args: Prisma.bodegaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                update: {
                    args: Prisma.bodegaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                deleteMany: {
                    args: Prisma.bodegaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.bodegaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.bodegaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>[];
                };
                upsert: {
                    args: Prisma.bodegaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bodegaPayload>;
                };
                aggregate: {
                    args: Prisma.BodegaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBodega>;
                };
                groupBy: {
                    args: Prisma.bodegaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodegaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.bodegaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BodegaCountAggregateOutputType> | number;
                };
            };
        };
        stock_consumible: {
            payload: Prisma.$stock_consumiblePayload<ExtArgs>;
            fields: Prisma.stock_consumibleFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.stock_consumibleFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.stock_consumibleFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                findFirst: {
                    args: Prisma.stock_consumibleFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.stock_consumibleFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                findMany: {
                    args: Prisma.stock_consumibleFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>[];
                };
                create: {
                    args: Prisma.stock_consumibleCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                createMany: {
                    args: Prisma.stock_consumibleCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.stock_consumibleCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>[];
                };
                delete: {
                    args: Prisma.stock_consumibleDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                update: {
                    args: Prisma.stock_consumibleUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                deleteMany: {
                    args: Prisma.stock_consumibleDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.stock_consumibleUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.stock_consumibleUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>[];
                };
                upsert: {
                    args: Prisma.stock_consumibleUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$stock_consumiblePayload>;
                };
                aggregate: {
                    args: Prisma.Stock_consumibleAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateStock_consumible>;
                };
                groupBy: {
                    args: Prisma.stock_consumibleGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_consumibleGroupByOutputType>[];
                };
                count: {
                    args: Prisma.stock_consumibleCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Stock_consumibleCountAggregateOutputType> | number;
                };
            };
        };
        proveedor: {
            payload: Prisma.$proveedorPayload<ExtArgs>;
            fields: Prisma.proveedorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.proveedorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.proveedorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                findFirst: {
                    args: Prisma.proveedorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.proveedorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                findMany: {
                    args: Prisma.proveedorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>[];
                };
                create: {
                    args: Prisma.proveedorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                createMany: {
                    args: Prisma.proveedorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.proveedorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>[];
                };
                delete: {
                    args: Prisma.proveedorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                update: {
                    args: Prisma.proveedorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                deleteMany: {
                    args: Prisma.proveedorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.proveedorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.proveedorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>[];
                };
                upsert: {
                    args: Prisma.proveedorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$proveedorPayload>;
                };
                aggregate: {
                    args: Prisma.ProveedorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProveedor>;
                };
                groupBy: {
                    args: Prisma.proveedorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.proveedorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProveedorCountAggregateOutputType> | number;
                };
            };
        };
        orden_ingreso: {
            payload: Prisma.$orden_ingresoPayload<ExtArgs>;
            fields: Prisma.orden_ingresoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.orden_ingresoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.orden_ingresoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                findFirst: {
                    args: Prisma.orden_ingresoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.orden_ingresoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                findMany: {
                    args: Prisma.orden_ingresoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>[];
                };
                create: {
                    args: Prisma.orden_ingresoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                createMany: {
                    args: Prisma.orden_ingresoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.orden_ingresoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>[];
                };
                delete: {
                    args: Prisma.orden_ingresoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                update: {
                    args: Prisma.orden_ingresoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                deleteMany: {
                    args: Prisma.orden_ingresoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.orden_ingresoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.orden_ingresoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>[];
                };
                upsert: {
                    args: Prisma.orden_ingresoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$orden_ingresoPayload>;
                };
                aggregate: {
                    args: Prisma.Orden_ingresoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrden_ingreso>;
                };
                groupBy: {
                    args: Prisma.orden_ingresoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orden_ingresoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.orden_ingresoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Orden_ingresoCountAggregateOutputType> | number;
                };
            };
        };
        detalle_orden_ingreso: {
            payload: Prisma.$detalle_orden_ingresoPayload<ExtArgs>;
            fields: Prisma.detalle_orden_ingresoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.detalle_orden_ingresoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.detalle_orden_ingresoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                findFirst: {
                    args: Prisma.detalle_orden_ingresoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.detalle_orden_ingresoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                findMany: {
                    args: Prisma.detalle_orden_ingresoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>[];
                };
                create: {
                    args: Prisma.detalle_orden_ingresoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                createMany: {
                    args: Prisma.detalle_orden_ingresoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.detalle_orden_ingresoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>[];
                };
                delete: {
                    args: Prisma.detalle_orden_ingresoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                update: {
                    args: Prisma.detalle_orden_ingresoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                deleteMany: {
                    args: Prisma.detalle_orden_ingresoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.detalle_orden_ingresoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.detalle_orden_ingresoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>[];
                };
                upsert: {
                    args: Prisma.detalle_orden_ingresoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_orden_ingresoPayload>;
                };
                aggregate: {
                    args: Prisma.Detalle_orden_ingresoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalle_orden_ingreso>;
                };
                groupBy: {
                    args: Prisma.detalle_orden_ingresoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_orden_ingresoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.detalle_orden_ingresoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_orden_ingresoCountAggregateOutputType> | number;
                };
            };
        };
        historial_estado_equipo: {
            payload: Prisma.$historial_estado_equipoPayload<ExtArgs>;
            fields: Prisma.historial_estado_equipoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.historial_estado_equipoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.historial_estado_equipoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                findFirst: {
                    args: Prisma.historial_estado_equipoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.historial_estado_equipoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                findMany: {
                    args: Prisma.historial_estado_equipoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>[];
                };
                create: {
                    args: Prisma.historial_estado_equipoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                createMany: {
                    args: Prisma.historial_estado_equipoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.historial_estado_equipoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>[];
                };
                delete: {
                    args: Prisma.historial_estado_equipoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                update: {
                    args: Prisma.historial_estado_equipoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                deleteMany: {
                    args: Prisma.historial_estado_equipoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.historial_estado_equipoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.historial_estado_equipoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>[];
                };
                upsert: {
                    args: Prisma.historial_estado_equipoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_estado_equipoPayload>;
                };
                aggregate: {
                    args: Prisma.Historial_estado_equipoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorial_estado_equipo>;
                };
                groupBy: {
                    args: Prisma.historial_estado_equipoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_estado_equipoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.historial_estado_equipoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_estado_equipoCountAggregateOutputType> | number;
                };
            };
        };
        movimiento_inventario: {
            payload: Prisma.$movimiento_inventarioPayload<ExtArgs>;
            fields: Prisma.movimiento_inventarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.movimiento_inventarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.movimiento_inventarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                findFirst: {
                    args: Prisma.movimiento_inventarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.movimiento_inventarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                findMany: {
                    args: Prisma.movimiento_inventarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>[];
                };
                create: {
                    args: Prisma.movimiento_inventarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                createMany: {
                    args: Prisma.movimiento_inventarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.movimiento_inventarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>[];
                };
                delete: {
                    args: Prisma.movimiento_inventarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                update: {
                    args: Prisma.movimiento_inventarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                deleteMany: {
                    args: Prisma.movimiento_inventarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.movimiento_inventarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.movimiento_inventarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>[];
                };
                upsert: {
                    args: Prisma.movimiento_inventarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$movimiento_inventarioPayload>;
                };
                aggregate: {
                    args: Prisma.Movimiento_inventarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMovimiento_inventario>;
                };
                groupBy: {
                    args: Prisma.movimiento_inventarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Movimiento_inventarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.movimiento_inventarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Movimiento_inventarioCountAggregateOutputType> | number;
                };
            };
        };
        prestamo_externo: {
            payload: Prisma.$prestamo_externoPayload<ExtArgs>;
            fields: Prisma.prestamo_externoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.prestamo_externoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.prestamo_externoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                findFirst: {
                    args: Prisma.prestamo_externoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.prestamo_externoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                findMany: {
                    args: Prisma.prestamo_externoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>[];
                };
                create: {
                    args: Prisma.prestamo_externoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                createMany: {
                    args: Prisma.prestamo_externoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.prestamo_externoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>[];
                };
                delete: {
                    args: Prisma.prestamo_externoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                update: {
                    args: Prisma.prestamo_externoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                deleteMany: {
                    args: Prisma.prestamo_externoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.prestamo_externoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.prestamo_externoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>[];
                };
                upsert: {
                    args: Prisma.prestamo_externoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prestamo_externoPayload>;
                };
                aggregate: {
                    args: Prisma.Prestamo_externoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePrestamo_externo>;
                };
                groupBy: {
                    args: Prisma.prestamo_externoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Prestamo_externoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.prestamo_externoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Prestamo_externoCountAggregateOutputType> | number;
                };
            };
        };
        baja_equipo: {
            payload: Prisma.$baja_equipoPayload<ExtArgs>;
            fields: Prisma.baja_equipoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.baja_equipoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.baja_equipoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                findFirst: {
                    args: Prisma.baja_equipoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.baja_equipoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                findMany: {
                    args: Prisma.baja_equipoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>[];
                };
                create: {
                    args: Prisma.baja_equipoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                createMany: {
                    args: Prisma.baja_equipoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.baja_equipoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>[];
                };
                delete: {
                    args: Prisma.baja_equipoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                update: {
                    args: Prisma.baja_equipoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                deleteMany: {
                    args: Prisma.baja_equipoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.baja_equipoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.baja_equipoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>[];
                };
                upsert: {
                    args: Prisma.baja_equipoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$baja_equipoPayload>;
                };
                aggregate: {
                    args: Prisma.Baja_equipoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBaja_equipo>;
                };
                groupBy: {
                    args: Prisma.baja_equipoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Baja_equipoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.baja_equipoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Baja_equipoCountAggregateOutputType> | number;
                };
            };
        };
        sesion_portal: {
            payload: Prisma.$sesion_portalPayload<ExtArgs>;
            fields: Prisma.sesion_portalFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.sesion_portalFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.sesion_portalFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                findFirst: {
                    args: Prisma.sesion_portalFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.sesion_portalFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                findMany: {
                    args: Prisma.sesion_portalFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>[];
                };
                create: {
                    args: Prisma.sesion_portalCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                createMany: {
                    args: Prisma.sesion_portalCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.sesion_portalCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>[];
                };
                delete: {
                    args: Prisma.sesion_portalDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                update: {
                    args: Prisma.sesion_portalUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                deleteMany: {
                    args: Prisma.sesion_portalDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.sesion_portalUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.sesion_portalUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>[];
                };
                upsert: {
                    args: Prisma.sesion_portalUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$sesion_portalPayload>;
                };
                aggregate: {
                    args: Prisma.Sesion_portalAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSesion_portal>;
                };
                groupBy: {
                    args: Prisma.sesion_portalGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sesion_portalGroupByOutputType>[];
                };
                count: {
                    args: Prisma.sesion_portalCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Sesion_portalCountAggregateOutputType> | number;
                };
            };
        };
        intento_fallido: {
            payload: Prisma.$intento_fallidoPayload<ExtArgs>;
            fields: Prisma.intento_fallidoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.intento_fallidoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.intento_fallidoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                findFirst: {
                    args: Prisma.intento_fallidoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.intento_fallidoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                findMany: {
                    args: Prisma.intento_fallidoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>[];
                };
                create: {
                    args: Prisma.intento_fallidoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                createMany: {
                    args: Prisma.intento_fallidoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.intento_fallidoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>[];
                };
                delete: {
                    args: Prisma.intento_fallidoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                update: {
                    args: Prisma.intento_fallidoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                deleteMany: {
                    args: Prisma.intento_fallidoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.intento_fallidoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.intento_fallidoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>[];
                };
                upsert: {
                    args: Prisma.intento_fallidoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$intento_fallidoPayload>;
                };
                aggregate: {
                    args: Prisma.Intento_fallidoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIntento_fallido>;
                };
                groupBy: {
                    args: Prisma.intento_fallidoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Intento_fallidoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.intento_fallidoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Intento_fallidoCountAggregateOutputType> | number;
                };
            };
        };
        punto_cobertura: {
            payload: Prisma.$punto_coberturaPayload<ExtArgs>;
            fields: Prisma.punto_coberturaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.punto_coberturaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.punto_coberturaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                findFirst: {
                    args: Prisma.punto_coberturaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.punto_coberturaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                findMany: {
                    args: Prisma.punto_coberturaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>[];
                };
                create: {
                    args: Prisma.punto_coberturaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                createMany: {
                    args: Prisma.punto_coberturaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.punto_coberturaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>[];
                };
                delete: {
                    args: Prisma.punto_coberturaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                update: {
                    args: Prisma.punto_coberturaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                deleteMany: {
                    args: Prisma.punto_coberturaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.punto_coberturaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.punto_coberturaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>[];
                };
                upsert: {
                    args: Prisma.punto_coberturaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$punto_coberturaPayload>;
                };
                aggregate: {
                    args: Prisma.Punto_coberturaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePunto_cobertura>;
                };
                groupBy: {
                    args: Prisma.punto_coberturaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Punto_coberturaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.punto_coberturaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Punto_coberturaCountAggregateOutputType> | number;
                };
            };
        };
        consentimiento_cookies: {
            payload: Prisma.$consentimiento_cookiesPayload<ExtArgs>;
            fields: Prisma.consentimiento_cookiesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.consentimiento_cookiesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.consentimiento_cookiesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                findFirst: {
                    args: Prisma.consentimiento_cookiesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.consentimiento_cookiesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                findMany: {
                    args: Prisma.consentimiento_cookiesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>[];
                };
                create: {
                    args: Prisma.consentimiento_cookiesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                createMany: {
                    args: Prisma.consentimiento_cookiesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.consentimiento_cookiesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>[];
                };
                delete: {
                    args: Prisma.consentimiento_cookiesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                update: {
                    args: Prisma.consentimiento_cookiesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                deleteMany: {
                    args: Prisma.consentimiento_cookiesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.consentimiento_cookiesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.consentimiento_cookiesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>[];
                };
                upsert: {
                    args: Prisma.consentimiento_cookiesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$consentimiento_cookiesPayload>;
                };
                aggregate: {
                    args: Prisma.Consentimiento_cookiesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConsentimiento_cookies>;
                };
                groupBy: {
                    args: Prisma.consentimiento_cookiesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Consentimiento_cookiesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.consentimiento_cookiesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Consentimiento_cookiesCountAggregateOutputType> | number;
                };
            };
        };
        configuracion_seo: {
            payload: Prisma.$configuracion_seoPayload<ExtArgs>;
            fields: Prisma.configuracion_seoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.configuracion_seoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.configuracion_seoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                findFirst: {
                    args: Prisma.configuracion_seoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.configuracion_seoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                findMany: {
                    args: Prisma.configuracion_seoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>[];
                };
                create: {
                    args: Prisma.configuracion_seoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                createMany: {
                    args: Prisma.configuracion_seoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.configuracion_seoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>[];
                };
                delete: {
                    args: Prisma.configuracion_seoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                update: {
                    args: Prisma.configuracion_seoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                deleteMany: {
                    args: Prisma.configuracion_seoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.configuracion_seoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.configuracion_seoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>[];
                };
                upsert: {
                    args: Prisma.configuracion_seoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$configuracion_seoPayload>;
                };
                aggregate: {
                    args: Prisma.Configuracion_seoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConfiguracion_seo>;
                };
                groupBy: {
                    args: Prisma.configuracion_seoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Configuracion_seoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.configuracion_seoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Configuracion_seoCountAggregateOutputType> | number;
                };
            };
        };
        tecnico_externo: {
            payload: Prisma.$tecnico_externoPayload<ExtArgs>;
            fields: Prisma.tecnico_externoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tecnico_externoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tecnico_externoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                findFirst: {
                    args: Prisma.tecnico_externoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tecnico_externoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                findMany: {
                    args: Prisma.tecnico_externoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>[];
                };
                create: {
                    args: Prisma.tecnico_externoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                createMany: {
                    args: Prisma.tecnico_externoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tecnico_externoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>[];
                };
                delete: {
                    args: Prisma.tecnico_externoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                update: {
                    args: Prisma.tecnico_externoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                deleteMany: {
                    args: Prisma.tecnico_externoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tecnico_externoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tecnico_externoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>[];
                };
                upsert: {
                    args: Prisma.tecnico_externoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tecnico_externoPayload>;
                };
                aggregate: {
                    args: Prisma.Tecnico_externoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTecnico_externo>;
                };
                groupBy: {
                    args: Prisma.tecnico_externoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tecnico_externoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tecnico_externoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tecnico_externoCountAggregateOutputType> | number;
                };
            };
        };
        olt: {
            payload: Prisma.$oltPayload<ExtArgs>;
            fields: Prisma.oltFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.oltFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.oltFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                findFirst: {
                    args: Prisma.oltFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.oltFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                findMany: {
                    args: Prisma.oltFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>[];
                };
                create: {
                    args: Prisma.oltCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                createMany: {
                    args: Prisma.oltCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.oltCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>[];
                };
                delete: {
                    args: Prisma.oltDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                update: {
                    args: Prisma.oltUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                deleteMany: {
                    args: Prisma.oltDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.oltUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.oltUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>[];
                };
                upsert: {
                    args: Prisma.oltUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$oltPayload>;
                };
                aggregate: {
                    args: Prisma.OltAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOlt>;
                };
                groupBy: {
                    args: Prisma.oltGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OltGroupByOutputType>[];
                };
                count: {
                    args: Prisma.oltCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OltCountAggregateOutputType> | number;
                };
            };
        };
        tarjeta_pon: {
            payload: Prisma.$tarjeta_ponPayload<ExtArgs>;
            fields: Prisma.tarjeta_ponFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.tarjeta_ponFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.tarjeta_ponFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                findFirst: {
                    args: Prisma.tarjeta_ponFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.tarjeta_ponFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                findMany: {
                    args: Prisma.tarjeta_ponFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>[];
                };
                create: {
                    args: Prisma.tarjeta_ponCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                createMany: {
                    args: Prisma.tarjeta_ponCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.tarjeta_ponCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>[];
                };
                delete: {
                    args: Prisma.tarjeta_ponDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                update: {
                    args: Prisma.tarjeta_ponUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                deleteMany: {
                    args: Prisma.tarjeta_ponDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.tarjeta_ponUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.tarjeta_ponUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>[];
                };
                upsert: {
                    args: Prisma.tarjeta_ponUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$tarjeta_ponPayload>;
                };
                aggregate: {
                    args: Prisma.Tarjeta_ponAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTarjeta_pon>;
                };
                groupBy: {
                    args: Prisma.tarjeta_ponGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tarjeta_ponGroupByOutputType>[];
                };
                count: {
                    args: Prisma.tarjeta_ponCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Tarjeta_ponCountAggregateOutputType> | number;
                };
            };
        };
        mufa: {
            payload: Prisma.$mufaPayload<ExtArgs>;
            fields: Prisma.mufaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mufaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mufaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                findFirst: {
                    args: Prisma.mufaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mufaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                findMany: {
                    args: Prisma.mufaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>[];
                };
                create: {
                    args: Prisma.mufaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                createMany: {
                    args: Prisma.mufaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mufaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>[];
                };
                delete: {
                    args: Prisma.mufaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                update: {
                    args: Prisma.mufaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                deleteMany: {
                    args: Prisma.mufaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mufaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mufaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>[];
                };
                upsert: {
                    args: Prisma.mufaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mufaPayload>;
                };
                aggregate: {
                    args: Prisma.MufaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMufa>;
                };
                groupBy: {
                    args: Prisma.mufaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MufaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mufaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MufaCountAggregateOutputType> | number;
                };
            };
        };
        puerto_nap: {
            payload: Prisma.$puerto_napPayload<ExtArgs>;
            fields: Prisma.puerto_napFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.puerto_napFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.puerto_napFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                findFirst: {
                    args: Prisma.puerto_napFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.puerto_napFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                findMany: {
                    args: Prisma.puerto_napFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>[];
                };
                create: {
                    args: Prisma.puerto_napCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                createMany: {
                    args: Prisma.puerto_napCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.puerto_napCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>[];
                };
                delete: {
                    args: Prisma.puerto_napDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                update: {
                    args: Prisma.puerto_napUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                deleteMany: {
                    args: Prisma.puerto_napDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.puerto_napUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.puerto_napUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>[];
                };
                upsert: {
                    args: Prisma.puerto_napUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$puerto_napPayload>;
                };
                aggregate: {
                    args: Prisma.Puerto_napAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePuerto_nap>;
                };
                groupBy: {
                    args: Prisma.puerto_napGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Puerto_napGroupByOutputType>[];
                };
                count: {
                    args: Prisma.puerto_napCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Puerto_napCountAggregateOutputType> | number;
                };
            };
        };
        monitoreo_ont: {
            payload: Prisma.$monitoreo_ontPayload<ExtArgs>;
            fields: Prisma.monitoreo_ontFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.monitoreo_ontFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.monitoreo_ontFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                findFirst: {
                    args: Prisma.monitoreo_ontFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.monitoreo_ontFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                findMany: {
                    args: Prisma.monitoreo_ontFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>[];
                };
                create: {
                    args: Prisma.monitoreo_ontCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                createMany: {
                    args: Prisma.monitoreo_ontCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.monitoreo_ontCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>[];
                };
                delete: {
                    args: Prisma.monitoreo_ontDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                update: {
                    args: Prisma.monitoreo_ontUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                deleteMany: {
                    args: Prisma.monitoreo_ontDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.monitoreo_ontUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.monitoreo_ontUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>[];
                };
                upsert: {
                    args: Prisma.monitoreo_ontUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$monitoreo_ontPayload>;
                };
                aggregate: {
                    args: Prisma.Monitoreo_ontAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMonitoreo_ont>;
                };
                groupBy: {
                    args: Prisma.monitoreo_ontGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Monitoreo_ontGroupByOutputType>[];
                };
                count: {
                    args: Prisma.monitoreo_ontCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Monitoreo_ontCountAggregateOutputType> | number;
                };
            };
        };
        historial_conexion_ont: {
            payload: Prisma.$historial_conexion_ontPayload<ExtArgs>;
            fields: Prisma.historial_conexion_ontFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.historial_conexion_ontFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.historial_conexion_ontFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                findFirst: {
                    args: Prisma.historial_conexion_ontFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.historial_conexion_ontFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                findMany: {
                    args: Prisma.historial_conexion_ontFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>[];
                };
                create: {
                    args: Prisma.historial_conexion_ontCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                createMany: {
                    args: Prisma.historial_conexion_ontCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.historial_conexion_ontCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>[];
                };
                delete: {
                    args: Prisma.historial_conexion_ontDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                update: {
                    args: Prisma.historial_conexion_ontUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                deleteMany: {
                    args: Prisma.historial_conexion_ontDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.historial_conexion_ontUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.historial_conexion_ontUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>[];
                };
                upsert: {
                    args: Prisma.historial_conexion_ontUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$historial_conexion_ontPayload>;
                };
                aggregate: {
                    args: Prisma.Historial_conexion_ontAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHistorial_conexion_ont>;
                };
                groupBy: {
                    args: Prisma.historial_conexion_ontGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_conexion_ontGroupByOutputType>[];
                };
                count: {
                    args: Prisma.historial_conexion_ontCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Historial_conexion_ontCountAggregateOutputType> | number;
                };
            };
        };
        prospecto: {
            payload: Prisma.$prospectoPayload<ExtArgs>;
            fields: Prisma.prospectoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.prospectoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.prospectoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                findFirst: {
                    args: Prisma.prospectoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.prospectoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                findMany: {
                    args: Prisma.prospectoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>[];
                };
                create: {
                    args: Prisma.prospectoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                createMany: {
                    args: Prisma.prospectoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.prospectoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>[];
                };
                delete: {
                    args: Prisma.prospectoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                update: {
                    args: Prisma.prospectoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                deleteMany: {
                    args: Prisma.prospectoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.prospectoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.prospectoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>[];
                };
                upsert: {
                    args: Prisma.prospectoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$prospectoPayload>;
                };
                aggregate: {
                    args: Prisma.ProspectoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProspecto>;
                };
                groupBy: {
                    args: Prisma.prospectoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProspectoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.prospectoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProspectoCountAggregateOutputType> | number;
                };
            };
        };
        cotizacion: {
            payload: Prisma.$cotizacionPayload<ExtArgs>;
            fields: Prisma.cotizacionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cotizacionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cotizacionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                findFirst: {
                    args: Prisma.cotizacionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cotizacionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                findMany: {
                    args: Prisma.cotizacionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>[];
                };
                create: {
                    args: Prisma.cotizacionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                createMany: {
                    args: Prisma.cotizacionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cotizacionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>[];
                };
                delete: {
                    args: Prisma.cotizacionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                update: {
                    args: Prisma.cotizacionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                deleteMany: {
                    args: Prisma.cotizacionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cotizacionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cotizacionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>[];
                };
                upsert: {
                    args: Prisma.cotizacionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cotizacionPayload>;
                };
                aggregate: {
                    args: Prisma.CotizacionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCotizacion>;
                };
                groupBy: {
                    args: Prisma.cotizacionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CotizacionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cotizacionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CotizacionCountAggregateOutputType> | number;
                };
            };
        };
        canal_whatsapp: {
            payload: Prisma.$canal_whatsappPayload<ExtArgs>;
            fields: Prisma.canal_whatsappFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.canal_whatsappFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.canal_whatsappFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                findFirst: {
                    args: Prisma.canal_whatsappFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.canal_whatsappFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                findMany: {
                    args: Prisma.canal_whatsappFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>[];
                };
                create: {
                    args: Prisma.canal_whatsappCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                createMany: {
                    args: Prisma.canal_whatsappCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.canal_whatsappCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>[];
                };
                delete: {
                    args: Prisma.canal_whatsappDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                update: {
                    args: Prisma.canal_whatsappUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                deleteMany: {
                    args: Prisma.canal_whatsappDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.canal_whatsappUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.canal_whatsappUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>[];
                };
                upsert: {
                    args: Prisma.canal_whatsappUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$canal_whatsappPayload>;
                };
                aggregate: {
                    args: Prisma.Canal_whatsappAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCanal_whatsapp>;
                };
                groupBy: {
                    args: Prisma.canal_whatsappGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Canal_whatsappGroupByOutputType>[];
                };
                count: {
                    args: Prisma.canal_whatsappCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Canal_whatsappCountAggregateOutputType> | number;
                };
            };
        };
        plantilla_whatsapp: {
            payload: Prisma.$plantilla_whatsappPayload<ExtArgs>;
            fields: Prisma.plantilla_whatsappFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.plantilla_whatsappFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.plantilla_whatsappFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                findFirst: {
                    args: Prisma.plantilla_whatsappFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.plantilla_whatsappFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                findMany: {
                    args: Prisma.plantilla_whatsappFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>[];
                };
                create: {
                    args: Prisma.plantilla_whatsappCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                createMany: {
                    args: Prisma.plantilla_whatsappCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.plantilla_whatsappCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>[];
                };
                delete: {
                    args: Prisma.plantilla_whatsappDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                update: {
                    args: Prisma.plantilla_whatsappUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                deleteMany: {
                    args: Prisma.plantilla_whatsappDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.plantilla_whatsappUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.plantilla_whatsappUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>[];
                };
                upsert: {
                    args: Prisma.plantilla_whatsappUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$plantilla_whatsappPayload>;
                };
                aggregate: {
                    args: Prisma.Plantilla_whatsappAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePlantilla_whatsapp>;
                };
                groupBy: {
                    args: Prisma.plantilla_whatsappGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Plantilla_whatsappGroupByOutputType>[];
                };
                count: {
                    args: Prisma.plantilla_whatsappCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Plantilla_whatsappCountAggregateOutputType> | number;
                };
            };
        };
        mensaje_whatsapp: {
            payload: Prisma.$mensaje_whatsappPayload<ExtArgs>;
            fields: Prisma.mensaje_whatsappFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mensaje_whatsappFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mensaje_whatsappFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                findFirst: {
                    args: Prisma.mensaje_whatsappFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mensaje_whatsappFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                findMany: {
                    args: Prisma.mensaje_whatsappFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>[];
                };
                create: {
                    args: Prisma.mensaje_whatsappCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                createMany: {
                    args: Prisma.mensaje_whatsappCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mensaje_whatsappCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>[];
                };
                delete: {
                    args: Prisma.mensaje_whatsappDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                update: {
                    args: Prisma.mensaje_whatsappUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                deleteMany: {
                    args: Prisma.mensaje_whatsappDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mensaje_whatsappUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mensaje_whatsappUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>[];
                };
                upsert: {
                    args: Prisma.mensaje_whatsappUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_whatsappPayload>;
                };
                aggregate: {
                    args: Prisma.Mensaje_whatsappAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMensaje_whatsapp>;
                };
                groupBy: {
                    args: Prisma.mensaje_whatsappGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mensaje_whatsappGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mensaje_whatsappCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mensaje_whatsappCountAggregateOutputType> | number;
                };
            };
        };
        conversacion_bot: {
            payload: Prisma.$conversacion_botPayload<ExtArgs>;
            fields: Prisma.conversacion_botFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.conversacion_botFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.conversacion_botFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                findFirst: {
                    args: Prisma.conversacion_botFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.conversacion_botFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                findMany: {
                    args: Prisma.conversacion_botFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>[];
                };
                create: {
                    args: Prisma.conversacion_botCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                createMany: {
                    args: Prisma.conversacion_botCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.conversacion_botCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>[];
                };
                delete: {
                    args: Prisma.conversacion_botDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                update: {
                    args: Prisma.conversacion_botUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                deleteMany: {
                    args: Prisma.conversacion_botDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.conversacion_botUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.conversacion_botUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>[];
                };
                upsert: {
                    args: Prisma.conversacion_botUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$conversacion_botPayload>;
                };
                aggregate: {
                    args: Prisma.Conversacion_botAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateConversacion_bot>;
                };
                groupBy: {
                    args: Prisma.conversacion_botGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Conversacion_botGroupByOutputType>[];
                };
                count: {
                    args: Prisma.conversacion_botCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Conversacion_botCountAggregateOutputType> | number;
                };
            };
        };
        mensaje_bot: {
            payload: Prisma.$mensaje_botPayload<ExtArgs>;
            fields: Prisma.mensaje_botFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mensaje_botFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mensaje_botFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                findFirst: {
                    args: Prisma.mensaje_botFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mensaje_botFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                findMany: {
                    args: Prisma.mensaje_botFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>[];
                };
                create: {
                    args: Prisma.mensaje_botCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                createMany: {
                    args: Prisma.mensaje_botCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mensaje_botCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>[];
                };
                delete: {
                    args: Prisma.mensaje_botDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                update: {
                    args: Prisma.mensaje_botUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                deleteMany: {
                    args: Prisma.mensaje_botDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mensaje_botUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mensaje_botUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>[];
                };
                upsert: {
                    args: Prisma.mensaje_botUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mensaje_botPayload>;
                };
                aggregate: {
                    args: Prisma.Mensaje_botAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMensaje_bot>;
                };
                groupBy: {
                    args: Prisma.mensaje_botGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mensaje_botGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mensaje_botCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Mensaje_botCountAggregateOutputType> | number;
                };
            };
        };
        credenciales_tvip: {
            payload: Prisma.$credenciales_tvipPayload<ExtArgs>;
            fields: Prisma.credenciales_tvipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.credenciales_tvipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.credenciales_tvipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                findFirst: {
                    args: Prisma.credenciales_tvipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.credenciales_tvipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                findMany: {
                    args: Prisma.credenciales_tvipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>[];
                };
                create: {
                    args: Prisma.credenciales_tvipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                createMany: {
                    args: Prisma.credenciales_tvipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.credenciales_tvipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>[];
                };
                delete: {
                    args: Prisma.credenciales_tvipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                update: {
                    args: Prisma.credenciales_tvipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                deleteMany: {
                    args: Prisma.credenciales_tvipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.credenciales_tvipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.credenciales_tvipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>[];
                };
                upsert: {
                    args: Prisma.credenciales_tvipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$credenciales_tvipPayload>;
                };
                aggregate: {
                    args: Prisma.Credenciales_tvipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCredenciales_tvip>;
                };
                groupBy: {
                    args: Prisma.credenciales_tvipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Credenciales_tvipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.credenciales_tvipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Credenciales_tvipCountAggregateOutputType> | number;
                };
            };
        };
        transferencia_equipo: {
            payload: Prisma.$transferencia_equipoPayload<ExtArgs>;
            fields: Prisma.transferencia_equipoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.transferencia_equipoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.transferencia_equipoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                findFirst: {
                    args: Prisma.transferencia_equipoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.transferencia_equipoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                findMany: {
                    args: Prisma.transferencia_equipoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>[];
                };
                create: {
                    args: Prisma.transferencia_equipoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                createMany: {
                    args: Prisma.transferencia_equipoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.transferencia_equipoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>[];
                };
                delete: {
                    args: Prisma.transferencia_equipoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                update: {
                    args: Prisma.transferencia_equipoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                deleteMany: {
                    args: Prisma.transferencia_equipoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.transferencia_equipoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.transferencia_equipoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>[];
                };
                upsert: {
                    args: Prisma.transferencia_equipoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$transferencia_equipoPayload>;
                };
                aggregate: {
                    args: Prisma.Transferencia_equipoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTransferencia_equipo>;
                };
                groupBy: {
                    args: Prisma.transferencia_equipoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transferencia_equipoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.transferencia_equipoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Transferencia_equipoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const EmpresaScalarFieldEnum: {
    readonly id_empresa: "id_empresa";
    readonly nombre: "nombre";
    readonly rut_empresa: "rut_empresa";
    readonly esquema_db: "esquema_db";
};
export type EmpresaScalarFieldEnum = (typeof EmpresaScalarFieldEnum)[keyof typeof EmpresaScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id_usuario: "id_usuario";
    readonly id_empresa: "id_empresa";
    readonly nombre_completo: "nombre_completo";
    readonly nombre_usuario: "nombre_usuario";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly activo: "activo";
    readonly fecha_creacion: "fecha_creacion";
    readonly es_password_temporal: "es_password_temporal";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const RolScalarFieldEnum: {
    readonly id_rol: "id_rol";
    readonly nombre_rol: "nombre_rol";
    readonly descripcion: "descripcion";
};
export type RolScalarFieldEnum = (typeof RolScalarFieldEnum)[keyof typeof RolScalarFieldEnum];
export declare const Usuario_rolScalarFieldEnum: {
    readonly id_usuario_rol: "id_usuario_rol";
    readonly id_usuario: "id_usuario";
    readonly id_rol: "id_rol";
    readonly fecha_asignacion: "fecha_asignacion";
};
export type Usuario_rolScalarFieldEnum = (typeof Usuario_rolScalarFieldEnum)[keyof typeof Usuario_rolScalarFieldEnum];
export declare const Log_auditoriaScalarFieldEnum: {
    readonly id_log: "id_log";
    readonly id_usuario: "id_usuario";
    readonly accion: "accion";
    readonly entidad_afectada: "entidad_afectada";
    readonly id_entidad_afectada: "id_entidad_afectada";
    readonly valor_anterior: "valor_anterior";
    readonly valor_nuevo: "valor_nuevo";
    readonly ip_origen: "ip_origen";
    readonly fecha_hora: "fecha_hora";
};
export type Log_auditoriaScalarFieldEnum = (typeof Log_auditoriaScalarFieldEnum)[keyof typeof Log_auditoriaScalarFieldEnum];
export declare const ClienteScalarFieldEnum: {
    readonly id_cliente: "id_cliente";
    readonly id_empresa: "id_empresa";
    readonly rut: "rut";
    readonly nombre_completo: "nombre_completo";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly password_portal_hash: "password_portal_hash";
    readonly estado: "estado";
    readonly es_conflictivo: "es_conflictivo";
    readonly obs_conflictivo: "obs_conflictivo";
    readonly importado_masivo: "importado_masivo";
    readonly fecha_creacion: "fecha_creacion";
};
export type ClienteScalarFieldEnum = (typeof ClienteScalarFieldEnum)[keyof typeof ClienteScalarFieldEnum];
export declare const Direccion_servicioScalarFieldEnum: {
    readonly id_direccion: "id_direccion";
    readonly id_cliente: "id_cliente";
    readonly direccion_completa: "direccion_completa";
    readonly comuna: "comuna";
    readonly ciudad: "ciudad";
    readonly es_principal: "es_principal";
};
export type Direccion_servicioScalarFieldEnum = (typeof Direccion_servicioScalarFieldEnum)[keyof typeof Direccion_servicioScalarFieldEnum];
export declare const PlanScalarFieldEnum: {
    readonly id_plan: "id_plan";
    readonly id_empresa: "id_empresa";
    readonly nombre_comercial: "nombre_comercial";
    readonly tipo_plan: "tipo_plan";
    readonly tipo_cliente: "tipo_cliente";
    readonly velocidad_mbps: "velocidad_mbps";
    readonly precio_mensual: "precio_mensual";
    readonly descripcion: "descripcion";
    readonly activo: "activo";
};
export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum];
export declare const ContratoScalarFieldEnum: {
    readonly id_contrato: "id_contrato";
    readonly id_cliente: "id_cliente";
    readonly id_plan: "id_plan";
    readonly id_empresa: "id_empresa";
    readonly fecha_inicio: "fecha_inicio";
    readonly dia_vencimiento: "dia_vencimiento";
    readonly estado: "estado";
    readonly fecha_suspension: "fecha_suspension";
};
export type ContratoScalarFieldEnum = (typeof ContratoScalarFieldEnum)[keyof typeof ContratoScalarFieldEnum];
export declare const FacturaScalarFieldEnum: {
    readonly id_factura: "id_factura";
    readonly id_contrato: "id_contrato";
    readonly periodo_mes: "periodo_mes";
    readonly periodo_anio: "periodo_anio";
    readonly monto: "monto";
    readonly fecha_emision: "fecha_emision";
    readonly fecha_limite_pago: "fecha_limite_pago";
    readonly estado: "estado";
};
export type FacturaScalarFieldEnum = (typeof FacturaScalarFieldEnum)[keyof typeof FacturaScalarFieldEnum];
export declare const PagoScalarFieldEnum: {
    readonly id_pago: "id_pago";
    readonly id_factura: "id_factura";
    readonly id_cliente: "id_cliente";
    readonly monto: "monto";
    readonly fecha_pago: "fecha_pago";
    readonly codigo_transaccion: "codigo_transaccion";
    readonly pasarela: "pasarela";
    readonly token_transaccional: "token_transaccional";
    readonly comprobante_pdf_url: "comprobante_pdf_url";
};
export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum];
export declare const TicketScalarFieldEnum: {
    readonly id_ticket: "id_ticket";
    readonly id_cliente: "id_cliente";
    readonly id_empresa: "id_empresa";
    readonly id_usuario_asignado: "id_usuario_asignado";
    readonly id_categoria: "id_categoria";
    readonly id_conversacion_bot: "id_conversacion_bot";
    readonly codigo_seguimiento: "codigo_seguimiento";
    readonly prioridad: "prioridad";
    readonly estado: "estado";
    readonly descripcion: "descripcion";
    readonly fecha_creacion: "fecha_creacion";
    readonly fecha_cierre: "fecha_cierre";
    readonly origen: "origen";
    readonly resuelto_remotamente: "resuelto_remotamente";
};
export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum];
export declare const Plantilla_notificacionScalarFieldEnum: {
    readonly id_plantilla: "id_plantilla";
    readonly tipo_evento: "tipo_evento";
    readonly canal: "canal";
    readonly contenido_texto: "contenido_texto";
    readonly activa: "activa";
};
export type Plantilla_notificacionScalarFieldEnum = (typeof Plantilla_notificacionScalarFieldEnum)[keyof typeof Plantilla_notificacionScalarFieldEnum];
export declare const Log_notificacionScalarFieldEnum: {
    readonly id_notificacion: "id_notificacion";
    readonly id_cliente: "id_cliente";
    readonly id_plantilla: "id_plantilla";
    readonly canal: "canal";
    readonly fecha_envio: "fecha_envio";
    readonly estado_envio: "estado_envio";
};
export type Log_notificacionScalarFieldEnum = (typeof Log_notificacionScalarFieldEnum)[keyof typeof Log_notificacionScalarFieldEnum];
export declare const Tipo_equipoScalarFieldEnum: {
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly id_empresa: "id_empresa";
    readonly nombre: "nombre";
    readonly categoria: "categoria";
    readonly requiere_serie_individual: "requiere_serie_individual";
    readonly ficha_tecnica_pdf_url: "ficha_tecnica_pdf_url";
    readonly activo: "activo";
};
export type Tipo_equipoScalarFieldEnum = (typeof Tipo_equipoScalarFieldEnum)[keyof typeof Tipo_equipoScalarFieldEnum];
export declare const Unidad_equipoScalarFieldEnum: {
    readonly id_unidad: "id_unidad";
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly id_empresa: "id_empresa";
    readonly numero_serie: "numero_serie";
    readonly modelo: "modelo";
    readonly estado: "estado";
    readonly fecha_adquisicion: "fecha_adquisicion";
    readonly fecha_venc_garantia: "fecha_venc_garantia";
    readonly diagnostico_tecnico: "diagnostico_tecnico";
    readonly id_cliente_instalado: "id_cliente_instalado";
    readonly id_bodega_actual: "id_bodega_actual";
    readonly numero_poste: "numero_poste";
    readonly id_caja_nap: "id_caja_nap";
};
export type Unidad_equipoScalarFieldEnum = (typeof Unidad_equipoScalarFieldEnum)[keyof typeof Unidad_equipoScalarFieldEnum];
export declare const Caja_napScalarFieldEnum: {
    readonly id_caja_nap: "id_caja_nap";
    readonly id_empresa: "id_empresa";
    readonly id_mufa: "id_mufa";
    readonly identificador_unico: "identificador_unico";
    readonly numero_poste: "numero_poste";
    readonly zona: "zona";
    readonly capacidad_puertos: "capacidad_puertos";
    readonly latitud: "latitud";
    readonly longitud: "longitud";
};
export type Caja_napScalarFieldEnum = (typeof Caja_napScalarFieldEnum)[keyof typeof Caja_napScalarFieldEnum];
export declare const Orden_trabajoScalarFieldEnum: {
    readonly id_ot: "id_ot";
    readonly id_empresa: "id_empresa";
    readonly id_cliente: "id_cliente";
    readonly id_tecnico: "id_tecnico";
    readonly id_tecnico_externo: "id_tecnico_externo";
    readonly id_direccion: "id_direccion";
    readonly id_ticket: "id_ticket";
    readonly tipo_ot: "tipo_ot";
    readonly prioridad: "prioridad";
    readonly estado: "estado";
    readonly fecha_creacion: "fecha_creacion";
    readonly fecha_programada: "fecha_programada";
    readonly fecha_completada: "fecha_completada";
    readonly potencia_optica_dbm: "potencia_optica_dbm";
    readonly observaciones: "observaciones";
    readonly resuelto_remotamente: "resuelto_remotamente";
};
export type Orden_trabajoScalarFieldEnum = (typeof Orden_trabajoScalarFieldEnum)[keyof typeof Orden_trabajoScalarFieldEnum];
export declare const Historial_otScalarFieldEnum: {
    readonly id_historial_ot: "id_historial_ot";
    readonly id_ot: "id_ot";
    readonly id_usuario: "id_usuario";
    readonly estado_anterior: "estado_anterior";
    readonly estado_nuevo: "estado_nuevo";
    readonly observaciones: "observaciones";
    readonly fecha_hora: "fecha_hora";
};
export type Historial_otScalarFieldEnum = (typeof Historial_otScalarFieldEnum)[keyof typeof Historial_otScalarFieldEnum];
export declare const Categoria_fallaScalarFieldEnum: {
    readonly id_categoria: "id_categoria";
    readonly nombre: "nombre";
    readonly sla_horas: "sla_horas";
};
export type Categoria_fallaScalarFieldEnum = (typeof Categoria_fallaScalarFieldEnum)[keyof typeof Categoria_fallaScalarFieldEnum];
export declare const Uso_material_otScalarFieldEnum: {
    readonly id_uso: "id_uso";
    readonly id_ot: "id_ot";
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly id_unidad: "id_unidad";
    readonly cantidad: "cantidad";
};
export type Uso_material_otScalarFieldEnum = (typeof Uso_material_otScalarFieldEnum)[keyof typeof Uso_material_otScalarFieldEnum];
export declare const Evidencia_fotoScalarFieldEnum: {
    readonly id_foto: "id_foto";
    readonly id_ot: "id_ot";
    readonly url_cloudinary: "url_cloudinary";
    readonly formato: "formato";
    readonly tamano_kb: "tamano_kb";
    readonly fecha_subida: "fecha_subida";
};
export type Evidencia_fotoScalarFieldEnum = (typeof Evidencia_fotoScalarFieldEnum)[keyof typeof Evidencia_fotoScalarFieldEnum];
export declare const Llamada_cortesScalarFieldEnum: {
    readonly id_llamada: "id_llamada";
    readonly id_ot: "id_ot";
    readonly resultado: "resultado";
    readonly observaciones: "observaciones";
    readonly fecha_llamada: "fecha_llamada";
};
export type Llamada_cortesScalarFieldEnum = (typeof Llamada_cortesScalarFieldEnum)[keyof typeof Llamada_cortesScalarFieldEnum];
export declare const Lista_negraScalarFieldEnum: {
    readonly id_vetado: "id_vetado";
    readonly id_cliente: "id_cliente";
    readonly rut_vetado: "rut_vetado";
    readonly direccion_vetada: "direccion_vetada";
    readonly motivo: "motivo";
    readonly fecha_registro: "fecha_registro";
    readonly id_usuario_registro: "id_usuario_registro";
};
export type Lista_negraScalarFieldEnum = (typeof Lista_negraScalarFieldEnum)[keyof typeof Lista_negraScalarFieldEnum];
export declare const BodegaScalarFieldEnum: {
    readonly id_bodega: "id_bodega";
    readonly id_empresa: "id_empresa";
    readonly nombre: "nombre";
    readonly direccion: "direccion";
    readonly activa: "activa";
};
export type BodegaScalarFieldEnum = (typeof BodegaScalarFieldEnum)[keyof typeof BodegaScalarFieldEnum];
export declare const Stock_consumibleScalarFieldEnum: {
    readonly id_stock: "id_stock";
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly id_bodega: "id_bodega";
    readonly cantidad_disponible: "cantidad_disponible";
    readonly umbral_minimo: "umbral_minimo";
};
export type Stock_consumibleScalarFieldEnum = (typeof Stock_consumibleScalarFieldEnum)[keyof typeof Stock_consumibleScalarFieldEnum];
export declare const ProveedorScalarFieldEnum: {
    readonly id_proveedor: "id_proveedor";
    readonly nombre_comercial: "nombre_comercial";
    readonly rut_proveedor: "rut_proveedor";
    readonly contacto: "contacto";
    readonly telefono: "telefono";
    readonly email: "email";
};
export type ProveedorScalarFieldEnum = (typeof ProveedorScalarFieldEnum)[keyof typeof ProveedorScalarFieldEnum];
export declare const Orden_ingresoScalarFieldEnum: {
    readonly id_orden: "id_orden";
    readonly id_proveedor: "id_proveedor";
    readonly id_bodega: "id_bodega";
    readonly id_empresa: "id_empresa";
    readonly id_usuario_registro: "id_usuario_registro";
    readonly fecha_creacion: "fecha_creacion";
    readonly fecha_recepcion: "fecha_recepcion";
    readonly estado: "estado";
    readonly factura_proveedor: "factura_proveedor";
};
export type Orden_ingresoScalarFieldEnum = (typeof Orden_ingresoScalarFieldEnum)[keyof typeof Orden_ingresoScalarFieldEnum];
export declare const Detalle_orden_ingresoScalarFieldEnum: {
    readonly id_detalle: "id_detalle";
    readonly id_orden: "id_orden";
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly cantidad_solicitada: "cantidad_solicitada";
    readonly cantidad_recibida: "cantidad_recibida";
};
export type Detalle_orden_ingresoScalarFieldEnum = (typeof Detalle_orden_ingresoScalarFieldEnum)[keyof typeof Detalle_orden_ingresoScalarFieldEnum];
export declare const Historial_estado_equipoScalarFieldEnum: {
    readonly id_historial: "id_historial";
    readonly id_unidad: "id_unidad";
    readonly id_usuario: "id_usuario";
    readonly estado_anterior: "estado_anterior";
    readonly estado_nuevo: "estado_nuevo";
    readonly motivo: "motivo";
    readonly fecha_hora: "fecha_hora";
};
export type Historial_estado_equipoScalarFieldEnum = (typeof Historial_estado_equipoScalarFieldEnum)[keyof typeof Historial_estado_equipoScalarFieldEnum];
export declare const Movimiento_inventarioScalarFieldEnum: {
    readonly id_movimiento: "id_movimiento";
    readonly id_tipo_equipo: "id_tipo_equipo";
    readonly id_unidad: "id_unidad";
    readonly id_empresa_origen: "id_empresa_origen";
    readonly id_empresa_destino: "id_empresa_destino";
    readonly id_bodega_origen: "id_bodega_origen";
    readonly id_bodega_destino: "id_bodega_destino";
    readonly id_usuario: "id_usuario";
    readonly tipo_movimiento: "tipo_movimiento";
    readonly cantidad: "cantidad";
    readonly fecha: "fecha";
    readonly referencia_id: "referencia_id";
};
export type Movimiento_inventarioScalarFieldEnum = (typeof Movimiento_inventarioScalarFieldEnum)[keyof typeof Movimiento_inventarioScalarFieldEnum];
export declare const Prestamo_externoScalarFieldEnum: {
    readonly id_prestamo: "id_prestamo";
    readonly id_unidad: "id_unidad";
    readonly id_empresa_prestamista: "id_empresa_prestamista";
    readonly destinatario: "destinatario";
    readonly motivo: "motivo";
    readonly fecha_salida: "fecha_salida";
    readonly fecha_retorno_esperada: "fecha_retorno_esperada";
    readonly fecha_retorno_real: "fecha_retorno_real";
    readonly estado: "estado";
    readonly condicion_retorno: "condicion_retorno";
};
export type Prestamo_externoScalarFieldEnum = (typeof Prestamo_externoScalarFieldEnum)[keyof typeof Prestamo_externoScalarFieldEnum];
export declare const Baja_equipoScalarFieldEnum: {
    readonly id_baja: "id_baja";
    readonly id_unidad: "id_unidad";
    readonly id_usuario: "id_usuario";
    readonly motivo_baja: "motivo_baja";
    readonly tipo_baja: "tipo_baja";
    readonly donacion_destinatario: "donacion_destinatario";
    readonly fecha_baja: "fecha_baja";
};
export type Baja_equipoScalarFieldEnum = (typeof Baja_equipoScalarFieldEnum)[keyof typeof Baja_equipoScalarFieldEnum];
export declare const Sesion_portalScalarFieldEnum: {
    readonly id_sesion: "id_sesion";
    readonly id_cliente: "id_cliente";
    readonly token: "token";
    readonly fecha_inicio: "fecha_inicio";
    readonly fecha_expiracion: "fecha_expiracion";
    readonly ip_origen: "ip_origen";
};
export type Sesion_portalScalarFieldEnum = (typeof Sesion_portalScalarFieldEnum)[keyof typeof Sesion_portalScalarFieldEnum];
export declare const Intento_fallidoScalarFieldEnum: {
    readonly id_intento: "id_intento";
    readonly id_empresa: "id_empresa";
    readonly ip_address: "ip_address";
    readonly rut_intentado: "rut_intentado";
    readonly timestamp: "timestamp";
    readonly bloqueado_hasta: "bloqueado_hasta";
};
export type Intento_fallidoScalarFieldEnum = (typeof Intento_fallidoScalarFieldEnum)[keyof typeof Intento_fallidoScalarFieldEnum];
export declare const Punto_coberturaScalarFieldEnum: {
    readonly id_punto: "id_punto";
    readonly id_empresa: "id_empresa";
    readonly latitud: "latitud";
    readonly longitud: "longitud";
    readonly densidad_cobertura: "densidad_cobertura";
    readonly tipo_cobertura: "tipo_cobertura";
};
export type Punto_coberturaScalarFieldEnum = (typeof Punto_coberturaScalarFieldEnum)[keyof typeof Punto_coberturaScalarFieldEnum];
export declare const Consentimiento_cookiesScalarFieldEnum: {
    readonly id_consentimiento: "id_consentimiento";
    readonly id_cliente: "id_cliente";
    readonly ip_anonimizada: "ip_anonimizada";
    readonly version_documento: "version_documento";
    readonly fecha_aceptacion: "fecha_aceptacion";
    readonly acepto: "acepto";
};
export type Consentimiento_cookiesScalarFieldEnum = (typeof Consentimiento_cookiesScalarFieldEnum)[keyof typeof Consentimiento_cookiesScalarFieldEnum];
export declare const Configuracion_seoScalarFieldEnum: {
    readonly id_seo: "id_seo";
    readonly id_empresa: "id_empresa";
    readonly seccion_url: "seccion_url";
    readonly meta_titulo: "meta_titulo";
    readonly meta_descripcion: "meta_descripcion";
    readonly og_tags: "og_tags";
    readonly fecha_actualizacion: "fecha_actualizacion";
};
export type Configuracion_seoScalarFieldEnum = (typeof Configuracion_seoScalarFieldEnum)[keyof typeof Configuracion_seoScalarFieldEnum];
export declare const Tecnico_externoScalarFieldEnum: {
    readonly id_tecnico_ext: "id_tecnico_ext";
    readonly nombre_completo: "nombre_completo";
    readonly empresa: "empresa";
    readonly telefono: "telefono";
    readonly activo: "activo";
};
export type Tecnico_externoScalarFieldEnum = (typeof Tecnico_externoScalarFieldEnum)[keyof typeof Tecnico_externoScalarFieldEnum];
export declare const OltScalarFieldEnum: {
    readonly id_olt: "id_olt";
    readonly id_empresa: "id_empresa";
    readonly nombre: "nombre";
    readonly ubicacion: "ubicacion";
    readonly ip_gestion: "ip_gestion";
};
export type OltScalarFieldEnum = (typeof OltScalarFieldEnum)[keyof typeof OltScalarFieldEnum];
export declare const Tarjeta_ponScalarFieldEnum: {
    readonly id_tarjeta: "id_tarjeta";
    readonly id_olt: "id_olt";
    readonly numero_tarjeta: "numero_tarjeta";
    readonly total_puertos: "total_puertos";
};
export type Tarjeta_ponScalarFieldEnum = (typeof Tarjeta_ponScalarFieldEnum)[keyof typeof Tarjeta_ponScalarFieldEnum];
export declare const MufaScalarFieldEnum: {
    readonly id_mufa: "id_mufa";
    readonly id_tarjeta_pon: "id_tarjeta_pon";
    readonly identificador: "identificador";
    readonly ubicacion: "ubicacion";
};
export type MufaScalarFieldEnum = (typeof MufaScalarFieldEnum)[keyof typeof MufaScalarFieldEnum];
export declare const Puerto_napScalarFieldEnum: {
    readonly id_puerto: "id_puerto";
    readonly id_caja_nap: "id_caja_nap";
    readonly numero_puerto: "numero_puerto";
    readonly estado: "estado";
    readonly id_cliente_asociado: "id_cliente_asociado";
};
export type Puerto_napScalarFieldEnum = (typeof Puerto_napScalarFieldEnum)[keyof typeof Puerto_napScalarFieldEnum];
export declare const Monitoreo_ontScalarFieldEnum: {
    readonly id_monitoreo: "id_monitoreo";
    readonly id_unidad: "id_unidad";
    readonly id_cliente: "id_cliente";
    readonly id_caja_nap: "id_caja_nap";
    readonly potencia_actual_dbm: "potencia_actual_dbm";
    readonly timestamp_medicion: "timestamp_medicion";
    readonly estado_conexion: "estado_conexion";
};
export type Monitoreo_ontScalarFieldEnum = (typeof Monitoreo_ontScalarFieldEnum)[keyof typeof Monitoreo_ontScalarFieldEnum];
export declare const Historial_conexion_ontScalarFieldEnum: {
    readonly id_historial_ont: "id_historial_ont";
    readonly id_unidad: "id_unidad";
    readonly evento: "evento";
    readonly timestamp: "timestamp";
};
export type Historial_conexion_ontScalarFieldEnum = (typeof Historial_conexion_ontScalarFieldEnum)[keyof typeof Historial_conexion_ontScalarFieldEnum];
export declare const ProspectoScalarFieldEnum: {
    readonly id_prospecto: "id_prospecto";
    readonly id_empresa: "id_empresa";
    readonly id_usuario_comercial: "id_usuario_comercial";
    readonly id_cliente: "id_cliente";
    readonly rut: "rut";
    readonly nombre_completo: "nombre_completo";
    readonly email: "email";
    readonly telefono: "telefono";
    readonly direccion: "direccion";
    readonly estado_pipeline: "estado_pipeline";
    readonly motivo_perdida: "motivo_perdida";
    readonly tiempo_conversion_dias: "tiempo_conversion_dias";
    readonly fecha_creacion: "fecha_creacion";
    readonly fecha_conversion: "fecha_conversion";
};
export type ProspectoScalarFieldEnum = (typeof ProspectoScalarFieldEnum)[keyof typeof ProspectoScalarFieldEnum];
export declare const CotizacionScalarFieldEnum: {
    readonly id_cotizacion: "id_cotizacion";
    readonly id_prospecto: "id_prospecto";
    readonly id_plan: "id_plan";
    readonly pdf_url: "pdf_url";
    readonly fecha_envio: "fecha_envio";
    readonly factibilidad_verificada: "factibilidad_verificada";
};
export type CotizacionScalarFieldEnum = (typeof CotizacionScalarFieldEnum)[keyof typeof CotizacionScalarFieldEnum];
export declare const Canal_whatsappScalarFieldEnum: {
    readonly id_canal: "id_canal";
    readonly id_empresa: "id_empresa";
    readonly numero_telefono: "numero_telefono";
    readonly nombre_canal: "nombre_canal";
    readonly activo: "activo";
};
export type Canal_whatsappScalarFieldEnum = (typeof Canal_whatsappScalarFieldEnum)[keyof typeof Canal_whatsappScalarFieldEnum];
export declare const Plantilla_whatsappScalarFieldEnum: {
    readonly id_plantilla_wa: "id_plantilla_wa";
    readonly id_canal: "id_canal";
    readonly nombre_plantilla: "nombre_plantilla";
    readonly contenido: "contenido";
    readonly tipo_uso: "tipo_uso";
};
export type Plantilla_whatsappScalarFieldEnum = (typeof Plantilla_whatsappScalarFieldEnum)[keyof typeof Plantilla_whatsappScalarFieldEnum];
export declare const Mensaje_whatsappScalarFieldEnum: {
    readonly id_mensaje_wa: "id_mensaje_wa";
    readonly id_canal: "id_canal";
    readonly id_cliente: "id_cliente";
    readonly id_plantilla_wa: "id_plantilla_wa";
    readonly contenido: "contenido";
    readonly timestamp: "timestamp";
    readonly origen: "origen";
    readonly estado: "estado";
};
export type Mensaje_whatsappScalarFieldEnum = (typeof Mensaje_whatsappScalarFieldEnum)[keyof typeof Mensaje_whatsappScalarFieldEnum];
export declare const Conversacion_botScalarFieldEnum: {
    readonly id_conversacion: "id_conversacion";
    readonly id_cliente: "id_cliente";
    readonly id_canal_wa: "id_canal_wa";
    readonly plataforma: "plataforma";
    readonly fecha_inicio: "fecha_inicio";
    readonly fecha_fin: "fecha_fin";
    readonly derivada_humano: "derivada_humano";
};
export type Conversacion_botScalarFieldEnum = (typeof Conversacion_botScalarFieldEnum)[keyof typeof Conversacion_botScalarFieldEnum];
export declare const Mensaje_botScalarFieldEnum: {
    readonly id_mensaje: "id_mensaje";
    readonly id_conversacion: "id_conversacion";
    readonly rol: "rol";
    readonly contenido: "contenido";
    readonly timestamp: "timestamp";
    readonly datos_sensibles: "datos_sensibles";
};
export type Mensaje_botScalarFieldEnum = (typeof Mensaje_botScalarFieldEnum)[keyof typeof Mensaje_botScalarFieldEnum];
export declare const Credenciales_tvipScalarFieldEnum: {
    readonly id_credencial: "id_credencial";
    readonly id_contrato: "id_contrato";
    readonly usuario_tvip: "usuario_tvip";
    readonly password_tvip_hash: "password_tvip_hash";
    readonly fecha_generacion: "fecha_generacion";
};
export type Credenciales_tvipScalarFieldEnum = (typeof Credenciales_tvipScalarFieldEnum)[keyof typeof Credenciales_tvipScalarFieldEnum];
export declare const Transferencia_equipoScalarFieldEnum: {
    readonly id_transferencia: "id_transferencia";
    readonly id_empresa_origen: "id_empresa_origen";
    readonly id_empresa_destino: "id_empresa_destino";
    readonly id_usuario_registro: "id_usuario_registro";
    readonly fecha_transferencia: "fecha_transferencia";
    readonly observaciones: "observaciones";
};
export type Transferencia_equipoScalarFieldEnum = (typeof Transferencia_equipoScalarFieldEnum)[keyof typeof Transferencia_equipoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    empresa?: Prisma.empresaOmit;
    usuario?: Prisma.usuarioOmit;
    rol?: Prisma.rolOmit;
    usuario_rol?: Prisma.usuario_rolOmit;
    log_auditoria?: Prisma.log_auditoriaOmit;
    cliente?: Prisma.clienteOmit;
    direccion_servicio?: Prisma.direccion_servicioOmit;
    plan?: Prisma.planOmit;
    contrato?: Prisma.contratoOmit;
    factura?: Prisma.facturaOmit;
    pago?: Prisma.pagoOmit;
    ticket?: Prisma.ticketOmit;
    plantilla_notificacion?: Prisma.plantilla_notificacionOmit;
    log_notificacion?: Prisma.log_notificacionOmit;
    tipo_equipo?: Prisma.tipo_equipoOmit;
    unidad_equipo?: Prisma.unidad_equipoOmit;
    caja_nap?: Prisma.caja_napOmit;
    orden_trabajo?: Prisma.orden_trabajoOmit;
    historial_ot?: Prisma.historial_otOmit;
    categoria_falla?: Prisma.categoria_fallaOmit;
    uso_material_ot?: Prisma.uso_material_otOmit;
    evidencia_foto?: Prisma.evidencia_fotoOmit;
    llamada_cortes?: Prisma.llamada_cortesOmit;
    lista_negra?: Prisma.lista_negraOmit;
    bodega?: Prisma.bodegaOmit;
    stock_consumible?: Prisma.stock_consumibleOmit;
    proveedor?: Prisma.proveedorOmit;
    orden_ingreso?: Prisma.orden_ingresoOmit;
    detalle_orden_ingreso?: Prisma.detalle_orden_ingresoOmit;
    historial_estado_equipo?: Prisma.historial_estado_equipoOmit;
    movimiento_inventario?: Prisma.movimiento_inventarioOmit;
    prestamo_externo?: Prisma.prestamo_externoOmit;
    baja_equipo?: Prisma.baja_equipoOmit;
    sesion_portal?: Prisma.sesion_portalOmit;
    intento_fallido?: Prisma.intento_fallidoOmit;
    punto_cobertura?: Prisma.punto_coberturaOmit;
    consentimiento_cookies?: Prisma.consentimiento_cookiesOmit;
    configuracion_seo?: Prisma.configuracion_seoOmit;
    tecnico_externo?: Prisma.tecnico_externoOmit;
    olt?: Prisma.oltOmit;
    tarjeta_pon?: Prisma.tarjeta_ponOmit;
    mufa?: Prisma.mufaOmit;
    puerto_nap?: Prisma.puerto_napOmit;
    monitoreo_ont?: Prisma.monitoreo_ontOmit;
    historial_conexion_ont?: Prisma.historial_conexion_ontOmit;
    prospecto?: Prisma.prospectoOmit;
    cotizacion?: Prisma.cotizacionOmit;
    canal_whatsapp?: Prisma.canal_whatsappOmit;
    plantilla_whatsapp?: Prisma.plantilla_whatsappOmit;
    mensaje_whatsapp?: Prisma.mensaje_whatsappOmit;
    conversacion_bot?: Prisma.conversacion_botOmit;
    mensaje_bot?: Prisma.mensaje_botOmit;
    credenciales_tvip?: Prisma.credenciales_tvipOmit;
    transferencia_equipo?: Prisma.transferencia_equipoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
