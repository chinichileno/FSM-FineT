import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type transferencia_equipoModel = runtime.Types.Result.DefaultSelection<Prisma.$transferencia_equipoPayload>;
export type AggregateTransferencia_equipo = {
    _count: Transferencia_equipoCountAggregateOutputType | null;
    _avg: Transferencia_equipoAvgAggregateOutputType | null;
    _sum: Transferencia_equipoSumAggregateOutputType | null;
    _min: Transferencia_equipoMinAggregateOutputType | null;
    _max: Transferencia_equipoMaxAggregateOutputType | null;
};
export type Transferencia_equipoAvgAggregateOutputType = {
    id_transferencia: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_usuario_registro: number | null;
};
export type Transferencia_equipoSumAggregateOutputType = {
    id_transferencia: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_usuario_registro: number | null;
};
export type Transferencia_equipoMinAggregateOutputType = {
    id_transferencia: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_usuario_registro: number | null;
    fecha_transferencia: Date | null;
    observaciones: string | null;
};
export type Transferencia_equipoMaxAggregateOutputType = {
    id_transferencia: number | null;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_usuario_registro: number | null;
    fecha_transferencia: Date | null;
    observaciones: string | null;
};
export type Transferencia_equipoCountAggregateOutputType = {
    id_transferencia: number;
    id_empresa_origen: number;
    id_empresa_destino: number;
    id_usuario_registro: number;
    fecha_transferencia: number;
    observaciones: number;
    _all: number;
};
export type Transferencia_equipoAvgAggregateInputType = {
    id_transferencia?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_usuario_registro?: true;
};
export type Transferencia_equipoSumAggregateInputType = {
    id_transferencia?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_usuario_registro?: true;
};
export type Transferencia_equipoMinAggregateInputType = {
    id_transferencia?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_usuario_registro?: true;
    fecha_transferencia?: true;
    observaciones?: true;
};
export type Transferencia_equipoMaxAggregateInputType = {
    id_transferencia?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_usuario_registro?: true;
    fecha_transferencia?: true;
    observaciones?: true;
};
export type Transferencia_equipoCountAggregateInputType = {
    id_transferencia?: true;
    id_empresa_origen?: true;
    id_empresa_destino?: true;
    id_usuario_registro?: true;
    fecha_transferencia?: true;
    observaciones?: true;
    _all?: true;
};
export type Transferencia_equipoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transferencia_equipoWhereInput;
    orderBy?: Prisma.transferencia_equipoOrderByWithRelationInput | Prisma.transferencia_equipoOrderByWithRelationInput[];
    cursor?: Prisma.transferencia_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Transferencia_equipoCountAggregateInputType;
    _avg?: Transferencia_equipoAvgAggregateInputType;
    _sum?: Transferencia_equipoSumAggregateInputType;
    _min?: Transferencia_equipoMinAggregateInputType;
    _max?: Transferencia_equipoMaxAggregateInputType;
};
export type GetTransferencia_equipoAggregateType<T extends Transferencia_equipoAggregateArgs> = {
    [P in keyof T & keyof AggregateTransferencia_equipo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTransferencia_equipo[P]> : Prisma.GetScalarType<T[P], AggregateTransferencia_equipo[P]>;
};
export type transferencia_equipoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transferencia_equipoWhereInput;
    orderBy?: Prisma.transferencia_equipoOrderByWithAggregationInput | Prisma.transferencia_equipoOrderByWithAggregationInput[];
    by: Prisma.Transferencia_equipoScalarFieldEnum[] | Prisma.Transferencia_equipoScalarFieldEnum;
    having?: Prisma.transferencia_equipoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Transferencia_equipoCountAggregateInputType | true;
    _avg?: Transferencia_equipoAvgAggregateInputType;
    _sum?: Transferencia_equipoSumAggregateInputType;
    _min?: Transferencia_equipoMinAggregateInputType;
    _max?: Transferencia_equipoMaxAggregateInputType;
};
export type Transferencia_equipoGroupByOutputType = {
    id_transferencia: number;
    id_empresa_origen: number | null;
    id_empresa_destino: number | null;
    id_usuario_registro: number | null;
    fecha_transferencia: Date | null;
    observaciones: string | null;
    _count: Transferencia_equipoCountAggregateOutputType | null;
    _avg: Transferencia_equipoAvgAggregateOutputType | null;
    _sum: Transferencia_equipoSumAggregateOutputType | null;
    _min: Transferencia_equipoMinAggregateOutputType | null;
    _max: Transferencia_equipoMaxAggregateOutputType | null;
};
export type GetTransferencia_equipoGroupByPayload<T extends transferencia_equipoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Transferencia_equipoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Transferencia_equipoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Transferencia_equipoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Transferencia_equipoGroupByOutputType[P]>;
}>>;
export type transferencia_equipoWhereInput = {
    AND?: Prisma.transferencia_equipoWhereInput | Prisma.transferencia_equipoWhereInput[];
    OR?: Prisma.transferencia_equipoWhereInput[];
    NOT?: Prisma.transferencia_equipoWhereInput | Prisma.transferencia_equipoWhereInput[];
    id_transferencia?: Prisma.IntFilter<"transferencia_equipo"> | number;
    id_empresa_origen?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    fecha_transferencia?: Prisma.DateTimeNullableFilter<"transferencia_equipo"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"transferencia_equipo"> | string | null;
    empresa_origen?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    empresa_destino?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type transferencia_equipoOrderByWithRelationInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_transferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa_origen?: Prisma.empresaOrderByWithRelationInput;
    empresa_destino?: Prisma.empresaOrderByWithRelationInput;
    usuario_registro?: Prisma.usuarioOrderByWithRelationInput;
};
export type transferencia_equipoWhereUniqueInput = Prisma.AtLeast<{
    id_transferencia?: number;
    AND?: Prisma.transferencia_equipoWhereInput | Prisma.transferencia_equipoWhereInput[];
    OR?: Prisma.transferencia_equipoWhereInput[];
    NOT?: Prisma.transferencia_equipoWhereInput | Prisma.transferencia_equipoWhereInput[];
    id_empresa_origen?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    fecha_transferencia?: Prisma.DateTimeNullableFilter<"transferencia_equipo"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"transferencia_equipo"> | string | null;
    empresa_origen?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    empresa_destino?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_transferencia">;
export type transferencia_equipoOrderByWithAggregationInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_transferencia?: Prisma.SortOrderInput | Prisma.SortOrder;
    observaciones?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.transferencia_equipoCountOrderByAggregateInput;
    _avg?: Prisma.transferencia_equipoAvgOrderByAggregateInput;
    _max?: Prisma.transferencia_equipoMaxOrderByAggregateInput;
    _min?: Prisma.transferencia_equipoMinOrderByAggregateInput;
    _sum?: Prisma.transferencia_equipoSumOrderByAggregateInput;
};
export type transferencia_equipoScalarWhereWithAggregatesInput = {
    AND?: Prisma.transferencia_equipoScalarWhereWithAggregatesInput | Prisma.transferencia_equipoScalarWhereWithAggregatesInput[];
    OR?: Prisma.transferencia_equipoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.transferencia_equipoScalarWhereWithAggregatesInput | Prisma.transferencia_equipoScalarWhereWithAggregatesInput[];
    id_transferencia?: Prisma.IntWithAggregatesFilter<"transferencia_equipo"> | number;
    id_empresa_origen?: Prisma.IntNullableWithAggregatesFilter<"transferencia_equipo"> | number | null;
    id_empresa_destino?: Prisma.IntNullableWithAggregatesFilter<"transferencia_equipo"> | number | null;
    id_usuario_registro?: Prisma.IntNullableWithAggregatesFilter<"transferencia_equipo"> | number | null;
    fecha_transferencia?: Prisma.DateTimeNullableWithAggregatesFilter<"transferencia_equipo"> | Date | string | null;
    observaciones?: Prisma.StringNullableWithAggregatesFilter<"transferencia_equipo"> | string | null;
};
export type transferencia_equipoCreateInput = {
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutTransferencias_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutTransferencias_destinoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutTransferenciasInput;
};
export type transferencia_equipoUncheckedCreateInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoUpdateInput = {
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa_origen?: Prisma.empresaUpdateOneWithoutTransferencias_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutTransferencias_destinoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutTransferenciasNestedInput;
};
export type transferencia_equipoUncheckedUpdateInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoCreateManyInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoUpdateManyMutationInput = {
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoUncheckedUpdateManyInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Transferencia_equipoListRelationFilter = {
    every?: Prisma.transferencia_equipoWhereInput;
    some?: Prisma.transferencia_equipoWhereInput;
    none?: Prisma.transferencia_equipoWhereInput;
};
export type transferencia_equipoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type transferencia_equipoCountOrderByAggregateInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_transferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type transferencia_equipoAvgOrderByAggregateInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type transferencia_equipoMaxOrderByAggregateInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_transferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type transferencia_equipoMinOrderByAggregateInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
    fecha_transferencia?: Prisma.SortOrder;
    observaciones?: Prisma.SortOrder;
};
export type transferencia_equipoSumOrderByAggregateInput = {
    id_transferencia?: Prisma.SortOrder;
    id_empresa_origen?: Prisma.SortOrder;
    id_empresa_destino?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type transferencia_equipoCreateNestedManyWithoutEmpresa_origenInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_origenInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoCreateNestedManyWithoutEmpresa_destinoInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_destinoInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoUncheckedCreateNestedManyWithoutEmpresa_origenInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_origenInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoUncheckedCreateNestedManyWithoutEmpresa_destinoInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_destinoInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoUpdateManyWithoutEmpresa_origenNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_origenInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_origenInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_origenInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_origenInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoUpdateManyWithoutEmpresa_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_destinoInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_destinoInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_destinoInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_destinoInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoUncheckedUpdateManyWithoutEmpresa_origenNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_origenInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_origenInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_origenInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_origenInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_origenInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoUncheckedUpdateManyWithoutEmpresa_destinoNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput> | Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput | Prisma.transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_destinoInput[];
    createMany?: Prisma.transferencia_equipoCreateManyEmpresa_destinoInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_destinoInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_destinoInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutEmpresa_destinoInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput> | Prisma.transferencia_equipoCreateWithoutUsuario_registroInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput | Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.transferencia_equipoCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoUncheckedCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput> | Prisma.transferencia_equipoCreateWithoutUsuario_registroInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput | Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.transferencia_equipoCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
};
export type transferencia_equipoUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput> | Prisma.transferencia_equipoCreateWithoutUsuario_registroInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput | Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.transferencia_equipoCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoUncheckedUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput> | Prisma.transferencia_equipoCreateWithoutUsuario_registroInput[] | Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput | Prisma.transferencia_equipoCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.transferencia_equipoUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.transferencia_equipoCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    disconnect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    delete?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    connect?: Prisma.transferencia_equipoWhereUniqueInput | Prisma.transferencia_equipoWhereUniqueInput[];
    update?: Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.transferencia_equipoUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.transferencia_equipoUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.transferencia_equipoUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
};
export type transferencia_equipoCreateWithoutEmpresa_origenInput = {
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutTransferencias_destinoInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutTransferenciasInput;
};
export type transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput = {
    id_transferencia?: number;
    id_empresa_destino?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoCreateOrConnectWithoutEmpresa_origenInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput>;
};
export type transferencia_equipoCreateManyEmpresa_origenInputEnvelope = {
    data: Prisma.transferencia_equipoCreateManyEmpresa_origenInput | Prisma.transferencia_equipoCreateManyEmpresa_origenInput[];
    skipDuplicates?: boolean;
};
export type transferencia_equipoCreateWithoutEmpresa_destinoInput = {
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutTransferencias_origenInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutTransferenciasInput;
};
export type transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoCreateOrConnectWithoutEmpresa_destinoInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput>;
};
export type transferencia_equipoCreateManyEmpresa_destinoInputEnvelope = {
    data: Prisma.transferencia_equipoCreateManyEmpresa_destinoInput | Prisma.transferencia_equipoCreateManyEmpresa_destinoInput[];
    skipDuplicates?: boolean;
};
export type transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_origenInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedUpdateWithoutEmpresa_origenInput>;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_origenInput>;
};
export type transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_origenInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutEmpresa_origenInput, Prisma.transferencia_equipoUncheckedUpdateWithoutEmpresa_origenInput>;
};
export type transferencia_equipoUpdateManyWithWhereWithoutEmpresa_origenInput = {
    where: Prisma.transferencia_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateManyMutationInput, Prisma.transferencia_equipoUncheckedUpdateManyWithoutEmpresa_origenInput>;
};
export type transferencia_equipoScalarWhereInput = {
    AND?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
    OR?: Prisma.transferencia_equipoScalarWhereInput[];
    NOT?: Prisma.transferencia_equipoScalarWhereInput | Prisma.transferencia_equipoScalarWhereInput[];
    id_transferencia?: Prisma.IntFilter<"transferencia_equipo"> | number;
    id_empresa_origen?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_empresa_destino?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    id_usuario_registro?: Prisma.IntNullableFilter<"transferencia_equipo"> | number | null;
    fecha_transferencia?: Prisma.DateTimeNullableFilter<"transferencia_equipo"> | Date | string | null;
    observaciones?: Prisma.StringNullableFilter<"transferencia_equipo"> | string | null;
};
export type transferencia_equipoUpsertWithWhereUniqueWithoutEmpresa_destinoInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedUpdateWithoutEmpresa_destinoInput>;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedCreateWithoutEmpresa_destinoInput>;
};
export type transferencia_equipoUpdateWithWhereUniqueWithoutEmpresa_destinoInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutEmpresa_destinoInput, Prisma.transferencia_equipoUncheckedUpdateWithoutEmpresa_destinoInput>;
};
export type transferencia_equipoUpdateManyWithWhereWithoutEmpresa_destinoInput = {
    where: Prisma.transferencia_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateManyMutationInput, Prisma.transferencia_equipoUncheckedUpdateManyWithoutEmpresa_destinoInput>;
};
export type transferencia_equipoCreateWithoutUsuario_registroInput = {
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
    empresa_origen?: Prisma.empresaCreateNestedOneWithoutTransferencias_origenInput;
    empresa_destino?: Prisma.empresaCreateNestedOneWithoutTransferencias_destinoInput;
};
export type transferencia_equipoUncheckedCreateWithoutUsuario_registroInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoCreateOrConnectWithoutUsuario_registroInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput>;
};
export type transferencia_equipoCreateManyUsuario_registroInputEnvelope = {
    data: Prisma.transferencia_equipoCreateManyUsuario_registroInput | Prisma.transferencia_equipoCreateManyUsuario_registroInput[];
    skipDuplicates?: boolean;
};
export type transferencia_equipoUpsertWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedUpdateWithoutUsuario_registroInput>;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedCreateWithoutUsuario_registroInput>;
};
export type transferencia_equipoUpdateWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.transferencia_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateWithoutUsuario_registroInput, Prisma.transferencia_equipoUncheckedUpdateWithoutUsuario_registroInput>;
};
export type transferencia_equipoUpdateManyWithWhereWithoutUsuario_registroInput = {
    where: Prisma.transferencia_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateManyMutationInput, Prisma.transferencia_equipoUncheckedUpdateManyWithoutUsuario_registroInput>;
};
export type transferencia_equipoCreateManyEmpresa_origenInput = {
    id_transferencia?: number;
    id_empresa_destino?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoCreateManyEmpresa_destinoInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_usuario_registro?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoUpdateWithoutEmpresa_origenInput = {
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa_destino?: Prisma.empresaUpdateOneWithoutTransferencias_destinoNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutTransferenciasNestedInput;
};
export type transferencia_equipoUncheckedUpdateWithoutEmpresa_origenInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoUncheckedUpdateManyWithoutEmpresa_origenInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoUpdateWithoutEmpresa_destinoInput = {
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa_origen?: Prisma.empresaUpdateOneWithoutTransferencias_origenNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutTransferenciasNestedInput;
};
export type transferencia_equipoUncheckedUpdateWithoutEmpresa_destinoInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoUncheckedUpdateManyWithoutEmpresa_destinoInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoCreateManyUsuario_registroInput = {
    id_transferencia?: number;
    id_empresa_origen?: number | null;
    id_empresa_destino?: number | null;
    fecha_transferencia?: Date | string | null;
    observaciones?: string | null;
};
export type transferencia_equipoUpdateWithoutUsuario_registroInput = {
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa_origen?: Prisma.empresaUpdateOneWithoutTransferencias_origenNestedInput;
    empresa_destino?: Prisma.empresaUpdateOneWithoutTransferencias_destinoNestedInput;
};
export type transferencia_equipoUncheckedUpdateWithoutUsuario_registroInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoUncheckedUpdateManyWithoutUsuario_registroInput = {
    id_transferencia?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa_origen?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa_destino?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_transferencia?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    observaciones?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type transferencia_equipoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_transferencia?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_usuario_registro?: boolean;
    fecha_transferencia?: boolean;
    observaciones?: boolean;
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["transferencia_equipo"]>;
export type transferencia_equipoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_transferencia?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_usuario_registro?: boolean;
    fecha_transferencia?: boolean;
    observaciones?: boolean;
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["transferencia_equipo"]>;
export type transferencia_equipoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_transferencia?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_usuario_registro?: boolean;
    fecha_transferencia?: boolean;
    observaciones?: boolean;
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["transferencia_equipo"]>;
export type transferencia_equipoSelectScalar = {
    id_transferencia?: boolean;
    id_empresa_origen?: boolean;
    id_empresa_destino?: boolean;
    id_usuario_registro?: boolean;
    fecha_transferencia?: boolean;
    observaciones?: boolean;
};
export type transferencia_equipoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_transferencia" | "id_empresa_origen" | "id_empresa_destino" | "id_usuario_registro" | "fecha_transferencia" | "observaciones", ExtArgs["result"]["transferencia_equipo"]>;
export type transferencia_equipoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
};
export type transferencia_equipoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
};
export type transferencia_equipoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa_origen?: boolean | Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>;
    empresa_destino?: boolean | Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>;
};
export type $transferencia_equipoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "transferencia_equipo";
    objects: {
        empresa_origen: Prisma.$empresaPayload<ExtArgs> | null;
        empresa_destino: Prisma.$empresaPayload<ExtArgs> | null;
        usuario_registro: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_transferencia: number;
        id_empresa_origen: number | null;
        id_empresa_destino: number | null;
        id_usuario_registro: number | null;
        fecha_transferencia: Date | null;
        observaciones: string | null;
    }, ExtArgs["result"]["transferencia_equipo"]>;
    composites: {};
};
export type transferencia_equipoGetPayload<S extends boolean | null | undefined | transferencia_equipoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload, S>;
export type transferencia_equipoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<transferencia_equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Transferencia_equipoCountAggregateInputType | true;
};
export interface transferencia_equipoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['transferencia_equipo'];
        meta: {
            name: 'transferencia_equipo';
        };
    };
    findUnique<T extends transferencia_equipoFindUniqueArgs>(args: Prisma.SelectSubset<T, transferencia_equipoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends transferencia_equipoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, transferencia_equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends transferencia_equipoFindFirstArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoFindFirstArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends transferencia_equipoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends transferencia_equipoFindManyArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends transferencia_equipoCreateArgs>(args: Prisma.SelectSubset<T, transferencia_equipoCreateArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends transferencia_equipoCreateManyArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends transferencia_equipoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends transferencia_equipoDeleteArgs>(args: Prisma.SelectSubset<T, transferencia_equipoDeleteArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends transferencia_equipoUpdateArgs>(args: Prisma.SelectSubset<T, transferencia_equipoUpdateArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends transferencia_equipoDeleteManyArgs>(args?: Prisma.SelectSubset<T, transferencia_equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends transferencia_equipoUpdateManyArgs>(args: Prisma.SelectSubset<T, transferencia_equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends transferencia_equipoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, transferencia_equipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends transferencia_equipoUpsertArgs>(args: Prisma.SelectSubset<T, transferencia_equipoUpsertArgs<ExtArgs>>): Prisma.Prisma__transferencia_equipoClient<runtime.Types.Result.GetResult<Prisma.$transferencia_equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends transferencia_equipoCountArgs>(args?: Prisma.Subset<T, transferencia_equipoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Transferencia_equipoCountAggregateOutputType> : number>;
    aggregate<T extends Transferencia_equipoAggregateArgs>(args: Prisma.Subset<T, Transferencia_equipoAggregateArgs>): Prisma.PrismaPromise<GetTransferencia_equipoAggregateType<T>>;
    groupBy<T extends transferencia_equipoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: transferencia_equipoGroupByArgs['orderBy'];
    } : {
        orderBy?: transferencia_equipoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, transferencia_equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransferencia_equipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: transferencia_equipoFieldRefs;
}
export interface Prisma__transferencia_equipoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa_origen<T extends Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transferencia_equipo$empresa_origenArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa_destino<T extends Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transferencia_equipo$empresa_destinoArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario_registro<T extends Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.transferencia_equipo$usuario_registroArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface transferencia_equipoFieldRefs {
    readonly id_transferencia: Prisma.FieldRef<"transferencia_equipo", 'Int'>;
    readonly id_empresa_origen: Prisma.FieldRef<"transferencia_equipo", 'Int'>;
    readonly id_empresa_destino: Prisma.FieldRef<"transferencia_equipo", 'Int'>;
    readonly id_usuario_registro: Prisma.FieldRef<"transferencia_equipo", 'Int'>;
    readonly fecha_transferencia: Prisma.FieldRef<"transferencia_equipo", 'DateTime'>;
    readonly observaciones: Prisma.FieldRef<"transferencia_equipo", 'String'>;
}
export type transferencia_equipoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where: Prisma.transferencia_equipoWhereUniqueInput;
};
export type transferencia_equipoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where: Prisma.transferencia_equipoWhereUniqueInput;
};
export type transferencia_equipoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where?: Prisma.transferencia_equipoWhereInput;
    orderBy?: Prisma.transferencia_equipoOrderByWithRelationInput | Prisma.transferencia_equipoOrderByWithRelationInput[];
    cursor?: Prisma.transferencia_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transferencia_equipoScalarFieldEnum | Prisma.Transferencia_equipoScalarFieldEnum[];
};
export type transferencia_equipoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where?: Prisma.transferencia_equipoWhereInput;
    orderBy?: Prisma.transferencia_equipoOrderByWithRelationInput | Prisma.transferencia_equipoOrderByWithRelationInput[];
    cursor?: Prisma.transferencia_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transferencia_equipoScalarFieldEnum | Prisma.Transferencia_equipoScalarFieldEnum[];
};
export type transferencia_equipoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where?: Prisma.transferencia_equipoWhereInput;
    orderBy?: Prisma.transferencia_equipoOrderByWithRelationInput | Prisma.transferencia_equipoOrderByWithRelationInput[];
    cursor?: Prisma.transferencia_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Transferencia_equipoScalarFieldEnum | Prisma.Transferencia_equipoScalarFieldEnum[];
};
export type transferencia_equipoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.transferencia_equipoCreateInput, Prisma.transferencia_equipoUncheckedCreateInput>;
};
export type transferencia_equipoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.transferencia_equipoCreateManyInput | Prisma.transferencia_equipoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type transferencia_equipoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    data: Prisma.transferencia_equipoCreateManyInput | Prisma.transferencia_equipoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.transferencia_equipoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type transferencia_equipoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateInput, Prisma.transferencia_equipoUncheckedUpdateInput>;
    where: Prisma.transferencia_equipoWhereUniqueInput;
};
export type transferencia_equipoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateManyMutationInput, Prisma.transferencia_equipoUncheckedUpdateManyInput>;
    where?: Prisma.transferencia_equipoWhereInput;
    limit?: number;
};
export type transferencia_equipoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.transferencia_equipoUpdateManyMutationInput, Prisma.transferencia_equipoUncheckedUpdateManyInput>;
    where?: Prisma.transferencia_equipoWhereInput;
    limit?: number;
    include?: Prisma.transferencia_equipoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type transferencia_equipoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where: Prisma.transferencia_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.transferencia_equipoCreateInput, Prisma.transferencia_equipoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.transferencia_equipoUpdateInput, Prisma.transferencia_equipoUncheckedUpdateInput>;
};
export type transferencia_equipoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
    where: Prisma.transferencia_equipoWhereUniqueInput;
};
export type transferencia_equipoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.transferencia_equipoWhereInput;
    limit?: number;
};
export type transferencia_equipo$empresa_origenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type transferencia_equipo$empresa_destinoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type transferencia_equipo$usuario_registroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type transferencia_equipoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.transferencia_equipoSelect<ExtArgs> | null;
    omit?: Prisma.transferencia_equipoOmit<ExtArgs> | null;
    include?: Prisma.transferencia_equipoInclude<ExtArgs> | null;
};
