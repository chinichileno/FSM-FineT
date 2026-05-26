import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type planModel = runtime.Types.Result.DefaultSelection<Prisma.$planPayload>;
export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
export type PlanAvgAggregateOutputType = {
    id_plan: number | null;
    id_empresa: number | null;
    velocidad_mbps: number | null;
    precio_mensual: runtime.Decimal | null;
};
export type PlanSumAggregateOutputType = {
    id_plan: number | null;
    id_empresa: number | null;
    velocidad_mbps: number | null;
    precio_mensual: runtime.Decimal | null;
};
export type PlanMinAggregateOutputType = {
    id_plan: number | null;
    id_empresa: number | null;
    nombre_comercial: string | null;
    tipo_plan: string | null;
    tipo_cliente: string | null;
    velocidad_mbps: number | null;
    precio_mensual: runtime.Decimal | null;
    descripcion: string | null;
    activo: boolean | null;
};
export type PlanMaxAggregateOutputType = {
    id_plan: number | null;
    id_empresa: number | null;
    nombre_comercial: string | null;
    tipo_plan: string | null;
    tipo_cliente: string | null;
    velocidad_mbps: number | null;
    precio_mensual: runtime.Decimal | null;
    descripcion: string | null;
    activo: boolean | null;
};
export type PlanCountAggregateOutputType = {
    id_plan: number;
    id_empresa: number;
    nombre_comercial: number;
    tipo_plan: number;
    tipo_cliente: number;
    velocidad_mbps: number;
    precio_mensual: number;
    descripcion: number;
    activo: number;
    _all: number;
};
export type PlanAvgAggregateInputType = {
    id_plan?: true;
    id_empresa?: true;
    velocidad_mbps?: true;
    precio_mensual?: true;
};
export type PlanSumAggregateInputType = {
    id_plan?: true;
    id_empresa?: true;
    velocidad_mbps?: true;
    precio_mensual?: true;
};
export type PlanMinAggregateInputType = {
    id_plan?: true;
    id_empresa?: true;
    nombre_comercial?: true;
    tipo_plan?: true;
    tipo_cliente?: true;
    velocidad_mbps?: true;
    precio_mensual?: true;
    descripcion?: true;
    activo?: true;
};
export type PlanMaxAggregateInputType = {
    id_plan?: true;
    id_empresa?: true;
    nombre_comercial?: true;
    tipo_plan?: true;
    tipo_cliente?: true;
    velocidad_mbps?: true;
    precio_mensual?: true;
    descripcion?: true;
    activo?: true;
};
export type PlanCountAggregateInputType = {
    id_plan?: true;
    id_empresa?: true;
    nombre_comercial?: true;
    tipo_plan?: true;
    tipo_cliente?: true;
    velocidad_mbps?: true;
    precio_mensual?: true;
    descripcion?: true;
    activo?: true;
    _all?: true;
};
export type PlanAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.planWhereInput;
    orderBy?: Prisma.planOrderByWithRelationInput | Prisma.planOrderByWithRelationInput[];
    cursor?: Prisma.planWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlanCountAggregateInputType;
    _avg?: PlanAvgAggregateInputType;
    _sum?: PlanSumAggregateInputType;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
};
export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
    [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlan[P]> : Prisma.GetScalarType<T[P], AggregatePlan[P]>;
};
export type planGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.planWhereInput;
    orderBy?: Prisma.planOrderByWithAggregationInput | Prisma.planOrderByWithAggregationInput[];
    by: Prisma.PlanScalarFieldEnum[] | Prisma.PlanScalarFieldEnum;
    having?: Prisma.planScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlanCountAggregateInputType | true;
    _avg?: PlanAvgAggregateInputType;
    _sum?: PlanSumAggregateInputType;
    _min?: PlanMinAggregateInputType;
    _max?: PlanMaxAggregateInputType;
};
export type PlanGroupByOutputType = {
    id_plan: number;
    id_empresa: number | null;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps: number | null;
    precio_mensual: runtime.Decimal;
    descripcion: string | null;
    activo: boolean;
    _count: PlanCountAggregateOutputType | null;
    _avg: PlanAvgAggregateOutputType | null;
    _sum: PlanSumAggregateOutputType | null;
    _min: PlanMinAggregateOutputType | null;
    _max: PlanMaxAggregateOutputType | null;
};
export type GetPlanGroupByPayload<T extends planGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlanGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlanGroupByOutputType[P]>;
}>>;
export type planWhereInput = {
    AND?: Prisma.planWhereInput | Prisma.planWhereInput[];
    OR?: Prisma.planWhereInput[];
    NOT?: Prisma.planWhereInput | Prisma.planWhereInput[];
    id_plan?: Prisma.IntFilter<"plan"> | number;
    id_empresa?: Prisma.IntNullableFilter<"plan"> | number | null;
    nombre_comercial?: Prisma.StringFilter<"plan"> | string;
    tipo_plan?: Prisma.StringFilter<"plan"> | string;
    tipo_cliente?: Prisma.StringFilter<"plan"> | string;
    velocidad_mbps?: Prisma.IntNullableFilter<"plan"> | number | null;
    precio_mensual?: Prisma.DecimalFilter<"plan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.StringNullableFilter<"plan"> | string | null;
    activo?: Prisma.BoolFilter<"plan"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    contratos?: Prisma.ContratoListRelationFilter;
    cotizaciones?: Prisma.CotizacionListRelationFilter;
};
export type planOrderByWithRelationInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    tipo_plan?: Prisma.SortOrder;
    tipo_cliente?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    contratos?: Prisma.contratoOrderByRelationAggregateInput;
    cotizaciones?: Prisma.cotizacionOrderByRelationAggregateInput;
};
export type planWhereUniqueInput = Prisma.AtLeast<{
    id_plan?: number;
    AND?: Prisma.planWhereInput | Prisma.planWhereInput[];
    OR?: Prisma.planWhereInput[];
    NOT?: Prisma.planWhereInput | Prisma.planWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"plan"> | number | null;
    nombre_comercial?: Prisma.StringFilter<"plan"> | string;
    tipo_plan?: Prisma.StringFilter<"plan"> | string;
    tipo_cliente?: Prisma.StringFilter<"plan"> | string;
    velocidad_mbps?: Prisma.IntNullableFilter<"plan"> | number | null;
    precio_mensual?: Prisma.DecimalFilter<"plan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.StringNullableFilter<"plan"> | string | null;
    activo?: Prisma.BoolFilter<"plan"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    contratos?: Prisma.ContratoListRelationFilter;
    cotizaciones?: Prisma.CotizacionListRelationFilter;
}, "id_plan">;
export type planOrderByWithAggregationInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    tipo_plan?: Prisma.SortOrder;
    tipo_cliente?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    _count?: Prisma.planCountOrderByAggregateInput;
    _avg?: Prisma.planAvgOrderByAggregateInput;
    _max?: Prisma.planMaxOrderByAggregateInput;
    _min?: Prisma.planMinOrderByAggregateInput;
    _sum?: Prisma.planSumOrderByAggregateInput;
};
export type planScalarWhereWithAggregatesInput = {
    AND?: Prisma.planScalarWhereWithAggregatesInput | Prisma.planScalarWhereWithAggregatesInput[];
    OR?: Prisma.planScalarWhereWithAggregatesInput[];
    NOT?: Prisma.planScalarWhereWithAggregatesInput | Prisma.planScalarWhereWithAggregatesInput[];
    id_plan?: Prisma.IntWithAggregatesFilter<"plan"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"plan"> | number | null;
    nombre_comercial?: Prisma.StringWithAggregatesFilter<"plan"> | string;
    tipo_plan?: Prisma.StringWithAggregatesFilter<"plan"> | string;
    tipo_cliente?: Prisma.StringWithAggregatesFilter<"plan"> | string;
    velocidad_mbps?: Prisma.IntNullableWithAggregatesFilter<"plan"> | number | null;
    precio_mensual?: Prisma.DecimalWithAggregatesFilter<"plan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"plan"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"plan"> | boolean;
};
export type planCreateInput = {
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutPlanesInput;
    contratos?: Prisma.contratoCreateNestedManyWithoutPlanInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutPlanInput;
};
export type planUncheckedCreateInput = {
    id_plan?: number;
    id_empresa?: number | null;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    contratos?: Prisma.contratoUncheckedCreateNestedManyWithoutPlanInput;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutPlanInput;
};
export type planUpdateInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutPlanesNestedInput;
    contratos?: Prisma.contratoUpdateManyWithoutPlanNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutPlanNestedInput;
};
export type planUncheckedUpdateInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contratos?: Prisma.contratoUncheckedUpdateManyWithoutPlanNestedInput;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutPlanNestedInput;
};
export type planCreateManyInput = {
    id_plan?: number;
    id_empresa?: number | null;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
};
export type planUpdateManyMutationInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type planUncheckedUpdateManyInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlanListRelationFilter = {
    every?: Prisma.planWhereInput;
    some?: Prisma.planWhereInput;
    none?: Prisma.planWhereInput;
};
export type planOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type planCountOrderByAggregateInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    tipo_plan?: Prisma.SortOrder;
    tipo_cliente?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type planAvgOrderByAggregateInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
};
export type planMaxOrderByAggregateInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    tipo_plan?: Prisma.SortOrder;
    tipo_cliente?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type planMinOrderByAggregateInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    tipo_plan?: Prisma.SortOrder;
    tipo_cliente?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type planSumOrderByAggregateInput = {
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    velocidad_mbps?: Prisma.SortOrder;
    precio_mensual?: Prisma.SortOrder;
};
export type PlanNullableScalarRelationFilter = {
    is?: Prisma.planWhereInput | null;
    isNot?: Prisma.planWhereInput | null;
};
export type planCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput> | Prisma.planCreateWithoutEmpresaInput[] | Prisma.planUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.planCreateOrConnectWithoutEmpresaInput | Prisma.planCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.planCreateManyEmpresaInputEnvelope;
    connect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
};
export type planUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput> | Prisma.planCreateWithoutEmpresaInput[] | Prisma.planUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.planCreateOrConnectWithoutEmpresaInput | Prisma.planCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.planCreateManyEmpresaInputEnvelope;
    connect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
};
export type planUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput> | Prisma.planCreateWithoutEmpresaInput[] | Prisma.planUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.planCreateOrConnectWithoutEmpresaInput | Prisma.planCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.planUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.planUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.planCreateManyEmpresaInputEnvelope;
    set?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    disconnect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    delete?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    connect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    update?: Prisma.planUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.planUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.planUpdateManyWithWhereWithoutEmpresaInput | Prisma.planUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.planScalarWhereInput | Prisma.planScalarWhereInput[];
};
export type planUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput> | Prisma.planCreateWithoutEmpresaInput[] | Prisma.planUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.planCreateOrConnectWithoutEmpresaInput | Prisma.planCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.planUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.planUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.planCreateManyEmpresaInputEnvelope;
    set?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    disconnect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    delete?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    connect?: Prisma.planWhereUniqueInput | Prisma.planWhereUniqueInput[];
    update?: Prisma.planUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.planUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.planUpdateManyWithWhereWithoutEmpresaInput | Prisma.planUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.planScalarWhereInput | Prisma.planScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type planCreateNestedOneWithoutContratosInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutContratosInput, Prisma.planUncheckedCreateWithoutContratosInput>;
    connectOrCreate?: Prisma.planCreateOrConnectWithoutContratosInput;
    connect?: Prisma.planWhereUniqueInput;
};
export type planUpdateOneWithoutContratosNestedInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutContratosInput, Prisma.planUncheckedCreateWithoutContratosInput>;
    connectOrCreate?: Prisma.planCreateOrConnectWithoutContratosInput;
    upsert?: Prisma.planUpsertWithoutContratosInput;
    disconnect?: Prisma.planWhereInput | boolean;
    delete?: Prisma.planWhereInput | boolean;
    connect?: Prisma.planWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.planUpdateToOneWithWhereWithoutContratosInput, Prisma.planUpdateWithoutContratosInput>, Prisma.planUncheckedUpdateWithoutContratosInput>;
};
export type planCreateNestedOneWithoutCotizacionesInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutCotizacionesInput, Prisma.planUncheckedCreateWithoutCotizacionesInput>;
    connectOrCreate?: Prisma.planCreateOrConnectWithoutCotizacionesInput;
    connect?: Prisma.planWhereUniqueInput;
};
export type planUpdateOneWithoutCotizacionesNestedInput = {
    create?: Prisma.XOR<Prisma.planCreateWithoutCotizacionesInput, Prisma.planUncheckedCreateWithoutCotizacionesInput>;
    connectOrCreate?: Prisma.planCreateOrConnectWithoutCotizacionesInput;
    upsert?: Prisma.planUpsertWithoutCotizacionesInput;
    disconnect?: Prisma.planWhereInput | boolean;
    delete?: Prisma.planWhereInput | boolean;
    connect?: Prisma.planWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.planUpdateToOneWithWhereWithoutCotizacionesInput, Prisma.planUpdateWithoutCotizacionesInput>, Prisma.planUncheckedUpdateWithoutCotizacionesInput>;
};
export type planCreateWithoutEmpresaInput = {
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    contratos?: Prisma.contratoCreateNestedManyWithoutPlanInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutPlanInput;
};
export type planUncheckedCreateWithoutEmpresaInput = {
    id_plan?: number;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    contratos?: Prisma.contratoUncheckedCreateNestedManyWithoutPlanInput;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutPlanInput;
};
export type planCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.planWhereUniqueInput;
    create: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput>;
};
export type planCreateManyEmpresaInputEnvelope = {
    data: Prisma.planCreateManyEmpresaInput | Prisma.planCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type planUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.planWhereUniqueInput;
    update: Prisma.XOR<Prisma.planUpdateWithoutEmpresaInput, Prisma.planUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.planCreateWithoutEmpresaInput, Prisma.planUncheckedCreateWithoutEmpresaInput>;
};
export type planUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.planWhereUniqueInput;
    data: Prisma.XOR<Prisma.planUpdateWithoutEmpresaInput, Prisma.planUncheckedUpdateWithoutEmpresaInput>;
};
export type planUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.planScalarWhereInput;
    data: Prisma.XOR<Prisma.planUpdateManyMutationInput, Prisma.planUncheckedUpdateManyWithoutEmpresaInput>;
};
export type planScalarWhereInput = {
    AND?: Prisma.planScalarWhereInput | Prisma.planScalarWhereInput[];
    OR?: Prisma.planScalarWhereInput[];
    NOT?: Prisma.planScalarWhereInput | Prisma.planScalarWhereInput[];
    id_plan?: Prisma.IntFilter<"plan"> | number;
    id_empresa?: Prisma.IntNullableFilter<"plan"> | number | null;
    nombre_comercial?: Prisma.StringFilter<"plan"> | string;
    tipo_plan?: Prisma.StringFilter<"plan"> | string;
    tipo_cliente?: Prisma.StringFilter<"plan"> | string;
    velocidad_mbps?: Prisma.IntNullableFilter<"plan"> | number | null;
    precio_mensual?: Prisma.DecimalFilter<"plan"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.StringNullableFilter<"plan"> | string | null;
    activo?: Prisma.BoolFilter<"plan"> | boolean;
};
export type planCreateWithoutContratosInput = {
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutPlanesInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutPlanInput;
};
export type planUncheckedCreateWithoutContratosInput = {
    id_plan?: number;
    id_empresa?: number | null;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutPlanInput;
};
export type planCreateOrConnectWithoutContratosInput = {
    where: Prisma.planWhereUniqueInput;
    create: Prisma.XOR<Prisma.planCreateWithoutContratosInput, Prisma.planUncheckedCreateWithoutContratosInput>;
};
export type planUpsertWithoutContratosInput = {
    update: Prisma.XOR<Prisma.planUpdateWithoutContratosInput, Prisma.planUncheckedUpdateWithoutContratosInput>;
    create: Prisma.XOR<Prisma.planCreateWithoutContratosInput, Prisma.planUncheckedCreateWithoutContratosInput>;
    where?: Prisma.planWhereInput;
};
export type planUpdateToOneWithWhereWithoutContratosInput = {
    where?: Prisma.planWhereInput;
    data: Prisma.XOR<Prisma.planUpdateWithoutContratosInput, Prisma.planUncheckedUpdateWithoutContratosInput>;
};
export type planUpdateWithoutContratosInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutPlanesNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutPlanNestedInput;
};
export type planUncheckedUpdateWithoutContratosInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutPlanNestedInput;
};
export type planCreateWithoutCotizacionesInput = {
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutPlanesInput;
    contratos?: Prisma.contratoCreateNestedManyWithoutPlanInput;
};
export type planUncheckedCreateWithoutCotizacionesInput = {
    id_plan?: number;
    id_empresa?: number | null;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
    contratos?: Prisma.contratoUncheckedCreateNestedManyWithoutPlanInput;
};
export type planCreateOrConnectWithoutCotizacionesInput = {
    where: Prisma.planWhereUniqueInput;
    create: Prisma.XOR<Prisma.planCreateWithoutCotizacionesInput, Prisma.planUncheckedCreateWithoutCotizacionesInput>;
};
export type planUpsertWithoutCotizacionesInput = {
    update: Prisma.XOR<Prisma.planUpdateWithoutCotizacionesInput, Prisma.planUncheckedUpdateWithoutCotizacionesInput>;
    create: Prisma.XOR<Prisma.planCreateWithoutCotizacionesInput, Prisma.planUncheckedCreateWithoutCotizacionesInput>;
    where?: Prisma.planWhereInput;
};
export type planUpdateToOneWithWhereWithoutCotizacionesInput = {
    where?: Prisma.planWhereInput;
    data: Prisma.XOR<Prisma.planUpdateWithoutCotizacionesInput, Prisma.planUncheckedUpdateWithoutCotizacionesInput>;
};
export type planUpdateWithoutCotizacionesInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutPlanesNestedInput;
    contratos?: Prisma.contratoUpdateManyWithoutPlanNestedInput;
};
export type planUncheckedUpdateWithoutCotizacionesInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contratos?: Prisma.contratoUncheckedUpdateManyWithoutPlanNestedInput;
};
export type planCreateManyEmpresaInput = {
    id_plan?: number;
    nombre_comercial: string;
    tipo_plan: string;
    tipo_cliente: string;
    velocidad_mbps?: number | null;
    precio_mensual: runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: string | null;
    activo?: boolean;
};
export type planUpdateWithoutEmpresaInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contratos?: Prisma.contratoUpdateManyWithoutPlanNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutPlanNestedInput;
};
export type planUncheckedUpdateWithoutEmpresaInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    contratos?: Prisma.contratoUncheckedUpdateManyWithoutPlanNestedInput;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutPlanNestedInput;
};
export type planUncheckedUpdateManyWithoutEmpresaInput = {
    id_plan?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_plan?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_cliente?: Prisma.StringFieldUpdateOperationsInput | string;
    velocidad_mbps?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    precio_mensual?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type PlanCountOutputType = {
    contratos: number;
    cotizaciones: number;
};
export type PlanCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contratos?: boolean | PlanCountOutputTypeCountContratosArgs;
    cotizaciones?: boolean | PlanCountOutputTypeCountCotizacionesArgs;
};
export type PlanCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlanCountOutputTypeSelect<ExtArgs> | null;
};
export type PlanCountOutputTypeCountContratosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
};
export type PlanCountOutputTypeCountCotizacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cotizacionWhereInput;
};
export type planSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plan?: boolean;
    id_empresa?: boolean;
    nombre_comercial?: boolean;
    tipo_plan?: boolean;
    tipo_cliente?: boolean;
    velocidad_mbps?: boolean;
    precio_mensual?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
    contratos?: boolean | Prisma.plan$contratosArgs<ExtArgs>;
    cotizaciones?: boolean | Prisma.plan$cotizacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type planSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plan?: boolean;
    id_empresa?: boolean;
    nombre_comercial?: boolean;
    tipo_plan?: boolean;
    tipo_cliente?: boolean;
    velocidad_mbps?: boolean;
    precio_mensual?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type planSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plan?: boolean;
    id_empresa?: boolean;
    nombre_comercial?: boolean;
    tipo_plan?: boolean;
    tipo_cliente?: boolean;
    velocidad_mbps?: boolean;
    precio_mensual?: boolean;
    descripcion?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["plan"]>;
