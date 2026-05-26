import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type bodegaModel = runtime.Types.Result.DefaultSelection<Prisma.$bodegaPayload>;
export type AggregateBodega = {
    _count: BodegaCountAggregateOutputType | null;
    _avg: BodegaAvgAggregateOutputType | null;
    _sum: BodegaSumAggregateOutputType | null;
    _min: BodegaMinAggregateOutputType | null;
    _max: BodegaMaxAggregateOutputType | null;
};
export type BodegaAvgAggregateOutputType = {
    id_bodega: number | null;
    id_empresa: number | null;
};
export type BodegaSumAggregateOutputType = {
    id_bodega: number | null;
    id_empresa: number | null;
};
export type BodegaMinAggregateOutputType = {
    id_bodega: number | null;
    id_empresa: number | null;
    nombre: string | null;
    direccion: string | null;
    activa: boolean | null;
};
export type BodegaMaxAggregateOutputType = {
    id_bodega: number | null;
    id_empresa: number | null;
    nombre: string | null;
    direccion: string | null;
    activa: boolean | null;
};
export type BodegaCountAggregateOutputType = {
    id_bodega: number;
    id_empresa: number;
    nombre: number;
    direccion: number;
    activa: number;
    _all: number;
};
export type BodegaAvgAggregateInputType = {
    id_bodega?: true;
    id_empresa?: true;
};
export type BodegaSumAggregateInputType = {
    id_bodega?: true;
    id_empresa?: true;
};
export type BodegaMinAggregateInputType = {
    id_bodega?: true;
    id_empresa?: true;
    nombre?: true;
    direccion?: true;
    activa?: true;
};
export type BodegaMaxAggregateInputType = {
    id_bodega?: true;
    id_empresa?: true;
    nombre?: true;
    direccion?: true;
    activa?: true;
};
export type BodegaCountAggregateInputType = {
    id_bodega?: true;
    id_empresa?: true;
    nombre?: true;
    direccion?: true;
    activa?: true;
    _all?: true;
};
export type BodegaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bodegaWhereInput;
    orderBy?: Prisma.bodegaOrderByWithRelationInput | Prisma.bodegaOrderByWithRelationInput[];
    cursor?: Prisma.bodegaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BodegaCountAggregateInputType;
    _avg?: BodegaAvgAggregateInputType;
    _sum?: BodegaSumAggregateInputType;
    _min?: BodegaMinAggregateInputType;
    _max?: BodegaMaxAggregateInputType;
};
export type GetBodegaAggregateType<T extends BodegaAggregateArgs> = {
    [P in keyof T & keyof AggregateBodega]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBodega[P]> : Prisma.GetScalarType<T[P], AggregateBodega[P]>;
};
export type bodegaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bodegaWhereInput;
    orderBy?: Prisma.bodegaOrderByWithAggregationInput | Prisma.bodegaOrderByWithAggregationInput[];
    by: Prisma.BodegaScalarFieldEnum[] | Prisma.BodegaScalarFieldEnum;
    having?: Prisma.bodegaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BodegaCountAggregateInputType | true;
    _avg?: BodegaAvgAggregateInputType;
    _sum?: BodegaSumAggregateInputType;
    _min?: BodegaMinAggregateInputType;
    _max?: BodegaMaxAggregateInputType;
};
export type BodegaGroupByOutputType = {
    id_bodega: number;
    id_empresa: number | null;
    nombre: string;
    direccion: string | null;
    activa: boolean;
    _count: BodegaCountAggregateOutputType | null;
    _avg: BodegaAvgAggregateOutputType | null;
    _sum: BodegaSumAggregateOutputType | null;
    _min: BodegaMinAggregateOutputType | null;
    _max: BodegaMaxAggregateOutputType | null;
};
export type GetBodegaGroupByPayload<T extends bodegaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BodegaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BodegaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BodegaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BodegaGroupByOutputType[P]>;
}>>;
export type bodegaWhereInput = {
    AND?: Prisma.bodegaWhereInput | Prisma.bodegaWhereInput[];
    OR?: Prisma.bodegaWhereInput[];
    NOT?: Prisma.bodegaWhereInput | Prisma.bodegaWhereInput[];
    id_bodega?: Prisma.IntFilter<"bodega"> | number;
    id_empresa?: Prisma.IntNullableFilter<"bodega"> | number | null;
    nombre?: Prisma.StringFilter<"bodega"> | string;
    direccion?: Prisma.StringNullableFilter<"bodega"> | string | null;
    activa?: Prisma.BoolFilter<"bodega"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    stock?: Prisma.Stock_consumibleListRelationFilter;
    ordenes_ingreso?: Prisma.Orden_ingresoListRelationFilter;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    movimientos_origen?: Prisma.Movimiento_inventarioListRelationFilter;
    movimientos_destino?: Prisma.Movimiento_inventarioListRelationFilter;
};
export type bodegaOrderByWithRelationInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    stock?: Prisma.stock_consumibleOrderByRelationAggregateInput;
    ordenes_ingreso?: Prisma.orden_ingresoOrderByRelationAggregateInput;
    unidades?: Prisma.unidad_equipoOrderByRelationAggregateInput;
    movimientos_origen?: Prisma.movimiento_inventarioOrderByRelationAggregateInput;
    movimientos_destino?: Prisma.movimiento_inventarioOrderByRelationAggregateInput;
};
export type bodegaWhereUniqueInput = Prisma.AtLeast<{
    id_bodega?: number;
    AND?: Prisma.bodegaWhereInput | Prisma.bodegaWhereInput[];
    OR?: Prisma.bodegaWhereInput[];
    NOT?: Prisma.bodegaWhereInput | Prisma.bodegaWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"bodega"> | number | null;
    nombre?: Prisma.StringFilter<"bodega"> | string;
    direccion?: Prisma.StringNullableFilter<"bodega"> | string | null;
    activa?: Prisma.BoolFilter<"bodega"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    stock?: Prisma.Stock_consumibleListRelationFilter;
    ordenes_ingreso?: Prisma.Orden_ingresoListRelationFilter;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    movimientos_origen?: Prisma.Movimiento_inventarioListRelationFilter;
    movimientos_destino?: Prisma.Movimiento_inventarioListRelationFilter;
}, "id_bodega">;
export type bodegaOrderByWithAggregationInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    _count?: Prisma.bodegaCountOrderByAggregateInput;
    _avg?: Prisma.bodegaAvgOrderByAggregateInput;
    _max?: Prisma.bodegaMaxOrderByAggregateInput;
    _min?: Prisma.bodegaMinOrderByAggregateInput;
    _sum?: Prisma.bodegaSumOrderByAggregateInput;
};
export type bodegaScalarWhereWithAggregatesInput = {
    AND?: Prisma.bodegaScalarWhereWithAggregatesInput | Prisma.bodegaScalarWhereWithAggregatesInput[];
    OR?: Prisma.bodegaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.bodegaScalarWhereWithAggregatesInput | Prisma.bodegaScalarWhereWithAggregatesInput[];
    id_bodega?: Prisma.IntWithAggregatesFilter<"bodega"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"bodega"> | number | null;
    nombre?: Prisma.StringWithAggregatesFilter<"bodega"> | string;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"bodega"> | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"bodega"> | boolean;
};
export type bodegaCreateInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaCreateManyInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
};
export type bodegaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type bodegaUncheckedUpdateManyInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodegaListRelationFilter = {
    every?: Prisma.bodegaWhereInput;
    some?: Prisma.bodegaWhereInput;
    none?: Prisma.bodegaWhereInput;
};
export type bodegaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BodegaNullableScalarRelationFilter = {
    is?: Prisma.bodegaWhereInput | null;
    isNot?: Prisma.bodegaWhereInput | null;
};
export type bodegaCountOrderByAggregateInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type bodegaAvgOrderByAggregateInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type bodegaMaxOrderByAggregateInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type bodegaMinOrderByAggregateInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type bodegaSumOrderByAggregateInput = {
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type bodegaCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput> | Prisma.bodegaCreateWithoutEmpresaInput[] | Prisma.bodegaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutEmpresaInput | Prisma.bodegaCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.bodegaCreateManyEmpresaInputEnvelope;
    connect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
};
export type bodegaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput> | Prisma.bodegaCreateWithoutEmpresaInput[] | Prisma.bodegaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutEmpresaInput | Prisma.bodegaCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.bodegaCreateManyEmpresaInputEnvelope;
    connect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
};
export type bodegaUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput> | Prisma.bodegaCreateWithoutEmpresaInput[] | Prisma.bodegaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutEmpresaInput | Prisma.bodegaCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.bodegaUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.bodegaUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.bodegaCreateManyEmpresaInputEnvelope;
    set?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    disconnect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    delete?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    connect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    update?: Prisma.bodegaUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.bodegaUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.bodegaUpdateManyWithWhereWithoutEmpresaInput | Prisma.bodegaUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.bodegaScalarWhereInput | Prisma.bodegaScalarWhereInput[];
};
export type bodegaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput> | Prisma.bodegaCreateWithoutEmpresaInput[] | Prisma.bodegaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutEmpresaInput | Prisma.bodegaCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.bodegaUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.bodegaUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.bodegaCreateManyEmpresaInputEnvelope;
    set?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    disconnect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    delete?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    connect?: Prisma.bodegaWhereUniqueInput | Prisma.bodegaWhereUniqueInput[];
    update?: Prisma.bodegaUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.bodegaUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.bodegaUpdateManyWithWhereWithoutEmpresaInput | Prisma.bodegaUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.bodegaScalarWhereInput | Prisma.bodegaScalarWhereInput[];
};
export type bodegaCreateNestedOneWithoutUnidadesInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutUnidadesInput, Prisma.bodegaUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutUnidadesInput;
    connect?: Prisma.bodegaWhereUniqueInput;
};
export type bodegaUpdateOneWithoutUnidadesNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutUnidadesInput, Prisma.bodegaUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutUnidadesInput;
    upsert?: Prisma.bodegaUpsertWithoutUnidadesInput;
    disconnect?: Prisma.bodegaWhereInput | boolean;
    delete?: Prisma.bodegaWhereInput | boolean;
    connect?: Prisma.bodegaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bodegaUpdateToOneWithWhereWithoutUnidadesInput, Prisma.bodegaUpdateWithoutUnidadesInput>, Prisma.bodegaUncheckedUpdateWithoutUnidadesInput>;
};
export type bodegaCreateNestedOneWithoutStockInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutStockInput, Prisma.bodegaUncheckedCreateWithoutStockInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutStockInput;
    connect?: Prisma.bodegaWhereUniqueInput;
};
export type bodegaUpdateOneWithoutStockNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutStockInput, Prisma.bodegaUncheckedCreateWithoutStockInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutStockInput;
    upsert?: Prisma.bodegaUpsertWithoutStockInput;
    disconnect?: Prisma.bodegaWhereInput | boolean;
    delete?: Prisma.bodegaWhereInput | boolean;
    connect?: Prisma.bodegaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bodegaUpdateToOneWithWhereWithoutStockInput, Prisma.bodegaUpdateWithoutStockInput>, Prisma.bodegaUncheckedUpdateWithoutStockInput>;
};
export type bodegaCreateNestedOneWithoutOrdenes_ingresoInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedCreateWithoutOrdenes_ingresoInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutOrdenes_ingresoInput;
    connect?: Prisma.bodegaWhereUniqueInput;
};
export type bodegaUpdateOneWithoutOrdenes_ingresoNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedCreateWithoutOrdenes_ingresoInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutOrdenes_ingresoInput;
    upsert?: Prisma.bodegaUpsertWithoutOrdenes_ingresoInput;
    disconnect?: Prisma.bodegaWhereInput | boolean;
    delete?: Prisma.bodegaWhereInput | boolean;
    connect?: Prisma.bodegaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bodegaUpdateToOneWithWhereWithoutOrdenes_ingresoInput, Prisma.bodegaUpdateWithoutOrdenes_ingresoInput>, Prisma.bodegaUncheckedUpdateWithoutOrdenes_ingresoInput>;
};
export type bodegaCreateNestedOneWithoutMovimientos_origenInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_origenInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutMovimientos_origenInput;
    connect?: Prisma.bodegaWhereUniqueInput;
};
export type bodegaCreateNestedOneWithoutMovimientos_destinoInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_destinoInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutMovimientos_destinoInput;
    connect?: Prisma.bodegaWhereUniqueInput;
};
export type bodegaUpdateOneWithoutMovimientos_origenNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_origenInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutMovimientos_origenInput;
    upsert?: Prisma.bodegaUpsertWithoutMovimientos_origenInput;
    disconnect?: Prisma.bodegaWhereInput | boolean;
    delete?: Prisma.bodegaWhereInput | boolean;
    connect?: Prisma.bodegaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bodegaUpdateToOneWithWhereWithoutMovimientos_origenInput, Prisma.bodegaUpdateWithoutMovimientos_origenInput>, Prisma.bodegaUncheckedUpdateWithoutMovimientos_origenInput>;
};
export type bodegaUpdateOneWithoutMovimientos_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_destinoInput>;
    connectOrCreate?: Prisma.bodegaCreateOrConnectWithoutMovimientos_destinoInput;
    upsert?: Prisma.bodegaUpsertWithoutMovimientos_destinoInput;
    disconnect?: Prisma.bodegaWhereInput | boolean;
    delete?: Prisma.bodegaWhereInput | boolean;
    connect?: Prisma.bodegaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bodegaUpdateToOneWithWhereWithoutMovimientos_destinoInput, Prisma.bodegaUpdateWithoutMovimientos_destinoInput>, Prisma.bodegaUncheckedUpdateWithoutMovimientos_destinoInput>;
};
export type bodegaCreateWithoutEmpresaInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateWithoutEmpresaInput = {
    id_bodega?: number;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput>;
};
export type bodegaCreateManyEmpresaInputEnvelope = {
    data: Prisma.bodegaCreateManyEmpresaInput | Prisma.bodegaCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type bodegaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.bodegaWhereUniqueInput;
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutEmpresaInput, Prisma.bodegaUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutEmpresaInput, Prisma.bodegaUncheckedCreateWithoutEmpresaInput>;
};
export type bodegaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.bodegaWhereUniqueInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutEmpresaInput, Prisma.bodegaUncheckedUpdateWithoutEmpresaInput>;
};
export type bodegaUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.bodegaScalarWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateManyMutationInput, Prisma.bodegaUncheckedUpdateManyWithoutEmpresaInput>;
};
export type bodegaScalarWhereInput = {
    AND?: Prisma.bodegaScalarWhereInput | Prisma.bodegaScalarWhereInput[];
    OR?: Prisma.bodegaScalarWhereInput[];
    NOT?: Prisma.bodegaScalarWhereInput | Prisma.bodegaScalarWhereInput[];
    id_bodega?: Prisma.IntFilter<"bodega"> | number;
    id_empresa?: Prisma.IntNullableFilter<"bodega"> | number | null;
    nombre?: Prisma.StringFilter<"bodega"> | string;
    direccion?: Prisma.StringNullableFilter<"bodega"> | string | null;
    activa?: Prisma.BoolFilter<"bodega"> | boolean;
};
export type bodegaCreateWithoutUnidadesInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateWithoutUnidadesInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaCreateOrConnectWithoutUnidadesInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutUnidadesInput, Prisma.bodegaUncheckedCreateWithoutUnidadesInput>;
};
export type bodegaUpsertWithoutUnidadesInput = {
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutUnidadesInput, Prisma.bodegaUncheckedUpdateWithoutUnidadesInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutUnidadesInput, Prisma.bodegaUncheckedCreateWithoutUnidadesInput>;
    where?: Prisma.bodegaWhereInput;
};
export type bodegaUpdateToOneWithWhereWithoutUnidadesInput = {
    where?: Prisma.bodegaWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutUnidadesInput, Prisma.bodegaUncheckedUpdateWithoutUnidadesInput>;
};
export type bodegaUpdateWithoutUnidadesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateWithoutUnidadesInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaCreateWithoutStockInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateWithoutStockInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaCreateOrConnectWithoutStockInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutStockInput, Prisma.bodegaUncheckedCreateWithoutStockInput>;
};
export type bodegaUpsertWithoutStockInput = {
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutStockInput, Prisma.bodegaUncheckedUpdateWithoutStockInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutStockInput, Prisma.bodegaUncheckedCreateWithoutStockInput>;
    where?: Prisma.bodegaWhereInput;
};
export type bodegaUpdateToOneWithWhereWithoutStockInput = {
    where?: Prisma.bodegaWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutStockInput, Prisma.bodegaUncheckedUpdateWithoutStockInput>;
};
export type bodegaUpdateWithoutStockInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateWithoutStockInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaCreateWithoutOrdenes_ingresoInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateWithoutOrdenes_ingresoInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaCreateOrConnectWithoutOrdenes_ingresoInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedCreateWithoutOrdenes_ingresoInput>;
};
export type bodegaUpsertWithoutOrdenes_ingresoInput = {
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedUpdateWithoutOrdenes_ingresoInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedCreateWithoutOrdenes_ingresoInput>;
    where?: Prisma.bodegaWhereInput;
};
export type bodegaUpdateToOneWithWhereWithoutOrdenes_ingresoInput = {
    where?: Prisma.bodegaWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutOrdenes_ingresoInput, Prisma.bodegaUncheckedUpdateWithoutOrdenes_ingresoInput>;
};
export type bodegaUpdateWithoutOrdenes_ingresoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateWithoutOrdenes_ingresoInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaCreateWithoutMovimientos_origenInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_destino?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaUncheckedCreateWithoutMovimientos_origenInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput;
};
export type bodegaCreateOrConnectWithoutMovimientos_origenInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_origenInput>;
};
export type bodegaCreateWithoutMovimientos_destinoInput = {
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutBodegasInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioCreateNestedManyWithoutBodega_origenInput;
};
export type bodegaUncheckedCreateWithoutMovimientos_destinoInput = {
    id_bodega?: number;
    id_empresa?: number | null;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutBodegaInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutBodega_actualInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput;
};
export type bodegaCreateOrConnectWithoutMovimientos_destinoInput = {
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_destinoInput>;
};
export type bodegaUpsertWithoutMovimientos_origenInput = {
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedUpdateWithoutMovimientos_origenInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_origenInput>;
    where?: Prisma.bodegaWhereInput;
};
export type bodegaUpdateToOneWithWhereWithoutMovimientos_origenInput = {
    where?: Prisma.bodegaWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutMovimientos_origenInput, Prisma.bodegaUncheckedUpdateWithoutMovimientos_origenInput>;
};
export type bodegaUpdateWithoutMovimientos_origenInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateWithoutMovimientos_origenInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUpsertWithoutMovimientos_destinoInput = {
    update: Prisma.XOR<Prisma.bodegaUpdateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedUpdateWithoutMovimientos_destinoInput>;
    create: Prisma.XOR<Prisma.bodegaCreateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedCreateWithoutMovimientos_destinoInput>;
    where?: Prisma.bodegaWhereInput;
};
export type bodegaUpdateToOneWithWhereWithoutMovimientos_destinoInput = {
    where?: Prisma.bodegaWhereInput;
    data: Prisma.XOR<Prisma.bodegaUpdateWithoutMovimientos_destinoInput, Prisma.bodegaUncheckedUpdateWithoutMovimientos_destinoInput>;
};
export type bodegaUpdateWithoutMovimientos_destinoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutBodegasNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
};
export type bodegaUncheckedUpdateWithoutMovimientos_destinoInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
};
export type bodegaCreateManyEmpresaInput = {
    id_bodega?: number;
    nombre: string;
    direccion?: string | null;
    activa?: boolean;
};
export type bodegaUpdateWithoutEmpresaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateWithoutEmpresaInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutBodegaNestedInput;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutBodega_actualNestedInput;
    movimientos_origen?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput;
    movimientos_destino?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput;
};
export type bodegaUncheckedUpdateManyWithoutEmpresaInput = {
    id_bodega?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type BodegaCountOutputType = {
    stock: number;
    ordenes_ingreso: number;
    unidades: number;
    movimientos_origen: number;
    movimientos_destino: number;
};
export type BodegaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stock?: boolean | BodegaCountOutputTypeCountStockArgs;
    ordenes_ingreso?: boolean | BodegaCountOutputTypeCountOrdenes_ingresoArgs;
    unidades?: boolean | BodegaCountOutputTypeCountUnidadesArgs;
    movimientos_origen?: boolean | BodegaCountOutputTypeCountMovimientos_origenArgs;
    movimientos_destino?: boolean | BodegaCountOutputTypeCountMovimientos_destinoArgs;
};
export type BodegaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BodegaCountOutputTypeSelect<ExtArgs> | null;
};
export type BodegaCountOutputTypeCountStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_consumibleWhereInput;
};
export type BodegaCountOutputTypeCountOrdenes_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_ingresoWhereInput;
};
export type BodegaCountOutputTypeCountUnidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unidad_equipoWhereInput;
};
export type BodegaCountOutputTypeCountMovimientos_origenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
};
export type BodegaCountOutputTypeCountMovimientos_destinoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
};
export type bodegaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_bodega?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    activa?: boolean;
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
    stock?: boolean | Prisma.bodega$stockArgs<ExtArgs>;
    ordenes_ingreso?: boolean | Prisma.bodega$ordenes_ingresoArgs<ExtArgs>;
    unidades?: boolean | Prisma.bodega$unidadesArgs<ExtArgs>;
    movimientos_origen?: boolean | Prisma.bodega$movimientos_origenArgs<ExtArgs>;
    movimientos_destino?: boolean | Prisma.bodega$movimientos_destinoArgs<ExtArgs>;
    _count?: boolean | Prisma.BodegaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bodega"]>;
