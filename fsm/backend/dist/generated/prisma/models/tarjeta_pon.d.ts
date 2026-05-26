import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tarjeta_ponModel = runtime.Types.Result.DefaultSelection<Prisma.$tarjeta_ponPayload>;
export type AggregateTarjeta_pon = {
    _count: Tarjeta_ponCountAggregateOutputType | null;
    _avg: Tarjeta_ponAvgAggregateOutputType | null;
    _sum: Tarjeta_ponSumAggregateOutputType | null;
    _min: Tarjeta_ponMinAggregateOutputType | null;
    _max: Tarjeta_ponMaxAggregateOutputType | null;
};
export type Tarjeta_ponAvgAggregateOutputType = {
    id_tarjeta: number | null;
    id_olt: number | null;
    numero_tarjeta: number | null;
    total_puertos: number | null;
};
export type Tarjeta_ponSumAggregateOutputType = {
    id_tarjeta: number | null;
    id_olt: number | null;
    numero_tarjeta: number | null;
    total_puertos: number | null;
};
export type Tarjeta_ponMinAggregateOutputType = {
    id_tarjeta: number | null;
    id_olt: number | null;
    numero_tarjeta: number | null;
    total_puertos: number | null;
};
export type Tarjeta_ponMaxAggregateOutputType = {
    id_tarjeta: number | null;
    id_olt: number | null;
    numero_tarjeta: number | null;
    total_puertos: number | null;
};
export type Tarjeta_ponCountAggregateOutputType = {
    id_tarjeta: number;
    id_olt: number;
    numero_tarjeta: number;
    total_puertos: number;
    _all: number;
};
export type Tarjeta_ponAvgAggregateInputType = {
    id_tarjeta?: true;
    id_olt?: true;
    numero_tarjeta?: true;
    total_puertos?: true;
};
export type Tarjeta_ponSumAggregateInputType = {
    id_tarjeta?: true;
    id_olt?: true;
    numero_tarjeta?: true;
    total_puertos?: true;
};
export type Tarjeta_ponMinAggregateInputType = {
    id_tarjeta?: true;
    id_olt?: true;
    numero_tarjeta?: true;
    total_puertos?: true;
};
export type Tarjeta_ponMaxAggregateInputType = {
    id_tarjeta?: true;
    id_olt?: true;
    numero_tarjeta?: true;
    total_puertos?: true;
};
export type Tarjeta_ponCountAggregateInputType = {
    id_tarjeta?: true;
    id_olt?: true;
    numero_tarjeta?: true;
    total_puertos?: true;
    _all?: true;
};
export type Tarjeta_ponAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tarjeta_ponWhereInput;
    orderBy?: Prisma.tarjeta_ponOrderByWithRelationInput | Prisma.tarjeta_ponOrderByWithRelationInput[];
    cursor?: Prisma.tarjeta_ponWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tarjeta_ponCountAggregateInputType;
    _avg?: Tarjeta_ponAvgAggregateInputType;
    _sum?: Tarjeta_ponSumAggregateInputType;
    _min?: Tarjeta_ponMinAggregateInputType;
    _max?: Tarjeta_ponMaxAggregateInputType;
};
export type GetTarjeta_ponAggregateType<T extends Tarjeta_ponAggregateArgs> = {
    [P in keyof T & keyof AggregateTarjeta_pon]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTarjeta_pon[P]> : Prisma.GetScalarType<T[P], AggregateTarjeta_pon[P]>;
};
export type tarjeta_ponGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tarjeta_ponWhereInput;
    orderBy?: Prisma.tarjeta_ponOrderByWithAggregationInput | Prisma.tarjeta_ponOrderByWithAggregationInput[];
    by: Prisma.Tarjeta_ponScalarFieldEnum[] | Prisma.Tarjeta_ponScalarFieldEnum;
    having?: Prisma.tarjeta_ponScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tarjeta_ponCountAggregateInputType | true;
    _avg?: Tarjeta_ponAvgAggregateInputType;
    _sum?: Tarjeta_ponSumAggregateInputType;
    _min?: Tarjeta_ponMinAggregateInputType;
    _max?: Tarjeta_ponMaxAggregateInputType;
};
export type Tarjeta_ponGroupByOutputType = {
    id_tarjeta: number;
    id_olt: number | null;
    numero_tarjeta: number | null;
    total_puertos: number | null;
    _count: Tarjeta_ponCountAggregateOutputType | null;
    _avg: Tarjeta_ponAvgAggregateOutputType | null;
    _sum: Tarjeta_ponSumAggregateOutputType | null;
    _min: Tarjeta_ponMinAggregateOutputType | null;
    _max: Tarjeta_ponMaxAggregateOutputType | null;
};
export type GetTarjeta_ponGroupByPayload<T extends tarjeta_ponGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tarjeta_ponGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tarjeta_ponGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tarjeta_ponGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tarjeta_ponGroupByOutputType[P]>;
}>>;
export type tarjeta_ponWhereInput = {
    AND?: Prisma.tarjeta_ponWhereInput | Prisma.tarjeta_ponWhereInput[];
    OR?: Prisma.tarjeta_ponWhereInput[];
    NOT?: Prisma.tarjeta_ponWhereInput | Prisma.tarjeta_ponWhereInput[];
    id_tarjeta?: Prisma.IntFilter<"tarjeta_pon"> | number;
    id_olt?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    numero_tarjeta?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    total_puertos?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    olt?: Prisma.XOR<Prisma.OltNullableScalarRelationFilter, Prisma.oltWhereInput> | null;
    mufas?: Prisma.MufaListRelationFilter;
};
export type tarjeta_ponOrderByWithRelationInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_puertos?: Prisma.SortOrderInput | Prisma.SortOrder;
    olt?: Prisma.oltOrderByWithRelationInput;
    mufas?: Prisma.mufaOrderByRelationAggregateInput;
};
export type tarjeta_ponWhereUniqueInput = Prisma.AtLeast<{
    id_tarjeta?: number;
    AND?: Prisma.tarjeta_ponWhereInput | Prisma.tarjeta_ponWhereInput[];
    OR?: Prisma.tarjeta_ponWhereInput[];
    NOT?: Prisma.tarjeta_ponWhereInput | Prisma.tarjeta_ponWhereInput[];
    id_olt?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    numero_tarjeta?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    total_puertos?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    olt?: Prisma.XOR<Prisma.OltNullableScalarRelationFilter, Prisma.oltWhereInput> | null;
    mufas?: Prisma.MufaListRelationFilter;
}, "id_tarjeta">;
export type tarjeta_ponOrderByWithAggregationInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_puertos?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.tarjeta_ponCountOrderByAggregateInput;
    _avg?: Prisma.tarjeta_ponAvgOrderByAggregateInput;
    _max?: Prisma.tarjeta_ponMaxOrderByAggregateInput;
    _min?: Prisma.tarjeta_ponMinOrderByAggregateInput;
    _sum?: Prisma.tarjeta_ponSumOrderByAggregateInput;
};
export type tarjeta_ponScalarWhereWithAggregatesInput = {
    AND?: Prisma.tarjeta_ponScalarWhereWithAggregatesInput | Prisma.tarjeta_ponScalarWhereWithAggregatesInput[];
    OR?: Prisma.tarjeta_ponScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tarjeta_ponScalarWhereWithAggregatesInput | Prisma.tarjeta_ponScalarWhereWithAggregatesInput[];
    id_tarjeta?: Prisma.IntWithAggregatesFilter<"tarjeta_pon"> | number;
    id_olt?: Prisma.IntNullableWithAggregatesFilter<"tarjeta_pon"> | number | null;
    numero_tarjeta?: Prisma.IntNullableWithAggregatesFilter<"tarjeta_pon"> | number | null;
    total_puertos?: Prisma.IntNullableWithAggregatesFilter<"tarjeta_pon"> | number | null;
};
export type tarjeta_ponCreateInput = {
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
    olt?: Prisma.oltCreateNestedOneWithoutTarjetasInput;
    mufas?: Prisma.mufaCreateNestedManyWithoutTarjeta_ponInput;
};
export type tarjeta_ponUncheckedCreateInput = {
    id_tarjeta?: number;
    id_olt?: number | null;
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
    mufas?: Prisma.mufaUncheckedCreateNestedManyWithoutTarjeta_ponInput;
};
export type tarjeta_ponUpdateInput = {
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    olt?: Prisma.oltUpdateOneWithoutTarjetasNestedInput;
    mufas?: Prisma.mufaUpdateManyWithoutTarjeta_ponNestedInput;
};
export type tarjeta_ponUncheckedUpdateInput = {
    id_tarjeta?: Prisma.IntFieldUpdateOperationsInput | number;
    id_olt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mufas?: Prisma.mufaUncheckedUpdateManyWithoutTarjeta_ponNestedInput;
};
export type tarjeta_ponCreateManyInput = {
    id_tarjeta?: number;
    id_olt?: number | null;
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
};
export type tarjeta_ponUpdateManyMutationInput = {
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type tarjeta_ponUncheckedUpdateManyInput = {
    id_tarjeta?: Prisma.IntFieldUpdateOperationsInput | number;
    id_olt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Tarjeta_ponListRelationFilter = {
    every?: Prisma.tarjeta_ponWhereInput;
    some?: Prisma.tarjeta_ponWhereInput;
    none?: Prisma.tarjeta_ponWhereInput;
};
export type tarjeta_ponOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type tarjeta_ponCountOrderByAggregateInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrder;
    total_puertos?: Prisma.SortOrder;
};
export type tarjeta_ponAvgOrderByAggregateInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrder;
    total_puertos?: Prisma.SortOrder;
};
export type tarjeta_ponMaxOrderByAggregateInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrder;
    total_puertos?: Prisma.SortOrder;
};
export type tarjeta_ponMinOrderByAggregateInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrder;
    total_puertos?: Prisma.SortOrder;
};
export type tarjeta_ponSumOrderByAggregateInput = {
    id_tarjeta?: Prisma.SortOrder;
    id_olt?: Prisma.SortOrder;
    numero_tarjeta?: Prisma.SortOrder;
    total_puertos?: Prisma.SortOrder;
};
export type Tarjeta_ponNullableScalarRelationFilter = {
    is?: Prisma.tarjeta_ponWhereInput | null;
    isNot?: Prisma.tarjeta_ponWhereInput | null;
};
export type tarjeta_ponCreateNestedManyWithoutOltInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput> | Prisma.tarjeta_ponCreateWithoutOltInput[] | Prisma.tarjeta_ponUncheckedCreateWithoutOltInput[];
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutOltInput | Prisma.tarjeta_ponCreateOrConnectWithoutOltInput[];
    createMany?: Prisma.tarjeta_ponCreateManyOltInputEnvelope;
    connect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
};
export type tarjeta_ponUncheckedCreateNestedManyWithoutOltInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput> | Prisma.tarjeta_ponCreateWithoutOltInput[] | Prisma.tarjeta_ponUncheckedCreateWithoutOltInput[];
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutOltInput | Prisma.tarjeta_ponCreateOrConnectWithoutOltInput[];
    createMany?: Prisma.tarjeta_ponCreateManyOltInputEnvelope;
    connect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
};
export type tarjeta_ponUpdateManyWithoutOltNestedInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput> | Prisma.tarjeta_ponCreateWithoutOltInput[] | Prisma.tarjeta_ponUncheckedCreateWithoutOltInput[];
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutOltInput | Prisma.tarjeta_ponCreateOrConnectWithoutOltInput[];
    upsert?: Prisma.tarjeta_ponUpsertWithWhereUniqueWithoutOltInput | Prisma.tarjeta_ponUpsertWithWhereUniqueWithoutOltInput[];
    createMany?: Prisma.tarjeta_ponCreateManyOltInputEnvelope;
    set?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    disconnect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    delete?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    connect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    update?: Prisma.tarjeta_ponUpdateWithWhereUniqueWithoutOltInput | Prisma.tarjeta_ponUpdateWithWhereUniqueWithoutOltInput[];
    updateMany?: Prisma.tarjeta_ponUpdateManyWithWhereWithoutOltInput | Prisma.tarjeta_ponUpdateManyWithWhereWithoutOltInput[];
    deleteMany?: Prisma.tarjeta_ponScalarWhereInput | Prisma.tarjeta_ponScalarWhereInput[];
};
export type tarjeta_ponUncheckedUpdateManyWithoutOltNestedInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput> | Prisma.tarjeta_ponCreateWithoutOltInput[] | Prisma.tarjeta_ponUncheckedCreateWithoutOltInput[];
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutOltInput | Prisma.tarjeta_ponCreateOrConnectWithoutOltInput[];
    upsert?: Prisma.tarjeta_ponUpsertWithWhereUniqueWithoutOltInput | Prisma.tarjeta_ponUpsertWithWhereUniqueWithoutOltInput[];
    createMany?: Prisma.tarjeta_ponCreateManyOltInputEnvelope;
    set?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    disconnect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    delete?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    connect?: Prisma.tarjeta_ponWhereUniqueInput | Prisma.tarjeta_ponWhereUniqueInput[];
    update?: Prisma.tarjeta_ponUpdateWithWhereUniqueWithoutOltInput | Prisma.tarjeta_ponUpdateWithWhereUniqueWithoutOltInput[];
    updateMany?: Prisma.tarjeta_ponUpdateManyWithWhereWithoutOltInput | Prisma.tarjeta_ponUpdateManyWithWhereWithoutOltInput[];
    deleteMany?: Prisma.tarjeta_ponScalarWhereInput | Prisma.tarjeta_ponScalarWhereInput[];
};
export type tarjeta_ponCreateNestedOneWithoutMufasInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutMufasInput, Prisma.tarjeta_ponUncheckedCreateWithoutMufasInput>;
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutMufasInput;
    connect?: Prisma.tarjeta_ponWhereUniqueInput;
};
export type tarjeta_ponUpdateOneWithoutMufasNestedInput = {
    create?: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutMufasInput, Prisma.tarjeta_ponUncheckedCreateWithoutMufasInput>;
    connectOrCreate?: Prisma.tarjeta_ponCreateOrConnectWithoutMufasInput;
    upsert?: Prisma.tarjeta_ponUpsertWithoutMufasInput;
    disconnect?: Prisma.tarjeta_ponWhereInput | boolean;
    delete?: Prisma.tarjeta_ponWhereInput | boolean;
    connect?: Prisma.tarjeta_ponWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tarjeta_ponUpdateToOneWithWhereWithoutMufasInput, Prisma.tarjeta_ponUpdateWithoutMufasInput>, Prisma.tarjeta_ponUncheckedUpdateWithoutMufasInput>;
};
export type tarjeta_ponCreateWithoutOltInput = {
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
    mufas?: Prisma.mufaCreateNestedManyWithoutTarjeta_ponInput;
};
export type tarjeta_ponUncheckedCreateWithoutOltInput = {
    id_tarjeta?: number;
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
    mufas?: Prisma.mufaUncheckedCreateNestedManyWithoutTarjeta_ponInput;
};
export type tarjeta_ponCreateOrConnectWithoutOltInput = {
    where: Prisma.tarjeta_ponWhereUniqueInput;
    create: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput>;
};
export type tarjeta_ponCreateManyOltInputEnvelope = {
    data: Prisma.tarjeta_ponCreateManyOltInput | Prisma.tarjeta_ponCreateManyOltInput[];
    skipDuplicates?: boolean;
};
export type tarjeta_ponUpsertWithWhereUniqueWithoutOltInput = {
    where: Prisma.tarjeta_ponWhereUniqueInput;
    update: Prisma.XOR<Prisma.tarjeta_ponUpdateWithoutOltInput, Prisma.tarjeta_ponUncheckedUpdateWithoutOltInput>;
    create: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutOltInput, Prisma.tarjeta_ponUncheckedCreateWithoutOltInput>;
};
export type tarjeta_ponUpdateWithWhereUniqueWithoutOltInput = {
    where: Prisma.tarjeta_ponWhereUniqueInput;
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateWithoutOltInput, Prisma.tarjeta_ponUncheckedUpdateWithoutOltInput>;
};
export type tarjeta_ponUpdateManyWithWhereWithoutOltInput = {
    where: Prisma.tarjeta_ponScalarWhereInput;
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateManyMutationInput, Prisma.tarjeta_ponUncheckedUpdateManyWithoutOltInput>;
};
export type tarjeta_ponScalarWhereInput = {
    AND?: Prisma.tarjeta_ponScalarWhereInput | Prisma.tarjeta_ponScalarWhereInput[];
    OR?: Prisma.tarjeta_ponScalarWhereInput[];
    NOT?: Prisma.tarjeta_ponScalarWhereInput | Prisma.tarjeta_ponScalarWhereInput[];
    id_tarjeta?: Prisma.IntFilter<"tarjeta_pon"> | number;
    id_olt?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    numero_tarjeta?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
    total_puertos?: Prisma.IntNullableFilter<"tarjeta_pon"> | number | null;
};
export type tarjeta_ponCreateWithoutMufasInput = {
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
    olt?: Prisma.oltCreateNestedOneWithoutTarjetasInput;
};
export type tarjeta_ponUncheckedCreateWithoutMufasInput = {
    id_tarjeta?: number;
    id_olt?: number | null;
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
};
export type tarjeta_ponCreateOrConnectWithoutMufasInput = {
    where: Prisma.tarjeta_ponWhereUniqueInput;
    create: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutMufasInput, Prisma.tarjeta_ponUncheckedCreateWithoutMufasInput>;
};
export type tarjeta_ponUpsertWithoutMufasInput = {
    update: Prisma.XOR<Prisma.tarjeta_ponUpdateWithoutMufasInput, Prisma.tarjeta_ponUncheckedUpdateWithoutMufasInput>;
    create: Prisma.XOR<Prisma.tarjeta_ponCreateWithoutMufasInput, Prisma.tarjeta_ponUncheckedCreateWithoutMufasInput>;
    where?: Prisma.tarjeta_ponWhereInput;
};
export type tarjeta_ponUpdateToOneWithWhereWithoutMufasInput = {
    where?: Prisma.tarjeta_ponWhereInput;
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateWithoutMufasInput, Prisma.tarjeta_ponUncheckedUpdateWithoutMufasInput>;
};
export type tarjeta_ponUpdateWithoutMufasInput = {
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    olt?: Prisma.oltUpdateOneWithoutTarjetasNestedInput;
};
export type tarjeta_ponUncheckedUpdateWithoutMufasInput = {
    id_tarjeta?: Prisma.IntFieldUpdateOperationsInput | number;
    id_olt?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type tarjeta_ponCreateManyOltInput = {
    id_tarjeta?: number;
    numero_tarjeta?: number | null;
    total_puertos?: number | null;
};
export type tarjeta_ponUpdateWithoutOltInput = {
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mufas?: Prisma.mufaUpdateManyWithoutTarjeta_ponNestedInput;
};
export type tarjeta_ponUncheckedUpdateWithoutOltInput = {
    id_tarjeta?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    mufas?: Prisma.mufaUncheckedUpdateManyWithoutTarjeta_ponNestedInput;
};
export type tarjeta_ponUncheckedUpdateManyWithoutOltInput = {
    id_tarjeta?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_tarjeta?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    total_puertos?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Tarjeta_ponCountOutputType = {
    mufas: number;
};
export type Tarjeta_ponCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    mufas?: boolean | Tarjeta_ponCountOutputTypeCountMufasArgs;
};
export type Tarjeta_ponCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Tarjeta_ponCountOutputTypeSelect<ExtArgs> | null;
};
export type Tarjeta_ponCountOutputTypeCountMufasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mufaWhereInput;
};
export type tarjeta_ponSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tarjeta?: boolean;
    id_olt?: boolean;
    numero_tarjeta?: boolean;
    total_puertos?: boolean;
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
    mufas?: boolean | Prisma.tarjeta_pon$mufasArgs<ExtArgs>;
    _count?: boolean | Prisma.Tarjeta_ponCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tarjeta_pon"]>;
