import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type canal_whatsappModel = runtime.Types.Result.DefaultSelection<Prisma.$canal_whatsappPayload>;
export type AggregateCanal_whatsapp = {
    _count: Canal_whatsappCountAggregateOutputType | null;
    _avg: Canal_whatsappAvgAggregateOutputType | null;
    _sum: Canal_whatsappSumAggregateOutputType | null;
    _min: Canal_whatsappMinAggregateOutputType | null;
    _max: Canal_whatsappMaxAggregateOutputType | null;
};
export type Canal_whatsappAvgAggregateOutputType = {
    id_canal: number | null;
    id_empresa: number | null;
};
export type Canal_whatsappSumAggregateOutputType = {
    id_canal: number | null;
    id_empresa: number | null;
};
export type Canal_whatsappMinAggregateOutputType = {
    id_canal: number | null;
    id_empresa: number | null;
    numero_telefono: string | null;
    nombre_canal: string | null;
    activo: boolean | null;
};
export type Canal_whatsappMaxAggregateOutputType = {
    id_canal: number | null;
    id_empresa: number | null;
    numero_telefono: string | null;
    nombre_canal: string | null;
    activo: boolean | null;
};
export type Canal_whatsappCountAggregateOutputType = {
    id_canal: number;
    id_empresa: number;
    numero_telefono: number;
    nombre_canal: number;
    activo: number;
    _all: number;
};
export type Canal_whatsappAvgAggregateInputType = {
    id_canal?: true;
    id_empresa?: true;
};
export type Canal_whatsappSumAggregateInputType = {
    id_canal?: true;
    id_empresa?: true;
};
export type Canal_whatsappMinAggregateInputType = {
    id_canal?: true;
    id_empresa?: true;
    numero_telefono?: true;
    nombre_canal?: true;
    activo?: true;
};
export type Canal_whatsappMaxAggregateInputType = {
    id_canal?: true;
    id_empresa?: true;
    numero_telefono?: true;
    nombre_canal?: true;
    activo?: true;
};
export type Canal_whatsappCountAggregateInputType = {
    id_canal?: true;
    id_empresa?: true;
    numero_telefono?: true;
    nombre_canal?: true;
    activo?: true;
    _all?: true;
};
export type Canal_whatsappAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.canal_whatsappWhereInput;
    orderBy?: Prisma.canal_whatsappOrderByWithRelationInput | Prisma.canal_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.canal_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Canal_whatsappCountAggregateInputType;
    _avg?: Canal_whatsappAvgAggregateInputType;
    _sum?: Canal_whatsappSumAggregateInputType;
    _min?: Canal_whatsappMinAggregateInputType;
    _max?: Canal_whatsappMaxAggregateInputType;
};
export type GetCanal_whatsappAggregateType<T extends Canal_whatsappAggregateArgs> = {
    [P in keyof T & keyof AggregateCanal_whatsapp]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCanal_whatsapp[P]> : Prisma.GetScalarType<T[P], AggregateCanal_whatsapp[P]>;
};
export type canal_whatsappGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.canal_whatsappWhereInput;
    orderBy?: Prisma.canal_whatsappOrderByWithAggregationInput | Prisma.canal_whatsappOrderByWithAggregationInput[];
    by: Prisma.Canal_whatsappScalarFieldEnum[] | Prisma.Canal_whatsappScalarFieldEnum;
    having?: Prisma.canal_whatsappScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Canal_whatsappCountAggregateInputType | true;
    _avg?: Canal_whatsappAvgAggregateInputType;
    _sum?: Canal_whatsappSumAggregateInputType;
    _min?: Canal_whatsappMinAggregateInputType;
    _max?: Canal_whatsappMaxAggregateInputType;
};
export type Canal_whatsappGroupByOutputType = {
    id_canal: number;
    id_empresa: number | null;
    numero_telefono: string | null;
    nombre_canal: string | null;
    activo: boolean;
    _count: Canal_whatsappCountAggregateOutputType | null;
    _avg: Canal_whatsappAvgAggregateOutputType | null;
    _sum: Canal_whatsappSumAggregateOutputType | null;
    _min: Canal_whatsappMinAggregateOutputType | null;
    _max: Canal_whatsappMaxAggregateOutputType | null;
};
export type GetCanal_whatsappGroupByPayload<T extends canal_whatsappGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Canal_whatsappGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Canal_whatsappGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Canal_whatsappGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Canal_whatsappGroupByOutputType[P]>;
}>>;
export type canal_whatsappWhereInput = {
    AND?: Prisma.canal_whatsappWhereInput | Prisma.canal_whatsappWhereInput[];
    OR?: Prisma.canal_whatsappWhereInput[];
    NOT?: Prisma.canal_whatsappWhereInput | Prisma.canal_whatsappWhereInput[];
    id_canal?: Prisma.IntFilter<"canal_whatsapp"> | number;
    id_empresa?: Prisma.IntNullableFilter<"canal_whatsapp"> | number | null;
    numero_telefono?: Prisma.StringNullableFilter<"canal_whatsapp"> | string | null;
    nombre_canal?: Prisma.StringNullableFilter<"canal_whatsapp"> | string | null;
    activo?: Prisma.BoolFilter<"canal_whatsapp"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    plantillas?: Prisma.Plantilla_whatsappListRelationFilter;
    mensajes?: Prisma.Mensaje_whatsappListRelationFilter;
    conversaciones?: Prisma.Conversacion_botListRelationFilter;
};
export type canal_whatsappOrderByWithRelationInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    plantillas?: Prisma.plantilla_whatsappOrderByRelationAggregateInput;
    mensajes?: Prisma.mensaje_whatsappOrderByRelationAggregateInput;
    conversaciones?: Prisma.conversacion_botOrderByRelationAggregateInput;
};
export type canal_whatsappWhereUniqueInput = Prisma.AtLeast<{
    id_canal?: number;
    numero_telefono?: string;
    AND?: Prisma.canal_whatsappWhereInput | Prisma.canal_whatsappWhereInput[];
    OR?: Prisma.canal_whatsappWhereInput[];
    NOT?: Prisma.canal_whatsappWhereInput | Prisma.canal_whatsappWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"canal_whatsapp"> | number | null;
    nombre_canal?: Prisma.StringNullableFilter<"canal_whatsapp"> | string | null;
    activo?: Prisma.BoolFilter<"canal_whatsapp"> | boolean;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    plantillas?: Prisma.Plantilla_whatsappListRelationFilter;
    mensajes?: Prisma.Mensaje_whatsappListRelationFilter;
    conversaciones?: Prisma.Conversacion_botListRelationFilter;
}, "id_canal" | "numero_telefono">;
export type canal_whatsappOrderByWithAggregationInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    numero_telefono?: Prisma.SortOrderInput | Prisma.SortOrder;
    nombre_canal?: Prisma.SortOrderInput | Prisma.SortOrder;
    activo?: Prisma.SortOrder;
    _count?: Prisma.canal_whatsappCountOrderByAggregateInput;
    _avg?: Prisma.canal_whatsappAvgOrderByAggregateInput;
    _max?: Prisma.canal_whatsappMaxOrderByAggregateInput;
    _min?: Prisma.canal_whatsappMinOrderByAggregateInput;
    _sum?: Prisma.canal_whatsappSumOrderByAggregateInput;
};
export type canal_whatsappScalarWhereWithAggregatesInput = {
    AND?: Prisma.canal_whatsappScalarWhereWithAggregatesInput | Prisma.canal_whatsappScalarWhereWithAggregatesInput[];
    OR?: Prisma.canal_whatsappScalarWhereWithAggregatesInput[];
    NOT?: Prisma.canal_whatsappScalarWhereWithAggregatesInput | Prisma.canal_whatsappScalarWhereWithAggregatesInput[];
    id_canal?: Prisma.IntWithAggregatesFilter<"canal_whatsapp"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"canal_whatsapp"> | number | null;
    numero_telefono?: Prisma.StringNullableWithAggregatesFilter<"canal_whatsapp"> | string | null;
    nombre_canal?: Prisma.StringNullableWithAggregatesFilter<"canal_whatsapp"> | string | null;
    activo?: Prisma.BoolWithAggregatesFilter<"canal_whatsapp"> | boolean;
};
export type canal_whatsappCreateInput = {
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutCanales_waInput;
    plantillas?: Prisma.plantilla_whatsappCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappUncheckedCreateInput = {
    id_canal?: number;
    id_empresa?: number | null;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botUncheckedCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappUpdateInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutCanales_waNestedInput;
    plantillas?: Prisma.plantilla_whatsappUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappUncheckedUpdateInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUncheckedUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappCreateManyInput = {
    id_canal?: number;
    id_empresa?: number | null;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
};
export type canal_whatsappUpdateManyMutationInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type canal_whatsappUncheckedUpdateManyInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Canal_whatsappListRelationFilter = {
    every?: Prisma.canal_whatsappWhereInput;
    some?: Prisma.canal_whatsappWhereInput;
    none?: Prisma.canal_whatsappWhereInput;
};
export type canal_whatsappOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type canal_whatsappCountOrderByAggregateInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    numero_telefono?: Prisma.SortOrder;
    nombre_canal?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type canal_whatsappAvgOrderByAggregateInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type canal_whatsappMaxOrderByAggregateInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    numero_telefono?: Prisma.SortOrder;
    nombre_canal?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type canal_whatsappMinOrderByAggregateInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    numero_telefono?: Prisma.SortOrder;
    nombre_canal?: Prisma.SortOrder;
    activo?: Prisma.SortOrder;
};
export type canal_whatsappSumOrderByAggregateInput = {
    id_canal?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
};
export type Canal_whatsappNullableScalarRelationFilter = {
    is?: Prisma.canal_whatsappWhereInput | null;
    isNot?: Prisma.canal_whatsappWhereInput | null;
};
export type canal_whatsappCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput> | Prisma.canal_whatsappCreateWithoutEmpresaInput[] | Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput | Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.canal_whatsappCreateManyEmpresaInputEnvelope;
    connect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
};
export type canal_whatsappUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput> | Prisma.canal_whatsappCreateWithoutEmpresaInput[] | Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput | Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.canal_whatsappCreateManyEmpresaInputEnvelope;
    connect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
};
export type canal_whatsappUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput> | Prisma.canal_whatsappCreateWithoutEmpresaInput[] | Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput | Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.canal_whatsappUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.canal_whatsappUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.canal_whatsappCreateManyEmpresaInputEnvelope;
    set?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    disconnect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    delete?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    connect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    update?: Prisma.canal_whatsappUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.canal_whatsappUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.canal_whatsappUpdateManyWithWhereWithoutEmpresaInput | Prisma.canal_whatsappUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.canal_whatsappScalarWhereInput | Prisma.canal_whatsappScalarWhereInput[];
};
export type canal_whatsappUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput> | Prisma.canal_whatsappCreateWithoutEmpresaInput[] | Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput | Prisma.canal_whatsappCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.canal_whatsappUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.canal_whatsappUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.canal_whatsappCreateManyEmpresaInputEnvelope;
    set?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    disconnect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    delete?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    connect?: Prisma.canal_whatsappWhereUniqueInput | Prisma.canal_whatsappWhereUniqueInput[];
    update?: Prisma.canal_whatsappUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.canal_whatsappUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.canal_whatsappUpdateManyWithWhereWithoutEmpresaInput | Prisma.canal_whatsappUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.canal_whatsappScalarWhereInput | Prisma.canal_whatsappScalarWhereInput[];
};
export type canal_whatsappCreateNestedOneWithoutPlantillasInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedCreateWithoutPlantillasInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutPlantillasInput;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappUpdateOneWithoutPlantillasNestedInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedCreateWithoutPlantillasInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutPlantillasInput;
    upsert?: Prisma.canal_whatsappUpsertWithoutPlantillasInput;
    disconnect?: Prisma.canal_whatsappWhereInput | boolean;
    delete?: Prisma.canal_whatsappWhereInput | boolean;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canal_whatsappUpdateToOneWithWhereWithoutPlantillasInput, Prisma.canal_whatsappUpdateWithoutPlantillasInput>, Prisma.canal_whatsappUncheckedUpdateWithoutPlantillasInput>;
};
export type canal_whatsappCreateNestedOneWithoutMensajesInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutMensajesInput, Prisma.canal_whatsappUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutMensajesInput;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappUpdateOneWithoutMensajesNestedInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutMensajesInput, Prisma.canal_whatsappUncheckedCreateWithoutMensajesInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutMensajesInput;
    upsert?: Prisma.canal_whatsappUpsertWithoutMensajesInput;
    disconnect?: Prisma.canal_whatsappWhereInput | boolean;
    delete?: Prisma.canal_whatsappWhereInput | boolean;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canal_whatsappUpdateToOneWithWhereWithoutMensajesInput, Prisma.canal_whatsappUpdateWithoutMensajesInput>, Prisma.canal_whatsappUncheckedUpdateWithoutMensajesInput>;
};
export type canal_whatsappCreateNestedOneWithoutConversacionesInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedCreateWithoutConversacionesInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutConversacionesInput;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappUpdateOneWithoutConversacionesNestedInput = {
    create?: Prisma.XOR<Prisma.canal_whatsappCreateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedCreateWithoutConversacionesInput>;
    connectOrCreate?: Prisma.canal_whatsappCreateOrConnectWithoutConversacionesInput;
    upsert?: Prisma.canal_whatsappUpsertWithoutConversacionesInput;
    disconnect?: Prisma.canal_whatsappWhereInput | boolean;
    delete?: Prisma.canal_whatsappWhereInput | boolean;
    connect?: Prisma.canal_whatsappWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.canal_whatsappUpdateToOneWithWhereWithoutConversacionesInput, Prisma.canal_whatsappUpdateWithoutConversacionesInput>, Prisma.canal_whatsappUncheckedUpdateWithoutConversacionesInput>;
};
export type canal_whatsappCreateWithoutEmpresaInput = {
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    plantillas?: Prisma.plantilla_whatsappCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappUncheckedCreateWithoutEmpresaInput = {
    id_canal?: number;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botUncheckedCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput>;
};
export type canal_whatsappCreateManyEmpresaInputEnvelope = {
    data: Prisma.canal_whatsappCreateManyEmpresaInput | Prisma.canal_whatsappCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type canal_whatsappUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    update: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedCreateWithoutEmpresaInput>;
};
export type canal_whatsappUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutEmpresaInput, Prisma.canal_whatsappUncheckedUpdateWithoutEmpresaInput>;
};
export type canal_whatsappUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.canal_whatsappScalarWhereInput;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateManyMutationInput, Prisma.canal_whatsappUncheckedUpdateManyWithoutEmpresaInput>;
};
export type canal_whatsappScalarWhereInput = {
    AND?: Prisma.canal_whatsappScalarWhereInput | Prisma.canal_whatsappScalarWhereInput[];
    OR?: Prisma.canal_whatsappScalarWhereInput[];
    NOT?: Prisma.canal_whatsappScalarWhereInput | Prisma.canal_whatsappScalarWhereInput[];
    id_canal?: Prisma.IntFilter<"canal_whatsapp"> | number;
    id_empresa?: Prisma.IntNullableFilter<"canal_whatsapp"> | number | null;
    numero_telefono?: Prisma.StringNullableFilter<"canal_whatsapp"> | string | null;
    nombre_canal?: Prisma.StringNullableFilter<"canal_whatsapp"> | string | null;
    activo?: Prisma.BoolFilter<"canal_whatsapp"> | boolean;
};
export type canal_whatsappCreateWithoutPlantillasInput = {
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutCanales_waInput;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappUncheckedCreateWithoutPlantillasInput = {
    id_canal?: number;
    id_empresa?: number | null;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botUncheckedCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappCreateOrConnectWithoutPlantillasInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedCreateWithoutPlantillasInput>;
};
export type canal_whatsappUpsertWithoutPlantillasInput = {
    update: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedUpdateWithoutPlantillasInput>;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedCreateWithoutPlantillasInput>;
    where?: Prisma.canal_whatsappWhereInput;
};
export type canal_whatsappUpdateToOneWithWhereWithoutPlantillasInput = {
    where?: Prisma.canal_whatsappWhereInput;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutPlantillasInput, Prisma.canal_whatsappUncheckedUpdateWithoutPlantillasInput>;
};
export type canal_whatsappUpdateWithoutPlantillasInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutCanales_waNestedInput;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappUncheckedUpdateWithoutPlantillasInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUncheckedUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappCreateWithoutMensajesInput = {
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutCanales_waInput;
    plantillas?: Prisma.plantilla_whatsappCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappUncheckedCreateWithoutMensajesInput = {
    id_canal?: number;
    id_empresa?: number | null;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    conversaciones?: Prisma.conversacion_botUncheckedCreateNestedManyWithoutCanal_waInput;
};
export type canal_whatsappCreateOrConnectWithoutMensajesInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutMensajesInput, Prisma.canal_whatsappUncheckedCreateWithoutMensajesInput>;
};
export type canal_whatsappUpsertWithoutMensajesInput = {
    update: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutMensajesInput, Prisma.canal_whatsappUncheckedUpdateWithoutMensajesInput>;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutMensajesInput, Prisma.canal_whatsappUncheckedCreateWithoutMensajesInput>;
    where?: Prisma.canal_whatsappWhereInput;
};
export type canal_whatsappUpdateToOneWithWhereWithoutMensajesInput = {
    where?: Prisma.canal_whatsappWhereInput;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutMensajesInput, Prisma.canal_whatsappUncheckedUpdateWithoutMensajesInput>;
};
export type canal_whatsappUpdateWithoutMensajesInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutCanales_waNestedInput;
    plantillas?: Prisma.plantilla_whatsappUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappUncheckedUpdateWithoutMensajesInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUncheckedUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappCreateWithoutConversacionesInput = {
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutCanales_waInput;
    plantillas?: Prisma.plantilla_whatsappCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappCreateNestedManyWithoutCanalInput;
};
export type canal_whatsappUncheckedCreateWithoutConversacionesInput = {
    id_canal?: number;
    id_empresa?: number | null;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedCreateNestedManyWithoutCanalInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedCreateNestedManyWithoutCanalInput;
};
export type canal_whatsappCreateOrConnectWithoutConversacionesInput = {
    where: Prisma.canal_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedCreateWithoutConversacionesInput>;
};
export type canal_whatsappUpsertWithoutConversacionesInput = {
    update: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedUpdateWithoutConversacionesInput>;
    create: Prisma.XOR<Prisma.canal_whatsappCreateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedCreateWithoutConversacionesInput>;
    where?: Prisma.canal_whatsappWhereInput;
};
export type canal_whatsappUpdateToOneWithWhereWithoutConversacionesInput = {
    where?: Prisma.canal_whatsappWhereInput;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateWithoutConversacionesInput, Prisma.canal_whatsappUncheckedUpdateWithoutConversacionesInput>;
};
export type canal_whatsappUpdateWithoutConversacionesInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutCanales_waNestedInput;
    plantillas?: Prisma.plantilla_whatsappUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutCanalNestedInput;
};
export type canal_whatsappUncheckedUpdateWithoutConversacionesInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
};
export type canal_whatsappCreateManyEmpresaInput = {
    id_canal?: number;
    numero_telefono?: string | null;
    nombre_canal?: string | null;
    activo?: boolean;
};
export type canal_whatsappUpdateWithoutEmpresaInput = {
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plantillas?: Prisma.plantilla_whatsappUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappUncheckedUpdateWithoutEmpresaInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    plantillas?: Prisma.plantilla_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    mensajes?: Prisma.mensaje_whatsappUncheckedUpdateManyWithoutCanalNestedInput;
    conversaciones?: Prisma.conversacion_botUncheckedUpdateManyWithoutCanal_waNestedInput;
};
export type canal_whatsappUncheckedUpdateManyWithoutEmpresaInput = {
    id_canal?: Prisma.IntFieldUpdateOperationsInput | number;
    numero_telefono?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nombre_canal?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activo?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type Canal_whatsappCountOutputType = {
    plantillas: number;
    mensajes: number;
    conversaciones: number;
};
export type Canal_whatsappCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    plantillas?: boolean | Canal_whatsappCountOutputTypeCountPlantillasArgs;
    mensajes?: boolean | Canal_whatsappCountOutputTypeCountMensajesArgs;
    conversaciones?: boolean | Canal_whatsappCountOutputTypeCountConversacionesArgs;
};
export type Canal_whatsappCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Canal_whatsappCountOutputTypeSelect<ExtArgs> | null;
};
export type Canal_whatsappCountOutputTypeCountPlantillasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.plantilla_whatsappWhereInput;
};
export type Canal_whatsappCountOutputTypeCountMensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mensaje_whatsappWhereInput;
};
export type Canal_whatsappCountOutputTypeCountConversacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.conversacion_botWhereInput;
};
export type canal_whatsappSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_canal?: boolean;
    id_empresa?: boolean;
    numero_telefono?: boolean;
    nombre_canal?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
    plantillas?: boolean | Prisma.canal_whatsapp$plantillasArgs<ExtArgs>;
    mensajes?: boolean | Prisma.canal_whatsapp$mensajesArgs<ExtArgs>;
    conversaciones?: boolean | Prisma.canal_whatsapp$conversacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.Canal_whatsappCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["canal_whatsapp"]>;
