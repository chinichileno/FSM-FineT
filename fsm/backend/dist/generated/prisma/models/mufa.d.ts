import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mufaModel = runtime.Types.Result.DefaultSelection<Prisma.$mufaPayload>;
export type AggregateMufa = {
    _count: MufaCountAggregateOutputType | null;
    _avg: MufaAvgAggregateOutputType | null;
    _sum: MufaSumAggregateOutputType | null;
    _min: MufaMinAggregateOutputType | null;
    _max: MufaMaxAggregateOutputType | null;
};
export type MufaAvgAggregateOutputType = {
    id_mufa: number | null;
    id_tarjeta_pon: number | null;
};
export type MufaSumAggregateOutputType = {
    id_mufa: number | null;
    id_tarjeta_pon: number | null;
};
export type MufaMinAggregateOutputType = {
    id_mufa: number | null;
    id_tarjeta_pon: number | null;
    identificador: string | null;
    ubicacion: string | null;
};
export type MufaMaxAggregateOutputType = {
    id_mufa: number | null;
    id_tarjeta_pon: number | null;
    identificador: string | null;
    ubicacion: string | null;
};
export type MufaCountAggregateOutputType = {
    id_mufa: number;
    id_tarjeta_pon: number;
    identificador: number;
    ubicacion: number;
    _all: number;
};
export type MufaAvgAggregateInputType = {
    id_mufa?: true;
    id_tarjeta_pon?: true;
};
export type MufaSumAggregateInputType = {
    id_mufa?: true;
    id_tarjeta_pon?: true;
};
export type MufaMinAggregateInputType = {
    id_mufa?: true;
    id_tarjeta_pon?: true;
    identificador?: true;
    ubicacion?: true;
};
export type MufaMaxAggregateInputType = {
    id_mufa?: true;
    id_tarjeta_pon?: true;
    identificador?: true;
    ubicacion?: true;
};
export type MufaCountAggregateInputType = {
    id_mufa?: true;
    id_tarjeta_pon?: true;
    identificador?: true;
    ubicacion?: true;
    _all?: true;
};
export type MufaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mufaWhereInput;
    orderBy?: Prisma.mufaOrderByWithRelationInput | Prisma.mufaOrderByWithRelationInput[];
    cursor?: Prisma.mufaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MufaCountAggregateInputType;
    _avg?: MufaAvgAggregateInputType;
    _sum?: MufaSumAggregateInputType;
    _min?: MufaMinAggregateInputType;
    _max?: MufaMaxAggregateInputType;
};
export type GetMufaAggregateType<T extends MufaAggregateArgs> = {
    [P in keyof T & keyof AggregateMufa]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMufa[P]> : Prisma.GetScalarType<T[P], AggregateMufa[P]>;
};
export type mufaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mufaWhereInput;
    orderBy?: Prisma.mufaOrderByWithAggregationInput | Prisma.mufaOrderByWithAggregationInput[];
    by: Prisma.MufaScalarFieldEnum[] | Prisma.MufaScalarFieldEnum;
    having?: Prisma.mufaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MufaCountAggregateInputType | true;
    _avg?: MufaAvgAggregateInputType;
    _sum?: MufaSumAggregateInputType;
    _min?: MufaMinAggregateInputType;
    _max?: MufaMaxAggregateInputType;
};
export type MufaGroupByOutputType = {
    id_mufa: number;
    id_tarjeta_pon: number | null;
    identificador: string | null;
    ubicacion: string | null;
    _count: MufaCountAggregateOutputType | null;
    _avg: MufaAvgAggregateOutputType | null;
    _sum: MufaSumAggregateOutputType | null;
    _min: MufaMinAggregateOutputType | null;
    _max: MufaMaxAggregateOutputType | null;
};
export type GetMufaGroupByPayload<T extends mufaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MufaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MufaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MufaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MufaGroupByOutputType[P]>;
}>>;
export type mufaWhereInput = {
    AND?: Prisma.mufaWhereInput | Prisma.mufaWhereInput[];
    OR?: Prisma.mufaWhereInput[];
    NOT?: Prisma.mufaWhereInput | Prisma.mufaWhereInput[];
    id_mufa?: Prisma.IntFilter<"mufa"> | number;
    id_tarjeta_pon?: Prisma.IntNullableFilter<"mufa"> | number | null;
    identificador?: Prisma.StringNullableFilter<"mufa"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"mufa"> | string | null;
    tarjeta_pon?: Prisma.XOR<Prisma.Tarjeta_ponNullableScalarRelationFilter, Prisma.tarjeta_ponWhereInput> | null;
    cajas_nap?: Prisma.Caja_napListRelationFilter;
};
export type mufaOrderByWithRelationInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrderInput | Prisma.SortOrder;
    identificador?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    tarjeta_pon?: Prisma.tarjeta_ponOrderByWithRelationInput;
    cajas_nap?: Prisma.caja_napOrderByRelationAggregateInput;
};
export type mufaWhereUniqueInput = Prisma.AtLeast<{
    id_mufa?: number;
    AND?: Prisma.mufaWhereInput | Prisma.mufaWhereInput[];
    OR?: Prisma.mufaWhereInput[];
    NOT?: Prisma.mufaWhereInput | Prisma.mufaWhereInput[];
    id_tarjeta_pon?: Prisma.IntNullableFilter<"mufa"> | number | null;
    identificador?: Prisma.StringNullableFilter<"mufa"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"mufa"> | string | null;
    tarjeta_pon?: Prisma.XOR<Prisma.Tarjeta_ponNullableScalarRelationFilter, Prisma.tarjeta_ponWhereInput> | null;
    cajas_nap?: Prisma.Caja_napListRelationFilter;
}, "id_mufa">;
export type mufaOrderByWithAggregationInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrderInput | Prisma.SortOrder;
    identificador?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.mufaCountOrderByAggregateInput;
    _avg?: Prisma.mufaAvgOrderByAggregateInput;
    _max?: Prisma.mufaMaxOrderByAggregateInput;
    _min?: Prisma.mufaMinOrderByAggregateInput;
    _sum?: Prisma.mufaSumOrderByAggregateInput;
};
export type mufaScalarWhereWithAggregatesInput = {
    AND?: Prisma.mufaScalarWhereWithAggregatesInput | Prisma.mufaScalarWhereWithAggregatesInput[];
    OR?: Prisma.mufaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mufaScalarWhereWithAggregatesInput | Prisma.mufaScalarWhereWithAggregatesInput[];
    id_mufa?: Prisma.IntWithAggregatesFilter<"mufa"> | number;
    id_tarjeta_pon?: Prisma.IntNullableWithAggregatesFilter<"mufa"> | number | null;
    identificador?: Prisma.StringNullableWithAggregatesFilter<"mufa"> | string | null;
    ubicacion?: Prisma.StringNullableWithAggregatesFilter<"mufa"> | string | null;
};
export type mufaCreateInput = {
    identificador?: string | null;
    ubicacion?: string | null;
    tarjeta_pon?: Prisma.tarjeta_ponCreateNestedOneWithoutMufasInput;
    cajas_nap?: Prisma.caja_napCreateNestedManyWithoutMufaInput;
};
export type mufaUncheckedCreateInput = {
    id_mufa?: number;
    id_tarjeta_pon?: number | null;
    identificador?: string | null;
    ubicacion?: string | null;
    cajas_nap?: Prisma.caja_napUncheckedCreateNestedManyWithoutMufaInput;
};
export type mufaUpdateInput = {
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tarjeta_pon?: Prisma.tarjeta_ponUpdateOneWithoutMufasNestedInput;
    cajas_nap?: Prisma.caja_napUpdateManyWithoutMufaNestedInput;
};
export type mufaUncheckedUpdateInput = {
    id_mufa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tarjeta_pon?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cajas_nap?: Prisma.caja_napUncheckedUpdateManyWithoutMufaNestedInput;
};
export type mufaCreateManyInput = {
    id_mufa?: number;
    id_tarjeta_pon?: number | null;
    identificador?: string | null;
    ubicacion?: string | null;
};
export type mufaUpdateManyMutationInput = {
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mufaUncheckedUpdateManyInput = {
    id_mufa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tarjeta_pon?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MufaNullableScalarRelationFilter = {
    is?: Prisma.mufaWhereInput | null;
    isNot?: Prisma.mufaWhereInput | null;
};
export type MufaListRelationFilter = {
    every?: Prisma.mufaWhereInput;
    some?: Prisma.mufaWhereInput;
    none?: Prisma.mufaWhereInput;
};
export type mufaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mufaCountOrderByAggregateInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrder;
    identificador?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type mufaAvgOrderByAggregateInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrder;
};
export type mufaMaxOrderByAggregateInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrder;
    identificador?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type mufaMinOrderByAggregateInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrder;
    identificador?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
};
export type mufaSumOrderByAggregateInput = {
    id_mufa?: Prisma.SortOrder;
    id_tarjeta_pon?: Prisma.SortOrder;
};
export type mufaCreateNestedOneWithoutCajas_napInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutCajas_napInput, Prisma.mufaUncheckedCreateWithoutCajas_napInput>;
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutCajas_napInput;
    connect?: Prisma.mufaWhereUniqueInput;
};
export type mufaUpdateOneWithoutCajas_napNestedInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutCajas_napInput, Prisma.mufaUncheckedCreateWithoutCajas_napInput>;
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutCajas_napInput;
    upsert?: Prisma.mufaUpsertWithoutCajas_napInput;
    disconnect?: Prisma.mufaWhereInput | boolean;
    delete?: Prisma.mufaWhereInput | boolean;
    connect?: Prisma.mufaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.mufaUpdateToOneWithWhereWithoutCajas_napInput, Prisma.mufaUpdateWithoutCajas_napInput>, Prisma.mufaUncheckedUpdateWithoutCajas_napInput>;
};
export type mufaCreateNestedManyWithoutTarjeta_ponInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput> | Prisma.mufaCreateWithoutTarjeta_ponInput[] | Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput[];
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput | Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput[];
    createMany?: Prisma.mufaCreateManyTarjeta_ponInputEnvelope;
    connect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
};
export type mufaUncheckedCreateNestedManyWithoutTarjeta_ponInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput> | Prisma.mufaCreateWithoutTarjeta_ponInput[] | Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput[];
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput | Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput[];
    createMany?: Prisma.mufaCreateManyTarjeta_ponInputEnvelope;
    connect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
};
export type mufaUpdateManyWithoutTarjeta_ponNestedInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput> | Prisma.mufaCreateWithoutTarjeta_ponInput[] | Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput[];
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput | Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput[];
    upsert?: Prisma.mufaUpsertWithWhereUniqueWithoutTarjeta_ponInput | Prisma.mufaUpsertWithWhereUniqueWithoutTarjeta_ponInput[];
    createMany?: Prisma.mufaCreateManyTarjeta_ponInputEnvelope;
    set?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    disconnect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    delete?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    connect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    update?: Prisma.mufaUpdateWithWhereUniqueWithoutTarjeta_ponInput | Prisma.mufaUpdateWithWhereUniqueWithoutTarjeta_ponInput[];
    updateMany?: Prisma.mufaUpdateManyWithWhereWithoutTarjeta_ponInput | Prisma.mufaUpdateManyWithWhereWithoutTarjeta_ponInput[];
    deleteMany?: Prisma.mufaScalarWhereInput | Prisma.mufaScalarWhereInput[];
};
export type mufaUncheckedUpdateManyWithoutTarjeta_ponNestedInput = {
    create?: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput> | Prisma.mufaCreateWithoutTarjeta_ponInput[] | Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput[];
    connectOrCreate?: Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput | Prisma.mufaCreateOrConnectWithoutTarjeta_ponInput[];
    upsert?: Prisma.mufaUpsertWithWhereUniqueWithoutTarjeta_ponInput | Prisma.mufaUpsertWithWhereUniqueWithoutTarjeta_ponInput[];
    createMany?: Prisma.mufaCreateManyTarjeta_ponInputEnvelope;
    set?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    disconnect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    delete?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    connect?: Prisma.mufaWhereUniqueInput | Prisma.mufaWhereUniqueInput[];
    update?: Prisma.mufaUpdateWithWhereUniqueWithoutTarjeta_ponInput | Prisma.mufaUpdateWithWhereUniqueWithoutTarjeta_ponInput[];
    updateMany?: Prisma.mufaUpdateManyWithWhereWithoutTarjeta_ponInput | Prisma.mufaUpdateManyWithWhereWithoutTarjeta_ponInput[];
    deleteMany?: Prisma.mufaScalarWhereInput | Prisma.mufaScalarWhereInput[];
};
export type mufaCreateWithoutCajas_napInput = {
    identificador?: string | null;
    ubicacion?: string | null;
    tarjeta_pon?: Prisma.tarjeta_ponCreateNestedOneWithoutMufasInput;
};
export type mufaUncheckedCreateWithoutCajas_napInput = {
    id_mufa?: number;
    id_tarjeta_pon?: number | null;
    identificador?: string | null;
    ubicacion?: string | null;
};
export type mufaCreateOrConnectWithoutCajas_napInput = {
    where: Prisma.mufaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mufaCreateWithoutCajas_napInput, Prisma.mufaUncheckedCreateWithoutCajas_napInput>;
};
export type mufaUpsertWithoutCajas_napInput = {
    update: Prisma.XOR<Prisma.mufaUpdateWithoutCajas_napInput, Prisma.mufaUncheckedUpdateWithoutCajas_napInput>;
    create: Prisma.XOR<Prisma.mufaCreateWithoutCajas_napInput, Prisma.mufaUncheckedCreateWithoutCajas_napInput>;
    where?: Prisma.mufaWhereInput;
};
export type mufaUpdateToOneWithWhereWithoutCajas_napInput = {
    where?: Prisma.mufaWhereInput;
    data: Prisma.XOR<Prisma.mufaUpdateWithoutCajas_napInput, Prisma.mufaUncheckedUpdateWithoutCajas_napInput>;
};
export type mufaUpdateWithoutCajas_napInput = {
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tarjeta_pon?: Prisma.tarjeta_ponUpdateOneWithoutMufasNestedInput;
};
export type mufaUncheckedUpdateWithoutCajas_napInput = {
    id_mufa?: Prisma.IntFieldUpdateOperationsInput | number;
    id_tarjeta_pon?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type mufaCreateWithoutTarjeta_ponInput = {
    identificador?: string | null;
    ubicacion?: string | null;
    cajas_nap?: Prisma.caja_napCreateNestedManyWithoutMufaInput;
};
export type mufaUncheckedCreateWithoutTarjeta_ponInput = {
    id_mufa?: number;
    identificador?: string | null;
    ubicacion?: string | null;
    cajas_nap?: Prisma.caja_napUncheckedCreateNestedManyWithoutMufaInput;
};
export type mufaCreateOrConnectWithoutTarjeta_ponInput = {
    where: Prisma.mufaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput>;
};
export type mufaCreateManyTarjeta_ponInputEnvelope = {
    data: Prisma.mufaCreateManyTarjeta_ponInput | Prisma.mufaCreateManyTarjeta_ponInput[];
    skipDuplicates?: boolean;
};
export type mufaUpsertWithWhereUniqueWithoutTarjeta_ponInput = {
    where: Prisma.mufaWhereUniqueInput;
    update: Prisma.XOR<Prisma.mufaUpdateWithoutTarjeta_ponInput, Prisma.mufaUncheckedUpdateWithoutTarjeta_ponInput>;
    create: Prisma.XOR<Prisma.mufaCreateWithoutTarjeta_ponInput, Prisma.mufaUncheckedCreateWithoutTarjeta_ponInput>;
};
export type mufaUpdateWithWhereUniqueWithoutTarjeta_ponInput = {
    where: Prisma.mufaWhereUniqueInput;
    data: Prisma.XOR<Prisma.mufaUpdateWithoutTarjeta_ponInput, Prisma.mufaUncheckedUpdateWithoutTarjeta_ponInput>;
};
export type mufaUpdateManyWithWhereWithoutTarjeta_ponInput = {
    where: Prisma.mufaScalarWhereInput;
    data: Prisma.XOR<Prisma.mufaUpdateManyMutationInput, Prisma.mufaUncheckedUpdateManyWithoutTarjeta_ponInput>;
};
export type mufaScalarWhereInput = {
    AND?: Prisma.mufaScalarWhereInput | Prisma.mufaScalarWhereInput[];
    OR?: Prisma.mufaScalarWhereInput[];
    NOT?: Prisma.mufaScalarWhereInput | Prisma.mufaScalarWhereInput[];
    id_mufa?: Prisma.IntFilter<"mufa"> | number;
    id_tarjeta_pon?: Prisma.IntNullableFilter<"mufa"> | number | null;
    identificador?: Prisma.StringNullableFilter<"mufa"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"mufa"> | string | null;
};
export type mufaCreateManyTarjeta_ponInput = {
    id_mufa?: number;
    identificador?: string | null;
    ubicacion?: string | null;
};
export type mufaUpdateWithoutTarjeta_ponInput = {
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cajas_nap?: Prisma.caja_napUpdateManyWithoutMufaNestedInput;
};
export type mufaUncheckedUpdateWithoutTarjeta_ponInput = {
    id_mufa?: Prisma.IntFieldUpdateOperationsInput | number;
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cajas_nap?: Prisma.caja_napUncheckedUpdateManyWithoutMufaNestedInput;
};
export type mufaUncheckedUpdateManyWithoutTarjeta_ponInput = {
    id_mufa?: Prisma.IntFieldUpdateOperationsInput | number;
    identificador?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MufaCountOutputType = {
    cajas_nap: number;
};
export type MufaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cajas_nap?: boolean | MufaCountOutputTypeCountCajas_napArgs;
};
export type MufaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MufaCountOutputTypeSelect<ExtArgs> | null;
};
export type MufaCountOutputTypeCountCajas_napArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.caja_napWhereInput;
};
export type mufaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mufa?: boolean;
    id_tarjeta_pon?: boolean;
    identificador?: boolean;
    ubicacion?: boolean;
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
    cajas_nap?: boolean | Prisma.mufa$cajas_napArgs<ExtArgs>;
    _count?: boolean | Prisma.MufaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mufa"]>;
