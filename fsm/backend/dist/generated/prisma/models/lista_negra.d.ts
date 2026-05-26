import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type lista_negraModel = runtime.Types.Result.DefaultSelection<Prisma.$lista_negraPayload>;
export type AggregateLista_negra = {
    _count: Lista_negraCountAggregateOutputType | null;
    _avg: Lista_negraAvgAggregateOutputType | null;
    _sum: Lista_negraSumAggregateOutputType | null;
    _min: Lista_negraMinAggregateOutputType | null;
    _max: Lista_negraMaxAggregateOutputType | null;
};
export type Lista_negraAvgAggregateOutputType = {
    id_vetado: number | null;
    id_cliente: number | null;
    id_usuario_registro: number | null;
};
export type Lista_negraSumAggregateOutputType = {
    id_vetado: number | null;
    id_cliente: number | null;
    id_usuario_registro: number | null;
};
export type Lista_negraMinAggregateOutputType = {
    id_vetado: number | null;
    id_cliente: number | null;
    rut_vetado: string | null;
    direccion_vetada: string | null;
    motivo: string | null;
    fecha_registro: Date | null;
    id_usuario_registro: number | null;
};
export type Lista_negraMaxAggregateOutputType = {
    id_vetado: number | null;
    id_cliente: number | null;
    rut_vetado: string | null;
    direccion_vetada: string | null;
    motivo: string | null;
    fecha_registro: Date | null;
    id_usuario_registro: number | null;
};
export type Lista_negraCountAggregateOutputType = {
    id_vetado: number;
    id_cliente: number;
    rut_vetado: number;
    direccion_vetada: number;
    motivo: number;
    fecha_registro: number;
    id_usuario_registro: number;
    _all: number;
};
export type Lista_negraAvgAggregateInputType = {
    id_vetado?: true;
    id_cliente?: true;
    id_usuario_registro?: true;
};
export type Lista_negraSumAggregateInputType = {
    id_vetado?: true;
    id_cliente?: true;
    id_usuario_registro?: true;
};
export type Lista_negraMinAggregateInputType = {
    id_vetado?: true;
    id_cliente?: true;
    rut_vetado?: true;
    direccion_vetada?: true;
    motivo?: true;
    fecha_registro?: true;
    id_usuario_registro?: true;
};
export type Lista_negraMaxAggregateInputType = {
    id_vetado?: true;
    id_cliente?: true;
    rut_vetado?: true;
    direccion_vetada?: true;
    motivo?: true;
    fecha_registro?: true;
    id_usuario_registro?: true;
};
export type Lista_negraCountAggregateInputType = {
    id_vetado?: true;
    id_cliente?: true;
    rut_vetado?: true;
    direccion_vetada?: true;
    motivo?: true;
    fecha_registro?: true;
    id_usuario_registro?: true;
    _all?: true;
};
export type Lista_negraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lista_negraWhereInput;
    orderBy?: Prisma.lista_negraOrderByWithRelationInput | Prisma.lista_negraOrderByWithRelationInput[];
    cursor?: Prisma.lista_negraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Lista_negraCountAggregateInputType;
    _avg?: Lista_negraAvgAggregateInputType;
    _sum?: Lista_negraSumAggregateInputType;
    _min?: Lista_negraMinAggregateInputType;
    _max?: Lista_negraMaxAggregateInputType;
};
export type GetLista_negraAggregateType<T extends Lista_negraAggregateArgs> = {
    [P in keyof T & keyof AggregateLista_negra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLista_negra[P]> : Prisma.GetScalarType<T[P], AggregateLista_negra[P]>;
};
export type lista_negraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lista_negraWhereInput;
    orderBy?: Prisma.lista_negraOrderByWithAggregationInput | Prisma.lista_negraOrderByWithAggregationInput[];
    by: Prisma.Lista_negraScalarFieldEnum[] | Prisma.Lista_negraScalarFieldEnum;
    having?: Prisma.lista_negraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Lista_negraCountAggregateInputType | true;
    _avg?: Lista_negraAvgAggregateInputType;
    _sum?: Lista_negraSumAggregateInputType;
    _min?: Lista_negraMinAggregateInputType;
    _max?: Lista_negraMaxAggregateInputType;
};
export type Lista_negraGroupByOutputType = {
    id_vetado: number;
    id_cliente: number | null;
    rut_vetado: string;
    direccion_vetada: string | null;
    motivo: string;
    fecha_registro: Date;
    id_usuario_registro: number | null;
    _count: Lista_negraCountAggregateOutputType | null;
    _avg: Lista_negraAvgAggregateOutputType | null;
    _sum: Lista_negraSumAggregateOutputType | null;
    _min: Lista_negraMinAggregateOutputType | null;
    _max: Lista_negraMaxAggregateOutputType | null;
};
export type GetLista_negraGroupByPayload<T extends lista_negraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Lista_negraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Lista_negraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Lista_negraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Lista_negraGroupByOutputType[P]>;
}>>;
export type lista_negraWhereInput = {
    AND?: Prisma.lista_negraWhereInput | Prisma.lista_negraWhereInput[];
    OR?: Prisma.lista_negraWhereInput[];
    NOT?: Prisma.lista_negraWhereInput | Prisma.lista_negraWhereInput[];
    id_vetado?: Prisma.IntFilter<"lista_negra"> | number;
    id_cliente?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
    rut_vetado?: Prisma.StringFilter<"lista_negra"> | string;
    direccion_vetada?: Prisma.StringNullableFilter<"lista_negra"> | string | null;
    motivo?: Prisma.StringFilter<"lista_negra"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"lista_negra"> | Date | string;
    id_usuario_registro?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type lista_negraOrderByWithRelationInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    rut_vetado?: Prisma.SortOrder;
    direccion_vetada?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    usuario_registro?: Prisma.usuarioOrderByWithRelationInput;
};
export type lista_negraWhereUniqueInput = Prisma.AtLeast<{
    id_vetado?: number;
    AND?: Prisma.lista_negraWhereInput | Prisma.lista_negraWhereInput[];
    OR?: Prisma.lista_negraWhereInput[];
    NOT?: Prisma.lista_negraWhereInput | Prisma.lista_negraWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
    rut_vetado?: Prisma.StringFilter<"lista_negra"> | string;
    direccion_vetada?: Prisma.StringNullableFilter<"lista_negra"> | string | null;
    motivo?: Prisma.StringFilter<"lista_negra"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"lista_negra"> | Date | string;
    id_usuario_registro?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    usuario_registro?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id_vetado">;
export type lista_negraOrderByWithAggregationInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    rut_vetado?: Prisma.SortOrder;
    direccion_vetada?: Prisma.SortOrderInput | Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.lista_negraCountOrderByAggregateInput;
    _avg?: Prisma.lista_negraAvgOrderByAggregateInput;
    _max?: Prisma.lista_negraMaxOrderByAggregateInput;
    _min?: Prisma.lista_negraMinOrderByAggregateInput;
    _sum?: Prisma.lista_negraSumOrderByAggregateInput;
};
export type lista_negraScalarWhereWithAggregatesInput = {
    AND?: Prisma.lista_negraScalarWhereWithAggregatesInput | Prisma.lista_negraScalarWhereWithAggregatesInput[];
    OR?: Prisma.lista_negraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.lista_negraScalarWhereWithAggregatesInput | Prisma.lista_negraScalarWhereWithAggregatesInput[];
    id_vetado?: Prisma.IntWithAggregatesFilter<"lista_negra"> | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"lista_negra"> | number | null;
    rut_vetado?: Prisma.StringWithAggregatesFilter<"lista_negra"> | string;
    direccion_vetada?: Prisma.StringNullableWithAggregatesFilter<"lista_negra"> | string | null;
    motivo?: Prisma.StringWithAggregatesFilter<"lista_negra"> | string;
    fecha_registro?: Prisma.DateTimeWithAggregatesFilter<"lista_negra"> | Date | string;
    id_usuario_registro?: Prisma.IntNullableWithAggregatesFilter<"lista_negra"> | number | null;
};
export type lista_negraCreateInput = {
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    cliente?: Prisma.clienteCreateNestedOneWithoutLista_negraInput;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutLista_negra_registroInput;
};
export type lista_negraUncheckedCreateInput = {
    id_vetado?: number;
    id_cliente?: number | null;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    id_usuario_registro?: number | null;
};
export type lista_negraUpdateInput = {
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneWithoutLista_negraNestedInput;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutLista_negra_registroNestedInput;
};
export type lista_negraUncheckedUpdateInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type lista_negraCreateManyInput = {
    id_vetado?: number;
    id_cliente?: number | null;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    id_usuario_registro?: number | null;
};
export type lista_negraUpdateManyMutationInput = {
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lista_negraUncheckedUpdateManyInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Lista_negraListRelationFilter = {
    every?: Prisma.lista_negraWhereInput;
    some?: Prisma.lista_negraWhereInput;
    none?: Prisma.lista_negraWhereInput;
};
export type lista_negraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type lista_negraCountOrderByAggregateInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut_vetado?: Prisma.SortOrder;
    direccion_vetada?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type lista_negraAvgOrderByAggregateInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type lista_negraMaxOrderByAggregateInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut_vetado?: Prisma.SortOrder;
    direccion_vetada?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type lista_negraMinOrderByAggregateInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    rut_vetado?: Prisma.SortOrder;
    direccion_vetada?: Prisma.SortOrder;
    motivo?: Prisma.SortOrder;
    fecha_registro?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type lista_negraSumOrderByAggregateInput = {
    id_vetado?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_usuario_registro?: Prisma.SortOrder;
};
export type lista_negraCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput> | Prisma.lista_negraCreateWithoutUsuario_registroInput[] | Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput | Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.lista_negraCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
};
export type lista_negraUncheckedCreateNestedManyWithoutUsuario_registroInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput> | Prisma.lista_negraCreateWithoutUsuario_registroInput[] | Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput | Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput[];
    createMany?: Prisma.lista_negraCreateManyUsuario_registroInputEnvelope;
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
};
export type lista_negraUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput> | Prisma.lista_negraCreateWithoutUsuario_registroInput[] | Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput | Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.lista_negraUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.lista_negraUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.lista_negraCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    disconnect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    delete?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    update?: Prisma.lista_negraUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.lista_negraUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.lista_negraUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.lista_negraUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
};
export type lista_negraUncheckedUpdateManyWithoutUsuario_registroNestedInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput> | Prisma.lista_negraCreateWithoutUsuario_registroInput[] | Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput | Prisma.lista_negraCreateOrConnectWithoutUsuario_registroInput[];
    upsert?: Prisma.lista_negraUpsertWithWhereUniqueWithoutUsuario_registroInput | Prisma.lista_negraUpsertWithWhereUniqueWithoutUsuario_registroInput[];
    createMany?: Prisma.lista_negraCreateManyUsuario_registroInputEnvelope;
    set?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    disconnect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    delete?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    update?: Prisma.lista_negraUpdateWithWhereUniqueWithoutUsuario_registroInput | Prisma.lista_negraUpdateWithWhereUniqueWithoutUsuario_registroInput[];
    updateMany?: Prisma.lista_negraUpdateManyWithWhereWithoutUsuario_registroInput | Prisma.lista_negraUpdateManyWithWhereWithoutUsuario_registroInput[];
    deleteMany?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
};
export type lista_negraCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput> | Prisma.lista_negraCreateWithoutClienteInput[] | Prisma.lista_negraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutClienteInput | Prisma.lista_negraCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.lista_negraCreateManyClienteInputEnvelope;
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
};
export type lista_negraUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput> | Prisma.lista_negraCreateWithoutClienteInput[] | Prisma.lista_negraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutClienteInput | Prisma.lista_negraCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.lista_negraCreateManyClienteInputEnvelope;
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
};
export type lista_negraUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput> | Prisma.lista_negraCreateWithoutClienteInput[] | Prisma.lista_negraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutClienteInput | Prisma.lista_negraCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.lista_negraUpsertWithWhereUniqueWithoutClienteInput | Prisma.lista_negraUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.lista_negraCreateManyClienteInputEnvelope;
    set?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    disconnect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    delete?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    update?: Prisma.lista_negraUpdateWithWhereUniqueWithoutClienteInput | Prisma.lista_negraUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.lista_negraUpdateManyWithWhereWithoutClienteInput | Prisma.lista_negraUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
};
export type lista_negraUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput> | Prisma.lista_negraCreateWithoutClienteInput[] | Prisma.lista_negraUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.lista_negraCreateOrConnectWithoutClienteInput | Prisma.lista_negraCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.lista_negraUpsertWithWhereUniqueWithoutClienteInput | Prisma.lista_negraUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.lista_negraCreateManyClienteInputEnvelope;
    set?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    disconnect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    delete?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    connect?: Prisma.lista_negraWhereUniqueInput | Prisma.lista_negraWhereUniqueInput[];
    update?: Prisma.lista_negraUpdateWithWhereUniqueWithoutClienteInput | Prisma.lista_negraUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.lista_negraUpdateManyWithWhereWithoutClienteInput | Prisma.lista_negraUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
};
export type lista_negraCreateWithoutUsuario_registroInput = {
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    cliente?: Prisma.clienteCreateNestedOneWithoutLista_negraInput;
};
export type lista_negraUncheckedCreateWithoutUsuario_registroInput = {
    id_vetado?: number;
    id_cliente?: number | null;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
};
export type lista_negraCreateOrConnectWithoutUsuario_registroInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    create: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput>;
};
export type lista_negraCreateManyUsuario_registroInputEnvelope = {
    data: Prisma.lista_negraCreateManyUsuario_registroInput | Prisma.lista_negraCreateManyUsuario_registroInput[];
    skipDuplicates?: boolean;
};
export type lista_negraUpsertWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    update: Prisma.XOR<Prisma.lista_negraUpdateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedUpdateWithoutUsuario_registroInput>;
    create: Prisma.XOR<Prisma.lista_negraCreateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedCreateWithoutUsuario_registroInput>;
};
export type lista_negraUpdateWithWhereUniqueWithoutUsuario_registroInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    data: Prisma.XOR<Prisma.lista_negraUpdateWithoutUsuario_registroInput, Prisma.lista_negraUncheckedUpdateWithoutUsuario_registroInput>;
};
export type lista_negraUpdateManyWithWhereWithoutUsuario_registroInput = {
    where: Prisma.lista_negraScalarWhereInput;
    data: Prisma.XOR<Prisma.lista_negraUpdateManyMutationInput, Prisma.lista_negraUncheckedUpdateManyWithoutUsuario_registroInput>;
};
export type lista_negraScalarWhereInput = {
    AND?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
    OR?: Prisma.lista_negraScalarWhereInput[];
    NOT?: Prisma.lista_negraScalarWhereInput | Prisma.lista_negraScalarWhereInput[];
    id_vetado?: Prisma.IntFilter<"lista_negra"> | number;
    id_cliente?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
    rut_vetado?: Prisma.StringFilter<"lista_negra"> | string;
    direccion_vetada?: Prisma.StringNullableFilter<"lista_negra"> | string | null;
    motivo?: Prisma.StringFilter<"lista_negra"> | string;
    fecha_registro?: Prisma.DateTimeFilter<"lista_negra"> | Date | string;
    id_usuario_registro?: Prisma.IntNullableFilter<"lista_negra"> | number | null;
};
export type lista_negraCreateWithoutClienteInput = {
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    usuario_registro?: Prisma.usuarioCreateNestedOneWithoutLista_negra_registroInput;
};
export type lista_negraUncheckedCreateWithoutClienteInput = {
    id_vetado?: number;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    id_usuario_registro?: number | null;
};
export type lista_negraCreateOrConnectWithoutClienteInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    create: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput>;
};
export type lista_negraCreateManyClienteInputEnvelope = {
    data: Prisma.lista_negraCreateManyClienteInput | Prisma.lista_negraCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type lista_negraUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    update: Prisma.XOR<Prisma.lista_negraUpdateWithoutClienteInput, Prisma.lista_negraUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.lista_negraCreateWithoutClienteInput, Prisma.lista_negraUncheckedCreateWithoutClienteInput>;
};
export type lista_negraUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.lista_negraWhereUniqueInput;
    data: Prisma.XOR<Prisma.lista_negraUpdateWithoutClienteInput, Prisma.lista_negraUncheckedUpdateWithoutClienteInput>;
};
export type lista_negraUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.lista_negraScalarWhereInput;
    data: Prisma.XOR<Prisma.lista_negraUpdateManyMutationInput, Prisma.lista_negraUncheckedUpdateManyWithoutClienteInput>;
};
export type lista_negraCreateManyUsuario_registroInput = {
    id_vetado?: number;
    id_cliente?: number | null;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
};
export type lista_negraUpdateWithoutUsuario_registroInput = {
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cliente?: Prisma.clienteUpdateOneWithoutLista_negraNestedInput;
};
export type lista_negraUncheckedUpdateWithoutUsuario_registroInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lista_negraUncheckedUpdateManyWithoutUsuario_registroInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type lista_negraCreateManyClienteInput = {
    id_vetado?: number;
    rut_vetado: string;
    direccion_vetada?: string | null;
    motivo: string;
    fecha_registro?: Date | string;
    id_usuario_registro?: number | null;
};
export type lista_negraUpdateWithoutClienteInput = {
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario_registro?: Prisma.usuarioUpdateOneWithoutLista_negra_registroNestedInput;
};
export type lista_negraUncheckedUpdateWithoutClienteInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type lista_negraUncheckedUpdateManyWithoutClienteInput = {
    id_vetado?: Prisma.IntFieldUpdateOperationsInput | number;
    rut_vetado?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion_vetada?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    motivo?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_registro?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    id_usuario_registro?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type lista_negraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_vetado?: boolean;
    id_cliente?: boolean;
    rut_vetado?: boolean;
    direccion_vetada?: boolean;
    motivo?: boolean;
    fecha_registro?: boolean;
    id_usuario_registro?: boolean;
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["lista_negra"]>;
export type lista_negraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_vetado?: boolean;
    id_cliente?: boolean;
    rut_vetado?: boolean;
    direccion_vetada?: boolean;
    motivo?: boolean;
    fecha_registro?: boolean;
    id_usuario_registro?: boolean;
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["lista_negra"]>;
export type lista_negraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_vetado?: boolean;
    id_cliente?: boolean;
    rut_vetado?: boolean;
    direccion_vetada?: boolean;
    motivo?: boolean;
    fecha_registro?: boolean;
    id_usuario_registro?: boolean;
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
}, ExtArgs["result"]["lista_negra"]>;
export type lista_negraSelectScalar = {
    id_vetado?: boolean;
    id_cliente?: boolean;
    rut_vetado?: boolean;
    direccion_vetada?: boolean;
    motivo?: boolean;
    fecha_registro?: boolean;
    id_usuario_registro?: boolean;
};
export type lista_negraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_vetado" | "id_cliente" | "rut_vetado" | "direccion_vetada" | "motivo" | "fecha_registro" | "id_usuario_registro", ExtArgs["result"]["lista_negra"]>;
export type lista_negraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
};
export type lista_negraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
};
export type lista_negraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.lista_negra$clienteArgs<ExtArgs>;
    usuario_registro?: boolean | Prisma.lista_negra$usuario_registroArgs<ExtArgs>;
};
export type $lista_negraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "lista_negra";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        usuario_registro: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_vetado: number;
        id_cliente: number | null;
        rut_vetado: string;
        direccion_vetada: string | null;
        motivo: string;
        fecha_registro: Date;
        id_usuario_registro: number | null;
    }, ExtArgs["result"]["lista_negra"]>;
    composites: {};
};
export type lista_negraGetPayload<S extends boolean | null | undefined | lista_negraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$lista_negraPayload, S>;
export type lista_negraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<lista_negraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Lista_negraCountAggregateInputType | true;
};
export interface lista_negraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['lista_negra'];
        meta: {
            name: 'lista_negra';
        };
    };
    findUnique<T extends lista_negraFindUniqueArgs>(args: Prisma.SelectSubset<T, lista_negraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends lista_negraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, lista_negraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends lista_negraFindFirstArgs>(args?: Prisma.SelectSubset<T, lista_negraFindFirstArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends lista_negraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, lista_negraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends lista_negraFindManyArgs>(args?: Prisma.SelectSubset<T, lista_negraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends lista_negraCreateArgs>(args: Prisma.SelectSubset<T, lista_negraCreateArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends lista_negraCreateManyArgs>(args?: Prisma.SelectSubset<T, lista_negraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends lista_negraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, lista_negraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends lista_negraDeleteArgs>(args: Prisma.SelectSubset<T, lista_negraDeleteArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends lista_negraUpdateArgs>(args: Prisma.SelectSubset<T, lista_negraUpdateArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends lista_negraDeleteManyArgs>(args?: Prisma.SelectSubset<T, lista_negraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends lista_negraUpdateManyArgs>(args: Prisma.SelectSubset<T, lista_negraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends lista_negraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, lista_negraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends lista_negraUpsertArgs>(args: Prisma.SelectSubset<T, lista_negraUpsertArgs<ExtArgs>>): Prisma.Prisma__lista_negraClient<runtime.Types.Result.GetResult<Prisma.$lista_negraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends lista_negraCountArgs>(args?: Prisma.Subset<T, lista_negraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Lista_negraCountAggregateOutputType> : number>;
    aggregate<T extends Lista_negraAggregateArgs>(args: Prisma.Subset<T, Lista_negraAggregateArgs>): Prisma.PrismaPromise<GetLista_negraAggregateType<T>>;
    groupBy<T extends lista_negraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: lista_negraGroupByArgs['orderBy'];
    } : {
        orderBy?: lista_negraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, lista_negraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLista_negraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: lista_negraFieldRefs;
}
export interface Prisma__lista_negraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.lista_negra$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lista_negra$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario_registro<T extends Prisma.lista_negra$usuario_registroArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.lista_negra$usuario_registroArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface lista_negraFieldRefs {
    readonly id_vetado: Prisma.FieldRef<"lista_negra", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"lista_negra", 'Int'>;
    readonly rut_vetado: Prisma.FieldRef<"lista_negra", 'String'>;
    readonly direccion_vetada: Prisma.FieldRef<"lista_negra", 'String'>;
    readonly motivo: Prisma.FieldRef<"lista_negra", 'String'>;
    readonly fecha_registro: Prisma.FieldRef<"lista_negra", 'DateTime'>;
    readonly id_usuario_registro: Prisma.FieldRef<"lista_negra", 'Int'>;
}
export type lista_negraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where: Prisma.lista_negraWhereUniqueInput;
};
export type lista_negraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where: Prisma.lista_negraWhereUniqueInput;
};
export type lista_negraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where?: Prisma.lista_negraWhereInput;
    orderBy?: Prisma.lista_negraOrderByWithRelationInput | Prisma.lista_negraOrderByWithRelationInput[];
    cursor?: Prisma.lista_negraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lista_negraScalarFieldEnum | Prisma.Lista_negraScalarFieldEnum[];
};
export type lista_negraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where?: Prisma.lista_negraWhereInput;
    orderBy?: Prisma.lista_negraOrderByWithRelationInput | Prisma.lista_negraOrderByWithRelationInput[];
    cursor?: Prisma.lista_negraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lista_negraScalarFieldEnum | Prisma.Lista_negraScalarFieldEnum[];
};
export type lista_negraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where?: Prisma.lista_negraWhereInput;
    orderBy?: Prisma.lista_negraOrderByWithRelationInput | Prisma.lista_negraOrderByWithRelationInput[];
    cursor?: Prisma.lista_negraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Lista_negraScalarFieldEnum | Prisma.Lista_negraScalarFieldEnum[];
};
export type lista_negraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lista_negraCreateInput, Prisma.lista_negraUncheckedCreateInput>;
};
export type lista_negraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.lista_negraCreateManyInput | Prisma.lista_negraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type lista_negraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    data: Prisma.lista_negraCreateManyInput | Prisma.lista_negraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.lista_negraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type lista_negraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lista_negraUpdateInput, Prisma.lista_negraUncheckedUpdateInput>;
    where: Prisma.lista_negraWhereUniqueInput;
};
export type lista_negraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.lista_negraUpdateManyMutationInput, Prisma.lista_negraUncheckedUpdateManyInput>;
    where?: Prisma.lista_negraWhereInput;
    limit?: number;
};
export type lista_negraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.lista_negraUpdateManyMutationInput, Prisma.lista_negraUncheckedUpdateManyInput>;
    where?: Prisma.lista_negraWhereInput;
    limit?: number;
    include?: Prisma.lista_negraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type lista_negraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where: Prisma.lista_negraWhereUniqueInput;
    create: Prisma.XOR<Prisma.lista_negraCreateInput, Prisma.lista_negraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.lista_negraUpdateInput, Prisma.lista_negraUncheckedUpdateInput>;
};
export type lista_negraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
    where: Prisma.lista_negraWhereUniqueInput;
};
export type lista_negraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.lista_negraWhereInput;
    limit?: number;
};
export type lista_negra$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type lista_negra$usuario_registroArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type lista_negraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.lista_negraSelect<ExtArgs> | null;
    omit?: Prisma.lista_negraOmit<ExtArgs> | null;
    include?: Prisma.lista_negraInclude<ExtArgs> | null;
};
