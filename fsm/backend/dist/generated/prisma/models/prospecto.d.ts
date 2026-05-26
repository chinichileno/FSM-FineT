import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type prospectoModel = runtime.Types.Result.DefaultSelection<Prisma.$prospectoPayload>;
export type AggregateProspecto = {
    _count: ProspectoCountAggregateOutputType | null;
    _avg: ProspectoAvgAggregateOutputType | null;
    _sum: ProspectoSumAggregateOutputType | null;
    _min: ProspectoMinAggregateOutputType | null;
    _max: ProspectoMaxAggregateOutputType | null;
};
export type ProspectoAvgAggregateOutputType = {
    id_prospecto: number | null;
    id_empresa: number | null;
    id_usuario_comercial: number | null;
    id_cliente: number | null;
    tiempo_conversion_dias: number | null;
};
export type ProspectoSumAggregateOutputType = {
    id_prospecto: number | null;
    id_empresa: number | null;
    id_usuario_comercial: number | null;
    id_cliente: number | null;
    tiempo_conversion_dias: number | null;
};
export type ProspectoMinAggregateOutputType = {
    id_prospecto: number | null;
    id_empresa: number | null;
    id_usuario_comercial: number | null;
    id_cliente: number | null;
    rut: string | null;
    nombre_completo: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    estado_pipeline: string | null;
    motivo_perdida: string | null;
    tiempo_conversion_dias: number | null;
    fecha_creacion: Date | null;
    fecha_conversion: Date | null;
};
export type ProspectoMaxAggregateOutputType = {
    id_prospecto: number | null;
    id_empresa: number | null;
    id_usuario_comercial: number | null;
    id_cliente: number | null;
    rut: string | null;
    nombre_completo: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    estado_pipeline: string | null;
    motivo_perdida: string | null;
    tiempo_conversion_dias: number | null;
    fecha_creacion: Date | null;
    fecha_conversion: Date | null;
};
export type ProspectoCountAggregateOutputType = {
    id_prospecto: number;
    id_empresa: number;
    id_usuario_comercial: number;
    id_cliente: number;
    rut: number;
    nombre_completo: number;
    email: number;
    telefono: number;
    direccion: number;
    estado_pipeline: number;
    motivo_perdida: number;
    tiempo_conversion_dias: number;
    fecha_creacion: number;
    fecha_conversion: number;
    _all: number;
};
export type ProspectoAvgAggregateInputType = {
    id_prospecto?: true;
    id_empresa?: true;
    id_usuario_comercial?: true;
    id_cliente?: true;
    tiempo_conversion_dias?: true;
};
export type ProspectoSumAggregateInputType = {
    id_prospecto?: true;
    id_empresa?: true;
    id_usuario_comercial?: true;
    id_cliente?: true;
    tiempo_conversion_dias?: true;
};
export type ProspectoMinAggregateInputType = {
    id_prospecto?: true;
    id_empresa?: true;
    id_usuario_comercial?: true;
    id_cliente?: true;
    rut?: true;
    nombre_completo?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    estado_pipeline?: true;
    motivo_perdida?: true;
    tiempo_conversion_dias?: true;
    fecha_creacion?: true;
    fecha_conversion?: true;
};
export type ProspectoMaxAggregateInputType = {
    id_prospecto?: true;
    id_empresa?: true;
    id_usuario_comercial?: true;
    id_cliente?: true;
    rut?: true;
    nombre_completo?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    estado_pipeline?: true;
    motivo_perdida?: true;
    tiempo_conversion_dias?: true;
    fecha_creacion?: true;
    fecha_conversion?: true;
};
export type ProspectoCountAggregateInputType = {
    id_prospecto?: true;
    id_empresa?: true;
    id_usuario_comercial?: true;
    id_cliente?: true;
    rut?: true;
    nombre_completo?: true;
    email?: true;
    telefono?: true;
    direccion?: true;
    estado_pipeline?: true;
    motivo_perdida?: true;
    tiempo_conversion_dias?: true;
    fecha_creacion?: true;
    fecha_conversion?: true;
    _all?: true;
};
export type ProspectoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prospectoWhereInput;
    orderBy?: Prisma.prospectoOrderByWithRelationInput | Prisma.prospectoOrderByWithRelationInput[];
    cursor?: Prisma.prospectoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProspectoCountAggregateInputType;
    _avg?: ProspectoAvgAggregateInputType;
    _sum?: ProspectoSumAggregateInputType;
    _min?: ProspectoMinAggregateInputType;
    _max?: ProspectoMaxAggregateInputType;
};
export type GetProspectoAggregateType<T extends ProspectoAggregateArgs> = {
    [P in keyof T & keyof AggregateProspecto]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProspecto[P]> : Prisma.GetScalarType<T[P], AggregateProspecto[P]>;
};
export type prospectoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prospectoWhereInput;
    orderBy?: Prisma.prospectoOrderByWithAggregationInput | Prisma.prospectoOrderByWithAggregationInput[];
    by: Prisma.ProspectoScalarFieldEnum[] | Prisma.ProspectoScalarFieldEnum;
    having?: Prisma.prospectoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProspectoCountAggregateInputType | true;
    _avg?: ProspectoAvgAggregateInputType;
    _sum?: ProspectoSumAggregateInputType;
    _min?: ProspectoMinAggregateInputType;
    _max?: ProspectoMaxAggregateInputType;
};
export type ProspectoGroupByOutputType = {
    id_prospecto: number;
    id_empresa: number | null;
    id_usuario_comercial: number | null;
    id_cliente: number | null;
    rut: string | null;
    nombre_completo: string | null;
    email: string | null;
    telefono: string | null;
    direccion: string | null;
    estado_pipeline: string | null;
    motivo_perdida: string | null;
    tiempo_conversion_dias: number | null;
    fecha_creacion: Date;
    fecha_conversion: Date | null;
    _count: ProspectoCountAggregateOutputType | null;
    _avg: ProspectoAvgAggregateOutputType | null;
    _sum: ProspectoSumAggregateOutputType | null;
    _min: ProspectoMinAggregateOutputType | null;
    _max: ProspectoMaxAggregateOutputType | null;
};
export type GetProspectoGroupByPayload<T extends prospectoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProspectoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProspectoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProspectoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProspectoGroupByOutputType[P]>;
}>>;
export type prospectoWhereInput = {
    AND?: Prisma.prospectoWhereInput | Prisma.prospectoWhereInput[];
    OR?: Prisma.prospectoWhereInput[];
    NOT?: Prisma.prospectoWhereInput | Prisma.prospectoWhereInput[];
    id_prospecto?: Prisma.IntFilter<"prospecto"> | number;
    id_empresa?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    id_usuario_comercial?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    rut?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    nombre_completo?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    email?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    telefono?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    direccion?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    estado_pipeline?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    motivo_perdida?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    tiempo_conversion_dias?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    fecha_creacion?: Prisma.DateTimeFilter<"prospecto"> | Date | string;
    fecha_conversion?: Prisma.DateTimeNullableFilter<"prospecto"> | Date | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_comercial?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    cotizaciones?: Prisma.CotizacionListRelationFilter;
};
export type prospectoOrderByWithRelationInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    rut?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_pipeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo_perdida?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_conversion?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    usuario_comercial?: Prisma.usuarioOrderByWithRelationInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    cotizaciones?: Prisma.cotizacionOrderByRelationAggregateInput;
};
export type prospectoWhereUniqueInput = Prisma.AtLeast<{
    id_prospecto?: number;
    id_cliente?: number;
    AND?: Prisma.prospectoWhereInput | Prisma.prospectoWhereInput[];
    OR?: Prisma.prospectoWhereInput[];
    NOT?: Prisma.prospectoWhereInput | Prisma.prospectoWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    id_usuario_comercial?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    rut?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    nombre_completo?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    email?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    telefono?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    direccion?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    estado_pipeline?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    motivo_perdida?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    tiempo_conversion_dias?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    fecha_creacion?: Prisma.DateTimeFilter<"prospecto"> | Date | string;
    fecha_conversion?: Prisma.DateTimeNullableFilter<"prospecto"> | Date | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_comercial?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    cotizaciones?: Prisma.CotizacionListRelationFilter;
}, "id_prospecto" | "id_cliente">;
export type prospectoOrderByWithAggregationInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    rut?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado_pipeline?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo_perdida?: Prisma.SortOrderInput | Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_conversion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.prospectoCountOrderByAggregateInput;
    _avg?: Prisma.prospectoAvgOrderByAggregateInput;
    _max?: Prisma.prospectoMaxOrderByAggregateInput;
    _min?: Prisma.prospectoMinOrderByAggregateInput;
    _sum?: Prisma.prospectoSumOrderByAggregateInput;
};
export type prospectoScalarWhereWithAggregatesInput = {
    AND?: Prisma.prospectoScalarWhereWithAggregatesInput | Prisma.prospectoScalarWhereWithAggregatesInput[];
    OR?: Prisma.prospectoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.prospectoScalarWhereWithAggregatesInput | Prisma.prospectoScalarWhereWithAggregatesInput[];
    id_prospecto?: Prisma.IntWithAggregatesFilter<"prospecto"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"prospecto"> | number | null;
    id_usuario_comercial?: Prisma.IntNullableWithAggregatesFilter<"prospecto"> | number | null;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"prospecto"> | number | null;
    rut?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    nombre_completo?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    telefono?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    estado_pipeline?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    motivo_perdida?: Prisma.StringNullableWithAggregatesFilter<"prospecto"> | string | null;
    tiempo_conversion_dias?: Prisma.IntNullableWithAggregatesFilter<"prospecto"> | number | null;
    fecha_creacion?: Prisma.DateTimeWithAggregatesFilter<"prospecto"> | Date | string;
    fecha_conversion?: Prisma.DateTimeNullableWithAggregatesFilter<"prospecto"> | Date | string | null;
};
export type prospectoCreateInput = {
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutProspectosInput;
    usuario_comercial?: Prisma.usuarioCreateNestedOneWithoutProspectosInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutProspectosInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutProspectoInput;
};
export type prospectoUncheckedCreateInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_usuario_comercial?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutProspectoInput;
};
export type prospectoUpdateInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutProspectosNestedInput;
    usuario_comercial?: Prisma.usuarioUpdateOneWithoutProspectosNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutProspectosNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutProspectoNestedInput;
};
export type prospectoCreateManyInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_usuario_comercial?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
};
export type prospectoUpdateManyMutationInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type prospectoUncheckedUpdateManyInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProspectoListRelationFilter = {
    every?: Prisma.prospectoWhereInput;
    some?: Prisma.prospectoWhereInput;
    none?: Prisma.prospectoWhereInput;
};
export type prospectoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type prospectoCountOrderByAggregateInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado_pipeline?: Prisma.SortOrder;
    motivo_perdida?: Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_conversion?: Prisma.SortOrder;
};
export type prospectoAvgOrderByAggregateInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrder;
};
export type prospectoMaxOrderByAggregateInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado_pipeline?: Prisma.SortOrder;
    motivo_perdida?: Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_conversion?: Prisma.SortOrder;
};
export type prospectoMinOrderByAggregateInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    telefono?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
    estado_pipeline?: Prisma.SortOrder;
    motivo_perdida?: Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_conversion?: Prisma.SortOrder;
};
export type prospectoSumOrderByAggregateInput = {
    id_prospecto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_comercial?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    tiempo_conversion_dias?: Prisma.SortOrder;
};
export type ProspectoNullableScalarRelationFilter = {
    is?: Prisma.prospectoWhereInput | null;
    isNot?: Prisma.prospectoWhereInput | null;
};
export type prospectoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput> | Prisma.prospectoCreateWithoutEmpresaInput[] | Prisma.prospectoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutEmpresaInput | Prisma.prospectoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.prospectoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput> | Prisma.prospectoCreateWithoutEmpresaInput[] | Prisma.prospectoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutEmpresaInput | Prisma.prospectoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.prospectoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput> | Prisma.prospectoCreateWithoutEmpresaInput[] | Prisma.prospectoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutEmpresaInput | Prisma.prospectoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.prospectoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.prospectoCreateManyEmpresaInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.prospectoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutEmpresaInput | Prisma.prospectoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput> | Prisma.prospectoCreateWithoutEmpresaInput[] | Prisma.prospectoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutEmpresaInput | Prisma.prospectoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.prospectoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.prospectoCreateManyEmpresaInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.prospectoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutEmpresaInput | Prisma.prospectoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoCreateNestedManyWithoutUsuario_comercialInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput> | Prisma.prospectoCreateWithoutUsuario_comercialInput[] | Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput | Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput[];
    createMany?: Prisma.prospectoCreateManyUsuario_comercialInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUncheckedCreateNestedManyWithoutUsuario_comercialInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput> | Prisma.prospectoCreateWithoutUsuario_comercialInput[] | Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput | Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput[];
    createMany?: Prisma.prospectoCreateManyUsuario_comercialInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUpdateManyWithoutUsuario_comercialNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput> | Prisma.prospectoCreateWithoutUsuario_comercialInput[] | Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput | Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutUsuario_comercialInput | Prisma.prospectoUpsertWithWhereUniqueWithoutUsuario_comercialInput[];
    createMany?: Prisma.prospectoCreateManyUsuario_comercialInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutUsuario_comercialInput | Prisma.prospectoUpdateWithWhereUniqueWithoutUsuario_comercialInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutUsuario_comercialInput | Prisma.prospectoUpdateManyWithWhereWithoutUsuario_comercialInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoUncheckedUpdateManyWithoutUsuario_comercialNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput> | Prisma.prospectoCreateWithoutUsuario_comercialInput[] | Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput | Prisma.prospectoCreateOrConnectWithoutUsuario_comercialInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutUsuario_comercialInput | Prisma.prospectoUpsertWithWhereUniqueWithoutUsuario_comercialInput[];
    createMany?: Prisma.prospectoCreateManyUsuario_comercialInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutUsuario_comercialInput | Prisma.prospectoUpdateWithWhereUniqueWithoutUsuario_comercialInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutUsuario_comercialInput | Prisma.prospectoUpdateManyWithWhereWithoutUsuario_comercialInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput> | Prisma.prospectoCreateWithoutClienteInput[] | Prisma.prospectoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutClienteInput | Prisma.prospectoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.prospectoCreateManyClienteInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput> | Prisma.prospectoCreateWithoutClienteInput[] | Prisma.prospectoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutClienteInput | Prisma.prospectoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.prospectoCreateManyClienteInputEnvelope;
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
};
export type prospectoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput> | Prisma.prospectoCreateWithoutClienteInput[] | Prisma.prospectoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutClienteInput | Prisma.prospectoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutClienteInput | Prisma.prospectoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.prospectoCreateManyClienteInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutClienteInput | Prisma.prospectoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutClienteInput | Prisma.prospectoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput> | Prisma.prospectoCreateWithoutClienteInput[] | Prisma.prospectoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutClienteInput | Prisma.prospectoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.prospectoUpsertWithWhereUniqueWithoutClienteInput | Prisma.prospectoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.prospectoCreateManyClienteInputEnvelope;
    set?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    disconnect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    delete?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    connect?: Prisma.prospectoWhereUniqueInput | Prisma.prospectoWhereUniqueInput[];
    update?: Prisma.prospectoUpdateWithWhereUniqueWithoutClienteInput | Prisma.prospectoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.prospectoUpdateManyWithWhereWithoutClienteInput | Prisma.prospectoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
};
export type prospectoCreateNestedOneWithoutCotizacionesInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutCotizacionesInput, Prisma.prospectoUncheckedCreateWithoutCotizacionesInput>;
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutCotizacionesInput;
    connect?: Prisma.prospectoWhereUniqueInput;
};
export type prospectoUpdateOneWithoutCotizacionesNestedInput = {
    create?: Prisma.XOR<Prisma.prospectoCreateWithoutCotizacionesInput, Prisma.prospectoUncheckedCreateWithoutCotizacionesInput>;
    connectOrCreate?: Prisma.prospectoCreateOrConnectWithoutCotizacionesInput;
    upsert?: Prisma.prospectoUpsertWithoutCotizacionesInput;
    disconnect?: Prisma.prospectoWhereInput | boolean;
    delete?: Prisma.prospectoWhereInput | boolean;
    connect?: Prisma.prospectoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.prospectoUpdateToOneWithWhereWithoutCotizacionesInput, Prisma.prospectoUpdateWithoutCotizacionesInput>, Prisma.prospectoUncheckedUpdateWithoutCotizacionesInput>;
};
export type prospectoCreateWithoutEmpresaInput = {
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    usuario_comercial?: Prisma.usuarioCreateNestedOneWithoutProspectosInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutProspectosInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutProspectoInput;
};
export type prospectoUncheckedCreateWithoutEmpresaInput = {
    id_prospecto?: number;
    id_usuario_comercial?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutProspectoInput;
};
export type prospectoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.prospectoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput>;
};
export type prospectoCreateManyEmpresaInputEnvelope = {
    data: Prisma.prospectoCreateManyEmpresaInput | Prisma.prospectoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type prospectoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.prospectoWhereUniqueInput;
    update: Prisma.XOR<Prisma.prospectoUpdateWithoutEmpresaInput, Prisma.prospectoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutEmpresaInput, Prisma.prospectoUncheckedCreateWithoutEmpresaInput>;
};
export type prospectoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.prospectoWhereUniqueInput;
    data: Prisma.XOR<Prisma.prospectoUpdateWithoutEmpresaInput, Prisma.prospectoUncheckedUpdateWithoutEmpresaInput>;
};
export type prospectoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.prospectoScalarWhereInput;
    data: Prisma.XOR<Prisma.prospectoUpdateManyMutationInput, Prisma.prospectoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type prospectoScalarWhereInput = {
    AND?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
    OR?: Prisma.prospectoScalarWhereInput[];
    NOT?: Prisma.prospectoScalarWhereInput | Prisma.prospectoScalarWhereInput[];
    id_prospecto?: Prisma.IntFilter<"prospecto"> | number;
    id_empresa?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    id_usuario_comercial?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    rut?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    nombre_completo?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    email?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    telefono?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    direccion?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    estado_pipeline?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    motivo_perdida?: Prisma.StringNullableFilter<"prospecto"> | string | null;
    tiempo_conversion_dias?: Prisma.IntNullableFilter<"prospecto"> | number | null;
    fecha_creacion?: Prisma.DateTimeFilter<"prospecto"> | Date | string;
    fecha_conversion?: Prisma.DateTimeNullableFilter<"prospecto"> | Date | string | null;
};
export type prospectoCreateWithoutUsuario_comercialInput = {
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutProspectosInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutProspectosInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutProspectoInput;
};
export type prospectoUncheckedCreateWithoutUsuario_comercialInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutProspectoInput;
};
export type prospectoCreateOrConnectWithoutUsuario_comercialInput = {
    where: Prisma.prospectoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput>;
};
export type prospectoCreateManyUsuario_comercialInputEnvelope = {
    data: Prisma.prospectoCreateManyUsuario_comercialInput | Prisma.prospectoCreateManyUsuario_comercialInput[];
    skipDuplicates?: boolean;
};
export type prospectoUpsertWithWhereUniqueWithoutUsuario_comercialInput = {
    where: Prisma.prospectoWhereUniqueInput;
    update: Prisma.XOR<Prisma.prospectoUpdateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedUpdateWithoutUsuario_comercialInput>;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedCreateWithoutUsuario_comercialInput>;
};
export type prospectoUpdateWithWhereUniqueWithoutUsuario_comercialInput = {
    where: Prisma.prospectoWhereUniqueInput;
    data: Prisma.XOR<Prisma.prospectoUpdateWithoutUsuario_comercialInput, Prisma.prospectoUncheckedUpdateWithoutUsuario_comercialInput>;
};
export type prospectoUpdateManyWithWhereWithoutUsuario_comercialInput = {
    where: Prisma.prospectoScalarWhereInput;
    data: Prisma.XOR<Prisma.prospectoUpdateManyMutationInput, Prisma.prospectoUncheckedUpdateManyWithoutUsuario_comercialInput>;
};
export type prospectoCreateWithoutClienteInput = {
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutProspectosInput;
    usuario_comercial?: Prisma.usuarioCreateNestedOneWithoutProspectosInput;
    cotizaciones?: Prisma.cotizacionCreateNestedManyWithoutProspectoInput;
};
export type prospectoUncheckedCreateWithoutClienteInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_usuario_comercial?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedCreateNestedManyWithoutProspectoInput;
};
export type prospectoCreateOrConnectWithoutClienteInput = {
    where: Prisma.prospectoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput>;
};
export type prospectoCreateManyClienteInputEnvelope = {
    data: Prisma.prospectoCreateManyClienteInput | Prisma.prospectoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type prospectoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.prospectoWhereUniqueInput;
    update: Prisma.XOR<Prisma.prospectoUpdateWithoutClienteInput, Prisma.prospectoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutClienteInput, Prisma.prospectoUncheckedCreateWithoutClienteInput>;
};
export type prospectoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.prospectoWhereUniqueInput;
    data: Prisma.XOR<Prisma.prospectoUpdateWithoutClienteInput, Prisma.prospectoUncheckedUpdateWithoutClienteInput>;
};
export type prospectoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.prospectoScalarWhereInput;
    data: Prisma.XOR<Prisma.prospectoUpdateManyMutationInput, Prisma.prospectoUncheckedUpdateManyWithoutClienteInput>;
};
export type prospectoCreateWithoutCotizacionesInput = {
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutProspectosInput;
    usuario_comercial?: Prisma.usuarioCreateNestedOneWithoutProspectosInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutProspectosInput;
};
export type prospectoUncheckedCreateWithoutCotizacionesInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_usuario_comercial?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
};
export type prospectoCreateOrConnectWithoutCotizacionesInput = {
    where: Prisma.prospectoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutCotizacionesInput, Prisma.prospectoUncheckedCreateWithoutCotizacionesInput>;
};
export type prospectoUpsertWithoutCotizacionesInput = {
    update: Prisma.XOR<Prisma.prospectoUpdateWithoutCotizacionesInput, Prisma.prospectoUncheckedUpdateWithoutCotizacionesInput>;
    create: Prisma.XOR<Prisma.prospectoCreateWithoutCotizacionesInput, Prisma.prospectoUncheckedCreateWithoutCotizacionesInput>;
    where?: Prisma.prospectoWhereInput;
};
export type prospectoUpdateToOneWithWhereWithoutCotizacionesInput = {
    where?: Prisma.prospectoWhereInput;
    data: Prisma.XOR<Prisma.prospectoUpdateWithoutCotizacionesInput, Prisma.prospectoUncheckedUpdateWithoutCotizacionesInput>;
};
export type prospectoUpdateWithoutCotizacionesInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutProspectosNestedInput;
    usuario_comercial?: Prisma.usuarioUpdateOneWithoutProspectosNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutProspectosNestedInput;
};
export type prospectoUncheckedUpdateWithoutCotizacionesInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type prospectoCreateManyEmpresaInput = {
    id_prospecto?: number;
    id_usuario_comercial?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
};
export type prospectoUpdateWithoutEmpresaInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario_comercial?: Prisma.usuarioUpdateOneWithoutProspectosNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutProspectosNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateWithoutEmpresaInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateManyWithoutEmpresaInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type prospectoCreateManyUsuario_comercialInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_cliente?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
};
export type prospectoUpdateWithoutUsuario_comercialInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutProspectosNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutProspectosNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateWithoutUsuario_comercialInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateManyWithoutUsuario_comercialInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type prospectoCreateManyClienteInput = {
    id_prospecto?: number;
    id_empresa?: number | null;
    id_usuario_comercial?: number | null;
    rut?: string | null;
    nombre_completo?: string | null;
    email?: string | null;
    telefono?: string | null;
    direccion?: string | null;
    estado_pipeline?: string | null;
    motivo_perdida?: string | null;
    tiempo_conversion_dias?: number | null;
    fecha_creacion?: Date | string;
    fecha_conversion?: Date | string | null;
};
export type prospectoUpdateWithoutClienteInput = {
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutProspectosNestedInput;
    usuario_comercial?: Prisma.usuarioUpdateOneWithoutProspectosNestedInput;
    cotizaciones?: Prisma.cotizacionUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateWithoutClienteInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cotizaciones?: Prisma.cotizacionUncheckedUpdateManyWithoutProspectoNestedInput;
};
export type prospectoUncheckedUpdateManyWithoutClienteInput = {
    id_prospecto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_comercial?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_completo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    estado_pipeline?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo_perdida?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    tiempo_conversion_dias?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_conversion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ProspectoCountOutputType = {
    cotizaciones: number;
};
export type ProspectoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cotizaciones?: boolean | ProspectoCountOutputTypeCountCotizacionesArgs;
};
export type ProspectoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProspectoCountOutputTypeSelect<ExtArgs> | null;
};
export type ProspectoCountOutputTypeCountCotizacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cotizacionWhereInput;
};
export type prospectoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prospecto?: boolean;
    id_empresa?: boolean;
    id_usuario_comercial?: boolean;
    id_cliente?: boolean;
    rut?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    estado_pipeline?: boolean;
    motivo_perdida?: boolean;
    tiempo_conversion_dias?: boolean;
    fecha_creacion?: boolean;
    fecha_conversion?: boolean;
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
    cotizaciones?: boolean | Prisma.prospecto$cotizacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProspectoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["prospecto"]>;
