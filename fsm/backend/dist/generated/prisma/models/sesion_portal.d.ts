import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type sesion_portalModel = runtime.Types.Result.DefaultSelection<Prisma.$sesion_portalPayload>;
export type AggregateSesion_portal = {
    _count: Sesion_portalCountAggregateOutputType | null;
    _avg: Sesion_portalAvgAggregateOutputType | null;
    _sum: Sesion_portalSumAggregateOutputType | null;
    _min: Sesion_portalMinAggregateOutputType | null;
    _max: Sesion_portalMaxAggregateOutputType | null;
};
export type Sesion_portalAvgAggregateOutputType = {
    id_sesion: number | null;
    id_cliente: number | null;
};
export type Sesion_portalSumAggregateOutputType = {
    id_sesion: bigint | null;
    id_cliente: number | null;
};
export type Sesion_portalMinAggregateOutputType = {
    id_sesion: bigint | null;
    id_cliente: number | null;
    token: string | null;
    fecha_inicio: Date | null;
    fecha_expiracion: Date | null;
    ip_origen: string | null;
};
export type Sesion_portalMaxAggregateOutputType = {
    id_sesion: bigint | null;
    id_cliente: number | null;
    token: string | null;
    fecha_inicio: Date | null;
    fecha_expiracion: Date | null;
    ip_origen: string | null;
};
export type Sesion_portalCountAggregateOutputType = {
    id_sesion: number;
    id_cliente: number;
    token: number;
    fecha_inicio: number;
    fecha_expiracion: number;
    ip_origen: number;
    _all: number;
};
export type Sesion_portalAvgAggregateInputType = {
    id_sesion?: true;
    id_cliente?: true;
};
export type Sesion_portalSumAggregateInputType = {
    id_sesion?: true;
    id_cliente?: true;
};
export type Sesion_portalMinAggregateInputType = {
    id_sesion?: true;
    id_cliente?: true;
    token?: true;
    fecha_inicio?: true;
    fecha_expiracion?: true;
    ip_origen?: true;
};
export type Sesion_portalMaxAggregateInputType = {
    id_sesion?: true;
    id_cliente?: true;
    token?: true;
    fecha_inicio?: true;
    fecha_expiracion?: true;
    ip_origen?: true;
};
export type Sesion_portalCountAggregateInputType = {
    id_sesion?: true;
    id_cliente?: true;
    token?: true;
    fecha_inicio?: true;
    fecha_expiracion?: true;
    ip_origen?: true;
    _all?: true;
};
export type Sesion_portalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sesion_portalWhereInput;
    orderBy?: Prisma.sesion_portalOrderByWithRelationInput | Prisma.sesion_portalOrderByWithRelationInput[];
    cursor?: Prisma.sesion_portalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Sesion_portalCountAggregateInputType;
    _avg?: Sesion_portalAvgAggregateInputType;
    _sum?: Sesion_portalSumAggregateInputType;
    _min?: Sesion_portalMinAggregateInputType;
    _max?: Sesion_portalMaxAggregateInputType;
};
export type GetSesion_portalAggregateType<T extends Sesion_portalAggregateArgs> = {
    [P in keyof T & keyof AggregateSesion_portal]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSesion_portal[P]> : Prisma.GetScalarType<T[P], AggregateSesion_portal[P]>;
};
export type sesion_portalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sesion_portalWhereInput;
    orderBy?: Prisma.sesion_portalOrderByWithAggregationInput | Prisma.sesion_portalOrderByWithAggregationInput[];
    by: Prisma.Sesion_portalScalarFieldEnum[] | Prisma.Sesion_portalScalarFieldEnum;
    having?: Prisma.sesion_portalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Sesion_portalCountAggregateInputType | true;
    _avg?: Sesion_portalAvgAggregateInputType;
    _sum?: Sesion_portalSumAggregateInputType;
    _min?: Sesion_portalMinAggregateInputType;
    _max?: Sesion_portalMaxAggregateInputType;
};
export type Sesion_portalGroupByOutputType = {
    id_sesion: bigint;
    id_cliente: number | null;
    token: string;
    fecha_inicio: Date | null;
    fecha_expiracion: Date | null;
    ip_origen: string | null;
    _count: Sesion_portalCountAggregateOutputType | null;
    _avg: Sesion_portalAvgAggregateOutputType | null;
    _sum: Sesion_portalSumAggregateOutputType | null;
    _min: Sesion_portalMinAggregateOutputType | null;
    _max: Sesion_portalMaxAggregateOutputType | null;
};
export type GetSesion_portalGroupByPayload<T extends sesion_portalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Sesion_portalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Sesion_portalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Sesion_portalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Sesion_portalGroupByOutputType[P]>;
}>>;
export type sesion_portalWhereInput = {
    AND?: Prisma.sesion_portalWhereInput | Prisma.sesion_portalWhereInput[];
    OR?: Prisma.sesion_portalWhereInput[];
    NOT?: Prisma.sesion_portalWhereInput | Prisma.sesion_portalWhereInput[];
    id_sesion?: Prisma.BigIntFilter<"sesion_portal"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"sesion_portal"> | number | null;
    token?: Prisma.StringFilter<"sesion_portal"> | string;
    fecha_inicio?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    fecha_expiracion?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    ip_origen?: Prisma.StringNullableFilter<"sesion_portal"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
};
export type sesion_portalOrderByWithRelationInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_expiracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
};
export type sesion_portalWhereUniqueInput = Prisma.AtLeast<{
    id_sesion?: bigint | number;
    AND?: Prisma.sesion_portalWhereInput | Prisma.sesion_portalWhereInput[];
    OR?: Prisma.sesion_portalWhereInput[];
    NOT?: Prisma.sesion_portalWhereInput | Prisma.sesion_portalWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"sesion_portal"> | number | null;
    token?: Prisma.StringFilter<"sesion_portal"> | string;
    fecha_inicio?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    fecha_expiracion?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    ip_origen?: Prisma.StringNullableFilter<"sesion_portal"> | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
}, "id_sesion">;
export type sesion_portalOrderByWithAggregationInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    token?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_expiracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.sesion_portalCountOrderByAggregateInput;
    _avg?: Prisma.sesion_portalAvgOrderByAggregateInput;
    _max?: Prisma.sesion_portalMaxOrderByAggregateInput;
    _min?: Prisma.sesion_portalMinOrderByAggregateInput;
    _sum?: Prisma.sesion_portalSumOrderByAggregateInput;
};
export type sesion_portalScalarWhereWithAggregatesInput = {
    AND?: Prisma.sesion_portalScalarWhereWithAggregatesInput | Prisma.sesion_portalScalarWhereWithAggregatesInput[];
    OR?: Prisma.sesion_portalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.sesion_portalScalarWhereWithAggregatesInput | Prisma.sesion_portalScalarWhereWithAggregatesInput[];
    id_sesion?: Prisma.BigIntWithAggregatesFilter<"sesion_portal"> | bigint | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"sesion_portal"> | number | null;
    token?: Prisma.StringWithAggregatesFilter<"sesion_portal"> | string;
    fecha_inicio?: Prisma.DateTimeNullableWithAggregatesFilter<"sesion_portal"> | Date | string | null;
    fecha_expiracion?: Prisma.DateTimeNullableWithAggregatesFilter<"sesion_portal"> | Date | string | null;
    ip_origen?: Prisma.StringNullableWithAggregatesFilter<"sesion_portal"> | string | null;
};
export type sesion_portalCreateInput = {
    id_sesion?: bigint | number;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutSesionesInput;
};
export type sesion_portalUncheckedCreateInput = {
    id_sesion?: bigint | number;
    id_cliente?: number | null;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
};
export type sesion_portalUpdateInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutSesionesNestedInput;
};
export type sesion_portalUncheckedUpdateInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type sesion_portalCreateManyInput = {
    id_sesion?: bigint | number;
    id_cliente?: number | null;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
};
export type sesion_portalUpdateManyMutationInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type sesion_portalUncheckedUpdateManyInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Sesion_portalListRelationFilter = {
    every?: Prisma.sesion_portalWhereInput;
    some?: Prisma.sesion_portalWhereInput;
    none?: Prisma.sesion_portalWhereInput;
};
export type sesion_portalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type sesion_portalCountOrderByAggregateInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_expiracion?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
};
export type sesion_portalAvgOrderByAggregateInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type sesion_portalMaxOrderByAggregateInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_expiracion?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
};
export type sesion_portalMinOrderByAggregateInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    fecha_expiracion?: Prisma.SortOrder;
    ip_origen?: Prisma.SortOrder;
};
export type sesion_portalSumOrderByAggregateInput = {
    id_sesion?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
};
export type sesion_portalCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput> | Prisma.sesion_portalCreateWithoutClienteInput[] | Prisma.sesion_portalUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.sesion_portalCreateOrConnectWithoutClienteInput | Prisma.sesion_portalCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.sesion_portalCreateManyClienteInputEnvelope;
    connect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
};
export type sesion_portalUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput> | Prisma.sesion_portalCreateWithoutClienteInput[] | Prisma.sesion_portalUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.sesion_portalCreateOrConnectWithoutClienteInput | Prisma.sesion_portalCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.sesion_portalCreateManyClienteInputEnvelope;
    connect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
};
export type sesion_portalUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput> | Prisma.sesion_portalCreateWithoutClienteInput[] | Prisma.sesion_portalUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.sesion_portalCreateOrConnectWithoutClienteInput | Prisma.sesion_portalCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.sesion_portalUpsertWithWhereUniqueWithoutClienteInput | Prisma.sesion_portalUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.sesion_portalCreateManyClienteInputEnvelope;
    set?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    disconnect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    delete?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    connect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    update?: Prisma.sesion_portalUpdateWithWhereUniqueWithoutClienteInput | Prisma.sesion_portalUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.sesion_portalUpdateManyWithWhereWithoutClienteInput | Prisma.sesion_portalUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.sesion_portalScalarWhereInput | Prisma.sesion_portalScalarWhereInput[];
};
export type sesion_portalUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput> | Prisma.sesion_portalCreateWithoutClienteInput[] | Prisma.sesion_portalUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.sesion_portalCreateOrConnectWithoutClienteInput | Prisma.sesion_portalCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.sesion_portalUpsertWithWhereUniqueWithoutClienteInput | Prisma.sesion_portalUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.sesion_portalCreateManyClienteInputEnvelope;
    set?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    disconnect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    delete?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    connect?: Prisma.sesion_portalWhereUniqueInput | Prisma.sesion_portalWhereUniqueInput[];
    update?: Prisma.sesion_portalUpdateWithWhereUniqueWithoutClienteInput | Prisma.sesion_portalUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.sesion_portalUpdateManyWithWhereWithoutClienteInput | Prisma.sesion_portalUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.sesion_portalScalarWhereInput | Prisma.sesion_portalScalarWhereInput[];
};
export type sesion_portalCreateWithoutClienteInput = {
    id_sesion?: bigint | number;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
};
export type sesion_portalUncheckedCreateWithoutClienteInput = {
    id_sesion?: bigint | number;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
};
export type sesion_portalCreateOrConnectWithoutClienteInput = {
    where: Prisma.sesion_portalWhereUniqueInput;
    create: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput>;
};
export type sesion_portalCreateManyClienteInputEnvelope = {
    data: Prisma.sesion_portalCreateManyClienteInput | Prisma.sesion_portalCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type sesion_portalUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.sesion_portalWhereUniqueInput;
    update: Prisma.XOR<Prisma.sesion_portalUpdateWithoutClienteInput, Prisma.sesion_portalUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.sesion_portalCreateWithoutClienteInput, Prisma.sesion_portalUncheckedCreateWithoutClienteInput>;
};
export type sesion_portalUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.sesion_portalWhereUniqueInput;
    data: Prisma.XOR<Prisma.sesion_portalUpdateWithoutClienteInput, Prisma.sesion_portalUncheckedUpdateWithoutClienteInput>;
};
export type sesion_portalUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.sesion_portalScalarWhereInput;
    data: Prisma.XOR<Prisma.sesion_portalUpdateManyMutationInput, Prisma.sesion_portalUncheckedUpdateManyWithoutClienteInput>;
};
export type sesion_portalScalarWhereInput = {
    AND?: Prisma.sesion_portalScalarWhereInput | Prisma.sesion_portalScalarWhereInput[];
    OR?: Prisma.sesion_portalScalarWhereInput[];
    NOT?: Prisma.sesion_portalScalarWhereInput | Prisma.sesion_portalScalarWhereInput[];
    id_sesion?: Prisma.BigIntFilter<"sesion_portal"> | bigint | number;
    id_cliente?: Prisma.IntNullableFilter<"sesion_portal"> | number | null;
    token?: Prisma.StringFilter<"sesion_portal"> | string;
    fecha_inicio?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    fecha_expiracion?: Prisma.DateTimeNullableFilter<"sesion_portal"> | Date | string | null;
    ip_origen?: Prisma.StringNullableFilter<"sesion_portal"> | string | null;
};
export type sesion_portalCreateManyClienteInput = {
    id_sesion?: bigint | number;
    token: string;
    fecha_inicio?: Date | string | null;
    fecha_expiracion?: Date | string | null;
    ip_origen?: string | null;
};
export type sesion_portalUpdateWithoutClienteInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type sesion_portalUncheckedUpdateWithoutClienteInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type sesion_portalUncheckedUpdateManyWithoutClienteInput = {
    id_sesion?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_inicio?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_expiracion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    ip_origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type sesion_portalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_sesion?: boolean;
    id_cliente?: boolean;
    token?: boolean;
    fecha_inicio?: boolean;
    fecha_expiracion?: boolean;
    ip_origen?: boolean;
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["sesion_portal"]>;
export type sesion_portalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_sesion?: boolean;
    id_cliente?: boolean;
    token?: boolean;
    fecha_inicio?: boolean;
    fecha_expiracion?: boolean;
    ip_origen?: boolean;
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["sesion_portal"]>;
export type sesion_portalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_sesion?: boolean;
    id_cliente?: boolean;
    token?: boolean;
    fecha_inicio?: boolean;
    fecha_expiracion?: boolean;
    ip_origen?: boolean;
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["sesion_portal"]>;
export type sesion_portalSelectScalar = {
    id_sesion?: boolean;
    id_cliente?: boolean;
    token?: boolean;
    fecha_inicio?: boolean;
    fecha_expiracion?: boolean;
    ip_origen?: boolean;
};
export type sesion_portalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_sesion" | "id_cliente" | "token" | "fecha_inicio" | "fecha_expiracion" | "ip_origen", ExtArgs["result"]["sesion_portal"]>;
export type sesion_portalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
};
export type sesion_portalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
};
export type sesion_portalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.sesion_portal$clienteArgs<ExtArgs>;
};
export type $sesion_portalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "sesion_portal";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_sesion: bigint;
        id_cliente: number | null;
        token: string;
        fecha_inicio: Date | null;
        fecha_expiracion: Date | null;
        ip_origen: string | null;
    }, ExtArgs["result"]["sesion_portal"]>;
    composites: {};
};
export type sesion_portalGetPayload<S extends boolean | null | undefined | sesion_portalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload, S>;
export type sesion_portalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<sesion_portalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Sesion_portalCountAggregateInputType | true;
};
export interface sesion_portalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['sesion_portal'];
        meta: {
            name: 'sesion_portal';
        };
    };
    findUnique<T extends sesion_portalFindUniqueArgs>(args: Prisma.SelectSubset<T, sesion_portalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends sesion_portalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, sesion_portalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends sesion_portalFindFirstArgs>(args?: Prisma.SelectSubset<T, sesion_portalFindFirstArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends sesion_portalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, sesion_portalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends sesion_portalFindManyArgs>(args?: Prisma.SelectSubset<T, sesion_portalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends sesion_portalCreateArgs>(args: Prisma.SelectSubset<T, sesion_portalCreateArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends sesion_portalCreateManyArgs>(args?: Prisma.SelectSubset<T, sesion_portalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends sesion_portalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, sesion_portalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends sesion_portalDeleteArgs>(args: Prisma.SelectSubset<T, sesion_portalDeleteArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends sesion_portalUpdateArgs>(args: Prisma.SelectSubset<T, sesion_portalUpdateArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends sesion_portalDeleteManyArgs>(args?: Prisma.SelectSubset<T, sesion_portalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends sesion_portalUpdateManyArgs>(args: Prisma.SelectSubset<T, sesion_portalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends sesion_portalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, sesion_portalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends sesion_portalUpsertArgs>(args: Prisma.SelectSubset<T, sesion_portalUpsertArgs<ExtArgs>>): Prisma.Prisma__sesion_portalClient<runtime.Types.Result.GetResult<Prisma.$sesion_portalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends sesion_portalCountArgs>(args?: Prisma.Subset<T, sesion_portalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Sesion_portalCountAggregateOutputType> : number>;
    aggregate<T extends Sesion_portalAggregateArgs>(args: Prisma.Subset<T, Sesion_portalAggregateArgs>): Prisma.PrismaPromise<GetSesion_portalAggregateType<T>>;
    groupBy<T extends sesion_portalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: sesion_portalGroupByArgs['orderBy'];
    } : {
        orderBy?: sesion_portalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, sesion_portalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSesion_portalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: sesion_portalFieldRefs;
}
export interface Prisma__sesion_portalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.sesion_portal$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.sesion_portal$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface sesion_portalFieldRefs {
    readonly id_sesion: Prisma.FieldRef<"sesion_portal", 'BigInt'>;
    readonly id_cliente: Prisma.FieldRef<"sesion_portal", 'Int'>;
    readonly token: Prisma.FieldRef<"sesion_portal", 'String'>;
    readonly fecha_inicio: Prisma.FieldRef<"sesion_portal", 'DateTime'>;
    readonly fecha_expiracion: Prisma.FieldRef<"sesion_portal", 'DateTime'>;
    readonly ip_origen: Prisma.FieldRef<"sesion_portal", 'String'>;
}
export type sesion_portalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where: Prisma.sesion_portalWhereUniqueInput;
};
export type sesion_portalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where: Prisma.sesion_portalWhereUniqueInput;
};
export type sesion_portalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where?: Prisma.sesion_portalWhereInput;
    orderBy?: Prisma.sesion_portalOrderByWithRelationInput | Prisma.sesion_portalOrderByWithRelationInput[];
    cursor?: Prisma.sesion_portalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sesion_portalScalarFieldEnum | Prisma.Sesion_portalScalarFieldEnum[];
};
export type sesion_portalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where?: Prisma.sesion_portalWhereInput;
    orderBy?: Prisma.sesion_portalOrderByWithRelationInput | Prisma.sesion_portalOrderByWithRelationInput[];
    cursor?: Prisma.sesion_portalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sesion_portalScalarFieldEnum | Prisma.Sesion_portalScalarFieldEnum[];
};
export type sesion_portalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where?: Prisma.sesion_portalWhereInput;
    orderBy?: Prisma.sesion_portalOrderByWithRelationInput | Prisma.sesion_portalOrderByWithRelationInput[];
    cursor?: Prisma.sesion_portalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Sesion_portalScalarFieldEnum | Prisma.Sesion_portalScalarFieldEnum[];
};
export type sesion_portalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sesion_portalCreateInput, Prisma.sesion_portalUncheckedCreateInput>;
};
export type sesion_portalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.sesion_portalCreateManyInput | Prisma.sesion_portalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type sesion_portalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    data: Prisma.sesion_portalCreateManyInput | Prisma.sesion_portalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.sesion_portalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type sesion_portalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sesion_portalUpdateInput, Prisma.sesion_portalUncheckedUpdateInput>;
    where: Prisma.sesion_portalWhereUniqueInput;
};
export type sesion_portalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.sesion_portalUpdateManyMutationInput, Prisma.sesion_portalUncheckedUpdateManyInput>;
    where?: Prisma.sesion_portalWhereInput;
    limit?: number;
};
export type sesion_portalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.sesion_portalUpdateManyMutationInput, Prisma.sesion_portalUncheckedUpdateManyInput>;
    where?: Prisma.sesion_portalWhereInput;
    limit?: number;
    include?: Prisma.sesion_portalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type sesion_portalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where: Prisma.sesion_portalWhereUniqueInput;
    create: Prisma.XOR<Prisma.sesion_portalCreateInput, Prisma.sesion_portalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.sesion_portalUpdateInput, Prisma.sesion_portalUncheckedUpdateInput>;
};
export type sesion_portalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
    where: Prisma.sesion_portalWhereUniqueInput;
};
export type sesion_portalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.sesion_portalWhereInput;
    limit?: number;
};
export type sesion_portal$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type sesion_portalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.sesion_portalSelect<ExtArgs> | null;
    omit?: Prisma.sesion_portalOmit<ExtArgs> | null;
    include?: Prisma.sesion_portalInclude<ExtArgs> | null;
};
