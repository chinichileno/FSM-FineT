import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type consentimiento_cookiesModel = runtime.Types.Result.DefaultSelection<Prisma.$consentimiento_cookiesPayload>;
export type AggregateConsentimiento_cookies = {
    _count: Consentimiento_cookiesCountAggregateOutputType | null;
    _avg: Consentimiento_cookiesAvgAggregateOutputType | null;
    _sum: Consentimiento_cookiesSumAggregateOutputType | null;
    _min: Consentimiento_cookiesMinAggregateOutputType | null;
    _max: Consentimiento_cookiesMaxAggregateOutputType | null;
};
export type Consentimiento_cookiesAvgAggregateOutputType = {
    id_consentimiento: number | null;
    id_cliente: number | null;
};
export type Consentimiento_cookiesSumAggregateOutputType = {
    id_consentimiento: bigint | null;
    id_cliente: number | null;
};
export type Consentimiento_cookiesMinAggregateOutputType = {
    id_consentimiento: bigint | null;
    id_cliente: number | null;
    ip_anonimizada: string | null;
    version_documento: string | null;
    fecha_aceptacion: Date | null;
    acepto: boolean | null;
};
export type Consentimiento_cookiesMaxAggregateOutputType = {
    id_consentimiento: bigint | null;
    id_cliente: number | null;
    ip_anonimizada: string | null;
    version_documento: string | null;
    fecha_aceptacion: Date | null;
    acepto: boolean | null;
};
export type Consentimiento_cookiesCountAggregateOutputType = {
    id_consentimiento: number;
    id_cliente: number;
    ip_anonimizada: number;
    version_documento: number;
    fecha_aceptacion: number;
    acepto: number;
    _all: number;
};
export type Consentimiento_cookiesAvgAggregateInputType = {
    id_consentimiento?: true;
    id_cliente?: true;
};
export type Consentimiento_cookiesSumAggregateInputType = {
    id_consentimiento?: true;
    id_cliente?: true;
};
export type Consentimiento_cookiesMinAggregateInputType = {
    id_consentimiento?: true;
    id_cliente?: true;
    ip_anonimizada?: true;
    version_documento?: true;
    fecha_aceptacion?: true;
    acepto?: true;
};
export type Consentimiento_cookiesMaxAggregateInputType = {
    id_consentimiento?: true;
    id_cliente?: true;
    ip_anonimizada?: true;
    version_documento?: true;
    fecha_aceptacion?: true;
    acepto?: true;
};
export type Consentimiento_cookiesCountAggregateInputType = {
    id_consentimiento?: true;
    id_cliente?: true;
    ip_anonimizada?: true;
    version_documento?: true;
    fecha_aceptacion?: true;
    acepto?: true;
    _all?: true;
};
export type Consentimiento_cookiesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.consentimiento_cookiesWhereInput;
    orderBy?: Prisma.consentimiento_cookiesOrderByWithRelationInput | Prisma.consentimiento_cookiesOrderByWithRelationInput[];
    cursor?: Prisma.consentimiento_cookiesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Consentimiento_cookiesCountAggregateInputType;
    _avg?: Consentimiento_cookiesAvgAggregateInputType;
    _sum?: Consentimiento_cookiesSumAggregateInputType;
    _min?: Consentimiento_cookiesMinAggregateInputType;
    _max?: Consentimiento_cookiesMaxAggregateInputType;
};
export type GetConsentimiento_cookiesAggregateType<T extends Consentimiento_cookiesAggregateArgs> = {
    [P in keyof T & keyof AggregateConsentimiento_cookies]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConsentimiento_cookies[P]> : Prisma.GetScalarType<T[P], AggregateConsentimiento_cookies[P]>;
};
export type consentimiento_cookiesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.consentimiento_cookiesWhereInput;
    orderBy?: Prisma.consentimiento_cookiesOrderByWithAggregationInput | Prisma.consentimiento_cookiesOrderByWithAggregationInput[];
    by: Prisma.Consentimiento_cookiesScalarFieldEnum[] | Prisma.Consentimiento_cookiesScalarFieldEnum;
    having?: Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Consentimiento_cookiesCountAggregateInputType | true;
    _avg?: Consentimiento_cookiesAvgAggregateInputType;
    _sum?: Consentimiento_cookiesSumAggregateInputType;
    _min?: Consentimiento_cookiesMinAggregateInputType;
    _max?: Consentimiento_cookiesMaxAggregateInputType;
};
export type Consentimiento_cookiesGroupByOutputType = {
    id_consentimiento: bigint;
    id_cliente: number | null;
    ip_anonimizada: string | null;
    version_documento: string | null;
    fecha_aceptacion: Date | null;
    acepto: boolean;
    _count: Consentimiento_cookiesCountAggregateOutputType | null;
    _avg: Consentimiento_cookiesAvgAggregateOutputType | null;
    _sum: Consentimiento_cookiesSumAggregateOutputType | null;
    _min: Consentimiento_cookiesMinAggregateOutputType | null;
    _max: Consentimiento_cookiesMaxAggregateOutputType | null;
};
export type GetConsentimiento_cookiesGroupByPayload<T extends consentimiento_cookiesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Consentimiento_cookiesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Consentimiento_cookiesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Consentimiento_cookiesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Consentimiento_cookiesGroupByOutputType[P]>;
}>>;
export type consentimiento_cookiesWhereInput = {
    AND?: Prisma.consentimiento_cookiesWhereInput | Prisma.consentimiento_cookiesWhereInput[];
    OR?: Prisma.consentimiento_cookiesWhereInput[];
    NOT?: Prisma.consentimiento_cookiesWhereInput | Prisma.consentimiento_cookiesWhereInput[];
    id_consentimiento?: Prisma.BigIntFilter<"consentimiento_cookies"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"consentimiento_cookies"> | number | null;
    ip_anonimizada?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    version_documento?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    fecha_aceptacion?: Prisma.DateTimeNullableFilter<"consentimiento_cookies"> | Date | string | null;
    acepto?: Prisma.BoolFilter<"consentimiento_cookies"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
};
export type consentimiento_cookiesOrderByWithRelationInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_anonimizada?: Prisma.SortOrderInput | Prisma.SortOrder;
    version_documento?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_aceptacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    acepto?: Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
};
export type consentimiento_cookiesWhereUniqueInput = Prisma.AtLeast<{
    id_consentimiento?: bigint | number;
    AND?: Prisma.consentimiento_cookiesWhereInput | Prisma.consentimiento_cookiesWhereInput[];
    OR?: Prisma.consentimiento_cookiesWhereInput[];
    NOT?: Prisma.consentimiento_cookiesWhereInput | Prisma.consentimiento_cookiesWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"consentimiento_cookies"> | number | null;
    ip_anonimizada?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    version_documento?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    fecha_aceptacion?: Prisma.DateTimeNullableFilter<"consentimiento_cookies"> | Date | string | null;
    acepto?: Prisma.BoolFilter<"consentimiento_cookies"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
}, "id_consentimiento">;
export type consentimiento_cookiesOrderByWithAggregationInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_anonimizada?: Prisma.SortOrderInput | Prisma.SortOrder;
    version_documento?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_aceptacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    acepto?: Prisma.SortOrder;
    _count?: Prisma.consentimiento_cookiesCountOrderByAggregateInput;
    _avg?: Prisma.consentimiento_cookiesAvgOrderByAggregateInput;
    _max?: Prisma.consentimiento_cookiesMaxOrderByAggregateInput;
    _min?: Prisma.consentimiento_cookiesMinOrderByAggregateInput;
    _sum?: Prisma.consentimiento_cookiesSumOrderByAggregateInput;
};
export type consentimiento_cookiesScalarWhereWithAggregatesInput = {
    AND?: Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput | Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput[];
    OR?: Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput | Prisma.consentimiento_cookiesScalarWhereWithAggregatesInput[];
    id_consentimiento?: Prisma.BigIntWithAggregatesFilter<"consentimiento_cookies"> | bigint | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"consentimiento_cookies"> | number | null;
    ip_anonimizada?: Prisma.StringNullableWithAggregatesFilter<"consentimiento_cookies"> | string | null;
    version_documento?: Prisma.StringNullableWithAggregatesFilter<"consentimiento_cookies"> | string | null;
    fecha_aceptacion?: Prisma.DateTimeNullableWithAggregatesFilter<"consentimiento_cookies"> | Date | string | null;
    acepto?: Prisma.BoolWithAggregatesFilter<"consentimiento_cookies"> | boolean;
};
export type consentimiento_cookiesCreateInput = {
    id_consentimiento?: bigint | number;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutConsentimientosInput;
};
export type consentimiento_cookiesUncheckedCreateInput = {
    id_consentimiento?: bigint | number;
    id_cliente?: number | null;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
};
export type consentimiento_cookiesUpdateInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutConsentimientosNestedInput;
};
export type consentimiento_cookiesUncheckedUpdateInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type consentimiento_cookiesCreateManyInput = {
    id_consentimiento?: bigint | number;
    id_cliente?: number | null;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
};
export type consentimiento_cookiesUpdateManyMutationInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type consentimiento_cookiesUncheckedUpdateManyInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Consentimiento_cookiesListRelationFilter = {
    every?: Prisma.consentimiento_cookiesWhereInput;
    some?: Prisma.consentimiento_cookiesWhereInput;
    none?: Prisma.consentimiento_cookiesWhereInput;
};
export type consentimiento_cookiesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type consentimiento_cookiesCountOrderByAggregateInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    ip_anonimizada?: Prisma.SortOrder;
    version_documento?: Prisma.SortOrder;
    fecha_aceptacion?: Prisma.SortOrder;
    acepto?: Prisma.SortOrder;
};
export type consentimiento_cookiesAvgOrderByAggregateInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type consentimiento_cookiesMaxOrderByAggregateInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    ip_anonimizada?: Prisma.SortOrder;
    version_documento?: Prisma.SortOrder;
    fecha_aceptacion?: Prisma.SortOrder;
    acepto?: Prisma.SortOrder;
};
export type consentimiento_cookiesMinOrderByAggregateInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    ip_anonimizada?: Prisma.SortOrder;
    version_documento?: Prisma.SortOrder;
    fecha_aceptacion?: Prisma.SortOrder;
    acepto?: Prisma.SortOrder;
};
export type consentimiento_cookiesSumOrderByAggregateInput = {
    id_consentimiento?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type consentimiento_cookiesCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput> | Prisma.consentimiento_cookiesCreateWithoutClienteInput[] | Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput | Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.consentimiento_cookiesCreateManyClienteInputEnvelope;
    connect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
};
export type consentimiento_cookiesUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput> | Prisma.consentimiento_cookiesCreateWithoutClienteInput[] | Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput | Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.consentimiento_cookiesCreateManyClienteInputEnvelope;
    connect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
};
export type consentimiento_cookiesUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput> | Prisma.consentimiento_cookiesCreateWithoutClienteInput[] | Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput | Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.consentimiento_cookiesUpsertWithWhereUniqueWithoutClienteInput | Prisma.consentimiento_cookiesUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.consentimiento_cookiesCreateManyClienteInputEnvelope;
    set?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    disconnect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    delete?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    connect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    update?: Prisma.consentimiento_cookiesUpdateWithWhereUniqueWithoutClienteInput | Prisma.consentimiento_cookiesUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.consentimiento_cookiesUpdateManyWithWhereWithoutClienteInput | Prisma.consentimiento_cookiesUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.consentimiento_cookiesScalarWhereInput | Prisma.consentimiento_cookiesScalarWhereInput[];
};
export type consentimiento_cookiesUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput> | Prisma.consentimiento_cookiesCreateWithoutClienteInput[] | Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput | Prisma.consentimiento_cookiesCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.consentimiento_cookiesUpsertWithWhereUniqueWithoutClienteInput | Prisma.consentimiento_cookiesUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.consentimiento_cookiesCreateManyClienteInputEnvelope;
    set?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    disconnect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    delete?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    connect?: Prisma.consentimiento_cookiesWhereUniqueInput | Prisma.consentimiento_cookiesWhereUniqueInput[];
    update?: Prisma.consentimiento_cookiesUpdateWithWhereUniqueWithoutClienteInput | Prisma.consentimiento_cookiesUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.consentimiento_cookiesUpdateManyWithWhereWithoutClienteInput | Prisma.consentimiento_cookiesUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.consentimiento_cookiesScalarWhereInput | Prisma.consentimiento_cookiesScalarWhereInput[];
};
export type consentimiento_cookiesCreateWithoutClienteInput = {
    id_consentimiento?: bigint | number;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
};
export type consentimiento_cookiesUncheckedCreateWithoutClienteInput = {
    id_consentimiento?: bigint | number;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
};
export type consentimiento_cookiesCreateOrConnectWithoutClienteInput = {
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput>;
};
export type consentimiento_cookiesCreateManyClienteInputEnvelope = {
    data: Prisma.consentimiento_cookiesCreateManyClienteInput | Prisma.consentimiento_cookiesCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type consentimiento_cookiesUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
    update: Prisma.XOR<Prisma.consentimiento_cookiesUpdateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.consentimiento_cookiesCreateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedCreateWithoutClienteInput>;
};
export type consentimiento_cookiesUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
    data: Prisma.XOR<Prisma.consentimiento_cookiesUpdateWithoutClienteInput, Prisma.consentimiento_cookiesUncheckedUpdateWithoutClienteInput>;
};
export type consentimiento_cookiesUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.consentimiento_cookiesScalarWhereInput;
    data: Prisma.XOR<Prisma.consentimiento_cookiesUpdateManyMutationInput, Prisma.consentimiento_cookiesUncheckedUpdateManyWithoutClienteInput>;
};
export type consentimiento_cookiesScalarWhereInput = {
    AND?: Prisma.consentimiento_cookiesScalarWhereInput | Prisma.consentimiento_cookiesScalarWhereInput[];
    OR?: Prisma.consentimiento_cookiesScalarWhereInput[];
    NOT?: Prisma.consentimiento_cookiesScalarWhereInput | Prisma.consentimiento_cookiesScalarWhereInput[];
    id_consentimiento?: Prisma.BigIntFilter<"consentimiento_cookies"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"consentimiento_cookies"> | number | null;
    ip_anonimizada?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    version_documento?: Prisma.StringNullableFilter<"consentimiento_cookies"> | string | null;
    fecha_aceptacion?: Prisma.DateTimeNullableFilter<"consentimiento_cookies"> | Date | string | null;
    acepto?: Prisma.BoolFilter<"consentimiento_cookies"> | boolean;
};
export type consentimiento_cookiesCreateManyClienteInput = {
    id_consentimiento?: bigint | number;
    ip_anonimizada?: string | null;
    version_documento?: string | null;
    fecha_aceptacion?: Date | string | null;
    acepto: boolean;
};
export type consentimiento_cookiesUpdateWithoutClienteInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type consentimiento_cookiesUncheckedUpdateWithoutClienteInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type consentimiento_cookiesUncheckedUpdateManyWithoutClienteInput = {
    id_consentimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_anonimizada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    version_documento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_aceptacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    acepto?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type consentimiento_cookiesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_consentimiento?: boolean;
    id_cliente?: boolean;
    ip_anonimizada?: boolean;
    version_documento?: boolean;
    fecha_aceptacion?: boolean;
    acepto?: boolean;
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["consentimiento_cookies"]>;
export type consentimiento_cookiesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_consentimiento?: boolean;
    id_cliente?: boolean;
    ip_anonimizada?: boolean;
    version_documento?: boolean;
    fecha_aceptacion?: boolean;
    acepto?: boolean;
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["consentimiento_cookies"]>;
export type consentimiento_cookiesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_consentimiento?: boolean;
    id_cliente?: boolean;
    ip_anonimizada?: boolean;
    version_documento?: boolean;
    fecha_aceptacion?: boolean;
    acepto?: boolean;
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["consentimiento_cookies"]>;
export type consentimiento_cookiesSelectScalar = {
    id_consentimiento?: boolean;
    id_cliente?: boolean;
    ip_anonimizada?: boolean;
    version_documento?: boolean;
    fecha_aceptacion?: boolean;
    acepto?: boolean;
};
export type consentimiento_cookiesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_consentimiento" | "id_cliente" | "ip_anonimizada" | "version_documento" | "fecha_aceptacion" | "acepto", ExtArgs["result"]["consentimiento_cookies"]>;
export type consentimiento_cookiesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
};
export type consentimiento_cookiesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
};
export type consentimiento_cookiesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.consentimiento_cookies$clienteArgs<ExtArgs>;
};
export type $consentimiento_cookiesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "consentimiento_cookies";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_consentimiento: bigint;
        id_cliente: number | null;
        ip_anonimizada: string | null;
        version_documento: string | null;
        fecha_aceptacion: Date | null;
        acepto: boolean;
    }, ExtArgs["result"]["consentimiento_cookies"]>;
    composites: {};
};
export type consentimiento_cookiesGetPayload<S extends boolean | null | undefined | consentimiento_cookiesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload, S>;
export type consentimiento_cookiesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<consentimiento_cookiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Consentimiento_cookiesCountAggregateInputType | true;
};
export interface consentimiento_cookiesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['consentimiento_cookies'];
        meta: {
            name: 'consentimiento_cookies';
        };
    };
    findUnique<T extends consentimiento_cookiesFindUniqueArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends consentimiento_cookiesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends consentimiento_cookiesFindFirstArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesFindFirstArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends consentimiento_cookiesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends consentimiento_cookiesFindManyArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends consentimiento_cookiesCreateArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesCreateArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends consentimiento_cookiesCreateManyArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends consentimiento_cookiesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends consentimiento_cookiesDeleteArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesDeleteArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends consentimiento_cookiesUpdateArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesUpdateArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends consentimiento_cookiesDeleteManyArgs>(args?: Prisma.SelectSubset<T, consentimiento_cookiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends consentimiento_cookiesUpdateManyArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends consentimiento_cookiesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends consentimiento_cookiesUpsertArgs>(args: Prisma.SelectSubset<T, consentimiento_cookiesUpsertArgs<ExtArgs>>): Prisma.Prisma__consentimiento_cookiesClient<runtime.Types.Result.GetResult<Prisma.$consentimiento_cookiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends consentimiento_cookiesCountArgs>(args?: Prisma.Subset<T, consentimiento_cookiesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Consentimiento_cookiesCountAggregateOutputType> : number>;
    aggregate<T extends Consentimiento_cookiesAggregateArgs>(args: Prisma.Subset<T, Consentimiento_cookiesAggregateArgs>): Prisma.PrismaPromise<GetConsentimiento_cookiesAggregateType<T>>;
    groupBy<T extends consentimiento_cookiesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: consentimiento_cookiesGroupByArgs['orderBy'];
    } : {
        orderBy?: consentimiento_cookiesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, consentimiento_cookiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsentimiento_cookiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: consentimiento_cookiesFieldRefs;
}
export interface Prisma__consentimiento_cookiesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.consentimiento_cookies$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.consentimiento_cookies$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface consentimiento_cookiesFieldRefs {
    readonly id_consentimiento: Prisma.FieldRef<"consentimiento_cookies", 'BigInt'>;
    readonly id_cliente: Prisma.FieldRef<"consentimiento_cookies", 'Int'>;
    readonly ip_anonimizada: Prisma.FieldRef<"consentimiento_cookies", 'String'>;
    readonly version_documento: Prisma.FieldRef<"consentimiento_cookies", 'String'>;
    readonly fecha_aceptacion: Prisma.FieldRef<"consentimiento_cookies", 'DateTime'>;
    readonly acepto: Prisma.FieldRef<"consentimiento_cookies", 'Boolean'>;
}
export type consentimiento_cookiesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
};
export type consentimiento_cookiesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
};
export type consentimiento_cookiesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where?: Prisma.consentimiento_cookiesWhereInput;
    orderBy?: Prisma.consentimiento_cookiesOrderByWithRelationInput | Prisma.consentimiento_cookiesOrderByWithRelationInput[];
    cursor?: Prisma.consentimiento_cookiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Consentimiento_cookiesScalarFieldEnum | Prisma.Consentimiento_cookiesScalarFieldEnum[];
};
export type consentimiento_cookiesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where?: Prisma.consentimiento_cookiesWhereInput;
    orderBy?: Prisma.consentimiento_cookiesOrderByWithRelationInput | Prisma.consentimiento_cookiesOrderByWithRelationInput[];
    cursor?: Prisma.consentimiento_cookiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Consentimiento_cookiesScalarFieldEnum | Prisma.Consentimiento_cookiesScalarFieldEnum[];
};
export type consentimiento_cookiesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where?: Prisma.consentimiento_cookiesWhereInput;
    orderBy?: Prisma.consentimiento_cookiesOrderByWithRelationInput | Prisma.consentimiento_cookiesOrderByWithRelationInput[];
    cursor?: Prisma.consentimiento_cookiesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Consentimiento_cookiesScalarFieldEnum | Prisma.Consentimiento_cookiesScalarFieldEnum[];
};
export type consentimiento_cookiesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.consentimiento_cookiesCreateInput, Prisma.consentimiento_cookiesUncheckedCreateInput>;
};
export type consentimiento_cookiesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.consentimiento_cookiesCreateManyInput | Prisma.consentimiento_cookiesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type consentimiento_cookiesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    data: Prisma.consentimiento_cookiesCreateManyInput | Prisma.consentimiento_cookiesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.consentimiento_cookiesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type consentimiento_cookiesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.consentimiento_cookiesUpdateInput, Prisma.consentimiento_cookiesUncheckedUpdateInput>;
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
};
export type consentimiento_cookiesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.consentimiento_cookiesUpdateManyMutationInput, Prisma.consentimiento_cookiesUncheckedUpdateManyInput>;
    where?: Prisma.consentimiento_cookiesWhereInput;
    limit?: number;
};
export type consentimiento_cookiesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.consentimiento_cookiesUpdateManyMutationInput, Prisma.consentimiento_cookiesUncheckedUpdateManyInput>;
    where?: Prisma.consentimiento_cookiesWhereInput;
    limit?: number;
    include?: Prisma.consentimiento_cookiesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type consentimiento_cookiesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
    create: Prisma.XOR<Prisma.consentimiento_cookiesCreateInput, Prisma.consentimiento_cookiesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.consentimiento_cookiesUpdateInput, Prisma.consentimiento_cookiesUncheckedUpdateInput>;
};
export type consentimiento_cookiesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
    where: Prisma.consentimiento_cookiesWhereUniqueInput;
};
export type consentimiento_cookiesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.consentimiento_cookiesWhereInput;
    limit?: number;
};
export type consentimiento_cookies$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type consentimiento_cookiesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.consentimiento_cookiesSelect<ExtArgs> | null;
    omit?: Prisma.consentimiento_cookiesOmit<ExtArgs> | null;
    include?: Prisma.consentimiento_cookiesInclude<ExtArgs> | null;
};
