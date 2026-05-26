import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type caja_napModel = runtime.Types.Result.DefaultSelection<Prisma.$caja_napPayload>;
export type AggregateCaja_nap = {
    _count: Caja_napCountAggregateOutputType | null;
    _avg: Caja_napAvgAggregateOutputType | null;
    _sum: Caja_napSumAggregateOutputType | null;
    _min: Caja_napMinAggregateOutputType | null;
    _max: Caja_napMaxAggregateOutputType | null;
};
export type Caja_napAvgAggregateOutputType = {
    id_caja_nap: number | null;
    id_empresa: number | null;
    id_mufa: number | null;
    capacidad_puertos: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Caja_napSumAggregateOutputType = {
    id_caja_nap: number | null;
    id_empresa: number | null;
    id_mufa: number | null;
    capacidad_puertos: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Caja_napMinAggregateOutputType = {
    id_caja_nap: number | null;
    id_empresa: number | null;
    id_mufa: number | null;
    identificador_unico: string | null;
    numero_poste: string | null;
    zona: string | null;
    capacidad_puertos: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Caja_napMaxAggregateOutputType = {
    id_caja_nap: number | null;
    id_empresa: number | null;
    id_mufa: number | null;
    identificador_unico: string | null;
    numero_poste: string | null;
    zona: string | null;
    capacidad_puertos: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
};
export type Caja_napCountAggregateOutputType = {
    id_caja_nap: number;
    id_empresa: number;
    id_mufa: number;
    identificador_unico: number;
    numero_poste: number;
    zona: number;
    capacidad_puertos: number;
    latitud: number;
    longitud: number;
    _all: number;
};
export type Caja_napAvgAggregateInputType = {
    id_caja_nap?: true;
    id_empresa?: true;
    id_mufa?: true;
    capacidad_puertos?: true;
    latitud?: true;
    longitud?: true;
};
export type Caja_napSumAggregateInputType = {
    id_caja_nap?: true;
    id_empresa?: true;
    id_mufa?: true;
    capacidad_puertos?: true;
    latitud?: true;
    longitud?: true;
};
export type Caja_napMinAggregateInputType = {
    id_caja_nap?: true;
    id_empresa?: true;
    id_mufa?: true;
    identificador_unico?: true;
    numero_poste?: true;
    zona?: true;
    capacidad_puertos?: true;
    latitud?: true;
    longitud?: true;
};
export type Caja_napMaxAggregateInputType = {
    id_caja_nap?: true;
    id_empresa?: true;
    id_mufa?: true;
    identificador_unico?: true;
    numero_poste?: true;
    zona?: true;
    capacidad_puertos?: true;
    latitud?: true;
    longitud?: true;
};
export type Caja_napCountAggregateInputType = {
    id_caja_nap?: true;
    id_empresa?: true;
    id_mufa?: true;
    identificador_unico?: true;
    numero_poste?: true;
    zona?: true;
    capacidad_puertos?: true;
    latitud?: true;
    longitud?: true;
    _all?: true;
};
export type Caja_napAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.caja_napWhereInput;
    orderBy?: Prisma.caja_napOrderByWithRelationInput | Prisma.caja_napOrderByWithRelationInput[];
    cursor?: Prisma.caja_napWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Caja_napCountAggregateInputType;
    _avg?: Caja_napAvgAggregateInputType;
    _sum?: Caja_napSumAggregateInputType;
    _min?: Caja_napMinAggregateInputType;
    _max?: Caja_napMaxAggregateInputType;
};
export type GetCaja_napAggregateType<T extends Caja_napAggregateArgs> = {
    [P in keyof T & keyof AggregateCaja_nap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCaja_nap[P]> : Prisma.GetScalarType<T[P], AggregateCaja_nap[P]>;
};
export type caja_napGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.caja_napWhereInput;
    orderBy?: Prisma.caja_napOrderByWithAggregationInput | Prisma.caja_napOrderByWithAggregationInput[];
    by: Prisma.Caja_napScalarFieldEnum[] | Prisma.Caja_napScalarFieldEnum;
    having?: Prisma.caja_napScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Caja_napCountAggregateInputType | true;
    _avg?: Caja_napAvgAggregateInputType;
    _sum?: Caja_napSumAggregateInputType;
    _min?: Caja_napMinAggregateInputType;
    _max?: Caja_napMaxAggregateInputType;
};
export type Caja_napGroupByOutputType = {
    id_caja_nap: number;
    id_empresa: number | null;
    id_mufa: number | null;
    identificador_unico: string | null;
    numero_poste: string | null;
    zona: string | null;
    capacidad_puertos: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    _count: Caja_napCountAggregateOutputType | null;
    _avg: Caja_napAvgAggregateOutputType | null;
    _sum: Caja_napSumAggregateOutputType | null;
    _min: Caja_napMinAggregateOutputType | null;
    _max: Caja_napMaxAggregateOutputType | null;
};
export type GetCaja_napGroupByPayload<T extends caja_napGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Caja_napGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Caja_napGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Caja_napGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Caja_napGroupByOutputType[P]>;
}>>;
export type caja_napWhereInput = {
    AND?: Prisma.caja_napWhereInput | Prisma.caja_napWhereInput[];
    OR?: Prisma.caja_napWhereInput[];
    NOT?: Prisma.caja_napWhereInput | Prisma.caja_napWhereInput[];
    id_caja_nap?: Prisma.IntFilter<"caja_nap"> | number;
    id_empresa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    id_mufa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    identificador_unico?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    numero_poste?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    zona?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    capacidad_puertos?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    latitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    mufa?: Prisma.XOR<Prisma.MufaNullableScalarRelationFilter, Prisma.mufaWhereInput> | null;
    puertos?: Prisma.Puerto_napListRelationFilter;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    monitoreo?: Prisma.Monitoreo_ontListRelationFilter;
};
export type caja_napOrderByWithRelationInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_mufa?: Prisma.SortOrderInput | Prisma.SortOrder;
    identificador_unico?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_poste?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    mufa?: Prisma.mufaOrderByWithRelationInput;
    puertos?: Prisma.puerto_napOrderByRelationAggregateInput;
    unidades?: Prisma.unidad_equipoOrderByRelationAggregateInput;
    monitoreo?: Prisma.monitoreo_ontOrderByRelationAggregateInput;
};
export type caja_napWhereUniqueInput = Prisma.AtLeast<{
    id_caja_nap?: number;
    identificador_unico?: string;
    AND?: Prisma.caja_napWhereInput | Prisma.caja_napWhereInput[];
    OR?: Prisma.caja_napWhereInput[];
    NOT?: Prisma.caja_napWhereInput | Prisma.caja_napWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    id_mufa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    numero_poste?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    zona?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    capacidad_puertos?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    latitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    mufa?: Prisma.XOR<Prisma.MufaNullableScalarRelationFilter, Prisma.mufaWhereInput> | null;
    puertos?: Prisma.Puerto_napListRelationFilter;
    unidades?: Prisma.Unidad_equipoListRelationFilter;
    monitoreo?: Prisma.Monitoreo_ontListRelationFilter;
}, "id_caja_nap" | "identificador_unico">;
export type caja_napOrderByWithAggregationInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_mufa?: Prisma.SortOrderInput | Prisma.SortOrder;
    identificador_unico?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_poste?: Prisma.SortOrderInput | Prisma.SortOrder;
    zona?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    longitud?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.caja_napCountOrderByAggregateInput;
    _avg?: Prisma.caja_napAvgOrderByAggregateInput;
    _max?: Prisma.caja_napMaxOrderByAggregateInput;
    _min?: Prisma.caja_napMinOrderByAggregateInput;
    _sum?: Prisma.caja_napSumOrderByAggregateInput;
};
export type caja_napScalarWhereWithAggregatesInput = {
    AND?: Prisma.caja_napScalarWhereWithAggregatesInput | Prisma.caja_napScalarWhereWithAggregatesInput[];
    OR?: Prisma.caja_napScalarWhereWithAggregatesInput[];
    NOT?: Prisma.caja_napScalarWhereWithAggregatesInput | Prisma.caja_napScalarWhereWithAggregatesInput[];
    id_caja_nap?: Prisma.IntWithAggregatesFilter<"caja_nap"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"caja_nap"> | number | null;
    id_mufa?: Prisma.IntNullableWithAggregatesFilter<"caja_nap"> | number | null;
    identificador_unico?: Prisma.StringNullableWithAggregatesFilter<"caja_nap"> | string | null;
    numero_poste?: Prisma.StringNullableWithAggregatesFilter<"caja_nap"> | string | null;
    zona?: Prisma.StringNullableWithAggregatesFilter<"caja_nap"> | string | null;
    capacidad_puertos?: Prisma.IntNullableWithAggregatesFilter<"caja_nap"> | number | null;
    latitud?: Prisma.DecimalNullableWithAggregatesFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableWithAggregatesFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napCreateInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutCajas_napInput;
    mufa?: Prisma.mufaCreateNestedOneWithoutCajas_napInput;
    puertos?: Prisma.puerto_napCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUpdateInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutCajas_napNestedInput;
    mufa?: Prisma.mufaUpdateOneWithoutCajas_napNestedInput;
    puertos?: Prisma.puerto_napUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napCreateManyInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napUpdateManyMutationInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napUncheckedUpdateManyInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type Caja_napListRelationFilter = {
    every?: Prisma.caja_napWhereInput;
    some?: Prisma.caja_napWhereInput;
    none?: Prisma.caja_napWhereInput;
};
export type caja_napOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Caja_napNullableScalarRelationFilter = {
    is?: Prisma.caja_napWhereInput | null;
    isNot?: Prisma.caja_napWhereInput | null;
};
export type caja_napCountOrderByAggregateInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_mufa?: Prisma.SortOrder;
    identificador_unico?: Prisma.SortOrder;
    numero_poste?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type caja_napAvgOrderByAggregateInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_mufa?: Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type caja_napMaxOrderByAggregateInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_mufa?: Prisma.SortOrder;
    identificador_unico?: Prisma.SortOrder;
    numero_poste?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type caja_napMinOrderByAggregateInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_mufa?: Prisma.SortOrder;
    identificador_unico?: Prisma.SortOrder;
    numero_poste?: Prisma.SortOrder;
    zona?: Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type caja_napSumOrderByAggregateInput = {
    id_caja_nap?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_mufa?: Prisma.SortOrder;
    capacidad_puertos?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
};
export type caja_napCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput> | Prisma.caja_napCreateWithoutEmpresaInput[] | Prisma.caja_napUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutEmpresaInput | Prisma.caja_napCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.caja_napCreateManyEmpresaInputEnvelope;
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
};
export type caja_napUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput> | Prisma.caja_napCreateWithoutEmpresaInput[] | Prisma.caja_napUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutEmpresaInput | Prisma.caja_napCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.caja_napCreateManyEmpresaInputEnvelope;
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
};
export type caja_napUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput> | Prisma.caja_napCreateWithoutEmpresaInput[] | Prisma.caja_napUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutEmpresaInput | Prisma.caja_napCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.caja_napUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.caja_napUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.caja_napCreateManyEmpresaInputEnvelope;
    set?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    disconnect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    delete?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    update?: Prisma.caja_napUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.caja_napUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.caja_napUpdateManyWithWhereWithoutEmpresaInput | Prisma.caja_napUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
};
export type caja_napUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput> | Prisma.caja_napCreateWithoutEmpresaInput[] | Prisma.caja_napUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutEmpresaInput | Prisma.caja_napCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.caja_napUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.caja_napUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.caja_napCreateManyEmpresaInputEnvelope;
    set?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    disconnect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    delete?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    update?: Prisma.caja_napUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.caja_napUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.caja_napUpdateManyWithWhereWithoutEmpresaInput | Prisma.caja_napUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
};
export type caja_napCreateNestedOneWithoutUnidadesInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutUnidadesInput, Prisma.caja_napUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutUnidadesInput;
    connect?: Prisma.caja_napWhereUniqueInput;
};
export type caja_napUpdateOneWithoutUnidadesNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutUnidadesInput, Prisma.caja_napUncheckedCreateWithoutUnidadesInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutUnidadesInput;
    upsert?: Prisma.caja_napUpsertWithoutUnidadesInput;
    disconnect?: Prisma.caja_napWhereInput | boolean;
    delete?: Prisma.caja_napWhereInput | boolean;
    connect?: Prisma.caja_napWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.caja_napUpdateToOneWithWhereWithoutUnidadesInput, Prisma.caja_napUpdateWithoutUnidadesInput>, Prisma.caja_napUncheckedUpdateWithoutUnidadesInput>;
};
export type caja_napCreateNestedManyWithoutMufaInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput> | Prisma.caja_napCreateWithoutMufaInput[] | Prisma.caja_napUncheckedCreateWithoutMufaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMufaInput | Prisma.caja_napCreateOrConnectWithoutMufaInput[];
    createMany?: Prisma.caja_napCreateManyMufaInputEnvelope;
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
};
export type caja_napUncheckedCreateNestedManyWithoutMufaInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput> | Prisma.caja_napCreateWithoutMufaInput[] | Prisma.caja_napUncheckedCreateWithoutMufaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMufaInput | Prisma.caja_napCreateOrConnectWithoutMufaInput[];
    createMany?: Prisma.caja_napCreateManyMufaInputEnvelope;
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
};
export type caja_napUpdateManyWithoutMufaNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput> | Prisma.caja_napCreateWithoutMufaInput[] | Prisma.caja_napUncheckedCreateWithoutMufaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMufaInput | Prisma.caja_napCreateOrConnectWithoutMufaInput[];
    upsert?: Prisma.caja_napUpsertWithWhereUniqueWithoutMufaInput | Prisma.caja_napUpsertWithWhereUniqueWithoutMufaInput[];
    createMany?: Prisma.caja_napCreateManyMufaInputEnvelope;
    set?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    disconnect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    delete?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    update?: Prisma.caja_napUpdateWithWhereUniqueWithoutMufaInput | Prisma.caja_napUpdateWithWhereUniqueWithoutMufaInput[];
    updateMany?: Prisma.caja_napUpdateManyWithWhereWithoutMufaInput | Prisma.caja_napUpdateManyWithWhereWithoutMufaInput[];
    deleteMany?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
};
export type caja_napUncheckedUpdateManyWithoutMufaNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput> | Prisma.caja_napCreateWithoutMufaInput[] | Prisma.caja_napUncheckedCreateWithoutMufaInput[];
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMufaInput | Prisma.caja_napCreateOrConnectWithoutMufaInput[];
    upsert?: Prisma.caja_napUpsertWithWhereUniqueWithoutMufaInput | Prisma.caja_napUpsertWithWhereUniqueWithoutMufaInput[];
    createMany?: Prisma.caja_napCreateManyMufaInputEnvelope;
    set?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    disconnect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    delete?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    connect?: Prisma.caja_napWhereUniqueInput | Prisma.caja_napWhereUniqueInput[];
    update?: Prisma.caja_napUpdateWithWhereUniqueWithoutMufaInput | Prisma.caja_napUpdateWithWhereUniqueWithoutMufaInput[];
    updateMany?: Prisma.caja_napUpdateManyWithWhereWithoutMufaInput | Prisma.caja_napUpdateManyWithWhereWithoutMufaInput[];
    deleteMany?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
};
export type caja_napCreateNestedOneWithoutPuertosInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutPuertosInput, Prisma.caja_napUncheckedCreateWithoutPuertosInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutPuertosInput;
    connect?: Prisma.caja_napWhereUniqueInput;
};
export type caja_napUpdateOneWithoutPuertosNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutPuertosInput, Prisma.caja_napUncheckedCreateWithoutPuertosInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutPuertosInput;
    upsert?: Prisma.caja_napUpsertWithoutPuertosInput;
    disconnect?: Prisma.caja_napWhereInput | boolean;
    delete?: Prisma.caja_napWhereInput | boolean;
    connect?: Prisma.caja_napWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.caja_napUpdateToOneWithWhereWithoutPuertosInput, Prisma.caja_napUpdateWithoutPuertosInput>, Prisma.caja_napUncheckedUpdateWithoutPuertosInput>;
};
export type caja_napCreateNestedOneWithoutMonitoreoInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMonitoreoInput, Prisma.caja_napUncheckedCreateWithoutMonitoreoInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMonitoreoInput;
    connect?: Prisma.caja_napWhereUniqueInput;
};
export type caja_napUpdateOneWithoutMonitoreoNestedInput = {
    create?: Prisma.XOR<Prisma.caja_napCreateWithoutMonitoreoInput, Prisma.caja_napUncheckedCreateWithoutMonitoreoInput>;
    connectOrCreate?: Prisma.caja_napCreateOrConnectWithoutMonitoreoInput;
    upsert?: Prisma.caja_napUpsertWithoutMonitoreoInput;
    disconnect?: Prisma.caja_napWhereInput | boolean;
    delete?: Prisma.caja_napWhereInput | boolean;
    connect?: Prisma.caja_napWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.caja_napUpdateToOneWithWhereWithoutMonitoreoInput, Prisma.caja_napUpdateWithoutMonitoreoInput>, Prisma.caja_napUncheckedUpdateWithoutMonitoreoInput>;
};
export type caja_napCreateWithoutEmpresaInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mufa?: Prisma.mufaCreateNestedOneWithoutCajas_napInput;
    puertos?: Prisma.puerto_napCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateWithoutEmpresaInput = {
    id_caja_nap?: number;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput>;
};
export type caja_napCreateManyEmpresaInputEnvelope = {
    data: Prisma.caja_napCreateManyEmpresaInput | Prisma.caja_napCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type caja_napUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    update: Prisma.XOR<Prisma.caja_napUpdateWithoutEmpresaInput, Prisma.caja_napUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutEmpresaInput, Prisma.caja_napUncheckedCreateWithoutEmpresaInput>;
};
export type caja_napUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    data: Prisma.XOR<Prisma.caja_napUpdateWithoutEmpresaInput, Prisma.caja_napUncheckedUpdateWithoutEmpresaInput>;
};
export type caja_napUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.caja_napScalarWhereInput;
    data: Prisma.XOR<Prisma.caja_napUpdateManyMutationInput, Prisma.caja_napUncheckedUpdateManyWithoutEmpresaInput>;
};
export type caja_napScalarWhereInput = {
    AND?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
    OR?: Prisma.caja_napScalarWhereInput[];
    NOT?: Prisma.caja_napScalarWhereInput | Prisma.caja_napScalarWhereInput[];
    id_caja_nap?: Prisma.IntFilter<"caja_nap"> | number;
    id_empresa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    id_mufa?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    identificador_unico?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    numero_poste?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    zona?: Prisma.StringNullableFilter<"caja_nap"> | string | null;
    capacidad_puertos?: Prisma.IntNullableFilter<"caja_nap"> | number | null;
    latitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.DecimalNullableFilter<"caja_nap"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napCreateWithoutUnidadesInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutCajas_napInput;
    mufa?: Prisma.mufaCreateNestedOneWithoutCajas_napInput;
    puertos?: Prisma.puerto_napCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateWithoutUnidadesInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napCreateOrConnectWithoutUnidadesInput = {
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutUnidadesInput, Prisma.caja_napUncheckedCreateWithoutUnidadesInput>;
};
export type caja_napUpsertWithoutUnidadesInput = {
    update: Prisma.XOR<Prisma.caja_napUpdateWithoutUnidadesInput, Prisma.caja_napUncheckedUpdateWithoutUnidadesInput>;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutUnidadesInput, Prisma.caja_napUncheckedCreateWithoutUnidadesInput>;
    where?: Prisma.caja_napWhereInput;
};
export type caja_napUpdateToOneWithWhereWithoutUnidadesInput = {
    where?: Prisma.caja_napWhereInput;
    data: Prisma.XOR<Prisma.caja_napUpdateWithoutUnidadesInput, Prisma.caja_napUncheckedUpdateWithoutUnidadesInput>;
};
export type caja_napUpdateWithoutUnidadesInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutCajas_napNestedInput;
    mufa?: Prisma.mufaUpdateOneWithoutCajas_napNestedInput;
    puertos?: Prisma.puerto_napUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateWithoutUnidadesInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napCreateWithoutMufaInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutCajas_napInput;
    puertos?: Prisma.puerto_napCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateWithoutMufaInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napCreateOrConnectWithoutMufaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput>;
};
export type caja_napCreateManyMufaInputEnvelope = {
    data: Prisma.caja_napCreateManyMufaInput | Prisma.caja_napCreateManyMufaInput[];
    skipDuplicates?: boolean;
};
export type caja_napUpsertWithWhereUniqueWithoutMufaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    update: Prisma.XOR<Prisma.caja_napUpdateWithoutMufaInput, Prisma.caja_napUncheckedUpdateWithoutMufaInput>;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutMufaInput, Prisma.caja_napUncheckedCreateWithoutMufaInput>;
};
export type caja_napUpdateWithWhereUniqueWithoutMufaInput = {
    where: Prisma.caja_napWhereUniqueInput;
    data: Prisma.XOR<Prisma.caja_napUpdateWithoutMufaInput, Prisma.caja_napUncheckedUpdateWithoutMufaInput>;
};
export type caja_napUpdateManyWithWhereWithoutMufaInput = {
    where: Prisma.caja_napScalarWhereInput;
    data: Prisma.XOR<Prisma.caja_napUpdateManyMutationInput, Prisma.caja_napUncheckedUpdateManyWithoutMufaInput>;
};
export type caja_napCreateWithoutPuertosInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutCajas_napInput;
    mufa?: Prisma.mufaCreateNestedOneWithoutCajas_napInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateWithoutPuertosInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutCaja_napInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napCreateOrConnectWithoutPuertosInput = {
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutPuertosInput, Prisma.caja_napUncheckedCreateWithoutPuertosInput>;
};
export type caja_napUpsertWithoutPuertosInput = {
    update: Prisma.XOR<Prisma.caja_napUpdateWithoutPuertosInput, Prisma.caja_napUncheckedUpdateWithoutPuertosInput>;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutPuertosInput, Prisma.caja_napUncheckedCreateWithoutPuertosInput>;
    where?: Prisma.caja_napWhereInput;
};
export type caja_napUpdateToOneWithWhereWithoutPuertosInput = {
    where?: Prisma.caja_napWhereInput;
    data: Prisma.XOR<Prisma.caja_napUpdateWithoutPuertosInput, Prisma.caja_napUncheckedUpdateWithoutPuertosInput>;
};
export type caja_napUpdateWithoutPuertosInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutCajas_napNestedInput;
    mufa?: Prisma.mufaUpdateOneWithoutCajas_napNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateWithoutPuertosInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napCreateWithoutMonitoreoInput = {
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutCajas_napInput;
    mufa?: Prisma.mufaCreateNestedOneWithoutCajas_napInput;
    puertos?: Prisma.puerto_napCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoCreateNestedManyWithoutCaja_napInput;
};
export type caja_napUncheckedCreateWithoutMonitoreoInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedCreateNestedManyWithoutCaja_napInput;
    unidades?: Prisma.unidad_equipoUncheckedCreateNestedManyWithoutCaja_napInput;
};
export type caja_napCreateOrConnectWithoutMonitoreoInput = {
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutMonitoreoInput, Prisma.caja_napUncheckedCreateWithoutMonitoreoInput>;
};
export type caja_napUpsertWithoutMonitoreoInput = {
    update: Prisma.XOR<Prisma.caja_napUpdateWithoutMonitoreoInput, Prisma.caja_napUncheckedUpdateWithoutMonitoreoInput>;
    create: Prisma.XOR<Prisma.caja_napCreateWithoutMonitoreoInput, Prisma.caja_napUncheckedCreateWithoutMonitoreoInput>;
    where?: Prisma.caja_napWhereInput;
};
export type caja_napUpdateToOneWithWhereWithoutMonitoreoInput = {
    where?: Prisma.caja_napWhereInput;
    data: Prisma.XOR<Prisma.caja_napUpdateWithoutMonitoreoInput, Prisma.caja_napUncheckedUpdateWithoutMonitoreoInput>;
};
export type caja_napUpdateWithoutMonitoreoInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutCajas_napNestedInput;
    mufa?: Prisma.mufaUpdateOneWithoutCajas_napNestedInput;
    puertos?: Prisma.puerto_napUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateWithoutMonitoreoInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napCreateManyEmpresaInput = {
    id_caja_nap?: number;
    id_mufa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napUpdateWithoutEmpresaInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    mufa?: Prisma.mufaUpdateOneWithoutCajas_napNestedInput;
    puertos?: Prisma.puerto_napUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateWithoutEmpresaInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateManyWithoutEmpresaInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_mufa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napCreateManyMufaInput = {
    id_caja_nap?: number;
    id_empresa?: number | null;
    identificador_unico?: string | null;
    numero_poste?: string | null;
    zona?: string | null;
    capacidad_puertos?: number | null;
    latitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type caja_napUpdateWithoutMufaInput = {
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutCajas_napNestedInput;
    puertos?: Prisma.puerto_napUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateWithoutMufaInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    puertos?: Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput;
    unidades?: Prisma.unidad_equipoUncheckedUpdateManyWithoutCaja_napNestedInput;
    monitoreo?: Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput;
};
export type caja_napUncheckedUpdateManyWithoutMufaInput = {
    id_caja_nap?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador_unico?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    numero_poste?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    zona?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacidad_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    longitud?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
};
export type Caja_napCountOutputType = {
    puertos: number;
    unidades: number;
    monitoreo: number;
};
export type Caja_napCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    puertos?: boolean | Caja_napCountOutputTypeCountPuertosArgs;
    unidades?: boolean | Caja_napCountOutputTypeCountUnidadesArgs;
    monitoreo?: boolean | Caja_napCountOutputTypeCountMonitoreoArgs;
};
export type Caja_napCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Caja_napCountOutputTypeSelect<ExtArgs> | null;
};
export type Caja_napCountOutputTypeCountPuertosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.puerto_napWhereInput;
};
export type Caja_napCountOutputTypeCountUnidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.unidad_equipoWhereInput;
};
export type Caja_napCountOutputTypeCountMonitoreoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.monitoreo_ontWhereInput;
};
export type caja_napSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_caja_nap?: boolean;
    id_empresa?: boolean;
    id_mufa?: boolean;
    identificador_unico?: boolean;
    numero_poste?: boolean;
    zona?: boolean;
    capacidad_puertos?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
    puertos?: boolean | Prisma.caja_nap$puertosArgs<ExtArgs>;
    unidades?: boolean | Prisma.caja_nap$unidadesArgs<ExtArgs>;
    monitoreo?: boolean | Prisma.caja_nap$monitoreoArgs<ExtArgs>;
    _count?: boolean | Prisma.Caja_napCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["caja_nap"]>;
