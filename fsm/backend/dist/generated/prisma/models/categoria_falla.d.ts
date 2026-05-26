import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type categoria_fallaModel = runtime.Types.Result.DefaultSelection<Prisma.$categoria_fallaPayload>;
export type AggregateCategoria_falla = {
    _count: Categoria_fallaCountAggregateOutputType | null;
    _avg: Categoria_fallaAvgAggregateOutputType | null;
    _sum: Categoria_fallaSumAggregateOutputType | null;
    _min: Categoria_fallaMinAggregateOutputType | null;
    _max: Categoria_fallaMaxAggregateOutputType | null;
};
export type Categoria_fallaAvgAggregateOutputType = {
    id_categoria: number | null;
    sla_horas: number | null;
};
export type Categoria_fallaSumAggregateOutputType = {
    id_categoria: number | null;
    sla_horas: number | null;
};
export type Categoria_fallaMinAggregateOutputType = {
    id_categoria: number | null;
    nombre: string | null;
    sla_horas: number | null;
};
export type Categoria_fallaMaxAggregateOutputType = {
    id_categoria: number | null;
    nombre: string | null;
    sla_horas: number | null;
};
export type Categoria_fallaCountAggregateOutputType = {
    id_categoria: number;
    nombre: number;
    sla_horas: number;
    _all: number;
};
export type Categoria_fallaAvgAggregateInputType = {
    id_categoria?: true;
    sla_horas?: true;
};
export type Categoria_fallaSumAggregateInputType = {
    id_categoria?: true;
    sla_horas?: true;
};
export type Categoria_fallaMinAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    sla_horas?: true;
};
export type Categoria_fallaMaxAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    sla_horas?: true;
};
export type Categoria_fallaCountAggregateInputType = {
    id_categoria?: true;
    nombre?: true;
    sla_horas?: true;
    _all?: true;
};
export type Categoria_fallaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoria_fallaWhereInput;
    orderBy?: Prisma.categoria_fallaOrderByWithRelationInput | Prisma.categoria_fallaOrderByWithRelationInput[];
    cursor?: Prisma.categoria_fallaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Categoria_fallaCountAggregateInputType;
    _avg?: Categoria_fallaAvgAggregateInputType;
    _sum?: Categoria_fallaSumAggregateInputType;
    _min?: Categoria_fallaMinAggregateInputType;
    _max?: Categoria_fallaMaxAggregateInputType;
};
export type GetCategoria_fallaAggregateType<T extends Categoria_fallaAggregateArgs> = {
    [P in keyof T & keyof AggregateCategoria_falla]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCategoria_falla[P]> : Prisma.GetScalarType<T[P], AggregateCategoria_falla[P]>;
};
export type categoria_fallaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoria_fallaWhereInput;
    orderBy?: Prisma.categoria_fallaOrderByWithAggregationInput | Prisma.categoria_fallaOrderByWithAggregationInput[];
    by: Prisma.Categoria_fallaScalarFieldEnum[] | Prisma.Categoria_fallaScalarFieldEnum;
    having?: Prisma.categoria_fallaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Categoria_fallaCountAggregateInputType | true;
    _avg?: Categoria_fallaAvgAggregateInputType;
    _sum?: Categoria_fallaSumAggregateInputType;
    _min?: Categoria_fallaMinAggregateInputType;
    _max?: Categoria_fallaMaxAggregateInputType;
};
export type Categoria_fallaGroupByOutputType = {
    id_categoria: number;
    nombre: string;
    sla_horas: number | null;
    _count: Categoria_fallaCountAggregateOutputType | null;
    _avg: Categoria_fallaAvgAggregateOutputType | null;
    _sum: Categoria_fallaSumAggregateOutputType | null;
    _min: Categoria_fallaMinAggregateOutputType | null;
    _max: Categoria_fallaMaxAggregateOutputType | null;
};
export type GetCategoria_fallaGroupByPayload<T extends categoria_fallaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Categoria_fallaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Categoria_fallaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Categoria_fallaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Categoria_fallaGroupByOutputType[P]>;
}>>;
export type categoria_fallaWhereInput = {
    AND?: Prisma.categoria_fallaWhereInput | Prisma.categoria_fallaWhereInput[];
    OR?: Prisma.categoria_fallaWhereInput[];
    NOT?: Prisma.categoria_fallaWhereInput | Prisma.categoria_fallaWhereInput[];
    id_categoria?: Prisma.IntFilter<"categoria_falla"> | number;
    nombre?: Prisma.StringFilter<"categoria_falla"> | string;
    sla_horas?: Prisma.IntNullableFilter<"categoria_falla"> | number | null;
    tickets?: Prisma.TicketListRelationFilter;
};
export type categoria_fallaOrderByWithRelationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrderInput | Prisma.SortOrder;
    tickets?: Prisma.ticketOrderByRelationAggregateInput;
};
export type categoria_fallaWhereUniqueInput = Prisma.AtLeast<{
    id_categoria?: number;
    AND?: Prisma.categoria_fallaWhereInput | Prisma.categoria_fallaWhereInput[];
    OR?: Prisma.categoria_fallaWhereInput[];
    NOT?: Prisma.categoria_fallaWhereInput | Prisma.categoria_fallaWhereInput[];
    nombre?: Prisma.StringFilter<"categoria_falla"> | string;
    sla_horas?: Prisma.IntNullableFilter<"categoria_falla"> | number | null;
    tickets?: Prisma.TicketListRelationFilter;
}, "id_categoria">;
export type categoria_fallaOrderByWithAggregationInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.categoria_fallaCountOrderByAggregateInput;
    _avg?: Prisma.categoria_fallaAvgOrderByAggregateInput;
    _max?: Prisma.categoria_fallaMaxOrderByAggregateInput;
    _min?: Prisma.categoria_fallaMinOrderByAggregateInput;
    _sum?: Prisma.categoria_fallaSumOrderByAggregateInput;
};
export type categoria_fallaScalarWhereWithAggregatesInput = {
    AND?: Prisma.categoria_fallaScalarWhereWithAggregatesInput | Prisma.categoria_fallaScalarWhereWithAggregatesInput[];
    OR?: Prisma.categoria_fallaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.categoria_fallaScalarWhereWithAggregatesInput | Prisma.categoria_fallaScalarWhereWithAggregatesInput[];
    id_categoria?: Prisma.IntWithAggregatesFilter<"categoria_falla"> | number;
    nombre?: Prisma.StringWithAggregatesFilter<"categoria_falla"> | string;
    sla_horas?: Prisma.IntNullableWithAggregatesFilter<"categoria_falla"> | number | null;
};
export type categoria_fallaCreateInput = {
    nombre: string;
    sla_horas?: number | null;
    tickets?: Prisma.ticketCreateNestedManyWithoutCategoriaInput;
};
export type categoria_fallaUncheckedCreateInput = {
    id_categoria?: number;
    nombre: string;
    sla_horas?: number | null;
    tickets?: Prisma.ticketUncheckedCreateNestedManyWithoutCategoriaInput;
};
export type categoria_fallaUpdateInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tickets?: Prisma.ticketUpdateManyWithoutCategoriaNestedInput;
};
export type categoria_fallaUncheckedUpdateInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tickets?: Prisma.ticketUncheckedUpdateManyWithoutCategoriaNestedInput;
};
export type categoria_fallaCreateManyInput = {
    id_categoria?: number;
    nombre: string;
    sla_horas?: number | null;
};
export type categoria_fallaUpdateManyMutationInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type categoria_fallaUncheckedUpdateManyInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Categoria_fallaScalarRelationFilter = {
    is?: Prisma.categoria_fallaWhereInput;
    isNot?: Prisma.categoria_fallaWhereInput;
};
export type categoria_fallaCountOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrder;
};
export type categoria_fallaAvgOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrder;
};
export type categoria_fallaMaxOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrder;
};
export type categoria_fallaMinOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    nombre?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrder;
};
export type categoria_fallaSumOrderByAggregateInput = {
    id_categoria?: Prisma.SortOrder;
    sla_horas?: Prisma.SortOrder;
};
export type categoria_fallaCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.categoria_fallaCreateWithoutTicketsInput, Prisma.categoria_fallaUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.categoria_fallaCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.categoria_fallaWhereUniqueInput;
};
export type categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.categoria_fallaCreateWithoutTicketsInput, Prisma.categoria_fallaUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.categoria_fallaCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.categoria_fallaUpsertWithoutTicketsInput;
    connect?: Prisma.categoria_fallaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.categoria_fallaUpdateToOneWithWhereWithoutTicketsInput, Prisma.categoria_fallaUpdateWithoutTicketsInput>, Prisma.categoria_fallaUncheckedUpdateWithoutTicketsInput>;
};
export type categoria_fallaCreateWithoutTicketsInput = {
    nombre: string;
    sla_horas?: number | null;
};
export type categoria_fallaUncheckedCreateWithoutTicketsInput = {
    id_categoria?: number;
    nombre: string;
    sla_horas?: number | null;
};
export type categoria_fallaCreateOrConnectWithoutTicketsInput = {
    where: Prisma.categoria_fallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoria_fallaCreateWithoutTicketsInput, Prisma.categoria_fallaUncheckedCreateWithoutTicketsInput>;
};
export type categoria_fallaUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.categoria_fallaUpdateWithoutTicketsInput, Prisma.categoria_fallaUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.categoria_fallaCreateWithoutTicketsInput, Prisma.categoria_fallaUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.categoria_fallaWhereInput;
};
export type categoria_fallaUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.categoria_fallaWhereInput;
    data: Prisma.XOR<Prisma.categoria_fallaUpdateWithoutTicketsInput, Prisma.categoria_fallaUncheckedUpdateWithoutTicketsInput>;
};
export type categoria_fallaUpdateWithoutTicketsInput = {
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type categoria_fallaUncheckedUpdateWithoutTicketsInput = {
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre?: Prisma.StringFieldUpdateOperationsInput | string;
    sla_horas?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Categoria_fallaCountOutputType = {
    tickets: number;
};
export type Categoria_fallaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tickets?: boolean | Categoria_fallaCountOutputTypeCountTicketsArgs;
};
export type Categoria_fallaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Categoria_fallaCountOutputTypeSelect<ExtArgs> | null;
};
export type Categoria_fallaCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketWhereInput;
};
export type categoria_fallaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    sla_horas?: boolean;
    tickets?: boolean | Prisma.categoria_falla$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.Categoria_fallaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["categoria_falla"]>;
