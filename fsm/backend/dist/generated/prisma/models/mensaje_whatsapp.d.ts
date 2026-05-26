import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mensaje_whatsappModel = runtime.Types.Result.DefaultSelection<Prisma.$mensaje_whatsappPayload>;
export type AggregateMensaje_whatsapp = {
    _count: Mensaje_whatsappCountAggregateOutputType | null;
    _avg: Mensaje_whatsappAvgAggregateOutputType | null;
    _sum: Mensaje_whatsappSumAggregateOutputType | null;
    _min: Mensaje_whatsappMinAggregateOutputType | null;
    _max: Mensaje_whatsappMaxAggregateOutputType | null;
};
export type Mensaje_whatsappAvgAggregateOutputType = {
    id_mensaje_wa: number | null;
    id_canal: number | null;
    id_cliente: number | null;
    id_plantilla_wa: number | null;
};
export type Mensaje_whatsappSumAggregateOutputType = {
    id_mensaje_wa: bigint | null;
    id_canal: number | null;
    id_cliente: number | null;
    id_plantilla_wa: number | null;
};
export type Mensaje_whatsappMinAggregateOutputType = {
    id_mensaje_wa: bigint | null;
    id_canal: number | null;
    id_cliente: number | null;
    id_plantilla_wa: number | null;
    contenido: string | null;
    timestamp: Date | null;
    origen: string | null;
    estado: string | null;
};
export type Mensaje_whatsappMaxAggregateOutputType = {
    id_mensaje_wa: bigint | null;
    id_canal: number | null;
    id_cliente: number | null;
    id_plantilla_wa: number | null;
    contenido: string | null;
    timestamp: Date | null;
    origen: string | null;
    estado: string | null;
};
export type Mensaje_whatsappCountAggregateOutputType = {
    id_mensaje_wa: number;
    id_canal: number;
    id_cliente: number;
    id_plantilla_wa: number;
    contenido: number;
    timestamp: number;
    origen: number;
    estado: number;
    _all: number;
};
export type Mensaje_whatsappAvgAggregateInputType = {
    id_mensaje_wa?: true;
    id_canal?: true;
    id_cliente?: true;
    id_plantilla_wa?: true;
};
export type Mensaje_whatsappSumAggregateInputType = {
    id_mensaje_wa?: true;
    id_canal?: true;
    id_cliente?: true;
    id_plantilla_wa?: true;
};
export type Mensaje_whatsappMinAggregateInputType = {
    id_mensaje_wa?: true;
    id_canal?: true;
    id_cliente?: true;
    id_plantilla_wa?: true;
    contenido?: true;
    timestamp?: true;
    origen?: true;
    estado?: true;
};
export type Mensaje_whatsappMaxAggregateInputType = {
    id_mensaje_wa?: true;
    id_canal?: true;
    id_cliente?: true;
    id_plantilla_wa?: true;
    contenido?: true;
    timestamp?: true;
    origen?: true;
    estado?: true;
};
export type Mensaje_whatsappCountAggregateInputType = {
    id_mensaje_wa?: true;
    id_canal?: true;
    id_cliente?: true;
    id_plantilla_wa?: true;
    contenido?: true;
    timestamp?: true;
    origen?: true;
    estado?: true;
    _all?: true;
};
export type Mensaje_whatsappAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithRelationInput | Prisma.mensaje_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Mensaje_whatsappCountAggregateInputType;
    _avg?: Mensaje_whatsappAvgAggregateInputType;
    _sum?: Mensaje_whatsappSumAggregateInputType;
    _min?: Mensaje_whatsappMinAggregateInputType;
    _max?: Mensaje_whatsappMaxAggregateInputType;
};
export type GetMensaje_whatsappAggregateType<T extends Mensaje_whatsappAggregateArgs> = {
    [P in keyof T & keyof AggregateMensaje_whatsapp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMensaje_whatsapp[P]> : Prisma.GetScalarType<T[P], AggregateMensaje_whatsapp[P]>;
};
export type mensaje_whatsappGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithAggregationInput | Prisma.mensaje_whatsappOrderByWithAggregationInput[];
    by: Prisma.Mensaje_whatsappScalarFieldEnum[] | Prisma.Mensaje_whatsappScalarFieldEnum;
    having?: Prisma.mensaje_whatsappScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mensaje_whatsappCountAggregateInputType | true;
    _avg?: Mensaje_whatsappAvgAggregateInputType;
    _sum?: Mensaje_whatsappSumAggregateInputType;
    _min?: Mensaje_whatsappMinAggregateInputType;
    _max?: Mensaje_whatsappMaxAggregateInputType;
};
export type Mensaje_whatsappGroupByOutputType = {
    id_mensaje_wa: bigint;
    id_canal: number | null;
    id_cliente: number | null;
    id_plantilla_wa: number | null;
    contenido: string | null;
    timestamp: Date;
    origen: string | null;
    estado: string | null;
    _count: Mensaje_whatsappCountAggregateOutputType | null;
    _avg: Mensaje_whatsappAvgAggregateOutputType | null;
    _sum: Mensaje_whatsappSumAggregateOutputType | null;
    _min: Mensaje_whatsappMinAggregateOutputType | null;
    _max: Mensaje_whatsappMaxAggregateOutputType | null;
};
export type GetMensaje_whatsappGroupByPayload<T extends mensaje_whatsappGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mensaje_whatsappGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mensaje_whatsappGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mensaje_whatsappGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mensaje_whatsappGroupByOutputType[P]>;
}>>;
export type mensaje_whatsappWhereInput = {
    AND?: Prisma.mensaje_whatsappWhereInput | Prisma.mensaje_whatsappWhereInput[];
    OR?: Prisma.mensaje_whatsappWhereInput[];
    NOT?: Prisma.mensaje_whatsappWhereInput | Prisma.mensaje_whatsappWhereInput[];
    id_mensaje_wa?: Prisma.BigIntFilter<"mensaje_whatsapp"> | bigint | number;
    id_canal?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_plantilla_wa?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_whatsapp"> | Date | string;
    origen?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    estado?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    canal?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plantilla_wa?: Prisma.XOR<Prisma.Plantilla_whatsappNullableScalarRelationFilter, Prisma.plantilla_whatsappWhereInput> | null;
};
export type mensaje_whatsappOrderByWithRelationInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.canal_whatsappOrderByWithRelationInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    plantilla_wa?: Prisma.plantilla_whatsappOrderByWithRelationInput;
};
export type mensaje_whatsappWhereUniqueInput = Prisma.AtLeast<{
    id_mensaje_wa?: bigint | number;
    AND?: Prisma.mensaje_whatsappWhereInput | Prisma.mensaje_whatsappWhereInput[];
    OR?: Prisma.mensaje_whatsappWhereInput[];
    NOT?: Prisma.mensaje_whatsappWhereInput | Prisma.mensaje_whatsappWhereInput[];
    id_canal?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_plantilla_wa?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_whatsapp"> | Date | string;
    origen?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    estado?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    canal?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plantilla_wa?: Prisma.XOR<Prisma.Plantilla_whatsappNullableScalarRelationFilter, Prisma.plantilla_whatsappWhereInput> | null;
}, "id_mensaje_wa">;
export type mensaje_whatsappOrderByWithAggregationInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.mensaje_whatsappCountOrderByAggregateInput;
    _avg?: Prisma.mensaje_whatsappAvgOrderByAggregateInput;
    _max?: Prisma.mensaje_whatsappMaxOrderByAggregateInput;
    _min?: Prisma.mensaje_whatsappMinOrderByAggregateInput;
    _sum?: Prisma.mensaje_whatsappSumOrderByAggregateInput;
};
export type mensaje_whatsappScalarWhereWithAggregatesInput = {
    AND?: Prisma.mensaje_whatsappScalarWhereWithAggregatesInput | Prisma.mensaje_whatsappScalarWhereWithAggregatesInput[];
    OR?: Prisma.mensaje_whatsappScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mensaje_whatsappScalarWhereWithAggregatesInput | Prisma.mensaje_whatsappScalarWhereWithAggregatesInput[];
    id_mensaje_wa?: Prisma.BigIntWithAggregatesFilter<"mensaje_whatsapp"> | bigint | number;
    id_canal?: Prisma.IntNullableWithAggregatesFilter<"mensaje_whatsapp"> | number | null;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"mensaje_whatsapp"> | number | null;
    id_plantilla_wa?: Prisma.IntNullableWithAggregatesFilter<"mensaje_whatsapp"> | number | null;
    contenido?: Prisma.StringNullableWithAggregatesFilter<"mensaje_whatsapp"> | string | null;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"mensaje_whatsapp"> | Date | string;
    origen?: Prisma.StringNullableWithAggregatesFilter<"mensaje_whatsapp"> | string | null;
    estado?: Prisma.StringNullableWithAggregatesFilter<"mensaje_whatsapp"> | string | null;
};
export type mensaje_whatsappCreateInput = {
    id_mensaje_wa?: bigint | number;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
    canal?: Prisma.canal_whatsappCreateNestedOneWithoutMensajesInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutMensajes_waInput;
    plantilla_wa?: Prisma.plantilla_whatsappCreateNestedOneWithoutMensajesInput;
};
export type mensaje_whatsappUncheckedCreateInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_cliente?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappUpdateInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.canal_whatsappUpdateOneWithoutMensajesNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutMensajes_waNestedInput;
    plantilla_wa?: Prisma.plantilla_whatsappUpdateOneWithoutMensajesNestedInput;
};
export type mensaje_whatsappUncheckedUpdateInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappCreateManyInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_cliente?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappUpdateManyMutationInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappUncheckedUpdateManyInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Mensaje_whatsappListRelationFilter = {
    every?: Prisma.mensaje_whatsappWhereInput;
    some?: Prisma.mensaje_whatsappWhereInput;
    none?: Prisma.mensaje_whatsappWhereInput;
};
export type mensaje_whatsappOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mensaje_whatsappCountOrderByAggregateInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type mensaje_whatsappAvgOrderByAggregateInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrder;
};
export type mensaje_whatsappMaxOrderByAggregateInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type mensaje_whatsappMinOrderByAggregateInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type mensaje_whatsappSumOrderByAggregateInput = {
    id_mensaje_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plantilla_wa?: Prisma.SortOrder;
};
export type mensaje_whatsappCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput> | Prisma.mensaje_whatsappCreateWithoutClienteInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput | Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyClienteInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput> | Prisma.mensaje_whatsappCreateWithoutClienteInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput | Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyClienteInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput> | Prisma.mensaje_whatsappCreateWithoutClienteInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput | Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutClienteInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyClienteInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutClienteInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutClienteInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput> | Prisma.mensaje_whatsappCreateWithoutClienteInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput | Prisma.mensaje_whatsappCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutClienteInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyClienteInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutClienteInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutClienteInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappCreateNestedManyWithoutCanalInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput> | Prisma.mensaje_whatsappCreateWithoutCanalInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput | Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyCanalInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUncheckedCreateNestedManyWithoutCanalInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput> | Prisma.mensaje_whatsappCreateWithoutCanalInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput | Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyCanalInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUpdateManyWithoutCanalNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput> | Prisma.mensaje_whatsappCreateWithoutCanalInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput | Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutCanalInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutCanalInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyCanalInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutCanalInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutCanalInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutCanalInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutCanalInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappUncheckedUpdateManyWithoutCanalNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput> | Prisma.mensaje_whatsappCreateWithoutCanalInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput | Prisma.mensaje_whatsappCreateOrConnectWithoutCanalInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutCanalInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutCanalInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyCanalInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutCanalInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutCanalInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutCanalInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutCanalInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappCreateNestedManyWithoutPlantilla_waInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput> | Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput | Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyPlantilla_waInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUncheckedCreateNestedManyWithoutPlantilla_waInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput> | Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput | Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyPlantilla_waInputEnvelope;
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
};
export type mensaje_whatsappUpdateManyWithoutPlantilla_waNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput> | Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput | Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutPlantilla_waInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyPlantilla_waInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutPlantilla_waInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutPlantilla_waInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappUncheckedUpdateManyWithoutPlantilla_waNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput> | Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput[] | Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput[];
    connectOrCreate?: Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput | Prisma.mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput[];
    upsert?: Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpsertWithWhereUniqueWithoutPlantilla_waInput[];
    createMany?: Prisma.mensaje_whatsappCreateManyPlantilla_waInputEnvelope;
    set?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    disconnect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    delete?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    connect?: Prisma.mensaje_whatsappWhereUniqueInput | Prisma.mensaje_whatsappWhereUniqueInput[];
    update?: Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpdateWithWhereUniqueWithoutPlantilla_waInput[];
    updateMany?: Prisma.mensaje_whatsappUpdateManyWithWhereWithoutPlantilla_waInput | Prisma.mensaje_whatsappUpdateManyWithWhereWithoutPlantilla_waInput[];
    deleteMany?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
};
export type mensaje_whatsappCreateWithoutClienteInput = {
    id_mensaje_wa?: bigint | number;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
    canal?: Prisma.canal_whatsappCreateNestedOneWithoutMensajesInput;
    plantilla_wa?: Prisma.plantilla_whatsappCreateNestedOneWithoutMensajesInput;
};
export type mensaje_whatsappUncheckedCreateWithoutClienteInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappCreateOrConnectWithoutClienteInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput>;
};
export type mensaje_whatsappCreateManyClienteInputEnvelope = {
    data: Prisma.mensaje_whatsappCreateManyClienteInput | Prisma.mensaje_whatsappCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type mensaje_whatsappUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    update: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedCreateWithoutClienteInput>;
};
export type mensaje_whatsappUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutClienteInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutClienteInput>;
};
export type mensaje_whatsappUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.mensaje_whatsappScalarWhereInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateManyMutationInput, Prisma.mensaje_whatsappUncheckedUpdateManyWithoutClienteInput>;
};
export type mensaje_whatsappScalarWhereInput = {
    AND?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
    OR?: Prisma.mensaje_whatsappScalarWhereInput[];
    NOT?: Prisma.mensaje_whatsappScalarWhereInput | Prisma.mensaje_whatsappScalarWhereInput[];
    id_mensaje_wa?: Prisma.BigIntFilter<"mensaje_whatsapp"> | bigint | number;
    id_canal?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    id_plantilla_wa?: Prisma.IntNullableFilter<"mensaje_whatsapp"> | number | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_whatsapp"> | Date | string;
    origen?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
    estado?: Prisma.StringNullableFilter<"mensaje_whatsapp"> | string | null;
};
export type mensaje_whatsappCreateWithoutCanalInput = {
    id_mensaje_wa?: bigint | number;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutMensajes_waInput;
    plantilla_wa?: Prisma.plantilla_whatsappCreateNestedOneWithoutMensajesInput;
};
export type mensaje_whatsappUncheckedCreateWithoutCanalInput = {
    id_mensaje_wa?: bigint | number;
    id_cliente?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappCreateOrConnectWithoutCanalInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput>;
};
export type mensaje_whatsappCreateManyCanalInputEnvelope = {
    data: Prisma.mensaje_whatsappCreateManyCanalInput | Prisma.mensaje_whatsappCreateManyCanalInput[];
    skipDuplicates?: boolean;
};
export type mensaje_whatsappUpsertWithWhereUniqueWithoutCanalInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    update: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutCanalInput>;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedCreateWithoutCanalInput>;
};
export type mensaje_whatsappUpdateWithWhereUniqueWithoutCanalInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutCanalInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutCanalInput>;
};
export type mensaje_whatsappUpdateManyWithWhereWithoutCanalInput = {
    where: Prisma.mensaje_whatsappScalarWhereInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateManyMutationInput, Prisma.mensaje_whatsappUncheckedUpdateManyWithoutCanalInput>;
};
export type mensaje_whatsappCreateWithoutPlantilla_waInput = {
    id_mensaje_wa?: bigint | number;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
    canal?: Prisma.canal_whatsappCreateNestedOneWithoutMensajesInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutMensajes_waInput;
};
export type mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_cliente?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappCreateOrConnectWithoutPlantilla_waInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput>;
};
export type mensaje_whatsappCreateManyPlantilla_waInputEnvelope = {
    data: Prisma.mensaje_whatsappCreateManyPlantilla_waInput | Prisma.mensaje_whatsappCreateManyPlantilla_waInput[];
    skipDuplicates?: boolean;
};
export type mensaje_whatsappUpsertWithWhereUniqueWithoutPlantilla_waInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    update: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutPlantilla_waInput>;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedCreateWithoutPlantilla_waInput>;
};
export type mensaje_whatsappUpdateWithWhereUniqueWithoutPlantilla_waInput = {
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateWithoutPlantilla_waInput, Prisma.mensaje_whatsappUncheckedUpdateWithoutPlantilla_waInput>;
};
export type mensaje_whatsappUpdateManyWithWhereWithoutPlantilla_waInput = {
    where: Prisma.mensaje_whatsappScalarWhereInput;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateManyMutationInput, Prisma.mensaje_whatsappUncheckedUpdateManyWithoutPlantilla_waInput>;
};
export type mensaje_whatsappCreateManyClienteInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappUpdateWithoutClienteInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.canal_whatsappUpdateOneWithoutMensajesNestedInput;
    plantilla_wa?: Prisma.plantilla_whatsappUpdateOneWithoutMensajesNestedInput;
};
export type mensaje_whatsappUncheckedUpdateWithoutClienteInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappUncheckedUpdateManyWithoutClienteInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappCreateManyCanalInput = {
    id_mensaje_wa?: bigint | number;
    id_cliente?: number | null;
    id_plantilla_wa?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappUpdateWithoutCanalInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutMensajes_waNestedInput;
    plantilla_wa?: Prisma.plantilla_whatsappUpdateOneWithoutMensajesNestedInput;
};
export type mensaje_whatsappUncheckedUpdateWithoutCanalInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappUncheckedUpdateManyWithoutCanalInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plantilla_wa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappCreateManyPlantilla_waInput = {
    id_mensaje_wa?: bigint | number;
    id_canal?: number | null;
    id_cliente?: number | null;
    contenido?: string | null;
    timestamp?: Date | string;
    origen?: string | null;
    estado?: string | null;
};
export type mensaje_whatsappUpdateWithoutPlantilla_waInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.canal_whatsappUpdateOneWithoutMensajesNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutMensajes_waNestedInput;
};
export type mensaje_whatsappUncheckedUpdateWithoutPlantilla_waInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappUncheckedUpdateManyWithoutPlantilla_waInput = {
    id_mensaje_wa?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mensaje_whatsappSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje_wa?: boolean;
    id_canal?: boolean;
    id_cliente?: boolean;
    id_plantilla_wa?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    origen?: boolean;
    estado?: boolean;
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_whatsapp"]>;
export type mensaje_whatsappSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje_wa?: boolean;
    id_canal?: boolean;
    id_cliente?: boolean;
    id_plantilla_wa?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    origen?: boolean;
    estado?: boolean;
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_whatsapp"]>;
export type mensaje_whatsappSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje_wa?: boolean;
    id_canal?: boolean;
    id_cliente?: boolean;
    id_plantilla_wa?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    origen?: boolean;
    estado?: boolean;
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_whatsapp"]>;
export type mensaje_whatsappSelectScalar = {
    id_mensaje_wa?: boolean;
    id_canal?: boolean;
    id_cliente?: boolean;
    id_plantilla_wa?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    origen?: boolean;
    estado?: boolean;
};
export type mensaje_whatsappOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_mensaje_wa" | "id_canal" | "id_cliente" | "id_plantilla_wa" | "contenido" | "timestamp" | "origen" | "estado", ExtArgs["result"]["mensaje_whatsapp"]>;
export type mensaje_whatsappInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
};
export type mensaje_whatsappIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
};
export type mensaje_whatsappIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.mensaje_whatsapp$canalArgs<ExtArgs>;
    cliente?: boolean | Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>;
    plantilla_wa?: boolean | Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>;
};
export type $mensaje_whatsappPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mensaje_whatsapp";
    objects: {
        canal: Prisma.$canal_whatsappPayload<ExtArgs> | null;
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        plantilla_wa: Prisma.$plantilla_whatsappPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_mensaje_wa: bigint;
        id_canal: number | null;
        id_cliente: number | null;
        id_plantilla_wa: number | null;
        contenido: string | null;
        timestamp: Date;
        origen: string | null;
        estado: string | null;
    }, ExtArgs["result"]["mensaje_whatsapp"]>;
    composites: {};
};
export type mensaje_whatsappGetPayload<S extends boolean | null | undefined | mensaje_whatsappDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload, S>;
export type mensaje_whatsappCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mensaje_whatsappFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mensaje_whatsappCountAggregateInputType | true;
};
export interface mensaje_whatsappDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mensaje_whatsapp'];
        meta: {
            name: 'mensaje_whatsapp';
        };
    };
    findUnique<T extends mensaje_whatsappFindUniqueArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mensaje_whatsappFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mensaje_whatsappFindFirstArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappFindFirstArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mensaje_whatsappFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mensaje_whatsappFindManyArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mensaje_whatsappCreateArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappCreateArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mensaje_whatsappCreateManyArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mensaje_whatsappCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mensaje_whatsappDeleteArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappDeleteArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mensaje_whatsappUpdateArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappUpdateArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mensaje_whatsappDeleteManyArgs>(args?: Prisma.SelectSubset<T, mensaje_whatsappDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mensaje_whatsappUpdateManyArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mensaje_whatsappUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mensaje_whatsappUpsertArgs>(args: Prisma.SelectSubset<T, mensaje_whatsappUpsertArgs<ExtArgs>>): Prisma.Prisma__mensaje_whatsappClient<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mensaje_whatsappCountArgs>(args?: Prisma.Subset<T, mensaje_whatsappCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mensaje_whatsappCountAggregateOutputType> : number>;
    aggregate<T extends Mensaje_whatsappAggregateArgs>(args: Prisma.Subset<T, Mensaje_whatsappAggregateArgs>): Prisma.PrismaPromise<GetMensaje_whatsappAggregateType<T>>;
    groupBy<T extends mensaje_whatsappGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mensaje_whatsappGroupByArgs['orderBy'];
    } : {
        orderBy?: mensaje_whatsappGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mensaje_whatsappGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensaje_whatsappGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mensaje_whatsappFieldRefs;
}
export interface Prisma__mensaje_whatsappClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canal<T extends Prisma.mensaje_whatsapp$canalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mensaje_whatsapp$canalArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.mensaje_whatsapp$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mensaje_whatsapp$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plantilla_wa<T extends Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mensaje_whatsapp$plantilla_waArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mensaje_whatsappFieldRefs {
    readonly id_mensaje_wa: Prisma.FieldRef<"mensaje_whatsapp", 'BigInt'>;
    readonly id_canal: Prisma.FieldRef<"mensaje_whatsapp", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"mensaje_whatsapp", 'Int'>;
    readonly id_plantilla_wa: Prisma.FieldRef<"mensaje_whatsapp", 'Int'>;
    readonly contenido: Prisma.FieldRef<"mensaje_whatsapp", 'String'>;
    readonly timestamp: Prisma.FieldRef<"mensaje_whatsapp", 'DateTime'>;
    readonly origen: Prisma.FieldRef<"mensaje_whatsapp", 'String'>;
    readonly estado: Prisma.FieldRef<"mensaje_whatsapp", 'String'>;
}
export type mensaje_whatsappFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where: Prisma.mensaje_whatsappWhereUniqueInput;
};
export type mensaje_whatsappFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where: Prisma.mensaje_whatsappWhereUniqueInput;
};
export type mensaje_whatsappFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithRelationInput | Prisma.mensaje_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_whatsappScalarFieldEnum | Prisma.Mensaje_whatsappScalarFieldEnum[];
};
export type mensaje_whatsappFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithRelationInput | Prisma.mensaje_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_whatsappScalarFieldEnum | Prisma.Mensaje_whatsappScalarFieldEnum[];
};
export type mensaje_whatsappFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithRelationInput | Prisma.mensaje_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_whatsappScalarFieldEnum | Prisma.Mensaje_whatsappScalarFieldEnum[];
};
export type mensaje_whatsappCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.mensaje_whatsappCreateInput, Prisma.mensaje_whatsappUncheckedCreateInput>;
};
export type mensaje_whatsappCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mensaje_whatsappCreateManyInput | Prisma.mensaje_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mensaje_whatsappCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    data: Prisma.mensaje_whatsappCreateManyInput | Prisma.mensaje_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mensaje_whatsappIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mensaje_whatsappUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateInput, Prisma.mensaje_whatsappUncheckedUpdateInput>;
    where: Prisma.mensaje_whatsappWhereUniqueInput;
};
export type mensaje_whatsappUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateManyMutationInput, Prisma.mensaje_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.mensaje_whatsappWhereInput;
    limit?: number;
};
export type mensaje_whatsappUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mensaje_whatsappUpdateManyMutationInput, Prisma.mensaje_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.mensaje_whatsappWhereInput;
    limit?: number;
    include?: Prisma.mensaje_whatsappIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mensaje_whatsappUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where: Prisma.mensaje_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_whatsappCreateInput, Prisma.mensaje_whatsappUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mensaje_whatsappUpdateInput, Prisma.mensaje_whatsappUncheckedUpdateInput>;
};
export type mensaje_whatsappDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where: Prisma.mensaje_whatsappWhereUniqueInput;
};
export type mensaje_whatsappDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_whatsappWhereInput;
    limit?: number;
};
export type mensaje_whatsapp$canalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
};
export type mensaje_whatsapp$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type mensaje_whatsapp$plantilla_waArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where?: Prisma.plantilla_whatsappWhereInput;
};
export type mensaje_whatsappDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
};
