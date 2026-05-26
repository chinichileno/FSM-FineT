import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cotizacionModel = runtime.Types.Result.DefaultSelection<Prisma.$cotizacionPayload>;
export type AggregateCotizacion = {
    _count: CotizacionCountAggregateOutputType | null;
    _avg: CotizacionAvgAggregateOutputType | null;
    _sum: CotizacionSumAggregateOutputType | null;
    _min: CotizacionMinAggregateOutputType | null;
    _max: CotizacionMaxAggregateOutputType | null;
};
export type CotizacionAvgAggregateOutputType = {
    id_cotizacion: number | null;
    id_prospecto: number | null;
    id_plan: number | null;
};
export type CotizacionSumAggregateOutputType = {
    id_cotizacion: number | null;
    id_prospecto: number | null;
    id_plan: number | null;
};
export type CotizacionMinAggregateOutputType = {
    id_cotizacion: number | null;
    id_prospecto: number | null;
    id_plan: number | null;
    pdf_url: string | null;
    fecha_envio: Date | null;
    factibilidad_verificada: boolean | null;
};
export type CotizacionMaxAggregateOutputType = {
    id_cotizacion: number | null;
    id_prospecto: number | null;
    id_plan: number | null;
    pdf_url: string | null;
    fecha_envio: Date | null;
    factibilidad_verificada: boolean | null;
};
export type CotizacionCountAggregateOutputType = {
    id_cotizacion: number;
    id_prospecto: number;
    id_plan: number;
    pdf_url: number;
    fecha_envio: number;
    factibilidad_verificada: number;
    _all: number;
};
export type CotizacionAvgAggregateInputType = {
    id_cotizacion?: true;
    id_prospecto?: true;
    id_plan?: true;
};
export type CotizacionSumAggregateInputType = {
    id_cotizacion?: true;
    id_prospecto?: true;
    id_plan?: true;
};
export type CotizacionMinAggregateInputType = {
    id_cotizacion?: true;
    id_prospecto?: true;
    id_plan?: true;
    pdf_url?: true;
    fecha_envio?: true;
    factibilidad_verificada?: true;
};
export type CotizacionMaxAggregateInputType = {
    id_cotizacion?: true;
    id_prospecto?: true;
    id_plan?: true;
    pdf_url?: true;
    fecha_envio?: true;
    factibilidad_verificada?: true;
};
export type CotizacionCountAggregateInputType = {
    id_cotizacion?: true;
    id_prospecto?: true;
    id_plan?: true;
    pdf_url?: true;
    fecha_envio?: true;
    factibilidad_verificada?: true;
    _all?: true;
};
export type CotizacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cotizacionWhereInput;
    orderBy?: Prisma.cotizacionOrderByWithRelationInput | Prisma.cotizacionOrderByWithRelationInput[];
    cursor?: Prisma.cotizacionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CotizacionCountAggregateInputType;
    _avg?: CotizacionAvgAggregateInputType;
    _sum?: CotizacionSumAggregateInputType;
    _min?: CotizacionMinAggregateInputType;
    _max?: CotizacionMaxAggregateInputType;
};
export type GetCotizacionAggregateType<T extends CotizacionAggregateArgs> = {
    [P in keyof T & keyof AggregateCotizacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCotizacion[P]> : Prisma.GetScalarType<T[P], AggregateCotizacion[P]>;
};
export type cotizacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cotizacionWhereInput;
    orderBy?: Prisma.cotizacionOrderByWithAggregationInput | Prisma.cotizacionOrderByWithAggregationInput[];
    by: Prisma.CotizacionScalarFieldEnum[] | Prisma.CotizacionScalarFieldEnum;
    having?: Prisma.cotizacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CotizacionCountAggregateInputType | true;
    _avg?: CotizacionAvgAggregateInputType;
    _sum?: CotizacionSumAggregateInputType;
    _min?: CotizacionMinAggregateInputType;
    _max?: CotizacionMaxAggregateInputType;
};
export type CotizacionGroupByOutputType = {
    id_cotizacion: number;
    id_prospecto: number | null;
    id_plan: number | null;
    pdf_url: string | null;
    fecha_envio: Date | null;
    factibilidad_verificada: boolean;
    _count: CotizacionCountAggregateOutputType | null;
    _avg: CotizacionAvgAggregateOutputType | null;
    _sum: CotizacionSumAggregateOutputType | null;
    _min: CotizacionMinAggregateOutputType | null;
    _max: CotizacionMaxAggregateOutputType | null;
};
export type GetCotizacionGroupByPayload<T extends cotizacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CotizacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CotizacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CotizacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CotizacionGroupByOutputType[P]>;
}>>;
export type cotizacionWhereInput = {
    AND?: Prisma.cotizacionWhereInput | Prisma.cotizacionWhereInput[];
    OR?: Prisma.cotizacionWhereInput[];
    NOT?: Prisma.cotizacionWhereInput | Prisma.cotizacionWhereInput[];
    id_cotizacion?: Prisma.IntFilter<"cotizacion"> | number;
    id_prospecto?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    pdf_url?: Prisma.StringNullableFilter<"cotizacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"cotizacion"> | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFilter<"cotizacion"> | boolean;
    prospecto?: Prisma.XOR<Prisma.ProspectoNullableScalarRelationFilter, Prisma.prospectoWhereInput> | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.planWhereInput> | null;
};
export type cotizacionOrderByWithRelationInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plan?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    factibilidad_verificada?: Prisma.SortOrder;
    prospecto?: Prisma.prospectoOrderByWithRelationInput;
    plan?: Prisma.planOrderByWithRelationInput;
};
export type cotizacionWhereUniqueInput = Prisma.AtLeast<{
    id_cotizacion?: number;
    AND?: Prisma.cotizacionWhereInput | Prisma.cotizacionWhereInput[];
    OR?: Prisma.cotizacionWhereInput[];
    NOT?: Prisma.cotizacionWhereInput | Prisma.cotizacionWhereInput[];
    id_prospecto?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    pdf_url?: Prisma.StringNullableFilter<"cotizacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"cotizacion"> | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFilter<"cotizacion"> | boolean;
    prospecto?: Prisma.XOR<Prisma.ProspectoNullableScalarRelationFilter, Prisma.prospectoWhereInput> | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.planWhereInput> | null;
}, "id_cotizacion">;
export type cotizacionOrderByWithAggregationInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plan?: Prisma.SortOrderInput | Prisma.SortOrder;
    pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    factibilidad_verificada?: Prisma.SortOrder;
    _count?: Prisma.cotizacionCountOrderByAggregateInput;
    _avg?: Prisma.cotizacionAvgOrderByAggregateInput;
    _max?: Prisma.cotizacionMaxOrderByAggregateInput;
    _min?: Prisma.cotizacionMinOrderByAggregateInput;
    _sum?: Prisma.cotizacionSumOrderByAggregateInput;
};
export type cotizacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.cotizacionScalarWhereWithAggregatesInput | Prisma.cotizacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.cotizacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cotizacionScalarWhereWithAggregatesInput | Prisma.cotizacionScalarWhereWithAggregatesInput[];
    id_cotizacion?: Prisma.IntWithAggregatesFilter<"cotizacion"> | number;
    id_prospecto?: Prisma.IntNullableWithAggregatesFilter<"cotizacion"> | number | null;
    id_plan?: Prisma.IntNullableWithAggregatesFilter<"cotizacion"> | number | null;
    pdf_url?: Prisma.StringNullableWithAggregatesFilter<"cotizacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableWithAggregatesFilter<"cotizacion"> | Date | string | null;
    factibilidad_verificada?: Prisma.BoolWithAggregatesFilter<"cotizacion"> | boolean;
};
export type cotizacionCreateInput = {
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
    prospecto?: Prisma.prospectoCreateNestedOneWithoutCotizacionesInput;
    plan?: Prisma.planCreateNestedOneWithoutCotizacionesInput;
};
export type cotizacionUncheckedCreateInput = {
    id_cotizacion?: number;
    id_prospecto?: number | null;
    id_plan?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionUpdateInput = {
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prospecto?: Prisma.prospectoUpdateOneWithoutCotizacionesNestedInput;
    plan?: Prisma.planUpdateOneWithoutCotizacionesNestedInput;
};
export type cotizacionUncheckedUpdateInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_prospecto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionCreateManyInput = {
    id_cotizacion?: number;
    id_prospecto?: number | null;
    id_plan?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionUpdateManyMutationInput = {
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionUncheckedUpdateManyInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_prospecto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type CotizacionListRelationFilter = {
    every?: Prisma.cotizacionWhereInput;
    some?: Prisma.cotizacionWhereInput;
    none?: Prisma.cotizacionWhereInput;
};
export type cotizacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type cotizacionCountOrderByAggregateInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    pdf_url?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    factibilidad_verificada?: Prisma.SortOrder;
};
export type cotizacionAvgOrderByAggregateInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
};
export type cotizacionMaxOrderByAggregateInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    pdf_url?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    factibilidad_verificada?: Prisma.SortOrder;
};
export type cotizacionMinOrderByAggregateInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    pdf_url?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    factibilidad_verificada?: Prisma.SortOrder;
};
export type cotizacionSumOrderByAggregateInput = {
    id_cotizacion?: Prisma.SortOrder;
    id_prospecto?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
};
export type cotizacionCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput> | Prisma.cotizacionCreateWithoutPlanInput[] | Prisma.cotizacionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutPlanInput | Prisma.cotizacionCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.cotizacionCreateManyPlanInputEnvelope;
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
};
export type cotizacionUncheckedCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput> | Prisma.cotizacionCreateWithoutPlanInput[] | Prisma.cotizacionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutPlanInput | Prisma.cotizacionCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.cotizacionCreateManyPlanInputEnvelope;
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
};
export type cotizacionUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput> | Prisma.cotizacionCreateWithoutPlanInput[] | Prisma.cotizacionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutPlanInput | Prisma.cotizacionCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.cotizacionUpsertWithWhereUniqueWithoutPlanInput | Prisma.cotizacionUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.cotizacionCreateManyPlanInputEnvelope;
    set?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    disconnect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    delete?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    update?: Prisma.cotizacionUpdateWithWhereUniqueWithoutPlanInput | Prisma.cotizacionUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.cotizacionUpdateManyWithWhereWithoutPlanInput | Prisma.cotizacionUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
};
export type cotizacionUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput> | Prisma.cotizacionCreateWithoutPlanInput[] | Prisma.cotizacionUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutPlanInput | Prisma.cotizacionCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.cotizacionUpsertWithWhereUniqueWithoutPlanInput | Prisma.cotizacionUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.cotizacionCreateManyPlanInputEnvelope;
    set?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    disconnect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    delete?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    update?: Prisma.cotizacionUpdateWithWhereUniqueWithoutPlanInput | Prisma.cotizacionUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.cotizacionUpdateManyWithWhereWithoutPlanInput | Prisma.cotizacionUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
};
export type cotizacionCreateNestedManyWithoutProspectoInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput> | Prisma.cotizacionCreateWithoutProspectoInput[] | Prisma.cotizacionUncheckedCreateWithoutProspectoInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutProspectoInput | Prisma.cotizacionCreateOrConnectWithoutProspectoInput[];
    createMany?: Prisma.cotizacionCreateManyProspectoInputEnvelope;
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
};
export type cotizacionUncheckedCreateNestedManyWithoutProspectoInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput> | Prisma.cotizacionCreateWithoutProspectoInput[] | Prisma.cotizacionUncheckedCreateWithoutProspectoInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutProspectoInput | Prisma.cotizacionCreateOrConnectWithoutProspectoInput[];
    createMany?: Prisma.cotizacionCreateManyProspectoInputEnvelope;
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
};
export type cotizacionUpdateManyWithoutProspectoNestedInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput> | Prisma.cotizacionCreateWithoutProspectoInput[] | Prisma.cotizacionUncheckedCreateWithoutProspectoInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutProspectoInput | Prisma.cotizacionCreateOrConnectWithoutProspectoInput[];
    upsert?: Prisma.cotizacionUpsertWithWhereUniqueWithoutProspectoInput | Prisma.cotizacionUpsertWithWhereUniqueWithoutProspectoInput[];
    createMany?: Prisma.cotizacionCreateManyProspectoInputEnvelope;
    set?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    disconnect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    delete?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    update?: Prisma.cotizacionUpdateWithWhereUniqueWithoutProspectoInput | Prisma.cotizacionUpdateWithWhereUniqueWithoutProspectoInput[];
    updateMany?: Prisma.cotizacionUpdateManyWithWhereWithoutProspectoInput | Prisma.cotizacionUpdateManyWithWhereWithoutProspectoInput[];
    deleteMany?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
};
export type cotizacionUncheckedUpdateManyWithoutProspectoNestedInput = {
    create?: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput> | Prisma.cotizacionCreateWithoutProspectoInput[] | Prisma.cotizacionUncheckedCreateWithoutProspectoInput[];
    connectOrCreate?: Prisma.cotizacionCreateOrConnectWithoutProspectoInput | Prisma.cotizacionCreateOrConnectWithoutProspectoInput[];
    upsert?: Prisma.cotizacionUpsertWithWhereUniqueWithoutProspectoInput | Prisma.cotizacionUpsertWithWhereUniqueWithoutProspectoInput[];
    createMany?: Prisma.cotizacionCreateManyProspectoInputEnvelope;
    set?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    disconnect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    delete?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    connect?: Prisma.cotizacionWhereUniqueInput | Prisma.cotizacionWhereUniqueInput[];
    update?: Prisma.cotizacionUpdateWithWhereUniqueWithoutProspectoInput | Prisma.cotizacionUpdateWithWhereUniqueWithoutProspectoInput[];
    updateMany?: Prisma.cotizacionUpdateManyWithWhereWithoutProspectoInput | Prisma.cotizacionUpdateManyWithWhereWithoutProspectoInput[];
    deleteMany?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
};
export type cotizacionCreateWithoutPlanInput = {
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
    prospecto?: Prisma.prospectoCreateNestedOneWithoutCotizacionesInput;
};
export type cotizacionUncheckedCreateWithoutPlanInput = {
    id_cotizacion?: number;
    id_prospecto?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionCreateOrConnectWithoutPlanInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput>;
};
export type cotizacionCreateManyPlanInputEnvelope = {
    data: Prisma.cotizacionCreateManyPlanInput | Prisma.cotizacionCreateManyPlanInput[];
    skipDuplicates?: boolean;
};
export type cotizacionUpsertWithWhereUniqueWithoutPlanInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.cotizacionUpdateWithoutPlanInput, Prisma.cotizacionUncheckedUpdateWithoutPlanInput>;
    create: Prisma.XOR<Prisma.cotizacionCreateWithoutPlanInput, Prisma.cotizacionUncheckedCreateWithoutPlanInput>;
};
export type cotizacionUpdateWithWhereUniqueWithoutPlanInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.cotizacionUpdateWithoutPlanInput, Prisma.cotizacionUncheckedUpdateWithoutPlanInput>;
};
export type cotizacionUpdateManyWithWhereWithoutPlanInput = {
    where: Prisma.cotizacionScalarWhereInput;
    data: Prisma.XOR<Prisma.cotizacionUpdateManyMutationInput, Prisma.cotizacionUncheckedUpdateManyWithoutPlanInput>;
};
export type cotizacionScalarWhereInput = {
    AND?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
    OR?: Prisma.cotizacionScalarWhereInput[];
    NOT?: Prisma.cotizacionScalarWhereInput | Prisma.cotizacionScalarWhereInput[];
    id_cotizacion?: Prisma.IntFilter<"cotizacion"> | number;
    id_prospecto?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"cotizacion"> | number | null;
    pdf_url?: Prisma.StringNullableFilter<"cotizacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"cotizacion"> | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFilter<"cotizacion"> | boolean;
};
export type cotizacionCreateWithoutProspectoInput = {
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
    plan?: Prisma.planCreateNestedOneWithoutCotizacionesInput;
};
export type cotizacionUncheckedCreateWithoutProspectoInput = {
    id_cotizacion?: number;
    id_plan?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionCreateOrConnectWithoutProspectoInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput>;
};
export type cotizacionCreateManyProspectoInputEnvelope = {
    data: Prisma.cotizacionCreateManyProspectoInput | Prisma.cotizacionCreateManyProspectoInput[];
    skipDuplicates?: boolean;
};
export type cotizacionUpsertWithWhereUniqueWithoutProspectoInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.cotizacionUpdateWithoutProspectoInput, Prisma.cotizacionUncheckedUpdateWithoutProspectoInput>;
    create: Prisma.XOR<Prisma.cotizacionCreateWithoutProspectoInput, Prisma.cotizacionUncheckedCreateWithoutProspectoInput>;
};
export type cotizacionUpdateWithWhereUniqueWithoutProspectoInput = {
    where: Prisma.cotizacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.cotizacionUpdateWithoutProspectoInput, Prisma.cotizacionUncheckedUpdateWithoutProspectoInput>;
};
export type cotizacionUpdateManyWithWhereWithoutProspectoInput = {
    where: Prisma.cotizacionScalarWhereInput;
    data: Prisma.XOR<Prisma.cotizacionUpdateManyMutationInput, Prisma.cotizacionUncheckedUpdateManyWithoutProspectoInput>;
};
export type cotizacionCreateManyPlanInput = {
    id_cotizacion?: number;
    id_prospecto?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionUpdateWithoutPlanInput = {
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    prospecto?: Prisma.prospectoUpdateOneWithoutCotizacionesNestedInput;
};
export type cotizacionUncheckedUpdateWithoutPlanInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_prospecto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionUncheckedUpdateManyWithoutPlanInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_prospecto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionCreateManyProspectoInput = {
    id_cotizacion?: number;
    id_plan?: number | null;
    pdf_url?: string | null;
    fecha_envio?: Date | string | null;
    factibilidad_verificada?: boolean;
};
export type cotizacionUpdateWithoutProspectoInput = {
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plan?: Prisma.planUpdateOneWithoutCotizacionesNestedInput;
};
export type cotizacionUncheckedUpdateWithoutProspectoInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionUncheckedUpdateManyWithoutProspectoInput = {
    id_cotizacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    factibilidad_verificada?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type cotizacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cotizacion?: boolean;
    id_prospecto?: boolean;
    id_plan?: boolean;
    pdf_url?: boolean;
    fecha_envio?: boolean;
    factibilidad_verificada?: boolean;
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
}, ExtArgs["result"]["cotizacion"]>;
export type cotizacionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cotizacion?: boolean;
    id_prospecto?: boolean;
    id_plan?: boolean;
    pdf_url?: boolean;
    fecha_envio?: boolean;
    factibilidad_verificada?: boolean;
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
}, ExtArgs["result"]["cotizacion"]>;
export type cotizacionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_cotizacion?: boolean;
    id_prospecto?: boolean;
    id_plan?: boolean;
    pdf_url?: boolean;
    fecha_envio?: boolean;
    factibilidad_verificada?: boolean;
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
}, ExtArgs["result"]["cotizacion"]>;
export type cotizacionSelectScalar = {
    id_cotizacion?: boolean;
    id_prospecto?: boolean;
    id_plan?: boolean;
    pdf_url?: boolean;
    fecha_envio?: boolean;
    factibilidad_verificada?: boolean;
};
export type cotizacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_cotizacion" | "id_prospecto" | "id_plan" | "pdf_url" | "fecha_envio" | "factibilidad_verificada", ExtArgs["result"]["cotizacion"]>;
export type cotizacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
};
export type cotizacionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
};
export type cotizacionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    prospecto?: boolean | Prisma.cotizacion$prospectoArgs<ExtArgs>;
    plan?: boolean | Prisma.cotizacion$planArgs<ExtArgs>;
};
export type $cotizacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "cotizacion";
    objects: {
        prospecto: Prisma.$prospectoPayload<ExtArgs> | null;
        plan: Prisma.$planPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_cotizacion: number;
        id_prospecto: number | null;
        id_plan: number | null;
        pdf_url: string | null;
        fecha_envio: Date | null;
        factibilidad_verificada: boolean;
    }, ExtArgs["result"]["cotizacion"]>;
    composites: {};
};
export type cotizacionGetPayload<S extends boolean | null | undefined | cotizacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cotizacionPayload, S>;
export type cotizacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cotizacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CotizacionCountAggregateInputType | true;
};
export interface cotizacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['cotizacion'];
        meta: {
            name: 'cotizacion';
        };
    };
    findUnique<T extends cotizacionFindUniqueArgs>(args: Prisma.SelectSubset<T, cotizacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cotizacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cotizacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cotizacionFindFirstArgs>(args?: Prisma.SelectSubset<T, cotizacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cotizacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cotizacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cotizacionFindManyArgs>(args?: Prisma.SelectSubset<T, cotizacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cotizacionCreateArgs>(args: Prisma.SelectSubset<T, cotizacionCreateArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cotizacionCreateManyArgs>(args?: Prisma.SelectSubset<T, cotizacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cotizacionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cotizacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cotizacionDeleteArgs>(args: Prisma.SelectSubset<T, cotizacionDeleteArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cotizacionUpdateArgs>(args: Prisma.SelectSubset<T, cotizacionUpdateArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cotizacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, cotizacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cotizacionUpdateManyArgs>(args: Prisma.SelectSubset<T, cotizacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cotizacionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cotizacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cotizacionUpsertArgs>(args: Prisma.SelectSubset<T, cotizacionUpsertArgs<ExtArgs>>): Prisma.Prisma__cotizacionClient<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cotizacionCountArgs>(args?: Prisma.Subset<T, cotizacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CotizacionCountAggregateOutputType> : number>;
    aggregate<T extends CotizacionAggregateArgs>(args: Prisma.Subset<T, CotizacionAggregateArgs>): Prisma.PrismaPromise<GetCotizacionAggregateType<T>>;
    groupBy<T extends cotizacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cotizacionGroupByArgs['orderBy'];
    } : {
        orderBy?: cotizacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cotizacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCotizacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cotizacionFieldRefs;
}
export interface Prisma__cotizacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    prospecto<T extends Prisma.cotizacion$prospectoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cotizacion$prospectoArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plan<T extends Prisma.cotizacion$planArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.cotizacion$planArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cotizacionFieldRefs {
    readonly id_cotizacion: Prisma.FieldRef<"cotizacion", 'Int'>;
    readonly id_prospecto: Prisma.FieldRef<"cotizacion", 'Int'>;
    readonly id_plan: Prisma.FieldRef<"cotizacion", 'Int'>;
    readonly pdf_url: Prisma.FieldRef<"cotizacion", 'String'>;
    readonly fecha_envio: Prisma.FieldRef<"cotizacion", 'DateTime'>;
    readonly factibilidad_verificada: Prisma.FieldRef<"cotizacion", 'Boolean'>;
}
export type cotizacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where: Prisma.cotizacionWhereUniqueInput;
};
export type cotizacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where: Prisma.cotizacionWhereUniqueInput;
};
export type cotizacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cotizacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cotizacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type cotizacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.cotizacionCreateInput, Prisma.cotizacionUncheckedCreateInput>;
};
export type cotizacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cotizacionCreateManyInput | Prisma.cotizacionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cotizacionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    data: Prisma.cotizacionCreateManyInput | Prisma.cotizacionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cotizacionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cotizacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cotizacionUpdateInput, Prisma.cotizacionUncheckedUpdateInput>;
    where: Prisma.cotizacionWhereUniqueInput;
};
export type cotizacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cotizacionUpdateManyMutationInput, Prisma.cotizacionUncheckedUpdateManyInput>;
    where?: Prisma.cotizacionWhereInput;
    limit?: number;
};
export type cotizacionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cotizacionUpdateManyMutationInput, Prisma.cotizacionUncheckedUpdateManyInput>;
    where?: Prisma.cotizacionWhereInput;
    limit?: number;
    include?: Prisma.cotizacionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cotizacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where: Prisma.cotizacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.cotizacionCreateInput, Prisma.cotizacionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cotizacionUpdateInput, Prisma.cotizacionUncheckedUpdateInput>;
};
export type cotizacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where: Prisma.cotizacionWhereUniqueInput;
};
export type cotizacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cotizacionWhereInput;
    limit?: number;
};
export type cotizacion$prospectoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where?: Prisma.prospectoWhereInput;
};
export type cotizacion$planArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where?: Prisma.planWhereInput;
};
export type cotizacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
};
