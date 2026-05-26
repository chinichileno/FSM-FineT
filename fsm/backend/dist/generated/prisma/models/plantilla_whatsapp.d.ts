import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type plantilla_whatsappModel = runtime.Types.Result.DefaultSelection<Prisma.$plantilla_whatsappPayload>;
export type AggregatePlantilla_whatsapp = {
    _count: Plantilla_whatsappCountAggregateOutputType | null;
    _avg: Plantilla_whatsappAvgAggregateOutputType | null;
    _sum: Plantilla_whatsappSumAggregateOutputType | null;
    _min: Plantilla_whatsappMinAggregateOutputType | null;
    _max: Plantilla_whatsappMaxAggregateOutputType | null;
};
export type Plantilla_whatsappAvgAggregateOutputType = {
    id_plantilla_wa: number | null;
    id_canal: number | null;
};
export type Plantilla_whatsappSumAggregateOutputType = {
    id_plantilla_wa: number | null;
    id_canal: number | null;
};
export type Plantilla_whatsappMinAggregateOutputType = {
    id_plantilla_wa: number | null;
    id_canal: number | null;
    nombre_plantilla: string | null;
    contenido: string | null;
    tipo_uso: string | null;
};
export type Plantilla_whatsappMaxAggregateOutputType = {
    id_plantilla_wa: number | null;
    id_canal: number | null;
    nombre_plantilla: string | null;
    contenido: string | null;
    tipo_uso: string | null;
};
export type Plantilla_whatsappCountAggregateOutputType = {
    id_plantilla_wa: number;
    id_canal: number;
    nombre_plantilla: number;
    contenido: number;
    tipo_uso: number;
    _all: number;
};
export type Plantilla_whatsappAvgAggregateInputType = {
    id_plantilla_wa?: true;
    id_canal?: true;
};
export type Plantilla_whatsappSumAggregateInputType = {
    id_plantilla_wa?: true;
    id_canal?: true;
};
export type Plantilla_whatsappMinAggregateInputType = {
    id_plantilla_wa?: true;
    id_canal?: true;
    nombre_plantilla?: true;
    contenido?: true;
    tipo_uso?: true;
};
export type Plantilla_whatsappMaxAggregateInputType = {
    id_plantilla_wa?: true;
    id_canal?: true;
    nombre_plantilla?: true;
    contenido?: true;
    tipo_uso?: true;
};
export type Plantilla_whatsappCountAggregateInputType = {
    id_plantilla_wa?: true;
    id_canal?: true;
    nombre_plantilla?: true;
    contenido?: true;
    tipo_uso?: true;
    _all?: true;
};
export type Plantilla_whatsappAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithRelationInput | Prisma.plantilla_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Plantilla_whatsappCountAggregateInputType;
    _avg?: Plantilla_whatsappAvgAggregateInputType;
    _sum?: Plantilla_whatsappSumAggregateInputType;
    _min?: Plantilla_whatsappMinAggregateInputType;
    _max?: Plantilla_whatsappMaxAggregateInputType;
};
export type GetPlantilla_whatsappAggregateType<T extends Plantilla_whatsappAggregateArgs> = {
    [P in keyof T & keyof AggregatePlantilla_whatsapp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlantilla_whatsapp[P]> : Prisma.GetScalarType<T[P], AggregatePlantilla_whatsapp[P]>;
};
export type plantilla_whatsappGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithAggregationInput | Prisma.plantilla_whatsappOrderByWithAggregationInput[];
    by: Prisma.Plantilla_whatsappScalarFieldEnum[] | Prisma.Plantilla_whatsappScalarFieldEnum;
    having?: Prisma.plantilla_whatsappScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Plantilla_whatsappCountAggregateInputType | true;
    _avg?: Plantilla_whatsappAvgAggregateInputType;
    _sum?: Plantilla_whatsappSumAggregateInputType;
    _min?: Plantilla_whatsappMinAggregateInputType;
    _max?: Plantilla_whatsappMaxAggregateInputType;
};
export type Plantilla_whatsappGroupByOutputType = {
    id_plantilla_wa: number;
    id_canal: number | null;
    nombre_plantilla: string | null;
    contenido: string | null;
    tipo_uso: string | null;
    _count: Plantilla_whatsappCountAggregateOutputType | null;
    _avg: Plantilla_whatsappAvgAggregateOutputType | null;
    _sum: Plantilla_whatsappSumAggregateOutputType | null;
    _min: Plantilla_whatsappMinAggregateOutputType | null;
    _max: Plantilla_whatsappMaxAggregateOutputType | null;
};
export type GetPlantilla_whatsappGroupByPayload<T extends plantilla_whatsappGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Plantilla_whatsappGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Plantilla_whatsappGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Plantilla_whatsappGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Plantilla_whatsappGroupByOutputType[P]>;
}>>;
export type plantilla_whatsappWhereInput = {
    AND?: Prisma.plantilla_whatsappWhereInput | Prisma.plantilla_whatsappWhereInput[];
    OR?: Prisma.plantilla_whatsappWhereInput[];
    NOT?: Prisma.plantilla_whatsappWhereInput | Prisma.plantilla_whatsappWhereInput[];
    id_plantilla_wa?: Prisma.IntFilter<"plantilla_whatsapp"> | number;
    id_canal?: Prisma.IntNullableFilter<"plantilla_whatsapp"> | number | null;
    nombre_plantilla?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    contenido?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    tipo_uso?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    canal?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    mensajes?: Prisma.Mensaje_whatsappListRelationFilter;
};
export type plantilla_whatsappOrderByWithRelationInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_plantilla?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_uso?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.canal_whatsappOrderByWithRelationInput;
    mensajes?: Prisma.mensaje_whatsappOrderByRelationAggregateInput;
};
export type plantilla_whatsappWhereUniqueInput = Prisma.AtLeast<{
    id_plantilla_wa?: number;
    AND?: Prisma.plantilla_whatsappWhereInput | Prisma.plantilla_whatsappWhereInput[];
    OR?: Prisma.plantilla_whatsappWhereInput[];
    NOT?: Prisma.plantilla_whatsappWhereInput | Prisma.plantilla_whatsappWhereInput[];
    id_canal?: Prisma.IntNullableFilter<"plantilla_whatsapp"> | number | null;
    nombre_plantilla?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    contenido?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    tipo_uso?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    canal?: Prisma.XOR<Prisma.Canal_whatsappNullableScalarRelationFilter, Prisma.canal_whatsappWhereInput> | null;
    mensajes?: Prisma.Mensaje_whatsappListRelationFilter;
}, "id_plantilla_wa">;
export type plantilla_whatsappOrderByWithAggregationInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_plantilla?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_uso?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.plantilla_whatsappCountOrderByAggregateInput;
    _avg?: Prisma.plantilla_whatsappAvgOrderByAggregateInput;
    _max?: Prisma.plantilla_whatsappMaxOrderByAggregateInput;
    _min?: Prisma.plantilla_whatsappMinOrderByAggregateInput;
    _sum?: Prisma.plantilla_whatsappSumOrderByAggregateInput;
};
export type plantilla_whatsappScalarWhereWithAggregatesInput = {
    AND?: Prisma.plantilla_whatsappScalarWhereWithAggregatesInput | Prisma.plantilla_whatsappScalarWhereWithAggregatesInput[];
    OR?: Prisma.plantilla_whatsappScalarWhereWithAggregatesInput[];
    NOT?: Prisma.plantilla_whatsappScalarWhereWithAggregatesInput | Prisma.plantilla_whatsappScalarWhereWithAggregatesInput[];
    id_plantilla_wa?: Prisma.IntWithAggregatesFilter<"plantilla_whatsapp"> | number;
    id_canal?: Prisma.IntNullableWithAggregatesFilter<"plantilla_whatsapp"> | number | null;
    nombre_plantilla?: Prisma.StringNullableWithAggregatesFilter<"plantilla_whatsapp"> | string | null;
    contenido?: Prisma.StringNullableWithAggregatesFilter<"plantilla_whatsapp"> | string | null;
    tipo_uso?: Prisma.StringNullableWithAggregatesFilter<"plantilla_whatsapp"> | string | null;
};
export type plantilla_whatsappCreateInput = {
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
    canal?: Prisma.canal_whatsappCreateNestedOneWithoutPlantillasInput;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutPlantilla_waInput;
};
export type plantilla_whatsappUncheckedCreateInput = {
    id_plantilla_wa?: number;
    id_canal?: number | null;
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutPlantilla_waInput;
};
export type plantilla_whatsappUpdateInput = {
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.canal_whatsappUpdateOneWithoutPlantillasNestedInput;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutPlantilla_waNestedInput;
};
export type plantilla_whatsappUncheckedUpdateInput = {
    id_plantilla_wa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutPlantilla_waNestedInput;
};
export type plantilla_whatsappCreateManyInput = {
    id_plantilla_wa?: number;
    id_canal?: number | null;
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
};
export type plantilla_whatsappUpdateManyMutationInput = {
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type plantilla_whatsappUncheckedUpdateManyInput = {
    id_plantilla_wa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Plantilla_whatsappListRelationFilter = {
    every?: Prisma.plantilla_whatsappWhereInput;
    some?: Prisma.plantilla_whatsappWhereInput;
    none?: Prisma.plantilla_whatsappWhereInput;
};
export type plantilla_whatsappOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type plantilla_whatsappCountOrderByAggregateInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    nombre_plantilla?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo_uso?: Prisma.SortOrder;
};
export type plantilla_whatsappAvgOrderByAggregateInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
};
export type plantilla_whatsappMaxOrderByAggregateInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    nombre_plantilla?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo_uso?: Prisma.SortOrder;
};
export type plantilla_whatsappMinOrderByAggregateInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
    nombre_plantilla?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    tipo_uso?: Prisma.SortOrder;
};
export type plantilla_whatsappSumOrderByAggregateInput = {
    id_plantilla_wa?: Prisma.SortOrder;
    id_canal?: Prisma.SortOrder;
};
export type Plantilla_whatsappNullableScalarRelationFilter = {
    is?: Prisma.plantilla_whatsappWhereInput | null;
    isNot?: Prisma.plantilla_whatsappWhereInput | null;
};
export type plantilla_whatsappCreateNestedManyWithoutCanalInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput> | Prisma.plantilla_whatsappCreateWithoutCanalInput[] | Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput | Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput[];
    createMany?: Prisma.plantilla_whatsappCreateManyCanalInputEnvelope;
    connect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
};
export type plantilla_whatsappUncheckedCreateNestedManyWithoutCanalInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput> | Prisma.plantilla_whatsappCreateWithoutCanalInput[] | Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput | Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput[];
    createMany?: Prisma.plantilla_whatsappCreateManyCanalInputEnvelope;
    connect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
};
export type plantilla_whatsappUpdateManyWithoutCanalNestedInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput> | Prisma.plantilla_whatsappCreateWithoutCanalInput[] | Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput | Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput[];
    upsert?: Prisma.plantilla_whatsappUpsertWithWhereUniqueWithoutCanalInput | Prisma.plantilla_whatsappUpsertWithWhereUniqueWithoutCanalInput[];
    createMany?: Prisma.plantilla_whatsappCreateManyCanalInputEnvelope;
    set?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    disconnect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    delete?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    connect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    update?: Prisma.plantilla_whatsappUpdateWithWhereUniqueWithoutCanalInput | Prisma.plantilla_whatsappUpdateWithWhereUniqueWithoutCanalInput[];
    updateMany?: Prisma.plantilla_whatsappUpdateManyWithWhereWithoutCanalInput | Prisma.plantilla_whatsappUpdateManyWithWhereWithoutCanalInput[];
    deleteMany?: Prisma.plantilla_whatsappScalarWhereInput | Prisma.plantilla_whatsappScalarWhereInput[];
};
export type plantilla_whatsappUncheckedUpdateManyWithoutCanalNestedInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput> | Prisma.plantilla_whatsappCreateWithoutCanalInput[] | Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput[];
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput | Prisma.plantilla_whatsappCreateOrConnectWithoutCanalInput[];
    upsert?: Prisma.plantilla_whatsappUpsertWithWhereUniqueWithoutCanalInput | Prisma.plantilla_whatsappUpsertWithWhereUniqueWithoutCanalInput[];
    createMany?: Prisma.plantilla_whatsappCreateManyCanalInputEnvelope;
    set?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    disconnect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    delete?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    connect?: Prisma.plantilla_whatsappWhereUniqueInput | Prisma.plantilla_whatsappWhereUniqueInput[];
    update?: Prisma.plantilla_whatsappUpdateWithWhereUniqueWithoutCanalInput | Prisma.plantilla_whatsappUpdateWithWhereUniqueWithoutCanalInput[];
    updateMany?: Prisma.plantilla_whatsappUpdateManyWithWhereWithoutCanalInput | Prisma.plantilla_whatsappUpdateManyWithWhereWithoutCanalInput[];
    deleteMany?: Prisma.plantilla_whatsappScalarWhereInput | Prisma.plantilla_whatsappScalarWhereInput[];
};
export type plantilla_whatsappCreateNestedOneWithoutMensajesInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutMensajesInput;
    connect?: Prisma.plantilla_whatsappWhereUniqueInput;
};
export type plantilla_whatsappUpdateOneWithoutMensajesNestedInput = {
    create?: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.plantilla_whatsappCreateOrConnectWithoutMensajesInput;
    upsert?: Prisma.plantilla_whatsappUpsertWithoutMensajesInput;
    disconnect?: Prisma.plantilla_whatsappWhereInput | boolean;
    delete?: Prisma.plantilla_whatsappWhereInput | boolean;
    connect?: Prisma.plantilla_whatsappWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.plantilla_whatsappUpdateToOneWithWhereWithoutMensajesInput, Prisma.plantilla_whatsappUpdateWithoutMensajesInput>, Prisma.plantilla_whatsappUncheckedUpdateWithoutMensajesInput>;
};
export type plantilla_whatsappCreateWithoutCanalInput = {
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutPlantilla_waInput;
};
export type plantilla_whatsappUncheckedCreateWithoutCanalInput = {
    id_plantilla_wa?: number;
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutPlantilla_waInput;
};
export type plantilla_whatsappCreateOrConnectWithoutCanalInput = {
    where: Prisma.plantilla_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput>;
};
export type plantilla_whatsappCreateManyCanalInputEnvelope = {
    data: Prisma.plantilla_whatsappCreateManyCanalInput | Prisma.plantilla_whatsappCreateManyCanalInput[];
    skipDuplicates?: boolean;
};
export type plantilla_whatsappUpsertWithWhereUniqueWithoutCanalInput = {
    where: Prisma.plantilla_whatsappWhereUniqueInput;
    update: Prisma.XOR<Prisma.plantilla_whatsappUpdateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedUpdateWithoutCanalInput>;
    create: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedCreateWithoutCanalInput>;
};
export type plantilla_whatsappUpdateWithWhereUniqueWithoutCanalInput = {
    where: Prisma.plantilla_whatsappWhereUniqueInput;
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateWithoutCanalInput, Prisma.plantilla_whatsappUncheckedUpdateWithoutCanalInput>;
};
export type plantilla_whatsappUpdateManyWithWhereWithoutCanalInput = {
    where: Prisma.plantilla_whatsappScalarWhereInput;
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateManyMutationInput, Prisma.plantilla_whatsappUncheckedUpdateManyWithoutCanalInput>;
};
export type plantilla_whatsappScalarWhereInput = {
    AND?: Prisma.plantilla_whatsappScalarWhereInput | Prisma.plantilla_whatsappScalarWhereInput[];
    OR?: Prisma.plantilla_whatsappScalarWhereInput[];
    NOT?: Prisma.plantilla_whatsappScalarWhereInput | Prisma.plantilla_whatsappScalarWhereInput[];
    id_plantilla_wa?: Prisma.IntFilter<"plantilla_whatsapp"> | number;
    id_canal?: Prisma.IntNullableFilter<"plantilla_whatsapp"> | number | null;
    nombre_plantilla?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    contenido?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
    tipo_uso?: Prisma.StringNullableFilter<"plantilla_whatsapp"> | string | null;
};
export type plantilla_whatsappCreateWithoutMensajesInput = {
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
    canal?: Prisma.canal_whatsappCreateNestedOneWithoutPlantillasInput;
};
export type plantilla_whatsappUncheckedCreateWithoutMensajesInput = {
    id_plantilla_wa?: number;
    id_canal?: number | null;
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
};
export type plantilla_whatsappCreateOrConnectWithoutMensajesInput = {
    where: Prisma.plantilla_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedCreateWithoutMensajesInput>;
};
export type plantilla_whatsappUpsertWithoutMensajesInput = {
    update: Prisma.XOR<Prisma.plantilla_whatsappUpdateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedUpdateWithoutMensajesInput>;
    create: Prisma.XOR<Prisma.plantilla_whatsappCreateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedCreateWithoutMensajesInput>;
    where?: Prisma.plantilla_whatsappWhereInput;
};
export type plantilla_whatsappUpdateToOneWithWhereWithoutMensajesInput = {
    where?: Prisma.plantilla_whatsappWhereInput;
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateWithoutMensajesInput, Prisma.plantilla_whatsappUncheckedUpdateWithoutMensajesInput>;
};
export type plantilla_whatsappUpdateWithoutMensajesInput = {
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.canal_whatsappUpdateOneWithoutPlantillasNestedInput;
};
export type plantilla_whatsappUncheckedUpdateWithoutMensajesInput = {
    id_plantilla_wa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_canal?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type plantilla_whatsappCreateManyCanalInput = {
    id_plantilla_wa?: number;
    nombre_plantilla?: string | null;
    contenido?: string | null;
    tipo_uso?: string | null;
};
export type plantilla_whatsappUpdateWithoutCanalInput = {
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutPlantilla_waNestedInput;
};
export type plantilla_whatsappUncheckedUpdateWithoutCanalInput = {
    id_plantilla_wa?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutPlantilla_waNestedInput;
};
export type plantilla_whatsappUncheckedUpdateManyWithoutCanalInput = {
    id_plantilla_wa?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_plantilla?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tipo_uso?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Plantilla_whatsappCountOutputType = {
    mensajes: number;
};
export type Plantilla_whatsappCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mensajes?: boolean | Plantilla_whatsappCountOutputTypeCountMensajesArgs;
};
export type Plantilla_whatsappCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Plantilla_whatsappCountOutputTypeSelect<ExtArgs> | null;
};
export type Plantilla_whatsappCountOutputTypeCountMensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_whatsappWhereInput;
};
export type plantilla_whatsappSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla_wa?: boolean;
    id_canal?: boolean;
    nombre_plantilla?: boolean;
    contenido?: boolean;
    tipo_uso?: boolean;
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
    mensajes?: boolean | Prisma.plantilla_whatsapp$mensajesArgs<ExtArgs>;
    _count?: boolean | Prisma.Plantilla_whatsappCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plantilla_whatsapp"]>;
