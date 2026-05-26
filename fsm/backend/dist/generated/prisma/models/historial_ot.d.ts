import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type historial_otModel = runtime.Types.Result.DefaultSelection<Prisma.$historial_otPayload>;
export type AggregateHistorial_ot = {
    _count: Historial_otCountAggregateOutputType | null;
    _avg: Historial_otAvgAggregateOutputType | null;
    _sum: Historial_otSumAggregateOutputType | null;
    _min: Historial_otMinAggregateOutputType | null;
    _max: Historial_otMaxAggregateOutputType | null;
};
export type Historial_otAvgAggregateOutputType = {
    id_historial_ot: number | null;
    id_ot: number | null;
    id_usuario: number | null;
};
export type Historial_otSumAggregateOutputType = {
    id_historial_ot: bigint | null;
    id_ot: number | null;
    id_usuario: number | null;
};
export type Historial_otMinAggregateOutputType = {
    id_historial_ot: bigint | null;
    id_ot: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    observaciones: string | null;
    fecha_hora: Date | null;
};
export type Historial_otMaxAggregateOutputType = {
    id_historial_ot: bigint | null;
    id_ot: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    observaciones: string | null;
    fecha_hora: Date | null;
};
export type Historial_otCountAggregateOutputType = {
    id_historial_ot: number;
    id_ot: number;
    id_usuario: number;
    estado_anterior: number;
    estado_nuevo: number;
    observaciones: number;
    fecha_hora: number;
    _all: number;
};
export type Historial_otAvgAggregateInputType = {
    id_historial_ot?: true;
    id_ot?: true;
    id_usuario?: true;
};
export type Historial_otSumAggregateInputType = {
    id_historial_ot?: true;
    id_ot?: true;
    id_usuario?: true;
};
export type Historial_otMinAggregateInputType = {
    id_historial_ot?: true;
    id_ot?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    observaciones?: true;
    fecha_hora?: true;
};
export type Historial_otMaxAggregateInputType = {
    id_historial_ot?: true;
    id_ot?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    observaciones?: true;
    fecha_hora?: true;
};
export type Historial_otCountAggregateInputType = {
    id_historial_ot?: true;
    id_ot?: true;
    id_usuario?: true;
    estado_anterior?: true;
    estado_nuevo?: true;
    observaciones?: true;
    fecha_hora?: true;
    _all?: true;
};
export type Historial_otAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_otWhereInput;
    orderBy?: Prisma.historial_otOrderByWithRelationInput | Prisma.historial_otOrderByWithRelationInput[];
    cursor?: Prisma.historial_otWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Historial_otCountAggregateInputType;
    _avg?: Historial_otAvgAggregateInputType;
    _sum?: Historial_otSumAggregateInputType;
    _min?: Historial_otMinAggregateInputType;
    _max?: Historial_otMaxAggregateInputType;
};
export type GetHistorial_otAggregateType<T extends Historial_otAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorial_ot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorial_ot[P]> : Prisma.GetScalarType<T[P], AggregateHistorial_ot[P]>;
};
export type historial_otGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_otWhereInput;
    orderBy?: Prisma.historial_otOrderByWithAggregationInput | Prisma.historial_otOrderByWithAggregationInput[];
    by: Prisma.Historial_otScalarFieldEnum[] | Prisma.Historial_otScalarFieldEnum;
    having?: Prisma.historial_otScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Historial_otCountAggregateInputType | true;
    _avg?: Historial_otAvgAggregateInputType;
    _sum?: Historial_otSumAggregateInputType;
    _min?: Historial_otMinAggregateInputType;
    _max?: Historial_otMaxAggregateInputType;
};
export type Historial_otGroupByOutputType = {
    id_historial_ot: bigint;
    id_ot: number | null;
    id_usuario: number | null;
    estado_anterior: string | null;
    estado_nuevo: string | null;
    observaciones: string | null;
    fecha_hora: Date;
    _count: Historial_otCountAggregateOutputType | null;
    _avg: Historial_otAvgAggregateOutputType | null;
    _sum: Historial_otSumAggregateOutputType | null;
    _min: Historial_otMinAggregateOutputType | null;
    _max: Historial_otMaxAggregateOutputType | null;
};
export type GetHistorial_otGroupByPayload<T extends historial_otGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Historial_otGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Historial_otGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Historial_otGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Historial_otGroupByOutputType[P]>;
}>>;
export type historial_otWhereInput = {
    AND?: Prisma.historial_otWhereInput | Prisma.historial_otWhereInput[];
    OR?: Prisma.historial_otWhereInput[];
    NOT?: Prisma.historial_otWhereInput | Prisma.historial_otWhereInput[];
    id_historial_ot?: Prisma.BigIntFilter<"historial_ot"> | bigint | number;
    id_ot?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_ot"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type historial_otOrderByWithRelationInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    orden_trabajo?: Prisma.orden_trabajoOrderByWithRelationInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type historial_otWhereUniqueInput = Prisma.AtLeast<{
    id_historial_ot?: bigint | number;
    AND?: Prisma.historial_otWhereInput | Prisma.historial_otWhereInput[];
    OR?: Prisma.historial_otWhereInput[];
    NOT?: Prisma.historial_otWhereInput | Prisma.historial_otWhereInput[];
    id_ot?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_ot"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_historial_ot">;
export type historial_otOrderByWithAggregationInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
    _count?: Prisma.historial_otCountOrderByAggregateInput;
    _avg?: Prisma.historial_otAvgOrderByAggregateInput;
    _max?: Prisma.historial_otMaxOrderByAggregateInput;
    _min?: Prisma.historial_otMinOrderByAggregateInput;
    _sum?: Prisma.historial_otSumOrderByAggregateInput;
};
export type historial_otScalarWhereWithAggregatesInput = {
    AND?: Prisma.historial_otScalarWhereWithAggregatesInput | Prisma.historial_otScalarWhereWithAggregatesInput[];
    OR?: Prisma.historial_otScalarWhereWithAggregatesInput[];
    NOT?: Prisma.historial_otScalarWhereWithAggregatesInput | Prisma.historial_otScalarWhereWithAggregatesInput[];
    id_historial_ot?: Prisma.BigIntWithAggregatesFilter<"historial_ot"> | bigint | number;
    id_ot?: Prisma.IntNullableWithAggregatesFilter<"historial_ot"> | number | null;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"historial_ot"> | number | null;
    estado_anterior?: Prisma.StringNullableWithAggregatesFilter<"historial_ot"> | string | null;
    estado_nuevo?: Prisma.StringNullableWithAggregatesFilter<"historial_ot"> | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"historial_ot"> | string | null;
    fecha_hora?: Prisma.DateTimeWithAggregatesFilter<"historial_ot"> | Date | string;
};
export type historial_otCreateInput = {
    id_historial_ot?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutHistorialInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutHistorial_otInput;
};
export type historial_otUncheckedCreateInput = {
    id_historial_ot?: bigint | number;
    id_ot?: number | null;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otUpdateInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutHistorialNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutHistorial_otNestedInput;
};
export type historial_otUncheckedUpdateInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otCreateManyInput = {
    id_historial_ot?: bigint | number;
    id_ot?: number | null;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otUpdateManyMutationInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otUncheckedUpdateManyInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Historial_otListRelationFilter = {
    every?: Prisma.historial_otWhereInput;
    some?: Prisma.historial_otWhereInput;
    none?: Prisma.historial_otWhereInput;
};
export type historial_otOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type historial_otCountOrderByAggregateInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_otAvgOrderByAggregateInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type historial_otMaxOrderByAggregateInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_otMinOrderByAggregateInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    estado_anterior?: Prisma.SortOrder;
    estado_nuevo?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_hora?: Prisma.SortOrder;
};
export type historial_otSumOrderByAggregateInput = {
    id_historial_ot?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type historial_otCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput> | Prisma.historial_otCreateWithoutUsuarioInput[] | Prisma.historial_otUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutUsuarioInput | Prisma.historial_otCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.historial_otCreateManyUsuarioInputEnvelope;
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
};
export type historial_otUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput> | Prisma.historial_otCreateWithoutUsuarioInput[] | Prisma.historial_otUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutUsuarioInput | Prisma.historial_otCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.historial_otCreateManyUsuarioInputEnvelope;
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
};
export type historial_otUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput> | Prisma.historial_otCreateWithoutUsuarioInput[] | Prisma.historial_otUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutUsuarioInput | Prisma.historial_otCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.historial_otUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.historial_otUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.historial_otCreateManyUsuarioInputEnvelope;
    set?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    disconnect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    delete?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    update?: Prisma.historial_otUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.historial_otUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.historial_otUpdateManyWithWhereWithoutUsuarioInput | Prisma.historial_otUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
};
export type historial_otUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput> | Prisma.historial_otCreateWithoutUsuarioInput[] | Prisma.historial_otUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutUsuarioInput | Prisma.historial_otCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.historial_otUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.historial_otUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.historial_otCreateManyUsuarioInputEnvelope;
    set?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    disconnect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    delete?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    update?: Prisma.historial_otUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.historial_otUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.historial_otUpdateManyWithWhereWithoutUsuarioInput | Prisma.historial_otUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
};
export type historial_otCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.historial_otCreateWithoutOrden_trabajoInput[] | Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.historial_otCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
};
export type historial_otUncheckedCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.historial_otCreateWithoutOrden_trabajoInput[] | Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.historial_otCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
};
export type historial_otUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.historial_otCreateWithoutOrden_trabajoInput[] | Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.historial_otUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.historial_otUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.historial_otCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    disconnect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    delete?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    update?: Prisma.historial_otUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.historial_otUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.historial_otUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.historial_otUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
};
export type historial_otUncheckedUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.historial_otCreateWithoutOrden_trabajoInput[] | Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.historial_otCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.historial_otUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.historial_otUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.historial_otCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    disconnect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    delete?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    connect?: Prisma.historial_otWhereUniqueInput | Prisma.historial_otWhereUniqueInput[];
    update?: Prisma.historial_otUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.historial_otUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.historial_otUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.historial_otUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
};
export type historial_otCreateWithoutUsuarioInput = {
    id_historial_ot?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutHistorialInput;
};
export type historial_otUncheckedCreateWithoutUsuarioInput = {
    id_historial_ot?: bigint | number;
    id_ot?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.historial_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput>;
};
export type historial_otCreateManyUsuarioInputEnvelope = {
    data: Prisma.historial_otCreateManyUsuarioInput | Prisma.historial_otCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type historial_otUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.historial_otWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_otUpdateWithoutUsuarioInput, Prisma.historial_otUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.historial_otCreateWithoutUsuarioInput, Prisma.historial_otUncheckedCreateWithoutUsuarioInput>;
};
export type historial_otUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.historial_otWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_otUpdateWithoutUsuarioInput, Prisma.historial_otUncheckedUpdateWithoutUsuarioInput>;
};
export type historial_otUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.historial_otScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_otUpdateManyMutationInput, Prisma.historial_otUncheckedUpdateManyWithoutUsuarioInput>;
};
export type historial_otScalarWhereInput = {
    AND?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
    OR?: Prisma.historial_otScalarWhereInput[];
    NOT?: Prisma.historial_otScalarWhereInput | Prisma.historial_otScalarWhereInput[];
    id_historial_ot?: Prisma.BigIntFilter<"historial_ot"> | bigint | number;
    id_ot?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"historial_ot"> | number | null;
    estado_anterior?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    estado_nuevo?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    observaciones?: Prisma.StringNullableFilter<"historial_ot"> | string | null;
    fecha_hora?: Prisma.DateTimeFilter<"historial_ot"> | Date | string;
};
export type historial_otCreateWithoutOrden_trabajoInput = {
    id_historial_ot?: bigint | number;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
    usuario?: Prisma.usuarioCreateNestedOneWithoutHistorial_otInput;
};
export type historial_otUncheckedCreateWithoutOrden_trabajoInput = {
    id_historial_ot?: bigint | number;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otCreateOrConnectWithoutOrden_trabajoInput = {
    where: Prisma.historial_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput>;
};
export type historial_otCreateManyOrden_trabajoInputEnvelope = {
    data: Prisma.historial_otCreateManyOrden_trabajoInput | Prisma.historial_otCreateManyOrden_trabajoInput[];
    skipDuplicates?: boolean;
};
export type historial_otUpsertWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.historial_otWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_otUpdateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedUpdateWithoutOrden_trabajoInput>;
    create: Prisma.XOR<Prisma.historial_otCreateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedCreateWithoutOrden_trabajoInput>;
};
export type historial_otUpdateWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.historial_otWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_otUpdateWithoutOrden_trabajoInput, Prisma.historial_otUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type historial_otUpdateManyWithWhereWithoutOrden_trabajoInput = {
    where: Prisma.historial_otScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_otUpdateManyMutationInput, Prisma.historial_otUncheckedUpdateManyWithoutOrden_trabajoInput>;
};
export type historial_otCreateManyUsuarioInput = {
    id_historial_ot?: bigint | number;
    id_ot?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otUpdateWithoutUsuarioInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutHistorialNestedInput;
};
export type historial_otUncheckedUpdateWithoutUsuarioInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otUncheckedUpdateManyWithoutUsuarioInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otCreateManyOrden_trabajoInput = {
    id_historial_ot?: bigint | number;
    id_usuario?: number | null;
    estado_anterior?: string | null;
    estado_nuevo?: string | null;
    observaciones?: string | null;
    fecha_hora?: Date | string;
};
export type historial_otUpdateWithoutOrden_trabajoInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneWithoutHistorial_otNestedInput;
};
export type historial_otUncheckedUpdateWithoutOrden_trabajoInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otUncheckedUpdateManyWithoutOrden_trabajoInput = {
    id_historial_ot?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado_anterior?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_nuevo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_hora?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_otSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ot?: boolean;
    id_ot?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    observaciones?: boolean;
    fecha_hora?: boolean;
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_ot"]>;
export type historial_otSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ot?: boolean;
    id_ot?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    observaciones?: boolean;
    fecha_hora?: boolean;
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_ot"]>;
export type historial_otSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ot?: boolean;
    id_ot?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    observaciones?: boolean;
    fecha_hora?: boolean;
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["historial_ot"]>;
export type historial_otSelectScalar = {
    id_historial_ot?: boolean;
    id_ot?: boolean;
    id_usuario?: boolean;
    estado_anterior?: boolean;
    estado_nuevo?: boolean;
    observaciones?: boolean;
    fecha_hora?: boolean;
};
export type historial_otOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_historial_ot" | "id_ot" | "id_usuario" | "estado_anterior" | "estado_nuevo" | "observaciones" | "fecha_hora", ExtArgs["result"]["historial_ot"]>;
export type historial_otInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
};
export type historial_otIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
};
export type historial_otIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.historial_ot$orden_trabajoArgs<ExtArgs>;
    usuario?: boolean | Prisma.historial_ot$usuarioArgs<ExtArgs>;
};
export type $historial_otPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "historial_ot";
    objects: {
        orden_trabajo: Prisma.$orden_trabajoPayload<ExtArgs> | null;
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_historial_ot: bigint;
        id_ot: number | null;
        id_usuario: number | null;
        estado_anterior: string | null;
        estado_nuevo: string | null;
        observaciones: string | null;
        fecha_hora: Date;
    }, ExtArgs["result"]["historial_ot"]>;
    composites: {};
};
export type historial_otGetPayload<S extends boolean | null | undefined | historial_otDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$historial_otPayload, S>;
export type historial_otCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<historial_otFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Historial_otCountAggregateInputType | true;
};
export interface historial_otDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['historial_ot'];
        meta: {
            name: 'historial_ot';
        };
    };
    findUnique<T extends historial_otFindUniqueArgs>(args: Prisma.SelectSubset<T, historial_otFindUniqueArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends historial_otFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, historial_otFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends historial_otFindFirstArgs>(args?: Prisma.SelectSubset<T, historial_otFindFirstArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends historial_otFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, historial_otFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends historial_otFindManyArgs>(args?: Prisma.SelectSubset<T, historial_otFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends historial_otCreateArgs>(args: Prisma.SelectSubset<T, historial_otCreateArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends historial_otCreateManyArgs>(args?: Prisma.SelectSubset<T, historial_otCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends historial_otCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, historial_otCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends historial_otDeleteArgs>(args: Prisma.SelectSubset<T, historial_otDeleteArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends historial_otUpdateArgs>(args: Prisma.SelectSubset<T, historial_otUpdateArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends historial_otDeleteManyArgs>(args?: Prisma.SelectSubset<T, historial_otDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends historial_otUpdateManyArgs>(args: Prisma.SelectSubset<T, historial_otUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends historial_otUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, historial_otUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends historial_otUpsertArgs>(args: Prisma.SelectSubset<T, historial_otUpsertArgs<ExtArgs>>): Prisma.Prisma__historial_otClient<runtime.Types.Result.GetResult<Prisma.$historial_otPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends historial_otCountArgs>(args?: Prisma.Subset<T, historial_otCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Historial_otCountAggregateOutputType> : number>;
    aggregate<T extends Historial_otAggregateArgs>(args: Prisma.Subset<T, Historial_otAggregateArgs>): Prisma.PrismaPromise<GetHistorial_otAggregateType<T>>;
    groupBy<T extends historial_otGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: historial_otGroupByArgs['orderBy'];
    } : {
        orderBy?: historial_otGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, historial_otGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_otGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: historial_otFieldRefs;
}
export interface Prisma__historial_otClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orden_trabajo<T extends Prisma.historial_ot$orden_trabajoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.historial_ot$orden_trabajoArgs<ExtArgs>>): Prisma.Prisma__orden_trabajoClient<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.historial_ot$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.historial_ot$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface historial_otFieldRefs {
    readonly id_historial_ot: Prisma.FieldRef<"historial_ot", 'BigInt'>;
    readonly id_ot: Prisma.FieldRef<"historial_ot", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"historial_ot", 'Int'>;
    readonly estado_anterior: Prisma.FieldRef<"historial_ot", 'String'>;
    readonly estado_nuevo: Prisma.FieldRef<"historial_ot", 'String'>;
    readonly observaciones: Prisma.FieldRef<"historial_ot", 'String'>;
    readonly fecha_hora: Prisma.FieldRef<"historial_ot", 'DateTime'>;
}
export type historial_otFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where: Prisma.historial_otWhereUniqueInput;
};
export type historial_otFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where: Prisma.historial_otWhereUniqueInput;
};
export type historial_otFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where?: Prisma.historial_otWhereInput;
    orderBy?: Prisma.historial_otOrderByWithRelationInput | Prisma.historial_otOrderByWithRelationInput[];
    cursor?: Prisma.historial_otWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_otScalarFieldEnum | Prisma.Historial_otScalarFieldEnum[];
};
export type historial_otFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where?: Prisma.historial_otWhereInput;
    orderBy?: Prisma.historial_otOrderByWithRelationInput | Prisma.historial_otOrderByWithRelationInput[];
    cursor?: Prisma.historial_otWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_otScalarFieldEnum | Prisma.Historial_otScalarFieldEnum[];
};
export type historial_otFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where?: Prisma.historial_otWhereInput;
    orderBy?: Prisma.historial_otOrderByWithRelationInput | Prisma.historial_otOrderByWithRelationInput[];
    cursor?: Prisma.historial_otWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_otScalarFieldEnum | Prisma.Historial_otScalarFieldEnum[];
};
export type historial_otCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.historial_otCreateInput, Prisma.historial_otUncheckedCreateInput>;
};
export type historial_otCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.historial_otCreateManyInput | Prisma.historial_otCreateManyInput[];
    skipDuplicates?: boolean;
};
export type historial_otCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    data: Prisma.historial_otCreateManyInput | Prisma.historial_otCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.historial_otIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type historial_otUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_otUpdateInput, Prisma.historial_otUncheckedUpdateInput>;
    where: Prisma.historial_otWhereUniqueInput;
};
export type historial_otUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.historial_otUpdateManyMutationInput, Prisma.historial_otUncheckedUpdateManyInput>;
    where?: Prisma.historial_otWhereInput;
    limit?: number;
};
export type historial_otUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_otUpdateManyMutationInput, Prisma.historial_otUncheckedUpdateManyInput>;
    where?: Prisma.historial_otWhereInput;
    limit?: number;
    include?: Prisma.historial_otIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type historial_otUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where: Prisma.historial_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_otCreateInput, Prisma.historial_otUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.historial_otUpdateInput, Prisma.historial_otUncheckedUpdateInput>;
};
export type historial_otDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
    where: Prisma.historial_otWhereUniqueInput;
};
export type historial_otDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_otWhereInput;
    limit?: number;
};
export type historial_ot$orden_trabajoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
};
export type historial_ot$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type historial_otDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_otSelect<ExtArgs> | null;
    omit?: Prisma.historial_otOmit<ExtArgs> | null;
    include?: Prisma.historial_otInclude<ExtArgs> | null;
};
