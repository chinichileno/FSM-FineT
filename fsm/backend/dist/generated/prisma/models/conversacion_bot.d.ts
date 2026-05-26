import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type conversacion_botModel = runtime.Types.Result.DefaultSelection<Prisma.$conversacion_botPayload>;
export type AggregateConversacion_bot = {
    _count: Conversacion_botCountAggregateOutputType | null;
    _avg: Conversacion_botAvgAggregateOutputType | null;
    _sum: Conversacion_botSumAggregateOutputType | null;
    _min: Conversacion_botMinAggregateOutputType | null;
    _max: Conversacion_botMaxAggregateOutputType | null;
};
export type Conversacion_botAvgAggregateOutputType = {
    id_conversacion: number | null;
    id_cliente: number | null;
    id_canal_wa: number | null;
};
export type Conversacion_botSumAggregateOutputType = {
    id_conversacion: number | null;
    id_cliente: number | null;
    id_canal_wa: number | null;
};
export type Conversacion_botMinAggregateOutputType = {
    id_conversacion: number | null;
    id_cliente: number | null;
    id_canal_wa: number | null;
    plataforma: string | null;
    fecha_inicio: Date | null;
    fecha_fin: Date | null;
    derivada_humano: boolean | null;
};
export type Conversacion_botMaxAggregateOutputType = {
    id_conversacion: number | null;
    id_cliente: number | null;
    id_canal_wa: number | null;
    plataforma: string | null;
    fecha_inicio: Date | null;
    fecha_fin: Date | null;
    derivada_humano: boolean | null;
};
export type Conversacion_botCountAggregateOutputType = {
    id_conversacion: number;
    id_cliente: number;
    id_canal_wa: number;
    plataforma: number;
    fecha_inicio: number;
    fecha_fin: number;
    derivada_humano: number;
    _all: number;
};
export type Conversacion_botAvgAggregateInputType = {
    id_conversacion?: true;
    id_cliente?: true;
    id_canal_wa?: true;
};
export type Conversacion_botSumAggregateInputType = {
    id_conversacion?: true;
    id_cliente?: true;
    id_canal_wa?: true;
};
export type Conversacion_botMinAggregateInputType = {
    id_conversacion?: true;
    id_cliente?: true;
    id_canal_wa?: true;
    plataforma?: true;
    fecha_inicio?: true;
    fecha_fin?: true;
    derivada_humano?: true;
};
export type Conversacion_botMaxAggregateInputType = {
    id_conversacion?: true;
    id_cliente?: true;
    id_canal_wa?: true;
    plataforma?: true;
    fecha_inicio?: true;
    fecha_fin?: true;
    derivada_humano?: true;
};
export type Conversacion_botCountAggregateInputType = {
    id_conversacion?: true;
    id_cliente?: true;
    id_canal_wa?: true;
    plataforma?: true;
    fecha_inicio?: true;
    fecha_fin?: true;
    derivada_humano?: true;
    _all?: true;
};
export type Conversacion_botAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithRelationInput | Prisma.conversacion_botOrderByWithRelationInput[];
    cursor?: Prisma.conversacion_botWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Conversacion_botCountAggregateInputType;
    _avg?: Conversacion_botAvgAggregateInputType;
    _sum?: Conversacion_botSumAggregateInputType;
    _min?: Conversacion_botMinAggregateInputType;
    _max?: Conversacion_botMaxAggregateInputType;
};
export type GetConversacion_botAggregateType<T extends Conversacion_botAggregateArgs> = {
    [P in keyof T & keyof AggregateConversacion_bot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConversacion_bot[P]> : Prisma.GetScalarType<T[P], AggregateConversacion_bot[P]>;
};
export type conversacion_botGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithAggregationInput | Prisma.conversacion_botOrderByWithAggregationInput[];
    by: Prisma.Conversacion_botScalarFieldEnum[] | Prisma.Conversacion_botScalarFieldEnum;
    having?: Prisma.conversacion_botScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Conversacion_botCountAggregateInputType | true;
    _avg?: Conversacion_botAvgAggregateInputType;
    _sum?: Conversacion_botSumAggregateInputType;
    _min?: Conversacion_botMinAggregateInputType;
    _max?: Conversacion_botMaxAggregateInputType;
};
export type Conversacion_botGroupByOutputType = {
    id_conversacion: number;
    id_cliente: number | null;
    id_canal_wa: number | null;
    plataforma: string | null;
    fecha_inicio: Date;
    fecha_fin: Date | null;
    derivada_humano: boolean;
    _count: Conversacion_botCountAggregateOutputType | null;
    _avg: Conversacion_botAvgAggregateOutputType | null;
    _sum: Conversacion_botSumAggregateOutputType | null;
    _min: Conversacion_botMinAggregateOutputType | null;
    _max: Conversacion_botMaxAggregateOutputType | null;
};
export type GetConversacion_botGroupByPayload<T extends conversacion_botGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Conversacion_botGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Conversacion_botGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Conversacion_botGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Conversacion_botGroupByOutputType[P]>;
}>>;
export type conversacion_botWhereInput = {
    AND?: Prisma.conversacion_botWhereInput | Prisma.conversacion_botWhereInput[];
    OR?: Prisma.conversacion_botWhereInput[];
    NOT?: Prisma.conversacion_botWhereInput | Prisma.conversacion_botWhereInput[];
    id_conversacion?: Prisma.IntFilter<"conversacion_bot"> | number;
    id_cliente?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    id_canal_wa?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    plataforma?: Prisma.StringNullableFilter<"conversacion_bot"> | string | null;
    fecha_inicio?: Prisma.DateTimeFilter<"conversacion_bot"> | Date | string;
    fecha_fin?: Prisma.DateTimeNullableFilter<"conversacion_bot"> | Date | string | null;
    derivada_humano?: Prisma.BoolFilter<"conversacion_bot"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    canal_wa?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    mensajes?: Prisma.Mensaje_botListRelationFilter;
    ticket?: Prisma.XOR<Prisma.TicketNullableScalarRelationFilter, Prisma.ticketWhereInput> | null;
};
export type conversacion_botOrderByWithRelationInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrderInput | Prisma.SortOrder;
    plataforma?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_fin?: Prisma.SortOrderInput | Prisma.SortOrder;
    derivada_humano?: Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    canal_wa?: Prisma.canal_whatsappOrderByWithRelationInput;
    mensajes?: Prisma.mensaje_botOrderByRelationAggregateInput;
    ticket?: Prisma.ticketOrderByWithRelationInput;
};
export type conversacion_botWhereUniqueInput = Prisma.AtLeast<{
    id_conversacion?: number;
    AND?: Prisma.conversacion_botWhereInput | Prisma.conversacion_botWhereInput[];
    OR?: Prisma.conversacion_botWhereInput[];
    NOT?: Prisma.conversacion_botWhereInput | Prisma.conversacion_botWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    id_canal_wa?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    plataforma?: Prisma.StringNullableFilter<"conversacion_bot"> | string | null;
    fecha_inicio?: Prisma.DateTimeFilter<"conversacion_bot"> | Date | string;
    fecha_fin?: Prisma.DateTimeNullableFilter<"conversacion_bot"> | Date | string | null;
    derivada_humano?: Prisma.BoolFilter<"conversacion_bot"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    canal_wa?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    mensajes?: Prisma.Mensaje_botListRelationFilter;
    ticket?: Prisma.XOR<Prisma.TicketNullableScalarRelationFilter, Prisma.ticketWhereInput> | null;
}, "id_conversacion">;
export type conversacion_botOrderByWithAggregationInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrderInput | Prisma.SortOrder;
    plataforma?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_fin?: Prisma.SortOrderInput | Prisma.SortOrder;
    derivada_humano?: Prisma.SortOrder;
    _count?: Prisma.conversacion_botCountOrderByAggregateInput;
    _avg?: Prisma.conversacion_botAvgOrderByAggregateInput;
    _max?: Prisma.conversacion_botMaxOrderByAggregateInput;
    _min?: Prisma.conversacion_botMinOrderByAggregateInput;
    _sum?: Prisma.conversacion_botSumOrderByAggregateInput;
};
export type conversacion_botScalarWhereWithAggregatesInput = {
    AND?: Prisma.conversacion_botScalarWhereWithAggregatesInput | Prisma.conversacion_botScalarWhereWithAggregatesInput[];
    OR?: Prisma.conversacion_botScalarWhereWithAggregatesInput[];
    NOT?: Prisma.conversacion_botScalarWhereWithAggregatesInput | Prisma.conversacion_botScalarWhereWithAggregatesInput[];
    id_conversacion?: Prisma.IntWithAggregatesFilter<"conversacion_bot"> | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"conversacion_bot"> | number | null;
    id_canal_wa?: Prisma.IntNullableWithAggregatesFilter<"conversacion_bot"> | number | null;
    plataforma?: Prisma.StringNullableWithAggregatesFilter<"conversacion_bot"> | string | null;
    fecha_inicio?: Prisma.DateTimeWithAggregatesFilter<"conversacion_bot"> | Date | string;
    fecha_fin?: Prisma.DateTimeNullableWithAggregatesFilter<"conversacion_bot"> | Date | string | null;
    derivada_humano?: Prisma.BoolWithAggregatesFilter<"conversacion_bot"> | boolean;
};
export type conversacion_botCreateInput = {
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutConversacionesInput;
    canal_wa?: Prisma.canal_whatsappCreateNestedOneWithoutConversacionesInput;
    mensajes?: Prisma.mensaje_botCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botUncheckedCreateInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    mensajes?: Prisma.mensaje_botUncheckedCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketUncheckedCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botUpdateInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutConversacionesNestedInput;
    canal_wa?: Prisma.canal_whatsappUpdateOneWithoutConversacionesNestedInput;
    mensajes?: Prisma.mensaje_botUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    mensajes?: Prisma.mensaje_botUncheckedUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUncheckedUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botCreateManyInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
};
export type conversacion_botUpdateManyMutationInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type conversacion_botUncheckedUpdateManyInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Conversacion_botListRelationFilter = {
    every?: Prisma.conversacion_botWhereInput;
    some?: Prisma.conversacion_botWhereInput;
    none?: Prisma.conversacion_botWhereInput;
};
export type conversacion_botOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type Conversacion_botNullableScalarRelationFilter = {
    is?: Prisma.conversacion_botWhereInput | null;
    isNot?: Prisma.conversacion_botWhereInput | null;
};
export type conversacion_botCountOrderByAggregateInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrder;
    plataforma?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_fin?: Prisma.SortOrder;
    derivada_humano?: Prisma.SortOrder;
};
export type conversacion_botAvgOrderByAggregateInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrder;
};
export type conversacion_botMaxOrderByAggregateInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrder;
    plataforma?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_fin?: Prisma.SortOrder;
    derivada_humano?: Prisma.SortOrder;
};
export type conversacion_botMinOrderByAggregateInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrder;
    plataforma?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_fin?: Prisma.SortOrder;
    derivada_humano?: Prisma.SortOrder;
};
export type conversacion_botSumOrderByAggregateInput = {
    id_conversacion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_canal_wa?: Prisma.SortOrder;
};
export type conversacion_botCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput> | Prisma.conversacion_botCreateWithoutClienteInput[] | Prisma.conversacion_botUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutClienteInput | Prisma.conversacion_botCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.conversacion_botCreateManyClienteInputEnvelope;
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
};
export type conversacion_botUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput> | Prisma.conversacion_botCreateWithoutClienteInput[] | Prisma.conversacion_botUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutClienteInput | Prisma.conversacion_botCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.conversacion_botCreateManyClienteInputEnvelope;
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
};
export type conversacion_botUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput> | Prisma.conversacion_botCreateWithoutClienteInput[] | Prisma.conversacion_botUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutClienteInput | Prisma.conversacion_botCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.conversacion_botUpsertWithWhereUniqueWithoutClienteInput | Prisma.conversacion_botUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.conversacion_botCreateManyClienteInputEnvelope;
    set?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    disconnect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    delete?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    update?: Prisma.conversacion_botUpdateWithWhereUniqueWithoutClienteInput | Prisma.conversacion_botUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.conversacion_botUpdateManyWithWhereWithoutClienteInput | Prisma.conversacion_botUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
};
export type conversacion_botUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput> | Prisma.conversacion_botCreateWithoutClienteInput[] | Prisma.conversacion_botUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutClienteInput | Prisma.conversacion_botCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.conversacion_botUpsertWithWhereUniqueWithoutClienteInput | Prisma.conversacion_botUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.conversacion_botCreateManyClienteInputEnvelope;
    set?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    disconnect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    delete?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    update?: Prisma.conversacion_botUpdateWithWhereUniqueWithoutClienteInput | Prisma.conversacion_botUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.conversacion_botUpdateManyWithWhereWithoutClienteInput | Prisma.conversacion_botUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
};
export type conversacion_botCreateNestedOneWithoutTicketInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutTicketInput, Prisma.conversacion_botUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutTicketInput;
    connect?: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botUpdateOneWithoutTicketNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutTicketInput, Prisma.conversacion_botUncheckedCreateWithoutTicketInput>;
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutTicketInput;
    upsert?: Prisma.conversacion_botUpsertWithoutTicketInput;
    disconnect?: Prisma.conversacion_botWhereInput | boolean;
    delete?: Prisma.conversacion_botWhereInput | boolean;
    connect?: Prisma.conversacion_botWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.conversacion_botUpdateToOneWithWhereWithoutTicketInput, Prisma.conversacion_botUpdateWithoutTicketInput>, Prisma.conversacion_botUncheckedUpdateWithoutTicketInput>;
};
export type conversacion_botCreateNestedManyWithoutCanal_waInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput> | Prisma.conversacion_botCreateWithoutCanal_waInput[] | Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput | Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput[];
    createMany?: Prisma.conversacion_botCreateManyCanal_waInputEnvelope;
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
};
export type conversacion_botUncheckedCreateNestedManyWithoutCanal_waInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput> | Prisma.conversacion_botCreateWithoutCanal_waInput[] | Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput | Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput[];
    createMany?: Prisma.conversacion_botCreateManyCanal_waInputEnvelope;
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
};
export type conversacion_botUpdateManyWithoutCanal_waNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput> | Prisma.conversacion_botCreateWithoutCanal_waInput[] | Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput | Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput[];
    upsert?: Prisma.conversacion_botUpsertWithWhereUniqueWithoutCanal_waInput | Prisma.conversacion_botUpsertWithWhereUniqueWithoutCanal_waInput[];
    createMany?: Prisma.conversacion_botCreateManyCanal_waInputEnvelope;
    set?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    disconnect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    delete?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    update?: Prisma.conversacion_botUpdateWithWhereUniqueWithoutCanal_waInput | Prisma.conversacion_botUpdateWithWhereUniqueWithoutCanal_waInput[];
    updateMany?: Prisma.conversacion_botUpdateManyWithWhereWithoutCanal_waInput | Prisma.conversacion_botUpdateManyWithWhereWithoutCanal_waInput[];
    deleteMany?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
};
export type conversacion_botUncheckedUpdateManyWithoutCanal_waNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput> | Prisma.conversacion_botCreateWithoutCanal_waInput[] | Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput[];
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput | Prisma.conversacion_botCreateOrConnectWithoutCanal_waInput[];
    upsert?: Prisma.conversacion_botUpsertWithWhereUniqueWithoutCanal_waInput | Prisma.conversacion_botUpsertWithWhereUniqueWithoutCanal_waInput[];
    createMany?: Prisma.conversacion_botCreateManyCanal_waInputEnvelope;
    set?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    disconnect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    delete?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    connect?: Prisma.conversacion_botWhereUniqueInput | Prisma.conversacion_botWhereUniqueInput[];
    update?: Prisma.conversacion_botUpdateWithWhereUniqueWithoutCanal_waInput | Prisma.conversacion_botUpdateWithWhereUniqueWithoutCanal_waInput[];
    updateMany?: Prisma.conversacion_botUpdateManyWithWhereWithoutCanal_waInput | Prisma.conversacion_botUpdateManyWithWhereWithoutCanal_waInput[];
    deleteMany?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
};
export type conversacion_botCreateNestedOneWithoutMensajesInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutMensajesInput, Prisma.conversacion_botUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutMensajesInput;
    connect?: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botUpdateOneWithoutMensajesNestedInput = {
    create?: Prisma.XOR<Prisma.conversacion_botCreateWithoutMensajesInput, Prisma.conversacion_botUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.conversacion_botCreateOrConnectWithoutMensajesInput;
    upsert?: Prisma.conversacion_botUpsertWithoutMensajesInput;
    disconnect?: Prisma.conversacion_botWhereInput | boolean;
    delete?: Prisma.conversacion_botWhereInput | boolean;
    connect?: Prisma.conversacion_botWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.conversacion_botUpdateToOneWithWhereWithoutMensajesInput, Prisma.conversacion_botUpdateWithoutMensajesInput>, Prisma.conversacion_botUncheckedUpdateWithoutMensajesInput>;
};
export type conversacion_botCreateWithoutClienteInput = {
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    canal_wa?: Prisma.canal_whatsappCreateNestedOneWithoutConversacionesInput;
    mensajes?: Prisma.mensaje_botCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botUncheckedCreateWithoutClienteInput = {
    id_conversacion?: number;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    mensajes?: Prisma.mensaje_botUncheckedCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketUncheckedCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botCreateOrConnectWithoutClienteInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput>;
};
export type conversacion_botCreateManyClienteInputEnvelope = {
    data: Prisma.conversacion_botCreateManyClienteInput | Prisma.conversacion_botCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type conversacion_botUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    update: Prisma.XOR<Prisma.conversacion_botUpdateWithoutClienteInput, Prisma.conversacion_botUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutClienteInput, Prisma.conversacion_botUncheckedCreateWithoutClienteInput>;
};
export type conversacion_botUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateWithoutClienteInput, Prisma.conversacion_botUncheckedUpdateWithoutClienteInput>;
};
export type conversacion_botUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.conversacion_botScalarWhereInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateManyMutationInput, Prisma.conversacion_botUncheckedUpdateManyWithoutClienteInput>;
};
export type conversacion_botScalarWhereInput = {
    AND?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
    OR?: Prisma.conversacion_botScalarWhereInput[];
    NOT?: Prisma.conversacion_botScalarWhereInput | Prisma.conversacion_botScalarWhereInput[];
    id_conversacion?: Prisma.IntFilter<"conversacion_bot"> | number;
    id_cliente?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    id_canal_wa?: Prisma.IntNullableFilter<"conversacion_bot"> | number | null;
    plataforma?: Prisma.StringNullableFilter<"conversacion_bot"> | string | null;
    fecha_inicio?: Prisma.DateTimeFilter<"conversacion_bot"> | Date | string;
    fecha_fin?: Prisma.DateTimeNullableFilter<"conversacion_bot"> | Date | string | null;
    derivada_humano?: Prisma.BoolFilter<"conversacion_bot"> | boolean;
};
export type conversacion_botCreateWithoutTicketInput = {
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutConversacionesInput;
    canal_wa?: Prisma.canal_whatsappCreateNestedOneWithoutConversacionesInput;
    mensajes?: Prisma.mensaje_botCreateNestedManyWithoutConversacionInput;
};
export type conversacion_botUncheckedCreateWithoutTicketInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    mensajes?: Prisma.mensaje_botUncheckedCreateNestedManyWithoutConversacionInput;
};
export type conversacion_botCreateOrConnectWithoutTicketInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutTicketInput, Prisma.conversacion_botUncheckedCreateWithoutTicketInput>;
};
export type conversacion_botUpsertWithoutTicketInput = {
    update: Prisma.XOR<Prisma.conversacion_botUpdateWithoutTicketInput, Prisma.conversacion_botUncheckedUpdateWithoutTicketInput>;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutTicketInput, Prisma.conversacion_botUncheckedCreateWithoutTicketInput>;
    where?: Prisma.conversacion_botWhereInput;
};
export type conversacion_botUpdateToOneWithWhereWithoutTicketInput = {
    where?: Prisma.conversacion_botWhereInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateWithoutTicketInput, Prisma.conversacion_botUncheckedUpdateWithoutTicketInput>;
};
export type conversacion_botUpdateWithoutTicketInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutConversacionesNestedInput;
    canal_wa?: Prisma.canal_whatsappUpdateOneWithoutConversacionesNestedInput;
    mensajes?: Prisma.mensaje_botUpdateManyWithoutConversacionNestedInput;
};
export type conversacion_botUncheckedUpdateWithoutTicketInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    mensajes?: Prisma.mensaje_botUncheckedUpdateManyWithoutConversacionNestedInput;
};
export type conversacion_botCreateWithoutCanal_waInput = {
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutConversacionesInput;
    mensajes?: Prisma.mensaje_botCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botUncheckedCreateWithoutCanal_waInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    mensajes?: Prisma.mensaje_botUncheckedCreateNestedManyWithoutConversacionInput;
    ticket?: Prisma.ticketUncheckedCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botCreateOrConnectWithoutCanal_waInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput>;
};
export type conversacion_botCreateManyCanal_waInputEnvelope = {
    data: Prisma.conversacion_botCreateManyCanal_waInput | Prisma.conversacion_botCreateManyCanal_waInput[];
    skipDuplicates?: boolean;
};
export type conversacion_botUpsertWithWhereUniqueWithoutCanal_waInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    update: Prisma.XOR<Prisma.conversacion_botUpdateWithoutCanal_waInput, Prisma.conversacion_botUncheckedUpdateWithoutCanal_waInput>;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutCanal_waInput, Prisma.conversacion_botUncheckedCreateWithoutCanal_waInput>;
};
export type conversacion_botUpdateWithWhereUniqueWithoutCanal_waInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateWithoutCanal_waInput, Prisma.conversacion_botUncheckedUpdateWithoutCanal_waInput>;
};
export type conversacion_botUpdateManyWithWhereWithoutCanal_waInput = {
    where: Prisma.conversacion_botScalarWhereInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateManyMutationInput, Prisma.conversacion_botUncheckedUpdateManyWithoutCanal_waInput>;
};
export type conversacion_botCreateWithoutMensajesInput = {
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutConversacionesInput;
    canal_wa?: Prisma.canal_whatsappCreateNestedOneWithoutConversacionesInput;
    ticket?: Prisma.ticketCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botUncheckedCreateWithoutMensajesInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
    ticket?: Prisma.ticketUncheckedCreateNestedOneWithoutConversacion_botInput;
};
export type conversacion_botCreateOrConnectWithoutMensajesInput = {
    where: Prisma.conversacion_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutMensajesInput, Prisma.conversacion_botUncheckedCreateWithoutMensajesInput>;
};
export type conversacion_botUpsertWithoutMensajesInput = {
    update: Prisma.XOR<Prisma.conversacion_botUpdateWithoutMensajesInput, Prisma.conversacion_botUncheckedUpdateWithoutMensajesInput>;
    create: Prisma.XOR<Prisma.conversacion_botCreateWithoutMensajesInput, Prisma.conversacion_botUncheckedCreateWithoutMensajesInput>;
    where?: Prisma.conversacion_botWhereInput;
};
export type conversacion_botUpdateToOneWithWhereWithoutMensajesInput = {
    where?: Prisma.conversacion_botWhereInput;
    data: Prisma.XOR<Prisma.conversacion_botUpdateWithoutMensajesInput, Prisma.conversacion_botUncheckedUpdateWithoutMensajesInput>;
};
export type conversacion_botUpdateWithoutMensajesInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutConversacionesNestedInput;
    canal_wa?: Prisma.canal_whatsappUpdateOneWithoutConversacionesNestedInput;
    ticket?: Prisma.ticketUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateWithoutMensajesInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ticket?: Prisma.ticketUncheckedUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botCreateManyClienteInput = {
    id_conversacion?: number;
    id_canal_wa?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
};
export type conversacion_botUpdateWithoutClienteInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    canal_wa?: Prisma.canal_whatsappUpdateOneWithoutConversacionesNestedInput;
    mensajes?: Prisma.mensaje_botUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateWithoutClienteInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    mensajes?: Prisma.mensaje_botUncheckedUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUncheckedUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateManyWithoutClienteInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_canal_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type conversacion_botCreateManyCanal_waInput = {
    id_conversacion?: number;
    id_cliente?: number | null;
    plataforma?: string | null;
    fecha_inicio?: Date | string;
    fecha_fin?: Date | string | null;
    derivada_humano?: boolean;
};
export type conversacion_botUpdateWithoutCanal_waInput = {
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutConversacionesNestedInput;
    mensajes?: Prisma.mensaje_botUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateWithoutCanal_waInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    mensajes?: Prisma.mensaje_botUncheckedUpdateManyWithoutConversacionNestedInput;
    ticket?: Prisma.ticketUncheckedUpdateOneWithoutConversacion_botNestedInput;
};
export type conversacion_botUncheckedUpdateManyWithoutCanal_waInput = {
    id_conversacion?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    plataforma?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_fin?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    derivada_humano?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Conversacion_botCountOutputType = {
    mensajes: number;
};
export type Conversacion_botCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mensajes?: boolean | Conversacion_botCountOutputTypeCountMensajesArgs;
};
export type Conversacion_botCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Conversacion_botCountOutputTypeSelect<ExtArgs> | null;
};
export type Conversacion_botCountOutputTypeCountMensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_botWhereInput;
};
export type conversacion_botSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_conversacion?: boolean;
    id_cliente?: boolean;
    id_canal_wa?: boolean;
    plataforma?: boolean;
    fecha_inicio?: boolean;
    fecha_fin?: boolean;
    derivada_humano?: boolean;
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
    mensajes?: boolean | Prisma.conversacion_bot$mensajesArgs<ExtArgs>;
    ticket?: boolean | Prisma.conversacion_bot$ticketArgs<ExtArgs>;
    _count?: boolean | Prisma.Conversacion_botCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["conversacion_bot"]>;
