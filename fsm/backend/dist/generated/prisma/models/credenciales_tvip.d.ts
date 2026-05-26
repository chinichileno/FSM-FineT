import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type credenciales_tvipModel = runtime.Types.Result.DefaultSelection<Prisma.$credenciales_tvipPayload>;
export type AggregateCredenciales_tvip = {
    _count: Credenciales_tvipCountAggregateOutputType | null;
    _avg: Credenciales_tvipAvgAggregateOutputType | null;
    _sum: Credenciales_tvipSumAggregateOutputType | null;
    _min: Credenciales_tvipMinAggregateOutputType | null;
    _max: Credenciales_tvipMaxAggregateOutputType | null;
};
export type Credenciales_tvipAvgAggregateOutputType = {
    id_credencial: number | null;
    id_contrato: number | null;
};
export type Credenciales_tvipSumAggregateOutputType = {
    id_credencial: number | null;
    id_contrato: number | null;
};
export type Credenciales_tvipMinAggregateOutputType = {
    id_credencial: number | null;
    id_contrato: number | null;
    usuario_tvip: string | null;
    password_tvip_hash: string | null;
    fecha_generacion: Date | null;
};
export type Credenciales_tvipMaxAggregateOutputType = {
    id_credencial: number | null;
    id_contrato: number | null;
    usuario_tvip: string | null;
    password_tvip_hash: string | null;
    fecha_generacion: Date | null;
};
export type Credenciales_tvipCountAggregateOutputType = {
    id_credencial: number;
    id_contrato: number;
    usuario_tvip: number;
    password_tvip_hash: number;
    fecha_generacion: number;
    _all: number;
};
export type Credenciales_tvipAvgAggregateInputType = {
    id_credencial?: true;
    id_contrato?: true;
};
export type Credenciales_tvipSumAggregateInputType = {
    id_credencial?: true;
    id_contrato?: true;
};
export type Credenciales_tvipMinAggregateInputType = {
    id_credencial?: true;
    id_contrato?: true;
    usuario_tvip?: true;
    password_tvip_hash?: true;
    fecha_generacion?: true;
};
export type Credenciales_tvipMaxAggregateInputType = {
    id_credencial?: true;
    id_contrato?: true;
    usuario_tvip?: true;
    password_tvip_hash?: true;
    fecha_generacion?: true;
};
export type Credenciales_tvipCountAggregateInputType = {
    id_credencial?: true;
    id_contrato?: true;
    usuario_tvip?: true;
    password_tvip_hash?: true;
    fecha_generacion?: true;
    _all?: true;
};
export type Credenciales_tvipAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.credenciales_tvipWhereInput;
    orderBy?: Prisma.credenciales_tvipOrderByWithRelationInput | Prisma.credenciales_tvipOrderByWithRelationInput[];
    cursor?: Prisma.credenciales_tvipWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Credenciales_tvipCountAggregateInputType;
    _avg?: Credenciales_tvipAvgAggregateInputType;
    _sum?: Credenciales_tvipSumAggregateInputType;
    _min?: Credenciales_tvipMinAggregateInputType;
    _max?: Credenciales_tvipMaxAggregateInputType;
};
export type GetCredenciales_tvipAggregateType<T extends Credenciales_tvipAggregateArgs> = {
    [P in keyof T & keyof AggregateCredenciales_tvip]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCredenciales_tvip[P]> : Prisma.GetScalarType<T[P], AggregateCredenciales_tvip[P]>;
};
export type credenciales_tvipGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.credenciales_tvipWhereInput;
    orderBy?: Prisma.credenciales_tvipOrderByWithAggregationInput | Prisma.credenciales_tvipOrderByWithAggregationInput[];
    by: Prisma.Credenciales_tvipScalarFieldEnum[] | Prisma.Credenciales_tvipScalarFieldEnum;
    having?: Prisma.credenciales_tvipScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Credenciales_tvipCountAggregateInputType | true;
    _avg?: Credenciales_tvipAvgAggregateInputType;
    _sum?: Credenciales_tvipSumAggregateInputType;
    _min?: Credenciales_tvipMinAggregateInputType;
    _max?: Credenciales_tvipMaxAggregateInputType;
};
export type Credenciales_tvipGroupByOutputType = {
    id_credencial: number;
    id_contrato: number | null;
    usuario_tvip: string | null;
    password_tvip_hash: string | null;
    fecha_generacion: Date;
    _count: Credenciales_tvipCountAggregateOutputType | null;
    _avg: Credenciales_tvipAvgAggregateOutputType | null;
    _sum: Credenciales_tvipSumAggregateOutputType | null;
    _min: Credenciales_tvipMinAggregateOutputType | null;
    _max: Credenciales_tvipMaxAggregateOutputType | null;
};
export type GetCredenciales_tvipGroupByPayload<T extends credenciales_tvipGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Credenciales_tvipGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Credenciales_tvipGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Credenciales_tvipGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Credenciales_tvipGroupByOutputType[P]>;
}>>;
export type credenciales_tvipWhereInput = {
    AND?: Prisma.credenciales_tvipWhereInput | Prisma.credenciales_tvipWhereInput[];
    OR?: Prisma.credenciales_tvipWhereInput[];
    NOT?: Prisma.credenciales_tvipWhereInput | Prisma.credenciales_tvipWhereInput[];
    id_credencial?: Prisma.IntFilter<"credenciales_tvip"> | number;
    id_contrato?: Prisma.IntNullableFilter<"credenciales_tvip"> | number | null;
    usuario_tvip?: Prisma.StringNullableFilter<"credenciales_tvip"> | string | null;
    password_tvip_hash?: Prisma.StringNullableFilter<"credenciales_tvip"> | string | null;
    fecha_generacion?: Prisma.DateTimeFilter<"credenciales_tvip"> | Date | string;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
};
export type credenciales_tvipOrderByWithRelationInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario_tvip?: Prisma.SortOrderInput | Prisma.SortOrder;
    password_tvip_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_generacion?: Prisma.SortOrder;
    contrato?: Prisma.contratoOrderByWithRelationInput;
};
export type credenciales_tvipWhereUniqueInput = Prisma.AtLeast<{
    id_credencial?: number;
    id_contrato?: number;
    AND?: Prisma.credenciales_tvipWhereInput | Prisma.credenciales_tvipWhereInput[];
    OR?: Prisma.credenciales_tvipWhereInput[];
    NOT?: Prisma.credenciales_tvipWhereInput | Prisma.credenciales_tvipWhereInput[];
    usuario_tvip?: Prisma.StringNullableFilter<"credenciales_tvip"> | string | null;
    password_tvip_hash?: Prisma.StringNullableFilter<"credenciales_tvip"> | string | null;
    fecha_generacion?: Prisma.DateTimeFilter<"credenciales_tvip"> | Date | string;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
}, "id_credencial" | "id_contrato">;
export type credenciales_tvipOrderByWithAggregationInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario_tvip?: Prisma.SortOrderInput | Prisma.SortOrder;
    password_tvip_hash?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_generacion?: Prisma.SortOrder;
    _count?: Prisma.credenciales_tvipCountOrderByAggregateInput;
    _avg?: Prisma.credenciales_tvipAvgOrderByAggregateInput;
    _max?: Prisma.credenciales_tvipMaxOrderByAggregateInput;
    _min?: Prisma.credenciales_tvipMinOrderByAggregateInput;
    _sum?: Prisma.credenciales_tvipSumOrderByAggregateInput;
};
export type credenciales_tvipScalarWhereWithAggregatesInput = {
    AND?: Prisma.credenciales_tvipScalarWhereWithAggregatesInput | Prisma.credenciales_tvipScalarWhereWithAggregatesInput[];
    OR?: Prisma.credenciales_tvipScalarWhereWithAggregatesInput[];
    NOT?: Prisma.credenciales_tvipScalarWhereWithAggregatesInput | Prisma.credenciales_tvipScalarWhereWithAggregatesInput[];
    id_credencial?: Prisma.IntWithAggregatesFilter<"credenciales_tvip"> | number;
    id_contrato?: Prisma.IntNullableWithAggregatesFilter<"credenciales_tvip"> | number | null;
    usuario_tvip?: Prisma.StringNullableWithAggregatesFilter<"credenciales_tvip"> | string | null;
    password_tvip_hash?: Prisma.StringNullableWithAggregatesFilter<"credenciales_tvip"> | string | null;
    fecha_generacion?: Prisma.DateTimeWithAggregatesFilter<"credenciales_tvip"> | Date | string;
};
export type credenciales_tvipCreateInput = {
    usuario_tvip?: string | null;
    password_tvip_hash?: string | null;
    fecha_generacion?: Date | string;
    contrato?: Prisma.contratoCreateNestedOneWithoutCredenciales_tvipInput;
};
export type credenciales_tvipUncheckedCreateInput = {
    id_credencial?: number;
    id_contrato?: number | null;
    usuario_tvip?: string | null;
    password_tvip_hash?: string | null;
    fecha_generacion?: Date | string;
};
export type credenciales_tvipUpdateInput = {
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    contrato?: Prisma.contratoUpdateOneWithoutCredenciales_tvipNestedInput;
};
export type credenciales_tvipUncheckedUpdateInput = {
    id_credencial?: Prisma.IntFieldUpdateOperationsInput | number;
    id_contrato?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type credenciales_tvipCreateManyInput = {
    id_credencial?: number;
    id_contrato?: number | null;
    usuario_tvip?: string | null;
    password_tvip_hash?: string | null;
    fecha_generacion?: Date | string;
};
export type credenciales_tvipUpdateManyMutationInput = {
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type credenciales_tvipUncheckedUpdateManyInput = {
    id_credencial?: Prisma.IntFieldUpdateOperationsInput | number;
    id_contrato?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Credenciales_tvipNullableScalarRelationFilter = {
    is?: Prisma.credenciales_tvipWhereInput | null;
    isNot?: Prisma.credenciales_tvipWhereInput | null;
};
export type credenciales_tvipCountOrderByAggregateInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    usuario_tvip?: Prisma.SortOrder;
    password_tvip_hash?: Prisma.SortOrder;
    fecha_generacion?: Prisma.SortOrder;
};
export type credenciales_tvipAvgOrderByAggregateInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
};
export type credenciales_tvipMaxOrderByAggregateInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    usuario_tvip?: Prisma.SortOrder;
    password_tvip_hash?: Prisma.SortOrder;
    fecha_generacion?: Prisma.SortOrder;
};
export type credenciales_tvipMinOrderByAggregateInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    usuario_tvip?: Prisma.SortOrder;
    password_tvip_hash?: Prisma.SortOrder;
    fecha_generacion?: Prisma.SortOrder;
};
export type credenciales_tvipSumOrderByAggregateInput = {
    id_credencial?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
};
export type credenciales_tvipCreateNestedOneWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.credenciales_tvipCreateOrConnectWithoutContratoInput;
    connect?: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.credenciales_tvipCreateOrConnectWithoutContratoInput;
    connect?: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipUpdateOneWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.credenciales_tvipCreateOrConnectWithoutContratoInput;
    upsert?: Prisma.credenciales_tvipUpsertWithoutContratoInput;
    disconnect?: Prisma.credenciales_tvipWhereInput | boolean;
    delete?: Prisma.credenciales_tvipWhereInput | boolean;
    connect?: Prisma.credenciales_tvipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.credenciales_tvipUpdateToOneWithWhereWithoutContratoInput, Prisma.credenciales_tvipUpdateWithoutContratoInput>, Prisma.credenciales_tvipUncheckedUpdateWithoutContratoInput>;
};
export type credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
    connectOrCreate?: Prisma.credenciales_tvipCreateOrConnectWithoutContratoInput;
    upsert?: Prisma.credenciales_tvipUpsertWithoutContratoInput;
    disconnect?: Prisma.credenciales_tvipWhereInput | boolean;
    delete?: Prisma.credenciales_tvipWhereInput | boolean;
    connect?: Prisma.credenciales_tvipWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.credenciales_tvipUpdateToOneWithWhereWithoutContratoInput, Prisma.credenciales_tvipUpdateWithoutContratoInput>, Prisma.credenciales_tvipUncheckedUpdateWithoutContratoInput>;
};
export type credenciales_tvipCreateWithoutContratoInput = {
    usuario_tvip?: string | null;
    password_tvip_hash?: string | null;
    fecha_generacion?: Date | string;
};
export type credenciales_tvipUncheckedCreateWithoutContratoInput = {
    id_credencial?: number;
    usuario_tvip?: string | null;
    password_tvip_hash?: string | null;
    fecha_generacion?: Date | string;
};
export type credenciales_tvipCreateOrConnectWithoutContratoInput = {
    where: Prisma.credenciales_tvipWhereUniqueInput;
    create: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
};
export type credenciales_tvipUpsertWithoutContratoInput = {
    update: Prisma.XOR<Prisma.credenciales_tvipUpdateWithoutContratoInput, Prisma.credenciales_tvipUncheckedUpdateWithoutContratoInput>;
    create: Prisma.XOR<Prisma.credenciales_tvipCreateWithoutContratoInput, Prisma.credenciales_tvipUncheckedCreateWithoutContratoInput>;
    where?: Prisma.credenciales_tvipWhereInput;
};
export type credenciales_tvipUpdateToOneWithWhereWithoutContratoInput = {
    where?: Prisma.credenciales_tvipWhereInput;
    data: Prisma.XOR<Prisma.credenciales_tvipUpdateWithoutContratoInput, Prisma.credenciales_tvipUncheckedUpdateWithoutContratoInput>;
};
export type credenciales_tvipUpdateWithoutContratoInput = {
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type credenciales_tvipUncheckedUpdateWithoutContratoInput = {
    id_credencial?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_tvip?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    password_tvip_hash?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_generacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type credenciales_tvipSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_credencial?: boolean;
    id_contrato?: boolean;
    usuario_tvip?: boolean;
    password_tvip_hash?: boolean;
    fecha_generacion?: boolean;
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
}, ExtArgs["result"]["credenciales_tvip"]>;
export type credenciales_tvipSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_credencial?: boolean;
    id_contrato?: boolean;
    usuario_tvip?: boolean;
    password_tvip_hash?: boolean;
    fecha_generacion?: boolean;
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
}, ExtArgs["result"]["credenciales_tvip"]>;
export type credenciales_tvipSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_credencial?: boolean;
    id_contrato?: boolean;
    usuario_tvip?: boolean;
    password_tvip_hash?: boolean;
    fecha_generacion?: boolean;
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
}, ExtArgs["result"]["credenciales_tvip"]>;
export type credenciales_tvipSelectScalar = {
    id_credencial?: boolean;
    id_contrato?: boolean;
    usuario_tvip?: boolean;
    password_tvip_hash?: boolean;
    fecha_generacion?: boolean;
};
export type credenciales_tvipOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_credencial" | "id_contrato" | "usuario_tvip" | "password_tvip_hash" | "fecha_generacion", ExtArgs["result"]["credenciales_tvip"]>;
export type credenciales_tvipInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
};
export type credenciales_tvipIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
};
export type credenciales_tvipIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.credenciales_tvip$contratoArgs<ExtArgs>;
};
export type $credenciales_tvipPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "credenciales_tvip";
    objects: {
        contrato: Prisma.$contratoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_credencial: number;
        id_contrato: number | null;
        usuario_tvip: string | null;
        password_tvip_hash: string | null;
        fecha_generacion: Date;
    }, ExtArgs["result"]["credenciales_tvip"]>;
    composites: {};
};
export type credenciales_tvipGetPayload<S extends boolean | null | undefined | credenciales_tvipDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload, S>;
export type credenciales_tvipCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<credenciales_tvipFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Credenciales_tvipCountAggregateInputType | true;
};
export interface credenciales_tvipDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['credenciales_tvip'];
        meta: {
            name: 'credenciales_tvip';
        };
    };
    findUnique<T extends credenciales_tvipFindUniqueArgs>(args: Prisma.SelectSubset<T, credenciales_tvipFindUniqueArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends credenciales_tvipFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, credenciales_tvipFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends credenciales_tvipFindFirstArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipFindFirstArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends credenciales_tvipFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends credenciales_tvipFindManyArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends credenciales_tvipCreateArgs>(args: Prisma.SelectSubset<T, credenciales_tvipCreateArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends credenciales_tvipCreateManyArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends credenciales_tvipCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends credenciales_tvipDeleteArgs>(args: Prisma.SelectSubset<T, credenciales_tvipDeleteArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends credenciales_tvipUpdateArgs>(args: Prisma.SelectSubset<T, credenciales_tvipUpdateArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends credenciales_tvipDeleteManyArgs>(args?: Prisma.SelectSubset<T, credenciales_tvipDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends credenciales_tvipUpdateManyArgs>(args: Prisma.SelectSubset<T, credenciales_tvipUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends credenciales_tvipUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, credenciales_tvipUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends credenciales_tvipUpsertArgs>(args: Prisma.SelectSubset<T, credenciales_tvipUpsertArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends credenciales_tvipCountArgs>(args?: Prisma.Subset<T, credenciales_tvipCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Credenciales_tvipCountAggregateOutputType> : number>;
    aggregate<T extends Credenciales_tvipAggregateArgs>(args: Prisma.Subset<T, Credenciales_tvipAggregateArgs>): Prisma.PrismaPromise<GetCredenciales_tvipAggregateType<T>>;
    groupBy<T extends credenciales_tvipGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: credenciales_tvipGroupByArgs['orderBy'];
    } : {
        orderBy?: credenciales_tvipGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, credenciales_tvipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCredenciales_tvipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: credenciales_tvipFieldRefs;
}
export interface Prisma__credenciales_tvipClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contrato<T extends Prisma.credenciales_tvip$contratoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.credenciales_tvip$contratoArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface credenciales_tvipFieldRefs {
    readonly id_credencial: Prisma.FieldRef<"credenciales_tvip", 'Int'>;
    readonly id_contrato: Prisma.FieldRef<"credenciales_tvip", 'Int'>;
    readonly usuario_tvip: Prisma.FieldRef<"credenciales_tvip", 'String'>;
    readonly password_tvip_hash: Prisma.FieldRef<"credenciales_tvip", 'String'>;
    readonly fecha_generacion: Prisma.FieldRef<"credenciales_tvip", 'DateTime'>;
}
export type credenciales_tvipFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where?: Prisma.credenciales_tvipWhereInput;
    orderBy?: Prisma.credenciales_tvipOrderByWithRelationInput | Prisma.credenciales_tvipOrderByWithRelationInput[];
    cursor?: Prisma.credenciales_tvipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Credenciales_tvipScalarFieldEnum | Prisma.Credenciales_tvipScalarFieldEnum[];
};
export type credenciales_tvipFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where?: Prisma.credenciales_tvipWhereInput;
    orderBy?: Prisma.credenciales_tvipOrderByWithRelationInput | Prisma.credenciales_tvipOrderByWithRelationInput[];
    cursor?: Prisma.credenciales_tvipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Credenciales_tvipScalarFieldEnum | Prisma.Credenciales_tvipScalarFieldEnum[];
};
export type credenciales_tvipFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where?: Prisma.credenciales_tvipWhereInput;
    orderBy?: Prisma.credenciales_tvipOrderByWithRelationInput | Prisma.credenciales_tvipOrderByWithRelationInput[];
    cursor?: Prisma.credenciales_tvipWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Credenciales_tvipScalarFieldEnum | Prisma.Credenciales_tvipScalarFieldEnum[];
};
export type credenciales_tvipCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.credenciales_tvipCreateInput, Prisma.credenciales_tvipUncheckedCreateInput>;
};
export type credenciales_tvipCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.credenciales_tvipCreateManyInput | Prisma.credenciales_tvipCreateManyInput[];
    skipDuplicates?: boolean;
};
export type credenciales_tvipCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    data: Prisma.credenciales_tvipCreateManyInput | Prisma.credenciales_tvipCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.credenciales_tvipIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type credenciales_tvipUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.credenciales_tvipUpdateInput, Prisma.credenciales_tvipUncheckedUpdateInput>;
    where: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.credenciales_tvipUpdateManyMutationInput, Prisma.credenciales_tvipUncheckedUpdateManyInput>;
    where?: Prisma.credenciales_tvipWhereInput;
    limit?: number;
};
export type credenciales_tvipUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.credenciales_tvipUpdateManyMutationInput, Prisma.credenciales_tvipUncheckedUpdateManyInput>;
    where?: Prisma.credenciales_tvipWhereInput;
    limit?: number;
    include?: Prisma.credenciales_tvipIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type credenciales_tvipUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where: Prisma.credenciales_tvipWhereUniqueInput;
    create: Prisma.XOR<Prisma.credenciales_tvipCreateInput, Prisma.credenciales_tvipUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.credenciales_tvipUpdateInput, Prisma.credenciales_tvipUncheckedUpdateInput>;
};
export type credenciales_tvipDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where: Prisma.credenciales_tvipWhereUniqueInput;
};
export type credenciales_tvipDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.credenciales_tvipWhereInput;
    limit?: number;
};
export type credenciales_tvip$contratoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
};
export type credenciales_tvipDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
};
