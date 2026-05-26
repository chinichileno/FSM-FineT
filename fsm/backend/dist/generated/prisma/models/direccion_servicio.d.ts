import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type direccion_servicioModel = runtime.Types.Result.DefaultSelection<Prisma.$direccion_servicioPayload>;
export type AggregateDireccion_servicio = {
    _count: Direccion_servicioCountAggregateOutputType | null;
    _avg: Direccion_servicioAvgAggregateOutputType | null;
    _sum: Direccion_servicioSumAggregateOutputType | null;
    _min: Direccion_servicioMinAggregateOutputType | null;
    _max: Direccion_servicioMaxAggregateOutputType | null;
};
export type Direccion_servicioAvgAggregateOutputType = {
    id_direccion: number | null;
    id_cliente: number | null;
};
export type Direccion_servicioSumAggregateOutputType = {
    id_direccion: number | null;
    id_cliente: number | null;
};
export type Direccion_servicioMinAggregateOutputType = {
    id_direccion: number | null;
    id_cliente: number | null;
    direccion_completa: string | null;
    comuna: string | null;
    ciudad: string | null;
    es_principal: boolean | null;
};
export type Direccion_servicioMaxAggregateOutputType = {
    id_direccion: number | null;
    id_cliente: number | null;
    direccion_completa: string | null;
    comuna: string | null;
    ciudad: string | null;
    es_principal: boolean | null;
};
export type Direccion_servicioCountAggregateOutputType = {
    id_direccion: number;
    id_cliente: number;
    direccion_completa: number;
    comuna: number;
    ciudad: number;
    es_principal: number;
    _all: number;
};
export type Direccion_servicioAvgAggregateInputType = {
    id_direccion?: true;
    id_cliente?: true;
};
export type Direccion_servicioSumAggregateInputType = {
    id_direccion?: true;
    id_cliente?: true;
};
export type Direccion_servicioMinAggregateInputType = {
    id_direccion?: true;
    id_cliente?: true;
    direccion_completa?: true;
    comuna?: true;
    ciudad?: true;
    es_principal?: true;
};
export type Direccion_servicioMaxAggregateInputType = {
    id_direccion?: true;
    id_cliente?: true;
    direccion_completa?: true;
    comuna?: true;
    ciudad?: true;
    es_principal?: true;
};
export type Direccion_servicioCountAggregateInputType = {
    id_direccion?: true;
    id_cliente?: true;
    direccion_completa?: true;
    comuna?: true;
    ciudad?: true;
    es_principal?: true;
    _all?: true;
};
export type Direccion_servicioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.direccion_servicioWhereInput;
    orderBy?: Prisma.direccion_servicioOrderByWithRelationInput | Prisma.direccion_servicioOrderByWithRelationInput[];
    cursor?: Prisma.direccion_servicioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Direccion_servicioCountAggregateInputType;
    _avg?: Direccion_servicioAvgAggregateInputType;
    _sum?: Direccion_servicioSumAggregateInputType;
    _min?: Direccion_servicioMinAggregateInputType;
    _max?: Direccion_servicioMaxAggregateInputType;
};
export type GetDireccion_servicioAggregateType<T extends Direccion_servicioAggregateArgs> = {
    [P in keyof T & keyof AggregateDireccion_servicio]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDireccion_servicio[P]> : Prisma.GetScalarType<T[P], AggregateDireccion_servicio[P]>;
};
export type direccion_servicioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.direccion_servicioWhereInput;
    orderBy?: Prisma.direccion_servicioOrderByWithAggregationInput | Prisma.direccion_servicioOrderByWithAggregationInput[];
    by: Prisma.Direccion_servicioScalarFieldEnum[] | Prisma.Direccion_servicioScalarFieldEnum;
    having?: Prisma.direccion_servicioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Direccion_servicioCountAggregateInputType | true;
    _avg?: Direccion_servicioAvgAggregateInputType;
    _sum?: Direccion_servicioSumAggregateInputType;
    _min?: Direccion_servicioMinAggregateInputType;
    _max?: Direccion_servicioMaxAggregateInputType;
};
export type Direccion_servicioGroupByOutputType = {
    id_direccion: number;
    id_cliente: number | null;
    direccion_completa: string;
    comuna: string;
    ciudad: string | null;
    es_principal: boolean;
    _count: Direccion_servicioCountAggregateOutputType | null;
    _avg: Direccion_servicioAvgAggregateOutputType | null;
    _sum: Direccion_servicioSumAggregateOutputType | null;
    _min: Direccion_servicioMinAggregateOutputType | null;
    _max: Direccion_servicioMaxAggregateOutputType | null;
};
export type GetDireccion_servicioGroupByPayload<T extends direccion_servicioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Direccion_servicioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Direccion_servicioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Direccion_servicioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Direccion_servicioGroupByOutputType[P]>;
}>>;
export type direccion_servicioWhereInput = {
    AND?: Prisma.direccion_servicioWhereInput | Prisma.direccion_servicioWhereInput[];
    OR?: Prisma.direccion_servicioWhereInput[];
    NOT?: Prisma.direccion_servicioWhereInput | Prisma.direccion_servicioWhereInput[];
    id_direccion?: Prisma.IntFilter<"direccion_servicio"> | number;
    id_cliente?: Prisma.IntNullableFilter<"direccion_servicio"> | number | null;
    direccion_completa?: Prisma.StringFilter<"direccion_servicio"> | string;
    comuna?: Prisma.StringFilter<"direccion_servicio"> | string;
    ciudad?: Prisma.StringNullableFilter<"direccion_servicio"> | string | null;
    es_principal?: Prisma.BoolFilter<"direccion_servicio"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    ordenes?: Prisma.Orden_trabajoListRelationFilter;
};
export type direccion_servicioOrderByWithRelationInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_completa?: Prisma.SortOrder;
    comuna?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    es_principal?: Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    ordenes?: Prisma.orden_trabajoOrderByRelationAggregateInput;
};
export type direccion_servicioWhereUniqueInput = Prisma.AtLeast<{
    id_direccion?: number;
    AND?: Prisma.direccion_servicioWhereInput | Prisma.direccion_servicioWhereInput[];
    OR?: Prisma.direccion_servicioWhereInput[];
    NOT?: Prisma.direccion_servicioWhereInput | Prisma.direccion_servicioWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"direccion_servicio"> | number | null;
    direccion_completa?: Prisma.StringFilter<"direccion_servicio"> | string;
    comuna?: Prisma.StringFilter<"direccion_servicio"> | string;
    ciudad?: Prisma.StringNullableFilter<"direccion_servicio"> | string | null;
    es_principal?: Prisma.BoolFilter<"direccion_servicio"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    ordenes?: Prisma.Orden_trabajoListRelationFilter;
}, "id_direccion">;
export type direccion_servicioOrderByWithAggregationInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion_completa?: Prisma.SortOrder;
    comuna?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrderInput | Prisma.SortOrder;
    es_principal?: Prisma.SortOrder;
    _count?: Prisma.direccion_servicioCountOrderByAggregateInput;
    _avg?: Prisma.direccion_servicioAvgOrderByAggregateInput;
    _max?: Prisma.direccion_servicioMaxOrderByAggregateInput;
    _min?: Prisma.direccion_servicioMinOrderByAggregateInput;
    _sum?: Prisma.direccion_servicioSumOrderByAggregateInput;
};
export type direccion_servicioScalarWhereWithAggregatesInput = {
    AND?: Prisma.direccion_servicioScalarWhereWithAggregatesInput | Prisma.direccion_servicioScalarWhereWithAggregatesInput[];
    OR?: Prisma.direccion_servicioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.direccion_servicioScalarWhereWithAggregatesInput | Prisma.direccion_servicioScalarWhereWithAggregatesInput[];
    id_direccion?: Prisma.IntWithAggregatesFilter<"direccion_servicio"> | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"direccion_servicio"> | number | null;
    direccion_completa?: Prisma.StringWithAggregatesFilter<"direccion_servicio"> | string;
    comuna?: Prisma.StringWithAggregatesFilter<"direccion_servicio"> | string;
    ciudad?: Prisma.StringNullableWithAggregatesFilter<"direccion_servicio"> | string | null;
    es_principal?: Prisma.BoolWithAggregatesFilter<"direccion_servicio"> | boolean;
};
export type direccion_servicioCreateInput = {
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutDireccionesInput;
    ordenes?: Prisma.orden_trabajoCreateNestedManyWithoutDireccionInput;
};
export type direccion_servicioUncheckedCreateInput = {
    id_direccion?: number;
    id_cliente?: number | null;
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
    ordenes?: Prisma.orden_trabajoUncheckedCreateNestedManyWithoutDireccionInput;
};
export type direccion_servicioUpdateInput = {
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutDireccionesNestedInput;
    ordenes?: Prisma.orden_trabajoUpdateManyWithoutDireccionNestedInput;
};
export type direccion_servicioUncheckedUpdateInput = {
    id_direccion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes?: Prisma.orden_trabajoUncheckedUpdateManyWithoutDireccionNestedInput;
};
export type direccion_servicioCreateManyInput = {
    id_direccion?: number;
    id_cliente?: number | null;
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
};
export type direccion_servicioUpdateManyMutationInput = {
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type direccion_servicioUncheckedUpdateManyInput = {
    id_direccion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Direccion_servicioListRelationFilter = {
    every?: Prisma.direccion_servicioWhereInput;
    some?: Prisma.direccion_servicioWhereInput;
    none?: Prisma.direccion_servicioWhereInput;
};
export type direccion_servicioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type direccion_servicioCountOrderByAggregateInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    direccion_completa?: Prisma.SortOrder;
    comuna?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    es_principal?: Prisma.SortOrder;
};
export type direccion_servicioAvgOrderByAggregateInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type direccion_servicioMaxOrderByAggregateInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    direccion_completa?: Prisma.SortOrder;
    comuna?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    es_principal?: Prisma.SortOrder;
};
export type direccion_servicioMinOrderByAggregateInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    direccion_completa?: Prisma.SortOrder;
    comuna?: Prisma.SortOrder;
    ciudad?: Prisma.SortOrder;
    es_principal?: Prisma.SortOrder;
};
export type direccion_servicioSumOrderByAggregateInput = {
    id_direccion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type Direccion_servicioNullableScalarRelationFilter = {
    is?: Prisma.direccion_servicioWhereInput | null;
    isNot?: Prisma.direccion_servicioWhereInput | null;
};
export type direccion_servicioCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput> | Prisma.direccion_servicioCreateWithoutClienteInput[] | Prisma.direccion_servicioUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutClienteInput | Prisma.direccion_servicioCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.direccion_servicioCreateManyClienteInputEnvelope;
    connect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
};
export type direccion_servicioUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput> | Prisma.direccion_servicioCreateWithoutClienteInput[] | Prisma.direccion_servicioUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutClienteInput | Prisma.direccion_servicioCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.direccion_servicioCreateManyClienteInputEnvelope;
    connect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
};
export type direccion_servicioUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput> | Prisma.direccion_servicioCreateWithoutClienteInput[] | Prisma.direccion_servicioUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutClienteInput | Prisma.direccion_servicioCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.direccion_servicioUpsertWithWhereUniqueWithoutClienteInput | Prisma.direccion_servicioUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.direccion_servicioCreateManyClienteInputEnvelope;
    set?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    disconnect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    delete?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    connect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    update?: Prisma.direccion_servicioUpdateWithWhereUniqueWithoutClienteInput | Prisma.direccion_servicioUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.direccion_servicioUpdateManyWithWhereWithoutClienteInput | Prisma.direccion_servicioUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.direccion_servicioScalarWhereInput | Prisma.direccion_servicioScalarWhereInput[];
};
export type direccion_servicioUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput> | Prisma.direccion_servicioCreateWithoutClienteInput[] | Prisma.direccion_servicioUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutClienteInput | Prisma.direccion_servicioCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.direccion_servicioUpsertWithWhereUniqueWithoutClienteInput | Prisma.direccion_servicioUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.direccion_servicioCreateManyClienteInputEnvelope;
    set?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    disconnect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    delete?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    connect?: Prisma.direccion_servicioWhereUniqueInput | Prisma.direccion_servicioWhereUniqueInput[];
    update?: Prisma.direccion_servicioUpdateWithWhereUniqueWithoutClienteInput | Prisma.direccion_servicioUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.direccion_servicioUpdateManyWithWhereWithoutClienteInput | Prisma.direccion_servicioUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.direccion_servicioScalarWhereInput | Prisma.direccion_servicioScalarWhereInput[];
};
export type direccion_servicioCreateNestedOneWithoutOrdenesInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedCreateWithoutOrdenesInput>;
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutOrdenesInput;
    connect?: Prisma.direccion_servicioWhereUniqueInput;
};
export type direccion_servicioUpdateOneWithoutOrdenesNestedInput = {
    create?: Prisma.XOR<Prisma.direccion_servicioCreateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedCreateWithoutOrdenesInput>;
    connectOrCreate?: Prisma.direccion_servicioCreateOrConnectWithoutOrdenesInput;
    upsert?: Prisma.direccion_servicioUpsertWithoutOrdenesInput;
    disconnect?: Prisma.direccion_servicioWhereInput | boolean;
    delete?: Prisma.direccion_servicioWhereInput | boolean;
    connect?: Prisma.direccion_servicioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.direccion_servicioUpdateToOneWithWhereWithoutOrdenesInput, Prisma.direccion_servicioUpdateWithoutOrdenesInput>, Prisma.direccion_servicioUncheckedUpdateWithoutOrdenesInput>;
};
export type direccion_servicioCreateWithoutClienteInput = {
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
    ordenes?: Prisma.orden_trabajoCreateNestedManyWithoutDireccionInput;
};
export type direccion_servicioUncheckedCreateWithoutClienteInput = {
    id_direccion?: number;
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
    ordenes?: Prisma.orden_trabajoUncheckedCreateNestedManyWithoutDireccionInput;
};
export type direccion_servicioCreateOrConnectWithoutClienteInput = {
    where: Prisma.direccion_servicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput>;
};
export type direccion_servicioCreateManyClienteInputEnvelope = {
    data: Prisma.direccion_servicioCreateManyClienteInput | Prisma.direccion_servicioCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type direccion_servicioUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.direccion_servicioWhereUniqueInput;
    update: Prisma.XOR<Prisma.direccion_servicioUpdateWithoutClienteInput, Prisma.direccion_servicioUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.direccion_servicioCreateWithoutClienteInput, Prisma.direccion_servicioUncheckedCreateWithoutClienteInput>;
};
export type direccion_servicioUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.direccion_servicioWhereUniqueInput;
    data: Prisma.XOR<Prisma.direccion_servicioUpdateWithoutClienteInput, Prisma.direccion_servicioUncheckedUpdateWithoutClienteInput>;
};
export type direccion_servicioUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.direccion_servicioScalarWhereInput;
    data: Prisma.XOR<Prisma.direccion_servicioUpdateManyMutationInput, Prisma.direccion_servicioUncheckedUpdateManyWithoutClienteInput>;
};
export type direccion_servicioScalarWhereInput = {
    AND?: Prisma.direccion_servicioScalarWhereInput | Prisma.direccion_servicioScalarWhereInput[];
    OR?: Prisma.direccion_servicioScalarWhereInput[];
    NOT?: Prisma.direccion_servicioScalarWhereInput | Prisma.direccion_servicioScalarWhereInput[];
    id_direccion?: Prisma.IntFilter<"direccion_servicio"> | number;
    id_cliente?: Prisma.IntNullableFilter<"direccion_servicio"> | number | null;
    direccion_completa?: Prisma.StringFilter<"direccion_servicio"> | string;
    comuna?: Prisma.StringFilter<"direccion_servicio"> | string;
    ciudad?: Prisma.StringNullableFilter<"direccion_servicio"> | string | null;
    es_principal?: Prisma.BoolFilter<"direccion_servicio"> | boolean;
};
export type direccion_servicioCreateWithoutOrdenesInput = {
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutDireccionesInput;
};
export type direccion_servicioUncheckedCreateWithoutOrdenesInput = {
    id_direccion?: number;
    id_cliente?: number | null;
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
};
export type direccion_servicioCreateOrConnectWithoutOrdenesInput = {
    where: Prisma.direccion_servicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.direccion_servicioCreateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedCreateWithoutOrdenesInput>;
};
export type direccion_servicioUpsertWithoutOrdenesInput = {
    update: Prisma.XOR<Prisma.direccion_servicioUpdateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedUpdateWithoutOrdenesInput>;
    create: Prisma.XOR<Prisma.direccion_servicioCreateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedCreateWithoutOrdenesInput>;
    where?: Prisma.direccion_servicioWhereInput;
};
export type direccion_servicioUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: Prisma.direccion_servicioWhereInput;
    data: Prisma.XOR<Prisma.direccion_servicioUpdateWithoutOrdenesInput, Prisma.direccion_servicioUncheckedUpdateWithoutOrdenesInput>;
};
export type direccion_servicioUpdateWithoutOrdenesInput = {
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutDireccionesNestedInput;
};
export type direccion_servicioUncheckedUpdateWithoutOrdenesInput = {
    id_direccion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type direccion_servicioCreateManyClienteInput = {
    id_direccion?: number;
    direccion_completa: string;
    comuna: string;
    ciudad?: string | null;
    es_principal?: boolean;
};
export type direccion_servicioUpdateWithoutClienteInput = {
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes?: Prisma.orden_trabajoUpdateManyWithoutDireccionNestedInput;
};
export type direccion_servicioUncheckedUpdateWithoutClienteInput = {
    id_direccion?: Prisma.IntFieldUpdateOperationsInput | number;
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes?: Prisma.orden_trabajoUncheckedUpdateManyWithoutDireccionNestedInput;
};
export type direccion_servicioUncheckedUpdateManyWithoutClienteInput = {
    id_direccion?: Prisma.IntFieldUpdateOperationsInput | number;
    direccion_completa?: Prisma.StringFieldUpdateOperationsInput | string;
    comuna?: Prisma.StringFieldUpdateOperationsInput | string;
    ciudad?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    es_principal?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Direccion_servicioCountOutputType = {
    ordenes: number;
};
export type Direccion_servicioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenes?: boolean | Direccion_servicioCountOutputTypeCountOrdenesArgs;
};
export type Direccion_servicioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Direccion_servicioCountOutputTypeSelect<ExtArgs> | null;
};
export type Direccion_servicioCountOutputTypeCountOrdenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_trabajoWhereInput;
};
export type direccion_servicioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_direccion?: boolean;
    id_cliente?: boolean;
    direccion_completa?: boolean;
    comuna?: boolean;
    ciudad?: boolean;
    es_principal?: boolean;
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
    ordenes?: boolean | Prisma.direccion_servicio$ordenesArgs<ExtArgs>;
    _count?: boolean | Prisma.Direccion_servicioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["direccion_servicio"]>;