export type mufaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mufa?: boolean;
    id_tarjeta_pon?: boolean;
    identificador?: boolean;
    ubicacion?: boolean;
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
}, ExtArgs["result"]["mufa"]>;
export type mufaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mufa?: boolean;
    id_tarjeta_pon?: boolean;
    identificador?: boolean;
    ubicacion?: boolean;
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
}, ExtArgs["result"]["mufa"]>;
export type mufaSelectScalar = {
    id_mufa?: boolean;
    id_tarjeta_pon?: boolean;
    identificador?: boolean;
    ubicacion?: boolean;
};
export type mufaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_mufa" | "id_tarjeta_pon" | "identificador" | "ubicacion", ExtArgs["result"]["mufa"]>;
export type mufaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
    cajas_nap?: boolean | Prisma.mufa$cajas_napArgs<ExtArgs>;
    _count?: boolean | Prisma.MufaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type mufaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
};
export type mufaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarjeta_pon?: boolean | Prisma.mufa$tarjeta_ponArgs<ExtArgs>;
};
export type $mufaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mufa";
    objects: {
        tarjeta_pon: Prisma.$tarjeta_ponPayload<ExtArgs> | null;
        cajas_nap: Prisma.$caja_napPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_mufa: number;
        id_tarjeta_pon: number | null;
        identificador: string | null;
        ubicacion: string | null;
    }, ExtArgs["result"]["mufa"]>;
    composites: {};
};
export type mufaGetPayload<S extends boolean | null | undefined | mufaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mufaPayload, S>;
export type mufaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mufaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MufaCountAggregateInputType | true;
};
export interface mufaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mufa'];
        meta: {
            name: 'mufa';
        };
    };
    findUnique<T extends mufaFindUniqueArgs>(args: Prisma.SelectSubset<T, mufaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mufaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mufaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mufaFindFirstArgs>(args?: Prisma.SelectSubset<T, mufaFindFirstArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mufaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mufaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mufaFindManyArgs>(args?: Prisma.SelectSubset<T, mufaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mufaCreateArgs>(args: Prisma.SelectSubset<T, mufaCreateArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mufaCreateManyArgs>(args?: Prisma.SelectSubset<T, mufaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mufaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mufaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mufaDeleteArgs>(args: Prisma.SelectSubset<T, mufaDeleteArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mufaUpdateArgs>(args: Prisma.SelectSubset<T, mufaUpdateArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mufaDeleteManyArgs>(args?: Prisma.SelectSubset<T, mufaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mufaUpdateManyArgs>(args: Prisma.SelectSubset<T, mufaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mufaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mufaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mufaUpsertArgs>(args: Prisma.SelectSubset<T, mufaUpsertArgs<ExtArgs>>): Prisma.Prisma__mufaClient<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mufaCountArgs>(args?: Prisma.Subset<T, mufaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MufaCountAggregateOutputType> : number>;
    aggregate<T extends MufaAggregateArgs>(args: Prisma.Subset<T, MufaAggregateArgs>): Prisma.PrismaPromise<GetMufaAggregateType<T>>;
    groupBy<T extends mufaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mufaGroupByArgs['orderBy'];
    } : {
        orderBy?: mufaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mufaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMufaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mufaFieldRefs;
}
export interface Prisma__mufaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tarjeta_pon<T extends Prisma.mufa$tarjeta_ponArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mufa$tarjeta_ponArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cajas_nap<T extends Prisma.mufa$cajas_napArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mufa$cajas_napArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mufaFieldRefs {
    readonly id_mufa: Prisma.FieldRef<"mufa", 'Int'>;
    readonly id_tarjeta_pon: Prisma.FieldRef<"mufa", 'Int'>;
    readonly identificador: Prisma.FieldRef<"mufa", 'String'>;
    readonly ubicacion: Prisma.FieldRef<"mufa", 'String'>;
}
export type mufaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where: Prisma.mufaWhereUniqueInput;
};
export type mufaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where: Prisma.mufaWhereUniqueInput;
};
export type mufaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where?: Prisma.mufaWhereInput;
    orderBy?: Prisma.mufaOrderByWithRelationInput | Prisma.mufaOrderByWithRelationInput[];
    cursor?: Prisma.mufaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MufaScalarFieldEnum | Prisma.MufaScalarFieldEnum[];
};
export type mufaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where?: Prisma.mufaWhereInput;
    orderBy?: Prisma.mufaOrderByWithRelationInput | Prisma.mufaOrderByWithRelationInput[];
    cursor?: Prisma.mufaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MufaScalarFieldEnum | Prisma.MufaScalarFieldEnum[];
};
export type mufaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where?: Prisma.mufaWhereInput;
    orderBy?: Prisma.mufaOrderByWithRelationInput | Prisma.mufaOrderByWithRelationInput[];
    cursor?: Prisma.mufaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MufaScalarFieldEnum | Prisma.MufaScalarFieldEnum[];
};
export type mufaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.mufaCreateInput, Prisma.mufaUncheckedCreateInput>;
};
export type mufaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mufaCreateManyInput | Prisma.mufaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mufaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    data: Prisma.mufaCreateManyInput | Prisma.mufaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mufaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mufaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mufaUpdateInput, Prisma.mufaUncheckedUpdateInput>;
    where: Prisma.mufaWhereUniqueInput;
};
export type mufaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mufaUpdateManyMutationInput, Prisma.mufaUncheckedUpdateManyInput>;
    where?: Prisma.mufaWhereInput;
    limit?: number;
};
export type mufaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mufaUpdateManyMutationInput, Prisma.mufaUncheckedUpdateManyInput>;
    where?: Prisma.mufaWhereInput;
    limit?: number;
    include?: Prisma.mufaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mufaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where: Prisma.mufaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mufaCreateInput, Prisma.mufaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mufaUpdateInput, Prisma.mufaUncheckedUpdateInput>;
};
export type mufaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
    where: Prisma.mufaWhereUniqueInput;
};
export type mufaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mufaWhereInput;
    limit?: number;
};
export type mufa$tarjeta_ponArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where?: Prisma.tarjeta_ponWhereInput;
};
export type mufa$cajas_napArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type mufaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mufaSelect<ExtArgs> | null;
    omit?: Prisma.mufaOmit<ExtArgs> | null;
    include?: Prisma.mufaInclude<ExtArgs> | null;
};
