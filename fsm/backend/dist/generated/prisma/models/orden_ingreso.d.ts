import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type orden_ingresoModel = runtime.Types.Result.DefaultSelection<Prisma.$orden_ingresoPayload>;
export type AggregateOrden_ingreso = {
    _count: Orden_ingresoCountAggregateOutputType | null;
    _avg: Orden_ingresoAvgAggregateOutputType | null;
    _sum: Orden_ingresoSumAggregateOutputType | null;
    _min: Orden_ingresoMinAggregateOutputType | null;
    _max: Orden_ingresoMaxAggregateOutputType | null;
};
export type Orden_ingresoAvgAggregateOutputType = {
    id_orden: number | null;
    id_proveedor: number | null;
    id_bodega: number | null;
    id_empresa: number | null;
    id_usuario_registro: number | null;
};
export type Orden_ingresoSumAggregateOutputType = {
    id_orden: number | null;
    id_proveedor: number | null;
    id_bodega: number | null;
    id_empresa: number | null;
    id_usuario_registro: number | null;
};
export type Orden_ingresoMinAggregateOutputType = {
    id_orden: number | null;
    id_proveedor: number | null;
    id_bodega: number | null;
    id_empresa: number | null;
    id_usuario_registro: number | null;
    fecha_creacion: Date | null;
    fecha_recepcion: Date | null;
    estado: string | null;
    factura_proveedor: string | null;
};
export type Orden_ingresoMaxAggregateOutputType = {
    id_orden: number | null;
    id_proveedor: number | null;
    id_bodega: number | null;
    id_empresa: number | null;
    id_usuario_registro: number | null;
    fecha_creacion: Date | null;
    fecha_recepcion: Date | null;
    estado: string | null;
    factura_proveedor: string | null;
};
export type Orden_ingresoCountAggregateOutputType = {
    id_orden: number;
    id_proveedor: number;
    id_bodega: number;
    id_empresa: number;
    id_usuario_registro: number;
    fecha_creacion: number;
    fecha_recepcion: number;
    estado: number;
    factura_proveedor: number;
    _all: number;
};
export type Orden_ingresoAvgAggregateInputType = {
    id_orden?: true;
    id_proveedor?: true;
    id_bodega?: true;
    id_empresa?: true;
    id_usuario_registro?: true;
};
export type Orden_ingresoSumAggregateInputType = {
    id_orden?: true;
    id_proveedor?: true;
    id_bodega?: true;
    id_empresa?: true;
    id_usuario_registro?: true;
};
export type Orden_ingresoMinAggregateInputType = {
    id_orden?: true;
    id_proveedor?: true;
    id_bodega?: true;
    id_empresa?: true;
    id_usuario_registro?: true;
    fecha_creacion?: true;
    fecha_recepcion?: true;
    estado?: true;
    factura_proveedor?: true;
};
export type Orden_ingresoMaxAggregateInputType = {
    id_orden?: true;
    id_proveedor?: true;
    id_bodega?: true;
    id_empresa?: true;
    id_usuario_registro?: true;
    fecha_creacion?: true;
    fecha_recepcion?: true;
    estado?: true;
    factura_proveedor?: true;
};
export type Orden_ingresoCountAggregateInputType = {
    id_orden?: true;
    id_proveedor?: true;
    id_bodega?: true;
    id_empresa?: true;
    id_usuario_registro?: true;
    fecha_creacion?: true;
    fecha_recepcion?: true;
    estado?: true;
    factura_proveedor?: true;
    _all?: true;
};
export type Orden_ingresoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_ingresoWhereInput;
    orderBy?: Prisma.orden_ingresoOrderByWithRelationInput | Prisma.orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Orden_ingresoCountAggregateInputType;
    _avg?: Orden_ingresoAvgAggregateInputType;
    _sum?: Orden_ingresoSumAggregateInputType;
    _min?: Orden_ingresoMinAggregateInputType;
    _max?: Orden_ingresoMaxAggregateInputType;
};
export type GetOrden_ingresoAggregateType<T extends Orden_ingresoAggregateArgs> = {
    [P in keyof T & keyof AggregateOrden_ingreso]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOrden_ingreso[P]> : Prisma.GetScalarType<T[P], AggregateOrden_ingreso[P]>;
};
export type orden_ingresoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_ingresoWhereInput;
    orderBy?: Prisma.orden_ingresoOrderByWithAggregationInput | Prisma.orden_ingresoOrderByWithAggregationInput[];
    by: Prisma.Orden_ingresoScalarFieldEnum[] | Prisma.Orden_ingresoScalarFieldEnum;
    having?: Prisma.orden_ingresoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Orden_ingresoCountAggregateInputType | true;
    _avg?: Orden_ingresoAvgAggregateInputType;
    _sum?: Orden_ingresoSumAggregateInputType;
    _min?: Orden_ingresoMinAggregateInputType;
    _max?: Orden_ingresoMaxAggregateInputType;
};
export type Orden_ingresoGroupByOutputType = {
    id_orden: number;
    id_proveedor: number | null;
    id_bodega: number | null;
    id_empresa: number | null;
    id_usuario_registro: number | null;
    fecha_creacion: Date | null;
    fecha_recepcion: Date | null;
    estado: string | null;
    factura_proveedor: string | null;
    _count: Orden_ingresoCountAggregateOutputType | null;
    _avg: Orden_ingresoAvgAggregateOutputType | null;
    _sum: Orden_ingresoSumAggregateOutputType | null;
    _min: Orden_ingresoMinAggregateOutputType | null;
    _max: Orden_ingresoMaxAggregateOutputType | null;
};
export type GetOrden_ingresoGroupByPayload<T extends orden_ingresoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Orden_ingresoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Orden_ingresoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Orden_ingresoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Orden_ingresoGroupByOutputType[P]>;
}>>;
export type orden_ingresoWhereInput = {
    AND?: Prisma.orden_ingresoWhereInput | Prisma.orden_ingresoWhereInput[];
    OR?: Prisma.orden_ingresoWhereInput[];
    NOT?: Prisma.orden_ingresoWhereInput | Prisma.orden_ingresoWhereInput[];
    id_orden?: Prisma.IntFilter<"orden_ingreso"> | number;
    id_proveedor?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    fecha_recepcion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
    factura_proveedor?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
    proveedor?: Prisma.XOR<Prisma.ProveedorNullableScalarRelationFilter, Prisma.proveedorWhereInput> | null;
    bodega?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    detalles?: Prisma.Detalle_orden_ingresoListRelationFilter;
};
export type orden_ingresoOrderByWithRelationInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_recepcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    factura_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    proveedor?: Prisma.proveedorOrderByWithRelationInput;
    bodega?: Prisma.bodegaOrderByWithRelationInput;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    usuario_registro?: Prisma.usuarioOrderByWithRelationInput;
    detalles?: Prisma.detalle_orden_ingresoOrderByRelationAggregateInput;
};
export type orden_ingresoWhereUniqueInput = Prisma.AtLeast<{
    id_orden?: number;
    AND?: Prisma.orden_ingresoWhereInput | Prisma.orden_ingresoWhereInput[];
    OR?: Prisma.orden_ingresoWhereInput[];
    NOT?: Prisma.orden_ingresoWhereInput | Prisma.orden_ingresoWhereInput[];
    id_proveedor?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    fecha_recepcion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
    factura_proveedor?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
    proveedor?: Prisma.XOR<Prisma.ProveedorNullableScalarRelationFilter, Prisma.proveedorWhereInput> | null;
    bodega?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    detalles?: Prisma.Detalle_orden_ingresoListRelationFilter;
}, "id_orden">;
export type orden_ingresoOrderByWithAggregationInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_recepcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    estado?: Prisma.SortOrderInput | Prisma.SortOrder;
    factura_proveedor?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.orden_ingresoCountOrderByAggregateInput;
    _avg?: Prisma.orden_ingresoAvgOrderByAggregateInput;
    _max?: Prisma.orden_ingresoMaxOrderByAggregateInput;
    _min?: Prisma.orden_ingresoMinOrderByAggregateInput;
    _sum?: Prisma.orden_ingresoSumOrderByAggregateInput;
};
export type orden_ingresoScalarWhereWithAggregatesInput = {
    AND?: Prisma.orden_ingresoScalarWhereWithAggregatesInput | Prisma.orden_ingresoScalarWhereWithAggregatesInput[];
    OR?: Prisma.orden_ingresoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.orden_ingresoScalarWhereWithAggregatesInput | Prisma.orden_ingresoScalarWhereWithAggregatesInput[];
    id_orden?: Prisma.IntWithAggregatesFilter<"orden_ingreso"> | number;
    id_proveedor?: Prisma.IntNullableWithAggregatesFilter<"orden_ingreso"> | number | null;
    id_bodega?: Prisma.IntNullableWithAggregatesFilter<"orden_ingreso"> | number | null;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"orden_ingreso"> | number | null;
    id_usuario_registro?: Prisma.IntNullableWithAggregatesFilter<"orden_ingreso"> | number | null;
    fecha_creacion?: Prisma.DateTimeNullableWithAggregatesFilter<"orden_ingreso"> | Date | string | null;
    fecha_recepcion?: Prisma.DateTimeNullableWithAggregatesFilter<"orden_ingreso"> | Date | string | null;
    estado?: Prisma.StringNullableWithAggregatesFilter<"orden_ingreso"> | string | null;
    factura_proveedor?: Prisma.StringNullableWithAggregatesFilter<"orden_ingreso"> | string | null;
};
export type orden_ingresoCreateInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    proveedor?: Prisma.proveedorCreateNestedOneWithoutOrdenes_ingresoInput;
    bodega?: Prisma.bodegaCreateNestedOneWithoutOrdenes_ingresoInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutOrdenes_ingresoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutOrdenes_ingresoInput;
    detalles?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUncheckedCreateInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUpdateInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proveedor?: Prisma.proveedorUpdateOneWithoutOrdenes_ingresoNestedInput;
    bodega?: Prisma.bodegaUpdateOneWithoutOrdenes_ingresoNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutOrdenes_ingresoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutOrdenes_ingresoNestedInput;
    detalles?: Prisma.detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoCreateManyInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoUpdateManyMutationInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type orden_ingresoUncheckedUpdateManyInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Orden_ingresoListRelationFilter = {
    every?: Prisma.orden_ingresoWhereInput;
    some?: Prisma.orden_ingresoWhereInput;
    none?: Prisma.orden_ingresoWhereInput;
};
export type orden_ingresoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type orden_ingresoCountOrderByAggregateInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_recepcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    factura_proveedor?: Prisma.SortOrder;
};
export type orden_ingresoAvgOrderByAggregateInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type orden_ingresoMaxOrderByAggregateInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_recepcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    factura_proveedor?: Prisma.SortOrder;
};
export type orden_ingresoMinOrderByAggregateInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_recepcion?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    factura_proveedor?: Prisma.SortOrder;
};
export type orden_ingresoSumOrderByAggregateInput = {
    id_orden?: Prisma.SortOrder;
    id_proveedor?: Prisma.SortOrder;
    id_bodega?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type Orden_ingresoNullableScalarRelationFilter = {
    is?: Prisma.orden_ingresoWhereInput | null;
    isNot?: Prisma.orden_ingresoWhereInput | null;
};
export type orden_ingresoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput> | Prisma.orden_ingresoCreateWithoutEmpresaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput | Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.orden_ingresoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput> | Prisma.orden_ingresoCreateWithoutEmpresaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput | Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.orden_ingresoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput> | Prisma.orden_ingresoCreateWithoutEmpresaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput | Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.orden_ingresoCreateManyEmpresaInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutEmpresaInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput> | Prisma.orden_ingresoCreateWithoutEmpresaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput | Prisma.orden_ingresoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.orden_ingresoCreateManyEmpresaInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutEmpresaInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput> | Prisma.orden_ingresoCreateWithoutUsuario_registroInput[] | Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput | Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.orden_ingresoCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUncheckedCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput> | Prisma.orden_ingresoCreateWithoutUsuario_registroInput[] | Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput | Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.orden_ingresoCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput> | Prisma.orden_ingresoCreateWithoutUsuario_registroInput[] | Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput | Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.orden_ingresoCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoUncheckedUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput> | Prisma.orden_ingresoCreateWithoutUsuario_registroInput[] | Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput | Prisma.orden_ingresoCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.orden_ingresoCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoCreateNestedManyWithoutBodegaInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput> | Prisma.orden_ingresoCreateWithoutBodegaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput | Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput[];
    createMany?: Prisma.orden_ingresoCreateManyBodegaInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUncheckedCreateNestedManyWithoutBodegaInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput> | Prisma.orden_ingresoCreateWithoutBodegaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput | Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput[];
    createMany?: Prisma.orden_ingresoCreateManyBodegaInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUpdateManyWithoutBodegaNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput> | Prisma.orden_ingresoCreateWithoutBodegaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput | Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutBodegaInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutBodegaInput[];
    createMany?: Prisma.orden_ingresoCreateManyBodegaInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutBodegaInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutBodegaInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutBodegaInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutBodegaInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoUncheckedUpdateManyWithoutBodegaNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput> | Prisma.orden_ingresoCreateWithoutBodegaInput[] | Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput | Prisma.orden_ingresoCreateOrConnectWithoutBodegaInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutBodegaInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutBodegaInput[];
    createMany?: Prisma.orden_ingresoCreateManyBodegaInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutBodegaInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutBodegaInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutBodegaInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutBodegaInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput> | Prisma.orden_ingresoCreateWithoutProveedorInput[] | Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput | Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.orden_ingresoCreateManyProveedorInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUncheckedCreateNestedManyWithoutProveedorInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput> | Prisma.orden_ingresoCreateWithoutProveedorInput[] | Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput | Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput[];
    createMany?: Prisma.orden_ingresoCreateManyProveedorInputEnvelope;
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
};
export type orden_ingresoUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput> | Prisma.orden_ingresoCreateWithoutProveedorInput[] | Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput | Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.orden_ingresoCreateManyProveedorInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutProveedorInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoUncheckedUpdateManyWithoutProveedorNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput> | Prisma.orden_ingresoCreateWithoutProveedorInput[] | Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput[];
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput | Prisma.orden_ingresoCreateOrConnectWithoutProveedorInput[];
    upsert?: Prisma.orden_ingresoUpsertWithWhereUniqueWithoutProveedorInput | Prisma.orden_ingresoUpsertWithWhereUniqueWithoutProveedorInput[];
    createMany?: Prisma.orden_ingresoCreateManyProveedorInputEnvelope;
    set?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    disconnect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    delete?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    connect?: Prisma.orden_ingresoWhereUniqueInput | Prisma.orden_ingresoWhereUniqueInput[];
    update?: Prisma.orden_ingresoUpdateWithWhereUniqueWithoutProveedorInput | Prisma.orden_ingresoUpdateWithWhereUniqueWithoutProveedorInput[];
    updateMany?: Prisma.orden_ingresoUpdateManyWithWhereWithoutProveedorInput | Prisma.orden_ingresoUpdateManyWithWhereWithoutProveedorInput[];
    deleteMany?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
};
export type orden_ingresoCreateNestedOneWithoutDetallesInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutDetallesInput, Prisma.orden_ingresoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutDetallesInput;
    connect?: Prisma.orden_ingresoWhereUniqueInput;
};
export type orden_ingresoUpdateOneWithoutDetallesNestedInput = {
    create?: Prisma.XOR<Prisma.orden_ingresoCreateWithoutDetallesInput, Prisma.orden_ingresoUncheckedCreateWithoutDetallesInput>;
    connectOrCreate?: Prisma.orden_ingresoCreateOrConnectWithoutDetallesInput;
    upsert?: Prisma.orden_ingresoUpsertWithoutDetallesInput;
    disconnect?: Prisma.orden_ingresoWhereInput | boolean;
    delete?: Prisma.orden_ingresoWhereInput | boolean;
    connect?: Prisma.orden_ingresoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.orden_ingresoUpdateToOneWithWhereWithoutDetallesInput, Prisma.orden_ingresoUpdateWithoutDetallesInput>, Prisma.orden_ingresoUncheckedUpdateWithoutDetallesInput>;
};
export type orden_ingresoCreateWithoutEmpresaInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    proveedor?: Prisma.proveedorCreateNestedOneWithoutOrdenes_ingresoInput;
    bodega?: Prisma.bodegaCreateNestedOneWithoutOrdenes_ingresoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutOrdenes_ingresoInput;
    detalles?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUncheckedCreateWithoutEmpresaInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput>;
};
export type orden_ingresoCreateManyEmpresaInputEnvelope = {
    data: Prisma.orden_ingresoCreateManyEmpresaInput | Prisma.orden_ingresoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type orden_ingresoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedCreateWithoutEmpresaInput>;
};
export type orden_ingresoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutEmpresaInput, Prisma.orden_ingresoUncheckedUpdateWithoutEmpresaInput>;
};
export type orden_ingresoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type orden_ingresoScalarWhereInput = {
    AND?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
    OR?: Prisma.orden_ingresoScalarWhereInput[];
    NOT?: Prisma.orden_ingresoScalarWhereInput | Prisma.orden_ingresoScalarWhereInput[];
    id_orden?: Prisma.IntFilter<"orden_ingreso"> | number;
    id_proveedor?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_bodega?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"orden_ingreso"> | number | null;
    fecha_creacion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    fecha_recepcion?: Prisma.DateTimeNullableFilter<"orden_ingreso"> | Date | string | null;
    estado?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
    factura_proveedor?: Prisma.StringNullableFilter<"orden_ingreso"> | string | null;
};
export type orden_ingresoCreateWithoutUsuario_registroInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    proveedor?: Prisma.proveedorCreateNestedOneWithoutOrdenes_ingresoInput;
    bodega?: Prisma.bodegaCreateNestedOneWithoutOrdenes_ingresoInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutOrdenes_ingresoInput;
    detalles?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUncheckedCreateWithoutUsuario_registroInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_empresa?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoCreateOrConnectWithoutUsuario_registroInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput>;
};
export type orden_ingresoCreateManyUsuario_registroInputEnvelope = {
    data: Prisma.orden_ingresoCreateManyUsuario_registroInput | Prisma.orden_ingresoCreateManyUsuario_registroInput[];
    skipDuplicates?: boolean;
};
export type orden_ingresoUpsertWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedUpdateWithoutUsuario_registroInput>;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedCreateWithoutUsuario_registroInput>;
};
export type orden_ingresoUpdateWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutUsuario_registroInput, Prisma.orden_ingresoUncheckedUpdateWithoutUsuario_registroInput>;
};
export type orden_ingresoUpdateManyWithWhereWithoutUsuario_registroInput = {
    where: Prisma.orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyWithoutUsuario_registroInput>;
};
export type orden_ingresoCreateWithoutBodegaInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    proveedor?: Prisma.proveedorCreateNestedOneWithoutOrdenes_ingresoInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutOrdenes_ingresoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutOrdenes_ingresoInput;
    detalles?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUncheckedCreateWithoutBodegaInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoCreateOrConnectWithoutBodegaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput>;
};
export type orden_ingresoCreateManyBodegaInputEnvelope = {
    data: Prisma.orden_ingresoCreateManyBodegaInput | Prisma.orden_ingresoCreateManyBodegaInput[];
    skipDuplicates?: boolean;
};
export type orden_ingresoUpsertWithWhereUniqueWithoutBodegaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutBodegaInput, Prisma.orden_ingresoUncheckedUpdateWithoutBodegaInput>;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutBodegaInput, Prisma.orden_ingresoUncheckedCreateWithoutBodegaInput>;
};
export type orden_ingresoUpdateWithWhereUniqueWithoutBodegaInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutBodegaInput, Prisma.orden_ingresoUncheckedUpdateWithoutBodegaInput>;
};
export type orden_ingresoUpdateManyWithWhereWithoutBodegaInput = {
    where: Prisma.orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyWithoutBodegaInput>;
};
export type orden_ingresoCreateWithoutProveedorInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    bodega?: Prisma.bodegaCreateNestedOneWithoutOrdenes_ingresoInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutOrdenes_ingresoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutOrdenes_ingresoInput;
    detalles?: Prisma.detalle_orden_ingresoCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoUncheckedCreateWithoutProveedorInput = {
    id_orden?: number;
    id_bodega?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedCreateNestedManyWithoutOrdenInput;
};
export type orden_ingresoCreateOrConnectWithoutProveedorInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput>;
};
export type orden_ingresoCreateManyProveedorInputEnvelope = {
    data: Prisma.orden_ingresoCreateManyProveedorInput | Prisma.orden_ingresoCreateManyProveedorInput[];
    skipDuplicates?: boolean;
};
export type orden_ingresoUpsertWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    update: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutProveedorInput, Prisma.orden_ingresoUncheckedUpdateWithoutProveedorInput>;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutProveedorInput, Prisma.orden_ingresoUncheckedCreateWithoutProveedorInput>;
};
export type orden_ingresoUpdateWithWhereUniqueWithoutProveedorInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutProveedorInput, Prisma.orden_ingresoUncheckedUpdateWithoutProveedorInput>;
};
export type orden_ingresoUpdateManyWithWhereWithoutProveedorInput = {
    where: Prisma.orden_ingresoScalarWhereInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyWithoutProveedorInput>;
};
export type orden_ingresoCreateWithoutDetallesInput = {
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
    proveedor?: Prisma.proveedorCreateNestedOneWithoutOrdenes_ingresoInput;
    bodega?: Prisma.bodegaCreateNestedOneWithoutOrdenes_ingresoInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutOrdenes_ingresoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutOrdenes_ingresoInput;
};
export type orden_ingresoUncheckedCreateWithoutDetallesInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoCreateOrConnectWithoutDetallesInput = {
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutDetallesInput, Prisma.orden_ingresoUncheckedCreateWithoutDetallesInput>;
};
export type orden_ingresoUpsertWithoutDetallesInput = {
    update: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutDetallesInput, Prisma.orden_ingresoUncheckedUpdateWithoutDetallesInput>;
    create: Prisma.XOR<Prisma.orden_ingresoCreateWithoutDetallesInput, Prisma.orden_ingresoUncheckedCreateWithoutDetallesInput>;
    where?: Prisma.orden_ingresoWhereInput;
};
export type orden_ingresoUpdateToOneWithWhereWithoutDetallesInput = {
    where?: Prisma.orden_ingresoWhereInput;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateWithoutDetallesInput, Prisma.orden_ingresoUncheckedUpdateWithoutDetallesInput>;
};
export type orden_ingresoUpdateWithoutDetallesInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proveedor?: Prisma.proveedorUpdateOneWithoutOrdenes_ingresoNestedInput;
    bodega?: Prisma.bodegaUpdateOneWithoutOrdenes_ingresoNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutOrdenes_ingresoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutOrdenes_ingresoNestedInput;
};
export type orden_ingresoUncheckedUpdateWithoutDetallesInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type orden_ingresoCreateManyEmpresaInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoUpdateWithoutEmpresaInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proveedor?: Prisma.proveedorUpdateOneWithoutOrdenes_ingresoNestedInput;
    bodega?: Prisma.bodegaUpdateOneWithoutOrdenes_ingresoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutOrdenes_ingresoNestedInput;
    detalles?: Prisma.detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateWithoutEmpresaInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateManyWithoutEmpresaInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type orden_ingresoCreateManyUsuario_registroInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_bodega?: number | null;
    id_empresa?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoUpdateWithoutUsuario_registroInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proveedor?: Prisma.proveedorUpdateOneWithoutOrdenes_ingresoNestedInput;
    bodega?: Prisma.bodegaUpdateOneWithoutOrdenes_ingresoNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutOrdenes_ingresoNestedInput;
    detalles?: Prisma.detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateWithoutUsuario_registroInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateManyWithoutUsuario_registroInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type orden_ingresoCreateManyBodegaInput = {
    id_orden?: number;
    id_proveedor?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoUpdateWithoutBodegaInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proveedor?: Prisma.proveedorUpdateOneWithoutOrdenes_ingresoNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutOrdenes_ingresoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutOrdenes_ingresoNestedInput;
    detalles?: Prisma.detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateWithoutBodegaInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateManyWithoutBodegaInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_proveedor?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type orden_ingresoCreateManyProveedorInput = {
    id_orden?: number;
    id_bodega?: number | null;
    id_empresa?: number | null;
    id_usuario_registro?: number | null;
    fecha_creacion?: Date | string | null;
    fecha_recepcion?: Date | string | null;
    estado?: string | null;
    factura_proveedor?: string | null;
};
export type orden_ingresoUpdateWithoutProveedorInput = {
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bodega?: Prisma.bodegaUpdateOneWithoutOrdenes_ingresoNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutOrdenes_ingresoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutOrdenes_ingresoNestedInput;
    detalles?: Prisma.detalle_orden_ingresoUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateWithoutProveedorInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detalles?: Prisma.detalle_orden_ingresoUncheckedUpdateManyWithoutOrdenNestedInput;
};
export type orden_ingresoUncheckedUpdateManyWithoutProveedorInput = {
    id_orden?: Prisma.IntFieldUpdateOperationsInput | number;
    id_bodega?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_creacion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_recepcion?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    estado?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura_proveedor?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Orden_ingresoCountOutputType = {
    detalles: number;
};
export type Orden_ingresoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalles?: boolean | Orden_ingresoCountOutputTypeCountDetallesArgs;
};
export type Orden_ingresoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Orden_ingresoCountOutputTypeSelect<ExtArgs> | null;
};
export type Orden_ingresoCountOutputTypeCountDetallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_orden_ingresoWhereInput;
};
export type orden_ingresoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_orden?: boolean;
    id_proveedor?: boolean;
    id_bodega?: boolean;
    id_empresa?: boolean;
    id_usuario_registro?: boolean;
    fecha_creacion?: boolean;
    fecha_recepcion?: boolean;
    estado?: boolean;
    factura_proveedor?: boolean;
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
    detalles?: boolean | Prisma.orden_ingreso$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.Orden_ingresoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["orden_ingreso"]>;