export type caja_napSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_caja_nap?: boolean;
    id_empresa?: boolean;
    id_mufa?: boolean;
    identificador_unico?: boolean;
    numero_poste?: boolean;
    zona?: boolean;
    capacidad_puertos?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
}, ExtArgs["result"]["caja_nap"]>;
export type caja_napSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_caja_nap?: boolean;
    id_empresa?: boolean;
    id_mufa?: boolean;
    identificador_unico?: boolean;
    numero_poste?: boolean;
    zona?: boolean;
    capacidad_puertos?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
}, ExtArgs["result"]["caja_nap"]>;
export type caja_napSelectScalar = {
    id_caja_nap?: boolean;
    id_empresa?: boolean;
    id_mufa?: boolean;
    identificador_unico?: boolean;
    numero_poste?: boolean;
    zona?: boolean;
    capacidad_puertos?: boolean;
    latitud?: boolean;
    longitud?: boolean;
};
export type caja_napOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_caja_nap" | "id_empresa" | "id_mufa" | "identificador_unico" | "numero_poste" | "zona" | "capacidad_puertos" | "latitud" | "longitud", ExtArgs["result"]["caja_nap"]>;
export type caja_napInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
    puertos?: boolean | Prisma.caja_nap$puertosArgs<ExtArgs>;
    unidades?: boolean | Prisma.caja_nap$unidadesArgs<ExtArgs>;
    monitoreo?: boolean | Prisma.caja_nap$monitoreoArgs<ExtArgs>;
    _count?: boolean | Prisma.Caja_napCountOutputTypeDefaultArgs<ExtArgs>;
};
export type caja_napIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
};
export type caja_napIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.caja_nap$empresaArgs<ExtArgs>;
    mufa?: boolean | Prisma.caja_nap$mufaArgs<ExtArgs>;
};
export type $caja_napPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "caja_nap";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        mufa: Prisma.$mufaPayload<ExtArgs> | null;
        puertos: Prisma.$puerto_napPayload<ExtArgs>[];
        unidades: Prisma.$unidad_equipoPayload<ExtArgs>[];
        monitoreo: Prisma.$monitoreo_ontPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_caja_nap: number;
        id_empresa: number | null;
        id_mufa: number | null;
        identificador_unico: string | null;
        numero_poste: string | null;
        zona: string | null;
        capacidad_puertos: number | null;
        latitud: runtime.Decimal | null;
        longitud: runtime.Decimal | null;
    }, ExtArgs["result"]["caja_nap"]>;
    composites: {};
};
export type caja_napGetPayload<S extends boolean | null | undefined | caja_napDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$caja_napPayload, S>;
export type caja_napCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<caja_napFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Caja_napCountAggregateInputType | true;
};
export interface caja_napDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['caja_nap'];
        meta: {
            name: 'caja_nap';
        };
    };
    findUnique<T extends caja_napFindUniqueArgs>(args: Prisma.SelectSubset<T, caja_napFindUniqueArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends caja_napFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, caja_napFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends caja_napFindFirstArgs>(args?: Prisma.SelectSubset<T, caja_napFindFirstArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends caja_napFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, caja_napFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends caja_napFindManyArgs>(args?: Prisma.SelectSubset<T, caja_napFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends caja_napCreateArgs>(args: Prisma.SelectSubset<T, caja_napCreateArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends caja_napCreateManyArgs>(args?: Prisma.SelectSubset<T, caja_napCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends caja_napCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, caja_napCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends caja_napDeleteArgs>(args: Prisma.SelectSubset<T, caja_napDeleteArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends caja_napUpdateArgs>(args: Prisma.SelectSubset<T, caja_napUpdateArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends caja_napDeleteManyArgs>(args?: Prisma.SelectSubset<T, caja_napDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends caja_napUpdateManyArgs>(args: Prisma.SelectSubset<T, caja_napUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends caja_napUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, caja_napUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends caja_napUpsertArgs>(args: Prisma.SelectSubset<T, caja_napUpsertArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends caja_napCountArgs>(args?: Prisma.Subset<T, caja_napCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Caja_napCountAggregateOutputType> : number>;
    aggregate<T extends Caja_napAggregateArgs>(args: Prisma.Subset<T, Caja_napAggregateArgs>): Prisma.PrismaPromise<GetCaja_napAggregateType<T>>;
    groupBy<T extends caja_napGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: caja_napGroupByArgs['orderBy'];
    } : {
        orderBy?: caja_napGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, caja_napGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCaja_napGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: caja_napFieldRefs;
}
export interface Prisma__caja_napClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.caja_nap$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.caja_nap$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mufa<T extends Prisma.caja_nap$mufaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.caja_nap$mufaArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    puertos<T extends Prisma.caja_nap$puertosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.caja_nap$puertosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    unidades<T extends Prisma.caja_nap$unidadesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.caja_nap$unidadesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    monitoreo<T extends Prisma.caja_nap$monitoreoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.caja_nap$monitoreoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface caja_napFieldRefs {
    readonly id_caja_nap: Prisma.FieldRef<"caja_nap", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"caja_nap", 'Int'>;
    readonly id_mufa: Prisma.FieldRef<"caja_nap", 'Int'>;
    readonly identificador_unico: Prisma.FieldRef<"caja_nap", 'String'>;
    readonly numero_poste: Prisma.FieldRef<"caja_nap", 'String'>;
    readonly zona: Prisma.FieldRef<"caja_nap", 'String'>;
    readonly capacidad_puertos: Prisma.FieldRef<"caja_nap", 'Int'>;
    readonly latitud: Prisma.FieldRef<"caja_nap", 'Decimal'>;
    readonly longitud: Prisma.FieldRef<"caja_nap", 'Decimal'>;
}
export type caja_napFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where: Prisma.caja_napWhereUniqueInput;
};
export type caja_napFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where: Prisma.caja_napWhereUniqueInput;
};
export type caja_napFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where?: Prisma.caja_napWhereInput;
    orderBy?: Prisma.caja_napOrderByWithRelationInput | Prisma.caja_napOrderByWithRelationInput[];
    cursor?: Prisma.caja_napWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Caja_napScalarFieldEnum | Prisma.Caja_napScalarFieldEnum[];
};
export type caja_napFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where?: Prisma.caja_napWhereInput;
    orderBy?: Prisma.caja_napOrderByWithRelationInput | Prisma.caja_napOrderByWithRelationInput[];
    cursor?: Prisma.caja_napWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Caja_napScalarFieldEnum | Prisma.Caja_napScalarFieldEnum[];
};
export type caja_napFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where?: Prisma.caja_napWhereInput;
    orderBy?: Prisma.caja_napOrderByWithRelationInput | Prisma.caja_napOrderByWithRelationInput[];
    cursor?: Prisma.caja_napWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Caja_napScalarFieldEnum | Prisma.Caja_napScalarFieldEnum[];
};
export type caja_napCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.caja_napCreateInput, Prisma.caja_napUncheckedCreateInput>;
};
export type caja_napCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.caja_napCreateManyInput | Prisma.caja_napCreateManyInput[];
    skipDuplicates?: boolean;
};
export type caja_napCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    data: Prisma.caja_napCreateManyInput | Prisma.caja_napCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.caja_napIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type caja_napUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.caja_napUpdateInput, Prisma.caja_napUncheckedUpdateInput>;
    where: Prisma.caja_napWhereUniqueInput;
};
export type caja_napUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.caja_napUpdateManyMutationInput, Prisma.caja_napUncheckedUpdateManyInput>;
    where?: Prisma.caja_napWhereInput;
    limit?: number;
};
export type caja_napUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.caja_napUpdateManyMutationInput, Prisma.caja_napUncheckedUpdateManyInput>;
    where?: Prisma.caja_napWhereInput;
    limit?: number;
    include?: Prisma.caja_napIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type caja_napUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where: Prisma.caja_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.caja_napCreateInput, Prisma.caja_napUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.caja_napUpdateInput, Prisma.caja_napUncheckedUpdateInput>;
};
export type caja_napDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where: Prisma.caja_napWhereUniqueInput;
};
export type caja_napDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.caja_napWhereInput;
    limit?: number;
};
export type caja_nap$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type caja_nap$mufaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where?: Prisma.mufaWhereInput;
};
export type caja_nap$puertosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    where?: Prisma.puerto_napWhereInput;
    orderBy?: Prisma.puerto_napOrderByWithRelationInput | Prisma.puerto_napOrderByWithRelationInput[];
    cursor?: Prisma.puerto_napWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Puerto_napScalarFieldEnum | Prisma.Puerto_napScalarFieldEnum[];
};
export type caja_nap$unidadesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type caja_nap$monitoreoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithRelationInput | Prisma.monitoreo_ontOrderByWithRelationInput[];
    cursor?: Prisma.monitoreo_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Monitoreo_ontScalarFieldEnum | Prisma.Monitoreo_ontScalarFieldEnum[];
};
export type caja_napDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
};
