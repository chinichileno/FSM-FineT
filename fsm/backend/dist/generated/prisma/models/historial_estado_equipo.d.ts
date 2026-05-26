import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type historial_estado_equipoModel = runtime.Types.Result.DefaultSelection<Prisma.$historial_estado_equipoPayload>;
export type AggregateHistorial_estado_equipo = {
    _count: Historial_estado_equipoCountAggregateOutputType | null;
    _avg: Historial_estado_equipoAvgAggregateOutputType | null;
    _sum: Historial_estado_equipoSumAggregateOutputType | null;
    _min: Historial_estado_equipoMinAggregateOutputType | null;
    _max: Historial_estado_equipoMaxAggregateOutputType | null;
};
export type Historial_estado_equipoAvgAggregateOutputType = {
    id_historial: number | null;
    id_unidad: number | null;
    id_usuario: number | null;
};
export type Historial_estado_equipoSumAggregateOutputType = {
    id_historial: bigint | null;
    id_unidad: number | null;
    id_usuario: number | null;
};
export type Historial_estado_equipoMinAggregateOutputType = {
    id_historial: bigint | null;
    id_unidad: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    motivo: string | null;
    fecha_hora: Date | null;
};
export type Historial_estado_equipoMaxAggregateOutputType = {
    id_historial: bigint | null;
    id_unidad: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    motivo: string | null;
    fecha_hora: Date | null;
};
export type Historial_estado_equipoCountAggregateOutputType = {
    id_historial: number;
    id_unidad: number;
    id_usuario: number;
    estado_anterior: number;
    estado_nuevo: number;
    motivo: number;
    fecha_hora: number;
    _all: number;
};
export type Historial_estado_equipoAvgAggregateInputType = {
    id_historial?: true;
    id_unidad?: true;
    id_usuario?: true;
};
export type Historial_estado_equipoSumAggregateInputType = {
    id_historial?: true;
    id_unidad?: true;
    id_usuario?: true;
};
export type Historial_estado_equipoMinAggregateInputType = {
    id_historial?: true;
    id_unidad?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    motivo?: true;
    fecha_hora?: true;
};
export type Historial_estado_equipoMaxAggregateInputType = {
    id_historial?: true;
    id_unidad?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    motivo?: true;
    fecha_hora?: true;
};
export type Historial_estado_equipoCountAggregateInputType = {
    id_historial?: true;
    id_unidad?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    motivo?: true;
    fecha_hora?: true;
    _all?: true;
};
export type Historial_estado_equipoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_estado_equipoWhereInput;
    orderBy?: Prisma.historial_estado_equipoOrderByWithRelationInput | Prisma.historial_estado_equipoOrderByWithRelationInput[];
    cursor?: Prisma.historial_estado_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Historial_estado_equipoCountAggregateInputType;
    _avg?: Historial_estado_equipoAvgAggregateInputType;
    _sum?: Historial_estado_equipoSumAggregateInputType;
    _min?: Historial_estado_equipoMinAggregateInputType;
    _max?: Historial_estado_equipoMaxAggregateInputType;
};
export type GetHistorial_estado_equipoAggregateType<T extends Historial_estado_equipoAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorial_estado_equipo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorial_estado_equipo[P]> : Prisma.GetScalarType<T[P], AggregateHistorial_estado_equipo[P]>;
};
export type historial_estado_equipoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_estado_equipoWhereInput;
    orderBy?: Prisma.historial_estado_equipoOrderByWithAggregationInput | Prisma.historial_estado_equipoOrderByWithAggregationInput[];
    by: Prisma.Historial_estado_equipoScalarFieldEnum[] | Prisma.Historial_estado_equipoScalarFieldEnum;
    having?: Prisma.historial_estado_equipoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Historial_estado_equipoCountAggregateInputType | true;
    _avg?: Historial_estado_equipoAvgAggregateInputType;
    _sum?: Historial_estado_equipoSumAggregateInputType;
    _min?: Historial_estado_equipoMinAggregateInputType;
    _max?: Historial_estado_equipoMaxAggregateInputType;
};
export type Historial_estado_equipoGroupByOutputType = {
    id_historial: bigint;
    id_unidad: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    motivo: string | null;
    fecha_hora: Date;
    _count: Historial_estado_equipoCountAggregateOutputType | null;
    _avg: Historial_estado_equipoAvgAggregateOutputType | null;
    _sum: Historial_estado_equipoSumAggregateOutputType | null;
    _min: Historial_estado_equipoMinAggregateOutputType | null;
    _max: Historial_estado_equipoMaxAggregateOutputType | null;
};
export type GetHistorial_estado_equipoGroupByPayload<T extends historial_estado_equipoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Historial_estado_equipoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Historial_estado_equipoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Historial_estado_equipoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Historial_estado_equipoGroupByOutputType[P]>;
}>>;
export type historial_estado_equipoWhereInput = {
    AND?: Prisma.historial_estado_equipoWhereInput | Prisma.historial_estado_equipoWhereInput[];
    OR?: Prisma.historial_estado_equipoWhereInput[];
    NOT?: Prisma.historial_estado_equipoWhereInput | Prisma.historial_estado_equipoWhereInput[];
    id_historial?: Prisma.BigIntFilter<"historial_estado_equipo"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_estado_equipo"> | Date | string;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type historial_estado_equipoOrderByWithRelationInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type historial_estado_equipoWhereUniqueInput = Prisma.AtLeast<{
    id_historial?: bigint | number;
    AND?: Prisma.historial_estado_equipoWhereInput | Prisma.historial_estado_equipoWhereInput[];
    OR?: Prisma.historial_estado_equipoWhereInput[];
    NOT?: Prisma.historial_estado_equipoWhereInput | Prisma.historial_estado_equipoWhereInput[];
    id_unidad?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_estado_equipo"> | Date | string;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_historial">;
export type historial_estado_equipoOrderByWithAggregationInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    _count?: Prisma.historial_estado_equipoCountOrderByAggregateInput;
    _avg?: Prisma.historial_estado_equipoAvgOrderByAggregateInput;
    _max?: Prisma.historial_estado_equipoMaxOrderByAggregateInput;
    _min?: Prisma.historial_estado_equipoMinOrderByAggregateInput;
    _sum?: Prisma.historial_estado_equipoSumOrderByAggregateInput;
};
export type historial_estado_equipoScalarWhereWithAggregatesInput = {
    AND?: Prisma.historial_estado_equipoScalarWhereWithAggregatesInput | Prisma.historial_estado_equipoScalarWhereWithAggregatesInput[];
    OR?: Prisma.historial_estado_equipoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.historial_estado_equipoScalarWhereWithAggregatesInput | Prisma.historial_estado_equipoScalarWhereWithAggregatesInput[];
    id_historial?: Prisma.BigIntWithAggregatesFilter<"historial_estado_equipo"> | bigint | number;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"historial_estado_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"historial_estado_equipo"> | number | null;
    estado_anterior?: Prisma.StringNullableWithAggregatesFilter<"historial_estado_equipo"> | string | null;
    estado_nuevo?: Prisma.StringNullableWithAggregatesFilter<"historial_estado_equipo"> | string | null;
    motivo?: Prisma.StringNullableWithAggregatesFilter<"historial_estado_equipo"> | string | null;
    fecha_hora?: Prisma.DateTimeWithAggregatesFilter<"historial_estado_equipo"> | Date | string;
};
export type historial_estado_equipoCreateInput = {
    id_historial?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutHistorial_estadoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutHistorial_equiposInput;
};
export type historial_estado_equipoUncheckedCreateInput = {
    id_historial?: bigint | number;
    id_unidad?: number | null;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoUpdateInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutHistorial_estadoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutHistorial_equiposNestedInput;
};
export type historial_estado_equipoUncheckedUpdateInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoCreateManyInput = {
    id_historial?: bigint | number;
    id_unidad?: number | null;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoUpdateManyMutationInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoUncheckedUpdateManyInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Historial_estado_equipoListRelationFilter = {
    every?: Prisma.historial_estado_equipoWhereInput;
    some?: Prisma.historial_estado_equipoWhereInput;
    none?: Prisma.historial_estado_equipoWhereInput;
};
export type historial_estado_equipoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type historial_estado_equipoCountOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_estado_equipoAvgOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type historial_estado_equipoMaxOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_estado_equipoMinOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_estado_equipoSumOrderByAggregateInput = {
    id_historial?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type historial_estado_equipoCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.historial_estado_equipoCreateWithoutUsuarioInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
};
export type historial_estado_equipoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.historial_estado_equipoCreateWithoutUsuarioInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
};
export type historial_estado_equipoUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.historial_estado_equipoCreateWithoutUsuarioInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUsuarioInputEnvelope;
    set?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    disconnect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    delete?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    update?: Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUsuarioInput | Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
};
export type historial_estado_equipoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.historial_estado_equipoCreateWithoutUsuarioInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUsuarioInputEnvelope;
    set?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    disconnect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    delete?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    update?: Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUsuarioInput | Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
};
export type historial_estado_equipoCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput> | Prisma.historial_estado_equipoCreateWithoutUnidadInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUnidadInputEnvelope;
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
};
export type historial_estado_equipoUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput> | Prisma.historial_estado_equipoCreateWithoutUnidadInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUnidadInputEnvelope;
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
};
export type historial_estado_equipoUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput> | Prisma.historial_estado_equipoCreateWithoutUnidadInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUnidadInputEnvelope;
    set?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    disconnect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    delete?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    update?: Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUnidadInput | Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
};
export type historial_estado_equipoUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput> | Prisma.historial_estado_equipoCreateWithoutUnidadInput[] | Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput | Prisma.historial_estado_equipoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.historial_estado_equipoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.historial_estado_equipoCreateManyUnidadInputEnvelope;
    set?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    disconnect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    delete?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    connect?: Prisma.historial_estado_equipoWhereUniqueInput | Prisma.historial_estado_equipoWhereUniqueInput[];
    update?: Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.historial_estado_equipoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUnidadInput | Prisma.historial_estado_equipoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
};
export type historial_estado_equipoCreateWithoutUsuarioInput = {
    id_historial?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutHistorial_estadoInput;
};
export type historial_estado_equipoUncheckedCreateWithoutUsuarioInput = {
    id_historial?: bigint | number;
    id_unidad?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput>;
};
export type historial_estado_equipoCreateManyUsuarioInputEnvelope = {
    data: Prisma.historial_estado_equipoCreateManyUsuarioInput | Prisma.historial_estado_equipoCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type historial_estado_equipoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_estado_equipoUpdateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUsuarioInput>;
};
export type historial_estado_equipoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateWithoutUsuarioInput, Prisma.historial_estado_equipoUncheckedUpdateWithoutUsuarioInput>;
};
export type historial_estado_equipoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.historial_estado_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateManyMutationInput, Prisma.historial_estado_equipoUncheckedUpdateManyWithoutUsuarioInput>;
};
export type historial_estado_equipoScalarWhereInput = {
    AND?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
    OR?: Prisma.historial_estado_equipoScalarWhereInput[];
    NOT?: Prisma.historial_estado_equipoScalarWhereInput | Prisma.historial_estado_equipoScalarWhereInput[];
    id_historial?: Prisma.BigIntFilter<"historial_estado_equipo"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_estado_equipo"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"historial_estado_equipo"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_estado_equipo"> | Date | string;
};
export type historial_estado_equipoCreateWithoutUnidadInput = {
    id_historial?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
    usuario?: Prisma.usuarioCreateNestedOneWithoutHistorial_equiposInput;
};
export type historial_estado_equipoUncheckedCreateWithoutUnidadInput = {
    id_historial?: bigint | number;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoCreateOrConnectWithoutUnidadInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput>;
};
export type historial_estado_equipoCreateManyUnidadInputEnvelope = {
    data: Prisma.historial_estado_equipoCreateManyUnidadInput | Prisma.historial_estado_equipoCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type historial_estado_equipoUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_estado_equipoUpdateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.historial_estado_equipoCreateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedCreateWithoutUnidadInput>;
};
export type historial_estado_equipoUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateWithoutUnidadInput, Prisma.historial_estado_equipoUncheckedUpdateWithoutUnidadInput>;
};
export type historial_estado_equipoUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.historial_estado_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateManyMutationInput, Prisma.historial_estado_equipoUncheckedUpdateManyWithoutUnidadInput>;
};
export type historial_estado_equipoCreateManyUsuarioInput = {
    id_historial?: bigint | number;
    id_unidad?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoUpdateWithoutUsuarioInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutHistorial_estadoNestedInput;
};
export type historial_estado_equipoUncheckedUpdateWithoutUsuarioInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoUncheckedUpdateManyWithoutUsuarioInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoCreateManyUnidadInput = {
    id_historial?: bigint | number;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    motivo?: string | null;
    fecha_hora?: Date | string;
};
export type historial_estado_equipoUpdateWithoutUnidadInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneWithoutHistorial_equiposNestedInput;
};
export type historial_estado_equipoUncheckedUpdateWithoutUnidadInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoUncheckedUpdateManyWithoutUnidadInput = {
    id_historial?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_estado_equipoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    motivo?: boolean;
    fecha_hora?: boolean;
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_estado_equipo"]>;
export type historial_estado_equipoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    motivo?: boolean;
    fecha_hora?: boolean;
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_estado_equipo"]>;
export type historial_estado_equipoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    motivo?: boolean;
    fecha_hora?: boolean;
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_estado_equipo"]>;
export type historial_estado_equipoSelectScalar = {
    id_historial?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    motivo?: boolean;
    fecha_hora?: boolean;
};
export type historial_estado_equipoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_historial" | "id_unidad" | "id_usuario" | "estado_anterior" | "estado_nuevo" | "motivo" | "fecha_hora", ExtArgs["result"]["historial_estado_equipo"]>;
export type historial_estado_equipoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
};
export type historial_estado_equipoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
};
export type historial_estado_equipoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_estado_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>;
};
export type $historial_estado_equipoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "historial_estado_equipo";
    objects: {
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_historial: bigint;
        id_unidad: number | null;
        id_usuario: number | null;
        estado_anterior: string | null;
        estado_nuevo: string | null;
        motivo: string | null;
        fecha_hora: Date;
    }, ExtArgs["result"]["historial_estado_equipo"]>;
    composites: {};
};
export type historial_estado_equipoGetPayload<S extends boolean | null | undefined | historial_estado_equipoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload, S>;
export type historial_estado_equipoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<historial_estado_equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Historial_estado_equipoCountAggregateInputType | true;
};
export interface historial_estado_equipoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['historial_estado_equipo'];
        meta: {
            name: 'historial_estado_equipo';
        };
    };
    findUnique<T extends historial_estado_equipoFindUniqueArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends historial_estado_equipoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends historial_estado_equipoFindFirstArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoFindFirstArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends historial_estado_equipoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends historial_estado_equipoFindManyArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends historial_estado_equipoCreateArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoCreateArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends historial_estado_equipoCreateManyArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends historial_estado_equipoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends historial_estado_equipoDeleteArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoDeleteArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends historial_estado_equipoUpdateArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoUpdateArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends historial_estado_equipoDeleteManyArgs>(args?: Prisma.SelectSubset<T, historial_estado_equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends historial_estado_equipoUpdateManyArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends historial_estado_equipoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends historial_estado_equipoUpsertArgs>(args: Prisma.SelectSubset<T, historial_estado_equipoUpsertArgs<ExtArgs>>): Prisma.Prisma__historial_estado_equipoClient<runtime.Types.Result.GetResult<Prisma.$historial_estado_equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends historial_estado_equipoCountArgs>(args?: Prisma.Subset<T, historial_estado_equipoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Historial_estado_equipoCountAggregateOutputType> : number>;
    aggregate<T extends Historial_estado_equipoAggregateArgs>(args: Prisma.Subset<T, Historial_estado_equipoAggregateArgs>): Prisma.PrismaPromise<GetHistorial_estado_equipoAggregateType<T>>;
    groupBy<T extends historial_estado_equipoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: historial_estado_equipoGroupByArgs['orderBy'];
    } : {
        orderBy?: historial_estado_equipoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, historial_estado_equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_estado_equipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: historial_estado_equipoFieldRefs;
}
export interface Prisma__historial_estado_equipoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unidad<T extends Prisma.historial_estado_equipo$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.historial_estado_equipo$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.historial_estado_equipo$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.historial_estado_equipo$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface historial_estado_equipoFieldRefs {
    readonly id_historial: Prisma.FieldRef<"historial_estado_equipo", 'BigInt'>;
    readonly id_unidad: Prisma.FieldRef<"historial_estado_equipo", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"historial_estado_equipo", 'Int'>;
    readonly estado_anterior: Prisma.FieldRef<"historial_estado_equipo", 'String'>;
    readonly estado_nuevo: Prisma.FieldRef<"historial_estado_equipo", 'String'>;
    readonly motivo: Prisma.FieldRef<"historial_estado_equipo", 'String'>;
    readonly fecha_hora: Prisma.FieldRef<"historial_estado_equipo", 'DateTime'>;
}
export type historial_estado_equipoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where: Prisma.historial_estado_equipoWhereUniqueInput;
};
export type historial_estado_equipoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where: Prisma.historial_estado_equipoWhereUniqueInput;
};
export type historial_estado_equipoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where?: Prisma.historial_estado_equipoWhereInput;
    orderBy?: Prisma.historial_estado_equipoOrderByWithRelationInput | Prisma.historial_estado_equipoOrderByWithRelationInput[];
    cursor?: Prisma.historial_estado_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_estado_equipoScalarFieldEnum | Prisma.Historial_estado_equipoScalarFieldEnum[];
};
export type historial_estado_equipoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where?: Prisma.historial_estado_equipoWhereInput;
    orderBy?: Prisma.historial_estado_equipoOrderByWithRelationInput | Prisma.historial_estado_equipoOrderByWithRelationInput[];
    cursor?: Prisma.historial_estado_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_estado_equipoScalarFieldEnum | Prisma.Historial_estado_equipoScalarFieldEnum[];
};
export type historial_estado_equipoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where?: Prisma.historial_estado_equipoWhereInput;
    orderBy?: Prisma.historial_estado_equipoOrderByWithRelationInput | Prisma.historial_estado_equipoOrderByWithRelationInput[];
    cursor?: Prisma.historial_estado_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_estado_equipoScalarFieldEnum | Prisma.Historial_estado_equipoScalarFieldEnum[];
};
export type historial_estado_equipoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.historial_estado_equipoCreateInput, Prisma.historial_estado_equipoUncheckedCreateInput>;
};
export type historial_estado_equipoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.historial_estado_equipoCreateManyInput | Prisma.historial_estado_equipoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type historial_estado_equipoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    data: Prisma.historial_estado_equipoCreateManyInput | Prisma.historial_estado_equipoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.historial_estado_equipoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type historial_estado_equipoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateInput, Prisma.historial_estado_equipoUncheckedUpdateInput>;
    where: Prisma.historial_estado_equipoWhereUniqueInput;
};
export type historial_estado_equipoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateManyMutationInput, Prisma.historial_estado_equipoUncheckedUpdateManyInput>;
    where?: Prisma.historial_estado_equipoWhereInput;
    limit?: number;
};
export type historial_estado_equipoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_estado_equipoUpdateManyMutationInput, Prisma.historial_estado_equipoUncheckedUpdateManyInput>;
    where?: Prisma.historial_estado_equipoWhereInput;
    limit?: number;
    include?: Prisma.historial_estado_equipoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type historial_estado_equipoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where: Prisma.historial_estado_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_estado_equipoCreateInput, Prisma.historial_estado_equipoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.historial_estado_equipoUpdateInput, Prisma.historial_estado_equipoUncheckedUpdateInput>;
};
export type historial_estado_equipoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
    where: Prisma.historial_estado_equipoWhereUniqueInput;
};
export type historial_estado_equipoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_estado_equipoWhereInput;
    limit?: number;
};
export type historial_estado_equipo$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type historial_estado_equipo$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type historial_estado_equipoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_estado_equipoSelect<ExtArgs> | null;
    omit?: Prisma.historial_estado_equipoOmit<ExtArgs> | null;
    include?: Prisma.historial_estado_equipoInclude<ExtArgs> | null;
};