export type orden_ingresoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_orden?: boolean;
    id_proveedor?: boolean;
    id_bodega?: boolean;
    id_empresa?: boolean;
    id_usuario_registro?: boolean;
    fecha_creacion?: boolean;
    fecha_recepcion?: boolean;
    estado?: boolean;
    factura_proveedor?: boolean;
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["orden_ingreso"]>;
export type orden_ingresoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_orden?: boolean;
    id_proveedor?: boolean;
    id_bodega?: boolean;
    id_empresa?: boolean;
    id_usuario_registro?: boolean;
    fecha_creacion?: boolean;
    fecha_recepcion?: boolean;
    estado?: boolean;
    factura_proveedor?: boolean;
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["orden_ingreso"]>;
export type orden_ingresoSelectScalar = {
    id_orden?: boolean;
    id_proveedor?: boolean;
    id_bodega?: boolean;
    id_empresa?: boolean;
    id_usuario_registro?: boolean;
    fecha_creacion?: boolean;
    fecha_recepcion?: boolean;
    estado?: boolean;
    factura_proveedor?: boolean;
};
export type orden_ingresoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_orden" | "id_proveedor" | "id_bodega" | "id_empresa" | "id_usuario_registro" | "fecha_creacion" | "fecha_recepcion" | "estado" | "factura_proveedor", ExtArgs["result"]["orden_ingreso"]>;
export type orden_ingresoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
    detalles?: boolean | Prisma.orden_ingreso$detallesArgs<ExtArgs>;
    _count?: boolean | Prisma.Orden_ingresoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type orden_ingresoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
};
export type orden_ingresoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proveedor?: boolean | Prisma.orden_ingreso$proveedorArgs<ExtArgs>;
    bodega?: boolean | Prisma.orden_ingreso$bodegaArgs<ExtArgs>;
    empresa?: boolean | Prisma.orden_ingreso$empresaArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>;
};
export type $orden_ingresoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "orden_ingreso";
    objects: {
        proveedor: Prisma.$proveedorPayload<ExtArgs> | null;
        bodega: Prisma.$bodegaPayload<ExtArgs> | null;
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        usuario_registro: Prisma.$usuarioPayload<ExtArgs> | null;
        detalles: Prisma.$detalle_orden_ingresoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_orden: number;
        id_proveedor: number | null;
        id_bodega: number | null;
        id_empresa: number | null;
        id_usuario_registro: number | null;
        fecha_creacion: Date | null;
        fecha_recepcion: Date | null;
        estado: string | null;
        factura_proveedor: string | null;
    }, ExtArgs["result"]["orden_ingreso"]>;
    composites: {};
};
export type orden_ingresoGetPayload<S extends boolean | null | undefined | orden_ingresoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload, S>;
export type orden_ingresoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<orden_ingresoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Orden_ingresoCountAggregateInputType | true;
};
export interface orden_ingresoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['orden_ingreso'];
        meta: {
            name: 'orden_ingreso';
        };
    };
    findUnique<T extends orden_ingresoFindUniqueArgs>(args: Prisma.SelectSubset<T, orden_ingresoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends orden_ingresoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, orden_ingresoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends orden_ingresoFindFirstArgs>(args?: Prisma.SelectSubset<T, orden_ingresoFindFirstArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends orden_ingresoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, orden_ingresoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends orden_ingresoFindManyArgs>(args?: Prisma.SelectSubset<T, orden_ingresoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends orden_ingresoCreateArgs>(args: Prisma.SelectSubset<T, orden_ingresoCreateArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends orden_ingresoCreateManyArgs>(args?: Prisma.SelectSubset<T, orden_ingresoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends orden_ingresoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, orden_ingresoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends orden_ingresoDeleteArgs>(args: Prisma.SelectSubset<T, orden_ingresoDeleteArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends orden_ingresoUpdateArgs>(args: Prisma.SelectSubset<T, orden_ingresoUpdateArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends orden_ingresoDeleteManyArgs>(args?: Prisma.SelectSubset<T, orden_ingresoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends orden_ingresoUpdateManyArgs>(args: Prisma.SelectSubset<T, orden_ingresoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends orden_ingresoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, orden_ingresoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends orden_ingresoUpsertArgs>(args: Prisma.SelectSubset<T, orden_ingresoUpsertArgs<ExtArgs>>): Prisma.Prisma__orden_ingresoClient<runtime.Types.Result.GetResult<Prisma.$orden_ingresoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends orden_ingresoCountArgs>(args?: Prisma.Subset<T, orden_ingresoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Orden_ingresoCountAggregateOutputType> : number>;
    aggregate<T extends Orden_ingresoAggregateArgs>(args: Prisma.Subset<T, Orden_ingresoAggregateArgs>): Prisma.PrismaPromise<GetOrden_ingresoAggregateType<T>>;
    groupBy<T extends orden_ingresoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: orden_ingresoGroupByArgs['orderBy'];
    } : {
        orderBy?: orden_ingresoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, orden_ingresoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrden_ingresoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: orden_ingresoFieldRefs;
}
export interface Prisma__orden_ingresoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proveedor<T extends Prisma.orden_ingreso$proveedorArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orden_ingreso$proveedorArgs<ExtArgs>>): Prisma.Prisma__proveedorClient<runtime.Types.Result.GetResult<Prisma.$proveedorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bodega<T extends Prisma.orden_ingreso$bodegaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orden_ingreso$bodegaArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa<T extends Prisma.orden_ingreso$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orden_ingreso$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario_registro<T extends Prisma.orden_ingreso$usuario_registroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orden_ingreso$usuario_registroArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    detalles<T extends Prisma.orden_ingreso$detallesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.orden_ingreso$detallesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_orden_ingresoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface orden_ingresoFieldRefs {
    readonly id_orden: Prisma.FieldRef<"orden_ingreso", 'Int'>;
    readonly id_proveedor: Prisma.FieldRef<"orden_ingreso", 'Int'>;
    readonly id_bodega: Prisma.FieldRef<"orden_ingreso", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"orden_ingreso", 'Int'>;
    readonly id_usuario_registro: Prisma.FieldRef<"orden_ingreso", 'Int'>;
    readonly fecha_creacion: Prisma.FieldRef<"orden_ingreso", 'DateTime'>;
    readonly fecha_recepcion: Prisma.FieldRef<"orden_ingreso", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"orden_ingreso", 'String'>;
    readonly factura_proveedor: Prisma.FieldRef<"orden_ingreso", 'String'>;
}
export type orden_ingresoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.orden_ingresoWhereUniqueInput;
};
export type orden_ingresoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.orden_ingresoWhereUniqueInput;
};
export type orden_ingresoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type orden_ingresoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type orden_ingresoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type orden_ingresoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.orden_ingresoCreateInput, Prisma.orden_ingresoUncheckedCreateInput>;
};
export type orden_ingresoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.orden_ingresoCreateManyInput | Prisma.orden_ingresoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type orden_ingresoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    data: Prisma.orden_ingresoCreateManyInput | Prisma.orden_ingresoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.orden_ingresoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type orden_ingresoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateInput, Prisma.orden_ingresoUncheckedUpdateInput>;
    where: Prisma.orden_ingresoWhereUniqueInput;
};
export type orden_ingresoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyInput>;
    where?: Prisma.orden_ingresoWhereInput;
    limit?: number;
};
export type orden_ingresoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.orden_ingresoUpdateManyMutationInput, Prisma.orden_ingresoUncheckedUpdateManyInput>;
    where?: Prisma.orden_ingresoWhereInput;
    limit?: number;
    include?: Prisma.orden_ingresoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type orden_ingresoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.orden_ingresoWhereUniqueInput;
    create: Prisma.XOR<Prisma.orden_ingresoCreateInput, Prisma.orden_ingresoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.orden_ingresoUpdateInput, Prisma.orden_ingresoUncheckedUpdateInput>;
};
export type orden_ingresoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
    where: Prisma.orden_ingresoWhereUniqueInput;
};
export type orden_ingresoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.orden_ingresoWhereInput;
    limit?: number;
};
export type orden_ingreso$proveedorArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.proveedorSelect<ExtArgs> | null;
    omit?: Prisma.proveedorOmit<ExtArgs> | null;
    include?: Prisma.proveedorInclude<ExtArgs> | null;
    where?: Prisma.proveedorWhereInput;
};
export type orden_ingreso$bodegaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
};
export type orden_ingreso$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type orden_ingreso$usuario_registroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type orden_ingreso$detallesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.detalle_orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.detalle_orden_ingresoInclude<ExtArgs> | null;
    where?: Prisma.detalle_orden_ingresoWhereInput;
    orderBy?: Prisma.detalle_orden_ingresoOrderByWithRelationInput | Prisma.detalle_orden_ingresoOrderByWithRelationInput[];
    cursor?: Prisma.detalle_orden_ingresoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_orden_ingresoScalarFieldEnum | Prisma.Detalle_orden_ingresoScalarFieldEnum[];
};
export type orden_ingresoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_ingresoSelect<ExtArgs> | null;
    omit?: Prisma.orden_ingresoOmit<ExtArgs> | null;
    include?: Prisma.orden_ingresoInclude<ExtArgs> | null;
};
