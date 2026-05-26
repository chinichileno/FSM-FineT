import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type stock_consumibleModel = runtime.Types.Result.DefaultSelection<Prisma.$stock_consumiblePayload>;
export type AggregateStock_consumible = {
    _count: Stock_consumibleCountAggregateOutputType | null;
    _avg: Stock_consumibleAvgAggregateOutputType | null;
    _sum: Stock_consumibleSumAggregateOutputType | null;
    _min: Stock_consumibleMinAggregateOutputType | null;
    _max: Stock_consumibleMaxAggregateOutputType | null;
};
export type Stock_consumibleAvgAggregateOutputType = {
    id_stock: number | null;
    id_tipo_equipo: number | null;
    id_bodega: number | null;
    cantidad_disponible: runtime.Decimal | null;
    umbral_minimo: runtime.Decimal | null;
};
export type Stock_consumibleSumAggregateOutputType = {
    id_stock: number | null;
    id_tipo_equipo: number | null;
    id_bodega: number | null;
    cantidad_disponible: runtime.Decimal | null;
    umbral_minimo: runtime.Decimal | null;
};
export type Stock_consumibleMinAggregateOutputType = {
    id_stock: number | null;
    id_tipo_equipo: number | null;
    id_bodega: number | null;
    cantidad_disponible: runtime.Decimal | null;
    umbral_minimo: runtime.Decimal | null;
};
export type Stock_consumibleMaxAggregateOutputType = {
    id_stock: number | null;
    id_tipo_equipo: number | null;
    id_bodega: number | null;
    cantidad_disponible: runtime.Decimal | null;
    umbral_minimo: runtime.Decimal | null;
};
export type Stock_consumibleCountAggregateOutputType = {
    id_stock: number;
    id_tipo_equipo: number;
    id_bodega: number;
    cantidad_disponible: number;
    umbral_minimo: number;
    _all: number;
};
export type Stock_consumibleAvgAggregateInputType = {
    id_stock?: true;
    id_tipo_equipo?: true;
    id_bodega?: true;
    cantidad_disponible?: true;
    umbral_minimo?: true;
};
export type Stock_consumibleSumAggregateInputType = {
    id_stock?: true;
    id_tipo_equipo?: true;
    id_bodega?: true;
    cantidad_disponible?: true;
    umbral_minimo?: true;
};
export type Stock_consumibleMinAggregateInputType = {
    id_stock?: true;
    id_tipo_equipo?: true;
    id_bodega?: true;
    cantidad_disponible?: true;
    umbral_minimo?: true;
};
export type Stock_consumibleMaxAggregateInputType = {
    id_stock?: true;
    id_tipo_equipo?: true;
    id_bodega?: true;
    cantidad_disponible?: true;
    umbral_minimo?: true;
};
export type Stock_consumibleCountAggregateInputType = {
    id_stock?: true;
    id_tipo_equipo?: true;
    id_bodega?: true;
    cantidad_disponible?: true;
    umbral_minimo?: true;
    _all?: true;
};
export type Stock_consumibleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_consumibleWhereInput;
    orderBy?: Prisma.stock_consumibleOrderByWithRelationInput | Prisma.stock_consumibleOrderByWithRelationInput[];
    cursor?: Prisma.stock_consumibleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Stock_consumibleCountAggregateInputType;
    _avg?: Stock_consumibleAvgAggregateInputType;
    _sum?: Stock_consumibleSumAggregateInputType;
    _min?: Stock_consumibleMinAggregateInputType;
    _max?: Stock_consumibleMaxAggregateInputType;
};
export type GetStock_consumibleAggregateType<T extends Stock_consumibleAggregateArgs> = {
    [P in keyof T & keyof AggregateStock_consumible]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStock_consumible[P]> : Prisma.GetScalarType<T[P], AggregateStock_consumible[P]>;
};
export type stock_consumibleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_consumibleWhereInput;
    orderBy?: Prisma.stock_consumibleOrderByWithAggregationInput | Prisma.stock_consumibleOrderByWithAggregationInput[];
    by: Prisma.Stock_consumibleScalarFieldEnum[] | Prisma.Stock_consumibleScalarFieldEnum;
    having?: Prisma.stock_consumibleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Stock_consumibleCountAggregateInputType | true;
    _avg?: Stock_consumibleAvgAggregateInputType;
    _sum?: Stock_consumibleSumAggregateInputType;
    _min?: Stock_consumibleMinAggregateInputType;
    _max?: Stock_consumibleMaxAggregateInputType;
};
export type Stock_consumibleGroupByOutputType = {
    id_stock: number;
    id_tipo_equipo: number | null;
    id_bodega: number | null;
    cantidad_disponible: runtime.Decimal;
    umbral_minimo: runtime.Decimal | null;
    _count: Stock_consumibleCountAggregateOutputType | null;
    _avg: Stock_consumibleAvgAggregateOutputType | null;
    _sum: Stock_consumibleSumAggregateOutputType | null;
    _min: Stock_consumibleMinAggregateOutputType | null;
    _max: Stock_consumibleMaxAggregateOutputType | null;
};
export type GetStock_consumibleGroupByPayload<T extends stock_consumibleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Stock_consumibleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Stock_consumibleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Stock_consumibleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Stock_consumibleGroupByOutputType[P]>;
}>>;
export type stock_consumibleWhereInput = {
    AND?: Prisma.stock_consumibleWhereInput | Prisma.stock_consumibleWhereInput[];
    OR?: Prisma.stock_consumibleWhereInput[];
    NOT?: Prisma.stock_consumibleWhereInput | Prisma.stock_consumibleWhereInput[];
    id_stock?: Prisma.IntFilter<"stock_consumible"> | number;
    id_tipo_equipo?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    cantidad_disponible?: Prisma.DecimalFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.DecimalNullableFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    bodega?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
};
export type stock_consumibleOrderByWithRelationInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_equipo?: Prisma.tipo_equipoOrderByWithRelationInput;
    bodega?: Prisma.bodegaOrderByWithRelationInput;
};
export type stock_consumibleWhereUniqueInput = Prisma.AtLeast<{
    id_stock?: number;
    AND?: Prisma.stock_consumibleWhereInput | Prisma.stock_consumibleWhereInput[];
    OR?: Prisma.stock_consumibleWhereInput[];
    NOT?: Prisma.stock_consumibleWhereInput | Prisma.stock_consumibleWhereInput[];
    id_tipo_equipo?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    cantidad_disponible?: Prisma.DecimalFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.DecimalNullableFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    bodega?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
}, "id_stock">;
export type stock_consumibleOrderByWithAggregationInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.stock_consumibleCountOrderByAggregateInput;
    _avg?: Prisma.stock_consumibleAvgOrderByAggregateInput;
    _max?: Prisma.stock_consumibleMaxOrderByAggregateInput;
    _min?: Prisma.stock_consumibleMinOrderByAggregateInput;
    _sum?: Prisma.stock_consumibleSumOrderByAggregateInput;
};
export type stock_consumibleScalarWhereWithAggregatesInput = {
    AND?: Prisma.stock_consumibleScalarWhereWithAggregatesInput | Prisma.stock_consumibleScalarWhereWithAggregatesInput[];
    OR?: Prisma.stock_consumibleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.stock_consumibleScalarWhereWithAggregatesInput | Prisma.stock_consumibleScalarWhereWithAggregatesInput[];
    id_stock?: Prisma.IntWithAggregatesFilter<"stock_consumible"> | number;
    id_tipo_equipo?: Prisma.IntNullableWithAggregatesFilter<"stock_consumible"> | number | null;
    id_bodega?: Prisma.IntNullableWithAggregatesFilter<"stock_consumible"> | number | null;
    cantidad_disponible?: Prisma.DecimalWithAggregatesFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.DecimalNullableWithAggregatesFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateInput = {
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutStockInput;
    bodega?: Prisma.bodegaCreateNestedOneWithoutStockInput;
};
export type stock_consumibleUncheckedCreateInput = {
    id_stock?: number;
    id_tipo_equipo?: number | null;
    id_bodega?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUpdateInput = {
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutStockNestedInput;
    bodega?: Prisma.bodegaUpdateOneWithoutStockNestedInput;
};
export type stock_consumibleUncheckedUpdateInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateManyInput = {
    id_stock?: number;
    id_tipo_equipo?: number | null;
    id_bodega?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUpdateManyMutationInput = {
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUncheckedUpdateManyInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type Stock_consumibleListRelationFilter = {
    every?: Prisma.stock_consumibleWhereInput;
    some?: Prisma.stock_consumibleWhereInput;
    none?: Prisma.stock_consumibleWhereInput;
};
export type stock_consumibleOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type stock_consumibleCountOrderByAggregateInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrder;
};
export type stock_consumibleAvgOrderByAggregateInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrder;
};
export type stock_consumibleMaxOrderByAggregateInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrder;
};
export type stock_consumibleMinOrderByAggregateInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrder;
};
export type stock_consumibleSumOrderByAggregateInput = {
    id_stock?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    cantidad_disponible?: Prisma.SortOrder;
    umbral_minimo?: Prisma.SortOrder;
};
export type stock_consumibleCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput> | Prisma.stock_consumibleCreateWithoutTipo_equipoInput[] | Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput | Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.stock_consumibleCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
};
export type stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput> | Prisma.stock_consumibleCreateWithoutTipo_equipoInput[] | Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput | Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.stock_consumibleCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
};
export type stock_consumibleUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput> | Prisma.stock_consumibleCreateWithoutTipo_equipoInput[] | Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput | Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.stock_consumibleUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.stock_consumibleUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.stock_consumibleCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    disconnect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    delete?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    update?: Prisma.stock_consumibleUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.stock_consumibleUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.stock_consumibleUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.stock_consumibleUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
};
export type stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput> | Prisma.stock_consumibleCreateWithoutTipo_equipoInput[] | Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput | Prisma.stock_consumibleCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.stock_consumibleUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.stock_consumibleUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.stock_consumibleCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    disconnect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    delete?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    update?: Prisma.stock_consumibleUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.stock_consumibleUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.stock_consumibleUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.stock_consumibleUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
};
export type stock_consumibleCreateNestedManyWithoutBodegaInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput> | Prisma.stock_consumibleCreateWithoutBodegaInput[] | Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput | Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput[];
    createMany?: Prisma.stock_consumibleCreateManyBodegaInputEnvelope;
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
};
export type stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput> | Prisma.stock_consumibleCreateWithoutBodegaInput[] | Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput | Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput[];
    createMany?: Prisma.stock_consumibleCreateManyBodegaInputEnvelope;
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
};
export type stock_consumibleUpdateManyWithoutBodegaNestedInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput> | Prisma.stock_consumibleCreateWithoutBodegaInput[] | Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput | Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput[];
    upsert?: Prisma.stock_consumibleUpsertWithWhereUniqueWithoutBodegaInput | Prisma.stock_consumibleUpsertWithWhereUniqueWithoutBodegaInput[];
    createMany?: Prisma.stock_consumibleCreateManyBodegaInputEnvelope;
    set?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    disconnect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    delete?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    update?: Prisma.stock_consumibleUpdateWithWhereUniqueWithoutBodegaInput | Prisma.stock_consumibleUpdateWithWhereUniqueWithoutBodegaInput[];
    updateMany?: Prisma.stock_consumibleUpdateManyWithWhereWithoutBodegaInput | Prisma.stock_consumibleUpdateManyWithWhereWithoutBodegaInput[];
    deleteMany?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
};
export type stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput = {
    create?: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput> | Prisma.stock_consumibleCreateWithoutBodegaInput[] | Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput | Prisma.stock_consumibleCreateOrConnectWithoutBodegaInput[];
    upsert?: Prisma.stock_consumibleUpsertWithWhereUniqueWithoutBodegaInput | Prisma.stock_consumibleUpsertWithWhereUniqueWithoutBodegaInput[];
    createMany?: Prisma.stock_consumibleCreateManyBodegaInputEnvelope;
    set?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    disconnect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    delete?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    connect?: Prisma.stock_consumibleWhereUniqueInput | Prisma.stock_consumibleWhereUniqueInput[];
    update?: Prisma.stock_consumibleUpdateWithWhereUniqueWithoutBodegaInput | Prisma.stock_consumibleUpdateWithWhereUniqueWithoutBodegaInput[];
    updateMany?: Prisma.stock_consumibleUpdateManyWithWhereWithoutBodegaInput | Prisma.stock_consumibleUpdateManyWithWhereWithoutBodegaInput[];
    deleteMany?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
};
export type stock_consumibleCreateWithoutTipo_equipoInput = {
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bodega?: Prisma.bodegaCreateNestedOneWithoutStockInput;
};
export type stock_consumibleUncheckedCreateWithoutTipo_equipoInput = {
    id_stock?: number;
    id_bodega?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateOrConnectWithoutTipo_equipoInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput>;
};
export type stock_consumibleCreateManyTipo_equipoInputEnvelope = {
    data: Prisma.stock_consumibleCreateManyTipo_equipoInput | Prisma.stock_consumibleCreateManyTipo_equipoInput[];
    skipDuplicates?: boolean;
};
export type stock_consumibleUpsertWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    update: Prisma.XOR<Prisma.stock_consumibleUpdateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedUpdateWithoutTipo_equipoInput>;
    create: Prisma.XOR<Prisma.stock_consumibleCreateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedCreateWithoutTipo_equipoInput>;
};
export type stock_consumibleUpdateWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateWithoutTipo_equipoInput, Prisma.stock_consumibleUncheckedUpdateWithoutTipo_equipoInput>;
};
export type stock_consumibleUpdateManyWithWhereWithoutTipo_equipoInput = {
    where: Prisma.stock_consumibleScalarWhereInput;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateManyMutationInput, Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoInput>;
};
export type stock_consumibleScalarWhereInput = {
    AND?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
    OR?: Prisma.stock_consumibleScalarWhereInput[];
    NOT?: Prisma.stock_consumibleScalarWhereInput | Prisma.stock_consumibleScalarWhereInput[];
    id_stock?: Prisma.IntFilter<"stock_consumible"> | number;
    id_tipo_equipo?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"stock_consumible"> | number | null;
    cantidad_disponible?: Prisma.DecimalFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.DecimalNullableFilter<"stock_consumible"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateWithoutBodegaInput = {
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutStockInput;
};
export type stock_consumibleUncheckedCreateWithoutBodegaInput = {
    id_stock?: number;
    id_tipo_equipo?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateOrConnectWithoutBodegaInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput>;
};
export type stock_consumibleCreateManyBodegaInputEnvelope = {
    data: Prisma.stock_consumibleCreateManyBodegaInput | Prisma.stock_consumibleCreateManyBodegaInput[];
    skipDuplicates?: boolean;
};
export type stock_consumibleUpsertWithWhereUniqueWithoutBodegaInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    update: Prisma.XOR<Prisma.stock_consumibleUpdateWithoutBodegaInput, Prisma.stock_consumibleUncheckedUpdateWithoutBodegaInput>;
    create: Prisma.XOR<Prisma.stock_consumibleCreateWithoutBodegaInput, Prisma.stock_consumibleUncheckedCreateWithoutBodegaInput>;
};
export type stock_consumibleUpdateWithWhereUniqueWithoutBodegaInput = {
    where: Prisma.stock_consumibleWhereUniqueInput;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateWithoutBodegaInput, Prisma.stock_consumibleUncheckedUpdateWithoutBodegaInput>;
};
export type stock_consumibleUpdateManyWithWhereWithoutBodegaInput = {
    where: Prisma.stock_consumibleScalarWhereInput;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateManyMutationInput, Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaInput>;
};
export type stock_consumibleCreateManyTipo_equipoInput = {
    id_stock?: number;
    id_bodega?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUpdateWithoutTipo_equipoInput = {
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    bodega?: Prisma.bodegaUpdateOneWithoutStockNestedInput;
};
export type stock_consumibleUncheckedUpdateWithoutTipo_equipoInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUncheckedUpdateManyWithoutTipo_equipoInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleCreateManyBodegaInput = {
    id_stock?: number;
    id_tipo_equipo?: number | null;
    cantidad_disponible: runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUpdateWithoutBodegaInput = {
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutStockNestedInput;
};
export type stock_consumibleUncheckedUpdateWithoutBodegaInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleUncheckedUpdateManyWithoutBodegaInput = {
    id_stock?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad_disponible?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    umbral_minimo?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type stock_consumibleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_stock?: boolean;
    id_tipo_equipo?: boolean;
    id_bodega?: boolean;
    cantidad_disponible?: boolean;
    umbral_minimo?: boolean;
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
}, ExtArgs["result"]["stock_consumible"]>;
export type stock_consumibleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_stock?: boolean;
    id_tipo_equipo?: boolean;
    id_bodega?: boolean;
    cantidad_disponible?: boolean;
    umbral_minimo?: boolean;
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
}, ExtArgs["result"]["stock_consumible"]>;
export type stock_consumibleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_stock?: boolean;
    id_tipo_equipo?: boolean;
    id_bodega?: boolean;
    cantidad_disponible?: boolean;
    umbral_minimo?: boolean;
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
}, ExtArgs["result"]["stock_consumible"]>;
export type stock_consumibleSelectScalar = {
    id_stock?: boolean;
    id_tipo_equipo?: boolean;
    id_bodega?: boolean;
    cantidad_disponible?: boolean;
    umbral_minimo?: boolean;
};
export type stock_consumibleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_stock" | "id_tipo_equipo" | "id_bodega" | "cantidad_disponible" | "umbral_minimo", ExtArgs["result"]["stock_consumible"]>;
export type stock_consumibleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
};
export type stock_consumibleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
};
export type stock_consumibleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>;
    bodega?: boolean | Prisma.stock_consumible$bodegaArgs<ExtArgs>;
};
export type $stock_consumiblePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "stock_consumible";
    objects: {
        tipo_equipo: Prisma.$tipo_equipoPayload<ExtArgs> | null;
        bodega: Prisma.$bodegaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_stock: number;
        id_tipo_equipo: number | null;
        id_bodega: number | null;
        cantidad_disponible: runtime.Decimal;
        umbral_minimo: runtime.Decimal | null;
    }, ExtArgs["result"]["stock_consumible"]>;
    composites: {};
};
export type stock_consumibleGetPayload<S extends boolean | null | undefined | stock_consumibleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload, S>;
export type stock_consumibleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<stock_consumibleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Stock_consumibleCountAggregateInputType | true;
};
export interface stock_consumibleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['stock_consumible'];
        meta: {
            name: 'stock_consumible';
        };
    };
    findUnique<T extends stock_consumibleFindUniqueArgs>(args: Prisma.SelectSubset<T, stock_consumibleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends stock_consumibleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, stock_consumibleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends stock_consumibleFindFirstArgs>(args?: Prisma.SelectSubset<T, stock_consumibleFindFirstArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends stock_consumibleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, stock_consumibleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends stock_consumibleFindManyArgs>(args?: Prisma.SelectSubset<T, stock_consumibleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends stock_consumibleCreateArgs>(args: Prisma.SelectSubset<T, stock_consumibleCreateArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends stock_consumibleCreateManyArgs>(args?: Prisma.SelectSubset<T, stock_consumibleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends stock_consumibleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, stock_consumibleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends stock_consumibleDeleteArgs>(args: Prisma.SelectSubset<T, stock_consumibleDeleteArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends stock_consumibleUpdateArgs>(args: Prisma.SelectSubset<T, stock_consumibleUpdateArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends stock_consumibleDeleteManyArgs>(args?: Prisma.SelectSubset<T, stock_consumibleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends stock_consumibleUpdateManyArgs>(args: Prisma.SelectSubset<T, stock_consumibleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends stock_consumibleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, stock_consumibleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends stock_consumibleUpsertArgs>(args: Prisma.SelectSubset<T, stock_consumibleUpsertArgs<ExtArgs>>): Prisma.Prisma__stock_consumibleClient<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends stock_consumibleCountArgs>(args?: Prisma.Subset<T, stock_consumibleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Stock_consumibleCountAggregateOutputType> : number>;
    aggregate<T extends Stock_consumibleAggregateArgs>(args: Prisma.Subset<T, Stock_consumibleAggregateArgs>): Prisma.PrismaPromise<GetStock_consumibleAggregateType<T>>;
    groupBy<T extends stock_consumibleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: stock_consumibleGroupByArgs['orderBy'];
    } : {
        orderBy?: stock_consumibleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, stock_consumibleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_consumibleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: stock_consumibleFieldRefs;
}
export interface Prisma__stock_consumibleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tipo_equipo<T extends Prisma.stock_consumible$tipo_equipoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stock_consumible$tipo_equipoArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bodega<T extends Prisma.stock_consumible$bodegaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.stock_consumible$bodegaArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface stock_consumibleFieldRefs {
    readonly id_stock: Prisma.FieldRef<"stock_consumible", 'Int'>;
    readonly id_tipo_equipo: Prisma.FieldRef<"stock_consumible", 'Int'>;
    readonly id_bodega: Prisma.FieldRef<"stock_consumible", 'Int'>;
    readonly cantidad_disponible: Prisma.FieldRef<"stock_consumible", 'Decimal'>;
    readonly umbral_minimo: Prisma.FieldRef<"stock_consumible", 'Decimal'>;
}
export type stock_consumibleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where: Prisma.stock_consumibleWhereUniqueInput;
};
export type stock_consumibleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where: Prisma.stock_consumibleWhereUniqueInput;
};
export type stock_consumibleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where?: Prisma.stock_consumibleWhereInput;
    orderBy?: Prisma.stock_consumibleOrderByWithRelationInput | Prisma.stock_consumibleOrderByWithRelationInput[];
    cursor?: Prisma.stock_consumibleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_consumibleScalarFieldEnum | Prisma.Stock_consumibleScalarFieldEnum[];
};
export type stock_consumibleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where?: Prisma.stock_consumibleWhereInput;
    orderBy?: Prisma.stock_consumibleOrderByWithRelationInput | Prisma.stock_consumibleOrderByWithRelationInput[];
    cursor?: Prisma.stock_consumibleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_consumibleScalarFieldEnum | Prisma.Stock_consumibleScalarFieldEnum[];
};
export type stock_consumibleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where?: Prisma.stock_consumibleWhereInput;
    orderBy?: Prisma.stock_consumibleOrderByWithRelationInput | Prisma.stock_consumibleOrderByWithRelationInput[];
    cursor?: Prisma.stock_consumibleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Stock_consumibleScalarFieldEnum | Prisma.Stock_consumibleScalarFieldEnum[];
};
export type stock_consumibleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_consumibleCreateInput, Prisma.stock_consumibleUncheckedCreateInput>;
};
export type stock_consumibleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.stock_consumibleCreateManyInput | Prisma.stock_consumibleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type stock_consumibleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    data: Prisma.stock_consumibleCreateManyInput | Prisma.stock_consumibleCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.stock_consumibleIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type stock_consumibleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateInput, Prisma.stock_consumibleUncheckedUpdateInput>;
    where: Prisma.stock_consumibleWhereUniqueInput;
};
export type stock_consumibleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.stock_consumibleUpdateManyMutationInput, Prisma.stock_consumibleUncheckedUpdateManyInput>;
    where?: Prisma.stock_consumibleWhereInput;
    limit?: number;
};
export type stock_consumibleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.stock_consumibleUpdateManyMutationInput, Prisma.stock_consumibleUncheckedUpdateManyInput>;
    where?: Prisma.stock_consumibleWhereInput;
    limit?: number;
    include?: Prisma.stock_consumibleIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type stock_consumibleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where: Prisma.stock_consumibleWhereUniqueInput;
    create: Prisma.XOR<Prisma.stock_consumibleCreateInput, Prisma.stock_consumibleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.stock_consumibleUpdateInput, Prisma.stock_consumibleUncheckedUpdateInput>;
};
export type stock_consumibleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
    where: Prisma.stock_consumibleWhereUniqueInput;
};
export type stock_consumibleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_consumibleWhereInput;
    limit?: number;
};
export type stock_consumible$tipo_equipoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
};
export type stock_consumible$bodegaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
};
export type stock_consumibleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.stock_consumibleSelect<ExtArgs> | null;
    omit?: Prisma.stock_consumibleOmit<ExtArgs> | null;
    include?: Prisma.stock_consumibleInclude<ExtArgs> | null;
};
