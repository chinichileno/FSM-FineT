import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type movimiento_inventarioModel = runtime.Types.Result.DefaultSelection<Prisma.$movimiento_inventarioPayload>;
export type AggregateMovimiento_inventario = {
    _count: Movimiento_inventarioCountAggregateOutputType | null;
    _avg: Movimiento_inventarioAvgAggregateOutputType | null;
    _sum: Movimiento_inventarioSumAggregateOutputType | null;
    _min: Movimiento_inventarioMinAggregateOutputType | null;
    _max: Movimiento_inventarioMaxAggregateOutputType | null;
};
export type Movimiento_inventarioAvgAggregateOutputType = {
    id_movimiento: number | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_bodega_origen: number | null;
    id_bodega_destino: number | null;
    id_usuario: number | null;
    cantidad: runtime.Decimal | null;
    referencia_id: number | null;
};
export type Movimiento_inventarioSumAggregateOutputType = {
    id_movimiento: bigint | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_bodega_origen: number | null;
    id_bodega_destino: number | null;
    id_usuario: number | null;
    cantidad: runtime.Decimal | null;
    referencia_id: number | null;
};
export type Movimiento_inventarioMinAggregateOutputType = {
    id_movimiento: bigint | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_bodega_origen: number | null;
    id_bodega_destino: number | null;
    id_usuario: number | null;
    tipo_movimiento: string | null;
    cantidad: runtime.Decimal | null;
    fecha: Date | null;
    referencia_id: number | null;
};
export type Movimiento_inventarioMaxAggregateOutputType = {
    id_movimiento: bigint | null;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_bodega_origen: number | null;
    id_bodega_destino: number | null;
    id_usuario: number | null;
    tipo_movimiento: string | null;
    cantidad: runtime.Decimal | null;
    fecha: Date | null;
    referencia_id: number | null;
};
export type Movimiento_inventarioCountAggregateOutputType = {
    id_movimiento: number;
    id_tipo_equipo: number;
    id_unidad: number;
    id_empresa_origen: number;
    id_empresa_destino: number;
    id_bodega_origen: number;
    id_bodega_destino: number;
    id_usuario: number;
    tipo_movimiento: number;
    cantidad: number;
    fecha: number;
    referencia_id: number;
    _all: number;
};
export type Movimiento_inventarioAvgAggregateInputType = {
    id_movimiento?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_bodega_origen?: true;
    id_bodega_destino?: true;
    id_usuario?: true;
    cantidad?: true;
    referencia_id?: true;
};
export type Movimiento_inventarioSumAggregateInputType = {
    id_movimiento?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_bodega_origen?: true;
    id_bodega_destino?: true;
    id_usuario?: true;
    cantidad?: true;
    referencia_id?: true;
};
export type Movimiento_inventarioMinAggregateInputType = {
    id_movimiento?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_bodega_origen?: true;
    id_bodega_destino?: true;
    id_usuario?: true;
    tipo_movimiento?: true;
    cantidad?: true;
    fecha?: true;
    referencia_id?: true;
};
export type Movimiento_inventarioMaxAggregateInputType = {
    id_movimiento?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_bodega_origen?: true;
    id_bodega_destino?: true;
    id_usuario?: true;
    tipo_movimiento?: true;
    cantidad?: true;
    fecha?: true;
    referencia_id?: true;
};
export type Movimiento_inventarioCountAggregateInputType = {
    id_movimiento?: true;
    id_tipo_equipo?: true;
    id_unidad?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_bodega_origen?: true;
    id_bodega_destino?: true;
    id_usuario?: true;
    tipo_movimiento?: true;
    cantidad?: true;
    fecha?: true;
    referencia_id?: true;
    _all?: true;
};
export type Movimiento_inventarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Movimiento_inventarioCountAggregateInputType;
    _avg?: Movimiento_inventarioAvgAggregateInputType;
    _sum?: Movimiento_inventarioSumAggregateInputType;
    _min?: Movimiento_inventarioMinAggregateInputType;
    _max?: Movimiento_inventarioMaxAggregateInputType;
};
export type GetMovimiento_inventarioAggregateType<T extends Movimiento_inventarioAggregateArgs> = {
    [P in keyof T & keyof AggregateMovimiento_inventario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMovimiento_inventario[P]> : Prisma.GetScalarType<T[P], AggregateMovimiento_inventario[P]>;
};
export type movimiento_inventarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithAggregationInput | Prisma.movimiento_inventarioOrderByWithAggregationInput[];
    by: Prisma.Movimiento_inventarioScalarFieldEnum[] | Prisma.Movimiento_inventarioScalarFieldEnum;
    having?: Prisma.movimiento_inventarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Movimiento_inventarioCountAggregateInputType | true;
    _avg?: Movimiento_inventarioAvgAggregateInputType;
    _sum?: Movimiento_inventarioSumAggregateInputType;
    _min?: Movimiento_inventarioMinAggregateInputType;
    _max?: Movimiento_inventarioMaxAggregateInputType;
};
export type Movimiento_inventarioGroupByOutputType = {
    id_movimiento: bigint;
    id_tipo_equipo: number | null;
    id_unidad: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_bodega_origen: number | null;
    id_bodega_destino: number | null;
    id_usuario: number | null;
    tipo_movimiento: string | null;
    cantidad: runtime.Decimal;
    fecha: Date;
    referencia_id: number | null;
    _count: Movimiento_inventarioCountAggregateOutputType | null;
    _avg: Movimiento_inventarioAvgAggregateOutputType | null;
    _sum: Movimiento_inventarioSumAggregateOutputType | null;
    _min: Movimiento_inventarioMinAggregateOutputType | null;
    _max: Movimiento_inventarioMaxAggregateOutputType | null;
};
export type GetMovimiento_inventarioGroupByPayload<T extends movimiento_inventarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Movimiento_inventarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Movimiento_inventarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Movimiento_inventarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Movimiento_inventarioGroupByOutputType[P]>;
}>>;
export type movimiento_inventarioWhereInput = {
    AND?: Prisma.movimiento_inventarioWhereInput | Prisma.movimiento_inventarioWhereInput[];
    OR?: Prisma.movimiento_inventarioWhereInput[];
    NOT?: Prisma.movimiento_inventarioWhereInput | Prisma.movimiento_inventarioWhereInput[];
    id_movimiento?: Prisma.BigIntFilter<"movimiento_inventario"> | bigint | number;
    id_tipo_equipo?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    tipo_movimiento?: Prisma.StringNullableFilter<"movimiento_inventario"> | string | null;
    cantidad?: Prisma.DecimalFilter<"movimiento_inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"movimiento_inventario"> | Date | string;
    referencia_id?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    empresa_origen?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    empresa_destino?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    bodega_origen?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    bodega_destino?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type movimiento_inventarioOrderByWithRelationInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_movimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_equipo?: Prisma.tipo_equipoOrderByWithRelationInput;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
    empresa_origen?: Prisma.empresaOrderByWithRelationInput;
    empresa_destino?: Prisma.empresaOrderByWithRelationInput;
    bodega_origen?: Prisma.bodegaOrderByWithRelationInput;
    bodega_destino?: Prisma.bodegaOrderByWithRelationInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type movimiento_inventarioWhereUniqueInput = Prisma.AtLeast<{
    id_movimiento?: bigint | number;
    AND?: Prisma.movimiento_inventarioWhereInput | Prisma.movimiento_inventarioWhereInput[];
    OR?: Prisma.movimiento_inventarioWhereInput[];
    NOT?: Prisma.movimiento_inventarioWhereInput | Prisma.movimiento_inventarioWhereInput[];
    id_tipo_equipo?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    tipo_movimiento?: Prisma.StringNullableFilter<"movimiento_inventario"> | string | null;
    cantidad?: Prisma.DecimalFilter<"movimiento_inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"movimiento_inventario"> | Date | string;
    referencia_id?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    tipo_equipo?: Prisma.XOR<Prisma.Tipo_equipoNullableScalarRelationFilter, Prisma.tipo_equipoWhereInput> | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    empresa_origen?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    empresa_destino?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    bodega_origen?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    bodega_destino?: Prisma.XOR<Prisma.BodegaNullableScalarRelationFilter, Prisma.bodegaWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_movimiento">;
export type movimiento_inventarioOrderByWithAggregationInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_movimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.movimiento_inventarioCountOrderByAggregateInput;
    _avg?: Prisma.movimiento_inventarioAvgOrderByAggregateInput;
    _max?: Prisma.movimiento_inventarioMaxOrderByAggregateInput;
    _min?: Prisma.movimiento_inventarioMinOrderByAggregateInput;
    _sum?: Prisma.movimiento_inventarioSumOrderByAggregateInput;
};
export type movimiento_inventarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.movimiento_inventarioScalarWhereWithAggregatesInput | Prisma.movimiento_inventarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.movimiento_inventarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.movimiento_inventarioScalarWhereWithAggregatesInput | Prisma.movimiento_inventarioScalarWhereWithAggregatesInput[];
    id_movimiento?: Prisma.BigIntWithAggregatesFilter<"movimiento_inventario"> | bigint | number;
    id_tipo_equipo?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_empresa_origen?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_empresa_destino?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_bodega_origen?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_bodega_destino?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
    tipo_movimiento?: Prisma.StringNullableWithAggregatesFilter<"movimiento_inventario"> | string | null;
    cantidad?: Prisma.DecimalWithAggregatesFilter<"movimiento_inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeWithAggregatesFilter<"movimiento_inventario"> | Date | string;
    referencia_id?: Prisma.IntNullableWithAggregatesFilter<"movimiento_inventario"> | number | null;
};
export type movimiento_inventarioCreateInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioCreateManyInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateManyMutationInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Movimiento_inventarioListRelationFilter = {
    every?: Prisma.movimiento_inventarioWhereInput;
    some?: Prisma.movimiento_inventarioWhereInput;
    none?: Prisma.movimiento_inventarioWhereInput;
};
export type movimiento_inventarioOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type movimiento_inventarioCountOrderByAggregateInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    tipo_movimiento?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrder;
};
export type movimiento_inventarioAvgOrderByAggregateInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrder;
};
export type movimiento_inventarioMaxOrderByAggregateInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    tipo_movimiento?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrder;
};
export type movimiento_inventarioMinOrderByAggregateInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    tipo_movimiento?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrder;
};
export type movimiento_inventarioSumOrderByAggregateInput = {
    id_movimiento?: Prisma.SortOrder;
    id_tipo_equipo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_bodega_origen?: Prisma.SortOrder;
    id_bodega_destino?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    cantidad?: Prisma.SortOrder;
    referencia_id?: Prisma.SortOrder;
};
export type movimiento_inventarioCreateNestedManyWithoutEmpresa_origenInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_origenInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutEmpresa_destinoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_destinoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutEmpresa_origenInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_origenInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutEmpresa_destinoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_destinoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUpdateManyWithoutEmpresa_origenNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_origenInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_origenInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_origenInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUpdateManyWithoutEmpresa_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_destinoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_destinoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_destinoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_origenNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_origenInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_origenInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_origenInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_origenInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyEmpresa_destinoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_destinoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_destinoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_destinoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput> | Prisma.movimiento_inventarioCreateWithoutUsuarioInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput> | Prisma.movimiento_inventarioCreateWithoutUsuarioInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUsuarioInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput> | Prisma.movimiento_inventarioCreateWithoutUsuarioInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput> | Prisma.movimiento_inventarioCreateWithoutUsuarioInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUsuarioInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUsuarioInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput> | Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutTipo_equipoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput> | Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyTipo_equipoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput> | Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput> | Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutTipo_equipoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyTipo_equipoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutTipo_equipoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutTipo_equipoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutTipo_equipoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput> | Prisma.movimiento_inventarioCreateWithoutUnidadInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUnidadInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput> | Prisma.movimiento_inventarioCreateWithoutUnidadInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUnidadInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput> | Prisma.movimiento_inventarioCreateWithoutUnidadInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUnidadInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUnidadInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUnidadInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUnidadInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput> | Prisma.movimiento_inventarioCreateWithoutUnidadInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput | Prisma.movimiento_inventarioCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUnidadInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyUnidadInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUnidadInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUnidadInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutBodega_origenInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput> | Prisma.movimiento_inventarioCreateWithoutBodega_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_origenInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioCreateNestedManyWithoutBodega_destinoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput> | Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_destinoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_origenInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput> | Prisma.movimiento_inventarioCreateWithoutBodega_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_origenInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUncheckedCreateNestedManyWithoutBodega_destinoInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput> | Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_destinoInputEnvelope;
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
};
export type movimiento_inventarioUpdateManyWithoutBodega_origenNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput> | Prisma.movimiento_inventarioCreateWithoutBodega_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_origenInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_origenInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_origenInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_origenInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_origenInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_origenInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUpdateManyWithoutBodega_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput> | Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_destinoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_destinoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_destinoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput> | Prisma.movimiento_inventarioCreateWithoutBodega_origenInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_origenInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_origenInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_origenInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_origenInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_origenInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_origenInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_origenInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_origenInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput> | Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput[] | Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput[];
    connectOrCreate?: Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput | Prisma.movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput[];
    upsert?: Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_destinoInput[];
    createMany?: Prisma.movimiento_inventarioCreateManyBodega_destinoInputEnvelope;
    set?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    disconnect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    delete?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    connect?: Prisma.movimiento_inventarioWhereUniqueInput | Prisma.movimiento_inventarioWhereUniqueInput[];
    update?: Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_destinoInput[];
    updateMany?: Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_destinoInput | Prisma.movimiento_inventarioUpdateManyWithWhereWithoutBodega_destinoInput[];
    deleteMany?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
};
export type movimiento_inventarioCreateWithoutEmpresa_origenInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutEmpresa_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput>;
};
export type movimiento_inventarioCreateManyEmpresa_origenInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyEmpresa_origenInput | Prisma.movimiento_inventarioCreateManyEmpresa_origenInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioCreateWithoutEmpresa_destinoInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutEmpresa_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput>;
};
export type movimiento_inventarioCreateManyEmpresa_destinoInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyEmpresa_destinoInput | Prisma.movimiento_inventarioCreateManyEmpresa_destinoInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutEmpresa_origenInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_origenInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutEmpresa_origenInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutEmpresa_origenInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_origenInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_origenInput>;
};
export type movimiento_inventarioScalarWhereInput = {
    AND?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
    OR?: Prisma.movimiento_inventarioScalarWhereInput[];
    NOT?: Prisma.movimiento_inventarioScalarWhereInput | Prisma.movimiento_inventarioScalarWhereInput[];
    id_movimiento?: Prisma.BigIntFilter<"movimiento_inventario"> | bigint | number;
    id_tipo_equipo?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_unidad?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_origen?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_bodega_destino?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
    tipo_movimiento?: Prisma.StringNullableFilter<"movimiento_inventario"> | string | null;
    cantidad?: Prisma.DecimalFilter<"movimiento_inventario"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFilter<"movimiento_inventario"> | Date | string;
    referencia_id?: Prisma.IntNullableFilter<"movimiento_inventario"> | number | null;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutEmpresa_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutEmpresa_destinoInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutEmpresa_destinoInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutEmpresa_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutEmpresa_destinoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutEmpresa_destinoInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutEmpresa_destinoInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_destinoInput>;
};
export type movimiento_inventarioCreateWithoutUsuarioInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
};
export type movimiento_inventarioUncheckedCreateWithoutUsuarioInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput>;
};
export type movimiento_inventarioCreateManyUsuarioInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyUsuarioInput | Prisma.movimiento_inventarioCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUsuarioInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutUsuarioInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutUsuarioInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutUsuarioInput>;
};
export type movimiento_inventarioCreateWithoutTipo_equipoInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput = {
    id_movimiento?: bigint | number;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutTipo_equipoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput>;
};
export type movimiento_inventarioCreateManyTipo_equipoInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyTipo_equipoInput | Prisma.movimiento_inventarioCreateManyTipo_equipoInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutTipo_equipoInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutTipo_equipoInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutTipo_equipoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutTipo_equipoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutTipo_equipoInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutTipo_equipoInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoInput>;
};
export type movimiento_inventarioCreateWithoutUnidadInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutUnidadInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutUnidadInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput>;
};
export type movimiento_inventarioCreateManyUnidadInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyUnidadInput | Prisma.movimiento_inventarioCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedCreateWithoutUnidadInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutUnidadInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutUnidadInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutUnidadInput>;
};
export type movimiento_inventarioCreateWithoutBodega_origenInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_destino?: Prisma.bodegaCreateNestedOneWithoutMovimientos_destinoInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutBodega_origenInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutBodega_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput>;
};
export type movimiento_inventarioCreateManyBodega_origenInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyBodega_origenInput | Prisma.movimiento_inventarioCreateManyBodega_origenInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioCreateWithoutBodega_destinoInput = {
    id_movimiento?: bigint | number;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
    tipo_equipo?: Prisma.tipo_equipoCreateNestedOneWithoutMovimientosInput;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMovimientosInput;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutMovimientos_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutMovimientos_destinoInput;
    bodega_origen?: Prisma.bodegaCreateNestedOneWithoutMovimientos_origenInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutMovimientosInput;
};
export type movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateOrConnectWithoutBodega_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput>;
};
export type movimiento_inventarioCreateManyBodega_destinoInputEnvelope = {
    data: Prisma.movimiento_inventarioCreateManyBodega_destinoInput | Prisma.movimiento_inventarioCreateManyBodega_destinoInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutBodega_origenInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_origenInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_origenInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutBodega_origenInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutBodega_origenInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutBodega_origenInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenInput>;
};
export type movimiento_inventarioUpsertWithWhereUniqueWithoutBodega_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutBodega_destinoInput>;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedCreateWithoutBodega_destinoInput>;
};
export type movimiento_inventarioUpdateWithWhereUniqueWithoutBodega_destinoInput = {
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateWithoutBodega_destinoInput, Prisma.movimiento_inventarioUncheckedUpdateWithoutBodega_destinoInput>;
};
export type movimiento_inventarioUpdateManyWithWhereWithoutBodega_destinoInput = {
    where: Prisma.movimiento_inventarioScalarWhereInput;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoInput>;
};
export type movimiento_inventarioCreateManyEmpresa_origenInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateManyEmpresa_destinoInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateWithoutEmpresa_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutEmpresa_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUpdateWithoutEmpresa_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutEmpresa_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutEmpresa_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioCreateManyUsuarioInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateWithoutUsuarioInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutUsuarioInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutUsuarioInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioCreateManyTipo_equipoInput = {
    id_movimiento?: bigint | number;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateWithoutTipo_equipoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutTipo_equipoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutTipo_equipoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioCreateManyUnidadInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateWithoutUnidadInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutUnidadInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutUnidadInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioCreateManyBodega_origenInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_destino?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioCreateManyBodega_destinoInput = {
    id_movimiento?: bigint | number;
    id_tipo_equipo?: number | null;
    id_unidad?: number | null;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_bodega_origen?: number | null;
    id_usuario?: number | null;
    tipo_movimiento?: string | null;
    cantidad?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Date | string;
    referencia_id?: number | null;
};
export type movimiento_inventarioUpdateWithoutBodega_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_destino?: Prisma.bodegaUpdateOneWithoutMovimientos_destinoNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutBodega_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutBodega_origenInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUpdateWithoutBodega_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_equipo?: Prisma.tipo_equipoUpdateOneWithoutMovimientosNestedInput;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMovimientosNestedInput;
    empresa_origen?: Prisma.empresaUpdateOneWithoutMovimientos_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutMovimientos_destinoNestedInput;
    bodega_origen?: Prisma.bodegaUpdateOneWithoutMovimientos_origenNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutMovimientosNestedInput;
};
export type movimiento_inventarioUncheckedUpdateWithoutBodega_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioUncheckedUpdateManyWithoutBodega_destinoInput = {
    id_movimiento?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_tipo_equipo?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_bodega_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    tipo_movimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cantidad?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    referencia_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type movimiento_inventarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_movimiento?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_bodega_origen?: boolean;
    id_bodega_destino?: boolean;
    id_usuario?: boolean;
    tipo_movimiento?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    referencia_id?: boolean;
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["movimiento_inventario"]>;
export type movimiento_inventarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_movimiento?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_bodega_origen?: boolean;
    id_bodega_destino?: boolean;
    id_usuario?: boolean;
    tipo_movimiento?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    referencia_id?: boolean;
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["movimiento_inventario"]>;
export type movimiento_inventarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_movimiento?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_bodega_origen?: boolean;
    id_bodega_destino?: boolean;
    id_usuario?: boolean;
    tipo_movimiento?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    referencia_id?: boolean;
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["movimiento_inventario"]>;
export type movimiento_inventarioSelectScalar = {
    id_movimiento?: boolean;
    id_tipo_equipo?: boolean;
    id_unidad?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_bodega_origen?: boolean;
    id_bodega_destino?: boolean;
    id_usuario?: boolean;
    tipo_movimiento?: boolean;
    cantidad?: boolean;
    fecha?: boolean;
    referencia_id?: boolean;
};
export type movimiento_inventarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_movimiento" | "id_tipo_equipo" | "id_unidad" | "id_empresa_origen" | "id_empresa_destino" | "id_bodega_origen" | "id_bodega_destino" | "id_usuario" | "tipo_movimiento" | "cantidad" | "fecha" | "referencia_id", ExtArgs["result"]["movimiento_inventario"]>;
export type movimiento_inventarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
};
export type movimiento_inventarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
};
export type movimiento_inventarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    tipo_equipo?: boolean | Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>;
    unidad?: boolean | Prisma.movimiento_inventario$unidadArgs<ExtArgs>;
    empresa_origen?: boolean | Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>;
    bodega_origen?: boolean | Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>;
    bodega_destino?: boolean | Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>;
    usuario?: boolean | Prisma.movimiento_inventario$usuarioArgs<ExtArgs>;
};
export type $movimiento_inventarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "movimiento_inventario";
    objects: {
        tipo_equipo: Prisma.$tipo_equipoPayload<ExtArgs> | null;
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
        empresa_origen: Prisma.$empresaPayload<ExtArgs> | null;
        empresa_destino: Prisma.$empresaPayload<ExtArgs> | null;
        bodega_origen: Prisma.$bodegaPayload<ExtArgs> | null;
        bodega_destino: Prisma.$bodegaPayload<ExtArgs> | null;
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_movimiento: bigint;
        id_tipo_equipo: number | null;
        id_unidad: number | null;
        id_empresa_origen: number | null;
        id_empresa_destino: number | null;
        id_bodega_origen: number | null;
        id_bodega_destino: number | null;
        id_usuario: number | null;
        tipo_movimiento: string | null;
        cantidad: runtime.Decimal;
        fecha: Date;
        referencia_id: number | null;
    }, ExtArgs["result"]["movimiento_inventario"]>;
    composites: {};
};
export type movimiento_inventarioGetPayload<S extends boolean | null | undefined | movimiento_inventarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload, S>;
export type movimiento_inventarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<movimiento_inventarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Movimiento_inventarioCountAggregateInputType | true;
};
export interface movimiento_inventarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['movimiento_inventario'];
        meta: {
            name: 'movimiento_inventario';
        };
    };
    findUnique<T extends movimiento_inventarioFindUniqueArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends movimiento_inventarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends movimiento_inventarioFindFirstArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends movimiento_inventarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends movimiento_inventarioFindManyArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends movimiento_inventarioCreateArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioCreateArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends movimiento_inventarioCreateManyArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends movimiento_inventarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends movimiento_inventarioDeleteArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioDeleteArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends movimiento_inventarioUpdateArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioUpdateArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends movimiento_inventarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, movimiento_inventarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends movimiento_inventarioUpdateManyArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends movimiento_inventarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends movimiento_inventarioUpsertArgs>(args: Prisma.SelectSubset<T, movimiento_inventarioUpsertArgs<ExtArgs>>): Prisma.Prisma__movimiento_inventarioClient<runtime.Types.Result.GetResult<Prisma.$movimiento_inventarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends movimiento_inventarioCountArgs>(args?: Prisma.Subset<T, movimiento_inventarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Movimiento_inventarioCountAggregateOutputType> : number>;
    aggregate<T extends Movimiento_inventarioAggregateArgs>(args: Prisma.Subset<T, Movimiento_inventarioAggregateArgs>): Prisma.PrismaPromise<GetMovimiento_inventarioAggregateType<T>>;
    groupBy<T extends movimiento_inventarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: movimiento_inventarioGroupByArgs['orderBy'];
    } : {
        orderBy?: movimiento_inventarioGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, movimiento_inventarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovimiento_inventarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: movimiento_inventarioFieldRefs;
}
export interface Prisma__movimiento_inventarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    tipo_equipo<T extends Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$tipo_equipoArgs<ExtArgs>>): Prisma.Prisma__tipo_equipoClient<runtime.Types.Result.GetResult<Prisma.$tipo_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    unidad<T extends Prisma.movimiento_inventario$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa_origen<T extends Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$empresa_origenArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa_destino<T extends Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$empresa_destinoArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bodega_origen<T extends Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$bodega_origenArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    bodega_destino<T extends Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$bodega_destinoArgs<ExtArgs>>): Prisma.Prisma__bodegaClient<runtime.Types.Result.GetResult<Prisma.$bodegaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.movimiento_inventario$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.movimiento_inventario$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface movimiento_inventarioFieldRefs {
    readonly id_movimiento: Prisma.FieldRef<"movimiento_inventario", 'BigInt'>;
    readonly id_tipo_equipo: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_unidad: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_empresa_origen: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_empresa_destino: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_bodega_origen: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_bodega_destino: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
    readonly tipo_movimiento: Prisma.FieldRef<"movimiento_inventario", 'String'>;
    readonly cantidad: Prisma.FieldRef<"movimiento_inventario", 'Decimal'>;
    readonly fecha: Prisma.FieldRef<"movimiento_inventario", 'DateTime'>;
    readonly referencia_id: Prisma.FieldRef<"movimiento_inventario", 'Int'>;
}
export type movimiento_inventarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where: Prisma.movimiento_inventarioWhereUniqueInput;
};
export type movimiento_inventarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where: Prisma.movimiento_inventarioWhereUniqueInput;
};
export type movimiento_inventarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Movimiento_inventarioScalarFieldEnum | Prisma.Movimiento_inventarioScalarFieldEnum[];
};
export type movimiento_inventarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Movimiento_inventarioScalarFieldEnum | Prisma.Movimiento_inventarioScalarFieldEnum[];
};
export type movimiento_inventarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where?: Prisma.movimiento_inventarioWhereInput;
    orderBy?: Prisma.movimiento_inventarioOrderByWithRelationInput | Prisma.movimiento_inventarioOrderByWithRelationInput[];
    cursor?: Prisma.movimiento_inventarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Movimiento_inventarioScalarFieldEnum | Prisma.Movimiento_inventarioScalarFieldEnum[];
};
export type movimiento_inventarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.movimiento_inventarioCreateInput, Prisma.movimiento_inventarioUncheckedCreateInput>;
};
export type movimiento_inventarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.movimiento_inventarioCreateManyInput | Prisma.movimiento_inventarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type movimiento_inventarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    data: Prisma.movimiento_inventarioCreateManyInput | Prisma.movimiento_inventarioCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.movimiento_inventarioIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type movimiento_inventarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateInput, Prisma.movimiento_inventarioUncheckedUpdateInput>;
    where: Prisma.movimiento_inventarioWhereUniqueInput;
};
export type movimiento_inventarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyInput>;
    where?: Prisma.movimiento_inventarioWhereInput;
    limit?: number;
};
export type movimiento_inventarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.movimiento_inventarioUpdateManyMutationInput, Prisma.movimiento_inventarioUncheckedUpdateManyInput>;
    where?: Prisma.movimiento_inventarioWhereInput;
    limit?: number;
    include?: Prisma.movimiento_inventarioIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type movimiento_inventarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where: Prisma.movimiento_inventarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.movimiento_inventarioCreateInput, Prisma.movimiento_inventarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.movimiento_inventarioUpdateInput, Prisma.movimiento_inventarioUncheckedUpdateInput>;
};
export type movimiento_inventarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
    where: Prisma.movimiento_inventarioWhereUniqueInput;
};
export type movimiento_inventarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.movimiento_inventarioWhereInput;
    limit?: number;
};
export type movimiento_inventario$tipo_equipoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.tipo_equipoSelect<ExtArgs> | null;
    omit?: Prisma.tipo_equipoOmit<ExtArgs> | null;
    include?: Prisma.tipo_equipoInclude<ExtArgs> | null;
    where?: Prisma.tipo_equipoWhereInput;
};
export type movimiento_inventario$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type movimiento_inventario$empresa_origenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type movimiento_inventario$empresa_destinoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type movimiento_inventario$bodega_origenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
};
export type movimiento_inventario$bodega_destinoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bodegaSelect<ExtArgs> | null;
    omit?: Prisma.bodegaOmit<ExtArgs> | null;
    include?: Prisma.bodegaInclude<ExtArgs> | null;
    where?: Prisma.bodegaWhereInput;
};
export type movimiento_inventario$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type movimiento_inventarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.movimiento_inventarioSelect<ExtArgs> | null;
    omit?: Prisma.movimiento_inventarioOmit<ExtArgs> | null;
    include?: Prisma.movimiento_inventarioInclude<ExtArgs> | null;
};
