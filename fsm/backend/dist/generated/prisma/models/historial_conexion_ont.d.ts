import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type historial_conexion_ontModel = runtime.Types.Result.DefaultSelection<Prisma.$historial_conexion_ontPayload>;
export type AggregateHistorial_conexion_ont = {
    _count: Historial_conexion_ontCountAggregateOutputType | null;
    _avg: Historial_conexion_ontAvgAggregateOutputType | null;
    _sum: Historial_conexion_ontSumAggregateOutputType | null;
    _min: Historial_conexion_ontMinAggregateOutputType | null;
    _max: Historial_conexion_ontMaxAggregateOutputType | null;
};
export type Historial_conexion_ontAvgAggregateOutputType = {
    id_historial_ont: number | null;
    id_unidad: number | null;
};
export type Historial_conexion_ontSumAggregateOutputType = {
    id_historial_ont: bigint | null;
    id_unidad: number | null;
};
export type Historial_conexion_ontMinAggregateOutputType = {
    id_historial_ont: bigint | null;
    id_unidad: number | null;
    evento: string | null;
    timestamp: Date | null;
};
export type Historial_conexion_ontMaxAggregateOutputType = {
    id_historial_ont: bigint | null;
    id_unidad: number | null;
    evento: string | null;
    timestamp: Date | null;
};
export type Historial_conexion_ontCountAggregateOutputType = {
    id_historial_ont: number;
    id_unidad: number;
    evento: number;
    timestamp: number;
    _all: number;
};
export type Historial_conexion_ontAvgAggregateInputType = {
    id_historial_ont?: true;
    id_unidad?: true;
};
export type Historial_conexion_ontSumAggregateInputType = {
    id_historial_ont?: true;
    id_unidad?: true;
};
export type Historial_conexion_ontMinAggregateInputType = {
    id_historial_ont?: true;
    id_unidad?: true;
    evento?: true;
    timestamp?: true;
};
export type Historial_conexion_ontMaxAggregateInputType = {
    id_historial_ont?: true;
    id_unidad?: true;
    evento?: true;
    timestamp?: true;
};
export type Historial_conexion_ontCountAggregateInputType = {
    id_historial_ont?: true;
    id_unidad?: true;
    evento?: true;
    timestamp?: true;
    _all?: true;
};
export type Historial_conexion_ontAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_conexion_ontWhereInput;
    orderBy?: Prisma.historial_conexion_ontOrderByWithRelationInput | Prisma.historial_conexion_ontOrderByWithRelationInput[];
    cursor?: Prisma.historial_conexion_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Historial_conexion_ontCountAggregateInputType;
    _avg?: Historial_conexion_ontAvgAggregateInputType;
    _sum?: Historial_conexion_ontSumAggregateInputType;
    _min?: Historial_conexion_ontMinAggregateInputType;
    _max?: Historial_conexion_ontMaxAggregateInputType;
};
export type GetHistorial_conexion_ontAggregateType<T extends Historial_conexion_ontAggregateArgs> = {
    [P in keyof T & keyof AggregateHistorial_conexion_ont]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHistorial_conexion_ont[P]> : Prisma.GetScalarType<T[P], AggregateHistorial_conexion_ont[P]>;
};
export type historial_conexion_ontGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_conexion_ontWhereInput;
    orderBy?: Prisma.historial_conexion_ontOrderByWithAggregationInput | Prisma.historial_conexion_ontOrderByWithAggregationInput[];
    by: Prisma.Historial_conexion_ontScalarFieldEnum[] | Prisma.Historial_conexion_ontScalarFieldEnum;
    having?: Prisma.historial_conexion_ontScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Historial_conexion_ontCountAggregateInputType | true;
    _avg?: Historial_conexion_ontAvgAggregateInputType;
    _sum?: Historial_conexion_ontSumAggregateInputType;
    _min?: Historial_conexion_ontMinAggregateInputType;
    _max?: Historial_conexion_ontMaxAggregateInputType;
};
export type Historial_conexion_ontGroupByOutputType = {
    id_historial_ont: bigint;
    id_unidad: number | null;
    evento: string | null;
    timestamp: Date;
    _count: Historial_conexion_ontCountAggregateOutputType | null;
    _avg: Historial_conexion_ontAvgAggregateOutputType | null;
    _sum: Historial_conexion_ontSumAggregateOutputType | null;
    _min: Historial_conexion_ontMinAggregateOutputType | null;
    _max: Historial_conexion_ontMaxAggregateOutputType | null;
};
export type GetHistorial_conexion_ontGroupByPayload<T extends historial_conexion_ontGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Historial_conexion_ontGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Historial_conexion_ontGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Historial_conexion_ontGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Historial_conexion_ontGroupByOutputType[P]>;
}>>;
export type historial_conexion_ontWhereInput = {
    AND?: Prisma.historial_conexion_ontWhereInput | Prisma.historial_conexion_ontWhereInput[];
    OR?: Prisma.historial_conexion_ontWhereInput[];
    NOT?: Prisma.historial_conexion_ontWhereInput | Prisma.historial_conexion_ontWhereInput[];
    id_historial_ont?: Prisma.BigIntFilter<"historial_conexion_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"historial_conexion_ont"> | number | null;
    evento?: Prisma.StringNullableFilter<"historial_conexion_ont"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"historial_conexion_ont"> | Date | string;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
};
export type historial_conexion_ontOrderByWithRelationInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    evento?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
};
export type historial_conexion_ontWhereUniqueInput = Prisma.AtLeast<{
    id_historial_ont?: bigint | number;
    AND?: Prisma.historial_conexion_ontWhereInput | Prisma.historial_conexion_ontWhereInput[];
    OR?: Prisma.historial_conexion_ontWhereInput[];
    NOT?: Prisma.historial_conexion_ontWhereInput | Prisma.historial_conexion_ontWhereInput[];
    id_unidad?: Prisma.IntNullableFilter<"historial_conexion_ont"> | number | null;
    evento?: Prisma.StringNullableFilter<"historial_conexion_ont"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"historial_conexion_ont"> | Date | string;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
}, "id_historial_ont">;
export type historial_conexion_ontOrderByWithAggregationInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    evento?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    _count?: Prisma.historial_conexion_ontCountOrderByAggregateInput;
    _avg?: Prisma.historial_conexion_ontAvgOrderByAggregateInput;
    _max?: Prisma.historial_conexion_ontMaxOrderByAggregateInput;
    _min?: Prisma.historial_conexion_ontMinOrderByAggregateInput;
    _sum?: Prisma.historial_conexion_ontSumOrderByAggregateInput;
};
export type historial_conexion_ontScalarWhereWithAggregatesInput = {
    AND?: Prisma.historial_conexion_ontScalarWhereWithAggregatesInput | Prisma.historial_conexion_ontScalarWhereWithAggregatesInput[];
    OR?: Prisma.historial_conexion_ontScalarWhereWithAggregatesInput[];
    NOT?: Prisma.historial_conexion_ontScalarWhereWithAggregatesInput | Prisma.historial_conexion_ontScalarWhereWithAggregatesInput[];
    id_historial_ont?: Prisma.BigIntWithAggregatesFilter<"historial_conexion_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"historial_conexion_ont"> | number | null;
    evento?: Prisma.StringNullableWithAggregatesFilter<"historial_conexion_ont"> | string | null;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"historial_conexion_ont"> | Date | string;
};
export type historial_conexion_ontCreateInput = {
    id_historial_ont?: bigint | number;
    evento?: string | null;
    timestamp?: Date | string;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutHistorial_conexionInput;
};
export type historial_conexion_ontUncheckedCreateInput = {
    id_historial_ont?: bigint | number;
    id_unidad?: number | null;
    evento?: string | null;
    timestamp?: Date | string;
};
export type historial_conexion_ontUpdateInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutHistorial_conexionNestedInput;
};
export type historial_conexion_ontUncheckedUpdateInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_conexion_ontCreateManyInput = {
    id_historial_ont?: bigint | number;
    id_unidad?: number | null;
    evento?: string | null;
    timestamp?: Date | string;
};
export type historial_conexion_ontUpdateManyMutationInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_conexion_ontUncheckedUpdateManyInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Historial_conexion_ontListRelationFilter = {
    every?: Prisma.historial_conexion_ontWhereInput;
    some?: Prisma.historial_conexion_ontWhereInput;
    none?: Prisma.historial_conexion_ontWhereInput;
};
export type historial_conexion_ontOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type historial_conexion_ontCountOrderByAggregateInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type historial_conexion_ontAvgOrderByAggregateInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
};
export type historial_conexion_ontMaxOrderByAggregateInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type historial_conexion_ontMinOrderByAggregateInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    evento?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
};
export type historial_conexion_ontSumOrderByAggregateInput = {
    id_historial_ont?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
};
export type historial_conexion_ontCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput> | Prisma.historial_conexion_ontCreateWithoutUnidadInput[] | Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput | Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.historial_conexion_ontCreateManyUnidadInputEnvelope;
    connect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
};
export type historial_conexion_ontUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput> | Prisma.historial_conexion_ontCreateWithoutUnidadInput[] | Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput | Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.historial_conexion_ontCreateManyUnidadInputEnvelope;
    connect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
};
export type historial_conexion_ontUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput> | Prisma.historial_conexion_ontCreateWithoutUnidadInput[] | Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput | Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.historial_conexion_ontUpsertWithWhereUniqueWithoutUnidadInput | Prisma.historial_conexion_ontUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.historial_conexion_ontCreateManyUnidadInputEnvelope;
    set?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    disconnect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    delete?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    connect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    update?: Prisma.historial_conexion_ontUpdateWithWhereUniqueWithoutUnidadInput | Prisma.historial_conexion_ontUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.historial_conexion_ontUpdateManyWithWhereWithoutUnidadInput | Prisma.historial_conexion_ontUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.historial_conexion_ontScalarWhereInput | Prisma.historial_conexion_ontScalarWhereInput[];
};
export type historial_conexion_ontUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput> | Prisma.historial_conexion_ontCreateWithoutUnidadInput[] | Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput | Prisma.historial_conexion_ontCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.historial_conexion_ontUpsertWithWhereUniqueWithoutUnidadInput | Prisma.historial_conexion_ontUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.historial_conexion_ontCreateManyUnidadInputEnvelope;
    set?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    disconnect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    delete?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    connect?: Prisma.historial_conexion_ontWhereUniqueInput | Prisma.historial_conexion_ontWhereUniqueInput[];
    update?: Prisma.historial_conexion_ontUpdateWithWhereUniqueWithoutUnidadInput | Prisma.historial_conexion_ontUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.historial_conexion_ontUpdateManyWithWhereWithoutUnidadInput | Prisma.historial_conexion_ontUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.historial_conexion_ontScalarWhereInput | Prisma.historial_conexion_ontScalarWhereInput[];
};
export type historial_conexion_ontCreateWithoutUnidadInput = {
    id_historial_ont?: bigint | number;
    evento?: string | null;
    timestamp?: Date | string;
};
export type historial_conexion_ontUncheckedCreateWithoutUnidadInput = {
    id_historial_ont?: bigint | number;
    evento?: string | null;
    timestamp?: Date | string;
};
export type historial_conexion_ontCreateOrConnectWithoutUnidadInput = {
    where: Prisma.historial_conexion_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput>;
};
export type historial_conexion_ontCreateManyUnidadInputEnvelope = {
    data: Prisma.historial_conexion_ontCreateManyUnidadInput | Prisma.historial_conexion_ontCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type historial_conexion_ontUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.historial_conexion_ontWhereUniqueInput;
    update: Prisma.XOR<Prisma.historial_conexion_ontUpdateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.historial_conexion_ontCreateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedCreateWithoutUnidadInput>;
};
export type historial_conexion_ontUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.historial_conexion_ontWhereUniqueInput;
    data: Prisma.XOR<Prisma.historial_conexion_ontUpdateWithoutUnidadInput, Prisma.historial_conexion_ontUncheckedUpdateWithoutUnidadInput>;
};
export type historial_conexion_ontUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.historial_conexion_ontScalarWhereInput;
    data: Prisma.XOR<Prisma.historial_conexion_ontUpdateManyMutationInput, Prisma.historial_conexion_ontUncheckedUpdateManyWithoutUnidadInput>;
};
export type historial_conexion_ontScalarWhereInput = {
    AND?: Prisma.historial_conexion_ontScalarWhereInput | Prisma.historial_conexion_ontScalarWhereInput[];
    OR?: Prisma.historial_conexion_ontScalarWhereInput[];
    NOT?: Prisma.historial_conexion_ontScalarWhereInput | Prisma.historial_conexion_ontScalarWhereInput[];
    id_historial_ont?: Prisma.BigIntFilter<"historial_conexion_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"historial_conexion_ont"> | number | null;
    evento?: Prisma.StringNullableFilter<"historial_conexion_ont"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"historial_conexion_ont"> | Date | string;
};
export type historial_conexion_ontCreateManyUnidadInput = {
    id_historial_ont?: bigint | number;
    evento?: string | null;
    timestamp?: Date | string;
};
export type historial_conexion_ontUpdateWithoutUnidadInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_conexion_ontUncheckedUpdateWithoutUnidadInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_conexion_ontUncheckedUpdateManyWithoutUnidadInput = {
    id_historial_ont?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type historial_conexion_ontSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ont?: boolean;
    id_unidad?: boolean;
    evento?: boolean;
    timestamp?: boolean;
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["historial_conexion_ont"]>;
export type historial_conexion_ontSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ont?: boolean;
    id_unidad?: boolean;
    evento?: boolean;
    timestamp?: boolean;
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["historial_conexion_ont"]>;
export type historial_conexion_ontSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_historial_ont?: boolean;
    id_unidad?: boolean;
    evento?: boolean;
    timestamp?: boolean;
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
}, ExtArgs["result"]["historial_conexion_ont"]>;
export type historial_conexion_ontSelectScalar = {
    id_historial_ont?: boolean;
    id_unidad?: boolean;
    evento?: boolean;
    timestamp?: boolean;
};
export type historial_conexion_ontOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_historial_ont" | "id_unidad" | "evento" | "timestamp", ExtArgs["result"]["historial_conexion_ont"]>;
export type historial_conexion_ontInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
};
export type historial_conexion_ontIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
};
export type historial_conexion_ontIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.historial_conexion_ont$unidadArgs<ExtArgs>;
};
export type $historial_conexion_ontPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "historial_conexion_ont";
    objects: {
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_historial_ont: bigint;
        id_unidad: number | null;
        evento: string | null;
        timestamp: Date;
    }, ExtArgs["result"]["historial_conexion_ont"]>;
    composites: {};
};
export type historial_conexion_ontGetPayload<S extends boolean | null | undefined | historial_conexion_ontDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload, S>;
export type historial_conexion_ontCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<historial_conexion_ontFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Historial_conexion_ontCountAggregateInputType | true;
};
export interface historial_conexion_ontDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['historial_conexion_ont'];
        meta: {
            name: 'historial_conexion_ont';
        };
    };
    findUnique<T extends historial_conexion_ontFindUniqueArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontFindUniqueArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends historial_conexion_ontFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends historial_conexion_ontFindFirstArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontFindFirstArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends historial_conexion_ontFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends historial_conexion_ontFindManyArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends historial_conexion_ontCreateArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontCreateArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends historial_conexion_ontCreateManyArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends historial_conexion_ontCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends historial_conexion_ontDeleteArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontDeleteArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends historial_conexion_ontUpdateArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontUpdateArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends historial_conexion_ontDeleteManyArgs>(args?: Prisma.SelectSubset<T, historial_conexion_ontDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends historial_conexion_ontUpdateManyArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends historial_conexion_ontUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends historial_conexion_ontUpsertArgs>(args: Prisma.SelectSubset<T, historial_conexion_ontUpsertArgs<ExtArgs>>): Prisma.Prisma__historial_conexion_ontClient<runtime.Types.Result.GetResult<Prisma.$historial_conexion_ontPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends historial_conexion_ontCountArgs>(args?: Prisma.Subset<T, historial_conexion_ontCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Historial_conexion_ontCountAggregateOutputType> : number>;
    aggregate<T extends Historial_conexion_ontAggregateArgs>(args: Prisma.Subset<T, Historial_conexion_ontAggregateArgs>): Prisma.PrismaPromise<GetHistorial_conexion_ontAggregateType<T>>;
    groupBy<T extends historial_conexion_ontGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: historial_conexion_ontGroupByArgs['orderBy'];
    } : {
        orderBy?: historial_conexion_ontGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, historial_conexion_ontGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorial_conexion_ontGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: historial_conexion_ontFieldRefs;
}
export interface Prisma__historial_conexion_ontClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unidad<T extends Prisma.historial_conexion_ont$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.historial_conexion_ont$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface historial_conexion_ontFieldRefs {
    readonly id_historial_ont: Prisma.FieldRef<"historial_conexion_ont", 'BigInt'>;
    readonly id_unidad: Prisma.FieldRef<"historial_conexion_ont", 'Int'>;
    readonly evento: Prisma.FieldRef<"historial_conexion_ont", 'String'>;
    readonly timestamp: Prisma.FieldRef<"historial_conexion_ont", 'DateTime'>;
}
export type historial_conexion_ontFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where: Prisma.historial_conexion_ontWhereUniqueInput;
};
export type historial_conexion_ontFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where: Prisma.historial_conexion_ontWhereUniqueInput;
};
export type historial_conexion_ontFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where?: Prisma.historial_conexion_ontWhereInput;
    orderBy?: Prisma.historial_conexion_ontOrderByWithRelationInput | Prisma.historial_conexion_ontOrderByWithRelationInput[];
    cursor?: Prisma.historial_conexion_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_conexion_ontScalarFieldEnum | Prisma.Historial_conexion_ontScalarFieldEnum[];
};
export type historial_conexion_ontFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where?: Prisma.historial_conexion_ontWhereInput;
    orderBy?: Prisma.historial_conexion_ontOrderByWithRelationInput | Prisma.historial_conexion_ontOrderByWithRelationInput[];
    cursor?: Prisma.historial_conexion_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_conexion_ontScalarFieldEnum | Prisma.Historial_conexion_ontScalarFieldEnum[];
};
export type historial_conexion_ontFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where?: Prisma.historial_conexion_ontWhereInput;
    orderBy?: Prisma.historial_conexion_ontOrderByWithRelationInput | Prisma.historial_conexion_ontOrderByWithRelationInput[];
    cursor?: Prisma.historial_conexion_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Historial_conexion_ontScalarFieldEnum | Prisma.Historial_conexion_ontScalarFieldEnum[];
};
export type historial_conexion_ontCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.historial_conexion_ontCreateInput, Prisma.historial_conexion_ontUncheckedCreateInput>;
};
export type historial_conexion_ontCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.historial_conexion_ontCreateManyInput | Prisma.historial_conexion_ontCreateManyInput[];
    skipDuplicates?: boolean;
};
export type historial_conexion_ontCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    data: Prisma.historial_conexion_ontCreateManyInput | Prisma.historial_conexion_ontCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.historial_conexion_ontIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type historial_conexion_ontUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_conexion_ontUpdateInput, Prisma.historial_conexion_ontUncheckedUpdateInput>;
    where: Prisma.historial_conexion_ontWhereUniqueInput;
};
export type historial_conexion_ontUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.historial_conexion_ontUpdateManyMutationInput, Prisma.historial_conexion_ontUncheckedUpdateManyInput>;
    where?: Prisma.historial_conexion_ontWhereInput;
    limit?: number;
};
export type historial_conexion_ontUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.historial_conexion_ontUpdateManyMutationInput, Prisma.historial_conexion_ontUncheckedUpdateManyInput>;
    where?: Prisma.historial_conexion_ontWhereInput;
    limit?: number;
    include?: Prisma.historial_conexion_ontIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type historial_conexion_ontUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where: Prisma.historial_conexion_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.historial_conexion_ontCreateInput, Prisma.historial_conexion_ontUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.historial_conexion_ontUpdateInput, Prisma.historial_conexion_ontUncheckedUpdateInput>;
};
export type historial_conexion_ontDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
    where: Prisma.historial_conexion_ontWhereUniqueInput;
};
export type historial_conexion_ontDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.historial_conexion_ontWhereInput;
    limit?: number;
};
export type historial_conexion_ont$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type historial_conexion_ontDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.historial_conexion_ontSelect<ExtArgs> | null;
    omit?: Prisma.historial_conexion_ontOmit<ExtArgs> | null;
    include?: Prisma.historial_conexion_ontInclude<ExtArgs> | null;
};
