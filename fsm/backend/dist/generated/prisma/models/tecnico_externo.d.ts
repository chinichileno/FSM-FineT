import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type tecnico_externoModel = runtime.Types.Result.DefaultSelection<Prisma.$tecnico_externoPayload>;
export type AggregateTecnico_externo = {
    _count: Tecnico_externoCountAggregateOutputType | null;
    _avg: Tecnico_externoAvgAggregateOutputType | null;
    _sum: Tecnico_externoSumAggregateOutputType | null;
    _min: Tecnico_externoMinAggregateOutputType | null;
    _max: Tecnico_externoMaxAggregateOutputType | null;
};
export type Tecnico_externoAvgAggregateOutputType = {
    id_tecnico_ext: number | null;
};
export type Tecnico_externoSumAggregateOutputType = {
    id_tecnico_ext: number | null;
};
export type Tecnico_externoMinAggregateOutputType = {
    id_tecnico_ext: number | null;
    nombre_completo: string | null;
    empresa: string | null;
    telefono: string | null;
    activo: boolean | null;
};
export type Tecnico_externoMaxAggregateOutputType = {
    id_tecnico_ext: number | null;
    nombre_completo: string | null;
    empresa: string | null;
    telefono: string | null;
    activo: boolean | null;
};
export type Tecnico_externoCountAggregateOutputType = {
    id_tecnico_ext: number;
    nombre_completo: number;
    empresa: number;
    telefono: number;
    activo: number;
    _all: number;
};
export type Tecnico_externoAvgAggregateInputType = {
    id_tecnico_ext?: true;
};
export type Tecnico_externoSumAggregateInputType = {
    id_tecnico_ext?: true;
};
export type Tecnico_externoMinAggregateInputType = {
    id_tecnico_ext?: true;
    nombre_completo?: true;
    empresa?: true;
    telefono?: true;
    activo?: true;
};
export type Tecnico_externoMaxAggregateInputType = {
    id_tecnico_ext?: true;
    nombre_completo?: true;
    empresa?: true;
    telefono?: true;
    activo?: true;
};
export type Tecnico_externoCountAggregateInputType = {
    id_tecnico_ext?: true;
    nombre_completo?: true;
    empresa?: true;
    telefono?: true;
    activo?: true;
    _all?: true;
};
export type Tecnico_externoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tecnico_externoWhereInput;
    orderBy?: Prisma.tecnico_externoOrderByWithRelationInput | Prisma.tecnico_externoOrderByWithRelationInput[];
    cursor?: Prisma.tecnico_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Tecnico_externoCountAggregateInputType;
    _avg?: Tecnico_externoAvgAggregateInputType;
    _sum?: Tecnico_externoSumAggregateInputType;
    _min?: Tecnico_externoMinAggregateInputType;
    _max?: Tecnico_externoMaxAggregateInputType;
};
export type GetTecnico_externoAggregateType<T extends Tecnico_externoAggregateArgs> = {
    [P in keyof T & keyof AggregateTecnico_externo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTecnico_externo[P]> : Prisma.GetScalarType<T[P], AggregateTecnico_externo[P]>;
};
export type tecnico_externoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tecnico_externoWhereInput;
    orderBy?: Prisma.tecnico_externoOrderByWithAggregationInput | Prisma.tecnico_externoOrderByWithAggregationInput[];
    by: Prisma.Tecnico_externoScalarFieldEnum[] | Prisma.Tecnico_externoScalarFieldEnum;
    having?: Prisma.tecnico_externoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Tecnico_externoCountAggregateInputType | true;
    _avg?: Tecnico_externoAvgAggregateInputType;
    _sum?: Tecnico_externoSumAggregateInputType;
    _min?: Tecnico_externoMinAggregateInputType;
    _max?: Tecnico_externoMaxAggregateInputType;
};
export type Tecnico_externoGroupByOutputType = {
    id_tecnico_ext: number;
    nombre_completo: string;
    empresa: string | null;
    telefono: string | null;
    activo: boolean;
    _count: Tecnico_externoCountAggregateOutputType | null;
    _avg: Tecnico_externoAvgAggregateOutputType | null;
    _sum: Tecnico_externoSumAggregateOutputType | null;
    _min: Tecnico_externoMinAggregateOutputType | null;
    _max: Tecnico_externoMaxAggregateOutputType | null;
};
export type GetTecnico_externoGroupByPayload<T extends tecnico_externoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Tecnico_externoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Tecnico_externoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Tecnico_externoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Tecnico_externoGroupByOutputType[P]>;
}>>;
export type tecnico_externoWhereInput = {
    AND?: Prisma.tecnico_externoWhereInput | Prisma.tecnico_externoWhereInput[];
    OR?: Prisma.tecnico_externoWhereInput[];
    NOT?: Prisma.tecnico_externoWhereInput | Prisma.tecnico_externoWhereInput[];
    id_tecnico_ext?: Prisma.IntFilter<"tecnico_externo"> | number;
    nombre_completo?: Prisma.StringFilter<"tecnico_externo"> | string;
    empresa?: Prisma.StringNullableFilter<"tecnico_externo"> | string | null;
    telefono?: Prisma.StringNullableFilter<"tecnico_externo"> | string | null;
    activo?: Prisma.BoolFilter<"tecnico_externo"> | boolean;
    ordenes?: Prisma.Orden_trabajoListRelationFilter;
};
export type tecnico_externoOrderByWithRelationInput = {
    id_tecnico_ext?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    ordenes?: Prisma.orden_trabajoOrderByRelationAggregateInput;
};
export type tecnico_externoWhereUniqueInput = Prisma.AtLeast<{
    id_tecnico_ext?: number;
    AND?: Prisma.tecnico_externoWhereInput | Prisma.tecnico_externoWhereInput[];
    OR?: Prisma.tecnico_externoWhereInput[];
    NOT?: Prisma.tecnico_externoWhereInput | Prisma.tecnico_externoWhereInput[];
    nombre_completo?: Prisma.StringFilter<"tecnico_externo"> | string;
    empresa?: Prisma.StringNullableFilter<"tecnico_externo"> | string | null;
    telefono?: Prisma.StringNullableFilter<"tecnico_externo"> | string | null;
    activo?: Prisma.BoolFilter<"tecnico_externo"> | boolean;
    ordenes?: Prisma.Orden_trabajoListRelationFilter;
}, "id_tecnico_ext">;
export type tecnico_externoOrderByWithAggregationInput = {
    id_tecnico_ext?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    _count?: Prisma.tecnico_externoCountOrderByAggregateInput;
    _avg?: Prisma.tecnico_externoAvgOrderByAggregateInput;
    _max?: Prisma.tecnico_externoMaxOrderByAggregateInput;
    _min?: Prisma.tecnico_externoMinOrderByAggregateInput;
    _sum?: Prisma.tecnico_externoSumOrderByAggregateInput;
};
export type tecnico_externoScalarWhereWithAggregatesInput = {
    AND?: Prisma.tecnico_externoScalarWhereWithAggregatesInput | Prisma.tecnico_externoScalarWhereWithAggregatesInput[];
    OR?: Prisma.tecnico_externoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.tecnico_externoScalarWhereWithAggregatesInput | Prisma.tecnico_externoScalarWhereWithAggregatesInput[];
    id_tecnico_ext?: Prisma.IntWithAggregatesFilter<"tecnico_externo"> | number;
    nombre_completo?: Prisma.StringWithAggregatesFilter<"tecnico_externo"> | string;
    empresa?: Prisma.StringNullableWithAggregatesFilter<"tecnico_externo"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"tecnico_externo"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"tecnico_externo"> | boolean;
};
export type tecnico_externoCreateInput = {
    nombre_completo: string;
    empresa?: string | null;
    telefono?: string | null;
    activo?: boolean;
    ordenes?: Prisma.orden_trabajoCreateNestedManyWithoutTecnico_externoInput;
};
export type tecnico_externoUncheckedCreateInput = {
    id_tecnico_ext?: number;
    nombre_completo: string;
    empresa?: string | null;
    telefono?: string | null;
    activo?: boolean;
    ordenes?: Prisma.orden_trabajoUncheckedCreateNestedManyWithoutTecnico_externoInput;
};
export type tecnico_externoUpdateInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes?: Prisma.orden_trabajoUpdateManyWithoutTecnico_externoNestedInput;
};
export type tecnico_externoUncheckedUpdateInput = {
    id_tecnico_ext?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    ordenes?: Prisma.orden_trabajoUncheckedUpdateManyWithoutTecnico_externoNestedInput;
};
export type tecnico_externoCreateManyInput = {
    id_tecnico_ext?: number;
    nombre_completo: string;
    empresa?: string | null;
    telefono?: string | null;
    activo?: boolean;
};
export type tecnico_externoUpdateManyMutationInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type tecnico_externoUncheckedUpdateManyInput = {
    id_tecnico_ext?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Tecnico_externoNullableScalarRelationFilter = {
    is?: Prisma.tecnico_externoWhereInput | null;
    isNot?: Prisma.tecnico_externoWhereInput | null;
};
export type tecnico_externoCountOrderByAggregateInput = {
    id_tecnico_ext?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tecnico_externoAvgOrderByAggregateInput = {
    id_tecnico_ext?: Prisma.SortOrder;
};
export type tecnico_externoMaxOrderByAggregateInput = {
    id_tecnico_ext?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tecnico_externoMinOrderByAggregateInput = {
    id_tecnico_ext?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    empresa?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type tecnico_externoSumOrderByAggregateInput = {
    id_tecnico_ext?: Prisma.SortOrder;
};
export type tecnico_externoCreateNestedOneWithoutOrdenesInput = {
    create?: Prisma.XOR<Prisma.tecnico_externoCreateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedCreateWithoutOrdenesInput>;
    connectOrCreate?: Prisma.tecnico_externoCreateOrConnectWithoutOrdenesInput;
    connect?: Prisma.tecnico_externoWhereUniqueInput;
};
export type tecnico_externoUpdateOneWithoutOrdenesNestedInput = {
    create?: Prisma.XOR<Prisma.tecnico_externoCreateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedCreateWithoutOrdenesInput>;
    connectOrCreate?: Prisma.tecnico_externoCreateOrConnectWithoutOrdenesInput;
    upsert?: Prisma.tecnico_externoUpsertWithoutOrdenesInput;
    disconnect?: Prisma.tecnico_externoWhereInput | boolean;
    delete?: Prisma.tecnico_externoWhereInput | boolean;
    connect?: Prisma.tecnico_externoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.tecnico_externoUpdateToOneWithWhereWithoutOrdenesInput, Prisma.tecnico_externoUpdateWithoutOrdenesInput>, Prisma.tecnico_externoUncheckedUpdateWithoutOrdenesInput>;
};
export type tecnico_externoCreateWithoutOrdenesInput = {
    nombre_completo: string;
    empresa?: string | null;
    telefono?: string | null;
    activo?: boolean;
};
export type tecnico_externoUncheckedCreateWithoutOrdenesInput = {
    id_tecnico_ext?: number;
    nombre_completo: string;
    empresa?: string | null;
    telefono?: string | null;
    activo?: boolean;
};
export type tecnico_externoCreateOrConnectWithoutOrdenesInput = {
    where: Prisma.tecnico_externoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tecnico_externoCreateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedCreateWithoutOrdenesInput>;
};
export type tecnico_externoUpsertWithoutOrdenesInput = {
    update: Prisma.XOR<Prisma.tecnico_externoUpdateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedUpdateWithoutOrdenesInput>;
    create: Prisma.XOR<Prisma.tecnico_externoCreateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedCreateWithoutOrdenesInput>;
    where?: Prisma.tecnico_externoWhereInput;
};
export type tecnico_externoUpdateToOneWithWhereWithoutOrdenesInput = {
    where?: Prisma.tecnico_externoWhereInput;
    data: Prisma.XOR<Prisma.tecnico_externoUpdateWithoutOrdenesInput, Prisma.tecnico_externoUncheckedUpdateWithoutOrdenesInput>;
};
export type tecnico_externoUpdateWithoutOrdenesInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type tecnico_externoUncheckedUpdateWithoutOrdenesInput = {
    id_tecnico_ext?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    empresa?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Tecnico_externoCountOutputType = {
    ordenes: number;
};
export type Tecnico_externoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenes?: boolean | Tecnico_externoCountOutputTypeCountOrdenesArgs;
};
export type Tecnico_externoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Tecnico_externoCountOutputTypeSelect<ExtArgs> | null;
};
export type Tecnico_externoCountOutputTypeCountOrdenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_trabajoWhereInput;
};
export type tecnico_externoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tecnico_ext?: boolean;
    nombre_completo?: boolean;
    empresa?: boolean;
    telefono?: boolean;
    activo?: boolean;
    ordenes?: boolean | Prisma.tecnico_externo$ordenesArgs<ExtArgs>;
    _count?: boolean | Prisma.Tecnico_externoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tecnico_externo"]>;
export type tecnico_externoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tecnico_ext?: boolean;
    nombre_completo?: boolean;
    empresa?: boolean;
    telefono?: boolean;
    activo?: boolean;
}, ExtArgs["result"]["tecnico_externo"]>;
export type tecnico_externoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_tecnico_ext?: boolean;
    nombre_completo?: boolean;
    empresa?: boolean;
    telefono?: boolean;
    activo?: boolean;
}, ExtArgs["result"]["tecnico_externo"]>;
export type tecnico_externoSelectScalar = {
    id_tecnico_ext?: boolean;
    nombre_completo?: boolean;
    empresa?: boolean;
    telefono?: boolean;
    activo?: boolean;
};
export type tecnico_externoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_tecnico_ext" | "nombre_completo" | "empresa" | "telefono" | "activo", ExtArgs["result"]["tecnico_externo"]>;
export type tecnico_externoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenes?: boolean | Prisma.tecnico_externo$ordenesArgs<ExtArgs>;
    _count?: boolean | Prisma.Tecnico_externoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type tecnico_externoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type tecnico_externoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $tecnico_externoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tecnico_externo";
    objects: {
        ordenes: Prisma.$orden_trabajoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_tecnico_ext: number;
        nombre_completo: string;
        empresa: string | null;
        telefono: string | null;
        activo: boolean;
    }, ExtArgs["result"]["tecnico_externo"]>;
    composites: {};
};
export type tecnico_externoGetPayload<S extends boolean | null | undefined | tecnico_externoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload, S>;
export type tecnico_externoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<tecnico_externoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Tecnico_externoCountAggregateInputType | true;
};
export interface tecnico_externoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tecnico_externo'];
        meta: {
            name: 'tecnico_externo';
        };
    };
    findUnique<T extends tecnico_externoFindUniqueArgs>(args: Prisma.SelectSubset<T, tecnico_externoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends tecnico_externoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, tecnico_externoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends tecnico_externoFindFirstArgs>(args?: Prisma.SelectSubset<T, tecnico_externoFindFirstArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends tecnico_externoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, tecnico_externoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends tecnico_externoFindManyArgs>(args?: Prisma.SelectSubset<T, tecnico_externoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends tecnico_externoCreateArgs>(args: Prisma.SelectSubset<T, tecnico_externoCreateArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends tecnico_externoCreateManyArgs>(args?: Prisma.SelectSubset<T, tecnico_externoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends tecnico_externoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, tecnico_externoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends tecnico_externoDeleteArgs>(args: Prisma.SelectSubset<T, tecnico_externoDeleteArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends tecnico_externoUpdateArgs>(args: Prisma.SelectSubset<T, tecnico_externoUpdateArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends tecnico_externoDeleteManyArgs>(args?: Prisma.SelectSubset<T, tecnico_externoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends tecnico_externoUpdateManyArgs>(args: Prisma.SelectSubset<T, tecnico_externoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends tecnico_externoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, tecnico_externoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends tecnico_externoUpsertArgs>(args: Prisma.SelectSubset<T, tecnico_externoUpsertArgs<ExtArgs>>): Prisma.Prisma__tecnico_externoClient<runtime.Types.Result.GetResult<Prisma.$tecnico_externoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends tecnico_externoCountArgs>(args?: Prisma.Subset<T, tecnico_externoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Tecnico_externoCountAggregateOutputType> : number>;
    aggregate<T extends Tecnico_externoAggregateArgs>(args: Prisma.Subset<T, Tecnico_externoAggregateArgs>): Prisma.PrismaPromise<GetTecnico_externoAggregateType<T>>;
    groupBy<T extends tecnico_externoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: tecnico_externoGroupByArgs['orderBy'];
    } : {
        orderBy?: tecnico_externoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, tecnico_externoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTecnico_externoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: tecnico_externoFieldRefs;
}
export interface Prisma__tecnico_externoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenes<T extends Prisma.tecnico_externo$ordenesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.tecnico_externo$ordenesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface tecnico_externoFieldRefs {
    readonly id_tecnico_ext: Prisma.FieldRef<"tecnico_externo", 'Int'>;
    readonly nombre_completo: Prisma.FieldRef<"tecnico_externo", 'String'>;
    readonly empresa: Prisma.FieldRef<"tecnico_externo", 'String'>;
    readonly telefono: Prisma.FieldRef<"tecnico_externo", 'String'>;
    readonly activo: Prisma.FieldRef<"tecnico_externo", 'Boolean'>;
}
export type tecnico_externoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where: Prisma.tecnico_externoWhereUniqueInput;
};
export type tecnico_externoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where: Prisma.tecnico_externoWhereUniqueInput;
};
export type tecnico_externoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where?: Prisma.tecnico_externoWhereInput;
    orderBy?: Prisma.tecnico_externoOrderByWithRelationInput | Prisma.tecnico_externoOrderByWithRelationInput[];
    cursor?: Prisma.tecnico_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tecnico_externoScalarFieldEnum | Prisma.Tecnico_externoScalarFieldEnum[];
};
export type tecnico_externoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where?: Prisma.tecnico_externoWhereInput;
    orderBy?: Prisma.tecnico_externoOrderByWithRelationInput | Prisma.tecnico_externoOrderByWithRelationInput[];
    cursor?: Prisma.tecnico_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tecnico_externoScalarFieldEnum | Prisma.Tecnico_externoScalarFieldEnum[];
};
export type tecnico_externoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where?: Prisma.tecnico_externoWhereInput;
    orderBy?: Prisma.tecnico_externoOrderByWithRelationInput | Prisma.tecnico_externoOrderByWithRelationInput[];
    cursor?: Prisma.tecnico_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Tecnico_externoScalarFieldEnum | Prisma.Tecnico_externoScalarFieldEnum[];
};
export type tecnico_externoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tecnico_externoCreateInput, Prisma.tecnico_externoUncheckedCreateInput>;
};
export type tecnico_externoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.tecnico_externoCreateManyInput | Prisma.tecnico_externoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tecnico_externoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    data: Prisma.tecnico_externoCreateManyInput | Prisma.tecnico_externoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type tecnico_externoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tecnico_externoUpdateInput, Prisma.tecnico_externoUncheckedUpdateInput>;
    where: Prisma.tecnico_externoWhereUniqueInput;
};
export type tecnico_externoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.tecnico_externoUpdateManyMutationInput, Prisma.tecnico_externoUncheckedUpdateManyInput>;
    where?: Prisma.tecnico_externoWhereInput;
    limit?: number;
};
export type tecnico_externoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.tecnico_externoUpdateManyMutationInput, Prisma.tecnico_externoUncheckedUpdateManyInput>;
    where?: Prisma.tecnico_externoWhereInput;
    limit?: number;
};
export type tecnico_externoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where: Prisma.tecnico_externoWhereUniqueInput;
    create: Prisma.XOR<Prisma.tecnico_externoCreateInput, Prisma.tecnico_externoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.tecnico_externoUpdateInput, Prisma.tecnico_externoUncheckedUpdateInput>;
};
export type tecnico_externoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
    where: Prisma.tecnico_externoWhereUniqueInput;
};
export type tecnico_externoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.tecnico_externoWhereInput;
    limit?: number;
};
export type tecnico_externo$ordenesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
    orderBy?: Prisma.orden_trabajoOrderByWithRelationInput | Prisma.orden_trabajoOrderByWithRelationInput[];
    cursor?: Prisma.orden_trabajoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orden_trabajoScalarFieldEnum | Prisma.Orden_trabajoScalarFieldEnum[];
};
export type tecnico_externoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tecnico_externoSelect<ExtArgs> | null;
    omit?: Prisma.tecnico_externoOmit<ExtArgs> | null;
    include?: Prisma.tecnico_externoInclude<ExtArgs> | null;
};
