import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mensaje_botModel = runtime.Types.Result.DefaultSelection<Prisma.$mensaje_botPayload>;
export type AggregateMensaje_bot = {
    _count: Mensaje_botCountAggregateOutputType | null;
    _avg: Mensaje_botAvgAggregateOutputType | null;
    _sum: Mensaje_botSumAggregateOutputType | null;
    _min: Mensaje_botMinAggregateOutputType | null;
    _max: Mensaje_botMaxAggregateOutputType | null;
};
export type Mensaje_botAvgAggregateOutputType = {
    id_mensaje: number | null;
    id_conversacion: number | null;
};
export type Mensaje_botSumAggregateOutputType = {
    id_mensaje: bigint | null;
    id_conversacion: number | null;
};
export type Mensaje_botMinAggregateOutputType = {
    id_mensaje: bigint | null;
    id_conversacion: number | null;
    rol: string | null;
    contenido: string | null;
    timestamp: Date | null;
    datos_sensibles: boolean | null;
};
export type Mensaje_botMaxAggregateOutputType = {
    id_mensaje: bigint | null;
    id_conversacion: number | null;
    rol: string | null;
    contenido: string | null;
    timestamp: Date | null;
    datos_sensibles: boolean | null;
};
export type Mensaje_botCountAggregateOutputType = {
    id_mensaje: number;
    id_conversacion: number;
    rol: number;
    contenido: number;
    timestamp: number;
    datos_sensibles: number;
    _all: number;
};
export type Mensaje_botAvgAggregateInputType = {
    id_mensaje?: true;
    id_conversacion?: true;
};
export type Mensaje_botSumAggregateInputType = {
    id_mensaje?: true;
    id_conversacion?: true;
};
export type Mensaje_botMinAggregateInputType = {
    id_mensaje?: true;
    id_conversacion?: true;
    rol?: true;
    contenido?: true;
    timestamp?: true;
    datos_sensibles?: true;
};
export type Mensaje_botMaxAggregateInputType = {
    id_mensaje?: true;
    id_conversacion?: true;
    rol?: true;
    contenido?: true;
    timestamp?: true;
    datos_sensibles?: true;
};
export type Mensaje_botCountAggregateInputType = {
    id_mensaje?: true;
    id_conversacion?: true;
    rol?: true;
    contenido?: true;
    timestamp?: true;
    datos_sensibles?: true;
    _all?: true;
};
export type Mensaje_botAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithRelationInput | Prisma.mensaje_botOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_botWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Mensaje_botCountAggregateInputType;
    _avg?: Mensaje_botAvgAggregateInputType;
    _sum?: Mensaje_botSumAggregateInputType;
    _min?: Mensaje_botMinAggregateInputType;
    _max?: Mensaje_botMaxAggregateInputType;
};
export type GetMensaje_botAggregateType<T extends Mensaje_botAggregateArgs> = {
    [P in keyof T & keyof AggregateMensaje_bot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMensaje_bot[P]> : Prisma.GetScalarType<T[P], AggregateMensaje_bot[P]>;
};
export type mensaje_botGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithAggregationInput | Prisma.mensaje_botOrderByWithAggregationInput[];
    by: Prisma.Mensaje_botScalarFieldEnum[] | Prisma.Mensaje_botScalarFieldEnum;
    having?: Prisma.mensaje_botScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Mensaje_botCountAggregateInputType | true;
    _avg?: Mensaje_botAvgAggregateInputType;
    _sum?: Mensaje_botSumAggregateInputType;
    _min?: Mensaje_botMinAggregateInputType;
    _max?: Mensaje_botMaxAggregateInputType;
};
export type Mensaje_botGroupByOutputType = {
    id_mensaje: bigint;
    id_conversacion: number | null;
    rol: string | null;
    contenido: string | null;
    timestamp: Date;
    datos_sensibles: boolean | null;
    _count: Mensaje_botCountAggregateOutputType | null;
    _avg: Mensaje_botAvgAggregateOutputType | null;
    _sum: Mensaje_botSumAggregateOutputType | null;
    _min: Mensaje_botMinAggregateOutputType | null;
    _max: Mensaje_botMaxAggregateOutputType | null;
};
export type GetMensaje_botGroupByPayload<T extends mensaje_botGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Mensaje_botGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Mensaje_botGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Mensaje_botGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Mensaje_botGroupByOutputType[P]>;
}>>;
export type mensaje_botWhereInput = {
    AND?: Prisma.mensaje_botWhereInput | Prisma.mensaje_botWhereInput[];
    OR?: Prisma.mensaje_botWhereInput[];
    NOT?: Prisma.mensaje_botWhereInput | Prisma.mensaje_botWhereInput[];
    id_mensaje?: Prisma.BigIntFilter<"mensaje_bot"> | bigint | number;
    id_conversacion?: Prisma.IntNullableFilter<"mensaje_bot"> | number | null;
    rol?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_bot"> | Date | string;
    datos_sensibles?: Prisma.BoolNullableFilter<"mensaje_bot"> | boolean | null;
    conversacion?: Prisma.XOR<Prisma.Conversacion_botNullableScalarRelationFilter, Prisma.conversacion_botWhereInput> | null;
};
export type mensaje_botOrderByWithRelationInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    datos_sensibles?: Prisma.SortOrderInput | Prisma.SortOrder;
    conversacion?: Prisma.conversacion_botOrderByWithRelationInput;
};
export type mensaje_botWhereUniqueInput = Prisma.AtLeast<{
    id_mensaje?: bigint | number;
    AND?: Prisma.mensaje_botWhereInput | Prisma.mensaje_botWhereInput[];
    OR?: Prisma.mensaje_botWhereInput[];
    NOT?: Prisma.mensaje_botWhereInput | Prisma.mensaje_botWhereInput[];
    id_conversacion?: Prisma.IntNullableFilter<"mensaje_bot"> | number | null;
    rol?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_bot"> | Date | string;
    datos_sensibles?: Prisma.BoolNullableFilter<"mensaje_bot"> | boolean | null;
    conversacion?: Prisma.XOR<Prisma.Conversacion_botNullableScalarRelationFilter, Prisma.conversacion_botWhereInput> | null;
}, "id_mensaje">;
export type mensaje_botOrderByWithAggregationInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    rol?: Prisma.SortOrderInput | Prisma.SortOrder;
    contenido?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    datos_sensibles?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.mensaje_botCountOrderByAggregateInput;
    _avg?: Prisma.mensaje_botAvgOrderByAggregateInput;
    _max?: Prisma.mensaje_botMaxOrderByAggregateInput;
    _min?: Prisma.mensaje_botMinOrderByAggregateInput;
    _sum?: Prisma.mensaje_botSumOrderByAggregateInput;
};
export type mensaje_botScalarWhereWithAggregatesInput = {
    AND?: Prisma.mensaje_botScalarWhereWithAggregatesInput | Prisma.mensaje_botScalarWhereWithAggregatesInput[];
    OR?: Prisma.mensaje_botScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mensaje_botScalarWhereWithAggregatesInput | Prisma.mensaje_botScalarWhereWithAggregatesInput[];
    id_mensaje?: Prisma.BigIntWithAggregatesFilter<"mensaje_bot"> | bigint | number;
    id_conversacion?: Prisma.IntNullableWithAggregatesFilter<"mensaje_bot"> | number | null;
    rol?: Prisma.StringNullableWithAggregatesFilter<"mensaje_bot"> | string | null;
    contenido?: Prisma.StringNullableWithAggregatesFilter<"mensaje_bot"> | string | null;
    timestamp?: Prisma.DateTimeWithAggregatesFilter<"mensaje_bot"> | Date | string;
    datos_sensibles?: Prisma.BoolNullableWithAggregatesFilter<"mensaje_bot"> | boolean | null;
};
export type mensaje_botCreateInput = {
    id_mensaje?: bigint | number;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
    conversacion?: Prisma.conversacion_botCreateNestedOneWithoutMensajesInput;
};
export type mensaje_botUncheckedCreateInput = {
    id_mensaje?: bigint | number;
    id_conversacion?: number | null;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
};
export type mensaje_botUpdateInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    conversacion?: Prisma.conversacion_botUpdateOneWithoutMensajesNestedInput;
};
export type mensaje_botUncheckedUpdateInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_conversacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type mensaje_botCreateManyInput = {
    id_mensaje?: bigint | number;
    id_conversacion?: number | null;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
};
export type mensaje_botUpdateManyMutationInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type mensaje_botUncheckedUpdateManyInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_conversacion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type Mensaje_botListRelationFilter = {
    every?: Prisma.mensaje_botWhereInput;
    some?: Prisma.mensaje_botWhereInput;
    none?: Prisma.mensaje_botWhereInput;
};
export type mensaje_botOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mensaje_botCountOrderByAggregateInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    datos_sensibles?: Prisma.SortOrder;
};
export type mensaje_botAvgOrderByAggregateInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrder;
};
export type mensaje_botMaxOrderByAggregateInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    datos_sensibles?: Prisma.SortOrder;
};
export type mensaje_botMinOrderByAggregateInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrder;
    rol?: Prisma.SortOrder;
    contenido?: Prisma.SortOrder;
    timestamp?: Prisma.SortOrder;
    datos_sensibles?: Prisma.SortOrder;
};
export type mensaje_botSumOrderByAggregateInput = {
    id_mensaje?: Prisma.SortOrder;
    id_conversacion?: Prisma.SortOrder;
};
export type mensaje_botCreateNestedManyWithoutConversacionInput = {
    create?: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput> | Prisma.mensaje_botCreateWithoutConversacionInput[] | Prisma.mensaje_botUncheckedCreateWithoutConversacionInput[];
    connectOrCreate?: Prisma.mensaje_botCreateOrConnectWithoutConversacionInput | Prisma.mensaje_botCreateOrConnectWithoutConversacionInput[];
    createMany?: Prisma.mensaje_botCreateManyConversacionInputEnvelope;
    connect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
};
export type mensaje_botUncheckedCreateNestedManyWithoutConversacionInput = {
    create?: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput> | Prisma.mensaje_botCreateWithoutConversacionInput[] | Prisma.mensaje_botUncheckedCreateWithoutConversacionInput[];
    connectOrCreate?: Prisma.mensaje_botCreateOrConnectWithoutConversacionInput | Prisma.mensaje_botCreateOrConnectWithoutConversacionInput[];
    createMany?: Prisma.mensaje_botCreateManyConversacionInputEnvelope;
    connect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
};
export type mensaje_botUpdateManyWithoutConversacionNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput> | Prisma.mensaje_botCreateWithoutConversacionInput[] | Prisma.mensaje_botUncheckedCreateWithoutConversacionInput[];
    connectOrCreate?: Prisma.mensaje_botCreateOrConnectWithoutConversacionInput | Prisma.mensaje_botCreateOrConnectWithoutConversacionInput[];
    upsert?: Prisma.mensaje_botUpsertWithWhereUniqueWithoutConversacionInput | Prisma.mensaje_botUpsertWithWhereUniqueWithoutConversacionInput[];
    createMany?: Prisma.mensaje_botCreateManyConversacionInputEnvelope;
    set?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    disconnect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    delete?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    connect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    update?: Prisma.mensaje_botUpdateWithWhereUniqueWithoutConversacionInput | Prisma.mensaje_botUpdateWithWhereUniqueWithoutConversacionInput[];
    updateMany?: Prisma.mensaje_botUpdateManyWithWhereWithoutConversacionInput | Prisma.mensaje_botUpdateManyWithWhereWithoutConversacionInput[];
    deleteMany?: Prisma.mensaje_botScalarWhereInput | Prisma.mensaje_botScalarWhereInput[];
};
export type mensaje_botUncheckedUpdateManyWithoutConversacionNestedInput = {
    create?: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput> | Prisma.mensaje_botCreateWithoutConversacionInput[] | Prisma.mensaje_botUncheckedCreateWithoutConversacionInput[];
    connectOrCreate?: Prisma.mensaje_botCreateOrConnectWithoutConversacionInput | Prisma.mensaje_botCreateOrConnectWithoutConversacionInput[];
    upsert?: Prisma.mensaje_botUpsertWithWhereUniqueWithoutConversacionInput | Prisma.mensaje_botUpsertWithWhereUniqueWithoutConversacionInput[];
    createMany?: Prisma.mensaje_botCreateManyConversacionInputEnvelope;
    set?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    disconnect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    delete?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    connect?: Prisma.mensaje_botWhereUniqueInput | Prisma.mensaje_botWhereUniqueInput[];
    update?: Prisma.mensaje_botUpdateWithWhereUniqueWithoutConversacionInput | Prisma.mensaje_botUpdateWithWhereUniqueWithoutConversacionInput[];
    updateMany?: Prisma.mensaje_botUpdateManyWithWhereWithoutConversacionInput | Prisma.mensaje_botUpdateManyWithWhereWithoutConversacionInput[];
    deleteMany?: Prisma.mensaje_botScalarWhereInput | Prisma.mensaje_botScalarWhereInput[];
};
export type mensaje_botCreateWithoutConversacionInput = {
    id_mensaje?: bigint | number;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
};
export type mensaje_botUncheckedCreateWithoutConversacionInput = {
    id_mensaje?: bigint | number;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
};
export type mensaje_botCreateOrConnectWithoutConversacionInput = {
    where: Prisma.mensaje_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput>;
};
export type mensaje_botCreateManyConversacionInputEnvelope = {
    data: Prisma.mensaje_botCreateManyConversacionInput | Prisma.mensaje_botCreateManyConversacionInput[];
    skipDuplicates?: boolean;
};
export type mensaje_botUpsertWithWhereUniqueWithoutConversacionInput = {
    where: Prisma.mensaje_botWhereUniqueInput;
    update: Prisma.XOR<Prisma.mensaje_botUpdateWithoutConversacionInput, Prisma.mensaje_botUncheckedUpdateWithoutConversacionInput>;
    create: Prisma.XOR<Prisma.mensaje_botCreateWithoutConversacionInput, Prisma.mensaje_botUncheckedCreateWithoutConversacionInput>;
};
export type mensaje_botUpdateWithWhereUniqueWithoutConversacionInput = {
    where: Prisma.mensaje_botWhereUniqueInput;
    data: Prisma.XOR<Prisma.mensaje_botUpdateWithoutConversacionInput, Prisma.mensaje_botUncheckedUpdateWithoutConversacionInput>;
};
export type mensaje_botUpdateManyWithWhereWithoutConversacionInput = {
    where: Prisma.mensaje_botScalarWhereInput;
    data: Prisma.XOR<Prisma.mensaje_botUpdateManyMutationInput, Prisma.mensaje_botUncheckedUpdateManyWithoutConversacionInput>;
};
export type mensaje_botScalarWhereInput = {
    AND?: Prisma.mensaje_botScalarWhereInput | Prisma.mensaje_botScalarWhereInput[];
    OR?: Prisma.mensaje_botScalarWhereInput[];
    NOT?: Prisma.mensaje_botScalarWhereInput | Prisma.mensaje_botScalarWhereInput[];
    id_mensaje?: Prisma.BigIntFilter<"mensaje_bot"> | bigint | number;
    id_conversacion?: Prisma.IntNullableFilter<"mensaje_bot"> | number | null;
    rol?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    contenido?: Prisma.StringNullableFilter<"mensaje_bot"> | string | null;
    timestamp?: Prisma.DateTimeFilter<"mensaje_bot"> | Date | string;
    datos_sensibles?: Prisma.BoolNullableFilter<"mensaje_bot"> | boolean | null;
};
export type mensaje_botCreateManyConversacionInput = {
    id_mensaje?: bigint | number;
    rol?: string | null;
    contenido?: string | null;
    timestamp?: Date | string;
    datos_sensibles?: boolean | null;
};
export type mensaje_botUpdateWithoutConversacionInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type mensaje_botUncheckedUpdateWithoutConversacionInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type mensaje_botUncheckedUpdateManyWithoutConversacionInput = {
    id_mensaje?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    rol?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    contenido?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    timestamp?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    datos_sensibles?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type mensaje_botSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje?: boolean;
    id_conversacion?: boolean;
    rol?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    datos_sensibles?: boolean;
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_bot"]>;
export type mensaje_botSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje?: boolean;
    id_conversacion?: boolean;
    rol?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    datos_sensibles?: boolean;
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_bot"]>;
export type mensaje_botSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_mensaje?: boolean;
    id_conversacion?: boolean;
    rol?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    datos_sensibles?: boolean;
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
}, ExtArgs["result"]["mensaje_bot"]>;
export type mensaje_botSelectScalar = {
    id_mensaje?: boolean;
    id_conversacion?: boolean;
    rol?: boolean;
    contenido?: boolean;
    timestamp?: boolean;
    datos_sensibles?: boolean;
};
export type mensaje_botOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_mensaje" | "id_conversacion" | "rol" | "contenido" | "timestamp" | "datos_sensibles", ExtArgs["result"]["mensaje_bot"]>;
export type mensaje_botInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
};
export type mensaje_botIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
};
export type mensaje_botIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    conversacion?: boolean | Prisma.mensaje_bot$conversacionArgs<ExtArgs>;
};
export type $mensaje_botPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "mensaje_bot";
    objects: {
        conversacion: Prisma.$conversacion_botPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_mensaje: bigint;
        id_conversacion: number | null;
        rol: string | null;
        contenido: string | null;
        timestamp: Date;
        datos_sensibles: boolean | null;
    }, ExtArgs["result"]["mensaje_bot"]>;
    composites: {};
};
export type mensaje_botGetPayload<S extends boolean | null | undefined | mensaje_botDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload, S>;
export type mensaje_botCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mensaje_botFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Mensaje_botCountAggregateInputType | true;
};
export interface mensaje_botDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['mensaje_bot'];
        meta: {
            name: 'mensaje_bot';
        };
    };
    findUnique<T extends mensaje_botFindUniqueArgs>(args: Prisma.SelectSubset<T, mensaje_botFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mensaje_botFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mensaje_botFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mensaje_botFindFirstArgs>(args?: Prisma.SelectSubset<T, mensaje_botFindFirstArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mensaje_botFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mensaje_botFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mensaje_botFindManyArgs>(args?: Prisma.SelectSubset<T, mensaje_botFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mensaje_botCreateArgs>(args: Prisma.SelectSubset<T, mensaje_botCreateArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mensaje_botCreateManyArgs>(args?: Prisma.SelectSubset<T, mensaje_botCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mensaje_botCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mensaje_botCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mensaje_botDeleteArgs>(args: Prisma.SelectSubset<T, mensaje_botDeleteArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mensaje_botUpdateArgs>(args: Prisma.SelectSubset<T, mensaje_botUpdateArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mensaje_botDeleteManyArgs>(args?: Prisma.SelectSubset<T, mensaje_botDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mensaje_botUpdateManyArgs>(args: Prisma.SelectSubset<T, mensaje_botUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mensaje_botUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mensaje_botUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mensaje_botUpsertArgs>(args: Prisma.SelectSubset<T, mensaje_botUpsertArgs<ExtArgs>>): Prisma.Prisma__mensaje_botClient<runtime.Types.Result.GetResult<Prisma.$mensaje_botPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mensaje_botCountArgs>(args?: Prisma.Subset<T, mensaje_botCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Mensaje_botCountAggregateOutputType> : number>;
    aggregate<T extends Mensaje_botAggregateArgs>(args: Prisma.Subset<T, Mensaje_botAggregateArgs>): Prisma.PrismaPromise<GetMensaje_botAggregateType<T>>;
    groupBy<T extends mensaje_botGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mensaje_botGroupByArgs['orderBy'];
    } : {
        orderBy?: mensaje_botGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mensaje_botGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMensaje_botGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mensaje_botFieldRefs;
}
export interface Prisma__mensaje_botClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    conversacion<T extends Prisma.mensaje_bot$conversacionArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.mensaje_bot$conversacionArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mensaje_botFieldRefs {
    readonly id_mensaje: Prisma.FieldRef<"mensaje_bot", 'BigInt'>;
    readonly id_conversacion: Prisma.FieldRef<"mensaje_bot", 'Int'>;
    readonly rol: Prisma.FieldRef<"mensaje_bot", 'String'>;
    readonly contenido: Prisma.FieldRef<"mensaje_bot", 'String'>;
    readonly timestamp: Prisma.FieldRef<"mensaje_bot", 'DateTime'>;
    readonly datos_sensibles: Prisma.FieldRef<"mensaje_bot", 'Boolean'>;
}
export type mensaje_botFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where: Prisma.mensaje_botWhereUniqueInput;
};
export type mensaje_botFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where: Prisma.mensaje_botWhereUniqueInput;
};
export type mensaje_botFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithRelationInput | Prisma.mensaje_botOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_botScalarFieldEnum | Prisma.Mensaje_botScalarFieldEnum[];
};
export type mensaje_botFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithRelationInput | Prisma.mensaje_botOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_botScalarFieldEnum | Prisma.Mensaje_botScalarFieldEnum[];
};
export type mensaje_botFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where?: Prisma.mensaje_botWhereInput;
    orderBy?: Prisma.mensaje_botOrderByWithRelationInput | Prisma.mensaje_botOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_botScalarFieldEnum | Prisma.Mensaje_botScalarFieldEnum[];
};
export type mensaje_botCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.mensaje_botCreateInput, Prisma.mensaje_botUncheckedCreateInput>;
};
export type mensaje_botCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mensaje_botCreateManyInput | Prisma.mensaje_botCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mensaje_botCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    data: Prisma.mensaje_botCreateManyInput | Prisma.mensaje_botCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mensaje_botIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mensaje_botUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mensaje_botUpdateInput, Prisma.mensaje_botUncheckedUpdateInput>;
    where: Prisma.mensaje_botWhereUniqueInput;
};
export type mensaje_botUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mensaje_botUpdateManyMutationInput, Prisma.mensaje_botUncheckedUpdateManyInput>;
    where?: Prisma.mensaje_botWhereInput;
    limit?: number;
};
export type mensaje_botUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mensaje_botUpdateManyMutationInput, Prisma.mensaje_botUncheckedUpdateManyInput>;
    where?: Prisma.mensaje_botWhereInput;
    limit?: number;
    include?: Prisma.mensaje_botIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mensaje_botUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where: Prisma.mensaje_botWhereUniqueInput;
    create: Prisma.XOR<Prisma.mensaje_botCreateInput, Prisma.mensaje_botUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mensaje_botUpdateInput, Prisma.mensaje_botUncheckedUpdateInput>;
};
export type mensaje_botDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
    where: Prisma.mensaje_botWhereUniqueInput;
};
export type mensaje_botDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_botWhereInput;
    limit?: number;
};
export type mensaje_bot$conversacionArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
};
export type mensaje_botDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_botSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_botOmit<ExtArgs> | null;
    include?: Prisma.mensaje_botInclude<ExtArgs> | null;
};
