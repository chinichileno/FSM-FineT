import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type llamada_cortesModel = runtime.Types.Result.DefaultSelection<Prisma.$llamada_cortesPayload>;
export type AggregateLlamada_cortes = {
    _count: Llamada_cortesCountAggregateOutputType | null;
    _avg: Llamada_cortesAvgAggregateOutputType | null;
    _sum: Llamada_cortesSumAggregateOutputType | null;
    _min: Llamada_cortesMinAggregateOutputType | null;
    _max: Llamada_cortesMaxAggregateOutputType | null;
};
export type Llamada_cortesAvgAggregateOutputType = {
    id_llamada: number | null;
    id_ot: number | null;
};
export type Llamada_cortesSumAggregateOutputType = {
    id_llamada: number | null;
    id_ot: number | null;
};
export type Llamada_cortesMinAggregateOutputType = {
    id_llamada: number | null;
    id_ot: number | null;
    resultado: string | null;
    observaciones: string | null;
    fecha_llamada: Date | null;
};
export type Llamada_cortesMaxAggregateOutputType = {
    id_llamada: number | null;
    id_ot: number | null;
    resultado: string | null;
    observaciones: string | null;
    fecha_llamada: Date | null;
};
export type Llamada_cortesCountAggregateOutputType = {
    id_llamada: number;
    id_ot: number;
    resultado: number;
    observaciones: number;
    fecha_llamada: number;
    _all: number;
};
export type Llamada_cortesAvgAggregateInputType = {
    id_llamada?: true;
    id_ot?: true;
};
export type Llamada_cortesSumAggregateInputType = {
    id_llamada?: true;
    id_ot?: true;
};
export type Llamada_cortesMinAggregateInputType = {
    id_llamada?: true;
    id_ot?: true;
    resultado?: true;
    observaciones?: true;
    fecha_llamada?: true;
};
export type Llamada_cortesMaxAggregateInputType = {
    id_llamada?: true;
    id_ot?: true;
    resultado?: true;
    observaciones?: true;
    fecha_llamada?: true;
};
export type Llamada_cortesCountAggregateInputType = {
    id_llamada?: true;
    id_ot?: true;
    resultado?: true;
    observaciones?: true;
    fecha_llamada?: true;
    _all?: true;
};
export type Llamada_cortesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.llamada_cortesWhereInput;
    orderBy?: Prisma.llamada_cortesOrderByWithRelationInput | Prisma.llamada_cortesOrderByWithRelationInput[];
    cursor?: Prisma.llamada_cortesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Llamada_cortesCountAggregateInputType;
    _avg?: Llamada_cortesAvgAggregateInputType;
    _sum?: Llamada_cortesSumAggregateInputType;
    _min?: Llamada_cortesMinAggregateInputType;
    _max?: Llamada_cortesMaxAggregateInputType;
};
export type GetLlamada_cortesAggregateType<T extends Llamada_cortesAggregateArgs> = {
    [P in keyof T & keyof AggregateLlamada_cortes]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLlamada_cortes[P]> : Prisma.GetScalarType<T[P], AggregateLlamada_cortes[P]>;
};
export type llamada_cortesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.llamada_cortesWhereInput;
    orderBy?: Prisma.llamada_cortesOrderByWithAggregationInput | Prisma.llamada_cortesOrderByWithAggregationInput[];
    by: Prisma.Llamada_cortesScalarFieldEnum[] | Prisma.Llamada_cortesScalarFieldEnum;
    having?: Prisma.llamada_cortesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Llamada_cortesCountAggregateInputType | true;
    _avg?: Llamada_cortesAvgAggregateInputType;
    _sum?: Llamada_cortesSumAggregateInputType;
    _min?: Llamada_cortesMinAggregateInputType;
    _max?: Llamada_cortesMaxAggregateInputType;
};
export type Llamada_cortesGroupByOutputType = {
    id_llamada: number;
    id_ot: number | null;
    resultado: string;
    observaciones: string | null;
    fecha_llamada: Date;
    _count: Llamada_cortesCountAggregateOutputType | null;
    _avg: Llamada_cortesAvgAggregateOutputType | null;
    _sum: Llamada_cortesSumAggregateOutputType | null;
    _min: Llamada_cortesMinAggregateOutputType | null;
    _max: Llamada_cortesMaxAggregateOutputType | null;
};
export type GetLlamada_cortesGroupByPayload<T extends llamada_cortesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Llamada_cortesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Llamada_cortesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Llamada_cortesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Llamada_cortesGroupByOutputType[P]>;
}>>;
export type llamada_cortesWhereInput = {
    AND?: Prisma.llamada_cortesWhereInput | Prisma.llamada_cortesWhereInput[];
    OR?: Prisma.llamada_cortesWhereInput[];
    NOT?: Prisma.llamada_cortesWhereInput | Prisma.llamada_cortesWhereInput[];
    id_llamada?: Prisma.IntFilter<"llamada_cortes"> | number;
    id_ot?: Prisma.IntNullableFilter<"llamada_cortes"> | number | null;
    resultado?: Prisma.StringFilter<"llamada_cortes"> | string;
    observaciones?: Prisma.StringNullableFilter<"llamada_cortes"> | string | null;
    fecha_llamada?: Prisma.DateTimeFilter<"llamada_cortes"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
};
export type llamada_cortesOrderByWithRelationInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_llamada?: Prisma.SortOrder;
    orden_trabajo?: Prisma.orden_trabajoOrderByWithRelationInput;
};
export type llamada_cortesWhereUniqueInput = Prisma.AtLeast<{
    id_llamada?: number;
    id_ot?: number;
    AND?: Prisma.llamada_cortesWhereInput | Prisma.llamada_cortesWhereInput[];
    OR?: Prisma.llamada_cortesWhereInput[];
    NOT?: Prisma.llamada_cortesWhereInput | Prisma.llamada_cortesWhereInput[];
    resultado?: Prisma.StringFilter<"llamada_cortes"> | string;
    observaciones?: Prisma.StringNullableFilter<"llamada_cortes"> | string | null;
    fecha_llamada?: Prisma.DateTimeFilter<"llamada_cortes"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
}, "id_llamada" | "id_ot">;
export type llamada_cortesOrderByWithAggregationInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    resultado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_llamada?: Prisma.SortOrder;
    _count?: Prisma.llamada_cortesCountOrderByAggregateInput;
    _avg?: Prisma.llamada_cortesAvgOrderByAggregateInput;
    _max?: Prisma.llamada_cortesMaxOrderByAggregateInput;
    _min?: Prisma.llamada_cortesMinOrderByAggregateInput;
    _sum?: Prisma.llamada_cortesSumOrderByAggregateInput;
};
export type llamada_cortesScalarWhereWithAggregatesInput = {
    AND?: Prisma.llamada_cortesScalarWhereWithAggregatesInput | Prisma.llamada_cortesScalarWhereWithAggregatesInput[];
    OR?: Prisma.llamada_cortesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.llamada_cortesScalarWhereWithAggregatesInput | Prisma.llamada_cortesScalarWhereWithAggregatesInput[];
    id_llamada?: Prisma.IntWithAggregatesFilter<"llamada_cortes"> | number;
    id_ot?: Prisma.IntNullableWithAggregatesFilter<"llamada_cortes"> | number | null;
    resultado?: Prisma.StringWithAggregatesFilter<"llamada_cortes"> | string;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"llamada_cortes"> | string | null;
    fecha_llamada?: Prisma.DateTimeWithAggregatesFilter<"llamada_cortes"> | Date | string;
};
export type llamada_cortesCreateInput = {
    resultado: string;
    observaciones?: string | null;
    fecha_llamada?: Date | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutLlamadaInput;
};
export type llamada_cortesUncheckedCreateInput = {
    id_llamada?: number;
    id_ot?: number | null;
    resultado: string;
    observaciones?: string | null;
    fecha_llamada?: Date | string;
};
export type llamada_cortesUpdateInput = {
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutLlamadaNestedInput;
};
export type llamada_cortesUncheckedUpdateInput = {
    id_llamada?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type llamada_cortesCreateManyInput = {
    id_llamada?: number;
    id_ot?: number | null;
    resultado: string;
    observaciones?: string | null;
    fecha_llamada?: Date | string;
};
export type llamada_cortesUpdateManyMutationInput = {
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type llamada_cortesUncheckedUpdateManyInput = {
    id_llamada?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Llamada_cortesNullableScalarRelationFilter = {
    is?: Prisma.llamada_cortesWhereInput | null;
    isNot?: Prisma.llamada_cortesWhereInput | null;
};
export type llamada_cortesCountOrderByAggregateInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    resultado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_llamada?: Prisma.SortOrder;
};
export type llamada_cortesAvgOrderByAggregateInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
};
export type llamada_cortesMaxOrderByAggregateInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    resultado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_llamada?: Prisma.SortOrder;
};
export type llamada_cortesMinOrderByAggregateInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    resultado?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
    fecha_llamada?: Prisma.SortOrder;
};
export type llamada_cortesSumOrderByAggregateInput = {
    id_llamada?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
};
export type llamada_cortesCreateNestedOneWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.llamada_cortesCreateOrConnectWithoutOrden_trabajoInput;
    connect?: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesUncheckedCreateNestedOneWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.llamada_cortesCreateOrConnectWithoutOrden_trabajoInput;
    connect?: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesUpdateOneWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.llamada_cortesCreateOrConnectWithoutOrden_trabajoInput;
    upsert?: Prisma.llamada_cortesUpsertWithoutOrden_trabajoInput;
    disconnect?: Prisma.llamada_cortesWhereInput | boolean;
    delete?: Prisma.llamada_cortesWhereInput | boolean;
    connect?: Prisma.llamada_cortesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.llamada_cortesUpdateToOneWithWhereWithoutOrden_trabajoInput, Prisma.llamada_cortesUpdateWithoutOrden_trabajoInput>, Prisma.llamada_cortesUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type llamada_cortesUncheckedUpdateOneWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.llamada_cortesCreateOrConnectWithoutOrden_trabajoInput;
    upsert?: Prisma.llamada_cortesUpsertWithoutOrden_trabajoInput;
    disconnect?: Prisma.llamada_cortesWhereInput | boolean;
    delete?: Prisma.llamada_cortesWhereInput | boolean;
    connect?: Prisma.llamada_cortesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.llamada_cortesUpdateToOneWithWhereWithoutOrden_trabajoInput, Prisma.llamada_cortesUpdateWithoutOrden_trabajoInput>, Prisma.llamada_cortesUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type llamada_cortesCreateWithoutOrden_trabajoInput = {
    resultado: string;
    observaciones?: string | null;
    fecha_llamada?: Date | string;
};
export type llamada_cortesUncheckedCreateWithoutOrden_trabajoInput = {
    id_llamada?: number;
    resultado: string;
    observaciones?: string | null;
    fecha_llamada?: Date | string;
};
export type llamada_cortesCreateOrConnectWithoutOrden_trabajoInput = {
    where: Prisma.llamada_cortesWhereUniqueInput;
    create: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
};
export type llamada_cortesUpsertWithoutOrden_trabajoInput = {
    update: Prisma.XOR<Prisma.llamada_cortesUpdateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedUpdateWithoutOrden_trabajoInput>;
    create: Prisma.XOR<Prisma.llamada_cortesCreateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedCreateWithoutOrden_trabajoInput>;
    where?: Prisma.llamada_cortesWhereInput;
};
export type llamada_cortesUpdateToOneWithWhereWithoutOrden_trabajoInput = {
    where?: Prisma.llamada_cortesWhereInput;
    data: Prisma.XOR<Prisma.llamada_cortesUpdateWithoutOrden_trabajoInput, Prisma.llamada_cortesUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type llamada_cortesUpdateWithoutOrden_trabajoInput = {
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type llamada_cortesUncheckedUpdateWithoutOrden_trabajoInput = {
    id_llamada?: Prisma.IntFieldUpdateOperationsInput | number;
    resultado?: Prisma.StringFieldUpdateOperationsInput | string;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_llamada?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type llamada_cortesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_llamada?: boolean;
    id_ot?: boolean;
    resultado?: boolean;
    observaciones?: boolean;
    fecha_llamada?: boolean;
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["llamada_cortes"]>;
export type llamada_cortesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_llamada?: boolean;
    id_ot?: boolean;
    resultado?: boolean;
    observaciones?: boolean;
    fecha_llamada?: boolean;
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["llamada_cortes"]>;
export type llamada_cortesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_llamada?: boolean;
    id_ot?: boolean;
    resultado?: boolean;
    observaciones?: boolean;
    fecha_llamada?: boolean;
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["llamada_cortes"]>;
export type llamada_cortesSelectScalar = {
    id_llamada?: boolean;
    id_ot?: boolean;
    resultado?: boolean;
    observaciones?: boolean;
    fecha_llamada?: boolean;
};
export type llamada_cortesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_llamada" | "id_ot" | "resultado" | "observaciones" | "fecha_llamada", ExtArgs["result"]["llamada_cortes"]>;
export type llamada_cortesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
};
export type llamada_cortesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
};
export type llamada_cortesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>;
};
export type $llamada_cortesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "llamada_cortes";
    objects: {
        orden_trabajo: Prisma.$orden_trabajoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_llamada: number;
        id_ot: number | null;
        resultado: string;
        observaciones: string | null;
        fecha_llamada: Date;
    }, ExtArgs["result"]["llamada_cortes"]>;
    composites: {};
};
export type llamada_cortesGetPayload<S extends boolean | null | undefined | llamada_cortesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload, S>;
export type llamada_cortesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<llamada_cortesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Llamada_cortesCountAggregateInputType | true;
};
export interface llamada_cortesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['llamada_cortes'];
        meta: {
            name: 'llamada_cortes';
        };
    };
    findUnique<T extends llamada_cortesFindUniqueArgs>(args: Prisma.SelectSubset<T, llamada_cortesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends llamada_cortesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, llamada_cortesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends llamada_cortesFindFirstArgs>(args?: Prisma.SelectSubset<T, llamada_cortesFindFirstArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends llamada_cortesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, llamada_cortesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends llamada_cortesFindManyArgs>(args?: Prisma.SelectSubset<T, llamada_cortesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends llamada_cortesCreateArgs>(args: Prisma.SelectSubset<T, llamada_cortesCreateArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends llamada_cortesCreateManyArgs>(args?: Prisma.SelectSubset<T, llamada_cortesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends llamada_cortesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, llamada_cortesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends llamada_cortesDeleteArgs>(args: Prisma.SelectSubset<T, llamada_cortesDeleteArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends llamada_cortesUpdateArgs>(args: Prisma.SelectSubset<T, llamada_cortesUpdateArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends llamada_cortesDeleteManyArgs>(args?: Prisma.SelectSubset<T, llamada_cortesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends llamada_cortesUpdateManyArgs>(args: Prisma.SelectSubset<T, llamada_cortesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends llamada_cortesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, llamada_cortesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends llamada_cortesUpsertArgs>(args: Prisma.SelectSubset<T, llamada_cortesUpsertArgs<ExtArgs>>): Prisma.Prisma__llamada_cortesClient<runtime.Types.Result.GetResult<Prisma.$llamada_cortesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends llamada_cortesCountArgs>(args?: Prisma.Subset<T, llamada_cortesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Llamada_cortesCountAggregateOutputType> : number>;
    aggregate<T extends Llamada_cortesAggregateArgs>(args: Prisma.Subset<T, Llamada_cortesAggregateArgs>): Prisma.PrismaPromise<GetLlamada_cortesAggregateType<T>>;
    groupBy<T extends llamada_cortesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: llamada_cortesGroupByArgs['orderBy'];
    } : {
        orderBy?: llamada_cortesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, llamada_cortesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLlamada_cortesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: llamada_cortesFieldRefs;
}
export interface Prisma__llamada_cortesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orden_trabajo<T extends Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.llamada_cortes$orden_trabajoArgs<ExtArgs>>): Prisma.Prisma__orden_trabajoClient<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface llamada_cortesFieldRefs {
    readonly id_llamada: Prisma.FieldRef<"llamada_cortes", 'Int'>;
    readonly id_ot: Prisma.FieldRef<"llamada_cortes", 'Int'>;
    readonly resultado: Prisma.FieldRef<"llamada_cortes", 'String'>;
    readonly observaciones: Prisma.FieldRef<"llamada_cortes", 'String'>;
    readonly fecha_llamada: Prisma.FieldRef<"llamada_cortes", 'DateTime'>;
}
export type llamada_cortesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where?: Prisma.llamada_cortesWhereInput;
    orderBy?: Prisma.llamada_cortesOrderByWithRelationInput | Prisma.llamada_cortesOrderByWithRelationInput[];
    cursor?: Prisma.llamada_cortesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Llamada_cortesScalarFieldEnum | Prisma.Llamada_cortesScalarFieldEnum[];
};
export type llamada_cortesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where?: Prisma.llamada_cortesWhereInput;
    orderBy?: Prisma.llamada_cortesOrderByWithRelationInput | Prisma.llamada_cortesOrderByWithRelationInput[];
    cursor?: Prisma.llamada_cortesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Llamada_cortesScalarFieldEnum | Prisma.Llamada_cortesScalarFieldEnum[];
};
export type llamada_cortesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where?: Prisma.llamada_cortesWhereInput;
    orderBy?: Prisma.llamada_cortesOrderByWithRelationInput | Prisma.llamada_cortesOrderByWithRelationInput[];
    cursor?: Prisma.llamada_cortesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Llamada_cortesScalarFieldEnum | Prisma.Llamada_cortesScalarFieldEnum[];
};
export type llamada_cortesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.llamada_cortesCreateInput, Prisma.llamada_cortesUncheckedCreateInput>;
};
export type llamada_cortesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.llamada_cortesCreateManyInput | Prisma.llamada_cortesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type llamada_cortesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    data: Prisma.llamada_cortesCreateManyInput | Prisma.llamada_cortesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.llamada_cortesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type llamada_cortesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.llamada_cortesUpdateInput, Prisma.llamada_cortesUncheckedUpdateInput>;
    where: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.llamada_cortesUpdateManyMutationInput, Prisma.llamada_cortesUncheckedUpdateManyInput>;
    where?: Prisma.llamada_cortesWhereInput;
    limit?: number;
};
export type llamada_cortesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.llamada_cortesUpdateManyMutationInput, Prisma.llamada_cortesUncheckedUpdateManyInput>;
    where?: Prisma.llamada_cortesWhereInput;
    limit?: number;
    include?: Prisma.llamada_cortesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type llamada_cortesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where: Prisma.llamada_cortesWhereUniqueInput;
    create: Prisma.XOR<Prisma.llamada_cortesCreateInput, Prisma.llamada_cortesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.llamada_cortesUpdateInput, Prisma.llamada_cortesUncheckedUpdateInput>;
};
export type llamada_cortesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
    where: Prisma.llamada_cortesWhereUniqueInput;
};
export type llamada_cortesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.llamada_cortesWhereInput;
    limit?: number;
};
export type llamada_cortes$orden_trabajoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
};
export type llamada_cortesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.llamada_cortesSelect<ExtArgs> | null;
    omit?: Prisma.llamada_cortesOmit<ExtArgs> | null;
    include?: Prisma.llamada_cortesInclude<ExtArgs> | null;
};
