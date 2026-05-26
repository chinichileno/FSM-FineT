import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type punto_coberturaModel = runtime.Types.Result.DefaultSelection<Prisma.$punto_coberturaPayload>;
export type AggregatePunto_cobertura = {
    _count: Punto_coberturaCountAggregateOutputType | null;
    _avg: Punto_coberturaAvgAggregateOutputType | null;
    _sum: Punto_coberturaSumAggregateOutputType | null;
    _min: Punto_coberturaMinAggregateOutputType | null;
    _max: Punto_coberturaMaxAggregateOutputType | null;
};
export type Punto_coberturaAvgAggregateOutputType = {
    id_punto: number | null;
    id_empresa: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    densidad_cobertura: runtime.Decimal | null;
};
export type Punto_coberturaSumAggregateOutputType = {
    id_punto: number | null;
    id_empresa: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    densidad_cobertura: runtime.Decimal | null;
};
export type Punto_coberturaMinAggregateOutputType = {
    id_punto: number | null;
    id_empresa: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    densidad_cobertura: runtime.Decimal | null;
    tipo_cobertura: string | null;
};
export type Punto_coberturaMaxAggregateOutputType = {
    id_punto: number | null;
    id_empresa: number | null;
    latitud: runtime.Decimal | null;
    longitud: runtime.Decimal | null;
    densidad_cobertura: runtime.Decimal | null;
    tipo_cobertura: string | null;
};
export type Punto_coberturaCountAggregateOutputType = {
    id_punto: number;
    id_empresa: number;
    latitud: number;
    longitud: number;
    densidad_cobertura: number;
    tipo_cobertura: number;
    _all: number;
};
export type Punto_coberturaAvgAggregateInputType = {
    id_punto?: true;
    id_empresa?: true;
    latitud?: true;
    longitud?: true;
    densidad_cobertura?: true;
};
export type Punto_coberturaSumAggregateInputType = {
    id_punto?: true;
    id_empresa?: true;
    latitud?: true;
    longitud?: true;
    densidad_cobertura?: true;
};
export type Punto_coberturaMinAggregateInputType = {
    id_punto?: true;
    id_empresa?: true;
    latitud?: true;
    longitud?: true;
    densidad_cobertura?: true;
    tipo_cobertura?: true;
};
export type Punto_coberturaMaxAggregateInputType = {
    id_punto?: true;
    id_empresa?: true;
    latitud?: true;
    longitud?: true;
    densidad_cobertura?: true;
    tipo_cobertura?: true;
};
export type Punto_coberturaCountAggregateInputType = {
    id_punto?: true;
    id_empresa?: true;
    latitud?: true;
    longitud?: true;
    densidad_cobertura?: true;
    tipo_cobertura?: true;
    _all?: true;
};
export type Punto_coberturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.punto_coberturaWhereInput;
    orderBy?: Prisma.punto_coberturaOrderByWithRelationInput | Prisma.punto_coberturaOrderByWithRelationInput[];
    cursor?: Prisma.punto_coberturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Punto_coberturaCountAggregateInputType;
    _avg?: Punto_coberturaAvgAggregateInputType;
    _sum?: Punto_coberturaSumAggregateInputType;
    _min?: Punto_coberturaMinAggregateInputType;
    _max?: Punto_coberturaMaxAggregateInputType;
};
export type GetPunto_coberturaAggregateType<T extends Punto_coberturaAggregateArgs> = {
    [P in keyof T & keyof AggregatePunto_cobertura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePunto_cobertura[P]> : Prisma.GetScalarType<T[P], AggregatePunto_cobertura[P]>;
};
export type punto_coberturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.punto_coberturaWhereInput;
    orderBy?: Prisma.punto_coberturaOrderByWithAggregationInput | Prisma.punto_coberturaOrderByWithAggregationInput[];
    by: Prisma.Punto_coberturaScalarFieldEnum[] | Prisma.Punto_coberturaScalarFieldEnum;
    having?: Prisma.punto_coberturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Punto_coberturaCountAggregateInputType | true;
    _avg?: Punto_coberturaAvgAggregateInputType;
    _sum?: Punto_coberturaSumAggregateInputType;
    _min?: Punto_coberturaMinAggregateInputType;
    _max?: Punto_coberturaMaxAggregateInputType;
};
export type Punto_coberturaGroupByOutputType = {
    id_punto: number;
    id_empresa: number | null;
    latitud: runtime.Decimal;
    longitud: runtime.Decimal;
    densidad_cobertura: runtime.Decimal | null;
    tipo_cobertura: string | null;
    _count: Punto_coberturaCountAggregateOutputType | null;
    _avg: Punto_coberturaAvgAggregateOutputType | null;
    _sum: Punto_coberturaSumAggregateOutputType | null;
    _min: Punto_coberturaMinAggregateOutputType | null;
    _max: Punto_coberturaMaxAggregateOutputType | null;
};
export type GetPunto_coberturaGroupByPayload<T extends punto_coberturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Punto_coberturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Punto_coberturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Punto_coberturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Punto_coberturaGroupByOutputType[P]>;
}>>;
export type punto_coberturaWhereInput = {
    AND?: Prisma.punto_coberturaWhereInput | Prisma.punto_coberturaWhereInput[];
    OR?: Prisma.punto_coberturaWhereInput[];
    NOT?: Prisma.punto_coberturaWhereInput | Prisma.punto_coberturaWhereInput[];
    id_punto?: Prisma.IntFilter<"punto_cobertura"> | number;
    id_empresa?: Prisma.IntNullableFilter<"punto_cobertura"> | number | null;
    latitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.DecimalNullableFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.StringNullableFilter<"punto_cobertura"> | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
};
export type punto_coberturaOrderByWithRelationInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_cobertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    empresa?: Prisma.empresaOrderByWithRelationInput;
};
export type punto_coberturaWhereUniqueInput = Prisma.AtLeast<{
    id_punto?: number;
    AND?: Prisma.punto_coberturaWhereInput | Prisma.punto_coberturaWhereInput[];
    OR?: Prisma.punto_coberturaWhereInput[];
    NOT?: Prisma.punto_coberturaWhereInput | Prisma.punto_coberturaWhereInput[];
    id_empresa?: Prisma.IntNullableFilter<"punto_cobertura"> | number | null;
    latitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.DecimalNullableFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.StringNullableFilter<"punto_cobertura"> | string | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
}, "id_punto">;
export type punto_coberturaOrderByWithAggregationInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    tipo_cobertura?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.punto_coberturaCountOrderByAggregateInput;
    _avg?: Prisma.punto_coberturaAvgOrderByAggregateInput;
    _max?: Prisma.punto_coberturaMaxOrderByAggregateInput;
    _min?: Prisma.punto_coberturaMinOrderByAggregateInput;
    _sum?: Prisma.punto_coberturaSumOrderByAggregateInput;
};
export type punto_coberturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.punto_coberturaScalarWhereWithAggregatesInput | Prisma.punto_coberturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.punto_coberturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.punto_coberturaScalarWhereWithAggregatesInput | Prisma.punto_coberturaScalarWhereWithAggregatesInput[];
    id_punto?: Prisma.IntWithAggregatesFilter<"punto_cobertura"> | number;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"punto_cobertura"> | number | null;
    latitud?: Prisma.DecimalWithAggregatesFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalWithAggregatesFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.DecimalNullableWithAggregatesFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.StringNullableWithAggregatesFilter<"punto_cobertura"> | string | null;
};
export type punto_coberturaCreateInput = {
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
    empresa?: Prisma.empresaCreateNestedOneWithoutPuntos_coberturaInput;
};
export type punto_coberturaUncheckedCreateInput = {
    id_punto?: number;
    id_empresa?: number | null;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
};
export type punto_coberturaUpdateInput = {
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    empresa?: Prisma.empresaUpdateOneWithoutPuntos_coberturaNestedInput;
};
export type punto_coberturaUncheckedUpdateInput = {
    id_punto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type punto_coberturaCreateManyInput = {
    id_punto?: number;
    id_empresa?: number | null;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
};
export type punto_coberturaUpdateManyMutationInput = {
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type punto_coberturaUncheckedUpdateManyInput = {
    id_punto?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Punto_coberturaListRelationFilter = {
    every?: Prisma.punto_coberturaWhereInput;
    some?: Prisma.punto_coberturaWhereInput;
    none?: Prisma.punto_coberturaWhereInput;
};
export type punto_coberturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type punto_coberturaCountOrderByAggregateInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrder;
    tipo_cobertura?: Prisma.SortOrder;
};
export type punto_coberturaAvgOrderByAggregateInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrder;
};
export type punto_coberturaMaxOrderByAggregateInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrder;
    tipo_cobertura?: Prisma.SortOrder;
};
export type punto_coberturaMinOrderByAggregateInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrder;
    tipo_cobertura?: Prisma.SortOrder;
};
export type punto_coberturaSumOrderByAggregateInput = {
    id_punto?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    latitud?: Prisma.SortOrder;
    longitud?: Prisma.SortOrder;
    densidad_cobertura?: Prisma.SortOrder;
};
export type punto_coberturaCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput> | Prisma.punto_coberturaCreateWithoutEmpresaInput[] | Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput | Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.punto_coberturaCreateManyEmpresaInputEnvelope;
    connect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
};
export type punto_coberturaUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput> | Prisma.punto_coberturaCreateWithoutEmpresaInput[] | Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput | Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.punto_coberturaCreateManyEmpresaInputEnvelope;
    connect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
};
export type punto_coberturaUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput> | Prisma.punto_coberturaCreateWithoutEmpresaInput[] | Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput | Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.punto_coberturaUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.punto_coberturaUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.punto_coberturaCreateManyEmpresaInputEnvelope;
    set?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    disconnect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    delete?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    connect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    update?: Prisma.punto_coberturaUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.punto_coberturaUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.punto_coberturaUpdateManyWithWhereWithoutEmpresaInput | Prisma.punto_coberturaUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.punto_coberturaScalarWhereInput | Prisma.punto_coberturaScalarWhereInput[];
};
export type punto_coberturaUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput> | Prisma.punto_coberturaCreateWithoutEmpresaInput[] | Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput | Prisma.punto_coberturaCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.punto_coberturaUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.punto_coberturaUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.punto_coberturaCreateManyEmpresaInputEnvelope;
    set?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    disconnect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    delete?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    connect?: Prisma.punto_coberturaWhereUniqueInput | Prisma.punto_coberturaWhereUniqueInput[];
    update?: Prisma.punto_coberturaUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.punto_coberturaUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.punto_coberturaUpdateManyWithWhereWithoutEmpresaInput | Prisma.punto_coberturaUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.punto_coberturaScalarWhereInput | Prisma.punto_coberturaScalarWhereInput[];
};
export type punto_coberturaCreateWithoutEmpresaInput = {
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
};
export type punto_coberturaUncheckedCreateWithoutEmpresaInput = {
    id_punto?: number;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
};
export type punto_coberturaCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.punto_coberturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput>;
};
export type punto_coberturaCreateManyEmpresaInputEnvelope = {
    data: Prisma.punto_coberturaCreateManyEmpresaInput | Prisma.punto_coberturaCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type punto_coberturaUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.punto_coberturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.punto_coberturaUpdateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.punto_coberturaCreateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedCreateWithoutEmpresaInput>;
};
export type punto_coberturaUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.punto_coberturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.punto_coberturaUpdateWithoutEmpresaInput, Prisma.punto_coberturaUncheckedUpdateWithoutEmpresaInput>;
};
export type punto_coberturaUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.punto_coberturaScalarWhereInput;
    data: Prisma.XOR<Prisma.punto_coberturaUpdateManyMutationInput, Prisma.punto_coberturaUncheckedUpdateManyWithoutEmpresaInput>;
};
export type punto_coberturaScalarWhereInput = {
    AND?: Prisma.punto_coberturaScalarWhereInput | Prisma.punto_coberturaScalarWhereInput[];
    OR?: Prisma.punto_coberturaScalarWhereInput[];
    NOT?: Prisma.punto_coberturaScalarWhereInput | Prisma.punto_coberturaScalarWhereInput[];
    id_punto?: Prisma.IntFilter<"punto_cobertura"> | number;
    id_empresa?: Prisma.IntNullableFilter<"punto_cobertura"> | number | null;
    latitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.DecimalNullableFilter<"punto_cobertura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.StringNullableFilter<"punto_cobertura"> | string | null;
};
export type punto_coberturaCreateManyEmpresaInput = {
    id_punto?: number;
    latitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud: runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: string | null;
};
export type punto_coberturaUpdateWithoutEmpresaInput = {
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type punto_coberturaUncheckedUpdateWithoutEmpresaInput = {
    id_punto?: Prisma.IntFieldUpdateOperationsInput | number;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type punto_coberturaUncheckedUpdateManyWithoutEmpresaInput = {
    id_punto?: Prisma.IntFieldUpdateOperationsInput | number;
    latitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    longitud?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    densidad_cobertura?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    tipo_cobertura?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type punto_coberturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_punto?: boolean;
    id_empresa?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    densidad_cobertura?: boolean;
    tipo_cobertura?: boolean;
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["punto_cobertura"]>;
export type punto_coberturaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_punto?: boolean;
    id_empresa?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    densidad_cobertura?: boolean;
    tipo_cobertura?: boolean;
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["punto_cobertura"]>;
export type punto_coberturaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_punto?: boolean;
    id_empresa?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    densidad_cobertura?: boolean;
    tipo_cobertura?: boolean;
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["punto_cobertura"]>;
export type punto_coberturaSelectScalar = {
    id_punto?: boolean;
    id_empresa?: boolean;
    latitud?: boolean;
    longitud?: boolean;
    densidad_cobertura?: boolean;
    tipo_cobertura?: boolean;
};
export type punto_coberturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_punto" | "id_empresa" | "latitud" | "longitud" | "densidad_cobertura" | "tipo_cobertura", ExtArgs["result"]["punto_cobertura"]>;
export type punto_coberturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
};
export type punto_coberturaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
};
export type punto_coberturaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    empresa?: boolean | Prisma.punto_cobertura$empresaArgs<ExtArgs>;
};
export type $punto_coberturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "punto_cobertura";
    objects: {
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_punto: number;
        id_empresa: number | null;
        latitud: runtime.Decimal;
        longitud: runtime.Decimal;
        densidad_cobertura: runtime.Decimal | null;
        tipo_cobertura: string | null;
    }, ExtArgs["result"]["punto_cobertura"]>;
    composites: {};
};
export type punto_coberturaGetPayload<S extends boolean | null | undefined | punto_coberturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload, S>;
export type punto_coberturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<punto_coberturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Punto_coberturaCountAggregateInputType | true;
};
export interface punto_coberturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['punto_cobertura'];
        meta: {
            name: 'punto_cobertura';
        };
    };
    findUnique<T extends punto_coberturaFindUniqueArgs>(args: Prisma.SelectSubset<T, punto_coberturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends punto_coberturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, punto_coberturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends punto_coberturaFindFirstArgs>(args?: Prisma.SelectSubset<T, punto_coberturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends punto_coberturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, punto_coberturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends punto_coberturaFindManyArgs>(args?: Prisma.SelectSubset<T, punto_coberturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends punto_coberturaCreateArgs>(args: Prisma.SelectSubset<T, punto_coberturaCreateArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends punto_coberturaCreateManyArgs>(args?: Prisma.SelectSubset<T, punto_coberturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends punto_coberturaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, punto_coberturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends punto_coberturaDeleteArgs>(args: Prisma.SelectSubset<T, punto_coberturaDeleteArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends punto_coberturaUpdateArgs>(args: Prisma.SelectSubset<T, punto_coberturaUpdateArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends punto_coberturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, punto_coberturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends punto_coberturaUpdateManyArgs>(args: Prisma.SelectSubset<T, punto_coberturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends punto_coberturaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, punto_coberturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends punto_coberturaUpsertArgs>(args: Prisma.SelectSubset<T, punto_coberturaUpsertArgs<ExtArgs>>): Prisma.Prisma__punto_coberturaClient<runtime.Types.Result.GetResult<Prisma.$punto_coberturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends punto_coberturaCountArgs>(args?: Prisma.Subset<T, punto_coberturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Punto_coberturaCountAggregateOutputType> : number>;
    aggregate<T extends Punto_coberturaAggregateArgs>(args: Prisma.Subset<T, Punto_coberturaAggregateArgs>): Prisma.PrismaPromise<GetPunto_coberturaAggregateType<T>>;
    groupBy<T extends punto_coberturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: punto_coberturaGroupByArgs['orderBy'];
    } : {
        orderBy?: punto_coberturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, punto_coberturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPunto_coberturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: punto_coberturaFieldRefs;
}
export interface Prisma__punto_coberturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    empresa<T extends Prisma.punto_cobertura$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.punto_cobertura$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface punto_coberturaFieldRefs {
    readonly id_punto: Prisma.FieldRef<"punto_cobertura", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"punto_cobertura", 'Int'>;
    readonly latitud: Prisma.FieldRef<"punto_cobertura", 'Decimal'>;
    readonly longitud: Prisma.FieldRef<"punto_cobertura", 'Decimal'>;
    readonly densidad_cobertura: Prisma.FieldRef<"punto_cobertura", 'Decimal'>;
    readonly tipo_cobertura: Prisma.FieldRef<"punto_cobertura", 'String'>;
}
export type punto_coberturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where: Prisma.punto_coberturaWhereUniqueInput;
};
export type punto_coberturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where: Prisma.punto_coberturaWhereUniqueInput;
};
export type punto_coberturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where?: Prisma.punto_coberturaWhereInput;
    orderBy?: Prisma.punto_coberturaOrderByWithRelationInput | Prisma.punto_coberturaOrderByWithRelationInput[];
    cursor?: Prisma.punto_coberturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Punto_coberturaScalarFieldEnum | Prisma.Punto_coberturaScalarFieldEnum[];
};
export type punto_coberturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where?: Prisma.punto_coberturaWhereInput;
    orderBy?: Prisma.punto_coberturaOrderByWithRelationInput | Prisma.punto_coberturaOrderByWithRelationInput[];
    cursor?: Prisma.punto_coberturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Punto_coberturaScalarFieldEnum | Prisma.Punto_coberturaScalarFieldEnum[];
};
export type punto_coberturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where?: Prisma.punto_coberturaWhereInput;
    orderBy?: Prisma.punto_coberturaOrderByWithRelationInput | Prisma.punto_coberturaOrderByWithRelationInput[];
    cursor?: Prisma.punto_coberturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Punto_coberturaScalarFieldEnum | Prisma.Punto_coberturaScalarFieldEnum[];
};
export type punto_coberturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.punto_coberturaCreateInput, Prisma.punto_coberturaUncheckedCreateInput>;
};
export type punto_coberturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.punto_coberturaCreateManyInput | Prisma.punto_coberturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type punto_coberturaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    data: Prisma.punto_coberturaCreateManyInput | Prisma.punto_coberturaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.punto_coberturaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type punto_coberturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.punto_coberturaUpdateInput, Prisma.punto_coberturaUncheckedUpdateInput>;
    where: Prisma.punto_coberturaWhereUniqueInput;
};
export type punto_coberturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.punto_coberturaUpdateManyMutationInput, Prisma.punto_coberturaUncheckedUpdateManyInput>;
    where?: Prisma.punto_coberturaWhereInput;
    limit?: number;
};
export type punto_coberturaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.punto_coberturaUpdateManyMutationInput, Prisma.punto_coberturaUncheckedUpdateManyInput>;
    where?: Prisma.punto_coberturaWhereInput;
    limit?: number;
    include?: Prisma.punto_coberturaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type punto_coberturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where: Prisma.punto_coberturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.punto_coberturaCreateInput, Prisma.punto_coberturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.punto_coberturaUpdateInput, Prisma.punto_coberturaUncheckedUpdateInput>;
};
export type punto_coberturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
    where: Prisma.punto_coberturaWhereUniqueInput;
};
export type punto_coberturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.punto_coberturaWhereInput;
    limit?: number;
};
export type punto_cobertura$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type punto_coberturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.punto_coberturaSelect<ExtArgs> | null;
    omit?: Prisma.punto_coberturaOmit<ExtArgs> | null;
    include?: Prisma.punto_coberturaInclude<ExtArgs> | null;
};