export type tarjeta_ponSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tarjeta?: boolean;
    id_olt?: boolean;
    numero_tarjeta?: boolean;
    total_puertos?: boolean;
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
}, ExtArgs["result"]["tarjeta_pon"]>;
export type tarjeta_ponSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tarjeta?: boolean;
    id_olt?: boolean;
    numero_tarjeta?: boolean;
    total_puertos?: boolean;
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
}, ExtArgs["result"]["tarjeta_pon"]>;
export type tarjeta_ponSelectScalar = {
    id_tarjeta?: boolean;
    id_olt?: boolean;
    numero_tarjeta?: boolean;
    total_puertos?: boolean;
};
export type tarjeta_ponOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_tarjeta" | "id_olt" | "numero_tarjeta" | "total_puertos", ExtArgs["result"]["tarjeta_pon"]>;
export type tarjeta_ponInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
    mufas?: boolean | Prisma.tarjeta_pon$mufasArgs<ExtArgs>;
    _count?: boolean | Prisma.Tarjeta_ponCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tarjeta_ponIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
};
export type tarjeta_ponIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    olt?: boolean | Prisma.tarjeta_pon$oltArgs<ExtArgs>;
};
export type $tarjeta_ponPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tarjeta_pon";
    objects: {
        olt: Prisma.$oltPayload<ExtArgs> | null;
        mufas: Prisma.$mufaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_tarjeta: number;
        id_olt: number | null;
        numero_tarjeta: number | null;
        total_puertos: number | null;
    }, ExtArgs["result"]["tarjeta_pon"]>;
    composites: {};
};
export type tarjeta_ponGetPayload<S extends boolean | null | undefined | tarjeta_ponDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload, S>;
export type tarjeta_ponCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tarjeta_ponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tarjeta_ponCountAggregateInputType | true;
};
export interface tarjeta_ponDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tarjeta_pon'];
        meta: {
            name: 'tarjeta_pon';
        };
    };
    findUnique<T extends tarjeta_ponFindUniqueArgs>(args: Prisma.SelectSubset<T, tarjeta_ponFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tarjeta_ponFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tarjeta_ponFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tarjeta_ponFindFirstArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponFindFirstArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tarjeta_ponFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tarjeta_ponFindManyArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tarjeta_ponCreateArgs>(args: Prisma.SelectSubset<T, tarjeta_ponCreateArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tarjeta_ponCreateManyArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends tarjeta_ponCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends tarjeta_ponDeleteArgs>(args: Prisma.SelectSubset<T, tarjeta_ponDeleteArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tarjeta_ponUpdateArgs>(args: Prisma.SelectSubset<T, tarjeta_ponUpdateArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tarjeta_ponDeleteManyArgs>(args?: Prisma.SelectSubset<T, tarjeta_ponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tarjeta_ponUpdateManyArgs>(args: Prisma.SelectSubset<T, tarjeta_ponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends tarjeta_ponUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tarjeta_ponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends tarjeta_ponUpsertArgs>(args: Prisma.SelectSubset<T, tarjeta_ponUpsertArgs<ExtArgs>>): Prisma.Prisma__tarjeta_ponClient<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tarjeta_ponCountArgs>(args?: Prisma.Subset<T, tarjeta_ponCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tarjeta_ponCountAggregateOutputType> : number>;
    aggregate<T extends Tarjeta_ponAggregateArgs>(args: Prisma.Subset<T, Tarjeta_ponAggregateArgs>): Prisma.PrismaPromise<GetTarjeta_ponAggregateType<T>>;
    groupBy<T extends tarjeta_ponGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tarjeta_ponGroupByArgs['orderBy'];
    } : {
        orderBy?: tarjeta_ponGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tarjeta_ponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTarjeta_ponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tarjeta_ponFieldRefs;
}
export interface Prisma__tarjeta_ponClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    olt<T extends Prisma.tarjeta_pon$oltArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tarjeta_pon$oltArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    mufas<T extends Prisma.tarjeta_pon$mufasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tarjeta_pon$mufasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mufaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tarjeta_ponFieldRefs {
    readonly id_tarjeta: Prisma.FieldRef<"tarjeta_pon", 'Int'>;
    readonly id_olt: Prisma.FieldRef<"tarjeta_pon", 'Int'>;
    readonly numero_tarjeta: Prisma.FieldRef<"tarjeta_pon", 'Int'>;
    readonly total_puertos: Prisma.FieldRef<"tarjeta_pon", 'Int'>;
}
export type tarjeta_ponFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where: Prisma.tarjeta_ponWhereUniqueInput;
};
export type tarjeta_ponFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where: Prisma.tarjeta_ponWhereUniqueInput;
};
export type tarjeta_ponFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where?: Prisma.tarjeta_ponWhereInput;
    orderBy?: Prisma.tarjeta_ponOrderByWithRelationInput | Prisma.tarjeta_ponOrderByWithRelationInput[];
    cursor?: Prisma.tarjeta_ponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tarjeta_ponScalarFieldEnum | Prisma.Tarjeta_ponScalarFieldEnum[];
};
export type tarjeta_ponFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where?: Prisma.tarjeta_ponWhereInput;
    orderBy?: Prisma.tarjeta_ponOrderByWithRelationInput | Prisma.tarjeta_ponOrderByWithRelationInput[];
    cursor?: Prisma.tarjeta_ponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tarjeta_ponScalarFieldEnum | Prisma.Tarjeta_ponScalarFieldEnum[];
};
export type tarjeta_ponFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where?: Prisma.tarjeta_ponWhereInput;
    orderBy?: Prisma.tarjeta_ponOrderByWithRelationInput | Prisma.tarjeta_ponOrderByWithRelationInput[];
    cursor?: Prisma.tarjeta_ponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tarjeta_ponScalarFieldEnum | Prisma.Tarjeta_ponScalarFieldEnum[];
};
export type tarjeta_ponCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.tarjeta_ponCreateInput, Prisma.tarjeta_ponUncheckedCreateInput>;
};
export type tarjeta_ponCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tarjeta_ponCreateManyInput | Prisma.tarjeta_ponCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tarjeta_ponCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    data: Prisma.tarjeta_ponCreateManyInput | Prisma.tarjeta_ponCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.tarjeta_ponIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type tarjeta_ponUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateInput, Prisma.tarjeta_ponUncheckedUpdateInput>;
    where: Prisma.tarjeta_ponWhereUniqueInput;
};
export type tarjeta_ponUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateManyMutationInput, Prisma.tarjeta_ponUncheckedUpdateManyInput>;
    where?: Prisma.tarjeta_ponWhereInput;
    limit?: number;
};
export type tarjeta_ponUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tarjeta_ponUpdateManyMutationInput, Prisma.tarjeta_ponUncheckedUpdateManyInput>;
    where?: Prisma.tarjeta_ponWhereInput;
    limit?: number;
    include?: Prisma.tarjeta_ponIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type tarjeta_ponUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where: Prisma.tarjeta_ponWhereUniqueInput;
    create: Prisma.XOR<Prisma.tarjeta_ponCreateInput, Prisma.tarjeta_ponUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tarjeta_ponUpdateInput, Prisma.tarjeta_ponUncheckedUpdateInput>;
};
export type tarjeta_ponDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
    where: Prisma.tarjeta_ponWhereUniqueInput;
};
export type tarjeta_ponDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tarjeta_ponWhereInput;
    limit?: number;
};
export type tarjeta_pon$oltArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where?: Prisma.oltWhereInput;
};
export type tarjeta_pon$mufasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type tarjeta_ponDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tarjeta_ponSelect<ExtArgs> | null;
    omit?: Prisma.tarjeta_ponOmit<ExtArgs> | null;
    include?: Prisma.tarjeta_ponInclude<ExtArgs> | null;
};
