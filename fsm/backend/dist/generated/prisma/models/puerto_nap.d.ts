import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type puerto_napModel = runtime.Types.Result.DefaultSelection<Prisma.$puerto_napPayload>;
export type AggregatePuerto_nap = {
    _count: Puerto_napCountAggregateOutputType | null;
    _avg: Puerto_napAvgAggregateOutputType | null;
    _sum: Puerto_napSumAggregateOutputType | null;
    _min: Puerto_napMinAggregateOutputType | null;
    _max: Puerto_napMaxAggregateOutputType | null;
};
export type Puerto_napAvgAggregateOutputType = {
    id_puerto: number | null;
    id_caja_nap: number | null;
    numero_puerto: number | null;
    id_cliente_asociado: number | null;
};
export type Puerto_napSumAggregateOutputType = {
    id_puerto: number | null;
    id_caja_nap: number | null;
    numero_puerto: number | null;
    id_cliente_asociado: number | null;
};
export type Puerto_napMinAggregateOutputType = {
    id_puerto: number | null;
    id_caja_nap: number | null;
    numero_puerto: number | null;
    estado: string | null;
    id_cliente_asociado: number | null;
};
export type Puerto_napMaxAggregateOutputType = {
    id_puerto: number | null;
    id_caja_nap: number | null;
    numero_puerto: number | null;
    estado: string | null;
    id_cliente_asociado: number | null;
};
export type Puerto_napCountAggregateOutputType = {
    id_puerto: number;
    id_caja_nap: number;
    numero_puerto: number;
    estado: number;
    id_cliente_asociado: number;
    _all: number;
};
export type Puerto_napAvgAggregateInputType = {
    id_puerto?: true;
    id_caja_nap?: true;
    numero_puerto?: true;
    id_cliente_asociado?: true;
};
export type Puerto_napSumAggregateInputType = {
    id_puerto?: true;
    id_caja_nap?: true;
    numero_puerto?: true;
    id_cliente_asociado?: true;
};
export type Puerto_napMinAggregateInputType = {
    id_puerto?: true;
    id_caja_nap?: true;
    numero_puerto?: true;
    estado?: true;
    id_cliente_asociado?: true;
};
export type Puerto_napMaxAggregateInputType = {
    id_puerto?: true;
    id_caja_nap?: true;
    numero_puerto?: true;
    estado?: true;
    id_cliente_asociado?: true;
};
export type Puerto_napCountAggregateInputType = {
    id_puerto?: true;
    id_caja_nap?: true;
    numero_puerto?: true;
    estado?: true;
    id_cliente_asociado?: true;
    _all?: true;
};
export type Puerto_napAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.puerto_napWhereInput;
    orderBy?: Prisma.puerto_napOrderByWithRelationInput | Prisma.puerto_napOrderByWithRelationInput[];
    cursor?: Prisma.puerto_napWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Puerto_napCountAggregateInputType;
    _avg?: Puerto_napAvgAggregateInputType;
    _sum?: Puerto_napSumAggregateInputType;
    _min?: Puerto_napMinAggregateInputType;
    _max?: Puerto_napMaxAggregateInputType;
};
export type GetPuerto_napAggregateType<T extends Puerto_napAggregateArgs> = {
    [P in keyof T & keyof AggregatePuerto_nap]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePuerto_nap[P]> : Prisma.GetScalarType<T[P], AggregatePuerto_nap[P]>;
};
export type puerto_napGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.puerto_napWhereInput;
    orderBy?: Prisma.puerto_napOrderByWithAggregationInput | Prisma.puerto_napOrderByWithAggregationInput[];
    by: Prisma.Puerto_napScalarFieldEnum[] | Prisma.Puerto_napScalarFieldEnum;
    having?: Prisma.puerto_napScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Puerto_napCountAggregateInputType | true;
    _avg?: Puerto_napAvgAggregateInputType;
    _sum?: Puerto_napSumAggregateInputType;
    _min?: Puerto_napMinAggregateInputType;
    _max?: Puerto_napMaxAggregateInputType;
};
export type Puerto_napGroupByOutputType = {
    id_puerto: number;
    id_caja_nap: number | null;
    numero_puerto: number | null;
    estado: string | null;
    id_cliente_asociado: number | null;
    _count: Puerto_napCountAggregateOutputType | null;
    _avg: Puerto_napAvgAggregateOutputType | null;
    _sum: Puerto_napSumAggregateOutputType | null;
    _min: Puerto_napMinAggregateOutputType | null;
    _max: Puerto_napMaxAggregateOutputType | null;
};
export type GetPuerto_napGroupByPayload<T extends puerto_napGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Puerto_napGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Puerto_napGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Puerto_napGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Puerto_napGroupByOutputType[P]>;
}>>;
export type puerto_napWhereInput = {
    AND?: Prisma.puerto_napWhereInput | Prisma.puerto_napWhereInput[];
    OR?: Prisma.puerto_napWhereInput[];
    NOT?: Prisma.puerto_napWhereInput | Prisma.puerto_napWhereInput[];
    id_puerto?: Prisma.IntFilter<"puerto_nap"> | number;
    id_caja_nap?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    numero_puerto?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    estado?: Prisma.StringNullableFilter<"puerto_nap"> | string | null;
    id_cliente_asociado?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    caja_nap?: Prisma.XOR<Prisma.Caja_napNullableScalarRelationFilter, Prisma.caja_napWhereInput> | null;
    cliente_asociado?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
};
export type puerto_napOrderByWithRelationInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrderInput | Prisma.SortOrder;
    caja_nap?: Prisma.caja_napOrderByWithRelationInput;
    cliente_asociado?: Prisma.clienteOrderByWithRelationInput;
};
export type puerto_napWhereUniqueInput = Prisma.AtLeast<{
    id_puerto?: number;
    AND?: Prisma.puerto_napWhereInput | Prisma.puerto_napWhereInput[];
    OR?: Prisma.puerto_napWhereInput[];
    NOT?: Prisma.puerto_napWhereInput | Prisma.puerto_napWhereInput[];
    id_caja_nap?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    numero_puerto?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    estado?: Prisma.StringNullableFilter<"puerto_nap"> | string | null;
    id_cliente_asociado?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    caja_nap?: Prisma.XOR<Prisma.Caja_napNullableScalarRelationFilter, Prisma.caja_napWhereInput> | null;
    cliente_asociado?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
}, "id_puerto">;
export type puerto_napOrderByWithAggregationInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.puerto_napCountOrderByAggregateInput;
    _avg?: Prisma.puerto_napAvgOrderByAggregateInput;
    _max?: Prisma.puerto_napMaxOrderByAggregateInput;
    _min?: Prisma.puerto_napMinOrderByAggregateInput;
    _sum?: Prisma.puerto_napSumOrderByAggregateInput;
};
export type puerto_napScalarWhereWithAggregatesInput = {
    AND?: Prisma.puerto_napScalarWhereWithAggregatesInput | Prisma.puerto_napScalarWhereWithAggregatesInput[];
    OR?: Prisma.puerto_napScalarWhereWithAggregatesInput[];
    NOT?: Prisma.puerto_napScalarWhereWithAggregatesInput | Prisma.puerto_napScalarWhereWithAggregatesInput[];
    id_puerto?: Prisma.IntWithAggregatesFilter<"puerto_nap"> | number;
    id_caja_nap?: Prisma.IntNullableWithAggregatesFilter<"puerto_nap"> | number | null;
    numero_puerto?: Prisma.IntNullableWithAggregatesFilter<"puerto_nap"> | number | null;
    estado?: Prisma.StringNullableWithAggregatesFilter<"puerto_nap"> | string | null;
    id_cliente_asociado?: Prisma.IntNullableWithAggregatesFilter<"puerto_nap"> | number | null;
};
export type puerto_napCreateInput = {
    numero_puerto?: number | null;
    estado?: string | null;
    caja_nap?: Prisma.caja_napCreateNestedOneWithoutPuertosInput;
    cliente_asociado?: Prisma.clienteCreateNestedOneWithoutPuertos_napInput;
};
export type puerto_napUncheckedCreateInput = {
    id_puerto?: number;
    id_caja_nap?: number | null;
    numero_puerto?: number | null;
    estado?: string | null;
    id_cliente_asociado?: number | null;
};
export type puerto_napUpdateInput = {
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caja_nap?: Prisma.caja_napUpdateOneWithoutPuertosNestedInput;
    cliente_asociado?: Prisma.clienteUpdateOneWithoutPuertos_napNestedInput;
};
export type puerto_napUncheckedUpdateInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_cliente_asociado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type puerto_napCreateManyInput = {
    id_puerto?: number;
    id_caja_nap?: number | null;
    numero_puerto?: number | null;
    estado?: string | null;
    id_cliente_asociado?: number | null;
};
export type puerto_napUpdateManyMutationInput = {
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type puerto_napUncheckedUpdateManyInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_cliente_asociado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Puerto_napListRelationFilter = {
    every?: Prisma.puerto_napWhereInput;
    some?: Prisma.puerto_napWhereInput;
    none?: Prisma.puerto_napWhereInput;
};
export type puerto_napOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type puerto_napCountOrderByAggregateInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrder;
};
export type puerto_napAvgOrderByAggregateInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrder;
};
export type puerto_napMaxOrderByAggregateInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrder;
};
export type puerto_napMinOrderByAggregateInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrder;
};
export type puerto_napSumOrderByAggregateInput = {
    id_puerto?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    numero_puerto?: Prisma.SortOrder;
    id_cliente_asociado?: Prisma.SortOrder;
};
export type puerto_napCreateNestedManyWithoutCliente_asociadoInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput> | Prisma.puerto_napCreateWithoutCliente_asociadoInput[] | Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput | Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput[];
    createMany?: Prisma.puerto_napCreateManyCliente_asociadoInputEnvelope;
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
};
export type puerto_napUncheckedCreateNestedManyWithoutCliente_asociadoInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput> | Prisma.puerto_napCreateWithoutCliente_asociadoInput[] | Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput | Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput[];
    createMany?: Prisma.puerto_napCreateManyCliente_asociadoInputEnvelope;
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
};
export type puerto_napUpdateManyWithoutCliente_asociadoNestedInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput> | Prisma.puerto_napCreateWithoutCliente_asociadoInput[] | Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput | Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput[];
    upsert?: Prisma.puerto_napUpsertWithWhereUniqueWithoutCliente_asociadoInput | Prisma.puerto_napUpsertWithWhereUniqueWithoutCliente_asociadoInput[];
    createMany?: Prisma.puerto_napCreateManyCliente_asociadoInputEnvelope;
    set?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    disconnect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    delete?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    update?: Prisma.puerto_napUpdateWithWhereUniqueWithoutCliente_asociadoInput | Prisma.puerto_napUpdateWithWhereUniqueWithoutCliente_asociadoInput[];
    updateMany?: Prisma.puerto_napUpdateManyWithWhereWithoutCliente_asociadoInput | Prisma.puerto_napUpdateManyWithWhereWithoutCliente_asociadoInput[];
    deleteMany?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
};
export type puerto_napUncheckedUpdateManyWithoutCliente_asociadoNestedInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput> | Prisma.puerto_napCreateWithoutCliente_asociadoInput[] | Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput | Prisma.puerto_napCreateOrConnectWithoutCliente_asociadoInput[];
    upsert?: Prisma.puerto_napUpsertWithWhereUniqueWithoutCliente_asociadoInput | Prisma.puerto_napUpsertWithWhereUniqueWithoutCliente_asociadoInput[];
    createMany?: Prisma.puerto_napCreateManyCliente_asociadoInputEnvelope;
    set?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    disconnect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    delete?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    update?: Prisma.puerto_napUpdateWithWhereUniqueWithoutCliente_asociadoInput | Prisma.puerto_napUpdateWithWhereUniqueWithoutCliente_asociadoInput[];
    updateMany?: Prisma.puerto_napUpdateManyWithWhereWithoutCliente_asociadoInput | Prisma.puerto_napUpdateManyWithWhereWithoutCliente_asociadoInput[];
    deleteMany?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
};
export type puerto_napCreateNestedManyWithoutCaja_napInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput> | Prisma.puerto_napCreateWithoutCaja_napInput[] | Prisma.puerto_napUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCaja_napInput | Prisma.puerto_napCreateOrConnectWithoutCaja_napInput[];
    createMany?: Prisma.puerto_napCreateManyCaja_napInputEnvelope;
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
};
export type puerto_napUncheckedCreateNestedManyWithoutCaja_napInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput> | Prisma.puerto_napCreateWithoutCaja_napInput[] | Prisma.puerto_napUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCaja_napInput | Prisma.puerto_napCreateOrConnectWithoutCaja_napInput[];
    createMany?: Prisma.puerto_napCreateManyCaja_napInputEnvelope;
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
};
export type puerto_napUpdateManyWithoutCaja_napNestedInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput> | Prisma.puerto_napCreateWithoutCaja_napInput[] | Prisma.puerto_napUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCaja_napInput | Prisma.puerto_napCreateOrConnectWithoutCaja_napInput[];
    upsert?: Prisma.puerto_napUpsertWithWhereUniqueWithoutCaja_napInput | Prisma.puerto_napUpsertWithWhereUniqueWithoutCaja_napInput[];
    createMany?: Prisma.puerto_napCreateManyCaja_napInputEnvelope;
    set?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    disconnect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    delete?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    update?: Prisma.puerto_napUpdateWithWhereUniqueWithoutCaja_napInput | Prisma.puerto_napUpdateWithWhereUniqueWithoutCaja_napInput[];
    updateMany?: Prisma.puerto_napUpdateManyWithWhereWithoutCaja_napInput | Prisma.puerto_napUpdateManyWithWhereWithoutCaja_napInput[];
    deleteMany?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
};
export type puerto_napUncheckedUpdateManyWithoutCaja_napNestedInput = {
    create?: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput> | Prisma.puerto_napCreateWithoutCaja_napInput[] | Prisma.puerto_napUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.puerto_napCreateOrConnectWithoutCaja_napInput | Prisma.puerto_napCreateOrConnectWithoutCaja_napInput[];
    upsert?: Prisma.puerto_napUpsertWithWhereUniqueWithoutCaja_napInput | Prisma.puerto_napUpsertWithWhereUniqueWithoutCaja_napInput[];
    createMany?: Prisma.puerto_napCreateManyCaja_napInputEnvelope;
    set?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    disconnect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    delete?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    connect?: Prisma.puerto_napWhereUniqueInput | Prisma.puerto_napWhereUniqueInput[];
    update?: Prisma.puerto_napUpdateWithWhereUniqueWithoutCaja_napInput | Prisma.puerto_napUpdateWithWhereUniqueWithoutCaja_napInput[];
    updateMany?: Prisma.puerto_napUpdateManyWithWhereWithoutCaja_napInput | Prisma.puerto_napUpdateManyWithWhereWithoutCaja_napInput[];
    deleteMany?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
};
export type puerto_napCreateWithoutCliente_asociadoInput = {
    numero_puerto?: number | null;
    estado?: string | null;
    caja_nap?: Prisma.caja_napCreateNestedOneWithoutPuertosInput;
};
export type puerto_napUncheckedCreateWithoutCliente_asociadoInput = {
    id_puerto?: number;
    id_caja_nap?: number | null;
    numero_puerto?: number | null;
    estado?: string | null;
};
export type puerto_napCreateOrConnectWithoutCliente_asociadoInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput>;
};
export type puerto_napCreateManyCliente_asociadoInputEnvelope = {
    data: Prisma.puerto_napCreateManyCliente_asociadoInput | Prisma.puerto_napCreateManyCliente_asociadoInput[];
    skipDuplicates?: boolean;
};
export type puerto_napUpsertWithWhereUniqueWithoutCliente_asociadoInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    update: Prisma.XOR<Prisma.puerto_napUpdateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedUpdateWithoutCliente_asociadoInput>;
    create: Prisma.XOR<Prisma.puerto_napCreateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedCreateWithoutCliente_asociadoInput>;
};
export type puerto_napUpdateWithWhereUniqueWithoutCliente_asociadoInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    data: Prisma.XOR<Prisma.puerto_napUpdateWithoutCliente_asociadoInput, Prisma.puerto_napUncheckedUpdateWithoutCliente_asociadoInput>;
};
export type puerto_napUpdateManyWithWhereWithoutCliente_asociadoInput = {
    where: Prisma.puerto_napScalarWhereInput;
    data: Prisma.XOR<Prisma.puerto_napUpdateManyMutationInput, Prisma.puerto_napUncheckedUpdateManyWithoutCliente_asociadoInput>;
};
export type puerto_napScalarWhereInput = {
    AND?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
    OR?: Prisma.puerto_napScalarWhereInput[];
    NOT?: Prisma.puerto_napScalarWhereInput | Prisma.puerto_napScalarWhereInput[];
    id_puerto?: Prisma.IntFilter<"puerto_nap"> | number;
    id_caja_nap?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    numero_puerto?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
    estado?: Prisma.StringNullableFilter<"puerto_nap"> | string | null;
    id_cliente_asociado?: Prisma.IntNullableFilter<"puerto_nap"> | number | null;
};
export type puerto_napCreateWithoutCaja_napInput = {
    numero_puerto?: number | null;
    estado?: string | null;
    cliente_asociado?: Prisma.clienteCreateNestedOneWithoutPuertos_napInput;
};
export type puerto_napUncheckedCreateWithoutCaja_napInput = {
    id_puerto?: number;
    numero_puerto?: number | null;
    estado?: string | null;
    id_cliente_asociado?: number | null;
};
export type puerto_napCreateOrConnectWithoutCaja_napInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput>;
};
export type puerto_napCreateManyCaja_napInputEnvelope = {
    data: Prisma.puerto_napCreateManyCaja_napInput | Prisma.puerto_napCreateManyCaja_napInput[];
    skipDuplicates?: boolean;
};
export type puerto_napUpsertWithWhereUniqueWithoutCaja_napInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    update: Prisma.XOR<Prisma.puerto_napUpdateWithoutCaja_napInput, Prisma.puerto_napUncheckedUpdateWithoutCaja_napInput>;
    create: Prisma.XOR<Prisma.puerto_napCreateWithoutCaja_napInput, Prisma.puerto_napUncheckedCreateWithoutCaja_napInput>;
};
export type puerto_napUpdateWithWhereUniqueWithoutCaja_napInput = {
    where: Prisma.puerto_napWhereUniqueInput;
    data: Prisma.XOR<Prisma.puerto_napUpdateWithoutCaja_napInput, Prisma.puerto_napUncheckedUpdateWithoutCaja_napInput>;
};
export type puerto_napUpdateManyWithWhereWithoutCaja_napInput = {
    where: Prisma.puerto_napScalarWhereInput;
    data: Prisma.XOR<Prisma.puerto_napUpdateManyMutationInput, Prisma.puerto_napUncheckedUpdateManyWithoutCaja_napInput>;
};
export type puerto_napCreateManyCliente_asociadoInput = {
    id_puerto?: number;
    id_caja_nap?: number | null;
    numero_puerto?: number | null;
    estado?: string | null;
};
export type puerto_napUpdateWithoutCliente_asociadoInput = {
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    caja_nap?: Prisma.caja_napUpdateOneWithoutPuertosNestedInput;
};
export type puerto_napUncheckedUpdateWithoutCliente_asociadoInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type puerto_napUncheckedUpdateManyWithoutCliente_asociadoInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type puerto_napCreateManyCaja_napInput = {
    id_puerto?: number;
    numero_puerto?: number | null;
    estado?: string | null;
    id_cliente_asociado?: number | null;
};
export type puerto_napUpdateWithoutCaja_napInput = {
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente_asociado?: Prisma.clienteUpdateOneWithoutPuertos_napNestedInput;
};
export type puerto_napUncheckedUpdateWithoutCaja_napInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_cliente_asociado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type puerto_napUncheckedUpdateManyWithoutCaja_napInput = {
    id_puerto?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_puerto?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    id_cliente_asociado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type puerto_napSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_puerto?: boolean;
    id_caja_nap?: boolean;
    numero_puerto?: boolean;
    estado?: boolean;
    id_cliente_asociado?: boolean;
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
}, ExtArgs["result"]["puerto_nap"]>;
export type puerto_napSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_puerto?: boolean;
    id_caja_nap?: boolean;
    numero_puerto?: boolean;
    estado?: boolean;
    id_cliente_asociado?: boolean;
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
}, ExtArgs["result"]["puerto_nap"]>;
export type puerto_napSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_puerto?: boolean;
    id_caja_nap?: boolean;
    numero_puerto?: boolean;
    estado?: boolean;
    id_cliente_asociado?: boolean;
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
}, ExtArgs["result"]["puerto_nap"]>;
export type puerto_napSelectScalar = {
    id_puerto?: boolean;
    id_caja_nap?: boolean;
    numero_puerto?: boolean;
    estado?: boolean;
    id_cliente_asociado?: boolean;
};
export type puerto_napOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_puerto" | "id_caja_nap" | "numero_puerto" | "estado" | "id_cliente_asociado", ExtArgs["result"]["puerto_nap"]>;
export type puerto_napInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
};
export type puerto_napIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
};
export type puerto_napIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    caja_nap?: boolean | Prisma.puerto_nap$caja_napArgs<ExtArgs>;
    cliente_asociado?: boolean | Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>;
};
export type $puerto_napPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "puerto_nap";
    objects: {
        caja_nap: Prisma.$caja_napPayload<ExtArgs> | null;
        cliente_asociado: Prisma.$clientePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_puerto: number;
        id_caja_nap: number | null;
        numero_puerto: number | null;
        estado: string | null;
        id_cliente_asociado: number | null;
    }, ExtArgs["result"]["puerto_nap"]>;
    composites: {};
};
export type puerto_napGetPayload<S extends boolean | null | undefined | puerto_napDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$puerto_napPayload, S>;
export type puerto_napCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<puerto_napFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Puerto_napCountAggregateInputType | true;
};
export interface puerto_napDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['puerto_nap'];
        meta: {
            name: 'puerto_nap';
        };
    };
    findUnique<T extends puerto_napFindUniqueArgs>(args: Prisma.SelectSubset<T, puerto_napFindUniqueArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends puerto_napFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, puerto_napFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends puerto_napFindFirstArgs>(args?: Prisma.SelectSubset<T, puerto_napFindFirstArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends puerto_napFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, puerto_napFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends puerto_napFindManyArgs>(args?: Prisma.SelectSubset<T, puerto_napFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends puerto_napCreateArgs>(args: Prisma.SelectSubset<T, puerto_napCreateArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends puerto_napCreateManyArgs>(args?: Prisma.SelectSubset<T, puerto_napCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends puerto_napCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, puerto_napCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends puerto_napDeleteArgs>(args: Prisma.SelectSubset<T, puerto_napDeleteArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends puerto_napUpdateArgs>(args: Prisma.SelectSubset<T, puerto_napUpdateArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends puerto_napDeleteManyArgs>(args?: Prisma.SelectSubset<T, puerto_napDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends puerto_napUpdateManyArgs>(args: Prisma.SelectSubset<T, puerto_napUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends puerto_napUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, puerto_napUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends puerto_napUpsertArgs>(args: Prisma.SelectSubset<T, puerto_napUpsertArgs<ExtArgs>>): Prisma.Prisma__puerto_napClient<runtime.Types.Result.GetResult<Prisma.$puerto_napPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends puerto_napCountArgs>(args?: Prisma.Subset<T, puerto_napCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Puerto_napCountAggregateOutputType> : number>;
    aggregate<T extends Puerto_napAggregateArgs>(args: Prisma.Subset<T, Puerto_napAggregateArgs>): Prisma.PrismaPromise<GetPuerto_napAggregateType<T>>;
    groupBy<T extends puerto_napGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: puerto_napGroupByArgs['orderBy'];
    } : {
        orderBy?: puerto_napGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, puerto_napGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPuerto_napGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: puerto_napFieldRefs;
}
export interface Prisma__puerto_napClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    caja_nap<T extends Prisma.puerto_nap$caja_napArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.puerto_nap$caja_napArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente_asociado<T extends Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.puerto_nap$cliente_asociadoArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface puerto_napFieldRefs {
    readonly id_puerto: Prisma.FieldRef<"puerto_nap", 'Int'>;
    readonly id_caja_nap: Prisma.FieldRef<"puerto_nap", 'Int'>;
    readonly numero_puerto: Prisma.FieldRef<"puerto_nap", 'Int'>;
    readonly estado: Prisma.FieldRef<"puerto_nap", 'String'>;
    readonly id_cliente_asociado: Prisma.FieldRef<"puerto_nap", 'Int'>;
}
export type puerto_napFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    where: Prisma.puerto_napWhereUniqueInput;
};
export type puerto_napFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    where: Prisma.puerto_napWhereUniqueInput;
};
export type puerto_napFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type puerto_napFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type puerto_napFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type puerto_napCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.puerto_napCreateInput, Prisma.puerto_napUncheckedCreateInput>;
};
export type puerto_napCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.puerto_napCreateManyInput | Prisma.puerto_napCreateManyInput[];
    skipDuplicates?: boolean;
};
export type puerto_napCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    data: Prisma.puerto_napCreateManyInput | Prisma.puerto_napCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.puerto_napIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type puerto_napUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.puerto_napUpdateInput, Prisma.puerto_napUncheckedUpdateInput>;
    where: Prisma.puerto_napWhereUniqueInput;
};
export type puerto_napUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.puerto_napUpdateManyMutationInput, Prisma.puerto_napUncheckedUpdateManyInput>;
    where?: Prisma.puerto_napWhereInput;
    limit?: number;
};
export type puerto_napUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.puerto_napUpdateManyMutationInput, Prisma.puerto_napUncheckedUpdateManyInput>;
    where?: Prisma.puerto_napWhereInput;
    limit?: number;
    include?: Prisma.puerto_napIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type puerto_napUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    where: Prisma.puerto_napWhereUniqueInput;
    create: Prisma.XOR<Prisma.puerto_napCreateInput, Prisma.puerto_napUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.puerto_napUpdateInput, Prisma.puerto_napUncheckedUpdateInput>;
};
export type puerto_napDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
    where: Prisma.puerto_napWhereUniqueInput;
};
export type puerto_napDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.puerto_napWhereInput;
    limit?: number;
};
export type puerto_nap$caja_napArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where?: Prisma.caja_napWhereInput;
};
export type puerto_nap$cliente_asociadoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type puerto_napDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.puerto_napSelect<ExtArgs> | null;
    omit?: Prisma.puerto_napOmit<ExtArgs> | null;
    include?: Prisma.puerto_napInclude<ExtArgs> | null;
};