export type direccion_servicioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_direccion?: boolean;
    id_cliente?: boolean;
    direccion_completa?: boolean;
    comuna?: boolean;
    ciudad?: boolean;
    es_principal?: boolean;
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["direccion_servicio"]>;
export type direccion_servicioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_direccion?: boolean;
    id_cliente?: boolean;
    direccion_completa?: boolean;
    comuna?: boolean;
    ciudad?: boolean;
    es_principal?: boolean;
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["direccion_servicio"]>;
export type direccion_servicioSelectScalar = {
    id_direccion?: boolean;
    id_cliente?: boolean;
    direccion_completa?: boolean;
    comuna?: boolean;
    ciudad?: boolean;
    es_principal?: boolean;
};
export type direccion_servicioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_direccion" | "id_cliente" | "direccion_completa" | "comuna" | "ciudad" | "es_principal", ExtArgs["result"]["direccion_servicio"]>;
export type direccion_servicioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
    ordenes?: boolean | Prisma.direccion_servicio$ordenesArgs<ExtArgs>;
    _count?: boolean | Prisma.Direccion_servicioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type direccion_servicioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
};
export type direccion_servicioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.direccion_servicio$clienteArgs<ExtArgs>;
};
export type $direccion_servicioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "direccion_servicio";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        ordenes: Prisma.$orden_trabajoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_direccion: number;
        id_cliente: number | null;
        direccion_completa: string;
        comuna: string;
        ciudad: string | null;
        es_principal: boolean;
    }, ExtArgs["result"]["direccion_servicio"]>;
    composites: {};
};
export type direccion_servicioGetPayload<S extends boolean | null | undefined | direccion_servicioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload, S>;
export type direccion_servicioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<direccion_servicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Direccion_servicioCountAggregateInputType | true;
};
export interface direccion_servicioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['direccion_servicio'];
        meta: {
            name: 'direccion_servicio';
        };
    };
    findUnique<T extends direccion_servicioFindUniqueArgs>(args: Prisma.SelectSubset<T, direccion_servicioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends direccion_servicioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, direccion_servicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends direccion_servicioFindFirstArgs>(args?: Prisma.SelectSubset<T, direccion_servicioFindFirstArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends direccion_servicioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, direccion_servicioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends direccion_servicioFindManyArgs>(args?: Prisma.SelectSubset<T, direccion_servicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends direccion_servicioCreateArgs>(args: Prisma.SelectSubset<T, direccion_servicioCreateArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends direccion_servicioCreateManyArgs>(args?: Prisma.SelectSubset<T, direccion_servicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends direccion_servicioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, direccion_servicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends direccion_servicioDeleteArgs>(args: Prisma.SelectSubset<T, direccion_servicioDeleteArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends direccion_servicioUpdateArgs>(args: Prisma.SelectSubset<T, direccion_servicioUpdateArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends direccion_servicioDeleteManyArgs>(args?: Prisma.SelectSubset<T, direccion_servicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends direccion_servicioUpdateManyArgs>(args: Prisma.SelectSubset<T, direccion_servicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends direccion_servicioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, direccion_servicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends direccion_servicioUpsertArgs>(args: Prisma.SelectSubset<T, direccion_servicioUpsertArgs<ExtArgs>>): Prisma.Prisma__direccion_servicioClient<runtime.Types.Result.GetResult<Prisma.$direccion_servicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends direccion_servicioCountArgs>(args?: Prisma.Subset<T, direccion_servicioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Direccion_servicioCountAggregateOutputType> : number>;
    aggregate<T extends Direccion_servicioAggregateArgs>(args: Prisma.Subset<T, Direccion_servicioAggregateArgs>): Prisma.PrismaPromise<GetDireccion_servicioAggregateType<T>>;
    groupBy<T extends direccion_servicioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: direccion_servicioGroupByArgs['orderBy'];
    } : {
        orderBy?: direccion_servicioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, direccion_servicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDireccion_servicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: direccion_servicioFieldRefs;
}
export interface Prisma__direccion_servicioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.direccion_servicio$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.direccion_servicio$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ordenes<T extends Prisma.direccion_servicio$ordenesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.direccion_servicio$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface direccion_servicioFieldRefs {
    readonly id_direccion: Prisma.FieldRef<"direccion_servicio", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"direccion_servicio", 'Int'>;
    readonly direccion_completa: Prisma.FieldRef<"direccion_servicio", 'String'>;
    readonly comuna: Prisma.FieldRef<"direccion_servicio", 'String'>;
    readonly ciudad: Prisma.FieldRef<"direccion_servicio", 'String'>;
    readonly es_principal: Prisma.FieldRef<"direccion_servicio", 'Boolean'>;
}
export type direccion_servicioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where: Prisma.direccion_servicioWhereUniqueInput;
};
export type direccion_servicioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where: Prisma.direccion_servicioWhereUniqueInput;
};
export type direccion_servicioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where?: Prisma.direccion_servicioWhereInput;
    orderBy?: Prisma.direccion_servicioOrderByWithRelationInput | Prisma.direccion_servicioOrderByWithRelationInput[];
    cursor?: Prisma.direccion_servicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Direccion_servicioScalarFieldEnum | Prisma.Direccion_servicioScalarFieldEnum[];
};
export type direccion_servicioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where?: Prisma.direccion_servicioWhereInput;
    orderBy?: Prisma.direccion_servicioOrderByWithRelationInput | Prisma.direccion_servicioOrderByWithRelationInput[];
    cursor?: Prisma.direccion_servicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Direccion_servicioScalarFieldEnum | Prisma.Direccion_servicioScalarFieldEnum[];
};
export type direccion_servicioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where?: Prisma.direccion_servicioWhereInput;
    orderBy?: Prisma.direccion_servicioOrderByWithRelationInput | Prisma.direccion_servicioOrderByWithRelationInput[];
    cursor?: Prisma.direccion_servicioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Direccion_servicioScalarFieldEnum | Prisma.Direccion_servicioScalarFieldEnum[];
};
export type direccion_servicioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.direccion_servicioCreateInput, Prisma.direccion_servicioUncheckedCreateInput>;
};
export type direccion_servicioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.direccion_servicioCreateManyInput | Prisma.direccion_servicioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type direccion_servicioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    data: Prisma.direccion_servicioCreateManyInput | Prisma.direccion_servicioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.direccion_servicioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type direccion_servicioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.direccion_servicioUpdateInput, Prisma.direccion_servicioUncheckedUpdateInput>;
    where: Prisma.direccion_servicioWhereUniqueInput;
};
export type direccion_servicioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.direccion_servicioUpdateManyMutationInput, Prisma.direccion_servicioUncheckedUpdateManyInput>;
    where?: Prisma.direccion_servicioWhereInput;
    limit?: number;
};
export type direccion_servicioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.direccion_servicioUpdateManyMutationInput, Prisma.direccion_servicioUncheckedUpdateManyInput>;
    where?: Prisma.direccion_servicioWhereInput;
    limit?: number;
    include?: Prisma.direccion_servicioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type direccion_servicioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where: Prisma.direccion_servicioWhereUniqueInput;
    create: Prisma.XOR<Prisma.direccion_servicioCreateInput, Prisma.direccion_servicioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.direccion_servicioUpdateInput, Prisma.direccion_servicioUncheckedUpdateInput>;
};
export type direccion_servicioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
    where: Prisma.direccion_servicioWhereUniqueInput;
};
export type direccion_servicioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.direccion_servicioWhereInput;
    limit?: number;
};
export type direccion_servicio$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type direccion_servicio$ordenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
    orderBy?: Prisma.orden_trabajoOrderByWithRelationInput | Prisma.orden_trabajoOrderByWithRelationInput[];
    cursor?: Prisma.orden_trabajoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orden_trabajoScalarFieldEnum | Prisma.Orden_trabajoScalarFieldEnum[];
};
export type direccion_servicioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.direccion_servicioSelect<ExtArgs> | null;
    omit?: Prisma.direccion_servicioOmit<ExtArgs> | null;
    include?: Prisma.direccion_servicioInclude<ExtArgs> | null;
};
