import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tipo_equipoModel = runtime.Types.Result.DefaultSelection<Prisma.$tipo_equipoPayload>;
export type AggregateTipo_equipo = {
    _count: Tipo_equipoCountAggregateOutputType | null;
    _avg: Tipo_equipoAvgAggregateOutputType | null;
    _sum: Tipo_equipoSumAggregateOutputType | null;
    _min: Tipo_equipoMinAggregateOutputType | null;
    _max: Tipo_equipoMaxAggregateOutputType | null;
};
export type Tipo_equipoAvgAggregateOutputType = {
    id_tipo_equipo: number | null;
    id_empresa: number | null;
};
export type Tipo_equipoSumAggregateOutputType = {
    id_tipo_equipo: number | null;
    id_empresa: number | null;
};
export type Tipo_equipoMinAggregateOutputType = {
    id_tipo_equipo: number | null;
    id_empresa: number | null;
    nombre: string | null;
    categoria: string | null;
    requiere_serie_individual: boolean | null;
    ficha_tecnica_pdf_url: string | null;
    activo: boolean | null;
};
export type Tipo_equipoMaxAggregateOutputType = {
    id_tipo_equipo: number | null;
    id_empresa: number | null;
    nombre: string | null;
    categoria: string | null;
    requiere_serie_individual: boolean | null;
    ficha_tecnica_pdf_url: string | null;
    activo: boolean | null;
};
export type Tipo_equipoCountAggregateOutputType = {
    id_tipo_equipo: number;
    id_empresa: number;
    nombre: number;
    categoria: number;
    requiere_serie_individual: number;
    ficha_tecnica_pdf_url: number;
    activo: number;
    _all: number;
};
export type Tipo_equipoAvgAggregateInputType = {
    id_tipo_equipo?: true;
    id_empresa?: true;
};
export type Tipo_equipoSumAggregateInputType = {
    id_tipo_equipo?: true;
    id_empresa?: true;
};
export type Tipo_equipoMinAggregateInputType = {
    id_tipo_equipo?: true;
    id_empresa?: true;
    nombre?: true;
    categoria?: true;
    requiere_serie_individual?: true;
    ficha_tecnica_pdf_url?: true;
    activo?: true;
};
export type Tipo_equipoMaxAggregateInputType = {
    id_tipo_equipo?: true;
    id_empresa?: true;
    nombre?: true;
    categoria?: true;
    requiere_serie_individual?: true;
    ficha_tecnica_pdf_url?: true;
    activo?: true;
};
export type Tipo_equipoCountAggregateInputType = {
    id_tipo_equipo?: true;
    id_empresa?: true;
    nombre?: true;
    categoria?: true;
    requiere_serie_individual?: true;
    ficha_tecnica_pdf_url?: true;
    activo?: true;
    _all?: true;
};
export type Tipo_equipoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tipo_equipoWhereInput;
    orderBy?: Prisma.tipo_equipoOrderByWithRelationInput | Prisma.tipo_equipoOrderByWithRelationInput[];
    cursor?: Prisma.tipo_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tipo_equipoCountAggregateInputType;
    _avg?: Tipo_equipoAvgAggregateInputType;
    _sum?: Tipo_equipoSumAggregateInputType;
    _min?: Tipo_equipoMinAggregateInputType;
    _max?: Tipo_equipoMaxAggregateInputType;
};
export type GetTipo_equipoAggregateType<T extends Tipo_equipoAggregateArgs> = {
    [P in keyof T & keyof AggregateTipo_equipo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTipo_equipo[P]> : Prisma.GetScalarType<T[P], AggregateTipo_equipo[P]>;
};
export type tipo_equipoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tipo_equipoWhereInput;
    orderBy?: Prisma.tipo_equipoOrderByWithAggregationInput | Prisma.tipo_equipoOrderByWithAggregationInput[];
    by: Prisma.Tipo_equipoScalarFieldEnum[] | Prisma.Tipo_equipoScalarFieldEnum;
    having?: Prisma.tipo_equipoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tipo_equipoCountAggregateInputType | true;
    _avg?: Tipo_equipoAvgAggregateInputType;
    _sum?: Tipo_equipoSumAggregateInputType;
    _min?: Tipo_equipoMinAggregateInputType;
    _max?: Tipo_equipoMaxAggregateInputType;
};
export type Tipo_equipoGroupByOutputType = {
    id_tipo_equipo: number;
    id_empresa: number | null;
    nombre: string;
    categoria: string | null;
    requiere_serie_individual: boolean | null;
    ficha_tecnica_pdf_url: string | null;
    activo: boolean;
    _count: Tipo_equipoCountAggregateOutputType | null;
    _avg: Tipo_equipoAvgAggregateOutputType | null;
    _sum: Tipo_equipoSumAggregateOutputType | null;
    _min: Tipo_equipoMinAggregateOutputType | null;
    _max: Tipo_equipoMaxAggregateOutputType | null;
};
export type GetTipo_equipoGroupByPayload<T extends tipo_equipoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tipo_equipoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tipo_equipoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tipo_equipoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tipo_equipoGroupByOutputType[P]>;
}>>;
export type tipo_equipoWhereInput = {
    AND?: Prisma.tipo_equipoWhereInput | Prisma.tipo_equipoWhereInput[];
    OR?: Prisma.tipo_equipoWhereInput[];
    NOT?: Prisma.tipo_equipoWhereInput | Prisma.tipo_equipoWhereInput[];
    id_tipo_equipo?: Prisma.IntFilter<"tipo_equipo"> | number;
    id_empresa?: Prisma.IntNullableFilter<"tipo_equipo"> | number | null;
    nombre?: Prisma.StringFilter<"tipo_equipo"> | string;
    categoria?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    requiere_serie_individual?: Prisma.BoolNullableFilter<"tipo_equipo"> | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    activo?: Prisma.BoolFilter<"tipo_equipo"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    stock?: Prisma.Stock_consumibleListRelationFilter;
    uso_ot?: Prisma.Uso_material_otListRelationFilter;
    detalles_ingreso?: Prisma.Detalle_orden_ingresoListRelationFilter;
    movimientos?: Prisma.Movimiento_inventarioListRelationFilter;
};
export type tipo_equipoOrderByWithRelationInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiere_serie_individual?: Prisma.SortOrderInput | Prisma.SortOrder;
    ficha_tecnica_pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    unidades?: Prisma.unidad_equipoOrderByRelationAggregateInput;
    stock?: Prisma.stock_consumibleOrderByRelationAggregateInput;
    uso_ot?: Prisma.uso_material_otOrderByRelationAggregateInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoOrderByRelationAggregateInput;
    movimientos?: Prisma.movimiento_inventarioOrderByRelationAggregateInput;
};
export type tipo_equipoWhereUniqueInput = Prisma.AtLeast<{
    id_tipo_equipo?: number;
    AND?: Prisma.tipo_equipoWhereInput | Prisma.tipo_equipoWhereInput[];
    OR?: Prisma.tipo_equipoWhereInput[];
    NOT?: Prisma.tipo_equipoWhereInput | Prisma.tipo_equipoWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"tipo_equipo"> | number | null;
    nombre?: Prisma.StringFilter<"tipo_equipo"> | string;
    categoria?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    requiere_serie_individual?: Prisma.BoolNullableFilter<"tipo_equipo"> | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    activo?: Prisma.BoolFilter<"tipo_equipo"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    stock?: Prisma.Stock_consumibleListRelationFilter;
    uso_ot?: Prisma.Uso_material_otListRelationFilter;
    detalles_ingreso?: Prisma.Detalle_orden_ingresoListRelationFilter;
    movimientos?: Prisma.Movimiento_inventarioListRelationFilter;
}, "id_tipo_equipo">;
export type tipo_equipoOrderByWithAggregationInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrderInput | Prisma.SortOrder;
    requiere_serie_individual?: Prisma.SortOrderInput | Prisma.SortOrder;
    ficha_tecnica_pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    _count?: Prisma.tipo_equipoCountOrderByAggregateInput;
    _avg?: Prisma.tipo_equipoAvgOrderByAggregateInput;
    _max?: Prisma.tipo_equipoMaxOrderByAggregateInput;
    _min?: Prisma.tipo_equipoMinOrderByAggregateInput;
    _sum?: Prisma.tipo_equipoSumOrderByAggregateInput;
};
export type tipo_equipoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tipo_equipoScalarWhereWithAggregatesInput | Prisma.tipo_equipoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tipo_equipoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tipo_equipoScalarWhereWithAggregatesInput | Prisma.tipo_equipoScalarWhereWithAggregatesInput[];
    id_tipo_equipo?: Prisma.IntWithAggregatesFilter<"tipo_equipo"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"tipo_equipo"> | number | null;
    nombre?: Prisma.StringWithAggregatesFilter<"tipo_equipo"> | string;
    categoria?: Prisma.StringNullableWithAggregatesFilter<"tipo_equipo"> | string | null;
    requiere_serie_individual?: Prisma.BoolNullableWithAggregatesFilter<"tipo_equipo"> | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.StringNullableWithAggregatesFilter<"tipo_equipo"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"tipo_equipo"> | boolean;
};
export type tipo_equipoCreateInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateManyInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
};
export type tipo_equipoUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type tipo_equipoUncheckedUpdateManyInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Tipo_equipoListRelationFilter = {
    every?: Prisma.tipo_equipoWhereInput;
    some?: Prisma.tipo_equipoWhereInput;
    none?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tipo_equipoCountOrderByAggregateInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    requiere_serie_individual?: Prisma.SortOrder;
    ficha_tecnica_pdf_url?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tipo_equipoAvgOrderByAggregateInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type tipo_equipoMaxOrderByAggregateInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    requiere_serie_individual?: Prisma.SortOrder;
    ficha_tecnica_pdf_url?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tipo_equipoMinOrderByAggregateInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    categoria?: Prisma.SortOrder;
    requiere_serie_individual?: Prisma.SortOrder;
    ficha_tecnica_pdf_url?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tipo_equipoSumOrderByAggregateInput = {
    id_tipo_equipo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type Tipo_equipoNullableScalarRelationFilter = {
    is?: Prisma.tipo_equipoWhereInput | null;
    isNot?: Prisma.tipo_equipoWhereInput | null;
};
export type tipo_equipoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput> | Prisma.tipo_equipoCreateWithoutEmpresaInput[] | Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput | Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.tipo_equipoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
};
export type tipo_equipoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput> | Prisma.tipo_equipoCreateWithoutEmpresaInput[] | Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput | Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.tipo_equipoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
};
export type tipo_equipoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput> | Prisma.tipo_equipoCreateWithoutEmpresaInput[] | Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput | Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.tipo_equipoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.tipo_equipoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.tipo_equipoCreateManyEmpresaInputEnvelope;
    set?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    disconnect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    delete?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    connect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    update?: Prisma.tipo_equipoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.tipo_equipoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.tipo_equipoUpdateManyWithWhereWithoutEmpresaInput | Prisma.tipo_equipoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.tipo_equipoScalarWhereInput | Prisma.tipo_equipoScalarWhereInput[];
};
export type tipo_equipoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput> | Prisma.tipo_equipoCreateWithoutEmpresaInput[] | Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput | Prisma.tipo_equipoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.tipo_equipoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.tipo_equipoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.tipo_equipoCreateManyEmpresaInputEnvelope;
    set?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    disconnect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    delete?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    connect?: Prisma.tipo_equipoWhereUniqueInput | Prisma.tipo_equipoWhereUniqueInput[];
    update?: Prisma.tipo_equipoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.tipo_equipoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.tipo_equipoUpdateManyWithWhereWithoutEmpresaInput | Prisma.tipo_equipoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.tipo_equipoScalarWhereInput | Prisma.tipo_equipoScalarWhereInput[];
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type tipo_equipoCreateNestedOneWithoutUnidadesInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutUnidadesInput;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateOneWithoutUnidadesNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutUnidadesInput;
    upsert?: Prisma.tipo_equipoUpsertWithoutUnidadesInput;
    disconnect?: Prisma.tipo_equipoWhereInput | boolean;
    delete?: Prisma.tipo_equipoWhereInput | boolean;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tipo_equipoUpdateToOneWithWhereWithoutUnidadesInput, Prisma.tipo_equipoUpdateWithoutUnidadesInput>, Prisma.tipo_equipoUncheckedUpdateWithoutUnidadesInput>;
};
export type tipo_equipoCreateNestedOneWithoutUso_otInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUso_otInput, Prisma.tipo_equipoUncheckedCreateWithoutUso_otInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutUso_otInput;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateOneWithoutUso_otNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUso_otInput, Prisma.tipo_equipoUncheckedCreateWithoutUso_otInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutUso_otInput;
    upsert?: Prisma.tipo_equipoUpsertWithoutUso_otInput;
    disconnect?: Prisma.tipo_equipoWhereInput | boolean;
    delete?: Prisma.tipo_equipoWhereInput | boolean;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tipo_equipoUpdateToOneWithWhereWithoutUso_otInput, Prisma.tipo_equipoUpdateWithoutUso_otInput>, Prisma.tipo_equipoUncheckedUpdateWithoutUso_otInput>;
};
export type tipo_equipoCreateNestedOneWithoutStockInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutStockInput, Prisma.tipo_equipoUncheckedCreateWithoutStockInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutStockInput;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateOneWithoutStockNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutStockInput, Prisma.tipo_equipoUncheckedCreateWithoutStockInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutStockInput;
    upsert?: Prisma.tipo_equipoUpsertWithoutStockInput;
    disconnect?: Prisma.tipo_equipoWhereInput | boolean;
    delete?: Prisma.tipo_equipoWhereInput | boolean;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tipo_equipoUpdateToOneWithWhereWithoutStockInput, Prisma.tipo_equipoUpdateWithoutStockInput>, Prisma.tipo_equipoUncheckedUpdateWithoutStockInput>;
};
export type tipo_equipoCreateNestedOneWithoutDetalles_ingresoInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedCreateWithoutDetalles_ingresoInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutDetalles_ingresoInput;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateOneWithoutDetalles_ingresoNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedCreateWithoutDetalles_ingresoInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutDetalles_ingresoInput;
    upsert?: Prisma.tipo_equipoUpsertWithoutDetalles_ingresoInput;
    disconnect?: Prisma.tipo_equipoWhereInput | boolean;
    delete?: Prisma.tipo_equipoWhereInput | boolean;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tipo_equipoUpdateToOneWithWhereWithoutDetalles_ingresoInput, Prisma.tipo_equipoUpdateWithoutDetalles_ingresoInput>, Prisma.tipo_equipoUncheckedUpdateWithoutDetalles_ingresoInput>;
};
export type tipo_equipoCreateNestedOneWithoutMovimientosInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutMovimientosInput;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateOneWithoutMovimientosNestedInput = {
    create?: Prisma.XOR<Prisma.tipo_equipoCreateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedCreateWithoutMovimientosInput>;
    connectOrCreate?: Prisma.tipo_equipoCreateOrConnectWithoutMovimientosInput;
    upsert?: Prisma.tipo_equipoUpsertWithoutMovimientosInput;
    disconnect?: Prisma.tipo_equipoWhereInput | boolean;
    delete?: Prisma.tipo_equipoWhereInput | boolean;
    connect?: Prisma.tipo_equipoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tipo_equipoUpdateToOneWithWhereWithoutMovimientosInput, Prisma.tipo_equipoUpdateWithoutMovimientosInput>, Prisma.tipo_equipoUncheckedUpdateWithoutMovimientosInput>;
};
export type tipo_equipoCreateWithoutEmpresaInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutEmpresaInput = {
    id_tipo_equipo?: number;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput>;
};
export type tipo_equipoCreateManyEmpresaInputEnvelope = {
    data: Prisma.tipo_equipoCreateManyEmpresaInput | Prisma.tipo_equipoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type tipo_equipoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedCreateWithoutEmpresaInput>;
};
export type tipo_equipoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutEmpresaInput, Prisma.tipo_equipoUncheckedUpdateWithoutEmpresaInput>;
};
export type tipo_equipoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.tipo_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateManyMutationInput, Prisma.tipo_equipoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type tipo_equipoScalarWhereInput = {
    AND?: Prisma.tipo_equipoScalarWhereInput | Prisma.tipo_equipoScalarWhereInput[];
    OR?: Prisma.tipo_equipoScalarWhereInput[];
    NOT?: Prisma.tipo_equipoScalarWhereInput | Prisma.tipo_equipoScalarWhereInput[];
    id_tipo_equipo?: Prisma.IntFilter<"tipo_equipo"> | number;
    id_empresa?: Prisma.IntNullableFilter<"tipo_equipo"> | number | null;
    nombre?: Prisma.StringFilter<"tipo_equipo"> | string;
    categoria?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    requiere_serie_individual?: Prisma.BoolNullableFilter<"tipo_equipo"> | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.StringNullableFilter<"tipo_equipo"> | string | null;
    activo?: Prisma.BoolFilter<"tipo_equipo"> | boolean;
};
export type tipo_equipoCreateWithoutUnidadesInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutUnidadesInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutUnidadesInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedCreateWithoutUnidadesInput>;
};
export type tipo_equipoUpsertWithoutUnidadesInput = {
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedUpdateWithoutUnidadesInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedCreateWithoutUnidadesInput>;
    where?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoUpdateToOneWithWhereWithoutUnidadesInput = {
    where?: Prisma.tipo_equipoWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutUnidadesInput, Prisma.tipo_equipoUncheckedUpdateWithoutUnidadesInput>;
};
export type tipo_equipoUpdateWithoutUnidadesInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutUnidadesInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateWithoutUso_otInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutUso_otInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutUso_otInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUso_otInput, Prisma.tipo_equipoUncheckedCreateWithoutUso_otInput>;
};
export type tipo_equipoUpsertWithoutUso_otInput = {
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutUso_otInput, Prisma.tipo_equipoUncheckedUpdateWithoutUso_otInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutUso_otInput, Prisma.tipo_equipoUncheckedCreateWithoutUso_otInput>;
    where?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoUpdateToOneWithWhereWithoutUso_otInput = {
    where?: Prisma.tipo_equipoWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutUso_otInput, Prisma.tipo_equipoUncheckedUpdateWithoutUso_otInput>;
};
export type tipo_equipoUpdateWithoutUso_otInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutUso_otInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateWithoutStockInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutStockInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutStockInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutStockInput, Prisma.tipo_equipoUncheckedCreateWithoutStockInput>;
};
export type tipo_equipoUpsertWithoutStockInput = {
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutStockInput, Prisma.tipo_equipoUncheckedUpdateWithoutStockInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutStockInput, Prisma.tipo_equipoUncheckedCreateWithoutStockInput>;
    where?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoUpdateToOneWithWhereWithoutStockInput = {
    where?: Prisma.tipo_equipoWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutStockInput, Prisma.tipo_equipoUncheckedUpdateWithoutStockInput>;
};
export type tipo_equipoUpdateWithoutStockInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutStockInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateWithoutDetalles_ingresoInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutDetalles_ingresoInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutDetalles_ingresoInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedCreateWithoutDetalles_ingresoInput>;
};
export type tipo_equipoUpsertWithoutDetalles_ingresoInput = {
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedUpdateWithoutDetalles_ingresoInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedCreateWithoutDetalles_ingresoInput>;
    where?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoUpdateToOneWithWhereWithoutDetalles_ingresoInput = {
    where?: Prisma.tipo_equipoWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutDetalles_ingresoInput, Prisma.tipo_equipoUncheckedUpdateWithoutDetalles_ingresoInput>;
};
export type tipo_equipoUpdateWithoutDetalles_ingresoInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutDetalles_ingresoInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateWithoutMovimientosInput = {
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTipos_equipoInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoUncheckedCreateWithoutMovimientosInput = {
    id_tipo_equipo?: number;
    id_empresa?: number | null;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutTipo_equipoInput;
    stock?: Prisma.stock_consumibleUncheckedCreateNestedManyWithoutTipo_equipoInput;
    uso_ot?: Prisma.uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutTipo_equipoInput;
};
export type tipo_equipoCreateOrConnectWithoutMovimientosInput = {
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedCreateWithoutMovimientosInput>;
};
export type tipo_equipoUpsertWithoutMovimientosInput = {
    update: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedUpdateWithoutMovimientosInput>;
    create: Prisma.XOR<Prisma.tipo_equipoCreateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedCreateWithoutMovimientosInput>;
    where?: Prisma.tipo_equipoWhereInput;
};
export type tipo_equipoUpdateToOneWithWhereWithoutMovimientosInput = {
    where?: Prisma.tipo_equipoWhereInput;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateWithoutMovimientosInput, Prisma.tipo_equipoUncheckedUpdateWithoutMovimientosInput>;
};
export type tipo_equipoUpdateWithoutMovimientosInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTipos_equipoNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutMovimientosInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoCreateManyEmpresaInput = {
    id_tipo_equipo?: number;
    nombre: string;
    categoria?: string | null;
    requiere_serie_individual?: boolean | null;
    ficha_tecnica_pdf_url?: string | null;
    activo?: boolean;
};
export type tipo_equipoUpdateWithoutEmpresaInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateWithoutEmpresaInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    stock?: Prisma.stock_consumibleUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    uso_ot?: Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    detalles_ingreso?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutTipo_equipoNestedInput;
    movimientos?: Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput;
};
export type tipo_equipoUncheckedUpdateManyWithoutEmpresaInput = {
    id_tipo_equipo?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    categoria?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiere_serie_individual?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    ficha_tecnica_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Tipo_equipoCountOutputType = {
    unidades: number;
    stock: number;
    uso_ot: number;
    detalles_ingreso: number;
    movimientos: number;
};
export type Tipo_equipoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidades?: boolean | Tipo_equipoCountOutputTypeCountUnidadesArgs;
    stock?: boolean | Tipo_equipoCountOutputTypeCountStockArgs;
    uso_ot?: boolean | Tipo_equipoCountOutputTypeCountUso_otArgs;
    detalles_ingreso?: boolean | Tipo_equipoCountOutputTypeCountDetalles_ingresoArgs;
    movimientos?: boolean | Tipo_equipoCountOutputTypeCountMovimientosArgs;
};
export type Tipo_equipoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Tipo_equipoCountOutputTypeSelect<ExtArgs> | null;
};
export type Tipo_equipoCountOutputTypeCountUnidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unidad_equipoWhereInput;
};
export type Tipo_equipoCountOutputTypeCountStockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.stock_consumibleWhereInput;
};
export type Tipo_equipoCountOutputTypeCountUso_otArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.uso_material_otWhereInput;
};
export type Tipo_equipoCountOutputTypeCountDetalles_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_orden_ingresoWhereInput;
};
export type Tipo_equipoCountOutputTypeCountMovimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
};
export type tipo_equipoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tipo_equipo?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    requiere_serie_individual?: boolean;
    ficha_tecnica_pdf_url?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
    unidades?: boolean | Prisma.tipo_equipo$unidadesArgs<ExtArgs>;
    stock?: boolean | Prisma.tipo_equipo$stockArgs<ExtArgs>;
    uso_ot?: boolean | Prisma.tipo_equipo$uso_otArgs<ExtArgs>;
    detalles_ingreso?: boolean | Prisma.tipo_equipo$detalles_ingresoArgs<ExtArgs>;
    movimientos?: boolean | Prisma.tipo_equipo$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.Tipo_equipoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tipo_equipo"]>;
