import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usuario_rolModel = runtime.Types.Result.DefaultSelection<Prisma.$usuario_rolPayload>;
export type AggregateUsuario_rol = {
    _count: Usuario_rolCountAggregateOutputType | null;
    _avg: Usuario_rolAvgAggregateOutputType | null;
    _sum: Usuario_rolSumAggregateOutputType | null;
    _min: Usuario_rolMinAggregateOutputType | null;
    _max: Usuario_rolMaxAggregateOutputType | null;
};
export type Usuario_rolAvgAggregateOutputType = {
    id_usuario_rol: number | null;
    id_usuario: number | null;
    id_rol: number | null;
};
export type Usuario_rolSumAggregateOutputType = {
    id_usuario_rol: number | null;
    id_usuario: number | null;
    id_rol: number | null;
};
export type Usuario_rolMinAggregateOutputType = {
    id_usuario_rol: number | null;
    id_usuario: number | null;
    id_rol: number | null;
    fecha_asignacion: Date | null;
};
export type Usuario_rolMaxAggregateOutputType = {
    id_usuario_rol: number | null;
    id_usuario: number | null;
    id_rol: number | null;
    fecha_asignacion: Date | null;
};
export type Usuario_rolCountAggregateOutputType = {
    id_usuario_rol: number;
    id_usuario: number;
    id_rol: number;
    fecha_asignacion: number;
    _all: number;
};
export type Usuario_rolAvgAggregateInputType = {
    id_usuario_rol?: true;
    id_usuario?: true;
    id_rol?: true;
};
export type Usuario_rolSumAggregateInputType = {
    id_usuario_rol?: true;
    id_usuario?: true;
    id_rol?: true;
};
export type Usuario_rolMinAggregateInputType = {
    id_usuario_rol?: true;
    id_usuario?: true;
    id_rol?: true;
    fecha_asignacion?: true;
};
export type Usuario_rolMaxAggregateInputType = {
    id_usuario_rol?: true;
    id_usuario?: true;
    id_rol?: true;
    fecha_asignacion?: true;
};
export type Usuario_rolCountAggregateInputType = {
    id_usuario_rol?: true;
    id_usuario?: true;
    id_rol?: true;
    fecha_asignacion?: true;
    _all?: true;
};
export type Usuario_rolAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithRelationInput | Prisma.usuario_rolOrderByWithRelationInput[];
    cursor?: Prisma.usuario_rolWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Usuario_rolCountAggregateInputType;
    _avg?: Usuario_rolAvgAggregateInputType;
    _sum?: Usuario_rolSumAggregateInputType;
    _min?: Usuario_rolMinAggregateInputType;
    _max?: Usuario_rolMaxAggregateInputType;
};
export type GetUsuario_rolAggregateType<T extends Usuario_rolAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario_rol]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario_rol[P]> : Prisma.GetScalarType<T[P], AggregateUsuario_rol[P]>;
};
export type usuario_rolGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithAggregationInput | Prisma.usuario_rolOrderByWithAggregationInput[];
    by: Prisma.Usuario_rolScalarFieldEnum[] | Prisma.Usuario_rolScalarFieldEnum;
    having?: Prisma.usuario_rolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Usuario_rolCountAggregateInputType | true;
    _avg?: Usuario_rolAvgAggregateInputType;
    _sum?: Usuario_rolSumAggregateInputType;
    _min?: Usuario_rolMinAggregateInputType;
    _max?: Usuario_rolMaxAggregateInputType;
};
export type Usuario_rolGroupByOutputType = {
    id_usuario_rol: number;
    id_usuario: number | null;
    id_rol: number;
    fecha_asignacion: Date;
    _count: Usuario_rolCountAggregateOutputType | null;
    _avg: Usuario_rolAvgAggregateOutputType | null;
    _sum: Usuario_rolSumAggregateOutputType | null;
    _min: Usuario_rolMinAggregateOutputType | null;
    _max: Usuario_rolMaxAggregateOutputType | null;
};
export type GetUsuario_rolGroupByPayload<T extends usuario_rolGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Usuario_rolGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Usuario_rolGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Usuario_rolGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Usuario_rolGroupByOutputType[P]>;
}>>;
export type usuario_rolWhereInput = {
    AND?: Prisma.usuario_rolWhereInput | Prisma.usuario_rolWhereInput[];
    OR?: Prisma.usuario_rolWhereInput[];
    NOT?: Prisma.usuario_rolWhereInput | Prisma.usuario_rolWhereInput[];
    id_usuario_rol?: Prisma.IntFilter<"usuario_rol"> | number;
    id_usuario?: Prisma.IntNullableFilter<"usuario_rol"> | number | null;
    id_rol?: Prisma.IntFilter<"usuario_rol"> | number;
    fecha_asignacion?: Prisma.DateTimeFilter<"usuario_rol"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    rol?: Prisma.XOR<Prisma.RolScalarRelationFilter, Prisma.rolWhereInput>;
};
export type usuario_rolOrderByWithRelationInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    fecha_asignacion?: Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    rol?: Prisma.rolOrderByWithRelationInput;
};
export type usuario_rolWhereUniqueInput = Prisma.AtLeast<{
    id_usuario_rol?: number;
    id_usuario_id_rol?: Prisma.usuario_rolId_usuarioId_rolCompoundUniqueInput;
    AND?: Prisma.usuario_rolWhereInput | Prisma.usuario_rolWhereInput[];
    OR?: Prisma.usuario_rolWhereInput[];
    NOT?: Prisma.usuario_rolWhereInput | Prisma.usuario_rolWhereInput[];
    id_usuario?: Prisma.IntNullableFilter<"usuario_rol"> | number | null;
    id_rol?: Prisma.IntFilter<"usuario_rol"> | number;
    fecha_asignacion?: Prisma.DateTimeFilter<"usuario_rol"> | Date | string;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    rol?: Prisma.XOR<Prisma.RolScalarRelationFilter, Prisma.rolWhereInput>;
}, "id_usuario_rol" | "id_usuario_id_rol">;
export type usuario_rolOrderByWithAggregationInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    fecha_asignacion?: Prisma.SortOrder;
    _count?: Prisma.usuario_rolCountOrderByAggregateInput;
    _avg?: Prisma.usuario_rolAvgOrderByAggregateInput;
    _max?: Prisma.usuario_rolMaxOrderByAggregateInput;
    _min?: Prisma.usuario_rolMinOrderByAggregateInput;
    _sum?: Prisma.usuario_rolSumOrderByAggregateInput;
};
export type usuario_rolScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuario_rolScalarWhereWithAggregatesInput | Prisma.usuario_rolScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuario_rolScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuario_rolScalarWhereWithAggregatesInput | Prisma.usuario_rolScalarWhereWithAggregatesInput[];
    id_usuario_rol?: Prisma.IntWithAggregatesFilter<"usuario_rol"> | number;
    id_usuario?: Prisma.IntNullableWithAggregatesFilter<"usuario_rol"> | number | null;
    id_rol?: Prisma.IntWithAggregatesFilter<"usuario_rol"> | number;
    fecha_asignacion?: Prisma.DateTimeWithAggregatesFilter<"usuario_rol"> | Date | string;
};
export type usuario_rolCreateInput = {
    fecha_asignacion?: Date | string;
    usuario?: Prisma.usuarioCreateNestedOneWithoutRolesInput;
    rol: Prisma.rolCreateNestedOneWithoutUsuariosInput;
};
export type usuario_rolUncheckedCreateInput = {
    id_usuario_rol?: number;
    id_usuario?: number | null;
    id_rol: number;
    fecha_asignacion?: Date | string;
};
export type usuario_rolUpdateInput = {
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneWithoutRolesNestedInput;
    rol?: Prisma.rolUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuario_rolUncheckedUpdateInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolCreateManyInput = {
    id_usuario_rol?: number;
    id_usuario?: number | null;
    id_rol: number;
    fecha_asignacion?: Date | string;
};
export type usuario_rolUpdateManyMutationInput = {
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolUncheckedUpdateManyInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Usuario_rolListRelationFilter = {
    every?: Prisma.usuario_rolWhereInput;
    some?: Prisma.usuario_rolWhereInput;
    none?: Prisma.usuario_rolWhereInput;
};
export type usuario_rolOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type usuario_rolId_usuarioId_rolCompoundUniqueInput = {
    id_usuario: number;
    id_rol: number;
};
export type usuario_rolCountOrderByAggregateInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    fecha_asignacion?: Prisma.SortOrder;
};
export type usuario_rolAvgOrderByAggregateInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
};
export type usuario_rolMaxOrderByAggregateInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    fecha_asignacion?: Prisma.SortOrder;
};
export type usuario_rolMinOrderByAggregateInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
    fecha_asignacion?: Prisma.SortOrder;
};
export type usuario_rolSumOrderByAggregateInput = {
    id_usuario_rol?: Prisma.SortOrder;
    id_usuario?: Prisma.SortOrder;
    id_rol?: Prisma.SortOrder;
};
export type usuario_rolCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput> | Prisma.usuario_rolCreateWithoutUsuarioInput[] | Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput | Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.usuario_rolCreateManyUsuarioInputEnvelope;
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
};
export type usuario_rolUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput> | Prisma.usuario_rolCreateWithoutUsuarioInput[] | Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput | Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.usuario_rolCreateManyUsuarioInputEnvelope;
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
};
export type usuario_rolUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput> | Prisma.usuario_rolCreateWithoutUsuarioInput[] | Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput | Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.usuario_rolCreateManyUsuarioInputEnvelope;
    set?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    disconnect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    delete?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    update?: Prisma.usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.usuario_rolUpdateManyWithWhereWithoutUsuarioInput | Prisma.usuario_rolUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
};
export type usuario_rolUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput> | Prisma.usuario_rolCreateWithoutUsuarioInput[] | Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput | Prisma.usuario_rolCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.usuario_rolCreateManyUsuarioInputEnvelope;
    set?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    disconnect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    delete?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    update?: Prisma.usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.usuario_rolUpdateManyWithWhereWithoutUsuarioInput | Prisma.usuario_rolUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
};
export type usuario_rolCreateNestedManyWithoutRolInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput> | Prisma.usuario_rolCreateWithoutRolInput[] | Prisma.usuario_rolUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutRolInput | Prisma.usuario_rolCreateOrConnectWithoutRolInput[];
    createMany?: Prisma.usuario_rolCreateManyRolInputEnvelope;
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
};
export type usuario_rolUncheckedCreateNestedManyWithoutRolInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput> | Prisma.usuario_rolCreateWithoutRolInput[] | Prisma.usuario_rolUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutRolInput | Prisma.usuario_rolCreateOrConnectWithoutRolInput[];
    createMany?: Prisma.usuario_rolCreateManyRolInputEnvelope;
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
};
export type usuario_rolUpdateManyWithoutRolNestedInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput> | Prisma.usuario_rolCreateWithoutRolInput[] | Prisma.usuario_rolUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutRolInput | Prisma.usuario_rolCreateOrConnectWithoutRolInput[];
    upsert?: Prisma.usuario_rolUpsertWithWhereUniqueWithoutRolInput | Prisma.usuario_rolUpsertWithWhereUniqueWithoutRolInput[];
    createMany?: Prisma.usuario_rolCreateManyRolInputEnvelope;
    set?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    disconnect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    delete?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    update?: Prisma.usuario_rolUpdateWithWhereUniqueWithoutRolInput | Prisma.usuario_rolUpdateWithWhereUniqueWithoutRolInput[];
    updateMany?: Prisma.usuario_rolUpdateManyWithWhereWithoutRolInput | Prisma.usuario_rolUpdateManyWithWhereWithoutRolInput[];
    deleteMany?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
};
export type usuario_rolUncheckedUpdateManyWithoutRolNestedInput = {
    create?: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput> | Prisma.usuario_rolCreateWithoutRolInput[] | Prisma.usuario_rolUncheckedCreateWithoutRolInput[];
    connectOrCreate?: Prisma.usuario_rolCreateOrConnectWithoutRolInput | Prisma.usuario_rolCreateOrConnectWithoutRolInput[];
    upsert?: Prisma.usuario_rolUpsertWithWhereUniqueWithoutRolInput | Prisma.usuario_rolUpsertWithWhereUniqueWithoutRolInput[];
    createMany?: Prisma.usuario_rolCreateManyRolInputEnvelope;
    set?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    disconnect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    delete?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    connect?: Prisma.usuario_rolWhereUniqueInput | Prisma.usuario_rolWhereUniqueInput[];
    update?: Prisma.usuario_rolUpdateWithWhereUniqueWithoutRolInput | Prisma.usuario_rolUpdateWithWhereUniqueWithoutRolInput[];
    updateMany?: Prisma.usuario_rolUpdateManyWithWhereWithoutRolInput | Prisma.usuario_rolUpdateManyWithWhereWithoutRolInput[];
    deleteMany?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
};
export type usuario_rolCreateWithoutUsuarioInput = {
    fecha_asignacion?: Date | string;
    rol: Prisma.rolCreateNestedOneWithoutUsuariosInput;
};
export type usuario_rolUncheckedCreateWithoutUsuarioInput = {
    id_usuario_rol?: number;
    id_rol: number;
    fecha_asignacion?: Date | string;
};
export type usuario_rolCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput>;
};
export type usuario_rolCreateManyUsuarioInputEnvelope = {
    data: Prisma.usuario_rolCreateManyUsuarioInput | Prisma.usuario_rolCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type usuario_rolUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    update: Prisma.XOR<Prisma.usuario_rolUpdateWithoutUsuarioInput, Prisma.usuario_rolUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.usuario_rolCreateWithoutUsuarioInput, Prisma.usuario_rolUncheckedCreateWithoutUsuarioInput>;
};
export type usuario_rolUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    data: Prisma.XOR<Prisma.usuario_rolUpdateWithoutUsuarioInput, Prisma.usuario_rolUncheckedUpdateWithoutUsuarioInput>;
};
export type usuario_rolUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.usuario_rolScalarWhereInput;
    data: Prisma.XOR<Prisma.usuario_rolUpdateManyMutationInput, Prisma.usuario_rolUncheckedUpdateManyWithoutUsuarioInput>;
};
export type usuario_rolScalarWhereInput = {
    AND?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
    OR?: Prisma.usuario_rolScalarWhereInput[];
    NOT?: Prisma.usuario_rolScalarWhereInput | Prisma.usuario_rolScalarWhereInput[];
    id_usuario_rol?: Prisma.IntFilter<"usuario_rol"> | number;
    id_usuario?: Prisma.IntNullableFilter<"usuario_rol"> | number | null;
    id_rol?: Prisma.IntFilter<"usuario_rol"> | number;
    fecha_asignacion?: Prisma.DateTimeFilter<"usuario_rol"> | Date | string;
};
export type usuario_rolCreateWithoutRolInput = {
    fecha_asignacion?: Date | string;
    usuario?: Prisma.usuarioCreateNestedOneWithoutRolesInput;
};
export type usuario_rolUncheckedCreateWithoutRolInput = {
    id_usuario_rol?: number;
    id_usuario?: number | null;
    fecha_asignacion?: Date | string;
};
export type usuario_rolCreateOrConnectWithoutRolInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput>;
};
export type usuario_rolCreateManyRolInputEnvelope = {
    data: Prisma.usuario_rolCreateManyRolInput | Prisma.usuario_rolCreateManyRolInput[];
    skipDuplicates?: boolean;
};
export type usuario_rolUpsertWithWhereUniqueWithoutRolInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    update: Prisma.XOR<Prisma.usuario_rolUpdateWithoutRolInput, Prisma.usuario_rolUncheckedUpdateWithoutRolInput>;
    create: Prisma.XOR<Prisma.usuario_rolCreateWithoutRolInput, Prisma.usuario_rolUncheckedCreateWithoutRolInput>;
};
export type usuario_rolUpdateWithWhereUniqueWithoutRolInput = {
    where: Prisma.usuario_rolWhereUniqueInput;
    data: Prisma.XOR<Prisma.usuario_rolUpdateWithoutRolInput, Prisma.usuario_rolUncheckedUpdateWithoutRolInput>;
};
export type usuario_rolUpdateManyWithWhereWithoutRolInput = {
    where: Prisma.usuario_rolScalarWhereInput;
    data: Prisma.XOR<Prisma.usuario_rolUpdateManyMutationInput, Prisma.usuario_rolUncheckedUpdateManyWithoutRolInput>;
};
export type usuario_rolCreateManyUsuarioInput = {
    id_usuario_rol?: number;
    id_rol: number;
    fecha_asignacion?: Date | string;
};
export type usuario_rolUpdateWithoutUsuarioInput = {
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rol?: Prisma.rolUpdateOneRequiredWithoutUsuariosNestedInput;
};
export type usuario_rolUncheckedUpdateWithoutUsuarioInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolUncheckedUpdateManyWithoutUsuarioInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolCreateManyRolInput = {
    id_usuario_rol?: number;
    id_usuario?: number | null;
    fecha_asignacion?: Date | string;
};
export type usuario_rolUpdateWithoutRolInput = {
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    usuario?: Prisma.usuarioUpdateOneWithoutRolesNestedInput;
};
export type usuario_rolUncheckedUpdateWithoutRolInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolUncheckedUpdateManyWithoutRolInput = {
    id_usuario_rol?: Prisma.IntFieldUpdateOperationsInput | number;
    id_usuario?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_asignacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usuario_rolSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_usuario_rol?: boolean;
    id_usuario?: boolean;
    id_rol?: boolean;
    fecha_asignacion?: boolean;
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_rol"]>;
export type usuario_rolSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_usuario_rol?: boolean;
    id_usuario?: boolean;
    id_rol?: boolean;
    fecha_asignacion?: boolean;
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_rol"]>;
export type usuario_rolSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_usuario_rol?: boolean;
    id_usuario?: boolean;
    id_rol?: boolean;
    fecha_asignacion?: boolean;
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario_rol"]>;
export type usuario_rolSelectScalar = {
    id_usuario_rol?: boolean;
    id_usuario?: boolean;
    id_rol?: boolean;
    fecha_asignacion?: boolean;
};
export type usuario_rolOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_usuario_rol" | "id_usuario" | "id_rol" | "fecha_asignacion", ExtArgs["result"]["usuario_rol"]>;
export type usuario_rolInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
};
export type usuario_rolIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
};
export type usuario_rolIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuario_rol$usuarioArgs<ExtArgs>;
    rol?: boolean | Prisma.rolDefaultArgs<ExtArgs>;
};
export type $usuario_rolPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuario_rol";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
        rol: Prisma.$rolPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_usuario_rol: number;
        id_usuario: number | null;
        id_rol: number;
        fecha_asignacion: Date;
    }, ExtArgs["result"]["usuario_rol"]>;
    composites: {};
};
export type usuario_rolGetPayload<S extends boolean | null | undefined | usuario_rolDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload, S>;
export type usuario_rolCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuario_rolFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Usuario_rolCountAggregateInputType | true;
};
export interface usuario_rolDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuario_rol'];
        meta: {
            name: 'usuario_rol';
        };
    };
    findUnique<T extends usuario_rolFindUniqueArgs>(args: Prisma.SelectSubset<T, usuario_rolFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usuario_rolFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuario_rolFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usuario_rolFindFirstArgs>(args?: Prisma.SelectSubset<T, usuario_rolFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usuario_rolFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuario_rolFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usuario_rolFindManyArgs>(args?: Prisma.SelectSubset<T, usuario_rolFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usuario_rolCreateArgs>(args: Prisma.SelectSubset<T, usuario_rolCreateArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usuario_rolCreateManyArgs>(args?: Prisma.SelectSubset<T, usuario_rolCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usuario_rolCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usuario_rolCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usuario_rolDeleteArgs>(args: Prisma.SelectSubset<T, usuario_rolDeleteArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usuario_rolUpdateArgs>(args: Prisma.SelectSubset<T, usuario_rolUpdateArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usuario_rolDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuario_rolDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usuario_rolUpdateManyArgs>(args: Prisma.SelectSubset<T, usuario_rolUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usuario_rolUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usuario_rolUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usuario_rolUpsertArgs>(args: Prisma.SelectSubset<T, usuario_rolUpsertArgs<ExtArgs>>): Prisma.Prisma__usuario_rolClient<runtime.Types.Result.GetResult<Prisma.$usuario_rolPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usuario_rolCountArgs>(args?: Prisma.Subset<T, usuario_rolCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Usuario_rolCountAggregateOutputType> : number>;
    aggregate<T extends Usuario_rolAggregateArgs>(args: Prisma.Subset<T, Usuario_rolAggregateArgs>): Prisma.PrismaPromise<GetUsuario_rolAggregateType<T>>;
    groupBy<T extends usuario_rolGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuario_rolGroupByArgs['orderBy'];
    } : {
        orderBy?: usuario_rolGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuario_rolGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuario_rolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usuario_rolFieldRefs;
}
export interface Prisma__usuario_rolClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.usuario_rol$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario_rol$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rol<T extends Prisma.rolDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.rolDefaultArgs<ExtArgs>>): Prisma.Prisma__rolClient<runtime.Types.Result.GetResult<Prisma.$rolPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usuario_rolFieldRefs {
    readonly id_usuario_rol: Prisma.FieldRef<"usuario_rol", 'Int'>;
    readonly id_usuario: Prisma.FieldRef<"usuario_rol", 'Int'>;
    readonly id_rol: Prisma.FieldRef<"usuario_rol", 'Int'>;
    readonly fecha_asignacion: Prisma.FieldRef<"usuario_rol", 'DateTime'>;
}
export type usuario_rolFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where: Prisma.usuario_rolWhereUniqueInput;
};
export type usuario_rolFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where: Prisma.usuario_rolWhereUniqueInput;
};
export type usuario_rolFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithRelationInput | Prisma.usuario_rolOrderByWithRelationInput[];
    cursor?: Prisma.usuario_rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_rolScalarFieldEnum | Prisma.Usuario_rolScalarFieldEnum[];
};
export type usuario_rolFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithRelationInput | Prisma.usuario_rolOrderByWithRelationInput[];
    cursor?: Prisma.usuario_rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_rolScalarFieldEnum | Prisma.Usuario_rolScalarFieldEnum[];
};
export type usuario_rolFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where?: Prisma.usuario_rolWhereInput;
    orderBy?: Prisma.usuario_rolOrderByWithRelationInput | Prisma.usuario_rolOrderByWithRelationInput[];
    cursor?: Prisma.usuario_rolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Usuario_rolScalarFieldEnum | Prisma.Usuario_rolScalarFieldEnum[];
};
export type usuario_rolCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuario_rolCreateInput, Prisma.usuario_rolUncheckedCreateInput>;
};
export type usuario_rolCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usuario_rolCreateManyInput | Prisma.usuario_rolCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuario_rolCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    data: Prisma.usuario_rolCreateManyInput | Prisma.usuario_rolCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.usuario_rolIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type usuario_rolUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuario_rolUpdateInput, Prisma.usuario_rolUncheckedUpdateInput>;
    where: Prisma.usuario_rolWhereUniqueInput;
};
export type usuario_rolUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usuario_rolUpdateManyMutationInput, Prisma.usuario_rolUncheckedUpdateManyInput>;
    where?: Prisma.usuario_rolWhereInput;
    limit?: number;
};
export type usuario_rolUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuario_rolUpdateManyMutationInput, Prisma.usuario_rolUncheckedUpdateManyInput>;
    where?: Prisma.usuario_rolWhereInput;
    limit?: number;
    include?: Prisma.usuario_rolIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type usuario_rolUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where: Prisma.usuario_rolWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuario_rolCreateInput, Prisma.usuario_rolUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usuario_rolUpdateInput, Prisma.usuario_rolUncheckedUpdateInput>;
};
export type usuario_rolDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
    where: Prisma.usuario_rolWhereUniqueInput;
};
export type usuario_rolDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuario_rolWhereInput;
    limit?: number;
};
export type usuario_rol$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type usuario_rolDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuario_rolSelect<ExtArgs> | null;
    omit?: Prisma.usuario_rolOmit<ExtArgs> | null;
    include?: Prisma.usuario_rolInclude<ExtArgs> | null;
};
