import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type plantilla_notificacionModel = runtime.Types.Result.DefaultSelection<Prisma.$plantilla_notificacionPayload>;
export type AggregatePlantilla_notificacion = {
    _count: Plantilla_notificacionCountAggregateOutputType | null;
    _avg: Plantilla_notificacionAvgAggregateOutputType | null;
    _sum: Plantilla_notificacionSumAggregateOutputType | null;
    _min: Plantilla_notificacionMinAggregateOutputType | null;
    _max: Plantilla_notificacionMaxAggregateOutputType | null;
};
export type Plantilla_notificacionAvgAggregateOutputType = {
    id_plantilla: number | null;
};
export type Plantilla_notificacionSumAggregateOutputType = {
    id_plantilla: number | null;
};
export type Plantilla_notificacionMinAggregateOutputType = {
    id_plantilla: number | null;
    tipo_evento: string | null;
    canal: string | null;
    contenido_texto: string | null;
    activa: boolean | null;
};
export type Plantilla_notificacionMaxAggregateOutputType = {
    id_plantilla: number | null;
    tipo_evento: string | null;
    canal: string | null;
    contenido_texto: string | null;
    activa: boolean | null;
};
export type Plantilla_notificacionCountAggregateOutputType = {
    id_plantilla: number;
    tipo_evento: number;
    canal: number;
    contenido_texto: number;
    activa: number;
    _all: number;
};
export type Plantilla_notificacionAvgAggregateInputType = {
    id_plantilla?: true;
};
export type Plantilla_notificacionSumAggregateInputType = {
    id_plantilla?: true;
};
export type Plantilla_notificacionMinAggregateInputType = {
    id_plantilla?: true;
    tipo_evento?: true;
    canal?: true;
    contenido_texto?: true;
    activa?: true;
};
export type Plantilla_notificacionMaxAggregateInputType = {
    id_plantilla?: true;
    tipo_evento?: true;
    canal?: true;
    contenido_texto?: true;
    activa?: true;
};
export type Plantilla_notificacionCountAggregateInputType = {
    id_plantilla?: true;
    tipo_evento?: true;
    canal?: true;
    contenido_texto?: true;
    activa?: true;
    _all?: true;
};
export type Plantilla_notificacionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_notificacionWhereInput;
    orderBy?: Prisma.plantilla_notificacionOrderByWithRelationInput | Prisma.plantilla_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Plantilla_notificacionCountAggregateInputType;
    _avg?: Plantilla_notificacionAvgAggregateInputType;
    _sum?: Plantilla_notificacionSumAggregateInputType;
    _min?: Plantilla_notificacionMinAggregateInputType;
    _max?: Plantilla_notificacionMaxAggregateInputType;
};
export type GetPlantilla_notificacionAggregateType<T extends Plantilla_notificacionAggregateArgs> = {
    [P in keyof T & keyof AggregatePlantilla_notificacion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlantilla_notificacion[P]> : Prisma.GetScalarType<T[P], AggregatePlantilla_notificacion[P]>;
};
export type plantilla_notificacionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_notificacionWhereInput;
    orderBy?: Prisma.plantilla_notificacionOrderByWithAggregationInput | Prisma.plantilla_notificacionOrderByWithAggregationInput[];
    by: Prisma.Plantilla_notificacionScalarFieldEnum[] | Prisma.Plantilla_notificacionScalarFieldEnum;
    having?: Prisma.plantilla_notificacionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Plantilla_notificacionCountAggregateInputType | true;
    _avg?: Plantilla_notificacionAvgAggregateInputType;
    _sum?: Plantilla_notificacionSumAggregateInputType;
    _min?: Plantilla_notificacionMinAggregateInputType;
    _max?: Plantilla_notificacionMaxAggregateInputType;
};
export type Plantilla_notificacionGroupByOutputType = {
    id_plantilla: number;
    tipo_evento: string | null;
    canal: string;
    contenido_texto: string | null;
    activa: boolean;
    _count: Plantilla_notificacionCountAggregateOutputType | null;
    _avg: Plantilla_notificacionAvgAggregateOutputType | null;
    _sum: Plantilla_notificacionSumAggregateOutputType | null;
    _min: Plantilla_notificacionMinAggregateOutputType | null;
    _max: Plantilla_notificacionMaxAggregateOutputType | null;
};
export type GetPlantilla_notificacionGroupByPayload<T extends plantilla_notificacionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Plantilla_notificacionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Plantilla_notificacionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Plantilla_notificacionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Plantilla_notificacionGroupByOutputType[P]>;
}>>;
export type plantilla_notificacionWhereInput = {
    AND?: Prisma.plantilla_notificacionWhereInput | Prisma.plantilla_notificacionWhereInput[];
    OR?: Prisma.plantilla_notificacionWhereInput[];
    NOT?: Prisma.plantilla_notificacionWhereInput | Prisma.plantilla_notificacionWhereInput[];
    id_plantilla?: Prisma.IntFilter<"plantilla_notificacion"> | number;
    tipo_evento?: Prisma.StringNullableFilter<"plantilla_notificacion"> | string | null;
    canal?: Prisma.StringFilter<"plantilla_notificacion"> | string;
    contenido_texto?: Prisma.StringNullableFilter<"plantilla_notificacion"> | string | null;
    activa?: Prisma.BoolFilter<"plantilla_notificacion"> | boolean;
    notificaciones?: Prisma.Log_notificacionListRelationFilter;
};
export type plantilla_notificacionOrderByWithRelationInput = {
    id_plantilla?: Prisma.SortOrder;
    tipo_evento?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    contenido_texto?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    notificaciones?: Prisma.log_notificacionOrderByRelationAggregateInput;
};
export type plantilla_notificacionWhereUniqueInput = Prisma.AtLeast<{
    id_plantilla?: number;
    AND?: Prisma.plantilla_notificacionWhereInput | Prisma.plantilla_notificacionWhereInput[];
    OR?: Prisma.plantilla_notificacionWhereInput[];
    NOT?: Prisma.plantilla_notificacionWhereInput | Prisma.plantilla_notificacionWhereInput[];
    tipo_evento?: Prisma.StringNullableFilter<"plantilla_notificacion"> | string | null;
    canal?: Prisma.StringFilter<"plantilla_notificacion"> | string;
    contenido_texto?: Prisma.StringNullableFilter<"plantilla_notificacion"> | string | null;
    activa?: Prisma.BoolFilter<"plantilla_notificacion"> | boolean;
    notificaciones?: Prisma.Log_notificacionListRelationFilter;
}, "id_plantilla">;
export type plantilla_notificacionOrderByWithAggregationInput = {
    id_plantilla?: Prisma.SortOrder;
    tipo_evento?: Prisma.SortOrderInput | Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    contenido_texto?: Prisma.SortOrderInput | Prisma.SortOrder;
    activa?: Prisma.SortOrder;
    _count?: Prisma.plantilla_notificacionCountOrderByAggregateInput;
    _avg?: Prisma.plantilla_notificacionAvgOrderByAggregateInput;
    _max?: Prisma.plantilla_notificacionMaxOrderByAggregateInput;
    _min?: Prisma.plantilla_notificacionMinOrderByAggregateInput;
    _sum?: Prisma.plantilla_notificacionSumOrderByAggregateInput;
};
export type plantilla_notificacionScalarWhereWithAggregatesInput = {
    AND?: Prisma.plantilla_notificacionScalarWhereWithAggregatesInput | Prisma.plantilla_notificacionScalarWhereWithAggregatesInput[];
    OR?: Prisma.plantilla_notificacionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.plantilla_notificacionScalarWhereWithAggregatesInput | Prisma.plantilla_notificacionScalarWhereWithAggregatesInput[];
    id_plantilla?: Prisma.IntWithAggregatesFilter<"plantilla_notificacion"> | number;
    tipo_evento?: Prisma.StringNullableWithAggregatesFilter<"plantilla_notificacion"> | string | null;
    canal?: Prisma.StringWithAggregatesFilter<"plantilla_notificacion"> | string;
    contenido_texto?: Prisma.StringNullableWithAggregatesFilter<"plantilla_notificacion"> | string | null;
    activa?: Prisma.BoolWithAggregatesFilter<"plantilla_notificacion"> | boolean;
};
export type plantilla_notificacionCreateInput = {
    tipo_evento?: string | null;
    canal: string;
    contenido_texto?: string | null;
    activa?: boolean;
    notificaciones?: Prisma.log_notificacionCreateNestedManyWithoutPlantillaInput;
};
export type plantilla_notificacionUncheckedCreateInput = {
    id_plantilla?: number;
    tipo_evento?: string | null;
    canal: string;
    contenido_texto?: string | null;
    activa?: boolean;
    notificaciones?: Prisma.log_notificacionUncheckedCreateNestedManyWithoutPlantillaInput;
};
export type plantilla_notificacionUpdateInput = {
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notificaciones?: Prisma.log_notificacionUpdateManyWithoutPlantillaNestedInput;
};
export type plantilla_notificacionUncheckedUpdateInput = {
    id_plantilla?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    notificaciones?: Prisma.log_notificacionUncheckedUpdateManyWithoutPlantillaNestedInput;
};
export type plantilla_notificacionCreateManyInput = {
    id_plantilla?: number;
    tipo_evento?: string | null;
    canal: string;
    contenido_texto?: string | null;
    activa?: boolean;
};
export type plantilla_notificacionUpdateManyMutationInput = {
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type plantilla_notificacionUncheckedUpdateManyInput = {
    id_plantilla?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type plantilla_notificacionCountOrderByAggregateInput = {
    id_plantilla?: Prisma.SortOrder;
    tipo_evento?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    contenido_texto?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type plantilla_notificacionAvgOrderByAggregateInput = {
    id_plantilla?: Prisma.SortOrder;
};
export type plantilla_notificacionMaxOrderByAggregateInput = {
    id_plantilla?: Prisma.SortOrder;
    tipo_evento?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    contenido_texto?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type plantilla_notificacionMinOrderByAggregateInput = {
    id_plantilla?: Prisma.SortOrder;
    tipo_evento?: Prisma.SortOrder;
    canal?: Prisma.SortOrder;
    contenido_texto?: Prisma.SortOrder;
    activa?: Prisma.SortOrder;
};
export type plantilla_notificacionSumOrderByAggregateInput = {
    id_plantilla?: Prisma.SortOrder;
};
export type Plantilla_notificacionNullableScalarRelationFilter = {
    is?: Prisma.plantilla_notificacionWhereInput | null;
    isNot?: Prisma.plantilla_notificacionWhereInput | null;
};
export type plantilla_notificacionCreateNestedOneWithoutNotificacionesInput = {
    create?: Prisma.XOR<Prisma.plantilla_notificacionCreateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedCreateWithoutNotificacionesInput>;
    connectOrCreate?: Prisma.plantilla_notificacionCreateOrConnectWithoutNotificacionesInput;
    connect?: Prisma.plantilla_notificacionWhereUniqueInput;
};
export type plantilla_notificacionUpdateOneWithoutNotificacionesNestedInput = {
    create?: Prisma.XOR<Prisma.plantilla_notificacionCreateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedCreateWithoutNotificacionesInput>;
    connectOrCreate?: Prisma.plantilla_notificacionCreateOrConnectWithoutNotificacionesInput;
    upsert?: Prisma.plantilla_notificacionUpsertWithoutNotificacionesInput;
    disconnect?: Prisma.plantilla_notificacionWhereInput | boolean;
    delete?: Prisma.plantilla_notificacionWhereInput | boolean;
    connect?: Prisma.plantilla_notificacionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.plantilla_notificacionUpdateToOneWithWhereWithoutNotificacionesInput, Prisma.plantilla_notificacionUpdateWithoutNotificacionesInput>, Prisma.plantilla_notificacionUncheckedUpdateWithoutNotificacionesInput>;
};
export type plantilla_notificacionCreateWithoutNotificacionesInput = {
    tipo_evento?: string | null;
    canal: string;
    contenido_texto?: string | null;
    activa?: boolean;
};
export type plantilla_notificacionUncheckedCreateWithoutNotificacionesInput = {
    id_plantilla?: number;
    tipo_evento?: string | null;
    canal: string;
    contenido_texto?: string | null;
    activa?: boolean;
};
export type plantilla_notificacionCreateOrConnectWithoutNotificacionesInput = {
    where: Prisma.plantilla_notificacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.plantilla_notificacionCreateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedCreateWithoutNotificacionesInput>;
};
export type plantilla_notificacionUpsertWithoutNotificacionesInput = {
    update: Prisma.XOR<Prisma.plantilla_notificacionUpdateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedUpdateWithoutNotificacionesInput>;
    create: Prisma.XOR<Prisma.plantilla_notificacionCreateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedCreateWithoutNotificacionesInput>;
    where?: Prisma.plantilla_notificacionWhereInput;
};
export type plantilla_notificacionUpdateToOneWithWhereWithoutNotificacionesInput = {
    where?: Prisma.plantilla_notificacionWhereInput;
    data: Prisma.XOR<Prisma.plantilla_notificacionUpdateWithoutNotificacionesInput, Prisma.plantilla_notificacionUncheckedUpdateWithoutNotificacionesInput>;
};
export type plantilla_notificacionUpdateWithoutNotificacionesInput = {
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type plantilla_notificacionUncheckedUpdateWithoutNotificacionesInput = {
    id_plantilla?: Prisma.IntFieldUpdateOperationsInput | number;
    tipo_evento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    canal?: Prisma.StringFieldUpdateOperationsInput | string;
    contenido_texto?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activa?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Plantilla_notificacionCountOutputType = {
    notificaciones: number;
};
export type Plantilla_notificacionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notificaciones?: boolean | Plantilla_notificacionCountOutputTypeCountNotificacionesArgs;
};
export type Plantilla_notificacionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Plantilla_notificacionCountOutputTypeSelect<ExtArgs> | null;
};
export type Plantilla_notificacionCountOutputTypeCountNotificacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.log_notificacionWhereInput;
};
export type plantilla_notificacionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla?: boolean;
    tipo_evento?: boolean;
    canal?: boolean;
    contenido_texto?: boolean;
    activa?: boolean;
    notificaciones?: boolean | Prisma.plantilla_notificacion$notificacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.Plantilla_notificacionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["plantilla_notificacion"]>;
export type plantilla_notificacionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla?: boolean;
    tipo_evento?: boolean;
    canal?: boolean;
    contenido_texto?: boolean;
    activa?: boolean;
}, ExtArgs["result"]["plantilla_notificacion"]>;
export type plantilla_notificacionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_plantilla?: boolean;
    tipo_evento?: boolean;
    canal?: boolean;
    contenido_texto?: boolean;
    activa?: boolean;
}, ExtArgs["result"]["plantilla_notificacion"]>;
export type plantilla_notificacionSelectScalar = {
    id_plantilla?: boolean;
    tipo_evento?: boolean;
    canal?: boolean;
    contenido_texto?: boolean;
    activa?: boolean;
};
export type plantilla_notificacionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_plantilla" | "tipo_evento" | "canal" | "contenido_texto" | "activa", ExtArgs["result"]["plantilla_notificacion"]>;
export type plantilla_notificacionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    notificaciones?: boolean | Prisma.plantilla_notificacion$notificacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.Plantilla_notificacionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type plantilla_notificacionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type plantilla_notificacionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $plantilla_notificacionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "plantilla_notificacion";
    objects: {
        notificaciones: Prisma.$log_notificacionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_plantilla: number;
        tipo_evento: string | null;
        canal: string;
        contenido_texto: string | null;
        activa: boolean;
    }, ExtArgs["result"]["plantilla_notificacion"]>;
    composites: {};
};
export type plantilla_notificacionGetPayload<S extends boolean | null | undefined | plantilla_notificacionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload, S>;
export type plantilla_notificacionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<plantilla_notificacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Plantilla_notificacionCountAggregateInputType | true;
};
export interface plantilla_notificacionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['plantilla_notificacion'];
        meta: {
            name: 'plantilla_notificacion';
        };
    };
    findUnique<T extends plantilla_notificacionFindUniqueArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends plantilla_notificacionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends plantilla_notificacionFindFirstArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionFindFirstArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends plantilla_notificacionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends plantilla_notificacionFindManyArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends plantilla_notificacionCreateArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionCreateArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends plantilla_notificacionCreateManyArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends plantilla_notificacionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends plantilla_notificacionDeleteArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionDeleteArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends plantilla_notificacionUpdateArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionUpdateArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends plantilla_notificacionDeleteManyArgs>(args?: Prisma.SelectSubset<T, plantilla_notificacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends plantilla_notificacionUpdateManyArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends plantilla_notificacionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends plantilla_notificacionUpsertArgs>(args: Prisma.SelectSubset<T, plantilla_notificacionUpsertArgs<ExtArgs>>): Prisma.Prisma__plantilla_notificacionClient<runtime.Types.Result.GetResult<Prisma.$plantilla_notificacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends plantilla_notificacionCountArgs>(args?: Prisma.Subset<T, plantilla_notificacionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Plantilla_notificacionCountAggregateOutputType> : number>;
    aggregate<T extends Plantilla_notificacionAggregateArgs>(args: Prisma.Subset<T, Plantilla_notificacionAggregateArgs>): Prisma.PrismaPromise<GetPlantilla_notificacionAggregateType<T>>;
    groupBy<T extends plantilla_notificacionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: plantilla_notificacionGroupByArgs['orderBy'];
    } : {
        orderBy?: plantilla_notificacionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, plantilla_notificacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlantilla_notificacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: plantilla_notificacionFieldRefs;
}
export interface Prisma__plantilla_notificacionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    notificaciones<T extends Prisma.plantilla_notificacion$notificacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.plantilla_notificacion$notificacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$log_notificacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface plantilla_notificacionFieldRefs {
    readonly id_plantilla: Prisma.FieldRef<"plantilla_notificacion", 'Int'>;
    readonly tipo_evento: Prisma.FieldRef<"plantilla_notificacion", 'String'>;
    readonly canal: Prisma.FieldRef<"plantilla_notificacion", 'String'>;
    readonly contenido_texto: Prisma.FieldRef<"plantilla_notificacion", 'String'>;
    readonly activa: Prisma.FieldRef<"plantilla_notificacion", 'Boolean'>;
}
export type plantilla_notificacionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where: Prisma.plantilla_notificacionWhereUniqueInput;
};
export type plantilla_notificacionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where: Prisma.plantilla_notificacionWhereUniqueInput;
};
export type plantilla_notificacionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where?: Prisma.plantilla_notificacionWhereInput;
    orderBy?: Prisma.plantilla_notificacionOrderByWithRelationInput | Prisma.plantilla_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_notificacionScalarFieldEnum | Prisma.Plantilla_notificacionScalarFieldEnum[];
};
export type plantilla_notificacionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where?: Prisma.plantilla_notificacionWhereInput;
    orderBy?: Prisma.plantilla_notificacionOrderByWithRelationInput | Prisma.plantilla_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_notificacionScalarFieldEnum | Prisma.Plantilla_notificacionScalarFieldEnum[];
};
export type plantilla_notificacionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where?: Prisma.plantilla_notificacionWhereInput;
    orderBy?: Prisma.plantilla_notificacionOrderByWithRelationInput | Prisma.plantilla_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_notificacionScalarFieldEnum | Prisma.Plantilla_notificacionScalarFieldEnum[];
};
export type plantilla_notificacionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.plantilla_notificacionCreateInput, Prisma.plantilla_notificacionUncheckedCreateInput>;
};
export type plantilla_notificacionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.plantilla_notificacionCreateManyInput | Prisma.plantilla_notificacionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type plantilla_notificacionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    data: Prisma.plantilla_notificacionCreateManyInput | Prisma.plantilla_notificacionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type plantilla_notificacionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.plantilla_notificacionUpdateInput, Prisma.plantilla_notificacionUncheckedUpdateInput>;
    where: Prisma.plantilla_notificacionWhereUniqueInput;
};
export type plantilla_notificacionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.plantilla_notificacionUpdateManyMutationInput, Prisma.plantilla_notificacionUncheckedUpdateManyInput>;
    where?: Prisma.plantilla_notificacionWhereInput;
    limit?: number;
};
export type plantilla_notificacionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.plantilla_notificacionUpdateManyMutationInput, Prisma.plantilla_notificacionUncheckedUpdateManyInput>;
    where?: Prisma.plantilla_notificacionWhereInput;
    limit?: number;
};
export type plantilla_notificacionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where: Prisma.plantilla_notificacionWhereUniqueInput;
    create: Prisma.XOR<Prisma.plantilla_notificacionCreateInput, Prisma.plantilla_notificacionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.plantilla_notificacionUpdateInput, Prisma.plantilla_notificacionUncheckedUpdateInput>;
};
export type plantilla_notificacionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
    where: Prisma.plantilla_notificacionWhereUniqueInput;
};
export type plantilla_notificacionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_notificacionWhereInput;
    limit?: number;
};
export type plantilla_notificacion$notificacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.log_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.log_notificacionOmit<ExtArgs> | null;
    include?: Prisma.log_notificacionInclude<ExtArgs> | null;
    where?: Prisma.log_notificacionWhereInput;
    orderBy?: Prisma.log_notificacionOrderByWithRelationInput | Prisma.log_notificacionOrderByWithRelationInput[];
    cursor?: Prisma.log_notificacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Log_notificacionScalarFieldEnum | Prisma.Log_notificacionScalarFieldEnum[];
};
export type plantilla_notificacionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_notificacionSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_notificacionOmit<ExtArgs> | null;
    include?: Prisma.plantilla_notificacionInclude<ExtArgs> | null;
};
