import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type prestamo_externoModel = runtime.Types.Result.DefaultSelection<Prisma.$prestamo_externoPayload>;
export type AggregatePrestamo_externo = {
    _count: Prestamo_externoCountAggregateOutputType | null;
    _avg: Prestamo_externoAvgAggregateOutputType | null;
    _sum: Prestamo_externoSumAggregateOutputType | null;
    _min: Prestamo_externoMinAggregateOutputType | null;
    _max: Prestamo_externoMaxAggregateOutputType | null;
};
export type Prestamo_externoAvgAggregateOutputType = {
    id_prestamo: number | null;
    id_unidad: number | null;
    id_empresa_prestamista: number | null;
};
export type Prestamo_externoSumAggregateOutputType = {
    id_prestamo: number | null;
    id_unidad: number | null;
    id_empresa_prestamista: number | null;
};
export type Prestamo_externoMinAggregateOutputType = {
    id_prestamo: number | null;
    id_unidad: number | null;
    id_empresa_prestamista: number | null;
    destinatario: string | null;
    motivo: string | null;
    fecha_salida: Date | null;
    fecha_retorno_esperada: Date | null;
    fecha_retorno_real: Date | null;
    estado: string | null;
    condicion_retorno: string | null;
};
export type Prestamo_externoMaxAggregateOutputType = {
    id_prestamo: number | null;
    id_unidad: number | null;
    id_empresa_prestamista: number | null;
    destinatario: string | null;
    motivo: string | null;
    fecha_salida: Date | null;
    fecha_retorno_esperada: Date | null;
    fecha_retorno_real: Date | null;
    estado: string | null;
    condicion_retorno: string | null;
};
export type Prestamo_externoCountAggregateOutputType = {
    id_prestamo: number;
    id_unidad: number;
    id_empresa_prestamista: number;
    destinatario: number;
    motivo: number;
    fecha_salida: number;
    fecha_retorno_esperada: number;
    fecha_retorno_real: number;
    estado: number;
    condicion_retorno: number;
    _all: number;
};
export type Prestamo_externoAvgAggregateInputType = {
    id_prestamo?: true;
    id_unidad?: true;
    id_empresa_prestamista?: true;
};
export type Prestamo_externoSumAggregateInputType = {
    id_prestamo?: true;
    id_unidad?: true;
    id_empresa_prestamista?: true;
};
export type Prestamo_externoMinAggregateInputType = {
    id_prestamo?: true;
    id_unidad?: true;
    id_empresa_prestamista?: true;
    destinatario?: true;
    motivo?: true;
    fecha_salida?: true;
    fecha_retorno_esperada?: true;
    fecha_retorno_real?: true;
    estado?: true;
    condicion_retorno?: true;
};
export type Prestamo_externoMaxAggregateInputType = {
    id_prestamo?: true;
    id_unidad?: true;
    id_empresa_prestamista?: true;
    destinatario?: true;
    motivo?: true;
    fecha_salida?: true;
    fecha_retorno_esperada?: true;
    fecha_retorno_real?: true;
    estado?: true;
    condicion_retorno?: true;
};
export type Prestamo_externoCountAggregateInputType = {
    id_prestamo?: true;
    id_unidad?: true;
    id_empresa_prestamista?: true;
    destinatario?: true;
    motivo?: true;
    fecha_salida?: true;
    fecha_retorno_esperada?: true;
    fecha_retorno_real?: true;
    estado?: true;
    condicion_retorno?: true;
    _all?: true;
};
export type Prestamo_externoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prestamo_externoWhereInput;
    orderBy?: Prisma.prestamo_externoOrderByWithRelationInput | Prisma.prestamo_externoOrderByWithRelationInput[];
    cursor?: Prisma.prestamo_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Prestamo_externoCountAggregateInputType;
    _avg?: Prestamo_externoAvgAggregateInputType;
    _sum?: Prestamo_externoSumAggregateInputType;
    _min?: Prestamo_externoMinAggregateInputType;
    _max?: Prestamo_externoMaxAggregateInputType;
};
export type GetPrestamo_externoAggregateType<T extends Prestamo_externoAggregateArgs> = {
    [P in keyof T & keyof AggregatePrestamo_externo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrestamo_externo[P]> : Prisma.GetScalarType<T[P], AggregatePrestamo_externo[P]>;
};
export type prestamo_externoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prestamo_externoWhereInput;
    orderBy?: Prisma.prestamo_externoOrderByWithAggregationInput | Prisma.prestamo_externoOrderByWithAggregationInput[];
    by: Prisma.Prestamo_externoScalarFieldEnum[] | Prisma.Prestamo_externoScalarFieldEnum;
    having?: Prisma.prestamo_externoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Prestamo_externoCountAggregateInputType | true;
    _avg?: Prestamo_externoAvgAggregateInputType;
    _sum?: Prestamo_externoSumAggregateInputType;
    _min?: Prestamo_externoMinAggregateInputType;
    _max?: Prestamo_externoMaxAggregateInputType;
};
export type Prestamo_externoGroupByOutputType = {
    id_prestamo: number;
    id_unidad: number | null;
    id_empresa_prestamista: number | null;
    destinatario: string | null;
    motivo: string | null;
    fecha_salida: Date | null;
    fecha_retorno_esperada: Date | null;
    fecha_retorno_real: Date | null;
    estado: string | null;
    condicion_retorno: string | null;
    _count: Prestamo_externoCountAggregateOutputType | null;
    _avg: Prestamo_externoAvgAggregateOutputType | null;
    _sum: Prestamo_externoSumAggregateOutputType | null;
    _min: Prestamo_externoMinAggregateOutputType | null;
    _max: Prestamo_externoMaxAggregateOutputType | null;
};
export type GetPrestamo_externoGroupByPayload<T extends prestamo_externoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Prestamo_externoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Prestamo_externoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Prestamo_externoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Prestamo_externoGroupByOutputType[P]>;
}>>;
export type prestamo_externoWhereInput = {
    AND?: Prisma.prestamo_externoWhereInput | Prisma.prestamo_externoWhereInput[];
    OR?: Prisma.prestamo_externoWhereInput[];
    NOT?: Prisma.prestamo_externoWhereInput | Prisma.prestamo_externoWhereInput[];
    id_prestamo?: Prisma.IntFilter<"prestamo_externo"> | number;
    id_unidad?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    id_empresa_prestamista?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    destinatario?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    fecha_salida?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_esperada?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_real?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    condicion_retorno?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    empresa_prestamista?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
};
export type prestamo_externoOrderByWithRelationInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrderInput | Prisma.SortOrder;
    destinatario?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_salida?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_retorno_esperada?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_retorno_real?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    condicion_retorno?: Prisma.SortOrderInput | Prisma.SortOrder;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
    empresa_prestamista?: Prisma.empresaOrderByWithRelationInput;
};
export type prestamo_externoWhereUniqueInput = Prisma.AtLeast<{
    id_prestamo?: number;
    AND?: Prisma.prestamo_externoWhereInput | Prisma.prestamo_externoWhereInput[];
    OR?: Prisma.prestamo_externoWhereInput[];
    NOT?: Prisma.prestamo_externoWhereInput | Prisma.prestamo_externoWhereInput[];
    id_unidad?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    id_empresa_prestamista?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    destinatario?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    fecha_salida?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_esperada?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_real?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    condicion_retorno?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    empresa_prestamista?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
}, "id_prestamo">;
export type prestamo_externoOrderByWithAggregationInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrderInput | Prisma.SortOrder;
    destinatario?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_salida?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_retorno_esperada?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_retorno_real?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    condicion_retorno?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.prestamo_externoCountOrderByAggregateInput;
    _avg?: Prisma.prestamo_externoAvgOrderByAggregateInput;
    _max?: Prisma.prestamo_externoMaxOrderByAggregateInput;
    _min?: Prisma.prestamo_externoMinOrderByAggregateInput;
    _sum?: Prisma.prestamo_externoSumOrderByAggregateInput;
};
export type prestamo_externoScalarWhereWithAggregatesInput = {
    AND?: Prisma.prestamo_externoScalarWhereWithAggregatesInput | Prisma.prestamo_externoScalarWhereWithAggregatesInput[];
    OR?: Prisma.prestamo_externoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.prestamo_externoScalarWhereWithAggregatesInput | Prisma.prestamo_externoScalarWhereWithAggregatesInput[];
    id_prestamo?: Prisma.IntWithAggregatesFilter<"prestamo_externo"> | number;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"prestamo_externo"> | number | null;
    id_empresa_prestamista?: Prisma.IntNullableWithAggregatesFilter<"prestamo_externo"> | number | null;
    destinatario?: Prisma.StringNullableWithAggregatesFilter<"prestamo_externo"> | string | null;
    motivo?: Prisma.StringNullableWithAggregatesFilter<"prestamo_externo"> | string | null;
    fecha_salida?: Prisma.DateTimeNullableWithAggregatesFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_esperada?: Prisma.DateTimeNullableWithAggregatesFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_real?: Prisma.DateTimeNullableWithAggregatesFilter<"prestamo_externo"> | Date | string | null;
    estado?: Prisma.StringNullableWithAggregatesFilter<"prestamo_externo"> | string | null;
    condicion_retorno?: Prisma.StringNullableWithAggregatesFilter<"prestamo_externo"> | string | null;
};
export type prestamo_externoCreateInput = {
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutPrestamosInput;
    empresa_prestamista?: Prisma.empresaCreateNestedOneWithoutPrestamosInput;
};
export type prestamo_externoUncheckedCreateInput = {
    id_prestamo?: number;
    id_unidad?: number | null;
    id_empresa_prestamista?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoUpdateInput = {
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutPrestamosNestedInput;
    empresa_prestamista?: Prisma.empresaUpdateOneWithoutPrestamosNestedInput;
};
export type prestamo_externoUncheckedUpdateInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_prestamista?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoCreateManyInput = {
    id_prestamo?: number;
    id_unidad?: number | null;
    id_empresa_prestamista?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoUpdateManyMutationInput = {
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoUncheckedUpdateManyInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_prestamista?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Prestamo_externoListRelationFilter = {
    every?: Prisma.prestamo_externoWhereInput;
    some?: Prisma.prestamo_externoWhereInput;
    none?: Prisma.prestamo_externoWhereInput;
};
export type prestamo_externoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type prestamo_externoCountOrderByAggregateInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrder;
    destinatario?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_salida?: Prisma.SortOrder;
    fecha_retorno_esperada?: Prisma.SortOrder;
    fecha_retorno_real?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    condicion_retorno?: Prisma.SortOrder;
};
export type prestamo_externoAvgOrderByAggregateInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrder;
};
export type prestamo_externoMaxOrderByAggregateInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrder;
    destinatario?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_salida?: Prisma.SortOrder;
    fecha_retorno_esperada?: Prisma.SortOrder;
    fecha_retorno_real?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    condicion_retorno?: Prisma.SortOrder;
};
export type prestamo_externoMinOrderByAggregateInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrder;
    destinatario?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_salida?: Prisma.SortOrder;
    fecha_retorno_esperada?: Prisma.SortOrder;
    fecha_retorno_real?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    condicion_retorno?: Prisma.SortOrder;
};
export type prestamo_externoSumOrderByAggregateInput = {
    id_prestamo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_prestamista?: Prisma.SortOrder;
};
export type prestamo_externoCreateNestedManyWithoutEmpresa_prestamistaInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput> | Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput[] | Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput[];
    createMany?: Prisma.prestamo_externoCreateManyEmpresa_prestamistaInputEnvelope;
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
};
export type prestamo_externoUncheckedCreateNestedManyWithoutEmpresa_prestamistaInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput> | Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput[] | Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput[];
    createMany?: Prisma.prestamo_externoCreateManyEmpresa_prestamistaInputEnvelope;
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
};
export type prestamo_externoUpdateManyWithoutEmpresa_prestamistaNestedInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput> | Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput[] | Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput[];
    upsert?: Prisma.prestamo_externoUpsertWithWhereUniqueWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpsertWithWhereUniqueWithoutEmpresa_prestamistaInput[];
    createMany?: Prisma.prestamo_externoCreateManyEmpresa_prestamistaInputEnvelope;
    set?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    disconnect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    delete?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    update?: Prisma.prestamo_externoUpdateWithWhereUniqueWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpdateWithWhereUniqueWithoutEmpresa_prestamistaInput[];
    updateMany?: Prisma.prestamo_externoUpdateManyWithWhereWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpdateManyWithWhereWithoutEmpresa_prestamistaInput[];
    deleteMany?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
};
export type prestamo_externoUncheckedUpdateManyWithoutEmpresa_prestamistaNestedInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput> | Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput[] | Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput[];
    upsert?: Prisma.prestamo_externoUpsertWithWhereUniqueWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpsertWithWhereUniqueWithoutEmpresa_prestamistaInput[];
    createMany?: Prisma.prestamo_externoCreateManyEmpresa_prestamistaInputEnvelope;
    set?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    disconnect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    delete?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    update?: Prisma.prestamo_externoUpdateWithWhereUniqueWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpdateWithWhereUniqueWithoutEmpresa_prestamistaInput[];
    updateMany?: Prisma.prestamo_externoUpdateManyWithWhereWithoutEmpresa_prestamistaInput | Prisma.prestamo_externoUpdateManyWithWhereWithoutEmpresa_prestamistaInput[];
    deleteMany?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
};
export type prestamo_externoCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput> | Prisma.prestamo_externoCreateWithoutUnidadInput[] | Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput | Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.prestamo_externoCreateManyUnidadInputEnvelope;
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
};
export type prestamo_externoUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput> | Prisma.prestamo_externoCreateWithoutUnidadInput[] | Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput | Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.prestamo_externoCreateManyUnidadInputEnvelope;
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
};
export type prestamo_externoUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput> | Prisma.prestamo_externoCreateWithoutUnidadInput[] | Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput | Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.prestamo_externoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.prestamo_externoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.prestamo_externoCreateManyUnidadInputEnvelope;
    set?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    disconnect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    delete?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    update?: Prisma.prestamo_externoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.prestamo_externoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.prestamo_externoUpdateManyWithWhereWithoutUnidadInput | Prisma.prestamo_externoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
};
export type prestamo_externoUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput> | Prisma.prestamo_externoCreateWithoutUnidadInput[] | Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput | Prisma.prestamo_externoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.prestamo_externoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.prestamo_externoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.prestamo_externoCreateManyUnidadInputEnvelope;
    set?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    disconnect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    delete?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    connect?: Prisma.prestamo_externoWhereUniqueInput | Prisma.prestamo_externoWhereUniqueInput[];
    update?: Prisma.prestamo_externoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.prestamo_externoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.prestamo_externoUpdateManyWithWhereWithoutUnidadInput | Prisma.prestamo_externoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
};
export type prestamo_externoCreateWithoutEmpresa_prestamistaInput = {
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutPrestamosInput;
};
export type prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput = {
    id_prestamo?: number;
    id_unidad?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoCreateOrConnectWithoutEmpresa_prestamistaInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput>;
};
export type prestamo_externoCreateManyEmpresa_prestamistaInputEnvelope = {
    data: Prisma.prestamo_externoCreateManyEmpresa_prestamistaInput | Prisma.prestamo_externoCreateManyEmpresa_prestamistaInput[];
    skipDuplicates?: boolean;
};
export type prestamo_externoUpsertWithWhereUniqueWithoutEmpresa_prestamistaInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    update: Prisma.XOR<Prisma.prestamo_externoUpdateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedUpdateWithoutEmpresa_prestamistaInput>;
    create: Prisma.XOR<Prisma.prestamo_externoCreateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedCreateWithoutEmpresa_prestamistaInput>;
};
export type prestamo_externoUpdateWithWhereUniqueWithoutEmpresa_prestamistaInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateWithoutEmpresa_prestamistaInput, Prisma.prestamo_externoUncheckedUpdateWithoutEmpresa_prestamistaInput>;
};
export type prestamo_externoUpdateManyWithWhereWithoutEmpresa_prestamistaInput = {
    where: Prisma.prestamo_externoScalarWhereInput;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateManyMutationInput, Prisma.prestamo_externoUncheckedUpdateManyWithoutEmpresa_prestamistaInput>;
};
export type prestamo_externoScalarWhereInput = {
    AND?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
    OR?: Prisma.prestamo_externoScalarWhereInput[];
    NOT?: Prisma.prestamo_externoScalarWhereInput | Prisma.prestamo_externoScalarWhereInput[];
    id_prestamo?: Prisma.IntFilter<"prestamo_externo"> | number;
    id_unidad?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    id_empresa_prestamista?: Prisma.IntNullableFilter<"prestamo_externo"> | number | null;
    destinatario?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    motivo?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    fecha_salida?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_esperada?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    fecha_retorno_real?: Prisma.DateTimeNullableFilter<"prestamo_externo"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
    condicion_retorno?: Prisma.StringNullableFilter<"prestamo_externo"> | string | null;
};
export type prestamo_externoCreateWithoutUnidadInput = {
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
    empresa_prestamista?: Prisma.empresaCreateNestedOneWithoutPrestamosInput;
};
export type prestamo_externoUncheckedCreateWithoutUnidadInput = {
    id_prestamo?: number;
    id_empresa_prestamista?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoCreateOrConnectWithoutUnidadInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput>;
};
export type prestamo_externoCreateManyUnidadInputEnvelope = {
    data: Prisma.prestamo_externoCreateManyUnidadInput | Prisma.prestamo_externoCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type prestamo_externoUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    update: Prisma.XOR<Prisma.prestamo_externoUpdateWithoutUnidadInput, Prisma.prestamo_externoUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.prestamo_externoCreateWithoutUnidadInput, Prisma.prestamo_externoUncheckedCreateWithoutUnidadInput>;
};
export type prestamo_externoUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.prestamo_externoWhereUniqueInput;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateWithoutUnidadInput, Prisma.prestamo_externoUncheckedUpdateWithoutUnidadInput>;
};
export type prestamo_externoUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.prestamo_externoScalarWhereInput;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateManyMutationInput, Prisma.prestamo_externoUncheckedUpdateManyWithoutUnidadInput>;
};
export type prestamo_externoCreateManyEmpresa_prestamistaInput = {
    id_prestamo?: number;
    id_unidad?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoUpdateWithoutEmpresa_prestamistaInput = {
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutPrestamosNestedInput;
};
export type prestamo_externoUncheckedUpdateWithoutEmpresa_prestamistaInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoUncheckedUpdateManyWithoutEmpresa_prestamistaInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoCreateManyUnidadInput = {
    id_prestamo?: number;
    id_empresa_prestamista?: number | null;
    destinatario?: string | null;
    motivo?: string | null;
    fecha_salida?: Date | string | null;
    fecha_retorno_esperada?: Date | string | null;
    fecha_retorno_real?: Date | string | null;
    estado?: string | null;
    condicion_retorno?: string | null;
};
export type prestamo_externoUpdateWithoutUnidadInput = {
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa_prestamista?: Prisma.empresaUpdateOneWithoutPrestamosNestedInput;
};
export type prestamo_externoUncheckedUpdateWithoutUnidadInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_prestamista?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoUncheckedUpdateManyWithoutUnidadInput = {
    id_prestamo?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_prestamista?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_salida?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_esperada?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_retorno_real?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    condicion_retorno?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type prestamo_externoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prestamo?: boolean;
    id_unidad?: boolean;
    id_empresa_prestamista?: boolean;
    destinatario?: boolean;
    motivo?: boolean;
    fecha_salida?: boolean;
    fecha_retorno_esperada?: boolean;
    fecha_retorno_real?: boolean;
    estado?: boolean;
    condicion_retorno?: boolean;
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
}, ExtArgs["result"]["prestamo_externo"]>;
export type prestamo_externoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prestamo?: boolean;
    id_unidad?: boolean;
    id_empresa_prestamista?: boolean;
    destinatario?: boolean;
    motivo?: boolean;
    fecha_salida?: boolean;
    fecha_retorno_esperada?: boolean;
    fecha_retorno_real?: boolean;
    estado?: boolean;
    condicion_retorno?: boolean;
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
}, ExtArgs["result"]["prestamo_externo"]>;
export type prestamo_externoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prestamo?: boolean;
    id_unidad?: boolean;
    id_empresa_prestamista?: boolean;
    destinatario?: boolean;
    motivo?: boolean;
    fecha_salida?: boolean;
    fecha_retorno_esperada?: boolean;
    fecha_retorno_real?: boolean;
    estado?: boolean;
    condicion_retorno?: boolean;
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
}, ExtArgs["result"]["prestamo_externo"]>;
export type prestamo_externoSelectScalar = {
    id_prestamo?: boolean;
    id_unidad?: boolean;
    id_empresa_prestamista?: boolean;
    destinatario?: boolean;
    motivo?: boolean;
    fecha_salida?: boolean;
    fecha_retorno_esperada?: boolean;
    fecha_retorno_real?: boolean;
    estado?: boolean;
    condicion_retorno?: boolean;
};
export type prestamo_externoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_prestamo" | "id_unidad" | "id_empresa_prestamista" | "destinatario" | "motivo" | "fecha_salida" | "fecha_retorno_esperada" | "fecha_retorno_real" | "estado" | "condicion_retorno", ExtArgs["result"]["prestamo_externo"]>;
export type prestamo_externoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
};
export type prestamo_externoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
};
export type prestamo_externoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.prestamo_externo$unidadArgs<ExtArgs>;
    empresa_prestamista?: boolean | Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>;
};
export type $prestamo_externoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "prestamo_externo";
    objects: {
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
        empresa_prestamista: Prisma.$empresaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_prestamo: number;
        id_unidad: number | null;
        id_empresa_prestamista: number | null;
        destinatario: string | null;
        motivo: string | null;
        fecha_salida: Date | null;
        fecha_retorno_esperada: Date | null;
        fecha_retorno_real: Date | null;
        estado: string | null;
        condicion_retorno: string | null;
    }, ExtArgs["result"]["prestamo_externo"]>;
    composites: {};
};
export type prestamo_externoGetPayload<S extends boolean | null | undefined | prestamo_externoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload, S>;
export type prestamo_externoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<prestamo_externoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Prestamo_externoCountAggregateInputType | true;
};
export interface prestamo_externoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['prestamo_externo'];
        meta: {
            name: 'prestamo_externo';
        };
    };
    findUnique<T extends prestamo_externoFindUniqueArgs>(args: Prisma.SelectSubset<T, prestamo_externoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends prestamo_externoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, prestamo_externoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends prestamo_externoFindFirstArgs>(args?: Prisma.SelectSubset<T, prestamo_externoFindFirstArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends prestamo_externoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, prestamo_externoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends prestamo_externoFindManyArgs>(args?: Prisma.SelectSubset<T, prestamo_externoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends prestamo_externoCreateArgs>(args: Prisma.SelectSubset<T, prestamo_externoCreateArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends prestamo_externoCreateManyArgs>(args?: Prisma.SelectSubset<T, prestamo_externoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends prestamo_externoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, prestamo_externoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends prestamo_externoDeleteArgs>(args: Prisma.SelectSubset<T, prestamo_externoDeleteArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends prestamo_externoUpdateArgs>(args: Prisma.SelectSubset<T, prestamo_externoUpdateArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends prestamo_externoDeleteManyArgs>(args?: Prisma.SelectSubset<T, prestamo_externoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends prestamo_externoUpdateManyArgs>(args: Prisma.SelectSubset<T, prestamo_externoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends prestamo_externoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, prestamo_externoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends prestamo_externoUpsertArgs>(args: Prisma.SelectSubset<T, prestamo_externoUpsertArgs<ExtArgs>>): Prisma.Prisma__prestamo_externoClient<runtime.Types.Result.GetResult<Prisma.$prestamo_externoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends prestamo_externoCountArgs>(args?: Prisma.Subset<T, prestamo_externoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Prestamo_externoCountAggregateOutputType> : number>;
    aggregate<T extends Prestamo_externoAggregateArgs>(args: Prisma.Subset<T, Prestamo_externoAggregateArgs>): Prisma.PrismaPromise<GetPrestamo_externoAggregateType<T>>;
    groupBy<T extends prestamo_externoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: prestamo_externoGroupByArgs['orderBy'];
    } : {
        orderBy?: prestamo_externoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, prestamo_externoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrestamo_externoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: prestamo_externoFieldRefs;
}
export interface Prisma__prestamo_externoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unidad<T extends Prisma.prestamo_externo$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prestamo_externo$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa_prestamista<T extends Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prestamo_externo$empresa_prestamistaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface prestamo_externoFieldRefs {
    readonly id_prestamo: Prisma.FieldRef<"prestamo_externo", 'Int'>;
    readonly id_unidad: Prisma.FieldRef<"prestamo_externo", 'Int'>;
    readonly id_empresa_prestamista: Prisma.FieldRef<"prestamo_externo", 'Int'>;
    readonly destinatario: Prisma.FieldRef<"prestamo_externo", 'String'>;
    readonly motivo: Prisma.FieldRef<"prestamo_externo", 'String'>;
    readonly fecha_salida: Prisma.FieldRef<"prestamo_externo", 'DateTime'>;
    readonly fecha_retorno_esperada: Prisma.FieldRef<"prestamo_externo", 'DateTime'>;
    readonly fecha_retorno_real: Prisma.FieldRef<"prestamo_externo", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"prestamo_externo", 'String'>;
    readonly condicion_retorno: Prisma.FieldRef<"prestamo_externo", 'String'>;
}
export type prestamo_externoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where: Prisma.prestamo_externoWhereUniqueInput;
};
export type prestamo_externoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where: Prisma.prestamo_externoWhereUniqueInput;
};
export type prestamo_externoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where?: Prisma.prestamo_externoWhereInput;
    orderBy?: Prisma.prestamo_externoOrderByWithRelationInput | Prisma.prestamo_externoOrderByWithRelationInput[];
    cursor?: Prisma.prestamo_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Prestamo_externoScalarFieldEnum | Prisma.Prestamo_externoScalarFieldEnum[];
};
export type prestamo_externoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where?: Prisma.prestamo_externoWhereInput;
    orderBy?: Prisma.prestamo_externoOrderByWithRelationInput | Prisma.prestamo_externoOrderByWithRelationInput[];
    cursor?: Prisma.prestamo_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Prestamo_externoScalarFieldEnum | Prisma.Prestamo_externoScalarFieldEnum[];
};
export type prestamo_externoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where?: Prisma.prestamo_externoWhereInput;
    orderBy?: Prisma.prestamo_externoOrderByWithRelationInput | Prisma.prestamo_externoOrderByWithRelationInput[];
    cursor?: Prisma.prestamo_externoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Prestamo_externoScalarFieldEnum | Prisma.Prestamo_externoScalarFieldEnum[];
};
export type prestamo_externoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.prestamo_externoCreateInput, Prisma.prestamo_externoUncheckedCreateInput>;
};
export type prestamo_externoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.prestamo_externoCreateManyInput | Prisma.prestamo_externoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type prestamo_externoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    data: Prisma.prestamo_externoCreateManyInput | Prisma.prestamo_externoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.prestamo_externoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type prestamo_externoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateInput, Prisma.prestamo_externoUncheckedUpdateInput>;
    where: Prisma.prestamo_externoWhereUniqueInput;
};
export type prestamo_externoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.prestamo_externoUpdateManyMutationInput, Prisma.prestamo_externoUncheckedUpdateManyInput>;
    where?: Prisma.prestamo_externoWhereInput;
    limit?: number;
};
export type prestamo_externoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.prestamo_externoUpdateManyMutationInput, Prisma.prestamo_externoUncheckedUpdateManyInput>;
    where?: Prisma.prestamo_externoWhereInput;
    limit?: number;
    include?: Prisma.prestamo_externoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type prestamo_externoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where: Prisma.prestamo_externoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prestamo_externoCreateInput, Prisma.prestamo_externoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.prestamo_externoUpdateInput, Prisma.prestamo_externoUncheckedUpdateInput>;
};
export type prestamo_externoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
    where: Prisma.prestamo_externoWhereUniqueInput;
};
export type prestamo_externoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prestamo_externoWhereInput;
    limit?: number;
};
export type prestamo_externo$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type prestamo_externo$empresa_prestamistaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type prestamo_externoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prestamo_externoSelect<ExtArgs> | null;
    omit?: Prisma.prestamo_externoOmit<ExtArgs> | null;
    include?: Prisma.prestamo_externoInclude<ExtArgs> | null;
};