export type bodegaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_bodega?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    activa?: boolean;
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["bodega"]>;
export type bodegaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_bodega?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    activa?: boolean;
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["bodega"]>;
export type bodegaSelectScalar = {
    id_bodega?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    direccion?: boolean;
    activa?: boolean;
};
export type bodegaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_bodega" | "id_empresa" | "nombre" | "direccion" | "activa", ExtArgs["result"]["bodega"]>;
export type bodegaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
    stock?: boolean | Prisma.bodega$stockArgs<ExtArgs>;
    ordenes_ingreso?: boolean | Prisma.bodega$ordenes_ingresoArgs<ExtArgs>;
    unidades?: boolean | Prisma.bodega$unidadesArgs<ExtArgs>;
    movimientos_origen?: boolean | Prisma.bodega$movimientos_origenArgs<ExtArgs>;
    movimientos_destino?: boolean | Prisma.bodega$movimientos_destinoArgs<ExtArgs>;
    _count?: boolean | Prisma.BodegaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type bodegaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
};
export type bodegaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.bodega$empresaArgs<ExtArgs>;
};
export type $bodegaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "bodega";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        stock: Prisma.$stock_consumiblePayload<ExtArgs>[];
        ordenes_ingreso: Prisma.$orden_ingresoPayload<ExtArgs>[];
        unidades: Prisma.$unidad_equipoPayload<ExtArgs>[];
        movimientos_origen: Prisma.$movimiento_inventarioPayload<ExtArgs>[];
        movimientos_destino: Prisma.$movimiento_inventarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_bodega: number;
        id_empresa: number | null;
        nombre: string;
        direccion: string | null;
        activa: boolean;
    }, ExtArgs["result"]["bodega"]>;
    composites: {};
};
export type bodegaGetPayload<S extends boolean | null | undefined | bodegaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$bodegaPayload, S>;
export type bodegaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<bodegaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BodegaCountAggregateInputType | true;
};
export interface bodegaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['bodega'];
        meta: {
            name: 'bodega';
        };
    };
    findUnique<T extends bodegaFindUniqueArgs>(args: Prisma.SelectSubset<T, bodegaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends bodegaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, bodegaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends bodegaFindFirstArgs>(args?: Prisma.SelectSubset<T, bodegaFindFirstArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends bodegaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, bodegaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends bodegaFindManyArgs>(args?: Prisma.SelectSubset<T, bodegaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends bodegaCreateArgs>(args: Prisma.SelectSubset<T, bodegaCreateArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends bodegaCreateManyArgs>(args?: Prisma.SelectSubset<T, bodegaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends bodegaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, bodegaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends bodegaDeleteArgs>(args: Prisma.SelectSubset<T, bodegaDeleteArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends bodegaUpdateArgs>(args: Prisma.SelectSubset<T, bodegaUpdateArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends bodegaDeleteManyArgs>(args?: Prisma.SelectSubset<T, bodegaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends bodegaUpdateManyArgs>(args: Prisma.SelectSubset<T, bodegaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends bodegaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, bodegaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends bodegaUpsertArgs>(args: Prisma.SelectSubset<T, bodegaUpsertArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends bodegaCountArgs>(args?: Prisma.Subset<T, bodegaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BodegaCountAggregateOutputType> : number>;
    aggregate<T extends BodegaAggregateArgs>(args: Prisma.Subset<T, BodegaAggregateArgs>): Prisma.PrismaPromise<GetBodegaAggregateType<T>>;
    groupBy<T extends bodegaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: bodegaGroupByArgs['orderBy'];
    } : {
        orderBy?: bodegaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, bodegaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBodegaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: bodegaFieldRefs;
}
export interface Prisma__bodegaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.bodega$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    stock<T extends Prisma.bodega$stockArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$stockArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ordenes_ingreso<T extends Prisma.bodega$ordenes_ingresoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$ordenes_ingresoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    unidades<T extends Prisma.bodega$unidadesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$unidadesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movimientos_origen<T extends Prisma.bodega$movimientos_origenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$movimientos_origenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movimientos_destino<T extends Prisma.bodega$movimientos_destinoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bodega$movimientos_destinoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface bodegaFieldRefs {
    readonly id_bodega: Prisma.FieldRef<"bodega", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"bodega", 'Int'>;
    readonly nombre: Prisma.FieldRef<"bodega", 'String'>;
    readonly direccion: Prisma.FieldRef<"bodega", 'String'>;
    readonly activa: Prisma.FieldRef<"bodega", 'Boolean'>;
}
export type bodegaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where: Prisma.bodegaWhereUniqueInput;
};
export type bodegaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where: Prisma.bodegaWhereUniqueInput;
};
export type bodegaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
    orderBy?: Prisma.bodegaOrderByWithRelationInput | Prisma.bodegaOrderByWithRelationInput[];
    cursor?: Prisma.bodegaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodegaScalarFieldEnum | Prisma.BodegaScalarFieldEnum[];
};
export type bodegaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
    orderBy?: Prisma.bodegaOrderByWithRelationInput | Prisma.bodegaOrderByWithRelationInput[];
    cursor?: Prisma.bodegaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodegaScalarFieldEnum | Prisma.BodegaScalarFieldEnum[];
};
export type bodegaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
    orderBy?: Prisma.bodegaOrderByWithRelationInput | Prisma.bodegaOrderByWithRelationInput[];
    cursor?: Prisma.bodegaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BodegaScalarFieldEnum | Prisma.BodegaScalarFieldEnum[];
};
export type bodegaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bodegaCreateInput, Prisma.bodegaUncheckedCreateInput>;
};
export type bodegaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.bodegaCreateManyInput | Prisma.bodegaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type bodegaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    data: Prisma.bodegaCreateManyInput | Prisma.bodegaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.bodegaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type bodegaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bodegaUpdateInput, Prisma.bodegaUncheckedUpdateInput>;
    where: Prisma.bodegaWhereUniqueInput;
};
export type bodegaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.bodegaUpdateManyMutationInput, Prisma.bodegaUncheckedUpdateManyInput>;
    where?: Prisma.bodegaWhereInput;
    limit?: number;
};
export type bodegaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bodegaUpdateManyMutationInput, Prisma.bodegaUncheckedUpdateManyInput>;
    where?: Prisma.bodegaWhereInput;
    limit?: number;
    include?: Prisma.bodegaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type bodegaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where: Prisma.bodegaWhereUniqueInput;
    create: Prisma.XOR<Prisma.bodegaCreateInput, Prisma.bodegaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.bodegaUpdateInput, Prisma.bodegaUncheckedUpdateInput>;
};
export type bodegaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where: Prisma.bodegaWhereUniqueInput;
};
export type bodegaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bodegaWhereInput;
    limit?: number;
};
export type bodega$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type bodega$stockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type bodega$ordenes_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.orden_ingresoWhereInput;
    orderBy?: Prisma.orden_ingresoOrderByWithRelationInput | Prisma.orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orden_ingresoScalarFieldEnum | Prisma.Orden_ingresoScalarFieldEnum[];
};
export type bodega$unidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
    orderBy?: Prisma.unidad_equipoOrderByWithRelationInput | Prisma.unidad_equipoOrderByWithRelationInput[];
    cursor?: Prisma.unidad_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Unidad_equipoScalarFieldEnum | Prisma.Unidad_equipoScalarFieldEnum[];
};
export type bodega$movimientos_origenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Movimiento_inventarioScalarFieldEnum | Prisma.Movimiento_inventarioScalarFieldEnum[];
};
export type bodega$movimientos_destinoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Movimiento_inventarioScalarFieldEnum | Prisma.Movimiento_inventarioScalarFieldEnum[];
};
export type bodegaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
};