export type canal_whatsappSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_canal?: boolean;
    id_empresa?: boolean;
    numero_telefono?: boolean;
    nombre_canal?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["canal_whatsapp"]>;
export type canal_whatsappSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_canal?: boolean;
    id_empresa?: boolean;
    numero_telefono?: boolean;
    nombre_canal?: boolean;
    activo?: boolean;
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["canal_whatsapp"]>;
export type canal_whatsappSelectScalar = {
    id_canal?: boolean;
    id_empresa?: boolean;
    numero_telefono?: boolean;
    nombre_canal?: boolean;
    activo?: boolean;
};
export type canal_whatsappOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_canal" | "id_empresa" | "numero_telefono" | "nombre_canal" | "activo", ExtArgs["result"]["canal_whatsapp"]>;
export type canal_whatsappInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
    plantillas?: boolean | Prisma.canal_whatsapp$plantillasArgs<ExtArgs>;
    mensajes?: boolean | Prisma.canal_whatsapp$mensajesArgs<ExtArgs>;
    conversaciones?: boolean | Prisma.canal_whatsapp$conversacionesArgs<ExtArgs>;
    _count?: boolean | Prisma.Canal_whatsappCountOutputTypeDefaultArgs<ExtArgs>;
};
export type canal_whatsappIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
};
export type canal_whatsappIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.canal_whatsapp$empresaArgs<ExtArgs>;
};
export type $canal_whatsappPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "canal_whatsapp";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        plantillas: Prisma.$plantilla_whatsappPayload<ExtArgs>[];
        mensajes: Prisma.$mensaje_whatsappPayload<ExtArgs>[];
        conversaciones: Prisma.$conversacion_botPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_canal: number;
        id_empresa: number | null;
        numero_telefono: string | null;
        nombre_canal: string | null;
        activo: boolean;
    }, ExtArgs["result"]["canal_whatsapp"]>;
    composites: {};
};
export type canal_whatsappGetPayload<S extends boolean | null | undefined | canal_whatsappDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload, S>;
export type canal_whatsappCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<canal_whatsappFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Canal_whatsappCountAggregateInputType | true;
};
export interface canal_whatsappDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['canal_whatsapp'];
        meta: {
            name: 'canal_whatsapp';
        };
    };
    findUnique<T extends canal_whatsappFindUniqueArgs>(args: Prisma.SelectSubset<T, canal_whatsappFindUniqueArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends canal_whatsappFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, canal_whatsappFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends canal_whatsappFindFirstArgs>(args?: Prisma.SelectSubset<T, canal_whatsappFindFirstArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends canal_whatsappFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, canal_whatsappFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends canal_whatsappFindManyArgs>(args?: Prisma.SelectSubset<T, canal_whatsappFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends canal_whatsappCreateArgs>(args: Prisma.SelectSubset<T, canal_whatsappCreateArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends canal_whatsappCreateManyArgs>(args?: Prisma.SelectSubset<T, canal_whatsappCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends canal_whatsappCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, canal_whatsappCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends canal_whatsappDeleteArgs>(args: Prisma.SelectSubset<T, canal_whatsappDeleteArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends canal_whatsappUpdateArgs>(args: Prisma.SelectSubset<T, canal_whatsappUpdateArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends canal_whatsappDeleteManyArgs>(args?: Prisma.SelectSubset<T, canal_whatsappDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends canal_whatsappUpdateManyArgs>(args: Prisma.SelectSubset<T, canal_whatsappUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends canal_whatsappUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, canal_whatsappUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends canal_whatsappUpsertArgs>(args: Prisma.SelectSubset<T, canal_whatsappUpsertArgs<ExtArgs>>): Prisma.Prisma__canal_whatsappClient<runtime.Types.Result.GetResult<Prisma.$canal_whatsappPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends canal_whatsappCountArgs>(args?: Prisma.Subset<T, canal_whatsappCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Canal_whatsappCountAggregateOutputType> : number>;
    aggregate<T extends Canal_whatsappAggregateArgs>(args: Prisma.Subset<T, Canal_whatsappAggregateArgs>): Prisma.PrismaPromise<GetCanal_whatsappAggregateType<T>>;
    groupBy<T extends canal_whatsappGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: canal_whatsappGroupByArgs['orderBy'];
    } : {
        orderBy?: canal_whatsappGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, canal_whatsappGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCanal_whatsappGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: canal_whatsappFieldRefs;
}
export interface Prisma__canal_whatsappClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.canal_whatsapp$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canal_whatsapp$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plantillas<T extends Prisma.canal_whatsapp$plantillasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canal_whatsapp$plantillasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$plantilla_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    mensajes<T extends Prisma.canal_whatsapp$mensajesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canal_whatsapp$mensajesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mensaje_whatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    conversaciones<T extends Prisma.canal_whatsapp$conversacionesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.canal_whatsapp$conversacionesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface canal_whatsappFieldRefs {
    readonly id_canal: Prisma.FieldRef<"canal_whatsapp", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"canal_whatsapp", 'Int'>;
    readonly numero_telefono: Prisma.FieldRef<"canal_whatsapp", 'String'>;
    readonly nombre_canal: Prisma.FieldRef<"canal_whatsapp", 'String'>;
    readonly activo: Prisma.FieldRef<"canal_whatsapp", 'Boolean'>;
}
export type canal_whatsappFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
    orderBy?: Prisma.canal_whatsappOrderByWithRelationInput | Prisma.canal_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.canal_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Canal_whatsappScalarFieldEnum | Prisma.Canal_whatsappScalarFieldEnum[];
};
export type canal_whatsappFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
    orderBy?: Prisma.canal_whatsappOrderByWithRelationInput | Prisma.canal_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.canal_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Canal_whatsappScalarFieldEnum | Prisma.Canal_whatsappScalarFieldEnum[];
};
export type canal_whatsappFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where?: Prisma.canal_whatsappWhereInput;
    orderBy?: Prisma.canal_whatsappOrderByWithRelationInput | Prisma.canal_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.canal_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Canal_whatsappScalarFieldEnum | Prisma.Canal_whatsappScalarFieldEnum[];
};
export type canal_whatsappCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.canal_whatsappCreateInput, Prisma.canal_whatsappUncheckedCreateInput>;
};
export type canal_whatsappCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.canal_whatsappCreateManyInput | Prisma.canal_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
};
export type canal_whatsappCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    data: Prisma.canal_whatsappCreateManyInput | Prisma.canal_whatsappCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.canal_whatsappIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type canal_whatsappUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateInput, Prisma.canal_whatsappUncheckedUpdateInput>;
    where: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.canal_whatsappUpdateManyMutationInput, Prisma.canal_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.canal_whatsappWhereInput;
    limit?: number;
};
export type canal_whatsappUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.canal_whatsappUpdateManyMutationInput, Prisma.canal_whatsappUncheckedUpdateManyInput>;
    where?: Prisma.canal_whatsappWhereInput;
    limit?: number;
    include?: Prisma.canal_whatsappIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type canal_whatsappUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where: Prisma.canal_whatsappWhereUniqueInput;
    create: Prisma.XOR<Prisma.canal_whatsappCreateInput, Prisma.canal_whatsappUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.canal_whatsappUpdateInput, Prisma.canal_whatsappUncheckedUpdateInput>;
};
export type canal_whatsappDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
    where: Prisma.canal_whatsappWhereUniqueInput;
};
export type canal_whatsappDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.canal_whatsappWhereInput;
    limit?: number;
};
export type canal_whatsapp$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type canal_whatsapp$plantillasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.plantilla_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.plantilla_whatsappOmit<ExtArgs> | null;
    include?: Prisma.plantilla_whatsappInclude<ExtArgs> | null;
    where?: Prisma.plantilla_whatsappWhereInput;
    orderBy?: Prisma.plantilla_whatsappOrderByWithRelationInput | Prisma.plantilla_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.plantilla_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Plantilla_whatsappScalarFieldEnum | Prisma.Plantilla_whatsappScalarFieldEnum[];
};
export type canal_whatsapp$mensajesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mensaje_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.mensaje_whatsappOmit<ExtArgs> | null;
    include?: Prisma.mensaje_whatsappInclude<ExtArgs> | null;
    where?: Prisma.mensaje_whatsappWhereInput;
    orderBy?: Prisma.mensaje_whatsappOrderByWithRelationInput | Prisma.mensaje_whatsappOrderByWithRelationInput[];
    cursor?: Prisma.mensaje_whatsappWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Mensaje_whatsappScalarFieldEnum | Prisma.Mensaje_whatsappScalarFieldEnum[];
};
export type canal_whatsapp$conversacionesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
    orderBy?: Prisma.conversacion_botOrderByWithRelationInput | Prisma.conversacion_botOrderByWithRelationInput[];
    cursor?: Prisma.conversacion_botWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Conversacion_botScalarFieldEnum | Prisma.Conversacion_botScalarFieldEnum[];
};
export type canal_whatsappDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.canal_whatsappSelect<ExtArgs> | null;
    omit?: Prisma.canal_whatsappOmit<ExtArgs> | null;
    include?: Prisma.canal_whatsappInclude<ExtArgs> | null;
};
