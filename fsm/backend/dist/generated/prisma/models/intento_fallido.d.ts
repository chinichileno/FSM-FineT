import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type intento_fallidoModel = runtime.Types.Result.DefaultSelection<Prisma.$intento_fallidoPayload>;
export type AggregateIntento_fallido = {
    _count: Intento_fallidoCountAggregateOutputType | null;
    _avg: Intento_fallidoAvgAggregateOutputType | null;
    _sum: Intento_fallidoSumAggregateOutputType | null;
    _min: Intento_fallidoMinAggregateOutputType | null;
    _max: Intento_fallidoMaxAggregateOutputType | null;
};
export type Intento_fallidoAvgAggregateOutputType = {
    id_intento: number | null;
    id_empresa: number | null;
};
export type Intento_fallidoSumAggregateOutputType = {
    id_intento: bigint | null;
    id_empresa: number | null;
};
export type Intento_fallidoMinAggregateOutputType = {
    id_intento: bigint | null;
    id_empresa: number | null;
    ip_address: string | null;
    rut_intentado: string | null;
    timestamp: Date | null;
    bloqueado_hasta: Date | null;
};
export type Intento_fallidoMaxAggregateOutputType = {
    id_intento: bigint | null;
    id_empresa: number | null;
    ip_address: string | null;
    rut_intentado: string | null;
    timestamp: Date | null;
    bloqueado_hasta: Date | null;
};
export type Intento_fallidoCountAggregateOutputType = {
    id_intento: number;
    id_empresa: number;
    ip_address: number;
    rut_intentado: number;
    timestamp: number;
    bloqueado_hasta: number;
    _all: number;
};
export type Intento_fallidoAvgAggregateInputType = {
    id_intento?: true;
    id_empresa?: true;
};
export type Intento_fallidoSumAggregateInputType = {
    id_intento?: true;
    id_empresa?: true;
};
export type Intento_fallidoMinAggregateInputType = {
    id_intento?: true;
    id_empresa?: true;
    ip_address?: true;
    rut_intentado?: true;
    timestamp?: true;
    bloqueado_hasta?: true;
};
export type Intento_fallidoMaxAggregateInputType = {
    id_intento?: true;
    id_empresa?: true;
    ip_address?: true;
    rut_intentado?: true;
    timestamp?: true;
    bloqueado_hasta?: true;
};
export type Intento_fallidoCountAggregateInputType = {
    id_intento?: true;
    id_empresa?: true;
    ip_address?: true;
    rut_intentado?: true;
    timestamp?: true;
    bloqueado_hasta?: true;
    _all?: true;
};
export type Intento_fallidoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.intento_fallidoWhereInput;
    orderBy?: Prisma.intento_fallidoOrderByWithRelationInput | Prisma.intento_fallidoOrderByWithRelationInput[];
    cursor?: Prisma.intento_fallidoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Intento_fallidoCountAggregateInputType;
    _avg?: Intento_fallidoAvgAggregateInputType;
    _sum?: Intento_fallidoSumAggregateInputType;
    _min?: Intento_fallidoMinAggregateInputType;
    _max?: Intento_fallidoMaxAggregateInputType;
};
export type GetIntento_fallidoAggregateType<T extends Intento_fallidoAggregateArgs> = {
    [P in keyof T & keyof AggregateIntento_fallido]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateIntento_fallido[P]> : Prisma.GetScalarType<T[P], AggregateIntento_fallido[P]>;
};
export type intento_fallidoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.intento_fallidoWhereInput;
    orderBy?: Prisma.intento_fallidoOrderByWithAggregationInput | Prisma.intento_fallidoOrderByWithAggregationInput[];
    by: Prisma.Intento_fallidoScalarFieldEnum[] | Prisma.Intento_fallidoScalarFieldEnum;
    having?: Prisma.intento_fallidoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Intento_fallidoCountAggregateInputType | true;
    _avg?: Intento_fallidoAvgAggregateInputType;
    _sum?: Intento_fallidoSumAggregateInputType;
    _min?: Intento_fallidoMinAggregateInputType;
    _max?: Intento_fallidoMaxAggregateInputType;
};
export type Intento_fallidoGroupByOutputType = {
    id_intento: bigint;
    id_empresa: number | null;
    ip_address: string;
    rut_intentado: string | null;
    timestamp: Date;
    bloqueado_hasta: Date | null;
    _count: Intento_fallidoCountAggregateOutputType | null;
    _avg: Intento_fallidoAvgAggregateOutputType | null;
    _sum: Intento_fallidoSumAggregateOutputType | null;
    _min: Intento_fallidoMinAggregateOutputType | null;
    _max: Intento_fallidoMaxAggregateOutputType | null;
};
export type GetIntento_fallidoGroupByPayload<T extends intento_fallidoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Intento_fallidoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Intento_fallidoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Intento_fallidoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Intento_fallidoGroupByOutputType[P]>;
}>>;
export type intento_fallidoWhereInput = {
    AND?: Prisma.intento_fallidoWhereInput | Prisma.intento_fallidoWhereInput[];
    OR?: Prisma.intento_fallidoWhereInput[];
    NOT?: Prisma.intento_fallidoWhereInput | Prisma.intento_fallidoWhereInput[];
    id_intento?: Prisma.BigIntFilter<"intento_fallido"> | bigint | number;
    id_empresa?: Prisma.IntNullableFilter<"intento_fallido"> | number | null;
    ip_address?: Prisma.StringFilter<"intento_fallido"> | string;
    rut_intentado?: Prisma.StringNullableFilter<"intento_fallido"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"intento_fallido"> | Date | string;
    bloqueado_hasta?: Prisma.DateTimeNullableFilter<"intento_fallido"> | Date | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
};
export type intento_fallidoOrderByWithRelationInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    rut_intentado?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    bloqueado_hasta?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
};
export type intento_fallidoWhereUniqueInput = Prisma.AtLeast<{
    id_intento?: bigint | number;
    AND?: Prisma.intento_fallidoWhereInput | Prisma.intento_fallidoWhereInput[];
    OR?: Prisma.intento_fallidoWhereInput[];
    NOT?: Prisma.intento_fallidoWhereInput | Prisma.intento_fallidoWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"intento_fallido"> | number | null;
    ip_address?: Prisma.StringFilter<"intento_fallido"> | string;
    rut_intentado?: Prisma.StringNullableFilter<"intento_fallido"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"intento_fallido"> | Date | string;
    bloqueado_hasta?: Prisma.DateTimeNullableFilter<"intento_fallido"> | Date | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
}, "id_intento">;
export type intento_fallidoOrderByWithAggregationInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    rut_intentado?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    bloqueado_hasta?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.intento_fallidoCountOrderByAggregateInput;
    _avg?: Prisma.intento_fallidoAvgOrderByAggregateInput;
    _max?: Prisma.intento_fallidoMaxOrderByAggregateInput;
    _min?: Prisma.intento_fallidoMinOrderByAggregateInput;
    _sum?: Prisma.intento_fallidoSumOrderByAggregateInput;
};
export type intento_fallidoScalarWhereWithAggregatesInput = {
    AND?: Prisma.intento_fallidoScalarWhereWithAggregatesInput | Prisma.intento_fallidoScalarWhereWithAggregatesInput[];
    OR?: Prisma.intento_fallidoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.intento_fallidoScalarWhereWithAggregatesInput | Prisma.intento_fallidoScalarWhereWithAggregatesInput[];
    id_intento?: Prisma.BigIntWithAggregatesFilter<"intento_fallido"> | bigint | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"intento_fallido"> | number | null;
    ip_address?: Prisma.StringWithAggregatesFilter<"intento_fallido"> | string;
    rut_intentado?: Prisma.StringNullableWithAggregatesFilter<"intento_fallido"> | string | null;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"intento_fallido"> | Date | string;
    bloqueado_hasta?: Prisma.DateTimeNullableWithAggregatesFilter<"intento_fallido"> | Date | string | null;
};
export type intento_fallidoCreateInput = {
    id_intento?: bigint | number;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutIntentos_fallidosInput;
};
export type intento_fallidoUncheckedCreateInput = {
    id_intento?: bigint | number;
    id_empresa?: number | null;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
};
export type intento_fallidoUpdateInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutIntentos_fallidosNestedInput;
};
export type intento_fallidoUncheckedUpdateInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type intento_fallidoCreateManyInput = {
    id_intento?: bigint | number;
    id_empresa?: number | null;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
};
export type intento_fallidoUpdateManyMutationInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type intento_fallidoUncheckedUpdateManyInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Intento_fallidoListRelationFilter = {
    every?: Prisma.intento_fallidoWhereInput;
    some?: Prisma.intento_fallidoWhereInput;
    none?: Prisma.intento_fallidoWhereInput;
};
export type intento_fallidoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type intento_fallidoCountOrderByAggregateInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    rut_intentado?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    bloqueado_hasta?: Prisma.SortOrder;
};
export type intento_fallidoAvgOrderByAggregateInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type intento_fallidoMaxOrderByAggregateInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    rut_intentado?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    bloqueado_hasta?: Prisma.SortOrder;
};
export type intento_fallidoMinOrderByAggregateInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    ip_address?: Prisma.SortOrder;
    rut_intentado?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    bloqueado_hasta?: Prisma.SortOrder;
};
export type intento_fallidoSumOrderByAggregateInput = {
    id_intento?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type intento_fallidoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput> | Prisma.intento_fallidoCreateWithoutEmpresaInput[] | Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput | Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.intento_fallidoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
};
export type intento_fallidoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput> | Prisma.intento_fallidoCreateWithoutEmpresaInput[] | Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput | Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.intento_fallidoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
};
export type intento_fallidoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput> | Prisma.intento_fallidoCreateWithoutEmpresaInput[] | Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput | Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.intento_fallidoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.intento_fallidoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.intento_fallidoCreateManyEmpresaInputEnvelope;
    set?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    disconnect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    delete?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    connect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    update?: Prisma.intento_fallidoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.intento_fallidoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.intento_fallidoUpdateManyWithWhereWithoutEmpresaInput | Prisma.intento_fallidoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.intento_fallidoScalarWhereInput | Prisma.intento_fallidoScalarWhereInput[];
};
export type intento_fallidoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput> | Prisma.intento_fallidoCreateWithoutEmpresaInput[] | Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput | Prisma.intento_fallidoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.intento_fallidoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.intento_fallidoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.intento_fallidoCreateManyEmpresaInputEnvelope;
    set?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    disconnect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    delete?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    connect?: Prisma.intento_fallidoWhereUniqueInput | Prisma.intento_fallidoWhereUniqueInput[];
    update?: Prisma.intento_fallidoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.intento_fallidoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.intento_fallidoUpdateManyWithWhereWithoutEmpresaInput | Prisma.intento_fallidoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.intento_fallidoScalarWhereInput | Prisma.intento_fallidoScalarWhereInput[];
};
export type intento_fallidoCreateWithoutEmpresaInput = {
    id_intento?: bigint | number;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
};
export type intento_fallidoUncheckedCreateWithoutEmpresaInput = {
    id_intento?: bigint | number;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
};
export type intento_fallidoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.intento_fallidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput>;
};
export type intento_fallidoCreateManyEmpresaInputEnvelope = {
    data: Prisma.intento_fallidoCreateManyEmpresaInput | Prisma.intento_fallidoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type intento_fallidoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.intento_fallidoWhereUniqueInput;
    update: Prisma.XOR<Prisma.intento_fallidoUpdateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.intento_fallidoCreateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedCreateWithoutEmpresaInput>;
};
export type intento_fallidoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.intento_fallidoWhereUniqueInput;
    data: Prisma.XOR<Prisma.intento_fallidoUpdateWithoutEmpresaInput, Prisma.intento_fallidoUncheckedUpdateWithoutEmpresaInput>;
};
export type intento_fallidoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.intento_fallidoScalarWhereInput;
    data: Prisma.XOR<Prisma.intento_fallidoUpdateManyMutationInput, Prisma.intento_fallidoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type intento_fallidoScalarWhereInput = {
    AND?: Prisma.intento_fallidoScalarWhereInput | Prisma.intento_fallidoScalarWhereInput[];
    OR?: Prisma.intento_fallidoScalarWhereInput[];
    NOT?: Prisma.intento_fallidoScalarWhereInput | Prisma.intento_fallidoScalarWhereInput[];
    id_intento?: Prisma.BigIntFilter<"intento_fallido"> | bigint | number;
    id_empresa?: Prisma.IntNullableFilter<"intento_fallido"> | number | null;
    ip_address?: Prisma.StringFilter<"intento_fallido"> | string;
    rut_intentado?: Prisma.StringNullableFilter<"intento_fallido"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"intento_fallido"> | Date | string;
    bloqueado_hasta?: Prisma.DateTimeNullableFilter<"intento_fallido"> | Date | string | null;
};
export type intento_fallidoCreateManyEmpresaInput = {
    id_intento?: bigint | number;
    ip_address: string;
    rut_intentado?: string | null;
    timestamp?: Date | string;
    bloqueado_hasta?: Date | string | null;
};
export type intento_fallidoUpdateWithoutEmpresaInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type intento_fallidoUncheckedUpdateWithoutEmpresaInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type intento_fallidoUncheckedUpdateManyWithoutEmpresaInput = {
    id_intento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    ip_address?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_intentado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloqueado_hasta?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type intento_fallidoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_intento?: boolean;
    id_empresa?: boolean;
    ip_address?: boolean;
    rut_intentado?: boolean;
    timestamp?: boolean;
    bloqueado_hasta?: boolean;
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["intento_fallido"]>;
export type intento_fallidoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_intento?: boolean;
    id_empresa?: boolean;
    ip_address?: boolean;
    rut_intentado?: boolean;
    timestamp?: boolean;
    bloqueado_hasta?: boolean;
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["intento_fallido"]>;
export type intento_fallidoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_intento?: boolean;
    id_empresa?: boolean;
    ip_address?: boolean;
    rut_intentado?: boolean;
    timestamp?: boolean;
    bloqueado_hasta?: boolean;
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["intento_fallido"]>;
export type intento_fallidoSelectScalar = {
    id_intento?: boolean;
    id_empresa?: boolean;
    ip_address?: boolean;
    rut_intentado?: boolean;
    timestamp?: boolean;
    bloqueado_hasta?: boolean;
};
export type intento_fallidoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_intento" | "id_empresa" | "ip_address" | "rut_intentado" | "timestamp" | "bloqueado_hasta", ExtArgs["result"]["intento_fallido"]>;
export type intento_fallidoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
};
export type intento_fallidoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
};
export type intento_fallidoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.intento_fallido$empresaArgs<ExtArgs>;
};
export type $intento_fallidoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "intento_fallido";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_intento: bigint;
        id_empresa: number | null;
        ip_address: string;
        rut_intentado: string | null;
        timestamp: Date;
        bloqueado_hasta: Date | null;
    }, ExtArgs["result"]["intento_fallido"]>;
    composites: {};
};
export type intento_fallidoGetPayload<S extends boolean | null | undefined | intento_fallidoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload, S>;
export type intento_fallidoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<intento_fallidoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Intento_fallidoCountAggregateInputType | true;
};
export interface intento_fallidoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['intento_fallido'];
        meta: {
            name: 'intento_fallido';
        };
    };
    findUnique<T extends intento_fallidoFindUniqueArgs>(args: Prisma.SelectSubset<T, intento_fallidoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends intento_fallidoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, intento_fallidoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends intento_fallidoFindFirstArgs>(args?: Prisma.SelectSubset<T, intento_fallidoFindFirstArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends intento_fallidoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, intento_fallidoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends intento_fallidoFindManyArgs>(args?: Prisma.SelectSubset<T, intento_fallidoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends intento_fallidoCreateArgs>(args: Prisma.SelectSubset<T, intento_fallidoCreateArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends intento_fallidoCreateManyArgs>(args?: Prisma.SelectSubset<T, intento_fallidoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends intento_fallidoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, intento_fallidoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends intento_fallidoDeleteArgs>(args: Prisma.SelectSubset<T, intento_fallidoDeleteArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends intento_fallidoUpdateArgs>(args: Prisma.SelectSubset<T, intento_fallidoUpdateArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends intento_fallidoDeleteManyArgs>(args?: Prisma.SelectSubset<T, intento_fallidoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends intento_fallidoUpdateManyArgs>(args: Prisma.SelectSubset<T, intento_fallidoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends intento_fallidoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, intento_fallidoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends intento_fallidoUpsertArgs>(args: Prisma.SelectSubset<T, intento_fallidoUpsertArgs<ExtArgs>>): Prisma.Prisma__intento_fallidoClient<runtime.Types.Result.GetResult<Prisma.$intento_fallidoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends intento_fallidoCountArgs>(args?: Prisma.Subset<T, intento_fallidoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Intento_fallidoCountAggregateOutputType> : number>;
    aggregate<T extends Intento_fallidoAggregateArgs>(args: Prisma.Subset<T, Intento_fallidoAggregateArgs>): Prisma.PrismaPromise<GetIntento_fallidoAggregateType<T>>;
    groupBy<T extends intento_fallidoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: intento_fallidoGroupByArgs['orderBy'];
    } : {
        orderBy?: intento_fallidoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, intento_fallidoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntento_fallidoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: intento_fallidoFieldRefs;
}
export interface Prisma__intento_fallidoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.intento_fallido$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.intento_fallido$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface intento_fallidoFieldRefs {
    readonly id_intento: Prisma.FieldRef<"intento_fallido", 'BigInt'>;
    readonly id_empresa: Prisma.FieldRef<"intento_fallido", 'Int'>;
    readonly ip_address: Prisma.FieldRef<"intento_fallido", 'String'>;
    readonly rut_intentado: Prisma.FieldRef<"intento_fallido", 'String'>;
    readonly timestamp: Prisma.FieldRef<"intento_fallido", 'DateTime'>;
    readonly bloqueado_hasta: Prisma.FieldRef<"intento_fallido", 'DateTime'>;
}
export type intento_fallidoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where: Prisma.intento_fallidoWhereUniqueInput;
};
export type intento_fallidoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where: Prisma.intento_fallidoWhereUniqueInput;
};
export type intento_fallidoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where?: Prisma.intento_fallidoWhereInput;
    orderBy?: Prisma.intento_fallidoOrderByWithRelationInput | Prisma.intento_fallidoOrderByWithRelationInput[];
    cursor?: Prisma.intento_fallidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Intento_fallidoScalarFieldEnum | Prisma.Intento_fallidoScalarFieldEnum[];
};
export type intento_fallidoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where?: Prisma.intento_fallidoWhereInput;
    orderBy?: Prisma.intento_fallidoOrderByWithRelationInput | Prisma.intento_fallidoOrderByWithRelationInput[];
    cursor?: Prisma.intento_fallidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Intento_fallidoScalarFieldEnum | Prisma.Intento_fallidoScalarFieldEnum[];
};
export type intento_fallidoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where?: Prisma.intento_fallidoWhereInput;
    orderBy?: Prisma.intento_fallidoOrderByWithRelationInput | Prisma.intento_fallidoOrderByWithRelationInput[];
    cursor?: Prisma.intento_fallidoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Intento_fallidoScalarFieldEnum | Prisma.Intento_fallidoScalarFieldEnum[];
};
export type intento_fallidoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.intento_fallidoCreateInput, Prisma.intento_fallidoUncheckedCreateInput>;
};
export type intento_fallidoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.intento_fallidoCreateManyInput | Prisma.intento_fallidoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type intento_fallidoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    data: Prisma.intento_fallidoCreateManyInput | Prisma.intento_fallidoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.intento_fallidoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type intento_fallidoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.intento_fallidoUpdateInput, Prisma.intento_fallidoUncheckedUpdateInput>;
    where: Prisma.intento_fallidoWhereUniqueInput;
};
export type intento_fallidoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.intento_fallidoUpdateManyMutationInput, Prisma.intento_fallidoUncheckedUpdateManyInput>;
    where?: Prisma.intento_fallidoWhereInput;
    limit?: number;
};
export type intento_fallidoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.intento_fallidoUpdateManyMutationInput, Prisma.intento_fallidoUncheckedUpdateManyInput>;
    where?: Prisma.intento_fallidoWhereInput;
    limit?: number;
    include?: Prisma.intento_fallidoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type intento_fallidoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where: Prisma.intento_fallidoWhereUniqueInput;
    create: Prisma.XOR<Prisma.intento_fallidoCreateInput, Prisma.intento_fallidoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.intento_fallidoUpdateInput, Prisma.intento_fallidoUncheckedUpdateInput>;
};
export type intento_fallidoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
    where: Prisma.intento_fallidoWhereUniqueInput;
};
export type intento_fallidoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.intento_fallidoWhereInput;
    limit?: number;
};
export type intento_fallido$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type intento_fallidoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.intento_fallidoSelect<ExtArgs> | null;
    omit?: Prisma.intento_fallidoOmit<ExtArgs> | null;
    include?: Prisma.intento_fallidoInclude<ExtArgs> | null;
};
