import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type oltModel = runtime.Types.Result.DefaultSelection<Prisma.$oltPayload>;
export type AggregateOlt = {
    _count: OltCountAggregateOutputType | null;
    _avg: OltAvgAggregateOutputType | null;
    _sum: OltSumAggregateOutputType | null;
    _min: OltMinAggregateOutputType | null;
    _max: OltMaxAggregateOutputType | null;
};
export type OltAvgAggregateOutputType = {
    id_olt: number | null;
    id_empresa: number | null;
};
export type OltSumAggregateOutputType = {
    id_olt: number | null;
    id_empresa: number | null;
};
export type OltMinAggregateOutputType = {
    id_olt: number | null;
    id_empresa: number | null;
    nombre: string | null;
    ubicacion: string | null;
    ip_gestion: string | null;
};
export type OltMaxAggregateOutputType = {
    id_olt: number | null;
    id_empresa: number | null;
    nombre: string | null;
    ubicacion: string | null;
    ip_gestion: string | null;
};
export type OltCountAggregateOutputType = {
    id_olt: number;
    id_empresa: number;
    nombre: number;
    ubicacion: number;
    ip_gestion: number;
    _all: number;
};
export type OltAvgAggregateInputType = {
    id_olt?: true;
    id_empresa?: true;
};
export type OltSumAggregateInputType = {
    id_olt?: true;
    id_empresa?: true;
};
export type OltMinAggregateInputType = {
    id_olt?: true;
    id_empresa?: true;
    nombre?: true;
    ubicacion?: true;
    ip_gestion?: true;
};
export type OltMaxAggregateInputType = {
    id_olt?: true;
    id_empresa?: true;
    nombre?: true;
    ubicacion?: true;
    ip_gestion?: true;
};
export type OltCountAggregateInputType = {
    id_olt?: true;
    id_empresa?: true;
    nombre?: true;
    ubicacion?: true;
    ip_gestion?: true;
    _all?: true;
};
export type OltAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oltWhereInput;
    orderBy?: Prisma.oltOrderByWithRelationInput | Prisma.oltOrderByWithRelationInput[];
    cursor?: Prisma.oltWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OltCountAggregateInputType;
    _avg?: OltAvgAggregateInputType;
    _sum?: OltSumAggregateInputType;
    _min?: OltMinAggregateInputType;
    _max?: OltMaxAggregateInputType;
};
export type GetOltAggregateType<T extends OltAggregateArgs> = {
    [P in keyof T & keyof AggregateOlt]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOlt[P]> : Prisma.GetScalarType<T[P], AggregateOlt[P]>;
};
export type oltGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oltWhereInput;
    orderBy?: Prisma.oltOrderByWithAggregationInput | Prisma.oltOrderByWithAggregationInput[];
    by: Prisma.OltScalarFieldEnum[] | Prisma.OltScalarFieldEnum;
    having?: Prisma.oltScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OltCountAggregateInputType | true;
    _avg?: OltAvgAggregateInputType;
    _sum?: OltSumAggregateInputType;
    _min?: OltMinAggregateInputType;
    _max?: OltMaxAggregateInputType;
};
export type OltGroupByOutputType = {
    id_olt: number;
    id_empresa: number | null;
    nombre: string | null;
    ubicacion: string | null;
    ip_gestion: string | null;
    _count: OltCountAggregateOutputType | null;
    _avg: OltAvgAggregateOutputType | null;
    _sum: OltSumAggregateOutputType | null;
    _min: OltMinAggregateOutputType | null;
    _max: OltMaxAggregateOutputType | null;
};
export type GetOltGroupByPayload<T extends oltGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OltGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OltGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OltGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OltGroupByOutputType[P]>;
}>>;
export type oltWhereInput = {
    AND?: Prisma.oltWhereInput | Prisma.oltWhereInput[];
    OR?: Prisma.oltWhereInput[];
    NOT?: Prisma.oltWhereInput | Prisma.oltWhereInput[];
    id_olt?: Prisma.IntFilter<"olt"> | number;
    id_empresa?: Prisma.IntNullableFilter<"olt"> | number | null;
    nombre?: Prisma.StringNullableFilter<"olt"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"olt"> | string | null;
    ip_gestion?: Prisma.StringNullableFilter<"olt"> | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    tarjetas?: Prisma.Tarjeta_ponListRelationFilter;
};
export type oltOrderByWithRelationInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_gestion?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    tarjetas?: Prisma.tarjeta_ponOrderByRelationAggregateInput;
};
export type oltWhereUniqueInput = Prisma.AtLeast<{
    id_olt?: number;
    AND?: Prisma.oltWhereInput | Prisma.oltWhereInput[];
    OR?: Prisma.oltWhereInput[];
    NOT?: Prisma.oltWhereInput | Prisma.oltWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"olt"> | number | null;
    nombre?: Prisma.StringNullableFilter<"olt"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"olt"> | string | null;
    ip_gestion?: Prisma.StringNullableFilter<"olt"> | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    tarjetas?: Prisma.Tarjeta_ponListRelationFilter;
}, "id_olt">;
export type oltOrderByWithAggregationInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre?: Prisma.SortOrderInput | Prisma.SortOrder;
    ubicacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    ip_gestion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.oltCountOrderByAggregateInput;
    _avg?: Prisma.oltAvgOrderByAggregateInput;
    _max?: Prisma.oltMaxOrderByAggregateInput;
    _min?: Prisma.oltMinOrderByAggregateInput;
    _sum?: Prisma.oltSumOrderByAggregateInput;
};
export type oltScalarWhereWithAggregatesInput = {
    AND?: Prisma.oltScalarWhereWithAggregatesInput | Prisma.oltScalarWhereWithAggregatesInput[];
    OR?: Prisma.oltScalarWhereWithAggregatesInput[];
    NOT?: Prisma.oltScalarWhereWithAggregatesInput | Prisma.oltScalarWhereWithAggregatesInput[];
    id_olt?: Prisma.IntWithAggregatesFilter<"olt"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"olt"> | number | null;
    nombre?: Prisma.StringNullableWithAggregatesFilter<"olt"> | string | null;
    ubicacion?: Prisma.StringNullableWithAggregatesFilter<"olt"> | string | null;
    ip_gestion?: Prisma.StringNullableWithAggregatesFilter<"olt"> | string | null;
};
export type oltCreateInput = {
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutOltsInput;
    tarjetas?: Prisma.tarjeta_ponCreateNestedManyWithoutOltInput;
};
export type oltUncheckedCreateInput = {
    id_olt?: number;
    id_empresa?: number | null;
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
    tarjetas?: Prisma.tarjeta_ponUncheckedCreateNestedManyWithoutOltInput;
};
export type oltUpdateInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutOltsNestedInput;
    tarjetas?: Prisma.tarjeta_ponUpdateManyWithoutOltNestedInput;
};
export type oltUncheckedUpdateInput = {
    id_olt?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tarjetas?: Prisma.tarjeta_ponUncheckedUpdateManyWithoutOltNestedInput;
};
export type oltCreateManyInput = {
    id_olt?: number;
    id_empresa?: number | null;
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
};
export type oltUpdateManyMutationInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type oltUncheckedUpdateManyInput = {
    id_olt?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OltListRelationFilter = {
    every?: Prisma.oltWhereInput;
    some?: Prisma.oltWhereInput;
    none?: Prisma.oltWhereInput;
};
export type oltOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type oltCountOrderByAggregateInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    ip_gestion?: Prisma.SortOrder;
};
export type oltAvgOrderByAggregateInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type oltMaxOrderByAggregateInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    ip_gestion?: Prisma.SortOrder;
};
export type oltMinOrderByAggregateInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    ubicacion?: Prisma.SortOrder;
    ip_gestion?: Prisma.SortOrder;
};
export type oltSumOrderByAggregateInput = {
    id_olt?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type OltNullableScalarRelationFilter = {
    is?: Prisma.oltWhereInput | null;
    isNot?: Prisma.oltWhereInput | null;
};
export type oltCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput> | Prisma.oltCreateWithoutEmpresaInput[] | Prisma.oltUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutEmpresaInput | Prisma.oltCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.oltCreateManyEmpresaInputEnvelope;
    connect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
};
export type oltUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput> | Prisma.oltCreateWithoutEmpresaInput[] | Prisma.oltUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutEmpresaInput | Prisma.oltCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.oltCreateManyEmpresaInputEnvelope;
    connect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
};
export type oltUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput> | Prisma.oltCreateWithoutEmpresaInput[] | Prisma.oltUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutEmpresaInput | Prisma.oltCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.oltUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.oltUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.oltCreateManyEmpresaInputEnvelope;
    set?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    disconnect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    delete?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    connect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    update?: Prisma.oltUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.oltUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.oltUpdateManyWithWhereWithoutEmpresaInput | Prisma.oltUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.oltScalarWhereInput | Prisma.oltScalarWhereInput[];
};
export type oltUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput> | Prisma.oltCreateWithoutEmpresaInput[] | Prisma.oltUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutEmpresaInput | Prisma.oltCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.oltUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.oltUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.oltCreateManyEmpresaInputEnvelope;
    set?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    disconnect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    delete?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    connect?: Prisma.oltWhereUniqueInput | Prisma.oltWhereUniqueInput[];
    update?: Prisma.oltUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.oltUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.oltUpdateManyWithWhereWithoutEmpresaInput | Prisma.oltUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.oltScalarWhereInput | Prisma.oltScalarWhereInput[];
};
export type oltCreateNestedOneWithoutTarjetasInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutTarjetasInput, Prisma.oltUncheckedCreateWithoutTarjetasInput>;
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutTarjetasInput;
    connect?: Prisma.oltWhereUniqueInput;
};
export type oltUpdateOneWithoutTarjetasNestedInput = {
    create?: Prisma.XOR<Prisma.oltCreateWithoutTarjetasInput, Prisma.oltUncheckedCreateWithoutTarjetasInput>;
    connectOrCreate?: Prisma.oltCreateOrConnectWithoutTarjetasInput;
    upsert?: Prisma.oltUpsertWithoutTarjetasInput;
    disconnect?: Prisma.oltWhereInput | boolean;
    delete?: Prisma.oltWhereInput | boolean;
    connect?: Prisma.oltWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.oltUpdateToOneWithWhereWithoutTarjetasInput, Prisma.oltUpdateWithoutTarjetasInput>, Prisma.oltUncheckedUpdateWithoutTarjetasInput>;
};
export type oltCreateWithoutEmpresaInput = {
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
    tarjetas?: Prisma.tarjeta_ponCreateNestedManyWithoutOltInput;
};
export type oltUncheckedCreateWithoutEmpresaInput = {
    id_olt?: number;
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
    tarjetas?: Prisma.tarjeta_ponUncheckedCreateNestedManyWithoutOltInput;
};
export type oltCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.oltWhereUniqueInput;
    create: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput>;
};
export type oltCreateManyEmpresaInputEnvelope = {
    data: Prisma.oltCreateManyEmpresaInput | Prisma.oltCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type oltUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.oltWhereUniqueInput;
    update: Prisma.XOR<Prisma.oltUpdateWithoutEmpresaInput, Prisma.oltUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.oltCreateWithoutEmpresaInput, Prisma.oltUncheckedCreateWithoutEmpresaInput>;
};
export type oltUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.oltWhereUniqueInput;
    data: Prisma.XOR<Prisma.oltUpdateWithoutEmpresaInput, Prisma.oltUncheckedUpdateWithoutEmpresaInput>;
};
export type oltUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.oltScalarWhereInput;
    data: Prisma.XOR<Prisma.oltUpdateManyMutationInput, Prisma.oltUncheckedUpdateManyWithoutEmpresaInput>;
};
export type oltScalarWhereInput = {
    AND?: Prisma.oltScalarWhereInput | Prisma.oltScalarWhereInput[];
    OR?: Prisma.oltScalarWhereInput[];
    NOT?: Prisma.oltScalarWhereInput | Prisma.oltScalarWhereInput[];
    id_olt?: Prisma.IntFilter<"olt"> | number;
    id_empresa?: Prisma.IntNullableFilter<"olt"> | number | null;
    nombre?: Prisma.StringNullableFilter<"olt"> | string | null;
    ubicacion?: Prisma.StringNullableFilter<"olt"> | string | null;
    ip_gestion?: Prisma.StringNullableFilter<"olt"> | string | null;
};
export type oltCreateWithoutTarjetasInput = {
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutOltsInput;
};
export type oltUncheckedCreateWithoutTarjetasInput = {
    id_olt?: number;
    id_empresa?: number | null;
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
};
export type oltCreateOrConnectWithoutTarjetasInput = {
    where: Prisma.oltWhereUniqueInput;
    create: Prisma.XOR<Prisma.oltCreateWithoutTarjetasInput, Prisma.oltUncheckedCreateWithoutTarjetasInput>;
};
export type oltUpsertWithoutTarjetasInput = {
    update: Prisma.XOR<Prisma.oltUpdateWithoutTarjetasInput, Prisma.oltUncheckedUpdateWithoutTarjetasInput>;
    create: Prisma.XOR<Prisma.oltCreateWithoutTarjetasInput, Prisma.oltUncheckedCreateWithoutTarjetasInput>;
    where?: Prisma.oltWhereInput;
};
export type oltUpdateToOneWithWhereWithoutTarjetasInput = {
    where?: Prisma.oltWhereInput;
    data: Prisma.XOR<Prisma.oltUpdateWithoutTarjetasInput, Prisma.oltUncheckedUpdateWithoutTarjetasInput>;
};
export type oltUpdateWithoutTarjetasInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutOltsNestedInput;
};
export type oltUncheckedUpdateWithoutTarjetasInput = {
    id_olt?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type oltCreateManyEmpresaInput = {
    id_olt?: number;
    nombre?: string | null;
    ubicacion?: string | null;
    ip_gestion?: string | null;
};
export type oltUpdateWithoutEmpresaInput = {
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tarjetas?: Prisma.tarjeta_ponUpdateManyWithoutOltNestedInput;
};
export type oltUncheckedUpdateWithoutEmpresaInput = {
    id_olt?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tarjetas?: Prisma.tarjeta_ponUncheckedUpdateManyWithoutOltNestedInput;
};
export type oltUncheckedUpdateManyWithoutEmpresaInput = {
    id_olt?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ubicacion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ip_gestion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OltCountOutputType = {
    tarjetas: number;
};
export type OltCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tarjetas?: boolean | OltCountOutputTypeCountTarjetasArgs;
};
export type OltCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OltCountOutputTypeSelect<ExtArgs> | null;
};
export type OltCountOutputTypeCountTarjetasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tarjeta_ponWhereInput;
};
export type oltSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_olt?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    ubicacion?: boolean;
    ip_gestion?: boolean;
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
    tarjetas?: boolean | Prisma.olt$tarjetasArgs<ExtArgs>;
    _count?: boolean | Prisma.OltCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["olt"]>;
