import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type proveedorModel = runtime.Types.Result.DefaultSelection<Prisma.$proveedorPayload>;
export type AggregateProveedor = {
    _count: ProveedorCountAggregateOutputType | null;
    _avg: ProveedorAvgAggregateOutputType | null;
    _sum: ProveedorSumAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
export type ProveedorAvgAggregateOutputType = {
    id_proveedor: number | null;
};
export type ProveedorSumAggregateOutputType = {
    id_proveedor: number | null;
};
export type ProveedorMinAggregateOutputType = {
    id_proveedor: number | null;
    nombre_comercial: string | null;
    rut_proveedor: string | null;
    contacto: string | null;
    telefono: string | null;
    email: string | null;
};
export type ProveedorMaxAggregateOutputType = {
    id_proveedor: number | null;
    nombre_comercial: string | null;
    rut_proveedor: string | null;
    contacto: string | null;
    telefono: string | null;
    email: string | null;
};
export type ProveedorCountAggregateOutputType = {
    id_proveedor: number;
    nombre_comercial: number;
    rut_proveedor: number;
    contacto: number;
    telefono: number;
    email: number;
    _all: number;
};
export type ProveedorAvgAggregateInputType = {
    id_proveedor?: true;
};
export type ProveedorSumAggregateInputType = {
    id_proveedor?: true;
};
export type ProveedorMinAggregateInputType = {
    id_proveedor?: true;
    nombre_comercial?: true;
    rut_proveedor?: true;
    contacto?: true;
    telefono?: true;
    email?: true;
};
export type ProveedorMaxAggregateInputType = {
    id_proveedor?: true;
    nombre_comercial?: true;
    rut_proveedor?: true;
    contacto?: true;
    telefono?: true;
    email?: true;
};
export type ProveedorCountAggregateInputType = {
    id_proveedor?: true;
    nombre_comercial?: true;
    rut_proveedor?: true;
    contacto?: true;
    telefono?: true;
    email?: true;
    _all?: true;
};
export type ProveedorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    cursor?: Prisma.proveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProveedorCountAggregateInputType;
    _avg?: ProveedorAvgAggregateInputType;
    _sum?: ProveedorSumAggregateInputType;
    _min?: ProveedorMinAggregateInputType;
    _max?: ProveedorMaxAggregateInputType;
};
export type GetProveedorAggregateType<T extends ProveedorAggregateArgs> = {
    [P in keyof T & keyof AggregateProveedor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProveedor[P]> : Prisma.GetScalarType<T[P], AggregateProveedor[P]>;
};
export type proveedorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithAggregationInput | Prisma.proveedorOrderByWithAggregationInput[];
    by: Prisma.ProveedorScalarFieldEnum[] | Prisma.ProveedorScalarFieldEnum;
    having?: Prisma.proveedorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProveedorCountAggregateInputType | true;
    _avg?: ProveedorAvgAggregateInputType;
    _sum?: ProveedorSumAggregateInputType;
    _min?: ProveedorMinAggregateInputType;
    _max?: ProveedorMaxAggregateInputType;
};
export type ProveedorGroupByOutputType = {
    id_proveedor: number;
    nombre_comercial: string;
    rut_proveedor: string | null;
    contacto: string | null;
    telefono: string | null;
    email: string | null;
    _count: ProveedorCountAggregateOutputType | null;
    _avg: ProveedorAvgAggregateOutputType | null;
    _sum: ProveedorSumAggregateOutputType | null;
    _min: ProveedorMinAggregateOutputType | null;
    _max: ProveedorMaxAggregateOutputType | null;
};
export type GetProveedorGroupByPayload<T extends proveedorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProveedorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProveedorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProveedorGroupByOutputType[P]>;
}>>;
export type proveedorWhereInput = {
    AND?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    OR?: Prisma.proveedorWhereInput[];
    NOT?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    id_proveedor?: Prisma.IntFilter<"proveedor"> | number;
    nombre_comercial?: Prisma.StringFilter<"proveedor"> | string;
    rut_proveedor?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    contacto?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    ordenes_ingreso?: Prisma.Orden_ingresoListRelationFilter;
};
export type proveedorOrderByWithRelationInput = {
    id_proveedor?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    rut_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    contacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    ordenes_ingreso?: Prisma.orden_ingresoOrderByRelationAggregateInput;
};
export type proveedorWhereUniqueInput = Prisma.AtLeast<{
    id_proveedor?: number;
    AND?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    OR?: Prisma.proveedorWhereInput[];
    NOT?: Prisma.proveedorWhereInput | Prisma.proveedorWhereInput[];
    nombre_comercial?: Prisma.StringFilter<"proveedor"> | string;
    rut_proveedor?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    contacto?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableFilter<"proveedor"> | string | null;
    ordenes_ingreso?: Prisma.Orden_ingresoListRelationFilter;
}, "id_proveedor">;
export type proveedorOrderByWithAggregationInput = {
    id_proveedor?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    rut_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    contacto?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.proveedorCountOrderByAggregateInput;
    _avg?: Prisma.proveedorAvgOrderByAggregateInput;
    _max?: Prisma.proveedorMaxOrderByAggregateInput;
    _min?: Prisma.proveedorMinOrderByAggregateInput;
    _sum?: Prisma.proveedorSumOrderByAggregateInput;
};
export type proveedorScalarWhereWithAggregatesInput = {
    AND?: Prisma.proveedorScalarWhereWithAggregatesInput | Prisma.proveedorScalarWhereWithAggregatesInput[];
    OR?: Prisma.proveedorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.proveedorScalarWhereWithAggregatesInput | Prisma.proveedorScalarWhereWithAggregatesInput[];
    id_proveedor?: Prisma.IntWithAggregatesFilter<"proveedor"> | number;
    nombre_comercial?: Prisma.StringWithAggregatesFilter<"proveedor"> | string;
    rut_proveedor?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    contacto?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"proveedor"> | string | null;
};
export type proveedorCreateInput = {
    nombre_comercial: string;
    rut_proveedor?: string | null;
    contacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    ordenes_ingreso?: Prisma.orden_ingresoCreateNestedManyWithoutProveedorInput;
};
export type proveedorUncheckedCreateInput = {
    id_proveedor?: number;
    nombre_comercial: string;
    rut_proveedor?: string | null;
    contacto?: string | null;
    telefono?: string | null;
    email?: string | null;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedCreateNestedManyWithoutProveedorInput;
};
export type proveedorUpdateInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordenes_ingreso?: Prisma.orden_ingresoUpdateManyWithoutProveedorNestedInput;
};
export type proveedorUncheckedUpdateInput = {
    id_proveedor?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ordenes_ingreso?: Prisma.orden_ingresoUncheckedUpdateManyWithoutProveedorNestedInput;
};
export type proveedorCreateManyInput = {
    id_proveedor?: number;
    nombre_comercial: string;
    rut_proveedor?: string | null;
    contacto?: string | null;
    telefono?: string | null;
    email?: string | null;
};
export type proveedorUpdateManyMutationInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type proveedorUncheckedUpdateManyInput = {
    id_proveedor?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type proveedorCountOrderByAggregateInput = {
    id_proveedor?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    rut_proveedor?: Prisma.SortOrder;
    contacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type proveedorAvgOrderByAggregateInput = {
    id_proveedor?: Prisma.SortOrder;
};
export type proveedorMaxOrderByAggregateInput = {
    id_proveedor?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    rut_proveedor?: Prisma.SortOrder;
    contacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type proveedorMinOrderByAggregateInput = {
    id_proveedor?: Prisma.SortOrder;
    nombre_comercial?: Prisma.SortOrder;
    rut_proveedor?: Prisma.SortOrder;
    contacto?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
};
export type proveedorSumOrderByAggregateInput = {
    id_proveedor?: Prisma.SortOrder;
};
export type ProveedorNullableScalarRelationFilter = {
    is?: Prisma.proveedorWhereInput | null;
    isNot?: Prisma.proveedorWhereInput | null;
};
export type proveedorCreateNestedOneWithoutOrdenes_ingresoInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedCreateWithoutOrdenes_ingresoInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutOrdenes_ingresoInput;
    connect?: Prisma.proveedorWhereUniqueInput;
};
export type proveedorUpdateOneWithoutOrdenes_ingresoNestedInput = {
    create?: Prisma.XOR<Prisma.proveedorCreateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedCreateWithoutOrdenes_ingresoInput>;
    connectOrCreate?: Prisma.proveedorCreateOrConnectWithoutOrdenes_ingresoInput;
    upsert?: Prisma.proveedorUpsertWithoutOrdenes_ingresoInput;
    disconnect?: Prisma.proveedorWhereInput | boolean;
    delete?: Prisma.proveedorWhereInput | boolean;
    connect?: Prisma.proveedorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.proveedorUpdateToOneWithWhereWithoutOrdenes_ingresoInput, Prisma.proveedorUpdateWithoutOrdenes_ingresoInput>, Prisma.proveedorUncheckedUpdateWithoutOrdenes_ingresoInput>;
};
export type proveedorCreateWithoutOrdenes_ingresoInput = {
    nombre_comercial: string;
    rut_proveedor?: string | null;
    contacto?: string | null;
    telefono?: string | null;
    email?: string | null;
};
export type proveedorUncheckedCreateWithoutOrdenes_ingresoInput = {
    id_proveedor?: number;
    nombre_comercial: string;
    rut_proveedor?: string | null;
    contacto?: string | null;
    telefono?: string | null;
    email?: string | null;
};
export type proveedorCreateOrConnectWithoutOrdenes_ingresoInput = {
    where: Prisma.proveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedCreateWithoutOrdenes_ingresoInput>;
};
export type proveedorUpsertWithoutOrdenes_ingresoInput = {
    update: Prisma.XOR<Prisma.proveedorUpdateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedUpdateWithoutOrdenes_ingresoInput>;
    create: Prisma.XOR<Prisma.proveedorCreateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedCreateWithoutOrdenes_ingresoInput>;
    where?: Prisma.proveedorWhereInput;
};
export type proveedorUpdateToOneWithWhereWithoutOrdenes_ingresoInput = {
    where?: Prisma.proveedorWhereInput;
    data: Prisma.XOR<Prisma.proveedorUpdateWithoutOrdenes_ingresoInput, Prisma.proveedorUncheckedUpdateWithoutOrdenes_ingresoInput>;
};
export type proveedorUpdateWithoutOrdenes_ingresoInput = {
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type proveedorUncheckedUpdateWithoutOrdenes_ingresoInput = {
    id_proveedor?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_comercial?: Prisma.StringFieldUpdateOperationsInput | string;
    rut_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contacto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ProveedorCountOutputType = {
    ordenes_ingreso: number;
};
export type ProveedorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenes_ingreso?: boolean | ProveedorCountOutputTypeCountOrdenes_ingresoArgs;
};
export type ProveedorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProveedorCountOutputTypeSelect<ExtArgs> | null;
};
export type ProveedorCountOutputTypeCountOrdenes_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_ingresoWhereInput;
};
export type proveedorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_proveedor?: boolean;
    nombre_comercial?: boolean;
    rut_proveedor?: boolean;
    contacto?: boolean;
    telefono?: boolean;
    email?: boolean;
    ordenes_ingreso?: boolean | Prisma.proveedor$ordenes_ingresoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["proveedor"]>;
export type proveedorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_proveedor?: boolean;
    nombre_comercial?: boolean;
    rut_proveedor?: boolean;
    contacto?: boolean;
    telefono?: boolean;
    email?: boolean;
}, ExtArgs["result"]["proveedor"]>;
export type proveedorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_proveedor?: boolean;
    nombre_comercial?: boolean;
    rut_proveedor?: boolean;
    contacto?: boolean;
    telefono?: boolean;
    email?: boolean;
}, ExtArgs["result"]["proveedor"]>;
export type proveedorSelectScalar = {
    id_proveedor?: boolean;
    nombre_comercial?: boolean;
    rut_proveedor?: boolean;
    contacto?: boolean;
    telefono?: boolean;
    email?: boolean;
};
export type proveedorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_proveedor" | "nombre_comercial" | "rut_proveedor" | "contacto" | "telefono" | "email", ExtArgs["result"]["proveedor"]>;
export type proveedorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordenes_ingreso?: boolean | Prisma.proveedor$ordenes_ingresoArgs<ExtArgs>;
    _count?: boolean | Prisma.ProveedorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type proveedorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type proveedorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $proveedorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "proveedor";
    objects: {
        ordenes_ingreso: Prisma.$orden_ingresoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_proveedor: number;
        nombre_comercial: string;
        rut_proveedor: string | null;
        contacto: string | null;
        telefono: string | null;
        email: string | null;
    }, ExtArgs["result"]["proveedor"]>;
    composites: {};
};
export type proveedorGetPayload<S extends boolean | null | undefined | proveedorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$proveedorPayload, S>;
export type proveedorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<proveedorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProveedorCountAggregateInputType | true;
};
export interface proveedorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['proveedor'];
        meta: {
            name: 'proveedor';
        };
    };
    findUnique<T extends proveedorFindUniqueArgs>(args: Prisma.SelectSubset<T, proveedorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends proveedorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, proveedorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends proveedorFindFirstArgs>(args?: Prisma.SelectSubset<T, proveedorFindFirstArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends proveedorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, proveedorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends proveedorFindManyArgs>(args?: Prisma.SelectSubset<T, proveedorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends proveedorCreateArgs>(args: Prisma.SelectSubset<T, proveedorCreateArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends proveedorCreateManyArgs>(args?: Prisma.SelectSubset<T, proveedorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends proveedorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, proveedorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends proveedorDeleteArgs>(args: Prisma.SelectSubset<T, proveedorDeleteArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends proveedorUpdateArgs>(args: Prisma.SelectSubset<T, proveedorUpdateArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends proveedorDeleteManyArgs>(args?: Prisma.SelectSubset<T, proveedorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends proveedorUpdateManyArgs>(args: Prisma.SelectSubset<T, proveedorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends proveedorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, proveedorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends proveedorUpsertArgs>(args: Prisma.SelectSubset<T, proveedorUpsertArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends proveedorCountArgs>(args?: Prisma.Subset<T, proveedorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProveedorCountAggregateOutputType> : number>;
    aggregate<T extends ProveedorAggregateArgs>(args: Prisma.Subset<T, ProveedorAggregateArgs>): Prisma.PrismaPromise<GetProveedorAggregateType<T>>;
    groupBy<T extends proveedorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: proveedorGroupByArgs['orderBy'];
    } : {
        orderBy?: proveedorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, proveedorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProveedorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: proveedorFieldRefs;
}
export interface Prisma__proveedorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordenes_ingreso<T extends Prisma.proveedor$ordenes_ingresoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.proveedor$ordenes_ingresoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface proveedorFieldRefs {
    readonly id_proveedor: Prisma.FieldRef<"proveedor", 'Int'>;
    readonly nombre_comercial: Prisma.FieldRef<"proveedor", 'String'>;
    readonly rut_proveedor: Prisma.FieldRef<"proveedor", 'String'>;
    readonly contacto: Prisma.FieldRef<"proveedor", 'String'>;
    readonly telefono: Prisma.FieldRef<"proveedor", 'String'>;
    readonly email: Prisma.FieldRef<"proveedor", 'String'>;
}
export type proveedorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where: Prisma.proveedorWhereUniqueInput;
};
export type proveedorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where: Prisma.proveedorWhereUniqueInput;
};
export type proveedorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    cursor?: Prisma.proveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type proveedorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    cursor?: Prisma.proveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type proveedorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where?: Prisma.proveedorWhereInput;
    orderBy?: Prisma.proveedorOrderByWithRelationInput | Prisma.proveedorOrderByWithRelationInput[];
    cursor?: Prisma.proveedorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProveedorScalarFieldEnum | Prisma.ProveedorScalarFieldEnum[];
};
export type proveedorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.proveedorCreateInput, Prisma.proveedorUncheckedCreateInput>;
};
export type proveedorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.proveedorCreateManyInput | Prisma.proveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type proveedorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    data: Prisma.proveedorCreateManyInput | Prisma.proveedorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type proveedorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.proveedorUpdateInput, Prisma.proveedorUncheckedUpdateInput>;
    where: Prisma.proveedorWhereUniqueInput;
};
export type proveedorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.proveedorUpdateManyMutationInput, Prisma.proveedorUncheckedUpdateManyInput>;
    where?: Prisma.proveedorWhereInput;
    limit?: number;
};
export type proveedorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.proveedorUpdateManyMutationInput, Prisma.proveedorUncheckedUpdateManyInput>;
    where?: Prisma.proveedorWhereInput;
    limit?: number;
};
export type proveedorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where: Prisma.proveedorWhereUniqueInput;
    create: Prisma.XOR<Prisma.proveedorCreateInput, Prisma.proveedorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.proveedorUpdateInput, Prisma.proveedorUncheckedUpdateInput>;
};
export type proveedorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where: Prisma.proveedorWhereUniqueInput;
};
export type proveedorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.proveedorWhereInput;
    limit?: number;
};
export type proveedor$ordenes_ingresoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.orden_ingresoWhereInput;
    orderBy?: Prisma.orden_ingresoOrderByWithRelationInput | Prisma.orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Orden_ingresoScalarFieldEnum | Prisma.Orden_ingresoScalarFieldEnum[];
};
export type proveedorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
};