export type tipo_equipoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tipo_equipo?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    requiere_serie_individual?: boolean;
    ficha_tecnica_pdf_url?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["tipo_equipo"]>;
export type tipo_equipoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tipo_equipo?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    requiere_serie_individual?: boolean;
    ficha_tecnica_pdf_url?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["tipo_equipo"]>;
export type tipo_equipoSelectScalar = {
    id_tipo_equipo?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    categoria?: boolean;
    requiere_serie_individual?: boolean;
    ficha_tecnica_pdf_url?: boolean;
    activo?: boolean;
};
export type tipo_equipoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_tipo_equipo" | "id_empresa" | "nombre" | "categoria" | "requiere_serie_individual" | "ficha_tecnica_pdf_url" | "activo", ExtArgs["result"]["tipo_equipo"]>;
export type tipo_equipoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
    unidades?: boolean | Prisma.tipo_equipo$unidadesArgs<ExtArgs>;
    stock?: boolean | Prisma.tipo_equipo$stockArgs<ExtArgs>;
    uso_ot?: boolean | Prisma.tipo_equipo$uso_otArgs<ExtArgs>;
    detalles_ingreso?: boolean | Prisma.tipo_equipo$detalles_ingresoArgs<ExtArgs>;
    movimientos?: boolean | Prisma.tipo_equipo$movimientosArgs<ExtArgs>;
    _count?: boolean | Prisma.Tipo_equipoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tipo_equipoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
};
export type tipo_equipoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.tipo_equipo$empresaArgs<ExtArgs>;
};
export type $tipo_equipoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tipo_equipo";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        unidades: Prisma.$unidad_equipoPayload<ExtArgs>[];
        stock: Prisma.$stock_consumiblePayload<ExtArgs>[];
        uso_ot: Prisma.$uso_material_otPayload<ExtArgs>[];
        detalles_ingreso: Prisma.$detalle_orden_ingresoPayload<ExtArgs>[];
        movimientos: Prisma.$movimiento_inventarioPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_tipo_equipo: number;
        id_empresa: number | null;
        nombre: string;
        categoria: string | null;
        requiere_serie_individual: boolean | null;
        ficha_tecnica_pdf_url: string | null;
        activo: boolean;
    }, ExtArgs["result"]["tipo_equipo"]>;
    composites: {};
};
export type tipo_equipoGetPayload<S extends boolean | null | undefined | tipo_equipoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload, S>;
export type tipo_equipoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tipo_equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tipo_equipoCountAggregateInputType | true;
};
export interface tipo_equipoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tipo_equipo'];
        meta: {
            name: 'tipo_equipo';
        };
    };
    findUnique<T extends tipo_equipoFindUniqueArgs>(args: Prisma.SelectSubset<T, tipo_equipoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tipo_equipoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tipo_equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tipo_equipoFindFirstArgs>(args?: Prisma.SelectSubset<T, tipo_equipoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tipo_equipoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tipo_equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tipo_equipoFindManyArgs>(args?: Prisma.SelectSubset<T, tipo_equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tipo_equipoCreateArgs>(args: Prisma.SelectSubset<T, tipo_equipoCreateArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tipo_equipoCreateManyArgs>(args?: Prisma.SelectSubset<T, tipo_equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends tipo_equipoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tipo_equipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends tipo_equipoDeleteArgs>(args: Prisma.SelectSubset<T, tipo_equipoDeleteArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tipo_equipoUpdateArgs>(args: Prisma.SelectSubset<T, tipo_equipoUpdateArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tipo_equipoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tipo_equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tipo_equipoUpdateManyArgs>(args: Prisma.SelectSubset<T, tipo_equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends tipo_equipoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tipo_equipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends tipo_equipoUpsertArgs>(args: Prisma.SelectSubset<T, tipo_equipoUpsertArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tipo_equipoCountArgs>(args?: Prisma.Subset<T, tipo_equipoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tipo_equipoCountAggregateOutputType> : number>;
    aggregate<T extends Tipo_equipoAggregateArgs>(args: Prisma.Subset<T, Tipo_equipoAggregateArgs>): Prisma.PrismaPromise<GetTipo_equipoAggregateType<T>>;
    groupBy<T extends tipo_equipoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tipo_equipoGroupByArgs['orderBy'];
    } : {
        orderBy?: tipo_equipoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tipo_equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTipo_equipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tipo_equipoFieldRefs;
}
export interface Prisma__tipo_equipoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.tipo_equipo$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    unidades<T extends Prisma.tipo_equipo$unidadesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$unidadesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    stock<T extends Prisma.tipo_equipo$stockArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$stockArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$stock_consumiblePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    uso_ot<T extends Prisma.tipo_equipo$uso_otArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$uso_otArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    detalles_ingreso<T extends Prisma.tipo_equipo$detalles_ingresoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$detalles_ingresoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    movimientos<T extends Prisma.tipo_equipo$movimientosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tipo_equipo$movimientosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tipo_equipoFieldRefs {
    readonly id_tipo_equipo: Prisma.FieldRef<"tipo_equipo", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"tipo_equipo", 'Int'>;
    readonly nombre: Prisma.FieldRef<"tipo_equipo", 'String'>;
    readonly categoria: Prisma.FieldRef<"tipo_equipo", 'String'>;
    readonly requiere_serie_individual: Prisma.FieldRef<"tipo_equipo", 'Boolean'>;
    readonly ficha_tecnica_pdf_url: Prisma.FieldRef<"tipo_equipo", 'String'>;
    readonly activo: Prisma.FieldRef<"tipo_equipo", 'Boolean'>;
}
export type tipo_equipoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
    orderBy?: Prisma.tipo_equipoOrderByWithRelationInput | Prisma.tipo_equipoOrderByWithRelationInput[];
    cursor?: Prisma.tipo_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tipo_equipoScalarFieldEnum | Prisma.Tipo_equipoScalarFieldEnum[];
};
export type tipo_equipoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
    orderBy?: Prisma.tipo_equipoOrderByWithRelationInput | Prisma.tipo_equipoOrderByWithRelationInput[];
    cursor?: Prisma.tipo_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tipo_equipoScalarFieldEnum | Prisma.Tipo_equipoScalarFieldEnum[];
};
export type tipo_equipoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
    orderBy?: Prisma.tipo_equipoOrderByWithRelationInput | Prisma.tipo_equipoOrderByWithRelationInput[];
    cursor?: Prisma.tipo_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tipo_equipoScalarFieldEnum | Prisma.Tipo_equipoScalarFieldEnum[];
};
export type tipo_equipoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tipo_equipoCreateInput, Prisma.tipo_equipoUncheckedCreateInput>;
};
export type tipo_equipoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tipo_equipoCreateManyInput | Prisma.tipo_equipoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tipo_equipoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    data: Prisma.tipo_equipoCreateManyInput | Prisma.tipo_equipoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.tipo_equipoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type tipo_equipoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateInput, Prisma.tipo_equipoUncheckedUpdateInput>;
    where: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tipo_equipoUpdateManyMutationInput, Prisma.tipo_equipoUncheckedUpdateManyInput>;
    where?: Prisma.tipo_equipoWhereInput;
    limit?: number;
};
export type tipo_equipoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tipo_equipoUpdateManyMutationInput, Prisma.tipo_equipoUncheckedUpdateManyInput>;
    where?: Prisma.tipo_equipoWhereInput;
    limit?: number;
    include?: Prisma.tipo_equipoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type tipo_equipoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where: Prisma.tipo_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tipo_equipoCreateInput, Prisma.tipo_equipoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tipo_equipoUpdateInput, Prisma.tipo_equipoUncheckedUpdateInput>;
};
export type tipo_equipoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where: Prisma.tipo_equipoWhereUniqueInput;
};
export type tipo_equipoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tipo_equipoWhereInput;
    limit?: number;
};
export type tipo_equipo$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type tipo_equipo$unidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tipo_equipo$stockArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tipo_equipo$uso_otArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    where?: Prisma.uso_material_otWhereInput;
    orderBy?: Prisma.uso_material_otOrderByWithRelationInput | Prisma.uso_material_otOrderByWithRelationInput[];
    cursor?: Prisma.uso_material_otWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Uso_material_otScalarFieldEnum | Prisma.Uso_material_otScalarFieldEnum[];
};
export type tipo_equipo$detalles_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tipo_equipo$movimientosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tipo_equipoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
};
