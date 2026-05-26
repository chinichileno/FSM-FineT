import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type monitoreo_ontModel = runtime.Types.Result.DefaultSelection<Prisma.$monitoreo_ontPayload>;
export type AggregateMonitoreo_ont = {
    _count: Monitoreo_ontCountAggregateOutputType | null;
    _avg: Monitoreo_ontAvgAggregateOutputType | null;
    _sum: Monitoreo_ontSumAggregateOutputType | null;
    _min: Monitoreo_ontMinAggregateOutputType | null;
    _max: Monitoreo_ontMaxAggregateOutputType | null;
};
export type Monitoreo_ontAvgAggregateOutputType = {
    id_monitoreo: number | null;
    id_unidad: number | null;
    id_cliente: number | null;
    id_caja_nap: number | null;
    potencia_actual_dbm: runtime.Decimal | null;
};
export type Monitoreo_ontSumAggregateOutputType = {
    id_monitoreo: bigint | null;
    id_unidad: number | null;
    id_cliente: number | null;
    id_caja_nap: number | null;
    potencia_actual_dbm: runtime.Decimal | null;
};
export type Monitoreo_ontMinAggregateOutputType = {
    id_monitoreo: bigint | null;
    id_unidad: number | null;
    id_cliente: number | null;
    id_caja_nap: number | null;
    potencia_actual_dbm: runtime.Decimal | null;
    timestamp_medicion: Date | null;
    estado_conexion: string | null;
};
export type Monitoreo_ontMaxAggregateOutputType = {
    id_monitoreo: bigint | null;
    id_unidad: number | null;
    id_cliente: number | null;
    id_caja_nap: number | null;
    potencia_actual_dbm: runtime.Decimal | null;
    timestamp_medicion: Date | null;
    estado_conexion: string | null;
};
export type Monitoreo_ontCountAggregateOutputType = {
    id_monitoreo: number;
    id_unidad: number;
    id_cliente: number;
    id_caja_nap: number;
    potencia_actual_dbm: number;
    timestamp_medicion: number;
    estado_conexion: number;
    _all: number;
};
export type Monitoreo_ontAvgAggregateInputType = {
    id_monitoreo?: true;
    id_unidad?: true;
    id_cliente?: true;
    id_caja_nap?: true;
    potencia_actual_dbm?: true;
};
export type Monitoreo_ontSumAggregateInputType = {
    id_monitoreo?: true;
    id_unidad?: true;
    id_cliente?: true;
    id_caja_nap?: true;
    potencia_actual_dbm?: true;
};
export type Monitoreo_ontMinAggregateInputType = {
    id_monitoreo?: true;
    id_unidad?: true;
    id_cliente?: true;
    id_caja_nap?: true;
    potencia_actual_dbm?: true;
    timestamp_medicion?: true;
    estado_conexion?: true;
};
export type Monitoreo_ontMaxAggregateInputType = {
    id_monitoreo?: true;
    id_unidad?: true;
    id_cliente?: true;
    id_caja_nap?: true;
    potencia_actual_dbm?: true;
    timestamp_medicion?: true;
    estado_conexion?: true;
};
export type Monitoreo_ontCountAggregateInputType = {
    id_monitoreo?: true;
    id_unidad?: true;
    id_cliente?: true;
    id_caja_nap?: true;
    potencia_actual_dbm?: true;
    timestamp_medicion?: true;
    estado_conexion?: true;
    _all?: true;
};
export type Monitoreo_ontAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithRelationInput | Prisma.monitoreo_ontOrderByWithRelationInput[];
    cursor?: Prisma.monitoreo_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Monitoreo_ontCountAggregateInputType;
    _avg?: Monitoreo_ontAvgAggregateInputType;
    _sum?: Monitoreo_ontSumAggregateInputType;
    _min?: Monitoreo_ontMinAggregateInputType;
    _max?: Monitoreo_ontMaxAggregateInputType;
};
export type GetMonitoreo_ontAggregateType<T extends Monitoreo_ontAggregateArgs> = {
    [P in keyof T & keyof AggregateMonitoreo_ont]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMonitoreo_ont[P]> : Prisma.GetScalarType<T[P], AggregateMonitoreo_ont[P]>;
};
export type monitoreo_ontGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithAggregationInput | Prisma.monitoreo_ontOrderByWithAggregationInput[];
    by: Prisma.Monitoreo_ontScalarFieldEnum[] | Prisma.Monitoreo_ontScalarFieldEnum;
    having?: Prisma.monitoreo_ontScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Monitoreo_ontCountAggregateInputType | true;
    _avg?: Monitoreo_ontAvgAggregateInputType;
    _sum?: Monitoreo_ontSumAggregateInputType;
    _min?: Monitoreo_ontMinAggregateInputType;
    _max?: Monitoreo_ontMaxAggregateInputType;
};
export type Monitoreo_ontGroupByOutputType = {
    id_monitoreo: bigint;
    id_unidad: number | null;
    id_cliente: number | null;
    id_caja_nap: number | null;
    potencia_actual_dbm: runtime.Decimal | null;
    timestamp_medicion: Date;
    estado_conexion: string | null;
    _count: Monitoreo_ontCountAggregateOutputType | null;
    _avg: Monitoreo_ontAvgAggregateOutputType | null;
    _sum: Monitoreo_ontSumAggregateOutputType | null;
    _min: Monitoreo_ontMinAggregateOutputType | null;
    _max: Monitoreo_ontMaxAggregateOutputType | null;
};
export type GetMonitoreo_ontGroupByPayload<T extends monitoreo_ontGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Monitoreo_ontGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Monitoreo_ontGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Monitoreo_ontGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Monitoreo_ontGroupByOutputType[P]>;
}>>;
export type monitoreo_ontWhereInput = {
    AND?: Prisma.monitoreo_ontWhereInput | Prisma.monitoreo_ontWhereInput[];
    OR?: Prisma.monitoreo_ontWhereInput[];
    NOT?: Prisma.monitoreo_ontWhereInput | Prisma.monitoreo_ontWhereInput[];
    id_monitoreo?: Prisma.BigIntFilter<"monitoreo_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_caja_nap?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    potencia_actual_dbm?: Prisma.DecimalNullableFilter<"monitoreo_ont"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFilter<"monitoreo_ont"> | Date | string;
    estado_conexion?: Prisma.StringNullableFilter<"monitoreo_ont"> | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    caja_nap?: Prisma.XOR<Prisma.Caja_napNullableScalarRelationFilter, Prisma.caja_napWhereInput> | null;
};
export type monitoreo_ontOrderByWithRelationInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrderInput | Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp_medicion?: Prisma.SortOrder;
    estado_conexion?: Prisma.SortOrderInput | Prisma.SortOrder;
    unidad?: Prisma.unidad_equipoOrderByWithRelationInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    caja_nap?: Prisma.caja_napOrderByWithRelationInput;
};
export type monitoreo_ontWhereUniqueInput = Prisma.AtLeast<{
    id_monitoreo?: bigint | number;
    AND?: Prisma.monitoreo_ontWhereInput | Prisma.monitoreo_ontWhereInput[];
    OR?: Prisma.monitoreo_ontWhereInput[];
    NOT?: Prisma.monitoreo_ontWhereInput | Prisma.monitoreo_ontWhereInput[];
    id_unidad?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_caja_nap?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    potencia_actual_dbm?: Prisma.DecimalNullableFilter<"monitoreo_ont"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFilter<"monitoreo_ont"> | Date | string;
    estado_conexion?: Prisma.StringNullableFilter<"monitoreo_ont"> | string | null;
    unidad?: Prisma.XOR<Prisma.Unidad_equipoNullableScalarRelationFilter, Prisma.unidad_equipoWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    caja_nap?: Prisma.XOR<Prisma.Caja_napNullableScalarRelationFilter, Prisma.caja_napWhereInput> | null;
}, "id_monitoreo">;
export type monitoreo_ontOrderByWithAggregationInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrderInput | Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrderInput | Prisma.SortOrder;
    timestamp_medicion?: Prisma.SortOrder;
    estado_conexion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.monitoreo_ontCountOrderByAggregateInput;
    _avg?: Prisma.monitoreo_ontAvgOrderByAggregateInput;
    _max?: Prisma.monitoreo_ontMaxOrderByAggregateInput;
    _min?: Prisma.monitoreo_ontMinOrderByAggregateInput;
    _sum?: Prisma.monitoreo_ontSumOrderByAggregateInput;
};
export type monitoreo_ontScalarWhereWithAggregatesInput = {
    AND?: Prisma.monitoreo_ontScalarWhereWithAggregatesInput | Prisma.monitoreo_ontScalarWhereWithAggregatesInput[];
    OR?: Prisma.monitoreo_ontScalarWhereWithAggregatesInput[];
    NOT?: Prisma.monitoreo_ontScalarWhereWithAggregatesInput | Prisma.monitoreo_ontScalarWhereWithAggregatesInput[];
    id_monitoreo?: Prisma.BigIntWithAggregatesFilter<"monitoreo_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableWithAggregatesFilter<"monitoreo_ont"> | number | null;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"monitoreo_ont"> | number | null;
    id_caja_nap?: Prisma.IntNullableWithAggregatesFilter<"monitoreo_ont"> | number | null;
    potencia_actual_dbm?: Prisma.DecimalNullableWithAggregatesFilter<"monitoreo_ont"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeWithAggregatesFilter<"monitoreo_ont"> | Date | string;
    estado_conexion?: Prisma.StringNullableWithAggregatesFilter<"monitoreo_ont"> | string | null;
};
export type monitoreo_ontCreateInput = {
    id_monitoreo?: bigint | number;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMonitoreoInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutMonitoreoInput;
    caja_nap?: Prisma.caja_napCreateNestedOneWithoutMonitoreoInput;
};
export type monitoreo_ontUncheckedCreateInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_cliente?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontUpdateInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMonitoreoNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutMonitoreoNestedInput;
    caja_nap?: Prisma.caja_napUpdateOneWithoutMonitoreoNestedInput;
};
export type monitoreo_ontUncheckedUpdateInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontCreateManyInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_cliente?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontUpdateManyMutationInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontUncheckedUpdateManyInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Monitoreo_ontListRelationFilter = {
    every?: Prisma.monitoreo_ontWhereInput;
    some?: Prisma.monitoreo_ontWhereInput;
    none?: Prisma.monitoreo_ontWhereInput;
};
export type monitoreo_ontOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type monitoreo_ontCountOrderByAggregateInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrder;
    timestamp_medicion?: Prisma.SortOrder;
    estado_conexion?: Prisma.SortOrder;
};
export type monitoreo_ontAvgOrderByAggregateInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrder;
};
export type monitoreo_ontMaxOrderByAggregateInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrder;
    timestamp_medicion?: Prisma.SortOrder;
    estado_conexion?: Prisma.SortOrder;
};
export type monitoreo_ontMinOrderByAggregateInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrder;
    timestamp_medicion?: Prisma.SortOrder;
    estado_conexion?: Prisma.SortOrder;
};
export type monitoreo_ontSumOrderByAggregateInput = {
    id_monitoreo?: Prisma.SortOrder;
    id_unidad?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_caja_nap?: Prisma.SortOrder;
    potencia_actual_dbm?: Prisma.SortOrder;
};
export type monitoreo_ontCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput> | Prisma.monitoreo_ontCreateWithoutClienteInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput | Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.monitoreo_ontCreateManyClienteInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput> | Prisma.monitoreo_ontCreateWithoutClienteInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput | Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.monitoreo_ontCreateManyClienteInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput> | Prisma.monitoreo_ontCreateWithoutClienteInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput | Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutClienteInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.monitoreo_ontCreateManyClienteInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutClienteInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutClienteInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput> | Prisma.monitoreo_ontCreateWithoutClienteInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput | Prisma.monitoreo_ontCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutClienteInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.monitoreo_ontCreateManyClienteInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutClienteInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutClienteInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput> | Prisma.monitoreo_ontCreateWithoutUnidadInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput | Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.monitoreo_ontCreateManyUnidadInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput> | Prisma.monitoreo_ontCreateWithoutUnidadInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput | Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput[];
    createMany?: Prisma.monitoreo_ontCreateManyUnidadInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput> | Prisma.monitoreo_ontCreateWithoutUnidadInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput | Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutUnidadInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.monitoreo_ontCreateManyUnidadInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutUnidadInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutUnidadInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput> | Prisma.monitoreo_ontCreateWithoutUnidadInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput | Prisma.monitoreo_ontCreateOrConnectWithoutUnidadInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutUnidadInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutUnidadInput[];
    createMany?: Prisma.monitoreo_ontCreateManyUnidadInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutUnidadInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutUnidadInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutUnidadInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutUnidadInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontCreateNestedManyWithoutCaja_napInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput> | Prisma.monitoreo_ontCreateWithoutCaja_napInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput | Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput[];
    createMany?: Prisma.monitoreo_ontCreateManyCaja_napInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUncheckedCreateNestedManyWithoutCaja_napInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput> | Prisma.monitoreo_ontCreateWithoutCaja_napInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput | Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput[];
    createMany?: Prisma.monitoreo_ontCreateManyCaja_napInputEnvelope;
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
};
export type monitoreo_ontUpdateManyWithoutCaja_napNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput> | Prisma.monitoreo_ontCreateWithoutCaja_napInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput | Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutCaja_napInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutCaja_napInput[];
    createMany?: Prisma.monitoreo_ontCreateManyCaja_napInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutCaja_napInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutCaja_napInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutCaja_napInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutCaja_napInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontUncheckedUpdateManyWithoutCaja_napNestedInput = {
    create?: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput> | Prisma.monitoreo_ontCreateWithoutCaja_napInput[] | Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput[];
    connectOrCreate?: Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput | Prisma.monitoreo_ontCreateOrConnectWithoutCaja_napInput[];
    upsert?: Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutCaja_napInput | Prisma.monitoreo_ontUpsertWithWhereUniqueWithoutCaja_napInput[];
    createMany?: Prisma.monitoreo_ontCreateManyCaja_napInputEnvelope;
    set?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    disconnect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    delete?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    connect?: Prisma.monitoreo_ontWhereUniqueInput | Prisma.monitoreo_ontWhereUniqueInput[];
    update?: Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutCaja_napInput | Prisma.monitoreo_ontUpdateWithWhereUniqueWithoutCaja_napInput[];
    updateMany?: Prisma.monitoreo_ontUpdateManyWithWhereWithoutCaja_napInput | Prisma.monitoreo_ontUpdateManyWithWhereWithoutCaja_napInput[];
    deleteMany?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
};
export type monitoreo_ontCreateWithoutClienteInput = {
    id_monitoreo?: bigint | number;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMonitoreoInput;
    caja_nap?: Prisma.caja_napCreateNestedOneWithoutMonitoreoInput;
};
export type monitoreo_ontUncheckedCreateWithoutClienteInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontCreateOrConnectWithoutClienteInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput>;
};
export type monitoreo_ontCreateManyClienteInputEnvelope = {
    data: Prisma.monitoreo_ontCreateManyClienteInput | Prisma.monitoreo_ontCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type monitoreo_ontUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    update: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutClienteInput, Prisma.monitoreo_ontUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutClienteInput, Prisma.monitoreo_ontUncheckedCreateWithoutClienteInput>;
};
export type monitoreo_ontUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutClienteInput, Prisma.monitoreo_ontUncheckedUpdateWithoutClienteInput>;
};
export type monitoreo_ontUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.monitoreo_ontScalarWhereInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateManyMutationInput, Prisma.monitoreo_ontUncheckedUpdateManyWithoutClienteInput>;
};
export type monitoreo_ontScalarWhereInput = {
    AND?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
    OR?: Prisma.monitoreo_ontScalarWhereInput[];
    NOT?: Prisma.monitoreo_ontScalarWhereInput | Prisma.monitoreo_ontScalarWhereInput[];
    id_monitoreo?: Prisma.BigIntFilter<"monitoreo_ont"> | bigint | number;
    id_unidad?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    id_caja_nap?: Prisma.IntNullableFilter<"monitoreo_ont"> | number | null;
    potencia_actual_dbm?: Prisma.DecimalNullableFilter<"monitoreo_ont"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFilter<"monitoreo_ont"> | Date | string;
    estado_conexion?: Prisma.StringNullableFilter<"monitoreo_ont"> | string | null;
};
export type monitoreo_ontCreateWithoutUnidadInput = {
    id_monitoreo?: bigint | number;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutMonitoreoInput;
    caja_nap?: Prisma.caja_napCreateNestedOneWithoutMonitoreoInput;
};
export type monitoreo_ontUncheckedCreateWithoutUnidadInput = {
    id_monitoreo?: bigint | number;
    id_cliente?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontCreateOrConnectWithoutUnidadInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput>;
};
export type monitoreo_ontCreateManyUnidadInputEnvelope = {
    data: Prisma.monitoreo_ontCreateManyUnidadInput | Prisma.monitoreo_ontCreateManyUnidadInput[];
    skipDuplicates?: boolean;
};
export type monitoreo_ontUpsertWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    update: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedUpdateWithoutUnidadInput>;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedCreateWithoutUnidadInput>;
};
export type monitoreo_ontUpdateWithWhereUniqueWithoutUnidadInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutUnidadInput, Prisma.monitoreo_ontUncheckedUpdateWithoutUnidadInput>;
};
export type monitoreo_ontUpdateManyWithWhereWithoutUnidadInput = {
    where: Prisma.monitoreo_ontScalarWhereInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateManyMutationInput, Prisma.monitoreo_ontUncheckedUpdateManyWithoutUnidadInput>;
};
export type monitoreo_ontCreateWithoutCaja_napInput = {
    id_monitoreo?: bigint | number;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
    unidad?: Prisma.unidad_equipoCreateNestedOneWithoutMonitoreoInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutMonitoreoInput;
};
export type monitoreo_ontUncheckedCreateWithoutCaja_napInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_cliente?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontCreateOrConnectWithoutCaja_napInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput>;
};
export type monitoreo_ontCreateManyCaja_napInputEnvelope = {
    data: Prisma.monitoreo_ontCreateManyCaja_napInput | Prisma.monitoreo_ontCreateManyCaja_napInput[];
    skipDuplicates?: boolean;
};
export type monitoreo_ontUpsertWithWhereUniqueWithoutCaja_napInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    update: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedUpdateWithoutCaja_napInput>;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedCreateWithoutCaja_napInput>;
};
export type monitoreo_ontUpdateWithWhereUniqueWithoutCaja_napInput = {
    where: Prisma.monitoreo_ontWhereUniqueInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateWithoutCaja_napInput, Prisma.monitoreo_ontUncheckedUpdateWithoutCaja_napInput>;
};
export type monitoreo_ontUpdateManyWithWhereWithoutCaja_napInput = {
    where: Prisma.monitoreo_ontScalarWhereInput;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateManyMutationInput, Prisma.monitoreo_ontUncheckedUpdateManyWithoutCaja_napInput>;
};
export type monitoreo_ontCreateManyClienteInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontUpdateWithoutClienteInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMonitoreoNestedInput;
    caja_nap?: Prisma.caja_napUpdateOneWithoutMonitoreoNestedInput;
};
export type monitoreo_ontUncheckedUpdateWithoutClienteInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontUncheckedUpdateManyWithoutClienteInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontCreateManyUnidadInput = {
    id_monitoreo?: bigint | number;
    id_cliente?: number | null;
    id_caja_nap?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontUpdateWithoutUnidadInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutMonitoreoNestedInput;
    caja_nap?: Prisma.caja_napUpdateOneWithoutMonitoreoNestedInput;
};
export type monitoreo_ontUncheckedUpdateWithoutUnidadInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontUncheckedUpdateManyWithoutUnidadInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_caja_nap?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontCreateManyCaja_napInput = {
    id_monitoreo?: bigint | number;
    id_unidad?: number | null;
    id_cliente?: number | null;
    potencia_actual_dbm?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Date | string;
    estado_conexion?: string | null;
};
export type monitoreo_ontUpdateWithoutCaja_napInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    unidad?: Prisma.unidad_equipoUpdateOneWithoutMonitoreoNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutMonitoreoNestedInput;
};
export type monitoreo_ontUncheckedUpdateWithoutCaja_napInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontUncheckedUpdateManyWithoutCaja_napInput = {
    id_monitoreo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    id_unidad?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    potencia_actual_dbm?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    timestamp_medicion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado_conexion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type monitoreo_ontSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_monitoreo?: boolean;
    id_unidad?: boolean;
    id_cliente?: boolean;
    id_caja_nap?: boolean;
    potencia_actual_dbm?: boolean;
    timestamp_medicion?: boolean;
    estado_conexion?: boolean;
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
}, ExtArgs["result"]["monitoreo_ont"]>;
export type monitoreo_ontSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_monitoreo?: boolean;
    id_unidad?: boolean;
    id_cliente?: boolean;
    id_caja_nap?: boolean;
    potencia_actual_dbm?: boolean;
    timestamp_medicion?: boolean;
    estado_conexion?: boolean;
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
}, ExtArgs["result"]["monitoreo_ont"]>;
export type monitoreo_ontSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_monitoreo?: boolean;
    id_unidad?: boolean;
    id_cliente?: boolean;
    id_caja_nap?: boolean;
    potencia_actual_dbm?: boolean;
    timestamp_medicion?: boolean;
    estado_conexion?: boolean;
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
}, ExtArgs["result"]["monitoreo_ont"]>;
export type monitoreo_ontSelectScalar = {
    id_monitoreo?: boolean;
    id_unidad?: boolean;
    id_cliente?: boolean;
    id_caja_nap?: boolean;
    potencia_actual_dbm?: boolean;
    timestamp_medicion?: boolean;
    estado_conexion?: boolean;
};
export type monitoreo_ontOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_monitoreo" | "id_unidad" | "id_cliente" | "id_caja_nap" | "potencia_actual_dbm" | "timestamp_medicion" | "estado_conexion", ExtArgs["result"]["monitoreo_ont"]>;
export type monitoreo_ontInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
};
export type monitoreo_ontIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
};
export type monitoreo_ontIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    unidad?: boolean | Prisma.monitoreo_ont$unidadArgs<ExtArgs>;
    cliente?: boolean | Prisma.monitoreo_ont$clienteArgs<ExtArgs>;
    caja_nap?: boolean | Prisma.monitoreo_ont$caja_napArgs<ExtArgs>;
};
export type $monitoreo_ontPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "monitoreo_ont";
    objects: {
        unidad: Prisma.$unidad_equipoPayload<ExtArgs> | null;
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        caja_nap: Prisma.$caja_napPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_monitoreo: bigint;
        id_unidad: number | null;
        id_cliente: number | null;
        id_caja_nap: number | null;
        potencia_actual_dbm: runtime.Decimal | null;
        timestamp_medicion: Date;
        estado_conexion: string | null;
    }, ExtArgs["result"]["monitoreo_ont"]>;
    composites: {};
};
export type monitoreo_ontGetPayload<S extends boolean | null | undefined | monitoreo_ontDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload, S>;
export type monitoreo_ontCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<monitoreo_ontFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Monitoreo_ontCountAggregateInputType | true;
};
export interface monitoreo_ontDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['monitoreo_ont'];
        meta: {
            name: 'monitoreo_ont';
        };
    };
    findUnique<T extends monitoreo_ontFindUniqueArgs>(args: Prisma.SelectSubset<T, monitoreo_ontFindUniqueArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends monitoreo_ontFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, monitoreo_ontFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends monitoreo_ontFindFirstArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontFindFirstArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends monitoreo_ontFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends monitoreo_ontFindManyArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends monitoreo_ontCreateArgs>(args: Prisma.SelectSubset<T, monitoreo_ontCreateArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends monitoreo_ontCreateManyArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends monitoreo_ontCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends monitoreo_ontDeleteArgs>(args: Prisma.SelectSubset<T, monitoreo_ontDeleteArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends monitoreo_ontUpdateArgs>(args: Prisma.SelectSubset<T, monitoreo_ontUpdateArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends monitoreo_ontDeleteManyArgs>(args?: Prisma.SelectSubset<T, monitoreo_ontDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends monitoreo_ontUpdateManyArgs>(args: Prisma.SelectSubset<T, monitoreo_ontUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends monitoreo_ontUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, monitoreo_ontUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends monitoreo_ontUpsertArgs>(args: Prisma.SelectSubset<T, monitoreo_ontUpsertArgs<ExtArgs>>): Prisma.Prisma__monitoreo_ontClient<runtime.Types.Result.GetResult<Prisma.$monitoreo_ontPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends monitoreo_ontCountArgs>(args?: Prisma.Subset<T, monitoreo_ontCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Monitoreo_ontCountAggregateOutputType> : number>;
    aggregate<T extends Monitoreo_ontAggregateArgs>(args: Prisma.Subset<T, Monitoreo_ontAggregateArgs>): Prisma.PrismaPromise<GetMonitoreo_ontAggregateType<T>>;
    groupBy<T extends monitoreo_ontGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: monitoreo_ontGroupByArgs['orderBy'];
    } : {
        orderBy?: monitoreo_ontGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, monitoreo_ontGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonitoreo_ontGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: monitoreo_ontFieldRefs;
}
export interface Prisma__monitoreo_ontClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    unidad<T extends Prisma.monitoreo_ont$unidadArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.monitoreo_ont$unidadArgs<ExtArgs>>): Prisma.Prisma__unidad_equipoClient<runtime.Types.Result.GetResult<Prisma.$unidad_equipoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.monitoreo_ont$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.monitoreo_ont$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    caja_nap<T extends Prisma.monitoreo_ont$caja_napArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.monitoreo_ont$caja_napArgs<ExtArgs>>): Prisma.Prisma__caja_napClient<runtime.Types.Result.GetResult<Prisma.$caja_napPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface monitoreo_ontFieldRefs {
    readonly id_monitoreo: Prisma.FieldRef<"monitoreo_ont", 'BigInt'>;
    readonly id_unidad: Prisma.FieldRef<"monitoreo_ont", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"monitoreo_ont", 'Int'>;
    readonly id_caja_nap: Prisma.FieldRef<"monitoreo_ont", 'Int'>;
    readonly potencia_actual_dbm: Prisma.FieldRef<"monitoreo_ont", 'Decimal'>;
    readonly timestamp_medicion: Prisma.FieldRef<"monitoreo_ont", 'DateTime'>;
    readonly estado_conexion: Prisma.FieldRef<"monitoreo_ont", 'String'>;
}
export type monitoreo_ontFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where: Prisma.monitoreo_ontWhereUniqueInput;
};
export type monitoreo_ontFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where: Prisma.monitoreo_ontWhereUniqueInput;
};
export type monitoreo_ontFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithRelationInput | Prisma.monitoreo_ontOrderByWithRelationInput[];
    cursor?: Prisma.monitoreo_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Monitoreo_ontScalarFieldEnum | Prisma.Monitoreo_ontScalarFieldEnum[];
};
export type monitoreo_ontFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithRelationInput | Prisma.monitoreo_ontOrderByWithRelationInput[];
    cursor?: Prisma.monitoreo_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Monitoreo_ontScalarFieldEnum | Prisma.Monitoreo_ontScalarFieldEnum[];
};
export type monitoreo_ontFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where?: Prisma.monitoreo_ontWhereInput;
    orderBy?: Prisma.monitoreo_ontOrderByWithRelationInput | Prisma.monitoreo_ontOrderByWithRelationInput[];
    cursor?: Prisma.monitoreo_ontWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Monitoreo_ontScalarFieldEnum | Prisma.Monitoreo_ontScalarFieldEnum[];
};
export type monitoreo_ontCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.monitoreo_ontCreateInput, Prisma.monitoreo_ontUncheckedCreateInput>;
};
export type monitoreo_ontCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.monitoreo_ontCreateManyInput | Prisma.monitoreo_ontCreateManyInput[];
    skipDuplicates?: boolean;
};
export type monitoreo_ontCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    data: Prisma.monitoreo_ontCreateManyInput | Prisma.monitoreo_ontCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.monitoreo_ontIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type monitoreo_ontUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateInput, Prisma.monitoreo_ontUncheckedUpdateInput>;
    where: Prisma.monitoreo_ontWhereUniqueInput;
};
export type monitoreo_ontUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateManyMutationInput, Prisma.monitoreo_ontUncheckedUpdateManyInput>;
    where?: Prisma.monitoreo_ontWhereInput;
    limit?: number;
};
export type monitoreo_ontUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.monitoreo_ontUpdateManyMutationInput, Prisma.monitoreo_ontUncheckedUpdateManyInput>;
    where?: Prisma.monitoreo_ontWhereInput;
    limit?: number;
    include?: Prisma.monitoreo_ontIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type monitoreo_ontUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where: Prisma.monitoreo_ontWhereUniqueInput;
    create: Prisma.XOR<Prisma.monitoreo_ontCreateInput, Prisma.monitoreo_ontUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.monitoreo_ontUpdateInput, Prisma.monitoreo_ontUncheckedUpdateInput>;
};
export type monitoreo_ontDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
    where: Prisma.monitoreo_ontWhereUniqueInput;
};
export type monitoreo_ontDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.monitoreo_ontWhereInput;
    limit?: number;
};
export type monitoreo_ont$unidadArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.unidad_equipoSelect<ExtArgs> | null;
    omit?: Prisma.unidad_equipoOmit<ExtArgs> | null;
    include?: Prisma.unidad_equipoInclude<ExtArgs> | null;
    where?: Prisma.unidad_equipoWhereInput;
};
export type monitoreo_ont$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type monitoreo_ont$caja_napArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.caja_napSelect<ExtArgs> | null;
    omit?: Prisma.caja_napOmit<ExtArgs> | null;
    include?: Prisma.caja_napInclude<ExtArgs> | null;
    where?: Prisma.caja_napWhereInput;
};
export type monitoreo_ontDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.monitoreo_ontSelect<ExtArgs> | null;
    omit?: Prisma.monitoreo_ontOmit<ExtArgs> | null;
    include?: Prisma.monitoreo_ontInclude<ExtArgs> | null;
};