export type prospectoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prospecto?: boolean;
    id_empresa?: boolean;
    id_usuario_comercial?: boolean;
    id_cliente?: boolean;
    rut?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    estado_pipeline?: boolean;
    motivo_perdida?: boolean;
    tiempo_conversion_dias?: boolean;
    fecha_creacion?: boolean;
    fecha_conversion?: boolean;
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["prospecto"]>;
export type prospectoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_prospecto?: boolean;
    id_empresa?: boolean;
    id_usuario_comercial?: boolean;
    id_cliente?: boolean;
    rut?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    estado_pipeline?: boolean;
    motivo_perdida?: boolean;
    tiempo_conversion_dias?: boolean;
    fecha_creacion?: boolean;
    fecha_conversion?: boolean;
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["prospecto"]>;
export type prospectoSelectScalar = {
    id_prospecto?: boolean;
    id_empresa?: boolean;
    id_usuario_comercial?: boolean;
    id_cliente?: boolean;
    rut?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    telefono?: boolean;
    direccion?: boolean;
    estado_pipeline?: boolean;
    motivo_perdida?: boolean;
    tiempo_conversion_dias?: boolean;
    fecha_creacion?: boolean;
    fecha_conversion?: boolean;
};
export type prospectoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_prospecto" | "id_empresa" | "id_usuario_comercial" | "id_cliente" | "rut" | "nombre_completo" | "email" | "telefono" | "direccion" | "estado_pipeline" | "motivo_perdida" | "tiempo_conversion_dias" | "fecha_creacion" | "fecha_conversion", ExtArgs["result"]["prospecto"]>;
export type prospectoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
    cotizaciones?: boolean | Prisma.prospecto$cotizacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.ProspectoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type prospectoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
};
export type prospectoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.prospecto$empresaArgs<ExtArgs>;
    usuario_comercial?: boolean | Prisma.prospecto$usuario_comercialArgs<ExtArgs>;
    cliente?: boolean | Prisma.prospecto$clienteArgs<ExtArgs>;
};
export type $prospectoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "prospecto";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        usuario_comercial: Prisma.$usuarioPayload<ExtArgs> | null;
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        cotizaciones: Prisma.$cotizacionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_prospecto: number;
        id_empresa: number | null;
        id_usuario_comercial: number | null;
        id_cliente: number | null;
        rut: string | null;
        nombre_completo: string | null;
        email: string | null;
        telefono: string | null;
        direccion: string | null;
        estado_pipeline: string | null;
        motivo_perdida: string | null;
        tiempo_conversion_dias: number | null;
        fecha_creacion: Date;
        fecha_conversion: Date | null;
    }, ExtArgs["result"]["prospecto"]>;
    composites: {};
};
export type prospectoGetPayload<S extends boolean | null | undefined | prospectoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$prospectoPayload, S>;
export type prospectoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<prospectoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProspectoCountAggregateInputType | true;
};
export interface prospectoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['prospecto'];
        meta: {
            name: 'prospecto';
        };
    };
    findUnique<T extends prospectoFindUniqueArgs>(args: Prisma.SelectSubset<T, prospectoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends prospectoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, prospectoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends prospectoFindFirstArgs>(args?: Prisma.SelectSubset<T, prospectoFindFirstArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends prospectoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, prospectoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends prospectoFindManyArgs>(args?: Prisma.SelectSubset<T, prospectoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends prospectoCreateArgs>(args: Prisma.SelectSubset<T, prospectoCreateArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends prospectoCreateManyArgs>(args?: Prisma.SelectSubset<T, prospectoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends prospectoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, prospectoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends prospectoDeleteArgs>(args: Prisma.SelectSubset<T, prospectoDeleteArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends prospectoUpdateArgs>(args: Prisma.SelectSubset<T, prospectoUpdateArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends prospectoDeleteManyArgs>(args?: Prisma.SelectSubset<T, prospectoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends prospectoUpdateManyArgs>(args: Prisma.SelectSubset<T, prospectoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends prospectoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, prospectoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends prospectoUpsertArgs>(args: Prisma.SelectSubset<T, prospectoUpsertArgs<ExtArgs>>): Prisma.Prisma__prospectoClient<runtime.Types.Result.GetResult<Prisma.$prospectoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends prospectoCountArgs>(args?: Prisma.Subset<T, prospectoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProspectoCountAggregateOutputType> : number>;
    aggregate<T extends ProspectoAggregateArgs>(args: Prisma.Subset<T, ProspectoAggregateArgs>): Prisma.PrismaPromise<GetProspectoAggregateType<T>>;
    groupBy<T extends prospectoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: prospectoGroupByArgs['orderBy'];
    } : {
        orderBy?: prospectoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, prospectoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProspectoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: prospectoFieldRefs;
}
export interface Prisma__prospectoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.prospecto$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prospecto$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario_comercial<T extends Prisma.prospecto$usuario_comercialArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prospecto$usuario_comercialArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.prospecto$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prospecto$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cotizaciones<T extends Prisma.prospecto$cotizacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.prospecto$cotizacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cotizacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface prospectoFieldRefs {
    readonly id_prospecto: Prisma.FieldRef<"prospecto", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"prospecto", 'Int'>;
    readonly id_usuario_comercial: Prisma.FieldRef<"prospecto", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"prospecto", 'Int'>;
    readonly rut: Prisma.FieldRef<"prospecto", 'String'>;
    readonly nombre_completo: Prisma.FieldRef<"prospecto", 'String'>;
    readonly email: Prisma.FieldRef<"prospecto", 'String'>;
    readonly telefono: Prisma.FieldRef<"prospecto", 'String'>;
    readonly direccion: Prisma.FieldRef<"prospecto", 'String'>;
    readonly estado_pipeline: Prisma.FieldRef<"prospecto", 'String'>;
    readonly motivo_perdida: Prisma.FieldRef<"prospecto", 'String'>;
    readonly tiempo_conversion_dias: Prisma.FieldRef<"prospecto", 'Int'>;
    readonly fecha_creacion: Prisma.FieldRef<"prospecto", 'DateTime'>;
    readonly fecha_conversion: Prisma.FieldRef<"prospecto", 'DateTime'>;
}
export type prospectoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where: Prisma.prospectoWhereUniqueInput;
};
export type prospectoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where: Prisma.prospectoWhereUniqueInput;
};
export type prospectoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where?: Prisma.prospectoWhereInput;
    orderBy?: Prisma.prospectoOrderByWithRelationInput | Prisma.prospectoOrderByWithRelationInput[];
    cursor?: Prisma.prospectoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProspectoScalarFieldEnum | Prisma.ProspectoScalarFieldEnum[];
};
export type prospectoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where?: Prisma.prospectoWhereInput;
    orderBy?: Prisma.prospectoOrderByWithRelationInput | Prisma.prospectoOrderByWithRelationInput[];
    cursor?: Prisma.prospectoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProspectoScalarFieldEnum | Prisma.ProspectoScalarFieldEnum[];
};
export type prospectoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where?: Prisma.prospectoWhereInput;
    orderBy?: Prisma.prospectoOrderByWithRelationInput | Prisma.prospectoOrderByWithRelationInput[];
    cursor?: Prisma.prospectoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProspectoScalarFieldEnum | Prisma.ProspectoScalarFieldEnum[];
};
export type prospectoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.prospectoCreateInput, Prisma.prospectoUncheckedCreateInput>;
};
export type prospectoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.prospectoCreateManyInput | Prisma.prospectoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type prospectoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    data: Prisma.prospectoCreateManyInput | Prisma.prospectoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.prospectoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type prospectoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.prospectoUpdateInput, Prisma.prospectoUncheckedUpdateInput>;
    where: Prisma.prospectoWhereUniqueInput;
};
export type prospectoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.prospectoUpdateManyMutationInput, Prisma.prospectoUncheckedUpdateManyInput>;
    where?: Prisma.prospectoWhereInput;
    limit?: number;
};
export type prospectoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.prospectoUpdateManyMutationInput, Prisma.prospectoUncheckedUpdateManyInput>;
    where?: Prisma.prospectoWhereInput;
    limit?: number;
    include?: Prisma.prospectoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type prospectoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where: Prisma.prospectoWhereUniqueInput;
    create: Prisma.XOR<Prisma.prospectoCreateInput, Prisma.prospectoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.prospectoUpdateInput, Prisma.prospectoUncheckedUpdateInput>;
};
export type prospectoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
    where: Prisma.prospectoWhereUniqueInput;
};
export type prospectoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.prospectoWhereInput;
    limit?: number;
};
export type prospecto$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type prospecto$usuario_comercialArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type prospecto$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type prospecto$cotizacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cotizacionSelect<ExtArgs> | null;
    omit?: Prisma.cotizacionOmit<ExtArgs> | null;
    include?: Prisma.cotizacionInclude<ExtArgs> | null;
    where?: Prisma.cotizacionWhereInput;
    orderBy?: Prisma.cotizacionOrderByWithRelationInput | Prisma.cotizacionOrderByWithRelationInput[];
    cursor?: Prisma.cotizacionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CotizacionScalarFieldEnum | Prisma.CotizacionScalarFieldEnum[];
};
export type prospectoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.prospectoSelect<ExtArgs> | null;
    omit?: Prisma.prospectoOmit<ExtArgs> | null;
    include?: Prisma.prospectoInclude<ExtArgs> | null;
};