export type planSelectScalar = {
    id_plan?: boolean;
    id_empresa?: boolean;
    nombre_comercial?: boolean;
    tipo_plan?: boolean;
    tipo_cliente?: boolean;
    velocidad_mbps?: boolean;
    precio_mensual?: boolean;
    descripcion?: boolean;
    activo?: boolean;
};
export type planOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_plan" | "id_empresa" | "nombre_comercial" | "tipo_plan" | "tipo_cliente" | "velocidad_mbps" | "precio_mensual" | "descripcion" | "activo", ExtArgs["result"]["plan"]>;
export type planInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
    contratos?: boolean | Prisma.plan$contratosArgs<ExtArgs>;
    cotizaciones?: boolean | Prisma.plan$cotizacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.PlanCountOutputTypeDefaultArgs<ExtArgs>;
};
export type planIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
};
export type planIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.plan$empresaArgs<ExtArgs>;
};
export type $planPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "plan";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        contratos: Prisma.$contratoPayload<ExtArgs>[];
        cotizaciones: Prisma.$cotizacionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_plan: number;
        id_empresa: number | null;
        nombre_comercial: string;
        tipo_plan: string;
        tipo_cliente: string;
        velocidad_mbps: number | null;
        precio_mensual: runtime.Decimal;
        descripcion: string | null;
        activo: boolean;
    }, ExtArgs["result"]["plan"]>;
    composites: {};
};
export type planGetPayload<S extends boolean | null | undefined | planDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$planPayload, S>;
export type planCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<planFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlanCountAggregateInputType | true;
};
export interface planDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['plan'];
        meta: {
            name: 'plan';
        };
    };
    findUnique<T extends planFindUniqueArgs>(args: Prisma.SelectSubset<T, planFindUniqueArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends planFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, planFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends planFindFirstArgs>(args?: Prisma.SelectSubset<T, planFindFirstArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends planFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, planFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends planFindManyArgs>(args?: Prisma.SelectSubset<T, planFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends planCreateArgs>(args: Prisma.SelectSubset<T, planCreateArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends planCreateManyArgs>(args?: Prisma.SelectSubset<T, planCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends planCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, planCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends planDeleteArgs>(args: Prisma.SelectSubset<T, planDeleteArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends planUpdateArgs>(args: Prisma.SelectSubset<T, planUpdateArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends planDeleteManyArgs>(args?: Prisma.SelectSubset<T, planDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends planUpdateManyArgs>(args: Prisma.SelectSubset<T, planUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends planUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, planUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends planUpsertArgs>(args: Prisma.SelectSubset<T, planUpsertArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends planCountArgs>(args?: Prisma.Subset<T, planCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlanCountAggregateOutputType> : number>;
    aggregate<T extends PlanAggregateArgs>(args: Prisma.Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>;
    groupBy<T extends planGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: planGroupByArgs['orderBy'];
    } : {
        orderBy?: planGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, planGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: planFieldRefs;
}
export interface Prisma__planClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.plan$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plan$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    contratos<T extends Prisma.plan$contratosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plan$contratosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cotizaciones<T extends Prisma.plan$cotizacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plan$cotizacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface planFieldRefs {
    readonly id_plan: Prisma.FieldRef<"plan", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"plan", 'Int'>;
    readonly nombre_comercial: Prisma.FieldRef<"plan", 'String'>;
    readonly tipo_plan: Prisma.FieldRef<"plan", 'String'>;
    readonly tipo_cliente: Prisma.FieldRef<"plan", 'String'>;
    readonly velocidad_mbps: Prisma.FieldRef<"plan", 'Int'>;
    readonly precio_mensual: Prisma.FieldRef<"plan", 'Decimal'>;
    readonly descripcion: Prisma.FieldRef<"plan", 'String'>;
    readonly activo: Prisma.FieldRef<"plan", 'Boolean'>;
}
export type planFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where: Prisma.planWhereUniqueInput;
};
export type planFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where: Prisma.planWhereUniqueInput;
};
export type planFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where?: Prisma.planWhereInput;
    orderBy?: Prisma.planOrderByWithRelationInput | Prisma.planOrderByWithRelationInput[];
    cursor?: Prisma.planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
export type planFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where?: Prisma.planWhereInput;
    orderBy?: Prisma.planOrderByWithRelationInput | Prisma.planOrderByWithRelationInput[];
    cursor?: Prisma.planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
export type planFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where?: Prisma.planWhereInput;
    orderBy?: Prisma.planOrderByWithRelationInput | Prisma.planOrderByWithRelationInput[];
    cursor?: Prisma.planWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlanScalarFieldEnum | Prisma.PlanScalarFieldEnum[];
};
export type planCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.planCreateInput, Prisma.planUncheckedCreateInput>;
};
export type planCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.planCreateManyInput | Prisma.planCreateManyInput[];
    skipDuplicates?: boolean;
};
export type planCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    data: Prisma.planCreateManyInput | Prisma.planCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.planIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type planUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.planUpdateInput, Prisma.planUncheckedUpdateInput>;
    where: Prisma.planWhereUniqueInput;
};
export type planUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.planUpdateManyMutationInput, Prisma.planUncheckedUpdateManyInput>;
    where?: Prisma.planWhereInput;
    limit?: number;
};
export type planUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.planUpdateManyMutationInput, Prisma.planUncheckedUpdateManyInput>;
    where?: Prisma.planWhereInput;
    limit?: number;
    include?: Prisma.planIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type planUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where: Prisma.planWhereUniqueInput;
    create: Prisma.XOR<Prisma.planCreateInput, Prisma.planUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.planUpdateInput, Prisma.planUncheckedUpdateInput>;
};
export type planDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where: Prisma.planWhereUniqueInput;
};
export type planDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.planWhereInput;
    limit?: number;
};
export type plan$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type plan$contratosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
export type plan$cotizacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where?: Prisma.cotizacionWhereInput;
    orderBy?: Prisma.cotizacionOrderByWithRelationInput | Prisma.cotizacionOrderByWithRelationInput[];
    cursor?: Prisma.cotizacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CotizacionScalarFieldEnum | Prisma.CotizacionScalarFieldEnum[];
};
export type planDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
};
