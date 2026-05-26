import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type baja_equipoModel = runtime.Types.Result.DefaultSelection<Prisma.$baja_equipoPayload>;
export type AggregateBaja_equipo = {
    _count: Baja_equipoCountAggregateOutputType | null;
    _avg: Baja_equipoAvgAggregateOutputType | null;
    _sum: Baja_equipoSumAggregateOutputType | null;
    _min: Baja_equipoMinAggregateOutputType | null;
    _max: Baja_equipoMaxAggregateOutputType | null;
};
export type Baja_equipoAvgAggregateOutputType = {
    id_baja: number | null;
    id_unidad: number | null;
    id_usuario: number | null;
};
export type Baja_equipoSumAggregateOutputType = {
    id_baja: number | null;
    id_unidad: number | null;
    id_usuario: number | null;
};
export type Baja_equipoMinAggregateOutputType = {
    id_baja: number | null;
    id_unidad: number | null;
    id_usuario: number | null;
    motivo_baja: string | null;
    tipo_baja: string | null;
    donacion_destinatario: string | null;
    fecha_baja: Date | null;
};
export type Baja_equipoMaxAggregateOutputType = {
    id_baja: number | null;
    id_unidad: number | null;
    id_usuario: number | null;
    motivo_baja: string | null;
    tipo_baja: string | null;
    donacion_destinatario: string | null;
    fecha_baja: Date | null;
};
export type Baja_equipoCountAggregateOutputType = {
    id_baja: number;
    id_unidad: number;
    id_usuario: number;
    motivo_baja: number;
    tipo_baja: number;
    donacion_destinatario: number;
    fecha_baja: number;
    _all: number;
};
export type Baja_equipoAvgAggregateInputType = {
    id_baja?: true;
    id_unidad?: true;
    id_usuario?: true;
};
export type Baja_equipoSumAggregateInputType = {
    id_baja?: true;
    id_unidad?: true;
    id_usuario?: true;
};
export type Baja_equipoMinAggregateInputType = {
    id_baja?: true;
    id_unidad?: true;
    id_usuario?: true;
    motivo_baja?: true;
    tipo_baja?: true;
    donacion_destinatario?: true;
    fecha_baja?: true;
};
export type Baja_equipoMaxAggregateInputType = {
    id_baja?: true;
    id_unidad?: true;
    id_usuario?: true;
    motivo_baja?: true;
    tipo_baja?: true;
    donacion_destinatario?: true;
    fecha_baja?: true;
};
export type Baja_equipoCountAggregateInputType = {
    id_baja?: true;
    id_unidad?: true;
    id_usuario?: true;
    motivo_baja?: true;
    tipo_baja?: true;
    donacion_destinatario?: true;
    fecha_baja?: true;
    _all?: true;
};
export type Baja_equipoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.baja_equipoWhereInput;
    orderBy?: Prisma.baja_equipoOrderByWithRelationInput | Prisma.baja_equipoOrderByWithRelationInput[];
    cursor?: Prisma.baja_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Baja_equipoCountAggregateInputType;
    _avg?: Baja_equipoAvgAggregateInputType;
    _sum?: Baja_equipoSumAggregateInputType;
    _min?: Baja_equipoMinAggregateInputType;
    _max?: Baja_equipoMaxAggregateInputType;
};
export type GetBaja_equipoAggregateType<T extends Baja_equipoAggregateArgs> = {
    [P in keyof T & keyof AggregateBaja_equipo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBaja_equipo[P]> : Prisma.GetScalarType<T[P], AggregateBaja_equipo[P]>;
};
export type baja_equipoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.baja_equipoWhereInput;
    orderBy?: Prisma.baja_equipoOrderByWithAggregationInput | Prisma.baja_equipoOrderByWithAggregationInput[];
    by: Prisma.Baja_equipoScalarFieldEnum[] | Prisma.Baja_equipoScalarFieldEnum;
    having?: Prisma.baja_equipoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Baja_equipoCountAggregateInputType | true;
    _avg?: Baja_equipoAvgAggregateInputType;
    _sum?: Baja_equipoSumAggregateInputType;
    _min?: Baja_equipoMinAggregateInputType;
    _max?: Baja_equipoMaxAggregateInputType;
};
export type Baja_equipoGroupByOutputType = {
    id_baja: number;
    id_unidad: number | null;
    id_usuario: number | null;
    motivo_baja: string;
    tipo_baja: string | null;
    donacion_destinatario: string | null;
    fecha_baja: Date | null;
    _count: Baja_equipoCountAggregateOutputType | null;
    _avg: Baja_equipoAvgAggregateOutputType | null;
    _sum: Baja_equipoSumAggregateOutputType | null;
    _min: Baja_equipoMinAggregateOutputType | null;
    _max: Baja_equipoMaxAggregateOutputType | null;
};
export type GetBaja_equipoGroupByPayload<T extends baja_equipoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Baja_equipoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Baja_equipoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Baja_equipoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Baja_equipoGroupByOutputType[P]>;
}>>;
export type baja_equipoWhereInput = {
    AND?: Prisma.baja_equipoWhereInput | Prisma.baja_equipoWhereInput[];
    OR?: Prisma.baja_equipoWhereInput[];
    NOT?: Prisma.baja_equipoWhereInput | Prisma.baja_equipoWhereInput[];
    id_baja?: Prisma.IntFilter<"baja_equipo"> | number;
    id_unidad?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    motivo_baja?: Prisma.StringFilter<"baja_equipo"> | string;
    tipo_baja?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    donacion_destinatario?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    fecha_baja?: Prisma.DateTimeNullableFilter<"baja_equipo"> | Date | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type baja_equipoOrderByWithRelationInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo_baja?: Prisma.SortOrder;
    tipo_baja?: Prisma.SortOrderInput | Prisma.SortOrder;
    donacion_destinatario?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_baja?: Prisma.SortOrderInput | Prisma.SortOrder;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type baja_equipoWhereUniqueInput = Prisma.AtLeast<{
    id_baja?: number;
    AND?: Prisma.baja_equipoWhereInput | Prisma.baja_equipoWhereInput[];
    OR?: Prisma.baja_equipoWhereInput[];
    NOT?: Prisma.baja_equipoWhereInput | Prisma.baja_equipoWhereInput[];
    id_unidad?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    motivo_baja?: Prisma.StringFilter<"baja_equipo"> | string;
    tipo_baja?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    donacion_destinatario?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    fecha_baja?: Prisma.DateTimeNullableFilter<"baja_equipo"> | Date | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_baja">;
export type baja_equipoOrderByWithAggregationInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo_baja?: Prisma.SortOrder;
    tipo_baja?: Prisma.SortOrderInput | Prisma.SortOrder;
    donacion_destinatario?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_baja?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.baja_equipoCountOrderByAggregateInput;
    _avg?: Prisma.baja_equipoAvgOrderByAggregateInput;
    _max?: Prisma.baja_equipoMaxOrderByAggregateInput;
    _min?: Prisma.baja_equipoMinOrderByAggregateInput;
    _sum?: Prisma.baja_equipoSumOrderByAggregateInput;
};
export type baja_equipoScalarWhereWithAggregatesInput = {
    AND?: Prisma.baja_equipoScalarWhereWithAggregatesInput | Prisma.baja_equipoScalarWhereWithAggregatesInput[];
    OR?: Prisma.baja_equipoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.baja_equipoScalarWhereWithAggregatesInput | Prisma.baja_equipoScalarWhereWithAggregatesInput[];
    id_baja?: Prisma.IntWithAggregatesFilter<"baja_equipo"> | number;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"baja_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"baja_equipo"> | number | null;
    motivo_baja?: Prisma.StringWithAggregatesFilter<"baja_equipo"> | string;
    tipo_baja?: Prisma.StringNullableWithAggregatesFilter<"baja_equipo"> | string | null;
    donacion_destinatario?: Prisma.StringNullableWithAggregatesFilter<"baja_equipo"> | string | null;
    fecha_baja?: Prisma.DateTimeNullableWithAggregatesFilter<"baja_equipo"> | Date | string | null;
};
export type baja_equipoCreateInput = {
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutBajasInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutBajas_equipoInput;
};
export type baja_equipoUncheckedCreateInput = {
    id_baja?: number;
    id_unidad?: number | null;
    id_usuario?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoUpdateInput = {
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutBajasNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutBajas_equipoNestedInput;
};
export type baja_equipoUncheckedUpdateInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoCreateManyInput = {
    id_baja?: number;
    id_unidad?: number | null;
    id_usuario?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoUpdateManyMutationInput = {
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoUncheckedUpdateManyInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Baja_equipoListRelationFilter = {
    every?: Prisma.baja_equipoWhereInput;
    some?: Prisma.baja_equipoWhereInput;
    none?: Prisma.baja_equipoWhereInput;
};
export type baja_equipoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type baja_equipoCountOrderByAggregateInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    motivo_baja?: Prisma.SortOrder;
    tipo_baja?: Prisma.SortOrder;
    donacion_destinatario?: Prisma.SortOrder;
    fecha_baja?: Prisma.SortOrder;
};
export type baja_equipoAvgOrderByAggregateInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type baja_equipoMaxOrderByAggregateInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    motivo_baja?: Prisma.SortOrder;
    tipo_baja?: Prisma.SortOrder;
    donacion_destinatario?: Prisma.SortOrder;
    fecha_baja?: Prisma.SortOrder;
};
export type baja_equipoMinOrderByAggregateInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    motivo_baja?: Prisma.SortOrder;
    tipo_baja?: Prisma.SortOrder;
    donacion_destinatario?: Prisma.SortOrder;
    fecha_baja?: Prisma.SortOrder;
};
export type baja_equipoSumOrderByAggregateInput = {
    id_baja?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
};
export type baja_equipoCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.baja_equipoCreateWithoutUsuarioInput[] | Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput | Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.baja_equipoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
};
export type baja_equipoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.baja_equipoCreateWithoutUsuarioInput[] | Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput | Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.baja_equipoCreateManyUsuarioInputEnvelope;
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
};
export type baja_equipoUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.baja_equipoCreateWithoutUsuarioInput[] | Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput | Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.baja_equipoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.baja_equipoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.baja_equipoCreateManyUsuarioInputEnvelope;
    set?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    disconnect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    delete?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    update?: Prisma.baja_equipoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.baja_equipoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.baja_equipoUpdateManyWithWhereWithoutUsuarioInput | Prisma.baja_equipoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
};
export type baja_equipoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput> | Prisma.baja_equipoCreateWithoutUsuarioInput[] | Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput | Prisma.baja_equipoCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.baja_equipoUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.baja_equipoUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.baja_equipoCreateManyUsuarioInputEnvelope;
    set?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    disconnect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    delete?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    update?: Prisma.baja_equipoUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.baja_equipoUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.baja_equipoUpdateManyWithWhereWithoutUsuarioInput | Prisma.baja_equipoUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
};
export type baja_equipoCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput> | Prisma.baja_equipoCreateWithoutUnidadInput[] | Prisma.baja_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUnidadInput | Prisma.baja_equipoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.baja_equipoCreateManyUnidadInputEnvelope;
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
};
export type baja_equipoUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput> | Prisma.baja_equipoCreateWithoutUnidadInput[] | Prisma.baja_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUnidadInput | Prisma.baja_equipoCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.baja_equipoCreateManyUnidadInputEnvelope;
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
};
export type baja_equipoUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput> | Prisma.baja_equipoCreateWithoutUnidadInput[] | Prisma.baja_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUnidadInput | Prisma.baja_equipoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.baja_equipoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.baja_equipoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.baja_equipoCreateManyUnidadInputEnvelope;
    set?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    disconnect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    delete?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    update?: Prisma.baja_equipoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.baja_equipoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.baja_equipoUpdateManyWithWhereWithoutUnidadInput | Prisma.baja_equipoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
};
export type baja_equipoUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput> | Prisma.baja_equipoCreateWithoutUnidadInput[] | Prisma.baja_equipoUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.baja_equipoCreateOrConnectWithoutUnidadInput | Prisma.baja_equipoCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.baja_equipoUpsertWithWhereUniqueWithoutUnidadInput | Prisma.baja_equipoUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.baja_equipoCreateManyUnidadInputEnvelope;
    set?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    disconnect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    delete?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    connect?: Prisma.baja_equipoWhereUniqueInput | Prisma.baja_equipoWhereUniqueInput[];
    update?: Prisma.baja_equipoUpdateWithWhereUniqueWithoutUnidadInput | Prisma.baja_equipoUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.baja_equipoUpdateManyWithWhereWithoutUnidadInput | Prisma.baja_equipoUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
};
export type baja_equipoCreateWithoutUsuarioInput = {
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutBajasInput;
};
export type baja_equipoUncheckedCreateWithoutUsuarioInput = {
    id_baja?: number;
    id_unidad?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput>;
};
export type baja_equipoCreateManyUsuarioInputEnvelope = {
    data: Prisma.baja_equipoCreateManyUsuarioInput | Prisma.baja_equipoCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type baja_equipoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.baja_equipoUpdateWithoutUsuarioInput, Prisma.baja_equipoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.baja_equipoCreateWithoutUsuarioInput, Prisma.baja_equipoUncheckedCreateWithoutUsuarioInput>;
};
export type baja_equipoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.baja_equipoUpdateWithoutUsuarioInput, Prisma.baja_equipoUncheckedUpdateWithoutUsuarioInput>;
};
export type baja_equipoUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.baja_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.baja_equipoUpdateManyMutationInput, Prisma.baja_equipoUncheckedUpdateManyWithoutUsuarioInput>;
};
export type baja_equipoScalarWhereInput = {
    AND?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
    OR?: Prisma.baja_equipoScalarWhereInput[];
    NOT?: Prisma.baja_equipoScalarWhereInput | Prisma.baja_equipoScalarWhereInput[];
    id_baja?: Prisma.IntFilter<"baja_equipo"> | number;
    id_unidad?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    id_usuario?: Prisma.IntNullableFilter<"baja_equipo"> | number | null;
    motivo_baja?: Prisma.StringFilter<"baja_equipo"> | string;
    tipo_baja?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    donacion_destinatario?: Prisma.StringNullableFilter<"baja_equipo"> | string | null;
    fecha_baja?: Prisma.DateTimeNullableFilter<"baja_equipo"> | Date | string | null;
};
export type baja_equipoCreateWithoutUnidadInput = {
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
    usuario?: Prisma.usuarioCreateNestedOneWithoutBajas_equipoInput;
};
export type baja_equipoUncheckedCreateWithoutUnidadInput = {
    id_baja?: number;
    id_usuario?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoCreateOrConnectWithoutUnidadInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput>;
};
export type baja_equipoCreateManyUnidadInputEnvelope = {
    data: Prisma.baja_equipoCreateManyUnidadInput | Prisma.baja_equipoCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type baja_equipoUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    update: Prisma.XOR<Prisma.baja_equipoUpdateWithoutUnidadInput, Prisma.baja_equipoUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.baja_equipoCreateWithoutUnidadInput, Prisma.baja_equipoUncheckedCreateWithoutUnidadInput>;
};
export type baja_equipoUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.baja_equipoWhereUniqueInput;
    data: Prisma.XOR<Prisma.baja_equipoUpdateWithoutUnidadInput, Prisma.baja_equipoUncheckedUpdateWithoutUnidadInput>;
};
export type baja_equipoUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.baja_equipoScalarWhereInput;
    data: Prisma.XOR<Prisma.baja_equipoUpdateManyMutationInput, Prisma.baja_equipoUncheckedUpdateManyWithoutUnidadInput>;
};
export type baja_equipoCreateManyUsuarioInput = {
    id_baja?: number;
    id_unidad?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoUpdateWithoutUsuarioInput = {
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutBajasNestedInput;
};
export type baja_equipoUncheckedUpdateWithoutUsuarioInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoUncheckedUpdateManyWithoutUsuarioInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoCreateManyUnidadInput = {
    id_baja?: number;
    id_usuario?: number | null;
    motivo_baja: string;
    tipo_baja?: string | null;
    donacion_destinatario?: string | null;
    fecha_baja?: Date | string | null;
};
export type baja_equipoUpdateWithoutUnidadInput = {
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario?: Prisma.usuarioUpdateOneWithoutBajas_equipoNestedInput;
};
export type baja_equipoUncheckedUpdateWithoutUnidadInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoUncheckedUpdateManyWithoutUnidadInput = {
    id_baja?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    motivo_baja?: Prisma.StringFieldUpdateOperationsInput | string;
    tipo_baja?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    donacion_destinatario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_baja?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type baja_equipoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_baja?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    motivo_baja?: boolean;
    tipo_baja?: boolean;
    donacion_destinatario?: boolean;
    fecha_baja?: boolean;
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["baja_equipo"]>;
export type baja_equipoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_baja?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    motivo_baja?: boolean;
    tipo_baja?: boolean;
    donacion_destinatario?: boolean;
    fecha_baja?: boolean;
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["baja_equipo"]>;
export type baja_equipoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_baja?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    motivo_baja?: boolean;
    tipo_baja?: boolean;
    donacion_destinatario?: boolean;
    fecha_baja?: boolean;
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["baja_equipo"]>;
export type baja_equipoSelectScalar = {
    id_baja?: boolean;
    id_unidad?: boolean;
    id_usuario?: boolean;
    motivo_baja?: boolean;
    tipo_baja?: boolean;
    donacion_destinatario?: boolean;
    fecha_baja?: boolean;
};
export type baja_equipoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_baja" | "id_unidad" | "id_usuario" | "motivo_baja" | "tipo_baja" | "donacion_destinatario" | "fecha_baja", ExtArgs["result"]["baja_equipo"]>;
export type baja_equipoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
};
export type baja_equipoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
};
export type baja_equipoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.baja_equipo$unidadArgs<ExtArgs>;
    usuario?: boolean | Prisma.baja_equipo$usuarioArgs<ExtArgs>;
};
export type $baja_equipoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "baja_equipo";
    objects: {
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_baja: number;
        id_unidad: number | null;
        id_usuario: number | null;
        motivo_baja: string;
        tipo_baja: string | null;
        donacion_destinatario: string | null;
        fecha_baja: Date | null;
    }, ExtArgs["result"]["baja_equipo"]>;
    composites: {};
};
export type baja_equipoGetPayload<S extends boolean | null | undefined | baja_equipoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload, S>;
export type baja_equipoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<baja_equipoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Baja_equipoCountAggregateInputType | true;
};
export interface baja_equipoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['baja_equipo'];
        meta: {
            name: 'baja_equipo';
        };
    };
    findUnique<T extends baja_equipoFindUniqueArgs>(args: Prisma.SelectSubset<T, baja_equipoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends baja_equipoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, baja_equipoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends baja_equipoFindFirstArgs>(args?: Prisma.SelectSubset<T, baja_equipoFindFirstArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends baja_equipoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, baja_equipoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends baja_equipoFindManyArgs>(args?: Prisma.SelectSubset<T, baja_equipoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends baja_equipoCreateArgs>(args: Prisma.SelectSubset<T, baja_equipoCreateArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends baja_equipoCreateManyArgs>(args?: Prisma.SelectSubset<T, baja_equipoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends baja_equipoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, baja_equipoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends baja_equipoDeleteArgs>(args: Prisma.SelectSubset<T, baja_equipoDeleteArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends baja_equipoUpdateArgs>(args: Prisma.SelectSubset<T, baja_equipoUpdateArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends baja_equipoDeleteManyArgs>(args?: Prisma.SelectSubset<T, baja_equipoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends baja_equipoUpdateManyArgs>(args: Prisma.SelectSubset<T, baja_equipoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends baja_equipoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, baja_equipoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends baja_equipoUpsertArgs>(args: Prisma.SelectSubset<T, baja_equipoUpsertArgs<ExtArgs>>): Prisma.Prisma__baja_equipoClient<runtime.Types.Result.GetResult<Prisma.$baja_equipoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends baja_equipoCountArgs>(args?: Prisma.Subset<T, baja_equipoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Baja_equipoCountAggregateOutputType> : number>;
    aggregate<T extends Baja_equipoAggregateArgs>(args: Prisma.Subset<T, Baja_equipoAggregateArgs>): Prisma.PrismaPromise<GetBaja_equipoAggregateType<T>>;
    groupBy<T extends baja_equipoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: baja_equipoGroupByArgs['orderBy'];
    } : {
        orderBy?: baja_equipoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, baja_equipoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaja_equipoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: baja_equipoFieldRefs;
}
export interface Prisma__baja_equipoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unidad<T extends Prisma.baja_equipo$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.baja_equipo$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario<T extends Prisma.baja_equipo$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.baja_equipo$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface baja_equipoFieldRefs {
    readonly id_baja: Prisma.FieldRef<"baja_equipo", 'Int'>;
    readonly id_unidad: Prisma.FieldRef<"baja_equipo", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"baja_equipo", 'Int'>;
    readonly motivo_baja: Prisma.FieldRef<"baja_equipo", 'String'>;
    readonly tipo_baja: Prisma.FieldRef<"baja_equipo", 'String'>;
    readonly donacion_destinatario: Prisma.FieldRef<"baja_equipo", 'String'>;
    readonly fecha_baja: Prisma.FieldRef<"baja_equipo", 'DateTime'>;
}
export type baja_equipoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where: Prisma.baja_equipoWhereUniqueInput;
};
export type baja_equipoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where: Prisma.baja_equipoWhereUniqueInput;
};
export type baja_equipoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where?: Prisma.baja_equipoWhereInput;
    orderBy?: Prisma.baja_equipoOrderByWithRelationInput | Prisma.baja_equipoOrderByWithRelationInput[];
    cursor?: Prisma.baja_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Baja_equipoScalarFieldEnum | Prisma.Baja_equipoScalarFieldEnum[];
};
export type baja_equipoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where?: Prisma.baja_equipoWhereInput;
    orderBy?: Prisma.baja_equipoOrderByWithRelationInput | Prisma.baja_equipoOrderByWithRelationInput[];
    cursor?: Prisma.baja_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Baja_equipoScalarFieldEnum | Prisma.Baja_equipoScalarFieldEnum[];
};
export type baja_equipoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where?: Prisma.baja_equipoWhereInput;
    orderBy?: Prisma.baja_equipoOrderByWithRelationInput | Prisma.baja_equipoOrderByWithRelationInput[];
    cursor?: Prisma.baja_equipoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Baja_equipoScalarFieldEnum | Prisma.Baja_equipoScalarFieldEnum[];
};
export type baja_equipoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.baja_equipoCreateInput, Prisma.baja_equipoUncheckedCreateInput>;
};
export type baja_equipoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.baja_equipoCreateManyInput | Prisma.baja_equipoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type baja_equipoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    data: Prisma.baja_equipoCreateManyInput | Prisma.baja_equipoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.baja_equipoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type baja_equipoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.baja_equipoUpdateInput, Prisma.baja_equipoUncheckedUpdateInput>;
    where: Prisma.baja_equipoWhereUniqueInput;
};
export type baja_equipoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.baja_equipoUpdateManyMutationInput, Prisma.baja_equipoUncheckedUpdateManyInput>;
    where?: Prisma.baja_equipoWhereInput;
    limit?: number;
};
export type baja_equipoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.baja_equipoUpdateManyMutationInput, Prisma.baja_equipoUncheckedUpdateManyInput>;
    where?: Prisma.baja_equipoWhereInput;
    limit?: number;
    include?: Prisma.baja_equipoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type baja_equipoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where: Prisma.baja_equipoWhereUniqueInput;
    create: Prisma.XOR<Prisma.baja_equipoCreateInput, Prisma.baja_equipoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.baja_equipoUpdateInput, Prisma.baja_equipoUncheckedUpdateInput>;
};
export type baja_equipoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
    where: Prisma.baja_equipoWhereUniqueInput;
};
export type baja_equipoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.baja_equipoWhereInput;
    limit?: number;
};
export type baja_equipo$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type baja_equipo$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type baja_equipoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.baja_equipoSelect<ExtArgs> | null;
    omit?: Prisma.baja_equipoOmit<ExtArgs> | null;
    include?: Prisma.baja_equipoInclude<ExtArgs> | null;
};