export type oltSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_olt?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    ubicacion?: boolean;
    ip_gestion?: boolean;
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["olt"]>;
export type oltSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_olt?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    ubicacion?: boolean;
    ip_gestion?: boolean;
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["olt"]>;
export type oltSelectScalar = {
    id_olt?: boolean;
    id_empresa?: boolean;
    nombre?: boolean;
    ubicacion?: boolean;
    ip_gestion?: boolean;
};
export type oltOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_olt" | "id_empresa" | "nombre" | "ubicacion" | "ip_gestion", ExtArgs["result"]["olt"]>;
export type oltInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
    tarjetas?: boolean | Prisma.olt$tarjetasArgs<ExtArgs>;
    _count?: boolean | Prisma.OltCountOutputTypeDefaultArgs<ExtArgs>;
};
export type oltIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
};
export type oltIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.olt$empresaArgs<ExtArgs>;
};
export type $oltPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "olt";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        tarjetas: Prisma.$tarjeta_ponPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_olt: number;
        id_empresa: number | null;
        nombre: string | null;
        ubicacion: string | null;
        ip_gestion: string | null;
    }, ExtArgs["result"]["olt"]>;
    composites: {};
};
export type oltGetPayload<S extends boolean | null | undefined | oltDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$oltPayload, S>;
export type oltCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<oltFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OltCountAggregateInputType | true;
};
export interface oltDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['olt'];
        meta: {
            name: 'olt';
        };
    };
    findUnique<T extends oltFindUniqueArgs>(args: Prisma.SelectSubset<T, oltFindUniqueArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends oltFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, oltFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends oltFindFirstArgs>(args?: Prisma.SelectSubset<T, oltFindFirstArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends oltFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, oltFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends oltFindManyArgs>(args?: Prisma.SelectSubset<T, oltFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends oltCreateArgs>(args: Prisma.SelectSubset<T, oltCreateArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends oltCreateManyArgs>(args?: Prisma.SelectSubset<T, oltCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends oltCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, oltCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends oltDeleteArgs>(args: Prisma.SelectSubset<T, oltDeleteArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends oltUpdateArgs>(args: Prisma.SelectSubset<T, oltUpdateArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends oltDeleteManyArgs>(args?: Prisma.SelectSubset<T, oltDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends oltUpdateManyArgs>(args: Prisma.SelectSubset<T, oltUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends oltUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, oltUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends oltUpsertArgs>(args: Prisma.SelectSubset<T, oltUpsertArgs<ExtArgs>>): Prisma.Prisma__oltClient<runtime.Types.Result.GetResult<Prisma.$oltPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends oltCountArgs>(args?: Prisma.Subset<T, oltCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OltCountAggregateOutputType> : number>;
    aggregate<T extends OltAggregateArgs>(args: Prisma.Subset<T, OltAggregateArgs>): Prisma.PrismaPromise<GetOltAggregateType<T>>;
    groupBy<T extends oltGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: oltGroupByArgs['orderBy'];
    } : {
        orderBy?: oltGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, oltGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOltGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: oltFieldRefs;
}
export interface Prisma__oltClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.olt$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.olt$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    tarjetas<T extends Prisma.olt$tarjetasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.olt$tarjetasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tarjeta_ponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface oltFieldRefs {
    readonly id_olt: Prisma.FieldRef<"olt", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"olt", 'Int'>;
    readonly nombre: Prisma.FieldRef<"olt", 'String'>;
    readonly ubicacion: Prisma.FieldRef<"olt", 'String'>;
    readonly ip_gestion: Prisma.FieldRef<"olt", 'String'>;
}
export type oltFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where: Prisma.oltWhereUniqueInput;
};
export type oltFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where: Prisma.oltWhereUniqueInput;
};
export type oltFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where?: Prisma.oltWhereInput;
    orderBy?: Prisma.oltOrderByWithRelationInput | Prisma.oltOrderByWithRelationInput[];
    cursor?: Prisma.oltWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OltScalarFieldEnum | Prisma.OltScalarFieldEnum[];
};
export type oltFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where?: Prisma.oltWhereInput;
    orderBy?: Prisma.oltOrderByWithRelationInput | Prisma.oltOrderByWithRelationInput[];
    cursor?: Prisma.oltWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OltScalarFieldEnum | Prisma.OltScalarFieldEnum[];
};
export type oltFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where?: Prisma.oltWhereInput;
    orderBy?: Prisma.oltOrderByWithRelationInput | Prisma.oltOrderByWithRelationInput[];
    cursor?: Prisma.oltWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OltScalarFieldEnum | Prisma.OltScalarFieldEnum[];
};
export type oltCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.oltCreateInput, Prisma.oltUncheckedCreateInput>;
};
export type oltCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.oltCreateManyInput | Prisma.oltCreateManyInput[];
    skipDuplicates?: boolean;
};
export type oltCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    data: Prisma.oltCreateManyInput | Prisma.oltCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.oltIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type oltUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oltUpdateInput, Prisma.oltUncheckedUpdateInput>;
    where: Prisma.oltWhereUniqueInput;
};
export type oltUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.oltUpdateManyMutationInput, Prisma.oltUncheckedUpdateManyInput>;
    where?: Prisma.oltWhereInput;
    limit?: number;
};
export type oltUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.oltUpdateManyMutationInput, Prisma.oltUncheckedUpdateManyInput>;
    where?: Prisma.oltWhereInput;
    limit?: number;
    include?: Prisma.oltIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type oltUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where: Prisma.oltWhereUniqueInput;
    create: Prisma.XOR<Prisma.oltCreateInput, Prisma.oltUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.oltUpdateInput, Prisma.oltUncheckedUpdateInput>;
};
export type oltDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
    where: Prisma.oltWhereUniqueInput;
};
export type oltDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.oltWhereInput;
    limit?: number;
};
export type olt$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type olt$tarjetasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type oltDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.oltSelect<ExtArgs> | null;
    omit?: Prisma.oltOmit<ExtArgs> | null;
    include?: Prisma.oltInclude<ExtArgs> | null;
};