export type plantilla_whatsappSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla_wa?: boolean;
    id_canal?: boolean;
    nombre_plantilla?: boolean;
    contenido?: boolean;
    tipo_uso?: boolean;
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
}, ExtArgs["result"]["plantilla_whatsapp"]>;
export type plantilla_whatsappSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla_wa?: boolean;
    id_canal?: boolean;
    nombre_plantilla?: boolean;
    contenido?: boolean;
    tipo_uso?: boolean;
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
}, ExtArgs["result"]["plantilla_whatsapp"]>;
export type plantilla_whatsappSelectScalar = {
    id_plantilla_wa?: boolean;
    id_canal?: boolean;
    nombre_plantilla?: boolean;
    contenido?: boolean;
    tipo_uso?: boolean;
};
export type plantilla_whatsappOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_plantilla_wa" | "id_canal" | "nombre_plantilla" | "contenido" | "tipo_uso", ExtArgs["result"]["plantilla_whatsapp"]>;
export type plantilla_whatsappInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
    mensajes?: boolean | Prisma.plantilla_whatsapp$mensajesArgs<ExtArgs>;
    _count?: boolean | Prisma.Plantilla_whatsappCountOutputTypeDefaultArgs<ExtArgs>;
};
export type plantilla_whatsappIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
};
export type plantilla_whatsappIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    canal?: boolean | Prisma.plantilla_whatsapp$canalArgs<ExtArgs>;
};
export type $plantilla_whatsappPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "plantilla_whatsapp";
    objects: {
        canal: Prisma.$canal_whatsappPayload<ExtArgs> | null;
        mensajes: Prisma.$mensaje_whatsappPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_plantilla_wa: number;
        id_canal: number | null;
        nombre_plantilla: string | null;
        contenido: string | null;
        tipo_uso: string | null;
    }, ExtArgs["result"]["plantilla_whatsapp"]>;
    composites: {};
};
export type plantilla_whatsappGetPayload<S extends boolean | null | undefined | plantilla_whatsappDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload, S>;
export type plantilla_whatsappCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<plantilla_whatsappFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Plantilla_whatsappCountAggregateInputType | true;
};
export interface plantilla_whatsappDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['plantilla_whatsapp'];
        meta: {
            name: 'plantilla_whatsapp';
        };
    };
    findUnique<T extends plantilla_whatsappFindUniqueArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappFindUniqueArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends plantilla_whatsappFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends plantilla_whatsappFindFirstArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappFindFirstArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends plantilla_whatsappFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends plantilla_whatsappFindManyArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends plantilla_whatsappCreateArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappCreateArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends plantilla_whatsappCreateManyArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends plantilla_whatsappCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends plantilla_whatsappDeleteArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappDeleteArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends plantilla_whatsappUpdateArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappUpdateArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends plantilla_whatsappDeleteManyArgs>(args?: Prisma.SelectSubset<T, plantilla_whatsappDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends plantilla_whatsappUpdateManyArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends plantilla_whatsappUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends plantilla_whatsappUpsertArgs>(args: Prisma.SelectSubset<T, plantilla_whatsappUpsertArgs<ExtArgs>>): Prisma.Prisma__plantilla_whatsappClient<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends plantilla_whatsappCountArgs>(args?: Prisma.Subset<T, plantilla_whatsappCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Plantilla_whatsappCountAggregateOutputType> : number>;
    aggregate<T extends Plantilla_whatsappAggregateArgs>(args: Prisma.Subset<T, Plantilla_whatsappAggregateArgs>): Prisma.PrismaPromise<GetPlantilla_whatsappAggregateType<T>>;
    groupBy<T extends plantilla_whatsappGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: plantilla_whatsappGroupByArgs['orderBy'];
    } : {
        orderBy?: plantilla_whatsappGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, plantilla_whatsappGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantilla_whatsappGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: plantilla_whatsappFieldRefs;
}
export interface Prisma__plantilla_whatsappClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    canal<T extends Prisma.plantilla_whatsapp$canalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plantilla_whatsapp$canalArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mensajes<T extends Prisma.plantilla_whatsapp$mensajesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plantilla_whatsapp$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface plantilla_whatsappFieldRefs {
    readonly id_plantilla_wa: Prisma.FieldRef<"plantilla_whatsapp", 'Int'>;
    readonly id_canal: Prisma.FieldRef<"plantilla_whatsapp", 'Int'>;
    readonly nombre_plantilla: Prisma.FieldRef<"plantilla_whatsapp", 'String'>;
    readonly contenido: Prisma.FieldRef<"plantilla_whatsapp", 'String'>;
    readonly tipo_uso: Prisma.FieldRef<"plantilla_whatsapp", 'String'>;
}
export type plantilla_whatsappFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where: Prisma.plantilla_whatsappWhereUniqueInput;
};
export type plantilla_whatsappFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where: Prisma.plantilla_whatsappWhereUniqueInput;
};
export type plantilla_whatsappFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithRelationInput | Prisma.plantilla_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_whatsappScalarFieldEnum | Prisma.Plantilla_whatsappScalarFieldEnum[];
};
export type plantilla_whatsappFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithRelationInput | Prisma.plantilla_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_whatsappScalarFieldEnum | Prisma.Plantilla_whatsappScalarFieldEnum[];
};
export type plantilla_whatsappFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithRelationInput | Prisma.plantilla_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_whatsappScalarFieldEnum | Prisma.Plantilla_whatsappScalarFieldEnum[];
};
export type plantilla_whatsappCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.plantilla_whatsappCreateInput, Prisma.plantilla_whatsappUncheckedCreateInput>;
};
export type plantilla_whatsappCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.plantilla_whatsappCreateManyInput | Prisma.plantilla_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
};
export type plantilla_whatsappCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    data: Prisma.plantilla_whatsappCreateManyInput | Prisma.plantilla_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.plantilla_whatsappIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type plantilla_whatsappUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateInput, Prisma.plantilla_whatsappUncheckedUpdateInput>;
    where: Prisma.plantilla_whatsappWhereUniqueInput;
};
export type plantilla_whatsappUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateManyMutationInput, Prisma.plantilla_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.plantilla_whatsappWhereInput;
    limit?: number;
};
export type plantilla_whatsappUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.plantilla_whatsappUpdateManyMutationInput, Prisma.plantilla_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.plantilla_whatsappWhereInput;
    limit?: number;
    include?: Prisma.plantilla_whatsappIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type plantilla_whatsappUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where: Prisma.plantilla_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.plantilla_whatsappCreateInput, Prisma.plantilla_whatsappUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.plantilla_whatsappUpdateInput, Prisma.plantilla_whatsappUncheckedUpdateInput>;
};
export type plantilla_whatsappDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where: Prisma.plantilla_whatsappWhereUniqueInput;
};
export type plantilla_whatsappDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_whatsappWhereInput;
    limit?: number;
};
export type plantilla_whatsapp$canalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
};
export type plantilla_whatsapp$mensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type plantilla_whatsappDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
};
