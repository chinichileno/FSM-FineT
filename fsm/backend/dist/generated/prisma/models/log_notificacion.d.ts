import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type log_notificacionModel = runtime.Types.Result.DefaultSelection<Prisma.$log_notificacionPayload>;
export type AggregateLog_notificacion = {
    _count: Log_notificacionCountAggregateOutputType | null;
    _avg: Log_notificacionAvgAggregateOutputType | null;
    _sum: Log_notificacionSumAggregateOutputType | null;
    _min: Log_notificacionMinAggregateOutputType | null;
    _max: Log_notificacionMaxAggregateOutputType | null;
};
export type Log_notificacionAvgAggregateOutputType = {
    id_notificacion: number | null;
    id_cliente: number | null;
    id_plantilla: number | null;
};
export type Log_notificacionSumAggregateOutputType = {
    id_notificacion: bigint | null;
    id_cliente: number | null;
    id_plantilla: number | null;
};
export type Log_notificacionMinAggregateOutputType = {
    id_notificacion: bigint | null;
    id_cliente: number | null;
    id_plantilla: number | null;
    canal: string | null;
    fecha_envio: Date | null;
    estado_envio: string | null;
};
export type Log_notificacionMaxAggregateOutputType = {
    id_notificacion: bigint | null;
    id_cliente: number | null;
    id_plantilla: number | null;
    canal: string | null;
    fecha_envio: Date | null;
    estado_envio: string | null;
};
export type Log_notificacionCountAggregateOutputType = {
    id_notificacion: number;
    id_cliente: number;
    id_plantilla: number;
    canal: number;
    fecha_envio: number;
    estado_envio: number;
    _all: number;
};
export type Log_notificacionAvgAggregateInputType = {
    id_notificacion?: true;
    id_cliente?: true;
    id_plantilla?: true;
};
export type Log_notificacionSumAggregateInputType = {
    id_notificacion?: true;
    id_cliente?: true;
    id_plantilla?: true;
};
export type Log_notificacionMinAggregateInputType = {
    id_notificacion?: true;
    id_cliente?: true;
    id_plantilla?: true;
    canal?: true;
    fecha_envio?: true;
    estado_envio?: true;
};
export type Log_notificacionMaxAggregateInputType = {
    id_notificacion?: true;
    id_cliente?: true;
    id_plantilla?: true;
    canal?: true;
    fecha_envio?: true;
    estado_envio?: true;
};
export type Log_notificacionCountAggregateInputType = {
    id_notificacion?: true;
    id_cliente?: true;
    id_plantilla?: true;
    canal?: true;
    fecha_envio?: true;
    estado_envio?: true;
    _all?: true;
};
export type Log_notificacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithRelationInput | Prisma.log_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.log_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Log_notificacionCountAggregateInputType;
    _avg?: Log_notificacionAvgAggregateInputType;
    _sum?: Log_notificacionSumAggregateInputType;
    _min?: Log_notificacionMinAggregateInputType;
    _max?: Log_notificacionMaxAggregateInputType;
};
export type GetLog_notificacionAggregateType<T extends Log_notificacionAggregateArgs> = {
    [P in keyof T & keyof AggregateLog_notificacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLog_notificacion[P]> : Prisma.GetScalarType<T[P], AggregateLog_notificacion[P]>;
};
export type log_notificacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithAggregationInput | Prisma.log_notificacionOrderByWithAggregationInput[];
    by: Prisma.Log_notificacionScalarFieldEnum[] | Prisma.Log_notificacionScalarFieldEnum;
    having?: Prisma.log_notificacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Log_notificacionCountAggregateInputType | true;
    _avg?: Log_notificacionAvgAggregateInputType;
    _sum?: Log_notificacionSumAggregateInputType;
    _min?: Log_notificacionMinAggregateInputType;
    _max?: Log_notificacionMaxAggregateInputType;
};
export type Log_notificacionGroupByOutputType = {
    id_notificacion: bigint;
    id_cliente: number | null;
    id_plantilla: number | null;
    canal: string | null;
    fecha_envio: Date | null;
    estado_envio: string | null;
    _count: Log_notificacionCountAggregateOutputType | null;
    _avg: Log_notificacionAvgAggregateOutputType | null;
    _sum: Log_notificacionSumAggregateOutputType | null;
    _min: Log_notificacionMinAggregateOutputType | null;
    _max: Log_notificacionMaxAggregateOutputType | null;
};
export type GetLog_notificacionGroupByPayload<T extends log_notificacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Log_notificacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Log_notificacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Log_notificacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Log_notificacionGroupByOutputType[P]>;
}>>;
export type log_notificacionWhereInput = {
    AND?: Prisma.log_notificacionWhereInput | Prisma.log_notificacionWhereInput[];
    OR?: Prisma.log_notificacionWhereInput[];
    NOT?: Prisma.log_notificacionWhereInput | Prisma.log_notificacionWhereInput[];
    id_notificacion?: Prisma.BigIntFilter<"log_notificacion"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    id_plantilla?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    canal?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"log_notificacion"> | Date | string | null;
    estado_envio?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plantilla?: Prisma.XOR<Prisma.Plantilla_notificacionNullableScalarRelationFilter, Prisma.plantilla_notificacionWhereInput> | null;
};
export type log_notificacionOrderByWithRelationInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    plantilla?: Prisma.plantilla_notificacionOrderByWithRelationInput;
};
export type log_notificacionWhereUniqueInput = Prisma.AtLeast<{
    id_notificacion?: bigint | number;
    AND?: Prisma.log_notificacionWhereInput | Prisma.log_notificacionWhereInput[];
    OR?: Prisma.log_notificacionWhereInput[];
    NOT?: Prisma.log_notificacionWhereInput | Prisma.log_notificacionWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    id_plantilla?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    canal?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"log_notificacion"> | Date | string | null;
    estado_envio?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plantilla?: Prisma.XOR<Prisma.Plantilla_notificacionNullableScalarRelationFilter, Prisma.plantilla_notificacionWhereInput> | null;
}, "id_notificacion">;
export type log_notificacionOrderByWithAggregationInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_envio?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.log_notificacionCountOrderByAggregateInput;
    _avg?: Prisma.log_notificacionAvgOrderByAggregateInput;
    _max?: Prisma.log_notificacionMaxOrderByAggregateInput;
    _min?: Prisma.log_notificacionMinOrderByAggregateInput;
    _sum?: Prisma.log_notificacionSumOrderByAggregateInput;
};
export type log_notificacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.log_notificacionScalarWhereWithAggregatesInput | Prisma.log_notificacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.log_notificacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.log_notificacionScalarWhereWithAggregatesInput | Prisma.log_notificacionScalarWhereWithAggregatesInput[];
    id_notificacion?: Prisma.BigIntWithAggregatesFilter<"log_notificacion"> | bigint | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"log_notificacion"> | number | null;
    id_plantilla?: Prisma.IntNullableWithAggregatesFilter<"log_notificacion"> | number | null;
    canal?: Prisma.StringNullableWithAggregatesFilter<"log_notificacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableWithAggregatesFilter<"log_notificacion"> | Date | string | null;
    estado_envio?: Prisma.StringNullableWithAggregatesFilter<"log_notificacion"> | string | null;
};
export type log_notificacionCreateInput = {
    id_notificacion?: bigint | number;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutLog_notificacionInput;
    plantilla?: Prisma.plantilla_notificacionCreateNestedOneWithoutNotificacionesInput;
};
export type log_notificacionUncheckedCreateInput = {
    id_notificacion?: bigint | number;
    id_cliente?: number | null;
    id_plantilla?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionUpdateInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutLog_notificacionNestedInput;
    plantilla?: Prisma.plantilla_notificacionUpdateOneWithoutNotificacionesNestedInput;
};
export type log_notificacionUncheckedUpdateInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionCreateManyInput = {
    id_notificacion?: bigint | number;
    id_cliente?: number | null;
    id_plantilla?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionUpdateManyMutationInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionUncheckedUpdateManyInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Log_notificacionListRelationFilter = {
    every?: Prisma.log_notificacionWhereInput;
    some?: Prisma.log_notificacionWhereInput;
    none?: Prisma.log_notificacionWhereInput;
};
export type log_notificacionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type log_notificacionCountOrderByAggregateInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
};
export type log_notificacionAvgOrderByAggregateInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrder;
};
export type log_notificacionMaxOrderByAggregateInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
};
export type log_notificacionMinOrderByAggregateInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    fecha_envio?: Prisma.SortOrder;
    estado_envio?: Prisma.SortOrder;
};
export type log_notificacionSumOrderByAggregateInput = {
    id_notificacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla?: Prisma.SortOrder;
};
export type log_notificacionCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput> | Prisma.log_notificacionCreateWithoutClienteInput[] | Prisma.log_notificacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutClienteInput | Prisma.log_notificacionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.log_notificacionCreateManyClienteInputEnvelope;
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
};
export type log_notificacionUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput> | Prisma.log_notificacionCreateWithoutClienteInput[] | Prisma.log_notificacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutClienteInput | Prisma.log_notificacionCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.log_notificacionCreateManyClienteInputEnvelope;
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
};
export type log_notificacionUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput> | Prisma.log_notificacionCreateWithoutClienteInput[] | Prisma.log_notificacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutClienteInput | Prisma.log_notificacionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.log_notificacionUpsertWithWhereUniqueWithoutClienteInput | Prisma.log_notificacionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.log_notificacionCreateManyClienteInputEnvelope;
    set?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    disconnect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    delete?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    update?: Prisma.log_notificacionUpdateWithWhereUniqueWithoutClienteInput | Prisma.log_notificacionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.log_notificacionUpdateManyWithWhereWithoutClienteInput | Prisma.log_notificacionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
};
export type log_notificacionUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput> | Prisma.log_notificacionCreateWithoutClienteInput[] | Prisma.log_notificacionUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutClienteInput | Prisma.log_notificacionCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.log_notificacionUpsertWithWhereUniqueWithoutClienteInput | Prisma.log_notificacionUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.log_notificacionCreateManyClienteInputEnvelope;
    set?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    disconnect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    delete?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    update?: Prisma.log_notificacionUpdateWithWhereUniqueWithoutClienteInput | Prisma.log_notificacionUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.log_notificacionUpdateManyWithWhereWithoutClienteInput | Prisma.log_notificacionUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
};
export type log_notificacionCreateNestedManyWithoutPlantillaInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput> | Prisma.log_notificacionCreateWithoutPlantillaInput[] | Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput | Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput[];
    createMany?: Prisma.log_notificacionCreateManyPlantillaInputEnvelope;
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
};
export type log_notificacionUncheckedCreateNestedManyWithoutPlantillaInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput> | Prisma.log_notificacionCreateWithoutPlantillaInput[] | Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput | Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput[];
    createMany?: Prisma.log_notificacionCreateManyPlantillaInputEnvelope;
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
};
export type log_notificacionUpdateManyWithoutPlantillaNestedInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput> | Prisma.log_notificacionCreateWithoutPlantillaInput[] | Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput | Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput[];
    upsert?: Prisma.log_notificacionUpsertWithWhereUniqueWithoutPlantillaInput | Prisma.log_notificacionUpsertWithWhereUniqueWithoutPlantillaInput[];
    createMany?: Prisma.log_notificacionCreateManyPlantillaInputEnvelope;
    set?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    disconnect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    delete?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    update?: Prisma.log_notificacionUpdateWithWhereUniqueWithoutPlantillaInput | Prisma.log_notificacionUpdateWithWhereUniqueWithoutPlantillaInput[];
    updateMany?: Prisma.log_notificacionUpdateManyWithWhereWithoutPlantillaInput | Prisma.log_notificacionUpdateManyWithWhereWithoutPlantillaInput[];
    deleteMany?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
};
export type log_notificacionUncheckedUpdateManyWithoutPlantillaNestedInput = {
    create?: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput> | Prisma.log_notificacionCreateWithoutPlantillaInput[] | Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput[];
    connectOrCreate?: Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput | Prisma.log_notificacionCreateOrConnectWithoutPlantillaInput[];
    upsert?: Prisma.log_notificacionUpsertWithWhereUniqueWithoutPlantillaInput | Prisma.log_notificacionUpsertWithWhereUniqueWithoutPlantillaInput[];
    createMany?: Prisma.log_notificacionCreateManyPlantillaInputEnvelope;
    set?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    disconnect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    delete?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    connect?: Prisma.log_notificacionWhereUniqueInput | Prisma.log_notificacionWhereUniqueInput[];
    update?: Prisma.log_notificacionUpdateWithWhereUniqueWithoutPlantillaInput | Prisma.log_notificacionUpdateWithWhereUniqueWithoutPlantillaInput[];
    updateMany?: Prisma.log_notificacionUpdateManyWithWhereWithoutPlantillaInput | Prisma.log_notificacionUpdateManyWithWhereWithoutPlantillaInput[];
    deleteMany?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
};
export type log_notificacionCreateWithoutClienteInput = {
    id_notificacion?: bigint | number;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
    plantilla?: Prisma.plantilla_notificacionCreateNestedOneWithoutNotificacionesInput;
};
export type log_notificacionUncheckedCreateWithoutClienteInput = {
    id_notificacion?: bigint | number;
    id_plantilla?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionCreateOrConnectWithoutClienteInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput>;
};
export type log_notificacionCreateManyClienteInputEnvelope = {
    data: Prisma.log_notificacionCreateManyClienteInput | Prisma.log_notificacionCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type log_notificacionUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.log_notificacionUpdateWithoutClienteInput, Prisma.log_notificacionUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.log_notificacionCreateWithoutClienteInput, Prisma.log_notificacionUncheckedCreateWithoutClienteInput>;
};
export type log_notificacionUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.log_notificacionUpdateWithoutClienteInput, Prisma.log_notificacionUncheckedUpdateWithoutClienteInput>;
};
export type log_notificacionUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.log_notificacionScalarWhereInput;
    data: Prisma.XOR<Prisma.log_notificacionUpdateManyMutationInput, Prisma.log_notificacionUncheckedUpdateManyWithoutClienteInput>;
};
export type log_notificacionScalarWhereInput = {
    AND?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
    OR?: Prisma.log_notificacionScalarWhereInput[];
    NOT?: Prisma.log_notificacionScalarWhereInput | Prisma.log_notificacionScalarWhereInput[];
    id_notificacion?: Prisma.BigIntFilter<"log_notificacion"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    id_plantilla?: Prisma.IntNullableFilter<"log_notificacion"> | number | null;
    canal?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
    fecha_envio?: Prisma.DateTimeNullableFilter<"log_notificacion"> | Date | string | null;
    estado_envio?: Prisma.StringNullableFilter<"log_notificacion"> | string | null;
};
export type log_notificacionCreateWithoutPlantillaInput = {
    id_notificacion?: bigint | number;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutLog_notificacionInput;
};
export type log_notificacionUncheckedCreateWithoutPlantillaInput = {
    id_notificacion?: bigint | number;
    id_cliente?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionCreateOrConnectWithoutPlantillaInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput>;
};
export type log_notificacionCreateManyPlantillaInputEnvelope = {
    data: Prisma.log_notificacionCreateManyPlantillaInput | Prisma.log_notificacionCreateManyPlantillaInput[];
    skipDuplicates?: boolean;
};
export type log_notificacionUpsertWithWhereUniqueWithoutPlantillaInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    update: Prisma.XOR<Prisma.log_notificacionUpdateWithoutPlantillaInput, Prisma.log_notificacionUncheckedUpdateWithoutPlantillaInput>;
    create: Prisma.XOR<Prisma.log_notificacionCreateWithoutPlantillaInput, Prisma.log_notificacionUncheckedCreateWithoutPlantillaInput>;
};
export type log_notificacionUpdateWithWhereUniqueWithoutPlantillaInput = {
    where: Prisma.log_notificacionWhereUniqueInput;
    data: Prisma.XOR<Prisma.log_notificacionUpdateWithoutPlantillaInput, Prisma.log_notificacionUncheckedUpdateWithoutPlantillaInput>;
};
export type log_notificacionUpdateManyWithWhereWithoutPlantillaInput = {
    where: Prisma.log_notificacionScalarWhereInput;
    data: Prisma.XOR<Prisma.log_notificacionUpdateManyMutationInput, Prisma.log_notificacionUncheckedUpdateManyWithoutPlantillaInput>;
};
export type log_notificacionCreateManyClienteInput = {
    id_notificacion?: bigint | number;
    id_plantilla?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionUpdateWithoutClienteInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    plantilla?: Prisma.plantilla_notificacionUpdateOneWithoutNotificacionesNestedInput;
};
export type log_notificacionUncheckedUpdateWithoutClienteInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_plantilla?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionUncheckedUpdateManyWithoutClienteInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_plantilla?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionCreateManyPlantillaInput = {
    id_notificacion?: bigint | number;
    id_cliente?: number | null;
    canal?: string | null;
    fecha_envio?: Date | string | null;
    estado_envio?: string | null;
};
export type log_notificacionUpdateWithoutPlantillaInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutLog_notificacionNestedInput;
};
export type log_notificacionUncheckedUpdateWithoutPlantillaInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionUncheckedUpdateManyWithoutPlantillaInput = {
    id_notificacion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_envio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado_envio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type log_notificacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_notificacion?: boolean;
    id_cliente?: boolean;
    id_plantilla?: boolean;
    canal?: boolean;
    fecha_envio?: boolean;
    estado_envio?: boolean;
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
}, ExtArgs["result"]["log_notificacion"]>;
export type log_notificacionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_notificacion?: boolean;
    id_cliente?: boolean;
    id_plantilla?: boolean;
    canal?: boolean;
    fecha_envio?: boolean;
    estado_envio?: boolean;
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
}, ExtArgs["result"]["log_notificacion"]>;
export type log_notificacionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_notificacion?: boolean;
    id_cliente?: boolean;
    id_plantilla?: boolean;
    canal?: boolean;
    fecha_envio?: boolean;
    estado_envio?: boolean;
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
}, ExtArgs["result"]["log_notificacion"]>;
export type log_notificacionSelectScalar = {
    id_notificacion?: boolean;
    id_cliente?: boolean;
    id_plantilla?: boolean;
    canal?: boolean;
    fecha_envio?: boolean;
    estado_envio?: boolean;
};
export type log_notificacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_notificacion" | "id_cliente" | "id_plantilla" | "canal" | "fecha_envio" | "estado_envio", ExtArgs["result"]["log_notificacion"]>;
export type log_notificacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
};
export type log_notificacionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
};
export type log_notificacionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.log_notificacion$clienteArgs<ExtArgs>;
    plantilla?: boolean | Prisma.log_notificacion$plantillaArgs<ExtArgs>;
};
export type $log_notificacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "log_notificacion";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        plantilla: Prisma.$plantilla_notificacionPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_notificacion: bigint;
        id_cliente: number | null;
        id_plantilla: number | null;
        canal: string | null;
        fecha_envio: Date | null;
        estado_envio: string | null;
    }, ExtArgs["result"]["log_notificacion"]>;
    composites: {};
};
export type log_notificacionGetPayload<S extends boolean | null | undefined | log_notificacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload, S>;
export type log_notificacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<log_notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Log_notificacionCountAggregateInputType | true;
};
export interface log_notificacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['log_notificacion'];
        meta: {
            name: 'log_notificacion';
        };
    };
    findUnique<T extends log_notificacionFindUniqueArgs>(args: Prisma.SelectSubset<T, log_notificacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends log_notificacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, log_notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends log_notificacionFindFirstArgs>(args?: Prisma.SelectSubset<T, log_notificacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends log_notificacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, log_notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends log_notificacionFindManyArgs>(args?: Prisma.SelectSubset<T, log_notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends log_notificacionCreateArgs>(args: Prisma.SelectSubset<T, log_notificacionCreateArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends log_notificacionCreateManyArgs>(args?: Prisma.SelectSubset<T, log_notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends log_notificacionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, log_notificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends log_notificacionDeleteArgs>(args: Prisma.SelectSubset<T, log_notificacionDeleteArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends log_notificacionUpdateArgs>(args: Prisma.SelectSubset<T, log_notificacionUpdateArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends log_notificacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, log_notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends log_notificacionUpdateManyArgs>(args: Prisma.SelectSubset<T, log_notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends log_notificacionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, log_notificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends log_notificacionUpsertArgs>(args: Prisma.SelectSubset<T, log_notificacionUpsertArgs<ExtArgs>>): Prisma.Prisma__log_notificacionClient<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends log_notificacionCountArgs>(args?: Prisma.Subset<T, log_notificacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Log_notificacionCountAggregateOutputType> : number>;
    aggregate<T extends Log_notificacionAggregateArgs>(args: Prisma.Subset<T, Log_notificacionAggregateArgs>): Prisma.PrismaPromise<GetLog_notificacionAggregateType<T>>;
    groupBy<T extends log_notificacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: log_notificacionGroupByArgs['orderBy'];
    } : {
        orderBy?: log_notificacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, log_notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_notificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: log_notificacionFieldRefs;
}
export interface Prisma__log_notificacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.log_notificacion$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.log_notificacion$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plantilla<T extends Prisma.log_notificacion$plantillaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.log_notificacion$plantillaArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface log_notificacionFieldRefs {
    readonly id_notificacion: Prisma.FieldRef<"log_notificacion", 'BigInt'>;
    readonly id_cliente: Prisma.FieldRef<"log_notificacion", 'Int'>;
    readonly id_plantilla: Prisma.FieldRef<"log_notificacion", 'Int'>;
    readonly canal: Prisma.FieldRef<"log_notificacion", 'String'>;
    readonly fecha_envio: Prisma.FieldRef<"log_notificacion", 'DateTime'>;
    readonly estado_envio: Prisma.FieldRef<"log_notificacion", 'String'>;
}
export type log_notificacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where: Prisma.log_notificacionWhereUniqueInput;
};
export type log_notificacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where: Prisma.log_notificacionWhereUniqueInput;
};
export type log_notificacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithRelationInput | Prisma.log_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.log_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_notificacionScalarFieldEnum | Prisma.Log_notificacionScalarFieldEnum[];
};
export type log_notificacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithRelationInput | Prisma.log_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.log_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_notificacionScalarFieldEnum | Prisma.Log_notificacionScalarFieldEnum[];
};
export type log_notificacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithRelationInput | Prisma.log_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.log_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_notificacionScalarFieldEnum | Prisma.Log_notificacionScalarFieldEnum[];
};
export type log_notificacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.log_notificacionCreateInput, Prisma.log_notificacionUncheckedCreateInput>;
};
export type log_notificacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.log_notificacionCreateManyInput | Prisma.log_notificacionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type log_notificacionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    data: Prisma.log_notificacionCreateManyInput | Prisma.log_notificacionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.log_notificacionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type log_notificacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.log_notificacionUpdateInput, Prisma.log_notificacionUncheckedUpdateInput>;
    where: Prisma.log_notificacionWhereUniqueInput;
};
export type log_notificacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.log_notificacionUpdateManyMutationInput, Prisma.log_notificacionUncheckedUpdateManyInput>;
    where?: Prisma.log_notificacionWhereInput;
    limit?: number;
};
export type log_notificacionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.log_notificacionUpdateManyMutationInput, Prisma.log_notificacionUncheckedUpdateManyInput>;
    where?: Prisma.log_notificacionWhereInput;
    limit?: number;
    include?: Prisma.log_notificacionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type log_notificacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where: Prisma.log_notificacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.log_notificacionCreateInput, Prisma.log_notificacionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.log_notificacionUpdateInput, Prisma.log_notificacionUncheckedUpdateInput>;
};
export type log_notificacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where: Prisma.log_notificacionWhereUniqueInput;
};
export type log_notificacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_notificacionWhereInput;
    limit?: number;
};
export type log_notificacion$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type log_notificacion$plantillaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where?: Prisma.plantilla_notificacionWhereInput;
};
export type log_notificacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
};