export type conversacion_botSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_conversacion?: boolean;
    id_cliente?: boolean;
    id_canal_wa?: boolean;
    plataforma?: boolean;
    fecha_inicio?: boolean;
    fecha_fin?: boolean;
    derivada_humano?: boolean;
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
}, ExtArgs["result"]["conversacion_bot"]>;
export type conversacion_botSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_conversacion?: boolean;
    id_cliente?: boolean;
    id_canal_wa?: boolean;
    plataforma?: boolean;
    fecha_inicio?: boolean;
    fecha_fin?: boolean;
    derivada_humano?: boolean;
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
}, ExtArgs["result"]["conversacion_bot"]>;
export type conversacion_botSelectScalar = {
    id_conversacion?: boolean;
    id_cliente?: boolean;
    id_canal_wa?: boolean;
    plataforma?: boolean;
    fecha_inicio?: boolean;
    fecha_fin?: boolean;
    derivada_humano?: boolean;
};
export type conversacion_botOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_conversacion" | "id_cliente" | "id_canal_wa" | "plataforma" | "fecha_inicio" | "fecha_fin" | "derivada_humano", ExtArgs["result"]["conversacion_bot"]>;
export type conversacion_botInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
    mensajes?: boolean | Prisma.conversacion_bot$mensajesArgs<ExtArgs>;
    ticket?: boolean | Prisma.conversacion_bot$ticketArgs<ExtArgs>;
    _count?: boolean | Prisma.Conversacion_botCountOutputTypeDefaultArgs<ExtArgs>;
};
export type conversacion_botIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
};
export type conversacion_botIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.conversacion_bot$clienteArgs<ExtArgs>;
    canal_wa?: boolean | Prisma.conversacion_bot$canal_waArgs<ExtArgs>;
};
export type $conversacion_botPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "conversacion_bot";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        canal_wa: Prisma.$canal_whatsappPayload<ExtArgs> | null;
        mensajes: Prisma.$mensaje_botPayload<ExtArgs>[];
        ticket: Prisma.$ticketPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_conversacion: number;
        id_cliente: number | null;
        id_canal_wa: number | null;
        plataforma: string | null;
        fecha_inicio: Date;
        fecha_fin: Date | null;
        derivada_humano: boolean;
    }, ExtArgs["result"]["conversacion_bot"]>;
    composites: {};
};
export type conversacion_botGetPayload<S extends boolean | null | undefined | conversacion_botDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload, S>;
export type conversacion_botCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<conversacion_botFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Conversacion_botCountAggregateInputType | true;
};
export interface conversacion_botDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['conversacion_bot'];
        meta: {
            name: 'conversacion_bot';
        };
    };
    findUnique<T extends conversacion_botFindUniqueArgs>(args: Prisma.SelectSubset<T, conversacion_botFindUniqueArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends conversacion_botFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, conversacion_botFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends conversacion_botFindFirstArgs>(args?: Prisma.SelectSubset<T, conversacion_botFindFirstArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends conversacion_botFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, conversacion_botFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends conversacion_botFindManyArgs>(args?: Prisma.SelectSubset<T, conversacion_botFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends conversacion_botCreateArgs>(args: Prisma.SelectSubset<T, conversacion_botCreateArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends conversacion_botCreateManyArgs>(args?: Prisma.SelectSubset<T, conversacion_botCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends conversacion_botCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, conversacion_botCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends conversacion_botDeleteArgs>(args: Prisma.SelectSubset<T, conversacion_botDeleteArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends conversacion_botUpdateArgs>(args: Prisma.SelectSubset<T, conversacion_botUpdateArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends conversacion_botDeleteManyArgs>(args?: Prisma.SelectSubset<T, conversacion_botDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends conversacion_botUpdateManyArgs>(args: Prisma.SelectSubset<T, conversacion_botUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends conversacion_botUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, conversacion_botUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends conversacion_botUpsertArgs>(args: Prisma.SelectSubset<T, conversacion_botUpsertArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends conversacion_botCountArgs>(args?: Prisma.Subset<T, conversacion_botCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Conversacion_botCountAggregateOutputType> : number>;
    aggregate<T extends Conversacion_botAggregateArgs>(args: Prisma.Subset<T, Conversacion_botAggregateArgs>): Prisma.PrismaPromise<GetConversacion_botAggregateType<T>>;
    groupBy<T extends conversacion_botGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: conversacion_botGroupByArgs['orderBy'];
    } : {
        orderBy?: conversacion_botGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, conversacion_botGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConversacion_botGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: conversacion_botFieldRefs;
}
export interface Prisma__conversacion_botClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.conversacion_bot$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.conversacion_bot$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    canal_wa<T extends Prisma.conversacion_bot$canal_waArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.conversacion_bot$canal_waArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mensajes<T extends Prisma.conversacion_bot$mensajesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.conversacion_bot$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    ticket<T extends Prisma.conversacion_bot$ticketArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.conversacion_bot$ticketArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface conversacion_botFieldRefs {
    readonly id_conversacion: Prisma.FieldRef<"conversacion_bot", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"conversacion_bot", 'Int'>;
    readonly id_canal_wa: Prisma.FieldRef<"conversacion_bot", 'Int'>;
    readonly plataforma: Prisma.FieldRef<"conversacion_bot", 'String'>;
    readonly fecha_inicio: Prisma.FieldRef<"conversacion_bot", 'DateTime'>;
    readonly fecha_fin: Prisma.FieldRef<"conversacion_bot", 'DateTime'>;
    readonly derivada_humano: Prisma.FieldRef<"conversacion_bot", 'Boolean'>;
}
export type conversacion_botFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithRelationInput | Prisma.conversacion_botOrderByWithRelationInput[];
    cursor?: Prisma.conversacion_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Conversacion_botScalarFieldEnum | Prisma.Conversacion_botScalarFieldEnum[];
};
export type conversacion_botFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithRelationInput | Prisma.conversacion_botOrderByWithRelationInput[];
    cursor?: Prisma.conversacion_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Conversacion_botScalarFieldEnum | Prisma.Conversacion_botScalarFieldEnum[];
};
export type conversacion_botFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithRelationInput | Prisma.conversacion_botOrderByWithRelationInput[];
    cursor?: Prisma.conversacion_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Conversacion_botScalarFieldEnum | Prisma.Conversacion_botScalarFieldEnum[];
};
export type conversacion_botCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.conversacion_botCreateInput, Prisma.conversacion_botUncheckedCreateInput>;
};
export type conversacion_botCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.conversacion_botCreateManyInput | Prisma.conversacion_botCreateManyInput[];
    skipDuplicates?: boolean;
};
export type conversacion_botCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    data: Prisma.conversacion_botCreateManyInput | Prisma.conversacion_botCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.conversacion_botIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type conversacion_botUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.conversacion_botUpdateInput, Prisma.conversacion_botUncheckedUpdateInput>;
    where: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.conversacion_botUpdateManyMutationInput, Prisma.conversacion_botUncheckedUpdateManyInput>;
    where?: Prisma.conversacion_botWhereInput;
    limit?: number;
};
export type conversacion_botUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.conversacion_botUpdateManyMutationInput, Prisma.conversacion_botUncheckedUpdateManyInput>;
    where?: Prisma.conversacion_botWhereInput;
    limit?: number;
    include?: Prisma.conversacion_botIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type conversacion_botUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where: Prisma.conversacion_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.conversacion_botCreateInput, Prisma.conversacion_botUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.conversacion_botUpdateInput, Prisma.conversacion_botUncheckedUpdateInput>;
};
export type conversacion_botDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where: Prisma.conversacion_botWhereUniqueInput;
};
export type conversacion_botDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversacion_botWhereInput;
    limit?: number;
};
export type conversacion_bot$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type conversacion_bot$canal_waArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
};
export type conversacion_bot$mensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithRelationInput | Prisma.mensaje_botOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_botScalarFieldEnum | Prisma.Mensaje_botScalarFieldEnum[];
};
export type conversacion_bot$ticketArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where?: Prisma.ticketWhereInput;
};
export type conversacion_botDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
};