export type categoria_fallaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    sla_horas?: boolean;
}, ExtArgs["result"]["categoria_falla"]>;
export type categoria_fallaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_categoria?: boolean;
    nombre?: boolean;
    sla_horas?: boolean;
}, ExtArgs["result"]["categoria_falla"]>;
export type categoria_fallaSelectScalar = {
    id_categoria?: boolean;
    nombre?: boolean;
    sla_horas?: boolean;
};
export type categoria_fallaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_categoria" | "nombre" | "sla_horas", ExtArgs["result"]["categoria_falla"]>;
export type categoria_fallaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tickets?: boolean | Prisma.categoria_falla$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.Categoria_fallaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type categoria_fallaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type categoria_fallaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $categoria_fallaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "categoria_falla";
    objects: {
        tickets: Prisma.$ticketPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_categoria: number;
        nombre: string;
        sla_horas: number | null;
    }, ExtArgs["result"]["categoria_falla"]>;
    composites: {};
};
export type categoria_fallaGetPayload<S extends boolean | null | undefined | categoria_fallaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload, S>;
export type categoria_fallaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<categoria_fallaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Categoria_fallaCountAggregateInputType | true;
};
export interface categoria_fallaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['categoria_falla'];
        meta: {
            name: 'categoria_falla';
        };
    };
    findUnique<T extends categoria_fallaFindUniqueArgs>(args: Prisma.SelectSubset<T, categoria_fallaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends categoria_fallaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, categoria_fallaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends categoria_fallaFindFirstArgs>(args?: Prisma.SelectSubset<T, categoria_fallaFindFirstArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends categoria_fallaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, categoria_fallaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends categoria_fallaFindManyArgs>(args?: Prisma.SelectSubset<T, categoria_fallaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends categoria_fallaCreateArgs>(args: Prisma.SelectSubset<T, categoria_fallaCreateArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends categoria_fallaCreateManyArgs>(args?: Prisma.SelectSubset<T, categoria_fallaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends categoria_fallaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, categoria_fallaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends categoria_fallaDeleteArgs>(args: Prisma.SelectSubset<T, categoria_fallaDeleteArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends categoria_fallaUpdateArgs>(args: Prisma.SelectSubset<T, categoria_fallaUpdateArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends categoria_fallaDeleteManyArgs>(args?: Prisma.SelectSubset<T, categoria_fallaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends categoria_fallaUpdateManyArgs>(args: Prisma.SelectSubset<T, categoria_fallaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends categoria_fallaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, categoria_fallaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends categoria_fallaUpsertArgs>(args: Prisma.SelectSubset<T, categoria_fallaUpsertArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends categoria_fallaCountArgs>(args?: Prisma.Subset<T, categoria_fallaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Categoria_fallaCountAggregateOutputType> : number>;
    aggregate<T extends Categoria_fallaAggregateArgs>(args: Prisma.Subset<T, Categoria_fallaAggregateArgs>): Prisma.PrismaPromise<GetCategoria_fallaAggregateType<T>>;
    groupBy<T extends categoria_fallaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: categoria_fallaGroupByArgs['orderBy'];
    } : {
        orderBy?: categoria_fallaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, categoria_fallaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoria_fallaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: categoria_fallaFieldRefs;
}
export interface Prisma__categoria_fallaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tickets<T extends Prisma.categoria_falla$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoria_falla$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface categoria_fallaFieldRefs {
    readonly id_categoria: Prisma.FieldRef<"categoria_falla", 'Int'>;
    readonly nombre: Prisma.FieldRef<"categoria_falla", 'String'>;
    readonly sla_horas: Prisma.FieldRef<"categoria_falla", 'Int'>;
}
export type categoria_fallaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where: Prisma.categoria_fallaWhereUniqueInput;
};
export type categoria_fallaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where: Prisma.categoria_fallaWhereUniqueInput;
};
export type categoria_fallaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where?: Prisma.categoria_fallaWhereInput;
    orderBy?: Prisma.categoria_fallaOrderByWithRelationInput | Prisma.categoria_fallaOrderByWithRelationInput[];
    cursor?: Prisma.categoria_fallaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Categoria_fallaScalarFieldEnum | Prisma.Categoria_fallaScalarFieldEnum[];
};
export type categoria_fallaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where?: Prisma.categoria_fallaWhereInput;
    orderBy?: Prisma.categoria_fallaOrderByWithRelationInput | Prisma.categoria_fallaOrderByWithRelationInput[];
    cursor?: Prisma.categoria_fallaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Categoria_fallaScalarFieldEnum | Prisma.Categoria_fallaScalarFieldEnum[];
};
export type categoria_fallaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where?: Prisma.categoria_fallaWhereInput;
    orderBy?: Prisma.categoria_fallaOrderByWithRelationInput | Prisma.categoria_fallaOrderByWithRelationInput[];
    cursor?: Prisma.categoria_fallaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Categoria_fallaScalarFieldEnum | Prisma.Categoria_fallaScalarFieldEnum[];
};
export type categoria_fallaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoria_fallaCreateInput, Prisma.categoria_fallaUncheckedCreateInput>;
};
export type categoria_fallaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.categoria_fallaCreateManyInput | Prisma.categoria_fallaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoria_fallaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    data: Prisma.categoria_fallaCreateManyInput | Prisma.categoria_fallaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type categoria_fallaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoria_fallaUpdateInput, Prisma.categoria_fallaUncheckedUpdateInput>;
    where: Prisma.categoria_fallaWhereUniqueInput;
};
export type categoria_fallaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.categoria_fallaUpdateManyMutationInput, Prisma.categoria_fallaUncheckedUpdateManyInput>;
    where?: Prisma.categoria_fallaWhereInput;
    limit?: number;
};
export type categoria_fallaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.categoria_fallaUpdateManyMutationInput, Prisma.categoria_fallaUncheckedUpdateManyInput>;
    where?: Prisma.categoria_fallaWhereInput;
    limit?: number;
};
export type categoria_fallaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where: Prisma.categoria_fallaWhereUniqueInput;
    create: Prisma.XOR<Prisma.categoria_fallaCreateInput, Prisma.categoria_fallaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.categoria_fallaUpdateInput, Prisma.categoria_fallaUncheckedUpdateInput>;
};
export type categoria_fallaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
    where: Prisma.categoria_fallaWhereUniqueInput;
};
export type categoria_fallaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.categoria_fallaWhereInput;
    limit?: number;
};
export type categoria_falla$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithRelationInput | Prisma.ticketOrderByWithRelationInput[];
    cursor?: Prisma.ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type categoria_fallaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.categoria_fallaSelect<ExtArgs> | null;
    omit?: Prisma.categoria_fallaOmit<ExtArgs> | null;
    include?: Prisma.categoria_fallaInclude<ExtArgs> | null;
};
