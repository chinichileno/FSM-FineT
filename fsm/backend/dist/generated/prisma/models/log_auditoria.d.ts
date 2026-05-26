import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type log_auditoriaModel = runtime.Types.Result.DefaultSelection<Prisma.$log_auditoriaPayload>;
export type AggregateLog_auditoria = {
    _count: Log_auditoriaCountAggregateOutputType | null;
    _avg: Log_auditoriaAvgAggregateOutputType | null;
    _sum: Log_auditoriaSumAggregateOutputType | null;
    _min: Log_auditoriaMinAggregateOutputType | null;
    _max: Log_auditoriaMaxAggregateOutputType | null;
};
export type Log_auditoriaAvgAggregateOutputType = {
    id_log: number | null;
    id_usuario: number | null;
    id_entidad_afectada: number | null;
};
export type Log_auditoriaSumAggregateOutputType = {
    id_log: bigint | null;
    id_usuario: number | null;
    id_entidad_afectada: number | null;
};
export type Log_auditoriaMinAggregateOutputType = {
    id_log: bigint | null;
    id_usuario: number | null;
    accion: string | null;
    entidad_afectada: string | null;
    id_entidad_afectada: number | null;
    ip_origen: string | null;
    fecha_hora: Date | null;
};
export type Log_auditoriaMaxAggregateOutputType = {
    id_log: bigint | null;
    id_usuario: number | null;
    accion: string | null;
    entidad_afectada: string | null;
    id_entidad_afectada: number | null;
    ip_origen: string | null;
    fecha_hora: Date | null;
};
export type Log_auditoriaCountAggregateOutputType = {
    id_log: number;
    id_usuario: number;
    accion: number;
    entidad_afectada: number;
    id_entidad_afectada: number;
    valor_anterior: number;
    valor_nuevo: number;
    ip_origen: number;
    fecha_hora: number;
    _all: number;
};
export type Log_auditoriaAvgAggregateInputType = {
    id_log?: true;
    id_usuario?: true;
    id_entidad_afectada?: true;
};
export type Log_auditoriaSumAggregateInputType = {
    id_log?: true;
    id_usuario?: true;
    id_entidad_afectada?: true;
};
export type Log_auditoriaMinAggregateInputType = {
    id_log?: true;
    id_usuario?: true;
    accion?: true;
    entidad_afectada?: true;
    id_entidad_afectada?: true;
    ip_origen?: true;
    fecha_hora?: true;
};
export type Log_auditoriaMaxAggregateInputType = {
    id_log?: true;
    id_usuario?: true;
    accion?: true;
    entidad_afectada?: true;
    id_entidad_afectada?: true;
    ip_origen?: true;
    fecha_hora?: true;
};
export type Log_auditoriaCountAggregateInputType = {
    id_log?: true;
    id_usuario?: true;
    accion?: true;
    entidad_afectada?: true;
    id_entidad_afectada?: true;
    valor_anterior?: true;
    valor_nuevo?: true;
    ip_origen?: true;
    fecha_hora?: true;
    _all?: true;
};
export type Log_auditoriaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_auditoriaWhereInput;
    orderBy?: Prisma.log_auditoriaOrderByWithRelationInput | Prisma.log_auditoriaOrderByWithRelationInput[];
    cursor?: Prisma.log_auditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Log_auditoriaCountAggregateInputType;
    _avg?: Log_auditoriaAvgAggregateInputType;
    _sum?: Log_auditoriaSumAggregateInputType;
    _min?: Log_auditoriaMinAggregateInputType;
    _max?: Log_auditoriaMaxAggregateInputType;
};
export type GetLog_auditoriaAggregateType<T extends Log_auditoriaAggregateArgs> = {
    [P in keyof T & keyof AggregateLog_auditoria]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLog_auditoria[P]> : Prisma.GetScalarType<T[P], AggregateLog_auditoria[P]>;
};
export type log_auditoriaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_auditoriaWhereInput;
    orderBy?: Prisma.log_auditoriaOrderByWithAggregationInput | Prisma.log_auditoriaOrderByWithAggregationInput[];
    by: Prisma.Log_auditoriaScalarFieldEnum[] | Prisma.Log_auditoriaScalarFieldEnum;
    having?: Prisma.log_auditoriaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Log_auditoriaCountAggregateInputType | true;
    _avg?: Log_auditoriaAvgAggregateInputType;
    _sum?: Log_auditoriaSumAggregateInputType;
    _min?: Log_auditoriaMinAggregateInputType;
    _max?: Log_auditoriaMaxAggregateInputType;
};
export type Log_auditoriaGroupByOutputType = {
    id_log: bigint;
    id_usuario: number | null;
    accion: string;
    entidad_afectada: string | null;
    id_entidad_afectada: number | null;
    valor_anterior: runtime.JsonValue | null;
    valor_nuevo: runtime.JsonValue | null;
    ip_origen: string | null;
    fecha_hora: Date;
    _count: Log_auditoriaCountAggregateOutputType | null;
    _avg: Log_auditoriaAvgAggregateOutputType | null;
    _sum: Log_auditoriaSumAggregateOutputType | null;
    _min: Log_auditoriaMinAggregateOutputType | null;
    _max: Log_auditoriaMaxAggregateOutputType | null;
};
export type GetLog_auditoriaGroupByPayload<T extends log_auditoriaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Log_auditoriaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Log_auditoriaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Log_auditoriaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Log_auditoriaGroupByOutputType[P]>;
}>>;
export type log_auditoriaWhereInput = {
    AND?: Prisma.log_auditoriaWhereInput | Prisma.log_auditoriaWhereInput[];
    OR?: Prisma.log_auditoriaWhereInput[];
    NOT?: Prisma.log_auditoriaWhereInput | Prisma.log_auditoriaWhereInput[];
    id_log?: Prisma.BigIntFilter<"log_auditoria"> | bigint | number;
    id_usuario?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    accion?: Prisma.StringFilter<"log_auditoria"> | string;
    entidad_afectada?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    id_entidad_afectada?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    valor_anterior?: Prisma.JsonNullableFilter<"log_auditoria">;
    valor_nuevo?: Prisma.JsonNullableFilter<"log_auditoria">;
    ip_origen?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"log_auditoria"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type log_auditoriaOrderByWithRelationInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidad_afectada?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type log_auditoriaWhereUniqueInput = Prisma.AtLeast<{
    id_log?: bigint | number;
    AND?: Prisma.log_auditoriaWhereInput | Prisma.log_auditoriaWhereInput[];
    OR?: Prisma.log_auditoriaWhereInput[];
    NOT?: Prisma.log_auditoriaWhereInput | Prisma.log_auditoriaWhereInput[];
    id_usuario?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    accion?: Prisma.StringFilter<"log_auditoria"> | string;
    entidad_afectada?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    id_entidad_afectada?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    valor_anterior?: Prisma.JsonNullableFilter<"log_auditoria">;
    valor_nuevo?: Prisma.JsonNullableFilter<"log_auditoria">;
    ip_origen?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"log_auditoria"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_log">;
export type log_auditoriaOrderByWithAggregationInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidad_afectada?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    valor_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    _count?: Prisma.log_auditoriaCountOrderByAggregateInput;
    _avg?: Prisma.log_auditoriaAvgOrderByAggregateInput;
    _max?: Prisma.log_auditoriaMaxOrderByAggregateInput;
    _min?: Prisma.log_auditoriaMinOrderByAggregateInput;
    _sum?: Prisma.log_auditoriaSumOrderByAggregateInput;
};
export type log_auditoriaScalarWhereWithAggregatesInput = {
    AND?: Prisma.log_auditoriaScalarWhereWithAggregatesInput | Prisma.log_auditoriaScalarWhereWithAggregatesInput[];
    OR?: Prisma.log_auditoriaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.log_auditoriaScalarWhereWithAggregatesInput | Prisma.log_auditoriaScalarWhereWithAggregatesInput[];
    id_log?: Prisma.BigIntWithAggregatesFilter<"log_auditoria"> | bigint | number;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"log_auditoria"> | number | null;
    accion?: Prisma.StringWithAggregatesFilter<"log_auditoria"> | string;
    entidad_afectada?: Prisma.StringNullableWithAggregatesFilter<"log_auditoria"> | string | null;
    id_entidad_afectada?: Prisma.IntNullableWithAggregatesFilter<"log_auditoria"> | number | null;
    valor_anterior?: Prisma.JsonNullableWithAggregatesFilter<"log_auditoria">;
    valor_nuevo?: Prisma.JsonNullableWithAggregatesFilter<"log_auditoria">;
    ip_origen?: Prisma.StringNullableWithAggregatesFilter<"log_auditoria"> | string | null;
    fecha_hora?: Prisma.DateTimeWithAggregatesFilter<"log_auditoria"> | Date | string;
};
export type log_auditoriaCreateInput = {
    id_log?: bigint | number;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
    usuario?: Prisma.usuarioCreateNestedOneWithoutLog_auditoriaInput;
};
export type log_auditoriaUncheckedCreateInput = {
    id_log?: bigint | number;
    id_usuario?: number | null;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
};
export type log_auditoriaUpdateInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneWithoutLog_auditoriaNestedInput;
};
export type log_auditoriaUncheckedUpdateInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type log_auditoriaCreateManyInput = {
    id_log?: bigint | number;
    id_usuario?: number | null;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
};
export type log_auditoriaUpdateManyMutationInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type log_auditoriaUncheckedUpdateManyInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Log_auditoriaListRelationFilter = {
    every?: Prisma.log_auditoriaWhereInput;
    some?: Prisma.log_auditoriaWhereInput;
    none?: Prisma.log_auditoriaWhereInput;
};
export type log_auditoriaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type log_auditoriaCountOrderByAggregateInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidad_afectada?: Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrder;
    valor_anterior?: Prisma.SortOrder;
    valor_nuevo?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type log_auditoriaAvgOrderByAggregateInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrder;
};
export type log_auditoriaMaxOrderByAggregateInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidad_afectada?: Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type log_auditoriaMinOrderByAggregateInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    accion?: Prisma.SortOrder;
    entidad_afectada?: Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type log_auditoriaSumOrderByAggregateInput = {
    id_log?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_entidad_afectada?: Prisma.SortOrder;
};
export type log_auditoriaCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.log_auditoriaCreateWithoutUsuarioInput[] | Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput | Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.log_auditoriaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
};
export type log_auditoriaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.log_auditoriaCreateWithoutUsuarioInput[] | Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput | Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.log_auditoriaCreateManyUsuarioInputEnvelope;
    connect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
};
export type log_auditoriaUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.log_auditoriaCreateWithoutUsuarioInput[] | Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput | Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.log_auditoriaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.log_auditoriaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.log_auditoriaCreateManyUsuarioInputEnvelope;
    set?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    disconnect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    delete?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    connect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    update?: Prisma.log_auditoriaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.log_auditoriaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.log_auditoriaUpdateManyWithWhereWithoutUsuarioInput | Prisma.log_auditoriaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.log_auditoriaScalarWhereInput | Prisma.log_auditoriaScalarWhereInput[];
};
export type log_auditoriaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput> | Prisma.log_auditoriaCreateWithoutUsuarioInput[] | Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput | Prisma.log_auditoriaCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.log_auditoriaUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.log_auditoriaUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.log_auditoriaCreateManyUsuarioInputEnvelope;
    set?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    disconnect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    delete?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    connect?: Prisma.log_auditoriaWhereUniqueInput | Prisma.log_auditoriaWhereUniqueInput[];
    update?: Prisma.log_auditoriaUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.log_auditoriaUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.log_auditoriaUpdateManyWithWhereWithoutUsuarioInput | Prisma.log_auditoriaUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.log_auditoriaScalarWhereInput | Prisma.log_auditoriaScalarWhereInput[];
};
export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type log_auditoriaCreateWithoutUsuarioInput = {
    id_log?: bigint | number;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
};
export type log_auditoriaUncheckedCreateWithoutUsuarioInput = {
    id_log?: bigint | number;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
};
export type log_auditoriaCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.log_auditoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput>;
};
export type log_auditoriaCreateManyUsuarioInputEnvelope = {
    data: Prisma.log_auditoriaCreateManyUsuarioInput | Prisma.log_auditoriaCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type log_auditoriaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.log_auditoriaWhereUniqueInput;
    update: Prisma.XOR<Prisma.log_auditoriaUpdateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.log_auditoriaCreateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedCreateWithoutUsuarioInput>;
};
export type log_auditoriaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.log_auditoriaWhereUniqueInput;
    data: Prisma.XOR<Prisma.log_auditoriaUpdateWithoutUsuarioInput, Prisma.log_auditoriaUncheckedUpdateWithoutUsuarioInput>;
};
export type log_auditoriaUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.log_auditoriaScalarWhereInput;
    data: Prisma.XOR<Prisma.log_auditoriaUpdateManyMutationInput, Prisma.log_auditoriaUncheckedUpdateManyWithoutUsuarioInput>;
};
export type log_auditoriaScalarWhereInput = {
    AND?: Prisma.log_auditoriaScalarWhereInput | Prisma.log_auditoriaScalarWhereInput[];
    OR?: Prisma.log_auditoriaScalarWhereInput[];
    NOT?: Prisma.log_auditoriaScalarWhereInput | Prisma.log_auditoriaScalarWhereInput[];
    id_log?: Prisma.BigIntFilter<"log_auditoria"> | bigint | number;
    id_usuario?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    accion?: Prisma.StringFilter<"log_auditoria"> | string;
    entidad_afectada?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    id_entidad_afectada?: Prisma.IntNullableFilter<"log_auditoria"> | number | null;
    valor_anterior?: Prisma.JsonNullableFilter<"log_auditoria">;
    valor_nuevo?: Prisma.JsonNullableFilter<"log_auditoria">;
    ip_origen?: Prisma.StringNullableFilter<"log_auditoria"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"log_auditoria"> | Date | string;
};
export type log_auditoriaCreateManyUsuarioInput = {
    id_log?: bigint | number;
    accion: string;
    entidad_afectada?: string | null;
    id_entidad_afectada?: number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: string | null;
    fecha_hora?: Date | string;
};
export type log_auditoriaUpdateWithoutUsuarioInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type log_auditoriaUncheckedUpdateWithoutUsuarioInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type log_auditoriaUncheckedUpdateManyWithoutUsuarioInput = {
    id_log?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    accion?: Prisma.StringFieldUpdateOperationsInput | string;
    entidad_afectada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_entidad_afectada?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    valor_anterior?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    valor_nuevo?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type log_auditoriaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_log?: boolean;
    id_usuario?: boolean;
    accion?: boolean;
    entidad_afectada?: boolean;
    id_entidad_afectada?: boolean;
    valor_anterior?: boolean;
    valor_nuevo?: boolean;
    ip_origen?: boolean;
    fecha_hora?: boolean;
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["log_auditoria"]>;
export type log_auditoriaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_log?: boolean;
    id_usuario?: boolean;
    accion?: boolean;
    entidad_afectada?: boolean;
    id_entidad_afectada?: boolean;
    valor_anterior?: boolean;
    valor_nuevo?: boolean;
    ip_origen?: boolean;
    fecha_hora?: boolean;
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["log_auditoria"]>;
export type log_auditoriaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_log?: boolean;
    id_usuario?: boolean;
    accion?: boolean;
    entidad_afectada?: boolean;
    id_entidad_afectada?: boolean;
    valor_anterior?: boolean;
    valor_nuevo?: boolean;
    ip_origen?: boolean;
    fecha_hora?: boolean;
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["log_auditoria"]>;
export type log_auditoriaSelectScalar = {
    id_log?: boolean;
    id_usuario?: boolean;
    accion?: boolean;
    entidad_afectada?: boolean;
    id_entidad_afectada?: boolean;
    valor_anterior?: boolean;
    valor_nuevo?: boolean;
    ip_origen?: boolean;
    fecha_hora?: boolean;
};
export type log_auditoriaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_log" | "id_usuario" | "accion" | "entidad_afectada" | "id_entidad_afectada" | "valor_anterior" | "valor_nuevo" | "ip_origen" | "fecha_hora", ExtArgs["result"]["log_auditoria"]>;
export type log_auditoriaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
};
export type log_auditoriaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
};
export type log_auditoriaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.log_auditoria$usuarioArgs<ExtArgs>;
};
export type $log_auditoriaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "log_auditoria";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_log: bigint;
        id_usuario: number | null;
        accion: string;
        entidad_afectada: string | null;
        id_entidad_afectada: number | null;
        valor_anterior: runtime.JsonValue | null;
        valor_nuevo: runtime.JsonValue | null;
        ip_origen: string | null;
        fecha_hora: Date;
    }, ExtArgs["result"]["log_auditoria"]>;
    composites: {};
};
export type log_auditoriaGetPayload<S extends boolean | null | undefined | log_auditoriaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload, S>;
export type log_auditoriaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<log_auditoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Log_auditoriaCountAggregateInputType | true;
};
export interface log_auditoriaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['log_auditoria'];
        meta: {
            name: 'log_auditoria';
        };
    };
    findUnique<T extends log_auditoriaFindUniqueArgs>(args: Prisma.SelectSubset<T, log_auditoriaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends log_auditoriaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, log_auditoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends log_auditoriaFindFirstArgs>(args?: Prisma.SelectSubset<T, log_auditoriaFindFirstArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends log_auditoriaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, log_auditoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends log_auditoriaFindManyArgs>(args?: Prisma.SelectSubset<T, log_auditoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends log_auditoriaCreateArgs>(args: Prisma.SelectSubset<T, log_auditoriaCreateArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends log_auditoriaCreateManyArgs>(args?: Prisma.SelectSubset<T, log_auditoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends log_auditoriaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, log_auditoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends log_auditoriaDeleteArgs>(args: Prisma.SelectSubset<T, log_auditoriaDeleteArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends log_auditoriaUpdateArgs>(args: Prisma.SelectSubset<T, log_auditoriaUpdateArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends log_auditoriaDeleteManyArgs>(args?: Prisma.SelectSubset<T, log_auditoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends log_auditoriaUpdateManyArgs>(args: Prisma.SelectSubset<T, log_auditoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends log_auditoriaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, log_auditoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends log_auditoriaUpsertArgs>(args: Prisma.SelectSubset<T, log_auditoriaUpsertArgs<ExtArgs>>): Prisma.Prisma__log_auditoriaClient<runtime.Types.Result.GetResult<Prisma.$log_auditoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends log_auditoriaCountArgs>(args?: Prisma.Subset<T, log_auditoriaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Log_auditoriaCountAggregateOutputType> : number>;
    aggregate<T extends Log_auditoriaAggregateArgs>(args: Prisma.Subset<T, Log_auditoriaAggregateArgs>): Prisma.PrismaPromise<GetLog_auditoriaAggregateType<T>>;
    groupBy<T extends log_auditoriaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: log_auditoriaGroupByArgs['orderBy'];
    } : {
        orderBy?: log_auditoriaGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, log_auditoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_auditoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: log_auditoriaFieldRefs;
}
export interface Prisma__log_auditoriaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.log_auditoria$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.log_auditoria$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface log_auditoriaFieldRefs {
    readonly id_log: Prisma.FieldRef<"log_auditoria", 'BigInt'>;
    readonly id_usuario: Prisma.FieldRef<"log_auditoria", 'Int'>;
    readonly accion: Prisma.FieldRef<"log_auditoria", 'String'>;
    readonly entidad_afectada: Prisma.FieldRef<"log_auditoria", 'String'>;
    readonly id_entidad_afectada: Prisma.FieldRef<"log_auditoria", 'Int'>;
    readonly valor_anterior: Prisma.FieldRef<"log_auditoria", 'Json'>;
    readonly valor_nuevo: Prisma.FieldRef<"log_auditoria", 'Json'>;
    readonly ip_origen: Prisma.FieldRef<"log_auditoria", 'String'>;
    readonly fecha_hora: Prisma.FieldRef<"log_auditoria", 'DateTime'>;
}
export type log_auditoriaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where: Prisma.log_auditoriaWhereUniqueInput;
};
export type log_auditoriaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where: Prisma.log_auditoriaWhereUniqueInput;
};
export type log_auditoriaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where?: Prisma.log_auditoriaWhereInput;
    orderBy?: Prisma.log_auditoriaOrderByWithRelationInput | Prisma.log_auditoriaOrderByWithRelationInput[];
    cursor?: Prisma.log_auditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_auditoriaScalarFieldEnum | Prisma.Log_auditoriaScalarFieldEnum[];
};
export type log_auditoriaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where?: Prisma.log_auditoriaWhereInput;
    orderBy?: Prisma.log_auditoriaOrderByWithRelationInput | Prisma.log_auditoriaOrderByWithRelationInput[];
    cursor?: Prisma.log_auditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_auditoriaScalarFieldEnum | Prisma.Log_auditoriaScalarFieldEnum[];
};
export type log_auditoriaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where?: Prisma.log_auditoriaWhereInput;
    orderBy?: Prisma.log_auditoriaOrderByWithRelationInput | Prisma.log_auditoriaOrderByWithRelationInput[];
    cursor?: Prisma.log_auditoriaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_auditoriaScalarFieldEnum | Prisma.Log_auditoriaScalarFieldEnum[];
};
export type log_auditoriaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.log_auditoriaCreateInput, Prisma.log_auditoriaUncheckedCreateInput>;
};
export type log_auditoriaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.log_auditoriaCreateManyInput | Prisma.log_auditoriaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type log_auditoriaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    data: Prisma.log_auditoriaCreateManyInput | Prisma.log_auditoriaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.log_auditoriaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type log_auditoriaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.log_auditoriaUpdateInput, Prisma.log_auditoriaUncheckedUpdateInput>;
    where: Prisma.log_auditoriaWhereUniqueInput;
};
export type log_auditoriaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.log_auditoriaUpdateManyMutationInput, Prisma.log_auditoriaUncheckedUpdateManyInput>;
    where?: Prisma.log_auditoriaWhereInput;
    limit?: number;
};
export type log_auditoriaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.log_auditoriaUpdateManyMutationInput, Prisma.log_auditoriaUncheckedUpdateManyInput>;
    where?: Prisma.log_auditoriaWhereInput;
    limit?: number;
    include?: Prisma.log_auditoriaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type log_auditoriaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where: Prisma.log_auditoriaWhereUniqueInput;
    create: Prisma.XOR<Prisma.log_auditoriaCreateInput, Prisma.log_auditoriaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.log_auditoriaUpdateInput, Prisma.log_auditoriaUncheckedUpdateInput>;
};
export type log_auditoriaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
    where: Prisma.log_auditoriaWhereUniqueInput;
};
export type log_auditoriaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_auditoriaWhereInput;
    limit?: number;
};
export type log_auditoria$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type log_auditoriaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_auditoriaSelect<ExtArgs> | null;
    omit?: Prisma.log_auditoriaOmit<ExtArgs> | null;
    include?: Prisma.log_auditoriaInclude<ExtArgs> | null;
};
