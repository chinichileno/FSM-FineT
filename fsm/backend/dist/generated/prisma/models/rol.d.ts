import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type rolModel = runtime.Types.Result.DefaultSelection<Prisma.$rolPayload>;
export type AggregateRol = {
    _count: RolCountAggregateOutputType | null;
    _avg: RolAvgAggregateOutputType | null;
    _sum: RolSumAggregateOutputType | null;
    _min: RolMinAggregateOutputType | null;
    _max: RolMaxAggregateOutputType | null;
};
export type RolAvgAggregateOutputType = {
    id_rol: number | null;
};
export type RolSumAggregateOutputType = {
    id_rol: number | null;
};
export type RolMinAggregateOutputType = {
    id_rol: number | null;
    nombre_rol: string | null;
    descripcion: string | null;
};
export type RolMaxAggregateOutputType = {
    id_rol: number | null;
    nombre_rol: string | null;
    descripcion: string | null;
};
export type RolCountAggregateOutputType = {
    id_rol: number;
    nombre_rol: number;
    descripcion: number;
    _all: number;
};
export type RolAvgAggregateInputType = {
    id_rol?: true;
};
export type RolSumAggregateInputType = {
    id_rol?: true;
};
export type RolMinAggregateInputType = {
    id_rol?: true;
    nombre_rol?: true;
    descripcion?: true;
};
export type RolMaxAggregateInputType = {
    id_rol?: true;
    nombre_rol?: true;
    descripcion?: true;
};
export type RolCountAggregateInputType = {
    id_rol?: true;
    nombre_rol?: true;
    descripcion?: true;
    _all?: true;
};
export type RolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolWhereInput;
    orderBy?: Prisma.rolOrderByWithRelationInput | Prisma.rolOrderByWithRelationInput[];
    cursor?: Prisma.rolWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RolCountAggregateInputType;
    _avg?: RolAvgAggregateInputType;
    _sum?: RolSumAggregateInputType;
    _min?: RolMinAggregateInputType;
    _max?: RolMaxAggregateInputType;
};
export type GetRolAggregateType<T extends RolAggregateArgs> = {
    [P in keyof T & keyof AggregateRol]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRol[P]> : Prisma.GetScalarType<T[P], AggregateRol[P]>;
};
export type rolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolWhereInput;
    orderBy?: Prisma.rolOrderByWithAggregationInput | Prisma.rolOrderByWithAggregationInput[];
    by: Prisma.RolScalarFieldEnum[] | Prisma.RolScalarFieldEnum;
    having?: Prisma.rolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RolCountAggregateInputType | true;
    _avg?: RolAvgAggregateInputType;
    _sum?: RolSumAggregateInputType;
    _min?: RolMinAggregateInputType;
    _max?: RolMaxAggregateInputType;
};
export type RolGroupByOutputType = {
    id_rol: number;
    nombre_rol: string;
    descripcion: string | null;
    _count: RolCountAggregateOutputType | null;
    _avg: RolAvgAggregateOutputType | null;
    _sum: RolSumAggregateOutputType | null;
    _min: RolMinAggregateOutputType | null;
    _max: RolMaxAggregateOutputType | null;
};
export type GetRolGroupByPayload<T extends rolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RolGroupByOutputType[P]>;
}>>;
export type rolWhereInput = {
    AND?: Prisma.rolWhereInput | Prisma.rolWhereInput[];
    OR?: Prisma.rolWhereInput[];
    NOT?: Prisma.rolWhereInput | Prisma.rolWhereInput[];
    id_rol?: Prisma.IntFilter<"rol"> | number;
    nombre_rol?: Prisma.StringFilter<"rol"> | string;
    descripcion?: Prisma.StringNullableFilter<"rol"> | string | null;
    usuarios?: Prisma.Usuario_rolListRelationFilter;
};
export type rolOrderByWithRelationInput = {
    id_rol?: Prisma.SortOrder;
    nombre_rol?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuarios?: Prisma.usuario_rolOrderByRelationAggregateInput;
};
export type rolWhereUniqueInput = Prisma.AtLeast<{
    id_rol?: number;
    nombre_rol?: string;
    AND?: Prisma.rolWhereInput | Prisma.rolWhereInput[];
    OR?: Prisma.rolWhereInput[];
    NOT?: Prisma.rolWhereInput | Prisma.rolWhereInput[];
    descripcion?: Prisma.StringNullableFilter<"rol"> | string | null;
    usuarios?: Prisma.Usuario_rolListRelationFilter;
}, "id_rol" | "nombre_rol">;
export type rolOrderByWithAggregationInput = {
    id_rol?: Prisma.SortOrder;
    nombre_rol?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.rolCountOrderByAggregateInput;
    _avg?: Prisma.rolAvgOrderByAggregateInput;
    _max?: Prisma.rolMaxOrderByAggregateInput;
    _min?: Prisma.rolMinOrderByAggregateInput;
    _sum?: Prisma.rolSumOrderByAggregateInput;
};
export type rolScalarWhereWithAggregatesInput = {
    AND?: Prisma.rolScalarWhereWithAggregatesInput | Prisma.rolScalarWhereWithAggregatesInput[];
    OR?: Prisma.rolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.rolScalarWhereWithAggregatesInput | Prisma.rolScalarWhereWithAggregatesInput[];
    id_rol?: Prisma.IntWithAggregatesFilter<"rol"> | number;
    nombre_rol?: Prisma.StringWithAggregatesFilter<"rol"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"rol"> | string | null;
};
export type rolCreateInput = {
    nombre_rol: string;
    descripcion?: string | null;
    usuarios?: Prisma.usuario_rolCreateNestedManyWithoutRolInput;
};
export type rolUncheckedCreateInput = {
    id_rol?: number;
    nombre_rol: string;
    descripcion?: string | null;
    usuarios?: Prisma.usuario_rolUncheckedCreateNestedManyWithoutRolInput;
};
export type rolUpdateInput = {
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuarios?: Prisma.usuario_rolUpdateManyWithoutRolNestedInput;
};
export type rolUncheckedUpdateInput = {
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    usuarios?: Prisma.usuario_rolUncheckedUpdateManyWithoutRolNestedInput;
};
export type rolCreateManyInput = {
    id_rol?: number;
    nombre_rol: string;
    descripcion?: string | null;
};
export type rolUpdateManyMutationInput = {
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type rolUncheckedUpdateManyInput = {
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type rolCountOrderByAggregateInput = {
    id_rol?: Prisma.SortOrder;
    nombre_rol?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type rolAvgOrderByAggregateInput = {
    id_rol?: Prisma.SortOrder;
};
export type rolMaxOrderByAggregateInput = {
    id_rol?: Prisma.SortOrder;
    nombre_rol?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type rolMinOrderByAggregateInput = {
    id_rol?: Prisma.SortOrder;
    nombre_rol?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
};
export type rolSumOrderByAggregateInput = {
    id_rol?: Prisma.SortOrder;
};
export type RolScalarRelationFilter = {
    is?: Prisma.rolWhereInput;
    isNot?: Prisma.rolWhereInput;
};
export type rolCreateNestedOneWithoutUsuariosInput = {
    create?: Prisma.XOR<Prisma.rolCreateWithoutUsuariosInput, Prisma.rolUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.rolCreateOrConnectWithoutUsuariosInput;
    connect?: Prisma.rolWhereUniqueInput;
};
export type rolUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: Prisma.XOR<Prisma.rolCreateWithoutUsuariosInput, Prisma.rolUncheckedCreateWithoutUsuariosInput>;
    connectOrCreate?: Prisma.rolCreateOrConnectWithoutUsuariosInput;
    upsert?: Prisma.rolUpsertWithoutUsuariosInput;
    connect?: Prisma.rolWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.rolUpdateToOneWithWhereWithoutUsuariosInput, Prisma.rolUpdateWithoutUsuariosInput>, Prisma.rolUncheckedUpdateWithoutUsuariosInput>;
};
export type rolCreateWithoutUsuariosInput = {
    nombre_rol: string;
    descripcion?: string | null;
};
export type rolUncheckedCreateWithoutUsuariosInput = {
    id_rol?: number;
    nombre_rol: string;
    descripcion?: string | null;
};
export type rolCreateOrConnectWithoutUsuariosInput = {
    where: Prisma.rolWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolCreateWithoutUsuariosInput, Prisma.rolUncheckedCreateWithoutUsuariosInput>;
};
export type rolUpsertWithoutUsuariosInput = {
    update: Prisma.XOR<Prisma.rolUpdateWithoutUsuariosInput, Prisma.rolUncheckedUpdateWithoutUsuariosInput>;
    create: Prisma.XOR<Prisma.rolCreateWithoutUsuariosInput, Prisma.rolUncheckedCreateWithoutUsuariosInput>;
    where?: Prisma.rolWhereInput;
};
export type rolUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: Prisma.rolWhereInput;
    data: Prisma.XOR<Prisma.rolUpdateWithoutUsuariosInput, Prisma.rolUncheckedUpdateWithoutUsuariosInput>;
};
export type rolUpdateWithoutUsuariosInput = {
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type rolUncheckedUpdateWithoutUsuariosInput = {
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_rol?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RolCountOutputType = {
    usuarios: number;
};
export type RolCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | RolCountOutputTypeCountUsuariosArgs;
};
export type RolCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolCountOutputTypeSelect<ExtArgs> | null;
};
export type RolCountOutputTypeCountUsuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuario_rolWhereInput;
};
export type rolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_rol?: boolean;
    nombre_rol?: boolean;
    descripcion?: boolean;
    usuarios?: boolean | Prisma.rol$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rol"]>;
export type rolSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_rol?: boolean;
    nombre_rol?: boolean;
    descripcion?: boolean;
}, ExtArgs["result"]["rol"]>;
export type rolSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_rol?: boolean;
    nombre_rol?: boolean;
    descripcion?: boolean;
}, ExtArgs["result"]["rol"]>;
export type rolSelectScalar = {
    id_rol?: boolean;
    nombre_rol?: boolean;
    descripcion?: boolean;
};
export type rolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_rol" | "nombre_rol" | "descripcion", ExtArgs["result"]["rol"]>;
export type rolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuarios?: boolean | Prisma.rol$usuariosArgs<ExtArgs>;
    _count?: boolean | Prisma.RolCountOutputTypeDefaultArgs<ExtArgs>;
};
export type rolIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type rolIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $rolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "rol";
    objects: {
        usuarios: Prisma.$usuario_rolPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_rol: number;
        nombre_rol: string;
        descripcion: string | null;
    }, ExtArgs["result"]["rol"]>;
    composites: {};
};
export type rolGetPayload<S extends boolean | null | undefined | rolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$rolPayload, S>;
export type rolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RolCountAggregateInputType | true;
};
export interface rolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['rol'];
        meta: {
            name: 'rol';
        };
    };
    findUnique<T extends rolFindUniqueArgs>(args: Prisma.SelectSubset<T, rolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends rolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends rolFindFirstArgs>(args?: Prisma.SelectSubset<T, rolFindFirstArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends rolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, rolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends rolFindManyArgs>(args?: Prisma.SelectSubset<T, rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends rolCreateArgs>(args: Prisma.SelectSubset<T, rolCreateArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends rolCreateManyArgs>(args?: Prisma.SelectSubset<T, rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends rolCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends rolDeleteArgs>(args: Prisma.SelectSubset<T, rolDeleteArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends rolUpdateArgs>(args: Prisma.SelectSubset<T, rolUpdateArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends rolDeleteManyArgs>(args?: Prisma.SelectSubset<T, rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends rolUpdateManyArgs>(args: Prisma.SelectSubset<T, rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends rolUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends rolUpsertArgs>(args: Prisma.SelectSubset<T, rolUpsertArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends rolCountArgs>(args?: Prisma.Subset<T, rolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RolCountAggregateOutputType> : number>;
    aggregate<T extends RolAggregateArgs>(args: Prisma.Subset<T, RolAggregateArgs>): Prisma.PrismaPromise<GetRolAggregateType<T>>;
    groupBy<T extends rolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: rolGroupByArgs['orderBy'];
    } : {
        orderBy?: rolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: rolFieldRefs;
}
export interface Prisma__rolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuarios<T extends Prisma.rol$usuariosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rol$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface rolFieldRefs {
    readonly id_rol: Prisma.FieldRef<"rol", 'Int'>;
    readonly nombre_rol: Prisma.FieldRef<"rol", 'String'>;
    readonly descripcion: Prisma.FieldRef<"rol", 'String'>;
}
export type rolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where: Prisma.rolWhereUniqueInput;
};
export type rolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where: Prisma.rolWhereUniqueInput;
};
export type rolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where?: Prisma.rolWhereInput;
    orderBy?: Prisma.rolOrderByWithRelationInput | Prisma.rolOrderByWithRelationInput[];
    cursor?: Prisma.rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type rolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where?: Prisma.rolWhereInput;
    orderBy?: Prisma.rolOrderByWithRelationInput | Prisma.rolOrderByWithRelationInput[];
    cursor?: Prisma.rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type rolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where?: Prisma.rolWhereInput;
    orderBy?: Prisma.rolOrderByWithRelationInput | Prisma.rolOrderByWithRelationInput[];
    cursor?: Prisma.rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolScalarFieldEnum | Prisma.RolScalarFieldEnum[];
};
export type rolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolCreateInput, Prisma.rolUncheckedCreateInput>;
};
export type rolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.rolCreateManyInput | Prisma.rolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rolCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    data: Prisma.rolCreateManyInput | Prisma.rolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type rolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolUpdateInput, Prisma.rolUncheckedUpdateInput>;
    where: Prisma.rolWhereUniqueInput;
};
export type rolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.rolUpdateManyMutationInput, Prisma.rolUncheckedUpdateManyInput>;
    where?: Prisma.rolWhereInput;
    limit?: number;
};
export type rolUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.rolUpdateManyMutationInput, Prisma.rolUncheckedUpdateManyInput>;
    where?: Prisma.rolWhereInput;
    limit?: number;
};
export type rolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where: Prisma.rolWhereUniqueInput;
    create: Prisma.XOR<Prisma.rolCreateInput, Prisma.rolUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.rolUpdateInput, Prisma.rolUncheckedUpdateInput>;
};
export type rolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
    where: Prisma.rolWhereUniqueInput;
};
export type rolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.rolWhereInput;
    limit?: number;
};
export type rol$usuariosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithRelationInput | Prisma.usuario_rolOrderByWithRelationInput[];
    cursor?: Prisma.usuario_rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_rolScalarFieldEnum | Prisma.Usuario_rolScalarFieldEnum[];
};
export type rolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.rolSelect<ExtArgs> | null;
    omit?: Prisma.rolOmit<ExtArgs> | null;
    include?: Prisma.rolInclude<ExtArgs> | null;
};
