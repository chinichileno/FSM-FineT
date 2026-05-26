import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type evidencia_fotoModel = runtime.Types.Result.DefaultSelection<Prisma.$evidencia_fotoPayload>;
export type AggregateEvidencia_foto = {
    _count: Evidencia_fotoCountAggregateOutputType | null;
    _avg: Evidencia_fotoAvgAggregateOutputType | null;
    _sum: Evidencia_fotoSumAggregateOutputType | null;
    _min: Evidencia_fotoMinAggregateOutputType | null;
    _max: Evidencia_fotoMaxAggregateOutputType | null;
};
export type Evidencia_fotoAvgAggregateOutputType = {
    id_foto: number | null;
    id_ot: number | null;
    tamano_kb: number | null;
};
export type Evidencia_fotoSumAggregateOutputType = {
    id_foto: number | null;
    id_ot: number | null;
    tamano_kb: number | null;
};
export type Evidencia_fotoMinAggregateOutputType = {
    id_foto: number | null;
    id_ot: number | null;
    url_cloudinary: string | null;
    formato: string | null;
    tamano_kb: number | null;
    fecha_subida: Date | null;
};
export type Evidencia_fotoMaxAggregateOutputType = {
    id_foto: number | null;
    id_ot: number | null;
    url_cloudinary: string | null;
    formato: string | null;
    tamano_kb: number | null;
    fecha_subida: Date | null;
};
export type Evidencia_fotoCountAggregateOutputType = {
    id_foto: number;
    id_ot: number;
    url_cloudinary: number;
    formato: number;
    tamano_kb: number;
    fecha_subida: number;
    _all: number;
};
export type Evidencia_fotoAvgAggregateInputType = {
    id_foto?: true;
    id_ot?: true;
    tamano_kb?: true;
};
export type Evidencia_fotoSumAggregateInputType = {
    id_foto?: true;
    id_ot?: true;
    tamano_kb?: true;
};
export type Evidencia_fotoMinAggregateInputType = {
    id_foto?: true;
    id_ot?: true;
    url_cloudinary?: true;
    formato?: true;
    tamano_kb?: true;
    fecha_subida?: true;
};
export type Evidencia_fotoMaxAggregateInputType = {
    id_foto?: true;
    id_ot?: true;
    url_cloudinary?: true;
    formato?: true;
    tamano_kb?: true;
    fecha_subida?: true;
};
export type Evidencia_fotoCountAggregateInputType = {
    id_foto?: true;
    id_ot?: true;
    url_cloudinary?: true;
    formato?: true;
    tamano_kb?: true;
    fecha_subida?: true;
    _all?: true;
};
export type Evidencia_fotoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.evidencia_fotoWhereInput;
    orderBy?: Prisma.evidencia_fotoOrderByWithRelationInput | Prisma.evidencia_fotoOrderByWithRelationInput[];
    cursor?: Prisma.evidencia_fotoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Evidencia_fotoCountAggregateInputType;
    _avg?: Evidencia_fotoAvgAggregateInputType;
    _sum?: Evidencia_fotoSumAggregateInputType;
    _min?: Evidencia_fotoMinAggregateInputType;
    _max?: Evidencia_fotoMaxAggregateInputType;
};
export type GetEvidencia_fotoAggregateType<T extends Evidencia_fotoAggregateArgs> = {
    [P in keyof T & keyof AggregateEvidencia_foto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvidencia_foto[P]> : Prisma.GetScalarType<T[P], AggregateEvidencia_foto[P]>;
};
export type evidencia_fotoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.evidencia_fotoWhereInput;
    orderBy?: Prisma.evidencia_fotoOrderByWithAggregationInput | Prisma.evidencia_fotoOrderByWithAggregationInput[];
    by: Prisma.Evidencia_fotoScalarFieldEnum[] | Prisma.Evidencia_fotoScalarFieldEnum;
    having?: Prisma.evidencia_fotoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Evidencia_fotoCountAggregateInputType | true;
    _avg?: Evidencia_fotoAvgAggregateInputType;
    _sum?: Evidencia_fotoSumAggregateInputType;
    _min?: Evidencia_fotoMinAggregateInputType;
    _max?: Evidencia_fotoMaxAggregateInputType;
};
export type Evidencia_fotoGroupByOutputType = {
    id_foto: number;
    id_ot: number | null;
    url_cloudinary: string;
    formato: string | null;
    tamano_kb: number | null;
    fecha_subida: Date;
    _count: Evidencia_fotoCountAggregateOutputType | null;
    _avg: Evidencia_fotoAvgAggregateOutputType | null;
    _sum: Evidencia_fotoSumAggregateOutputType | null;
    _min: Evidencia_fotoMinAggregateOutputType | null;
    _max: Evidencia_fotoMaxAggregateOutputType | null;
};
export type GetEvidencia_fotoGroupByPayload<T extends evidencia_fotoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Evidencia_fotoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Evidencia_fotoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Evidencia_fotoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Evidencia_fotoGroupByOutputType[P]>;
}>>;
export type evidencia_fotoWhereInput = {
    AND?: Prisma.evidencia_fotoWhereInput | Prisma.evidencia_fotoWhereInput[];
    OR?: Prisma.evidencia_fotoWhereInput[];
    NOT?: Prisma.evidencia_fotoWhereInput | Prisma.evidencia_fotoWhereInput[];
    id_foto?: Prisma.IntFilter<"evidencia_foto"> | number;
    id_ot?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    url_cloudinary?: Prisma.StringFilter<"evidencia_foto"> | string;
    formato?: Prisma.StringNullableFilter<"evidencia_foto"> | string | null;
    tamano_kb?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    fecha_subida?: Prisma.DateTimeFilter<"evidencia_foto"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
};
export type evidencia_fotoOrderByWithRelationInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    url_cloudinary?: Prisma.SortOrder;
    formato?: Prisma.SortOrderInput | Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
    orden_trabajo?: Prisma.orden_trabajoOrderByWithRelationInput;
};
export type evidencia_fotoWhereUniqueInput = Prisma.AtLeast<{
    id_foto?: number;
    AND?: Prisma.evidencia_fotoWhereInput | Prisma.evidencia_fotoWhereInput[];
    OR?: Prisma.evidencia_fotoWhereInput[];
    NOT?: Prisma.evidencia_fotoWhereInput | Prisma.evidencia_fotoWhereInput[];
    id_ot?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    url_cloudinary?: Prisma.StringFilter<"evidencia_foto"> | string;
    formato?: Prisma.StringNullableFilter<"evidencia_foto"> | string | null;
    tamano_kb?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    fecha_subida?: Prisma.DateTimeFilter<"evidencia_foto"> | Date | string;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
}, "id_foto">;
export type evidencia_fotoOrderByWithAggregationInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrderInput | Prisma.SortOrder;
    url_cloudinary?: Prisma.SortOrder;
    formato?: Prisma.SortOrderInput | Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
    _count?: Prisma.evidencia_fotoCountOrderByAggregateInput;
    _avg?: Prisma.evidencia_fotoAvgOrderByAggregateInput;
    _max?: Prisma.evidencia_fotoMaxOrderByAggregateInput;
    _min?: Prisma.evidencia_fotoMinOrderByAggregateInput;
    _sum?: Prisma.evidencia_fotoSumOrderByAggregateInput;
};
export type evidencia_fotoScalarWhereWithAggregatesInput = {
    AND?: Prisma.evidencia_fotoScalarWhereWithAggregatesInput | Prisma.evidencia_fotoScalarWhereWithAggregatesInput[];
    OR?: Prisma.evidencia_fotoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.evidencia_fotoScalarWhereWithAggregatesInput | Prisma.evidencia_fotoScalarWhereWithAggregatesInput[];
    id_foto?: Prisma.IntWithAggregatesFilter<"evidencia_foto"> | number;
    id_ot?: Prisma.IntNullableWithAggregatesFilter<"evidencia_foto"> | number | null;
    url_cloudinary?: Prisma.StringWithAggregatesFilter<"evidencia_foto"> | string;
    formato?: Prisma.StringNullableWithAggregatesFilter<"evidencia_foto"> | string | null;
    tamano_kb?: Prisma.IntNullableWithAggregatesFilter<"evidencia_foto"> | number | null;
    fecha_subida?: Prisma.DateTimeWithAggregatesFilter<"evidencia_foto"> | Date | string;
};
export type evidencia_fotoCreateInput = {
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutFotosInput;
};
export type evidencia_fotoUncheckedCreateInput = {
    id_foto?: number;
    id_ot?: number | null;
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
};
export type evidencia_fotoUpdateInput = {
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutFotosNestedInput;
};
export type evidencia_fotoUncheckedUpdateInput = {
    id_foto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type evidencia_fotoCreateManyInput = {
    id_foto?: number;
    id_ot?: number | null;
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
};
export type evidencia_fotoUpdateManyMutationInput = {
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type evidencia_fotoUncheckedUpdateManyInput = {
    id_foto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_ot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Evidencia_fotoListRelationFilter = {
    every?: Prisma.evidencia_fotoWhereInput;
    some?: Prisma.evidencia_fotoWhereInput;
    none?: Prisma.evidencia_fotoWhereInput;
};
export type evidencia_fotoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type evidencia_fotoCountOrderByAggregateInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    url_cloudinary?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type evidencia_fotoAvgOrderByAggregateInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrder;
};
export type evidencia_fotoMaxOrderByAggregateInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    url_cloudinary?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type evidencia_fotoMinOrderByAggregateInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    url_cloudinary?: Prisma.SortOrder;
    formato?: Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrder;
    fecha_subida?: Prisma.SortOrder;
};
export type evidencia_fotoSumOrderByAggregateInput = {
    id_foto?: Prisma.SortOrder;
    id_ot?: Prisma.SortOrder;
    tamano_kb?: Prisma.SortOrder;
};
export type evidencia_fotoCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput> | Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput[] | Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput | Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.evidencia_fotoCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
};
export type evidencia_fotoUncheckedCreateNestedManyWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput> | Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput[] | Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput | Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput[];
    createMany?: Prisma.evidencia_fotoCreateManyOrden_trabajoInputEnvelope;
    connect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
};
export type evidencia_fotoUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput> | Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput[] | Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput | Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.evidencia_fotoUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.evidencia_fotoCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    disconnect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    delete?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    connect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    update?: Prisma.evidencia_fotoUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.evidencia_fotoUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.evidencia_fotoScalarWhereInput | Prisma.evidencia_fotoScalarWhereInput[];
};
export type evidencia_fotoUncheckedUpdateManyWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput> | Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput[] | Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput[];
    connectOrCreate?: Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput | Prisma.evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput[];
    upsert?: Prisma.evidencia_fotoUpsertWithWhereUniqueWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpsertWithWhereUniqueWithoutOrden_trabajoInput[];
    createMany?: Prisma.evidencia_fotoCreateManyOrden_trabajoInputEnvelope;
    set?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    disconnect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    delete?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    connect?: Prisma.evidencia_fotoWhereUniqueInput | Prisma.evidencia_fotoWhereUniqueInput[];
    update?: Prisma.evidencia_fotoUpdateWithWhereUniqueWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpdateWithWhereUniqueWithoutOrden_trabajoInput[];
    updateMany?: Prisma.evidencia_fotoUpdateManyWithWhereWithoutOrden_trabajoInput | Prisma.evidencia_fotoUpdateManyWithWhereWithoutOrden_trabajoInput[];
    deleteMany?: Prisma.evidencia_fotoScalarWhereInput | Prisma.evidencia_fotoScalarWhereInput[];
};
export type evidencia_fotoCreateWithoutOrden_trabajoInput = {
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
};
export type evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput = {
    id_foto?: number;
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
};
export type evidencia_fotoCreateOrConnectWithoutOrden_trabajoInput = {
    where: Prisma.evidencia_fotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput>;
};
export type evidencia_fotoCreateManyOrden_trabajoInputEnvelope = {
    data: Prisma.evidencia_fotoCreateManyOrden_trabajoInput | Prisma.evidencia_fotoCreateManyOrden_trabajoInput[];
    skipDuplicates?: boolean;
};
export type evidencia_fotoUpsertWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.evidencia_fotoWhereUniqueInput;
    update: Prisma.XOR<Prisma.evidencia_fotoUpdateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedUpdateWithoutOrden_trabajoInput>;
    create: Prisma.XOR<Prisma.evidencia_fotoCreateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedCreateWithoutOrden_trabajoInput>;
};
export type evidencia_fotoUpdateWithWhereUniqueWithoutOrden_trabajoInput = {
    where: Prisma.evidencia_fotoWhereUniqueInput;
    data: Prisma.XOR<Prisma.evidencia_fotoUpdateWithoutOrden_trabajoInput, Prisma.evidencia_fotoUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type evidencia_fotoUpdateManyWithWhereWithoutOrden_trabajoInput = {
    where: Prisma.evidencia_fotoScalarWhereInput;
    data: Prisma.XOR<Prisma.evidencia_fotoUpdateManyMutationInput, Prisma.evidencia_fotoUncheckedUpdateManyWithoutOrden_trabajoInput>;
};
export type evidencia_fotoScalarWhereInput = {
    AND?: Prisma.evidencia_fotoScalarWhereInput | Prisma.evidencia_fotoScalarWhereInput[];
    OR?: Prisma.evidencia_fotoScalarWhereInput[];
    NOT?: Prisma.evidencia_fotoScalarWhereInput | Prisma.evidencia_fotoScalarWhereInput[];
    id_foto?: Prisma.IntFilter<"evidencia_foto"> | number;
    id_ot?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    url_cloudinary?: Prisma.StringFilter<"evidencia_foto"> | string;
    formato?: Prisma.StringNullableFilter<"evidencia_foto"> | string | null;
    tamano_kb?: Prisma.IntNullableFilter<"evidencia_foto"> | number | null;
    fecha_subida?: Prisma.DateTimeFilter<"evidencia_foto"> | Date | string;
};
export type evidencia_fotoCreateManyOrden_trabajoInput = {
    id_foto?: number;
    url_cloudinary: string;
    formato?: string | null;
    tamano_kb?: number | null;
    fecha_subida?: Date | string;
};
export type evidencia_fotoUpdateWithoutOrden_trabajoInput = {
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type evidencia_fotoUncheckedUpdateWithoutOrden_trabajoInput = {
    id_foto?: Prisma.IntFieldUpdateOperationsInput | number;
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type evidencia_fotoUncheckedUpdateManyWithoutOrden_trabajoInput = {
    id_foto?: Prisma.IntFieldUpdateOperationsInput | number;
    url_cloudinary?: Prisma.StringFieldUpdateOperationsInput | string;
    formato?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tamano_kb?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_subida?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type evidencia_fotoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_foto?: boolean;
    id_ot?: boolean;
    url_cloudinary?: boolean;
    formato?: boolean;
    tamano_kb?: boolean;
    fecha_subida?: boolean;
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["evidencia_foto"]>;
export type evidencia_fotoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_foto?: boolean;
    id_ot?: boolean;
    url_cloudinary?: boolean;
    formato?: boolean;
    tamano_kb?: boolean;
    fecha_subida?: boolean;
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["evidencia_foto"]>;
export type evidencia_fotoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_foto?: boolean;
    id_ot?: boolean;
    url_cloudinary?: boolean;
    formato?: boolean;
    tamano_kb?: boolean;
    fecha_subida?: boolean;
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["evidencia_foto"]>;
export type evidencia_fotoSelectScalar = {
    id_foto?: boolean;
    id_ot?: boolean;
    url_cloudinary?: boolean;
    formato?: boolean;
    tamano_kb?: boolean;
    fecha_subida?: boolean;
};
export type evidencia_fotoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_foto" | "id_ot" | "url_cloudinary" | "formato" | "tamano_kb" | "fecha_subida", ExtArgs["result"]["evidencia_foto"]>;
export type evidencia_fotoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
};
export type evidencia_fotoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
};
export type evidencia_fotoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orden_trabajo?: boolean | Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>;
};
export type $evidencia_fotoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "evidencia_foto";
    objects: {
        orden_trabajo: Prisma.$orden_trabajoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_foto: number;
        id_ot: number | null;
        url_cloudinary: string;
        formato: string | null;
        tamano_kb: number | null;
        fecha_subida: Date;
    }, ExtArgs["result"]["evidencia_foto"]>;
    composites: {};
};
export type evidencia_fotoGetPayload<S extends boolean | null | undefined | evidencia_fotoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload, S>;
export type evidencia_fotoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<evidencia_fotoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Evidencia_fotoCountAggregateInputType | true;
};
export interface evidencia_fotoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['evidencia_foto'];
        meta: {
            name: 'evidencia_foto';
        };
    };
    findUnique<T extends evidencia_fotoFindUniqueArgs>(args: Prisma.SelectSubset<T, evidencia_fotoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends evidencia_fotoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, evidencia_fotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends evidencia_fotoFindFirstArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoFindFirstArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends evidencia_fotoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends evidencia_fotoFindManyArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends evidencia_fotoCreateArgs>(args: Prisma.SelectSubset<T, evidencia_fotoCreateArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends evidencia_fotoCreateManyArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends evidencia_fotoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends evidencia_fotoDeleteArgs>(args: Prisma.SelectSubset<T, evidencia_fotoDeleteArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends evidencia_fotoUpdateArgs>(args: Prisma.SelectSubset<T, evidencia_fotoUpdateArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends evidencia_fotoDeleteManyArgs>(args?: Prisma.SelectSubset<T, evidencia_fotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends evidencia_fotoUpdateManyArgs>(args: Prisma.SelectSubset<T, evidencia_fotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends evidencia_fotoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, evidencia_fotoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends evidencia_fotoUpsertArgs>(args: Prisma.SelectSubset<T, evidencia_fotoUpsertArgs<ExtArgs>>): Prisma.Prisma__evidencia_fotoClient<runtime.Types.Result.GetResult<Prisma.$evidencia_fotoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends evidencia_fotoCountArgs>(args?: Prisma.Subset<T, evidencia_fotoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Evidencia_fotoCountAggregateOutputType> : number>;
    aggregate<T extends Evidencia_fotoAggregateArgs>(args: Prisma.Subset<T, Evidencia_fotoAggregateArgs>): Prisma.PrismaPromise<GetEvidencia_fotoAggregateType<T>>;
    groupBy<T extends evidencia_fotoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: evidencia_fotoGroupByArgs['orderBy'];
    } : {
        orderBy?: evidencia_fotoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, evidencia_fotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvidencia_fotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: evidencia_fotoFieldRefs;
}
export interface Prisma__evidencia_fotoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orden_trabajo<T extends Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.evidencia_foto$orden_trabajoArgs<ExtArgs>>): Prisma.Prisma__orden_trabajoClient<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface evidencia_fotoFieldRefs {
    readonly id_foto: Prisma.FieldRef<"evidencia_foto", 'Int'>;
    readonly id_ot: Prisma.FieldRef<"evidencia_foto", 'Int'>;
    readonly url_cloudinary: Prisma.FieldRef<"evidencia_foto", 'String'>;
    readonly formato: Prisma.FieldRef<"evidencia_foto", 'String'>;
    readonly tamano_kb: Prisma.FieldRef<"evidencia_foto", 'Int'>;
    readonly fecha_subida: Prisma.FieldRef<"evidencia_foto", 'DateTime'>;
}
export type evidencia_fotoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where: Prisma.evidencia_fotoWhereUniqueInput;
};
export type evidencia_fotoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where: Prisma.evidencia_fotoWhereUniqueInput;
};
export type evidencia_fotoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where?: Prisma.evidencia_fotoWhereInput;
    orderBy?: Prisma.evidencia_fotoOrderByWithRelationInput | Prisma.evidencia_fotoOrderByWithRelationInput[];
    cursor?: Prisma.evidencia_fotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Evidencia_fotoScalarFieldEnum | Prisma.Evidencia_fotoScalarFieldEnum[];
};
export type evidencia_fotoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where?: Prisma.evidencia_fotoWhereInput;
    orderBy?: Prisma.evidencia_fotoOrderByWithRelationInput | Prisma.evidencia_fotoOrderByWithRelationInput[];
    cursor?: Prisma.evidencia_fotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Evidencia_fotoScalarFieldEnum | Prisma.Evidencia_fotoScalarFieldEnum[];
};
export type evidencia_fotoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where?: Prisma.evidencia_fotoWhereInput;
    orderBy?: Prisma.evidencia_fotoOrderByWithRelationInput | Prisma.evidencia_fotoOrderByWithRelationInput[];
    cursor?: Prisma.evidencia_fotoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Evidencia_fotoScalarFieldEnum | Prisma.Evidencia_fotoScalarFieldEnum[];
};
export type evidencia_fotoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.evidencia_fotoCreateInput, Prisma.evidencia_fotoUncheckedCreateInput>;
};
export type evidencia_fotoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.evidencia_fotoCreateManyInput | Prisma.evidencia_fotoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type evidencia_fotoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    data: Prisma.evidencia_fotoCreateManyInput | Prisma.evidencia_fotoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.evidencia_fotoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type evidencia_fotoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.evidencia_fotoUpdateInput, Prisma.evidencia_fotoUncheckedUpdateInput>;
    where: Prisma.evidencia_fotoWhereUniqueInput;
};
export type evidencia_fotoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.evidencia_fotoUpdateManyMutationInput, Prisma.evidencia_fotoUncheckedUpdateManyInput>;
    where?: Prisma.evidencia_fotoWhereInput;
    limit?: number;
};
export type evidencia_fotoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.evidencia_fotoUpdateManyMutationInput, Prisma.evidencia_fotoUncheckedUpdateManyInput>;
    where?: Prisma.evidencia_fotoWhereInput;
    limit?: number;
    include?: Prisma.evidencia_fotoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type evidencia_fotoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where: Prisma.evidencia_fotoWhereUniqueInput;
    create: Prisma.XOR<Prisma.evidencia_fotoCreateInput, Prisma.evidencia_fotoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.evidencia_fotoUpdateInput, Prisma.evidencia_fotoUncheckedUpdateInput>;
};
export type evidencia_fotoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
    where: Prisma.evidencia_fotoWhereUniqueInput;
};
export type evidencia_fotoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.evidencia_fotoWhereInput;
    limit?: number;
};
export type evidencia_foto$orden_trabajoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
};
export type evidencia_fotoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.evidencia_fotoSelect<ExtArgs> | null;
    omit?: Prisma.evidencia_fotoOmit<ExtArgs> | null;
    include?: Prisma.evidencia_fotoInclude<ExtArgs> | null;
};
