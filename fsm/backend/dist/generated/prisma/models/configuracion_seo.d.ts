import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type configuracion_seoModel = runtime.Types.Result.DefaultSelection<Prisma.$configuracion_seoPayload>;
export type AggregateConfiguracion_seo = {
    _count: Configuracion_seoCountAggregateOutputType | null;
    _avg: Configuracion_seoAvgAggregateOutputType | null;
    _sum: Configuracion_seoSumAggregateOutputType | null;
    _min: Configuracion_seoMinAggregateOutputType | null;
    _max: Configuracion_seoMaxAggregateOutputType | null;
};
export type Configuracion_seoAvgAggregateOutputType = {
    id_seo: number | null;
    id_empresa: number | null;
};
export type Configuracion_seoSumAggregateOutputType = {
    id_seo: number | null;
    id_empresa: number | null;
};
export type Configuracion_seoMinAggregateOutputType = {
    id_seo: number | null;
    id_empresa: number | null;
    seccion_url: string | null;
    meta_titulo: string | null;
    meta_descripcion: string | null;
    fecha_actualizacion: Date | null;
};
export type Configuracion_seoMaxAggregateOutputType = {
    id_seo: number | null;
    id_empresa: number | null;
    seccion_url: string | null;
    meta_titulo: string | null;
    meta_descripcion: string | null;
    fecha_actualizacion: Date | null;
};
export type Configuracion_seoCountAggregateOutputType = {
    id_seo: number;
    id_empresa: number;
    seccion_url: number;
    meta_titulo: number;
    meta_descripcion: number;
    og_tags: number;
    fecha_actualizacion: number;
    _all: number;
};
export type Configuracion_seoAvgAggregateInputType = {
    id_seo?: true;
    id_empresa?: true;
};
export type Configuracion_seoSumAggregateInputType = {
    id_seo?: true;
    id_empresa?: true;
};
export type Configuracion_seoMinAggregateInputType = {
    id_seo?: true;
    id_empresa?: true;
    seccion_url?: true;
    meta_titulo?: true;
    meta_descripcion?: true;
    fecha_actualizacion?: true;
};
export type Configuracion_seoMaxAggregateInputType = {
    id_seo?: true;
    id_empresa?: true;
    seccion_url?: true;
    meta_titulo?: true;
    meta_descripcion?: true;
    fecha_actualizacion?: true;
};
export type Configuracion_seoCountAggregateInputType = {
    id_seo?: true;
    id_empresa?: true;
    seccion_url?: true;
    meta_titulo?: true;
    meta_descripcion?: true;
    og_tags?: true;
    fecha_actualizacion?: true;
    _all?: true;
};
export type Configuracion_seoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracion_seoWhereInput;
    orderBy?: Prisma.configuracion_seoOrderByWithRelationInput | Prisma.configuracion_seoOrderByWithRelationInput[];
    cursor?: Prisma.configuracion_seoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Configuracion_seoCountAggregateInputType;
    _avg?: Configuracion_seoAvgAggregateInputType;
    _sum?: Configuracion_seoSumAggregateInputType;
    _min?: Configuracion_seoMinAggregateInputType;
    _max?: Configuracion_seoMaxAggregateInputType;
};
export type GetConfiguracion_seoAggregateType<T extends Configuracion_seoAggregateArgs> = {
    [P in keyof T & keyof AggregateConfiguracion_seo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateConfiguracion_seo[P]> : Prisma.GetScalarType<T[P], AggregateConfiguracion_seo[P]>;
};
export type configuracion_seoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracion_seoWhereInput;
    orderBy?: Prisma.configuracion_seoOrderByWithAggregationInput | Prisma.configuracion_seoOrderByWithAggregationInput[];
    by: Prisma.Configuracion_seoScalarFieldEnum[] | Prisma.Configuracion_seoScalarFieldEnum;
    having?: Prisma.configuracion_seoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Configuracion_seoCountAggregateInputType | true;
    _avg?: Configuracion_seoAvgAggregateInputType;
    _sum?: Configuracion_seoSumAggregateInputType;
    _min?: Configuracion_seoMinAggregateInputType;
    _max?: Configuracion_seoMaxAggregateInputType;
};
export type Configuracion_seoGroupByOutputType = {
    id_seo: number;
    id_empresa: number;
    seccion_url: string;
    meta_titulo: string | null;
    meta_descripcion: string | null;
    og_tags: runtime.JsonValue | null;
    fecha_actualizacion: Date;
    _count: Configuracion_seoCountAggregateOutputType | null;
    _avg: Configuracion_seoAvgAggregateOutputType | null;
    _sum: Configuracion_seoSumAggregateOutputType | null;
    _min: Configuracion_seoMinAggregateOutputType | null;
    _max: Configuracion_seoMaxAggregateOutputType | null;
};
export type GetConfiguracion_seoGroupByPayload<T extends configuracion_seoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Configuracion_seoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Configuracion_seoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Configuracion_seoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Configuracion_seoGroupByOutputType[P]>;
}>>;
export type configuracion_seoWhereInput = {
    AND?: Prisma.configuracion_seoWhereInput | Prisma.configuracion_seoWhereInput[];
    OR?: Prisma.configuracion_seoWhereInput[];
    NOT?: Prisma.configuracion_seoWhereInput | Prisma.configuracion_seoWhereInput[];
    id_seo?: Prisma.IntFilter<"configuracion_seo"> | number;
    id_empresa?: Prisma.IntFilter<"configuracion_seo"> | number;
    seccion_url?: Prisma.StringFilter<"configuracion_seo"> | string;
    meta_titulo?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    meta_descripcion?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    og_tags?: Prisma.JsonNullableFilter<"configuracion_seo">;
    fecha_actualizacion?: Prisma.DateTimeFilter<"configuracion_seo"> | Date | string;
    empresa?: Prisma.XOR<Prisma.EmpresaScalarRelationFilter, Prisma.empresaWhereInput>;
};
export type configuracion_seoOrderByWithRelationInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    seccion_url?: Prisma.SortOrder;
    meta_titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    meta_descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    og_tags?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_actualizacion?: Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
};
export type configuracion_seoWhereUniqueInput = Prisma.AtLeast<{
    id_seo?: number;
    id_empresa_seccion_url?: Prisma.configuracion_seoId_empresaSeccion_urlCompoundUniqueInput;
    AND?: Prisma.configuracion_seoWhereInput | Prisma.configuracion_seoWhereInput[];
    OR?: Prisma.configuracion_seoWhereInput[];
    NOT?: Prisma.configuracion_seoWhereInput | Prisma.configuracion_seoWhereInput[];
    id_empresa?: Prisma.IntFilter<"configuracion_seo"> | number;
    seccion_url?: Prisma.StringFilter<"configuracion_seo"> | string;
    meta_titulo?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    meta_descripcion?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    og_tags?: Prisma.JsonNullableFilter<"configuracion_seo">;
    fecha_actualizacion?: Prisma.DateTimeFilter<"configuracion_seo"> | Date | string;
    empresa?: Prisma.XOR<Prisma.EmpresaScalarRelationFilter, Prisma.empresaWhereInput>;
}, "id_seo" | "id_empresa_seccion_url">;
export type configuracion_seoOrderByWithAggregationInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    seccion_url?: Prisma.SortOrder;
    meta_titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    meta_descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    og_tags?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_actualizacion?: Prisma.SortOrder;
    _count?: Prisma.configuracion_seoCountOrderByAggregateInput;
    _avg?: Prisma.configuracion_seoAvgOrderByAggregateInput;
    _max?: Prisma.configuracion_seoMaxOrderByAggregateInput;
    _min?: Prisma.configuracion_seoMinOrderByAggregateInput;
    _sum?: Prisma.configuracion_seoSumOrderByAggregateInput;
};
export type configuracion_seoScalarWhereWithAggregatesInput = {
    AND?: Prisma.configuracion_seoScalarWhereWithAggregatesInput | Prisma.configuracion_seoScalarWhereWithAggregatesInput[];
    OR?: Prisma.configuracion_seoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.configuracion_seoScalarWhereWithAggregatesInput | Prisma.configuracion_seoScalarWhereWithAggregatesInput[];
    id_seo?: Prisma.IntWithAggregatesFilter<"configuracion_seo"> | number;
    id_empresa?: Prisma.IntWithAggregatesFilter<"configuracion_seo"> | number;
    seccion_url?: Prisma.StringWithAggregatesFilter<"configuracion_seo"> | string;
    meta_titulo?: Prisma.StringNullableWithAggregatesFilter<"configuracion_seo"> | string | null;
    meta_descripcion?: Prisma.StringNullableWithAggregatesFilter<"configuracion_seo"> | string | null;
    og_tags?: Prisma.JsonNullableWithAggregatesFilter<"configuracion_seo">;
    fecha_actualizacion?: Prisma.DateTimeWithAggregatesFilter<"configuracion_seo"> | Date | string;
};
export type configuracion_seoCreateInput = {
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
    empresa: Prisma.empresaCreateNestedOneWithoutConfiguraciones_seoInput;
};
export type configuracion_seoUncheckedCreateInput = {
    id_seo?: number;
    id_empresa: number;
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
};
export type configuracion_seoUpdateInput = {
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    empresa?: Prisma.empresaUpdateOneRequiredWithoutConfiguraciones_seoNestedInput;
};
export type configuracion_seoUncheckedUpdateInput = {
    id_seo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.IntFieldUpdateOperationsInput | number;
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type configuracion_seoCreateManyInput = {
    id_seo?: number;
    id_empresa: number;
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
};
export type configuracion_seoUpdateManyMutationInput = {
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type configuracion_seoUncheckedUpdateManyInput = {
    id_seo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.IntFieldUpdateOperationsInput | number;
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Configuracion_seoListRelationFilter = {
    every?: Prisma.configuracion_seoWhereInput;
    some?: Prisma.configuracion_seoWhereInput;
    none?: Prisma.configuracion_seoWhereInput;
};
export type configuracion_seoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type configuracion_seoId_empresaSeccion_urlCompoundUniqueInput = {
    id_empresa: number;
    seccion_url: string;
};
export type configuracion_seoCountOrderByAggregateInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    seccion_url?: Prisma.SortOrder;
    meta_titulo?: Prisma.SortOrder;
    meta_descripcion?: Prisma.SortOrder;
    og_tags?: Prisma.SortOrder;
    fecha_actualizacion?: Prisma.SortOrder;
};
export type configuracion_seoAvgOrderByAggregateInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type configuracion_seoMaxOrderByAggregateInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    seccion_url?: Prisma.SortOrder;
    meta_titulo?: Prisma.SortOrder;
    meta_descripcion?: Prisma.SortOrder;
    fecha_actualizacion?: Prisma.SortOrder;
};
export type configuracion_seoMinOrderByAggregateInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    seccion_url?: Prisma.SortOrder;
    meta_titulo?: Prisma.SortOrder;
    meta_descripcion?: Prisma.SortOrder;
    fecha_actualizacion?: Prisma.SortOrder;
};
export type configuracion_seoSumOrderByAggregateInput = {
    id_seo?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type configuracion_seoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput> | Prisma.configuracion_seoCreateWithoutEmpresaInput[] | Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput | Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.configuracion_seoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
};
export type configuracion_seoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput> | Prisma.configuracion_seoCreateWithoutEmpresaInput[] | Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput | Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.configuracion_seoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
};
export type configuracion_seoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput> | Prisma.configuracion_seoCreateWithoutEmpresaInput[] | Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput | Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.configuracion_seoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.configuracion_seoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.configuracion_seoCreateManyEmpresaInputEnvelope;
    set?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    disconnect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    delete?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    connect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    update?: Prisma.configuracion_seoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.configuracion_seoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.configuracion_seoUpdateManyWithWhereWithoutEmpresaInput | Prisma.configuracion_seoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.configuracion_seoScalarWhereInput | Prisma.configuracion_seoScalarWhereInput[];
};
export type configuracion_seoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput> | Prisma.configuracion_seoCreateWithoutEmpresaInput[] | Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput | Prisma.configuracion_seoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.configuracion_seoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.configuracion_seoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.configuracion_seoCreateManyEmpresaInputEnvelope;
    set?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    disconnect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    delete?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    connect?: Prisma.configuracion_seoWhereUniqueInput | Prisma.configuracion_seoWhereUniqueInput[];
    update?: Prisma.configuracion_seoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.configuracion_seoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.configuracion_seoUpdateManyWithWhereWithoutEmpresaInput | Prisma.configuracion_seoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.configuracion_seoScalarWhereInput | Prisma.configuracion_seoScalarWhereInput[];
};
export type configuracion_seoCreateWithoutEmpresaInput = {
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
};
export type configuracion_seoUncheckedCreateWithoutEmpresaInput = {
    id_seo?: number;
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
};
export type configuracion_seoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.configuracion_seoWhereUniqueInput;
    create: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput>;
};
export type configuracion_seoCreateManyEmpresaInputEnvelope = {
    data: Prisma.configuracion_seoCreateManyEmpresaInput | Prisma.configuracion_seoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type configuracion_seoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.configuracion_seoWhereUniqueInput;
    update: Prisma.XOR<Prisma.configuracion_seoUpdateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.configuracion_seoCreateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedCreateWithoutEmpresaInput>;
};
export type configuracion_seoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.configuracion_seoWhereUniqueInput;
    data: Prisma.XOR<Prisma.configuracion_seoUpdateWithoutEmpresaInput, Prisma.configuracion_seoUncheckedUpdateWithoutEmpresaInput>;
};
export type configuracion_seoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.configuracion_seoScalarWhereInput;
    data: Prisma.XOR<Prisma.configuracion_seoUpdateManyMutationInput, Prisma.configuracion_seoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type configuracion_seoScalarWhereInput = {
    AND?: Prisma.configuracion_seoScalarWhereInput | Prisma.configuracion_seoScalarWhereInput[];
    OR?: Prisma.configuracion_seoScalarWhereInput[];
    NOT?: Prisma.configuracion_seoScalarWhereInput | Prisma.configuracion_seoScalarWhereInput[];
    id_seo?: Prisma.IntFilter<"configuracion_seo"> | number;
    id_empresa?: Prisma.IntFilter<"configuracion_seo"> | number;
    seccion_url?: Prisma.StringFilter<"configuracion_seo"> | string;
    meta_titulo?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    meta_descripcion?: Prisma.StringNullableFilter<"configuracion_seo"> | string | null;
    og_tags?: Prisma.JsonNullableFilter<"configuracion_seo">;
    fecha_actualizacion?: Prisma.DateTimeFilter<"configuracion_seo"> | Date | string;
};
export type configuracion_seoCreateManyEmpresaInput = {
    id_seo?: number;
    seccion_url: string;
    meta_titulo?: string | null;
    meta_descripcion?: string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Date | string;
};
export type configuracion_seoUpdateWithoutEmpresaInput = {
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type configuracion_seoUncheckedUpdateWithoutEmpresaInput = {
    id_seo?: Prisma.IntFieldUpdateOperationsInput | number;
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type configuracion_seoUncheckedUpdateManyWithoutEmpresaInput = {
    id_seo?: Prisma.IntFieldUpdateOperationsInput | number;
    seccion_url?: Prisma.StringFieldUpdateOperationsInput | string;
    meta_titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    meta_descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    og_tags?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    fecha_actualizacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type configuracion_seoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_seo?: boolean;
    id_empresa?: boolean;
    seccion_url?: boolean;
    meta_titulo?: boolean;
    meta_descripcion?: boolean;
    og_tags?: boolean;
    fecha_actualizacion?: boolean;
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["configuracion_seo"]>;
export type configuracion_seoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_seo?: boolean;
    id_empresa?: boolean;
    seccion_url?: boolean;
    meta_titulo?: boolean;
    meta_descripcion?: boolean;
    og_tags?: boolean;
    fecha_actualizacion?: boolean;
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["configuracion_seo"]>;
export type configuracion_seoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_seo?: boolean;
    id_empresa?: boolean;
    seccion_url?: boolean;
    meta_titulo?: boolean;
    meta_descripcion?: boolean;
    og_tags?: boolean;
    fecha_actualizacion?: boolean;
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["configuracion_seo"]>;
export type configuracion_seoSelectScalar = {
    id_seo?: boolean;
    id_empresa?: boolean;
    seccion_url?: boolean;
    meta_titulo?: boolean;
    meta_descripcion?: boolean;
    og_tags?: boolean;
    fecha_actualizacion?: boolean;
};
export type configuracion_seoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_seo" | "id_empresa" | "seccion_url" | "meta_titulo" | "meta_descripcion" | "og_tags" | "fecha_actualizacion", ExtArgs["result"]["configuracion_seo"]>;
export type configuracion_seoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
};
export type configuracion_seoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
};
export type configuracion_seoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.empresaDefaultArgs<ExtArgs>;
};
export type $configuracion_seoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "configuracion_seo";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_seo: number;
        id_empresa: number;
        seccion_url: string;
        meta_titulo: string | null;
        meta_descripcion: string | null;
        og_tags: runtime.JsonValue | null;
        fecha_actualizacion: Date;
    }, ExtArgs["result"]["configuracion_seo"]>;
    composites: {};
};
export type configuracion_seoGetPayload<S extends boolean | null | undefined | configuracion_seoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload, S>;
export type configuracion_seoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<configuracion_seoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Configuracion_seoCountAggregateInputType | true;
};
export interface configuracion_seoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['configuracion_seo'];
        meta: {
            name: 'configuracion_seo';
        };
    };
    findUnique<T extends configuracion_seoFindUniqueArgs>(args: Prisma.SelectSubset<T, configuracion_seoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends configuracion_seoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, configuracion_seoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends configuracion_seoFindFirstArgs>(args?: Prisma.SelectSubset<T, configuracion_seoFindFirstArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends configuracion_seoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, configuracion_seoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends configuracion_seoFindManyArgs>(args?: Prisma.SelectSubset<T, configuracion_seoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends configuracion_seoCreateArgs>(args: Prisma.SelectSubset<T, configuracion_seoCreateArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends configuracion_seoCreateManyArgs>(args?: Prisma.SelectSubset<T, configuracion_seoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends configuracion_seoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, configuracion_seoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends configuracion_seoDeleteArgs>(args: Prisma.SelectSubset<T, configuracion_seoDeleteArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends configuracion_seoUpdateArgs>(args: Prisma.SelectSubset<T, configuracion_seoUpdateArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends configuracion_seoDeleteManyArgs>(args?: Prisma.SelectSubset<T, configuracion_seoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends configuracion_seoUpdateManyArgs>(args: Prisma.SelectSubset<T, configuracion_seoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends configuracion_seoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, configuracion_seoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends configuracion_seoUpsertArgs>(args: Prisma.SelectSubset<T, configuracion_seoUpsertArgs<ExtArgs>>): Prisma.Prisma__configuracion_seoClient<runtime.Types.Result.GetResult<Prisma.$configuracion_seoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends configuracion_seoCountArgs>(args?: Prisma.Subset<T, configuracion_seoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Configuracion_seoCountAggregateOutputType> : number>;
    aggregate<T extends Configuracion_seoAggregateArgs>(args: Prisma.Subset<T, Configuracion_seoAggregateArgs>): Prisma.PrismaPromise<GetConfiguracion_seoAggregateType<T>>;
    groupBy<T extends configuracion_seoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: configuracion_seoGroupByArgs['orderBy'];
    } : {
        orderBy?: configuracion_seoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, configuracion_seoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConfiguracion_seoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: configuracion_seoFieldRefs;
}
export interface Prisma__configuracion_seoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.empresaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.empresaDefaultArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface configuracion_seoFieldRefs {
    readonly id_seo: Prisma.FieldRef<"configuracion_seo", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"configuracion_seo", 'Int'>;
    readonly seccion_url: Prisma.FieldRef<"configuracion_seo", 'String'>;
    readonly meta_titulo: Prisma.FieldRef<"configuracion_seo", 'String'>;
    readonly meta_descripcion: Prisma.FieldRef<"configuracion_seo", 'String'>;
    readonly og_tags: Prisma.FieldRef<"configuracion_seo", 'Json'>;
    readonly fecha_actualizacion: Prisma.FieldRef<"configuracion_seo", 'DateTime'>;
}
export type configuracion_seoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where: Prisma.configuracion_seoWhereUniqueInput;
};
export type configuracion_seoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where: Prisma.configuracion_seoWhereUniqueInput;
};
export type configuracion_seoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where?: Prisma.configuracion_seoWhereInput;
    orderBy?: Prisma.configuracion_seoOrderByWithRelationInput | Prisma.configuracion_seoOrderByWithRelationInput[];
    cursor?: Prisma.configuracion_seoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Configuracion_seoScalarFieldEnum | Prisma.Configuracion_seoScalarFieldEnum[];
};
export type configuracion_seoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where?: Prisma.configuracion_seoWhereInput;
    orderBy?: Prisma.configuracion_seoOrderByWithRelationInput | Prisma.configuracion_seoOrderByWithRelationInput[];
    cursor?: Prisma.configuracion_seoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Configuracion_seoScalarFieldEnum | Prisma.Configuracion_seoScalarFieldEnum[];
};
export type configuracion_seoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where?: Prisma.configuracion_seoWhereInput;
    orderBy?: Prisma.configuracion_seoOrderByWithRelationInput | Prisma.configuracion_seoOrderByWithRelationInput[];
    cursor?: Prisma.configuracion_seoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Configuracion_seoScalarFieldEnum | Prisma.Configuracion_seoScalarFieldEnum[];
};
export type configuracion_seoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.configuracion_seoCreateInput, Prisma.configuracion_seoUncheckedCreateInput>;
};
export type configuracion_seoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.configuracion_seoCreateManyInput | Prisma.configuracion_seoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type configuracion_seoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    data: Prisma.configuracion_seoCreateManyInput | Prisma.configuracion_seoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.configuracion_seoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type configuracion_seoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.configuracion_seoUpdateInput, Prisma.configuracion_seoUncheckedUpdateInput>;
    where: Prisma.configuracion_seoWhereUniqueInput;
};
export type configuracion_seoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.configuracion_seoUpdateManyMutationInput, Prisma.configuracion_seoUncheckedUpdateManyInput>;
    where?: Prisma.configuracion_seoWhereInput;
    limit?: number;
};
export type configuracion_seoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.configuracion_seoUpdateManyMutationInput, Prisma.configuracion_seoUncheckedUpdateManyInput>;
    where?: Prisma.configuracion_seoWhereInput;
    limit?: number;
    include?: Prisma.configuracion_seoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type configuracion_seoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where: Prisma.configuracion_seoWhereUniqueInput;
    create: Prisma.XOR<Prisma.configuracion_seoCreateInput, Prisma.configuracion_seoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.configuracion_seoUpdateInput, Prisma.configuracion_seoUncheckedUpdateInput>;
};
export type configuracion_seoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
    where: Prisma.configuracion_seoWhereUniqueInput;
};
export type configuracion_seoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.configuracion_seoWhereInput;
    limit?: number;
};
export type configuracion_seoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.configuracion_seoSelect<ExtArgs> | null;
    omit?: Prisma.configuracion_seoOmit<ExtArgs> | null;
    include?: Prisma.configuracion_seoInclude<ExtArgs> | null;
};
