import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type detalle_orden_ingresoModel = runtime.Types.Result.DefaultSelection<Prisma.$detalle_orden_ingresoPayload>;
export type AggregateDetalle_orden_ingreso = {
    _count: Detalle_orden_ingresoCountAggregateOutputType | null;
    _avg: Detalle_orden_ingresoAvgAggregateOutputType | null;
    _sum: Detalle_orden_ingresoSumAggregateOutputType | null;
    _min: Detalle_orden_ingresoMinAggregateOutputType | null;
    _max: Detalle_orden_ingresoMaxAggregateOutputType | null;
};
export type Detalle_orden_ingresoAvgAggregateOutputType = {
    id_detalle: number | null;
    id_orden: number | null;
    id_tipo_equipo: number | null;
    cantidad_solicitada: number | null;
    cantidad_recibida: number | null;
};
export type Detalle_orden_ingresoSumAggregateOutputType = {
    id_detalle: number | null;
    id_orden: number | null;
    id_tipo_equipo: number | null;
    cantidad_solicitada: number | null;
    cantidad_recibida: number | null;
};
export type Detalle_orden_ingresoMinAggregateOutputType = {
    id_detalle: number | null;
    id_orden: number | null;
    id_tipo_equipo: number | null;
    cantidad_solicitada: number | null;
    cantidad_recibida: number | null;
};
export type Detalle_orden_ingresoMaxAggregateOutputType = {
    id_detalle: number | null;
    id_orden: number | null;
    id_tipo_equipo: number | null;
    cantidad_solicitada: number | null;
    cantidad_recibida: number | null;
};
export type Detalle_orden_ingresoCountAggregateOutputType = {
    id_detalle: number;
    id_orden: number;
    id_tipo_equipo: number;
    cantidad_solicitada: number;
    cantidad_recibida: number;
    _all: number;
};
export type Detalle_orden_ingresoAvgAggregateInputType = {
    id_detalle?: true;
    id_orden?: true;
    id_tipo_equipo?: true;
    cantidad_solicitada?: true;
    cantidad_recibida?: true;
};
export type Detalle_orden_ingresoSumAggregateInputType = {
    id_detalle?: true;
    id_orden?: true;
    id_tipo_equipo?: true;
    cantidad_solicitada?: true;
    cantidad_recibida?: true;
};
export type Detalle_orden_ingresoMinAggregateInputType = {
    id_detalle?: true;
    id_orden?: true;
    id_tipo_equipo?: true;
    cantidad_solicitada?: true;
    cantidad_recibida?: true;
};
export type Detalle_orden_ingresoMaxAggregateInputType = {
    id_detalle?: true;
    id_orden?: true;
    id_tipo_equipo?: true;
    cantidad_solicitada?: true;
    cantidad_recibida?: true;
};
export type Detalle_orden_ingresoCountAggregateInputType = {
    id_detalle?: true;
    id_orden?: true;
    id_tipo_equipo?: true;
    cantidad_solicitada?: true;
    cantidad_recibida?: true;
    _all?: true;
};
export type Detalle_orden_ingresoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithRelationInput | Prisma.detalle_orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.detalle_orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Detalle_orden_ingresoCountAggregateInputType;
    _avg?: Detalle_orden_ingresoAvgAggregateInputType;
    _sum?: Detalle_orden_ingresoSumAggregateInputType;
    _min?: Detalle_orden_ingresoMinAggregateInputType;
    _max?: Detalle_orden_ingresoMaxAggregateInputType;
};
export type GetDetalle_orden_ingresoAggregateType<T extends Detalle_orden_ingresoAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalle_orden_ingreso]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalle_orden_ingreso[P]> : Prisma.GetScalarType<T[P], AggregateDetalle_orden_ingreso[P]>;
};
export type detalle_orden_ingresoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithAggregationInput | Prisma.detalle_orden_ingresoOrderByWithAggregationInput[];
    by: Prisma.Detalle_orden_ingresoScalarFieldEnum[] | Prisma.Detalle_orden_ingresoScalarFieldEnum;
    having?: Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Detalle_orden_ingresoCountAggregateInputType | true;
    _avg?: Detalle_orden_ingresoAvgAggregateInputType;
    _sum?: Detalle_orden_ingresoSumAggregateInputType;
    _min?: Detalle_orden_ingresoMinAggregateInputType;
    _max?: Detalle_orden_ingresoMaxAggregateInputType;
};
export type Detalle_orden_ingresoGroupByOutputType = {
    id_detalle: number;
    id_orden: number | null;
    id_tipo_equipo: number | null;
    cantidad_solicitada: number;
    cantidad_recibida: number;
    _count: Detalle_orden_ingresoCountAggregateOutputType | null;
    _avg: Detalle_orden_ingresoAvgAggregateOutputType | null;
    _sum: Detalle_orden_ingresoSumAggregateOutputType | null;
    _min: Detalle_orden_ingresoMinAggregateOutputType | null;
    _max: Detalle_orden_ingresoMaxAggregateOutputType | null;
};
export type GetDetalle_orden_ingresoGroupByPayload<T extends detalle_orden_ingresoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Detalle_orden_ingresoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Detalle_orden_ingresoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Detalle_orden_ingresoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Detalle_orden_ingresoGroupByOutputType[P]>;
}>>;
export type detalle_orden_ingresoWhereInput = {
    AND?: Prisma.detalle_orden_ingresoWhereInput | Prisma.detalle_orden_ingresoWhereInput[];
    OR?: Prisma.detalle_orden_ingresoWhereInput[];
    NOT?: Prisma.detalle_orden_ingresoWhereInput | Prisma.detalle_orden_ingresoWhereInput[];
    id_detalle?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    id_orden?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    cantidad_solicitada?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    cantidad_recibida?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    orden?: Prisma.XOR<Prisma.Orden_ingresoNullableScalarRelationFilter, Prisma.orden_ingresoWhereInput> | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
};
export type detalle_orden_ingresoOrderByWithRelationInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
    orden?: Prisma.orden_ingresoOrderByWithRelationInput;
    tipo_equipo?: Prisma.tipo_equipoOrderByWithRelationInput;
};
export type detalle_orden_ingresoWhereUniqueInput = Prisma.AtLeast<{
    id_detalle?: number;
    AND?: Prisma.detalle_orden_ingresoWhereInput | Prisma.detalle_orden_ingresoWhereInput[];
    OR?: Prisma.detalle_orden_ingresoWhereInput[];
    NOT?: Prisma.detalle_orden_ingresoWhereInput | Prisma.detalle_orden_ingresoWhereInput[];
    id_orden?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    cantidad_solicitada?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    cantidad_recibida?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    orden?: Prisma.XOR<Prisma.Orden_ingresoNullableScalarRelationFilter, Prisma.orden_ingresoWhereInput> | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
}, "id_detalle">;
export type detalle_orden_ingresoOrderByWithAggregationInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
    _count?: Prisma.detalle_orden_ingresoCountOrderByAggregateInput;
    _avg?: Prisma.detalle_orden_ingresoAvgOrderByAggregateInput;
    _max?: Prisma.detalle_orden_ingresoMaxOrderByAggregateInput;
    _min?: Prisma.detalle_orden_ingresoMinOrderByAggregateInput;
    _sum?: Prisma.detalle_orden_ingresoSumOrderByAggregateInput;
};
export type detalle_orden_ingresoScalarWhereWithAggregatesInput = {
    AND?: Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput | Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput[];
    OR?: Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput | Prisma.detalle_orden_ingresoScalarWhereWithAggregatesInput[];
    id_detalle?: Prisma.IntWithAggregatesFilter<"detalle_orden_ingreso"> | number;
    id_orden?: Prisma.IntNullableWithAggregatesFilter<"detalle_orden_ingreso"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableWithAggregatesFilter<"detalle_orden_ingreso"> | number | null;
    cantidad_solicitada?: Prisma.IntWithAggregatesFilter<"detalle_orden_ingreso"> | number;
    cantidad_recibida?: Prisma.IntWithAggregatesFilter<"detalle_orden_ingreso"> | number;
};
export type detalle_orden_ingresoCreateInput = {
    cantidad_solicitada: number;
    cantidad_recibida?: number;
    orden?: Prisma.orden_ingresoCreateNestedOneWithoutDetallesInput;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutDetalles_ingresoInput;
};
export type detalle_orden_ingresoUncheckedCreateInput = {
    id_detalle?: number;
    id_orden?: number | null;
    id_tipo_equipo?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoUpdateInput = {
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
    orden?: Prisma.orden_ingresoUpdateOneWithoutDetallesNestedInput;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutDetalles_ingresoNestedInput;
};
export type detalle_orden_ingresoUncheckedUpdateInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoCreateManyInput = {
    id_detalle?: number;
    id_orden?: number | null;
    id_tipo_equipo?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoUpdateManyMutationInput = {
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoUncheckedUpdateManyInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type Detalle_orden_ingresoListRelationFilter = {
    every?: Prisma.detalle_orden_ingresoWhereInput;
    some?: Prisma.detalle_orden_ingresoWhereInput;
    none?: Prisma.detalle_orden_ingresoWhereInput;
};
export type detalle_orden_ingresoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type detalle_orden_ingresoCountOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
};
export type detalle_orden_ingresoAvgOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
};
export type detalle_orden_ingresoMaxOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
};
export type detalle_orden_ingresoMinOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
};
export type detalle_orden_ingresoSumOrderByAggregateInput = {
    id_detalle?: Prisma.SortOrder;
    id_orden?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    cantidad_solicitada?: Prisma.SortOrder;
    cantidad_recibida?: Prisma.SortOrder;
};
export type detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput> | Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
};
export type detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput> | Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
};
export type detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput> | Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    delete?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    update?: Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
};
export type detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput> | Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    delete?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    update?: Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
};
export type detalle_orden_ingresoCreateNestedManyWithoutOrdenInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput> | Prisma.detalle_orden_ingresoCreateWithoutOrdenInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyOrdenInputEnvelope;
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
};
export type detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput> | Prisma.detalle_orden_ingresoCreateWithoutOrdenInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyOrdenInputEnvelope;
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
};
export type detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput> | Prisma.detalle_orden_ingresoCreateWithoutOrdenInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput[];
    upsert?: Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutOrdenInput | Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutOrdenInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyOrdenInputEnvelope;
    set?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    delete?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    update?: Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutOrdenInput | Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutOrdenInput[];
    updateMany?: Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutOrdenInput | Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutOrdenInput[];
    deleteMany?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
};
export type detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput> | Prisma.detalle_orden_ingresoCreateWithoutOrdenInput[] | Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput[];
    connectOrCreate?: Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput | Prisma.detalle_orden_ingresoCreateOrConnectWithoutOrdenInput[];
    upsert?: Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutOrdenInput | Prisma.detalle_orden_ingresoUpsertWithWhereUniqueWithoutOrdenInput[];
    createMany?: Prisma.detalle_orden_ingresoCreateManyOrdenInputEnvelope;
    set?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    delete?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    connect?: Prisma.detalle_orden_ingresoWhereUniqueInput | Prisma.detalle_orden_ingresoWhereUniqueInput[];
    update?: Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutOrdenInput | Prisma.detalle_orden_ingresoUpdateWithWhereUniqueWithoutOrdenInput[];
    updateMany?: Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutOrdenInput | Prisma.detalle_orden_ingresoUpdateManyWithWhereWithoutOrdenInput[];
    deleteMany?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
};
export type detalle_orden_ingresoCreateWithoutTipo_equipoInput = {
    cantidad_solicitada: number;
    cantidad_recibida?: number;
    orden?: Prisma.orden_ingresoCreateNestedOneWithoutDetallesInput;
};
export type detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput = {
    id_detalle?: number;
    id_orden?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoCreateOrConnectWithoutTipo_equipoInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput>;
};
export type detalle_orden_ingresoCreateManyTipo_equipoInputEnvelope = {
    data: Prisma.detalle_orden_ingresoCreateManyTipo_equipoInput | Prisma.detalle_orden_ingresoCreateManyTipo_equipoInput[];
    skipDuplicates?: boolean;
};
export type detalle_orden_ingresoUpsertWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedUpdateWithoutTipo_equipoInput>;
    create: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutTipo_equipoInput>;
};
export type detalle_orden_ingresoUpdateWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateWithoutTipo_equipoInput, Prisma.detalle_orden_ingresoUncheckedUpdateWithoutTipo_equipoInput>;
};
export type detalle_orden_ingresoUpdateManyWithWhereWithoutTipo_equipoInput = {
    where: Prisma.detalle_orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateManyMutationInput, Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoInput>;
};
export type detalle_orden_ingresoScalarWhereInput = {
    AND?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
    OR?: Prisma.detalle_orden_ingresoScalarWhereInput[];
    NOT?: Prisma.detalle_orden_ingresoScalarWhereInput | Prisma.detalle_orden_ingresoScalarWhereInput[];
    id_detalle?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    id_orden?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"detalle_orden_ingreso"> | number | null;
    cantidad_solicitada?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
    cantidad_recibida?: Prisma.IntFilter<"detalle_orden_ingreso"> | number;
};
export type detalle_orden_ingresoCreateWithoutOrdenInput = {
    cantidad_solicitada: number;
    cantidad_recibida?: number;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutDetalles_ingresoInput;
};
export type detalle_orden_ingresoUncheckedCreateWithoutOrdenInput = {
    id_detalle?: number;
    id_tipo_equipo?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoCreateOrConnectWithoutOrdenInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput>;
};
export type detalle_orden_ingresoCreateManyOrdenInputEnvelope = {
    data: Prisma.detalle_orden_ingresoCreateManyOrdenInput | Prisma.detalle_orden_ingresoCreateManyOrdenInput[];
    skipDuplicates?: boolean;
};
export type detalle_orden_ingresoUpsertWithWhereUniqueWithoutOrdenInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedUpdateWithoutOrdenInput>;
    create: Prisma.XOR<Prisma.detalle_orden_ingresoCreateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedCreateWithoutOrdenInput>;
};
export type detalle_orden_ingresoUpdateWithWhereUniqueWithoutOrdenInput = {
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateWithoutOrdenInput, Prisma.detalle_orden_ingresoUncheckedUpdateWithoutOrdenInput>;
};
export type detalle_orden_ingresoUpdateManyWithWhereWithoutOrdenInput = {
    where: Prisma.detalle_orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateManyMutationInput, Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenInput>;
};
export type detalle_orden_ingresoCreateManyTipo_equipoInput = {
    id_detalle?: number;
    id_orden?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoUpdateWithoutTipo_equipoInput = {
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
    orden?: Prisma.orden_ingresoUpdateOneWithoutDetallesNestedInput;
};
export type detalle_orden_ingresoUncheckedUpdateWithoutTipo_equipoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoCreateManyOrdenInput = {
    id_detalle?: number;
    id_tipo_equipo?: number | null;
    cantidad_solicitada: number;
    cantidad_recibida?: number;
};
export type detalle_orden_ingresoUpdateWithoutOrdenInput = {
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutDetalles_ingresoNestedInput;
};
export type detalle_orden_ingresoUncheckedUpdateWithoutOrdenInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenInput = {
    id_detalle?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_solicitada?: Prisma.IntFieldUpdateOperationsInput | number;
    cantidad_recibida?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type detalle_orden_ingresoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_orden?: boolean;
    id_tipo_equipo?: boolean;
    cantidad_solicitada?: boolean;
    cantidad_recibida?: boolean;
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_orden_ingreso"]>;
export type detalle_orden_ingresoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_orden?: boolean;
    id_tipo_equipo?: boolean;
    cantidad_solicitada?: boolean;
    cantidad_recibida?: boolean;
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_orden_ingreso"]>;
export type detalle_orden_ingresoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_detalle?: boolean;
    id_orden?: boolean;
    id_tipo_equipo?: boolean;
    cantidad_solicitada?: boolean;
    cantidad_recibida?: boolean;
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_orden_ingreso"]>;
export type detalle_orden_ingresoSelectScalar = {
    id_detalle?: boolean;
    id_orden?: boolean;
    id_tipo_equipo?: boolean;
    cantidad_solicitada?: boolean;
    cantidad_recibida?: boolean;
};
export type detalle_orden_ingresoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_detalle" | "id_orden" | "id_tipo_equipo" | "cantidad_solicitada" | "cantidad_recibida", ExtArgs["result"]["detalle_orden_ingreso"]>;
export type detalle_orden_ingresoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
};
export type detalle_orden_ingresoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
};
export type detalle_orden_ingresoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden?: boolean | Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>;
};
export type $detalle_orden_ingresoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "detalle_orden_ingreso";
    objects: {
        orden: Prisma.$orden_ingresoPayload<ExtArgs> | null;
        tipo_equipo: Prisma.$tipo_equipoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_detalle: number;
        id_orden: number | null;
        id_tipo_equipo: number | null;
        cantidad_solicitada: number;
        cantidad_recibida: number;
    }, ExtArgs["result"]["detalle_orden_ingreso"]>;
    composites: {};
};
export type detalle_orden_ingresoGetPayload<S extends boolean | null | undefined | detalle_orden_ingresoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload, S>;
export type detalle_orden_ingresoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<detalle_orden_ingresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Detalle_orden_ingresoCountAggregateInputType | true;
};
export interface detalle_orden_ingresoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['detalle_orden_ingreso'];
        meta: {
            name: 'detalle_orden_ingreso';
        };
    };
    findUnique<T extends detalle_orden_ingresoFindUniqueArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends detalle_orden_ingresoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends detalle_orden_ingresoFindFirstArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoFindFirstArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends detalle_orden_ingresoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends detalle_orden_ingresoFindManyArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends detalle_orden_ingresoCreateArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoCreateArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends detalle_orden_ingresoCreateManyArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends detalle_orden_ingresoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends detalle_orden_ingresoDeleteArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoDeleteArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends detalle_orden_ingresoUpdateArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoUpdateArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends detalle_orden_ingresoDeleteManyArgs>(args?: Prisma.SelectSubset<T, detalle_orden_ingresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends detalle_orden_ingresoUpdateManyArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends detalle_orden_ingresoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends detalle_orden_ingresoUpsertArgs>(args: Prisma.SelectSubset<T, detalle_orden_ingresoUpsertArgs<ExtArgs>>): Prisma.Prisma__detalle_orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends detalle_orden_ingresoCountArgs>(args?: Prisma.Subset<T, detalle_orden_ingresoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Detalle_orden_ingresoCountAggregateOutputType> : number>;
    aggregate<T extends Detalle_orden_ingresoAggregateArgs>(args: Prisma.Subset<T, Detalle_orden_ingresoAggregateArgs>): Prisma.PrismaPromise<GetDetalle_orden_ingresoAggregateType<T>>;
    groupBy<T extends detalle_orden_ingresoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: detalle_orden_ingresoGroupByArgs['orderBy'];
    } : {
        orderBy?: detalle_orden_ingresoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, detalle_orden_ingresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_orden_ingresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: detalle_orden_ingresoFieldRefs;
}
export interface Prisma__detalle_orden_ingresoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orden<T extends Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detalle_orden_ingreso$ordenArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tipo_equipo<T extends Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detalle_orden_ingreso$tipo_equipoArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface detalle_orden_ingresoFieldRefs {
    readonly id_detalle: Prisma.FieldRef<"detalle_orden_ingreso", 'Int'>;
    readonly id_orden: Prisma.FieldRef<"detalle_orden_ingreso", 'Int'>;
    readonly id_tipo_equipo: Prisma.FieldRef<"detalle_orden_ingreso", 'Int'>;
    readonly cantidad_solicitada: Prisma.FieldRef<"detalle_orden_ingreso", 'Int'>;
    readonly cantidad_recibida: Prisma.FieldRef<"detalle_orden_ingreso", 'Int'>;
}
export type detalle_orden_ingresoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
};
export type detalle_orden_ingresoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
};
export type detalle_orden_ingresoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithRelationInput | Prisma.detalle_orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.detalle_orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_orden_ingresoScalarFieldEnum | Prisma.Detalle_orden_ingresoScalarFieldEnum[];
};
export type detalle_orden_ingresoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithRelationInput | Prisma.detalle_orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.detalle_orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_orden_ingresoScalarFieldEnum | Prisma.Detalle_orden_ingresoScalarFieldEnum[];
};
export type detalle_orden_ingresoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithRelationInput | Prisma.detalle_orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.detalle_orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_orden_ingresoScalarFieldEnum | Prisma.Detalle_orden_ingresoScalarFieldEnum[];
};
export type detalle_orden_ingresoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoCreateInput, Prisma.detalle_orden_ingresoUncheckedCreateInput>;
};
export type detalle_orden_ingresoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.detalle_orden_ingresoCreateManyInput | Prisma.detalle_orden_ingresoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type detalle_orden_ingresoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    data: Prisma.detalle_orden_ingresoCreateManyInput | Prisma.detalle_orden_ingresoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.detalle_orden_ingresoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type detalle_orden_ingresoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateInput, Prisma.detalle_orden_ingresoUncheckedUpdateInput>;
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
};
export type detalle_orden_ingresoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateManyMutationInput, Prisma.detalle_orden_ingresoUncheckedUpdateManyInput>;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    limit?: number;
};
export type detalle_orden_ingresoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateManyMutationInput, Prisma.detalle_orden_ingresoUncheckedUpdateManyInput>;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    limit?: number;
    include?: Prisma.detalle_orden_ingresoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type detalle_orden_ingresoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_orden_ingresoCreateInput, Prisma.detalle_orden_ingresoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.detalle_orden_ingresoUpdateInput, Prisma.detalle_orden_ingresoUncheckedUpdateInput>;
};
export type detalle_orden_ingresoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.detalle_orden_ingresoWhereUniqueInput;
};
export type detalle_orden_ingresoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_orden_ingresoWhereInput;
    limit?: number;
};
export type detalle_orden_ingreso$ordenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.orden_ingresoWhereInput;
};
export type detalle_orden_ingreso$tipo_equipoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
};
export type detalle_orden_ingresoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
};
