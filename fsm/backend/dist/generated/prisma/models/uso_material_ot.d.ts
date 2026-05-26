import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type uso_material_otModel = runtime.Types.Result.DefaultSelection<Prisma.$uso_material_otPayload>;
export type AggregateUso_material_ot = {
    _count: Uso_material_otCountAggregateOutputType | null;
    _avg: Uso_material_otAvgAggregateOutputType | null;
    _sum: Uso_material_otSumAggregateOutputType | null;
    _min: Uso_material_otMinAggregateOutputType | null;
    _max: Uso_material_otMaxAggregateOutputType | null;
};
export type Uso_material_otAvgAggregateOutputType = {
    id_uso: number | null;
    id_ot: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    cantidad: runtime.Decimal | null;
};
export type Uso_material_otSumAggregateOutputType = {
    id_uso: number | null;
    id_ot: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    cantidad: runtime.Decimal | null;
};
export type Uso_material_otMinAggregateOutputType = {
    id_uso: number | null;
    id_ot: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    cantidad: runtime.Decimal | null;
};
export type Uso_material_otMaxAggregateOutputType = {
    id_uso: number | null;
    id_ot: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    cantidad: runtime.Decimal | null;
};
export type Uso_material_otCountAggregateOutputType = {
    id_uso: number;
    id_ot: number;
    id_tipo_equipo: number;
    id_unidad: number;
    cantidad: number;
    _all: number;
};
export type Uso_material_otAvgAggregateInputType = {
    id_uso?: true;
    id_ot?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    cantidad?: true;
};
export type Uso_material_otSumAggregateInputType = {
    id_uso?: true;
    id_ot?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    cantidad?: true;
};
export type Uso_material_otMinAggregateInputType = {
    id_uso?: true;
    id_ot?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    cantidad?: true;
};
export type Uso_material_otMaxAggregateInputType = {
    id_uso?: true;
    id_ot?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    cantidad?: true;
};
export type Uso_material_otCountAggregateInputType = {
    id_uso?: true;
    id_ot?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    cantidad?: true;
    _all?: true;
};
export type Uso_material_otAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.uso_material_otWhereInput;
    orderBy?: Prisma.uso_material_otOrderByWithRelationInput | Prisma.uso_material_otOrderByWithRelationInput[];
    cursor?: Prisma.uso_material_otWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Uso_material_otCountAggregateInputType;
    _avg?: Uso_material_otAvgAggregateInputType;
    _sum?: Uso_material_otSumAggregateInputType;
    _min?: Uso_material_otMinAggregateInputType;
    _max?: Uso_material_otMaxAggregateInputType;
};
export type GetUso_material_otAggregateType<T extends Uso_material_otAggregateArgs> = {
    [P in keyof T & keyof AggregateUso_material_ot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUso_material_ot[P]> : Prisma.GetScalarType<T[P], AggregateUso_material_ot[P]>;
};
export type uso_material_otGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.uso_material_otWhereInput;
    orderBy?: Prisma.uso_material_otOrderByWithAggregationInput | Prisma.uso_material_otOrderByWithAggregationInput[];
    by: Prisma.Uso_material_otScalarFieldEnum[] | Prisma.Uso_material_otScalarFieldEnum;
    having?: Prisma.uso_material_otScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Uso_material_otCountAggregateInputType | true;
    _avg?: Uso_material_otAvgAggregateInputType;
    _sum?: Uso_material_otSumAggregateInputType;
    _min?: Uso_material_otMinAggregateInputType;
    _max?: Uso_material_otMaxAggregateInputType;
};
export type Uso_material_otGroupByOutputType = {
    id_uso: number;
    id_ot: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    cantidad: runtime.Decimal;
    _count: Uso_material_otCountAggregateOutputType | null;
    _avg: Uso_material_otAvgAggregateOutputType | null;
    _sum: Uso_material_otSumAggregateOutputType | null;
    _min: Uso_material_otMinAggregateOutputType | null;
    _max: Uso_material_otMaxAggregateOutputType | null;
};
export type GetUso_material_otGroupByPayload<T extends uso_material_otGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Uso_material_otGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Uso_material_otGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Uso_material_otGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Uso_material_otGroupByOutputType[P]>;
}>>;
export type uso_material_otWhereInput = {
    AND?: Prisma.uso_material_otWhereInput | Prisma.uso_material_otWhereInput[];
    OR?: Prisma.uso_material_otWhereInput[];
    NOT?: Prisma.uso_material_otWhereInput | Prisma.uso_material_otWhereInput[];
    id_uso?: Prisma.IntFilter<"uso_material_ot"> | number;
    id_ot?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    cantidad?: Prisma.DecimalFilter<"uso_material_ot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
};
export type uso_material_otOrderByWithRelationInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    orden_trabajo?: Prisma.orden_trabajoOrderByWithRelationInput;
    tipo_equipo?: Prisma.tipo_equipoOrderByWithRelationInput;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
};
export type uso_material_otWhereUniqueInput = Prisma.AtLeast<{
    id_uso?: number;
    AND?: Prisma.uso_material_otWhereInput | Prisma.uso_material_otWhereInput[];
    OR?: Prisma.uso_material_otWhereInput[];
    NOT?: Prisma.uso_material_otWhereInput | Prisma.uso_material_otWhereInput[];
    id_ot?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    cantidad?: Prisma.DecimalFilter<"uso_material_ot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
}, "id_uso">;
export type uso_material_otOrderByWithAggregationInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    _count?: Prisma.uso_material_otCountOrderByAggregateInput;
    _avg?: Prisma.uso_material_otAvgOrderByAggregateInput;
    _max?: Prisma.uso_material_otMaxOrderByAggregateInput;
    _min?: Prisma.uso_material_otMinOrderByAggregateInput;
    _sum?: Prisma.uso_material_otSumOrderByAggregateInput;
};
export type uso_material_otScalarWhereWithAggregatesInput = {
    AND?: Prisma.uso_material_otScalarWhereWithAggregatesInput | Prisma.uso_material_otScalarWhereWithAggregatesInput[];
    OR?: Prisma.uso_material_otScalarWhereWithAggregatesInput[];
    NOT?: Prisma.uso_material_otScalarWhereWithAggregatesInput | Prisma.uso_material_otScalarWhereWithAggregatesInput[];
    id_uso?: Prisma.IntWithAggregatesFilter<"uso_material_ot"> | number;
    id_ot?: Prisma.IntNullableWithAggregatesFilter<"uso_material_ot"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableWithAggregatesFilter<"uso_material_ot"> | number | null;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"uso_material_ot"> | number | null;
    cantidad?: Prisma.DecimalWithAggregatesFilter<"uso_material_ot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutMaterialesInput;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutUso_otInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutUso_otInput;
};
export type uso_material_otUncheckedCreateInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUpdateInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutMaterialesNestedInput;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutUso_otNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutUso_otNestedInput;
};
export type uso_material_otUncheckedUpdateInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateManyInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUpdateManyMutationInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUncheckedUpdateManyInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type Uso_material_otListRelationFilter = {
    every?: Prisma.uso_material_otWhereInput;
    some?: Prisma.uso_material_otWhereInput;
    none?: Prisma.uso_material_otWhereInput;
};
export type uso_material_otOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type uso_material_otCountOrderByAggregateInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type uso_material_otAvgOrderByAggregateInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type uso_material_otMaxOrderByAggregateInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type uso_material_otMinOrderByAggregateInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type uso_material_otSumOrderByAggregateInput = {
    id_uso?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
};
export type uso_material_otCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput> | Prisma.uso_material_otCreateWithoutTipo_equipoInput[] | Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput | Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.uso_material_otCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUncheckedCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput> | Prisma.uso_material_otCreateWithoutTipo_equipoInput[] | Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput | Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.uso_material_otCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput> | Prisma.uso_material_otCreateWithoutTipo_equipoInput[] | Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput | Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.uso_material_otCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.uso_material_otUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otUncheckedUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput> | Prisma.uso_material_otCreateWithoutTipo_equipoInput[] | Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput | Prisma.uso_material_otCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.uso_material_otCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.uso_material_otUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput> | Prisma.uso_material_otCreateWithoutUnidadInput[] | Prisma.uso_material_otUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutUnidadInput | Prisma.uso_material_otCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.uso_material_otCreateManyUnidadInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput> | Prisma.uso_material_otCreateWithoutUnidadInput[] | Prisma.uso_material_otUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutUnidadInput | Prisma.uso_material_otCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.uso_material_otCreateManyUnidadInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput> | Prisma.uso_material_otCreateWithoutUnidadInput[] | Prisma.uso_material_otUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutUnidadInput | Prisma.uso_material_otCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutUnidadInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.uso_material_otCreateManyUnidadInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutUnidadInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutUnidadInput | Prisma.uso_material_otUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput> | Prisma.uso_material_otCreateWithoutUnidadInput[] | Prisma.uso_material_otUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutUnidadInput | Prisma.uso_material_otCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutUnidadInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.uso_material_otCreateManyUnidadInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutUnidadInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutUnidadInput | Prisma.uso_material_otUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.uso_material_otCreateWithoutOrden_trabajoInput[] | Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.uso_material_otCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUncheckedCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.uso_material_otCreateWithoutOrden_trabajoInput[] | Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.uso_material_otCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
};
export type uso_material_otUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.uso_material_otCreateWithoutOrden_trabajoInput[] | Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.uso_material_otCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.uso_material_otUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otUncheckedUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput> | Prisma.uso_material_otCreateWithoutOrden_trabajoInput[] | Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput | Prisma.uso_material_otCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.uso_material_otUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.uso_material_otUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.uso_material_otCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    disconnect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    delete?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    connect?: Prisma.uso_material_otWhereUniqueInput | Prisma.uso_material_otWhereUniqueInput[];
    update?: Prisma.uso_material_otUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.uso_material_otUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.uso_material_otUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.uso_material_otUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
};
export type uso_material_otCreateWithoutTipo_equipoInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutMaterialesInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutUso_otInput;
};
export type uso_material_otUncheckedCreateWithoutTipo_equipoInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateOrConnectWithoutTipo_equipoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput>;
};
export type uso_material_otCreateManyTipo_equipoInputEnvelope = {
    data: Prisma.uso_material_otCreateManyTipo_equipoInput | Prisma.uso_material_otCreateManyTipo_equipoInput[];
    skipDuplicates?: boolean;
};
export type uso_material_otUpsertWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    update: Prisma.XOR<Prisma.uso_material_otUpdateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedUpdateWithoutTipo_equipoInput>;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedCreateWithoutTipo_equipoInput>;
};
export type uso_material_otUpdateWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateWithoutTipo_equipoInput, Prisma.uso_material_otUncheckedUpdateWithoutTipo_equipoInput>;
};
export type uso_material_otUpdateManyWithWhereWithoutTipo_equipoInput = {
    where: Prisma.uso_material_otScalarWhereInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateManyMutationInput, Prisma.uso_material_otUncheckedUpdateManyWithoutTipo_equipoInput>;
};
export type uso_material_otScalarWhereInput = {
    AND?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
    OR?: Prisma.uso_material_otScalarWhereInput[];
    NOT?: Prisma.uso_material_otScalarWhereInput | Prisma.uso_material_otScalarWhereInput[];
    id_uso?: Prisma.IntFilter<"uso_material_ot"> | number;
    id_ot?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_tipo_equipo?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"uso_material_ot"> | number | null;
    cantidad?: Prisma.DecimalFilter<"uso_material_ot"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateWithoutUnidadInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutMaterialesInput;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutUso_otInput;
};
export type uso_material_otUncheckedCreateWithoutUnidadInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_tipo_equipo?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateOrConnectWithoutUnidadInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput>;
};
export type uso_material_otCreateManyUnidadInputEnvelope = {
    data: Prisma.uso_material_otCreateManyUnidadInput | Prisma.uso_material_otCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type uso_material_otUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    update: Prisma.XOR<Prisma.uso_material_otUpdateWithoutUnidadInput, Prisma.uso_material_otUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutUnidadInput, Prisma.uso_material_otUncheckedCreateWithoutUnidadInput>;
};
export type uso_material_otUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateWithoutUnidadInput, Prisma.uso_material_otUncheckedUpdateWithoutUnidadInput>;
};
export type uso_material_otUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.uso_material_otScalarWhereInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateManyMutationInput, Prisma.uso_material_otUncheckedUpdateManyWithoutUnidadInput>;
};
export type uso_material_otCreateWithoutOrden_trabajoInput = {
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutUso_otInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutUso_otInput;
};
export type uso_material_otUncheckedCreateWithoutOrden_trabajoInput = {
    id_uso?: number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateOrConnectWithoutOrden_trabajoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput>;
};
export type uso_material_otCreateManyOrden_trabajoInputEnvelope = {
    data: Prisma.uso_material_otCreateManyOrden_trabajoInput | Prisma.uso_material_otCreateManyOrden_trabajoInput[];
    skipDuplicates?: boolean;
};
export type uso_material_otUpsertWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    update: Prisma.XOR<Prisma.uso_material_otUpdateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedUpdateWithoutOrden_trabajoInput>;
    create: Prisma.XOR<Prisma.uso_material_otCreateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedCreateWithoutOrden_trabajoInput>;
};
export type uso_material_otUpdateWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.uso_material_otWhereUniqueInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateWithoutOrden_trabajoInput, Prisma.uso_material_otUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type uso_material_otUpdateManyWithWhereWithoutOrden_trabajoInput = {
    where: Prisma.uso_material_otScalarWhereInput;
    data: Prisma.XOR<Prisma.uso_material_otUpdateManyMutationInput, Prisma.uso_material_otUncheckedUpdateManyWithoutOrden_trabajoInput>;
};
export type uso_material_otCreateManyTipo_equipoInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUpdateWithoutTipo_equipoInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutMaterialesNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutUso_otNestedInput;
};
export type uso_material_otUncheckedUpdateWithoutTipo_equipoInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUncheckedUpdateManyWithoutTipo_equipoInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateManyUnidadInput = {
    id_uso?: number;
    id_ot?: number | null;
    id_tipo_equipo?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUpdateWithoutUnidadInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutMaterialesNestedInput;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutUso_otNestedInput;
};
export type uso_material_otUncheckedUpdateWithoutUnidadInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUncheckedUpdateManyWithoutUnidadInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otCreateManyOrden_trabajoInput = {
    id_uso?: number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    cantidad: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUpdateWithoutOrden_trabajoInput = {
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutUso_otNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutUso_otNestedInput;
};
export type uso_material_otUncheckedUpdateWithoutOrden_trabajoInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otUncheckedUpdateManyWithoutOrden_trabajoInput = {
    id_uso?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type uso_material_otSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_uso?: boolean;
    id_ot?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    cantidad?: boolean;
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["uso_material_ot"]>;
export type uso_material_otSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_uso?: boolean;
    id_ot?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    cantidad?: boolean;
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["uso_material_ot"]>;
export type uso_material_otSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_uso?: boolean;
    id_ot?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    cantidad?: boolean;
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["uso_material_ot"]>;
export type uso_material_otSelectScalar = {
    id_uso?: boolean;
    id_ot?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    cantidad?: boolean;
};
export type uso_material_otOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_uso" | "id_ot" | "id_tipo_equipo" | "id_unidad" | "cantidad", ExtArgs["result"]["uso_material_ot"]>;
export type uso_material_otInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
};
export type uso_material_otIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
};
export type uso_material_otIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>;
    tipo_equipo?: boolean | Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.uso_material_ot$unidadArgs<ExtArgs>;
};
export type $uso_material_otPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "uso_material_ot";
    objects: {
        orden_trabajo: Prisma.$orden_trabajoPayload<ExtArgs> | null;
        tipo_equipo: Prisma.$tipo_equipoPayload<ExtArgs> | null;
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_uso: number;
        id_ot: number | null;
        id_tipo_equipo: number | null;
        id_unidad: number | null;
        cantidad: runtime.Decimal;
    }, ExtArgs["result"]["uso_material_ot"]>;
    composites: {};
};
export type uso_material_otGetPayload<S extends boolean | null | undefined | uso_material_otDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload, S>;
export type uso_material_otCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<uso_material_otFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Uso_material_otCountAggregateInputType | true;
};
export interface uso_material_otDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['uso_material_ot'];
        meta: {
            name: 'uso_material_ot';
        };
    };
    findUnique<T extends uso_material_otFindUniqueArgs>(args: Prisma.SelectSubset<T, uso_material_otFindUniqueArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends uso_material_otFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, uso_material_otFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends uso_material_otFindFirstArgs>(args?: Prisma.SelectSubset<T, uso_material_otFindFirstArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends uso_material_otFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, uso_material_otFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends uso_material_otFindManyArgs>(args?: Prisma.SelectSubset<T, uso_material_otFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends uso_material_otCreateArgs>(args: Prisma.SelectSubset<T, uso_material_otCreateArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends uso_material_otCreateManyArgs>(args?: Prisma.SelectSubset<T, uso_material_otCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends uso_material_otCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, uso_material_otCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends uso_material_otDeleteArgs>(args: Prisma.SelectSubset<T, uso_material_otDeleteArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends uso_material_otUpdateArgs>(args: Prisma.SelectSubset<T, uso_material_otUpdateArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends uso_material_otDeleteManyArgs>(args?: Prisma.SelectSubset<T, uso_material_otDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends uso_material_otUpdateManyArgs>(args: Prisma.SelectSubset<T, uso_material_otUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends uso_material_otUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, uso_material_otUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends uso_material_otUpsertArgs>(args: Prisma.SelectSubset<T, uso_material_otUpsertArgs<ExtArgs>>): Prisma.Prisma__uso_material_otClient<runtime.Types.Result.GetResult<Prisma.$uso_material_otPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends uso_material_otCountArgs>(args?: Prisma.Subset<T, uso_material_otCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Uso_material_otCountAggregateOutputType> : number>;
    aggregate<T extends Uso_material_otAggregateArgs>(args: Prisma.Subset<T, Uso_material_otAggregateArgs>): Prisma.PrismaPromise<GetUso_material_otAggregateType<T>>;
    groupBy<T extends uso_material_otGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: uso_material_otGroupByArgs['orderBy'];
    } : {
        orderBy?: uso_material_otGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, uso_material_otGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUso_material_otGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: uso_material_otFieldRefs;
}
export interface Prisma__uso_material_otClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orden_trabajo<T extends Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.uso_material_ot$orden_trabajoArgs<ExtArgs>>): Prisma.Prisma__orden_trabajoClient<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tipo_equipo<T extends Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.uso_material_ot$tipo_equipoArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    unidad<T extends Prisma.uso_material_ot$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.uso_material_ot$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface uso_material_otFieldRefs {
    readonly id_uso: Prisma.FieldRef<"uso_material_ot", 'Int'>;
    readonly id_ot: Prisma.FieldRef<"uso_material_ot", 'Int'>;
    readonly id_tipo_equipo: Prisma.FieldRef<"uso_material_ot", 'Int'>;
    readonly id_unidad: Prisma.FieldRef<"uso_material_ot", 'Int'>;
    readonly cantidad: Prisma.FieldRef<"uso_material_ot", 'Decimal'>;
}
export type uso_material_otFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    where: Prisma.uso_material_otWhereUniqueInput;
};
export type uso_material_otFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    where: Prisma.uso_material_otWhereUniqueInput;
};
export type uso_material_otFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type uso_material_otFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type uso_material_otFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type uso_material_otCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.uso_material_otCreateInput, Prisma.uso_material_otUncheckedCreateInput>;
};
export type uso_material_otCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.uso_material_otCreateManyInput | Prisma.uso_material_otCreateManyInput[];
    skipDuplicates?: boolean;
};
export type uso_material_otCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    data: Prisma.uso_material_otCreateManyInput | Prisma.uso_material_otCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.uso_material_otIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type uso_material_otUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.uso_material_otUpdateInput, Prisma.uso_material_otUncheckedUpdateInput>;
    where: Prisma.uso_material_otWhereUniqueInput;
};
export type uso_material_otUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.uso_material_otUpdateManyMutationInput, Prisma.uso_material_otUncheckedUpdateManyInput>;
    where?: Prisma.uso_material_otWhereInput;
    limit?: number;
};
export type uso_material_otUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.uso_material_otUpdateManyMutationInput, Prisma.uso_material_otUncheckedUpdateManyInput>;
    where?: Prisma.uso_material_otWhereInput;
    limit?: number;
    include?: Prisma.uso_material_otIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type uso_material_otUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    where: Prisma.uso_material_otWhereUniqueInput;
    create: Prisma.XOR<Prisma.uso_material_otCreateInput, Prisma.uso_material_otUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.uso_material_otUpdateInput, Prisma.uso_material_otUncheckedUpdateInput>;
};
export type uso_material_otDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
    where: Prisma.uso_material_otWhereUniqueInput;
};
export type uso_material_otDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.uso_material_otWhereInput;
    limit?: number;
};
export type uso_material_ot$orden_trabajoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
};
export type uso_material_ot$tipo_equipoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
};
export type uso_material_ot$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type uso_material_otDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.uso_material_otSelect<ExtArgs> | null;
    omit?: Prisma.uso_material_otOmit<ExtArgs> | null;
    include?: Prisma.uso_material_otInclude<ExtArgs> | null;
};
