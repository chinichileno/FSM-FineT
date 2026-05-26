import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type contratoModel = runtime.Types.Result.DefaultSelection<Prisma.$contratoPayload>;
export type AggregateContrato = {
    _count: ContratoCountAggregateOutputType | null;
    _avg: ContratoAvgAggregateOutputType | null;
    _sum: ContratoSumAggregateOutputType | null;
    _min: ContratoMinAggregateOutputType | null;
    _max: ContratoMaxAggregateOutputType | null;
};
export type ContratoAvgAggregateOutputType = {
    id_contrato: number | null;
    id_cliente: number | null;
    id_plan: number | null;
    id_empresa: number | null;
    dia_vencimiento: number | null;
};
export type ContratoSumAggregateOutputType = {
    id_contrato: number | null;
    id_cliente: number | null;
    id_plan: number | null;
    id_empresa: number | null;
    dia_vencimiento: number | null;
};
export type ContratoMinAggregateOutputType = {
    id_contrato: number | null;
    id_cliente: number | null;
    id_plan: number | null;
    id_empresa: number | null;
    fecha_inicio: Date | null;
    dia_vencimiento: number | null;
    estado: string | null;
    fecha_suspension: Date | null;
};
export type ContratoMaxAggregateOutputType = {
    id_contrato: number | null;
    id_cliente: number | null;
    id_plan: number | null;
    id_empresa: number | null;
    fecha_inicio: Date | null;
    dia_vencimiento: number | null;
    estado: string | null;
    fecha_suspension: Date | null;
};
export type ContratoCountAggregateOutputType = {
    id_contrato: number;
    id_cliente: number;
    id_plan: number;
    id_empresa: number;
    fecha_inicio: number;
    dia_vencimiento: number;
    estado: number;
    fecha_suspension: number;
    _all: number;
};
export type ContratoAvgAggregateInputType = {
    id_contrato?: true;
    id_cliente?: true;
    id_plan?: true;
    id_empresa?: true;
    dia_vencimiento?: true;
};
export type ContratoSumAggregateInputType = {
    id_contrato?: true;
    id_cliente?: true;
    id_plan?: true;
    id_empresa?: true;
    dia_vencimiento?: true;
};
export type ContratoMinAggregateInputType = {
    id_contrato?: true;
    id_cliente?: true;
    id_plan?: true;
    id_empresa?: true;
    fecha_inicio?: true;
    dia_vencimiento?: true;
    estado?: true;
    fecha_suspension?: true;
};
export type ContratoMaxAggregateInputType = {
    id_contrato?: true;
    id_cliente?: true;
    id_plan?: true;
    id_empresa?: true;
    fecha_inicio?: true;
    dia_vencimiento?: true;
    estado?: true;
    fecha_suspension?: true;
};
export type ContratoCountAggregateInputType = {
    id_contrato?: true;
    id_cliente?: true;
    id_plan?: true;
    id_empresa?: true;
    fecha_inicio?: true;
    dia_vencimiento?: true;
    estado?: true;
    fecha_suspension?: true;
    _all?: true;
};
export type ContratoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContratoCountAggregateInputType;
    _avg?: ContratoAvgAggregateInputType;
    _sum?: ContratoSumAggregateInputType;
    _min?: ContratoMinAggregateInputType;
    _max?: ContratoMaxAggregateInputType;
};
export type GetContratoAggregateType<T extends ContratoAggregateArgs> = {
    [P in keyof T & keyof AggregateContrato]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContrato[P]> : Prisma.GetScalarType<T[P], AggregateContrato[P]>;
};
export type contratoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithAggregationInput | Prisma.contratoOrderByWithAggregationInput[];
    by: Prisma.ContratoScalarFieldEnum[] | Prisma.ContratoScalarFieldEnum;
    having?: Prisma.contratoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContratoCountAggregateInputType | true;
    _avg?: ContratoAvgAggregateInputType;
    _sum?: ContratoSumAggregateInputType;
    _min?: ContratoMinAggregateInputType;
    _max?: ContratoMaxAggregateInputType;
};
export type ContratoGroupByOutputType = {
    id_contrato: number;
    id_cliente: number | null;
    id_plan: number | null;
    id_empresa: number | null;
    fecha_inicio: Date;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension: Date | null;
    _count: ContratoCountAggregateOutputType | null;
    _avg: ContratoAvgAggregateOutputType | null;
    _sum: ContratoSumAggregateOutputType | null;
    _min: ContratoMinAggregateOutputType | null;
    _max: ContratoMaxAggregateOutputType | null;
};
export type GetContratoGroupByPayload<T extends contratoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContratoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContratoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContratoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContratoGroupByOutputType[P]>;
}>>;
export type contratoWhereInput = {
    AND?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    OR?: Prisma.contratoWhereInput[];
    NOT?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    id_contrato?: Prisma.IntFilter<"contrato"> | number;
    id_cliente?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"contrato"> | number | null;
    fecha_inicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    dia_vencimiento?: Prisma.IntFilter<"contrato"> | number;
    estado?: Prisma.StringFilter<"contrato"> | string;
    fecha_suspension?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.planWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    facturas?: Prisma.FacturaListRelationFilter;
    credenciales_tvip?: Prisma.XOR<Prisma.Credenciales_tvipNullableScalarRelationFilter, Prisma.credenciales_tvipWhereInput> | null;
};
export type contratoOrderByWithRelationInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plan?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha_suspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    plan?: Prisma.planOrderByWithRelationInput;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    facturas?: Prisma.facturaOrderByRelationAggregateInput;
    credenciales_tvip?: Prisma.credenciales_tvipOrderByWithRelationInput;
};
export type contratoWhereUniqueInput = Prisma.AtLeast<{
    id_contrato?: number;
    AND?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    OR?: Prisma.contratoWhereInput[];
    NOT?: Prisma.contratoWhereInput | Prisma.contratoWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"contrato"> | number | null;
    fecha_inicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    dia_vencimiento?: Prisma.IntFilter<"contrato"> | number;
    estado?: Prisma.StringFilter<"contrato"> | string;
    fecha_suspension?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    plan?: Prisma.XOR<Prisma.PlanNullableScalarRelationFilter, Prisma.planWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    facturas?: Prisma.FacturaListRelationFilter;
    credenciales_tvip?: Prisma.XOR<Prisma.Credenciales_tvipNullableScalarRelationFilter, Prisma.credenciales_tvipWhereInput> | null;
}, "id_contrato">;
export type contratoOrderByWithAggregationInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_plan?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha_suspension?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.contratoCountOrderByAggregateInput;
    _avg?: Prisma.contratoAvgOrderByAggregateInput;
    _max?: Prisma.contratoMaxOrderByAggregateInput;
    _min?: Prisma.contratoMinOrderByAggregateInput;
    _sum?: Prisma.contratoSumOrderByAggregateInput;
};
export type contratoScalarWhereWithAggregatesInput = {
    AND?: Prisma.contratoScalarWhereWithAggregatesInput | Prisma.contratoScalarWhereWithAggregatesInput[];
    OR?: Prisma.contratoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.contratoScalarWhereWithAggregatesInput | Prisma.contratoScalarWhereWithAggregatesInput[];
    id_contrato?: Prisma.IntWithAggregatesFilter<"contrato"> | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"contrato"> | number | null;
    id_plan?: Prisma.IntNullableWithAggregatesFilter<"contrato"> | number | null;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"contrato"> | number | null;
    fecha_inicio?: Prisma.DateTimeWithAggregatesFilter<"contrato"> | Date | string;
    dia_vencimiento?: Prisma.IntWithAggregatesFilter<"contrato"> | number;
    estado?: Prisma.StringWithAggregatesFilter<"contrato"> | string;
    fecha_suspension?: Prisma.DateTimeNullableWithAggregatesFilter<"contrato"> | Date | string | null;
};
export type contratoCreateInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutContratosInput;
    plan?: Prisma.planCreateNestedOneWithoutContratosInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutContratosInput;
    facturas?: Prisma.facturaCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    facturas?: Prisma.facturaUncheckedCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput;
};
export type contratoUpdateInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutContratosNestedInput;
    plan?: Prisma.planUpdateOneWithoutContratosNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutContratosNestedInput;
    facturas?: Prisma.facturaUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    facturas?: Prisma.facturaUncheckedUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput;
};
export type contratoCreateManyInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
};
export type contratoUpdateManyMutationInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contratoUncheckedUpdateManyInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContratoListRelationFilter = {
    every?: Prisma.contratoWhereInput;
    some?: Prisma.contratoWhereInput;
    none?: Prisma.contratoWhereInput;
};
export type contratoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type contratoCountOrderByAggregateInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha_suspension?: Prisma.SortOrder;
};
export type contratoAvgOrderByAggregateInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
};
export type contratoMaxOrderByAggregateInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha_suspension?: Prisma.SortOrder;
};
export type contratoMinOrderByAggregateInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    fecha_inicio?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    fecha_suspension?: Prisma.SortOrder;
};
export type contratoSumOrderByAggregateInput = {
    id_contrato?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_plan?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    dia_vencimiento?: Prisma.SortOrder;
};
export type ContratoNullableScalarRelationFilter = {
    is?: Prisma.contratoWhereInput | null;
    isNot?: Prisma.contratoWhereInput | null;
};
export type contratoCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput> | Prisma.contratoCreateWithoutEmpresaInput[] | Prisma.contratoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutEmpresaInput | Prisma.contratoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.contratoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput> | Prisma.contratoCreateWithoutEmpresaInput[] | Prisma.contratoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutEmpresaInput | Prisma.contratoCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.contratoCreateManyEmpresaInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput> | Prisma.contratoCreateWithoutEmpresaInput[] | Prisma.contratoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutEmpresaInput | Prisma.contratoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.contratoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.contratoCreateManyEmpresaInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.contratoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutEmpresaInput | Prisma.contratoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput> | Prisma.contratoCreateWithoutEmpresaInput[] | Prisma.contratoUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutEmpresaInput | Prisma.contratoCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.contratoUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.contratoCreateManyEmpresaInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.contratoUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutEmpresaInput | Prisma.contratoUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput> | Prisma.contratoCreateWithoutClienteInput[] | Prisma.contratoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutClienteInput | Prisma.contratoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.contratoCreateManyClienteInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput> | Prisma.contratoCreateWithoutClienteInput[] | Prisma.contratoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutClienteInput | Prisma.contratoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.contratoCreateManyClienteInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput> | Prisma.contratoCreateWithoutClienteInput[] | Prisma.contratoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutClienteInput | Prisma.contratoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutClienteInput | Prisma.contratoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.contratoCreateManyClienteInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutClienteInput | Prisma.contratoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutClienteInput | Prisma.contratoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput> | Prisma.contratoCreateWithoutClienteInput[] | Prisma.contratoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutClienteInput | Prisma.contratoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutClienteInput | Prisma.contratoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.contratoCreateManyClienteInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutClienteInput | Prisma.contratoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutClienteInput | Prisma.contratoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput> | Prisma.contratoCreateWithoutPlanInput[] | Prisma.contratoUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutPlanInput | Prisma.contratoCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.contratoCreateManyPlanInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUncheckedCreateNestedManyWithoutPlanInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput> | Prisma.contratoCreateWithoutPlanInput[] | Prisma.contratoUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutPlanInput | Prisma.contratoCreateOrConnectWithoutPlanInput[];
    createMany?: Prisma.contratoCreateManyPlanInputEnvelope;
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
};
export type contratoUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput> | Prisma.contratoCreateWithoutPlanInput[] | Prisma.contratoUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutPlanInput | Prisma.contratoCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutPlanInput | Prisma.contratoUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.contratoCreateManyPlanInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutPlanInput | Prisma.contratoUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutPlanInput | Prisma.contratoUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type contratoUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput> | Prisma.contratoCreateWithoutPlanInput[] | Prisma.contratoUncheckedCreateWithoutPlanInput[];
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutPlanInput | Prisma.contratoCreateOrConnectWithoutPlanInput[];
    upsert?: Prisma.contratoUpsertWithWhereUniqueWithoutPlanInput | Prisma.contratoUpsertWithWhereUniqueWithoutPlanInput[];
    createMany?: Prisma.contratoCreateManyPlanInputEnvelope;
    set?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    disconnect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    delete?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    connect?: Prisma.contratoWhereUniqueInput | Prisma.contratoWhereUniqueInput[];
    update?: Prisma.contratoUpdateWithWhereUniqueWithoutPlanInput | Prisma.contratoUpdateWithWhereUniqueWithoutPlanInput[];
    updateMany?: Prisma.contratoUpdateManyWithWhereWithoutPlanInput | Prisma.contratoUpdateManyWithWhereWithoutPlanInput[];
    deleteMany?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type contratoCreateNestedOneWithoutFacturasInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutFacturasInput, Prisma.contratoUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutFacturasInput;
    connect?: Prisma.contratoWhereUniqueInput;
};
export type contratoUpdateOneWithoutFacturasNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutFacturasInput, Prisma.contratoUncheckedCreateWithoutFacturasInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutFacturasInput;
    upsert?: Prisma.contratoUpsertWithoutFacturasInput;
    disconnect?: Prisma.contratoWhereInput | boolean;
    delete?: Prisma.contratoWhereInput | boolean;
    connect?: Prisma.contratoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contratoUpdateToOneWithWhereWithoutFacturasInput, Prisma.contratoUpdateWithoutFacturasInput>, Prisma.contratoUncheckedUpdateWithoutFacturasInput>;
};
export type contratoCreateNestedOneWithoutCredenciales_tvipInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedCreateWithoutCredenciales_tvipInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutCredenciales_tvipInput;
    connect?: Prisma.contratoWhereUniqueInput;
};
export type contratoUpdateOneWithoutCredenciales_tvipNestedInput = {
    create?: Prisma.XOR<Prisma.contratoCreateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedCreateWithoutCredenciales_tvipInput>;
    connectOrCreate?: Prisma.contratoCreateOrConnectWithoutCredenciales_tvipInput;
    upsert?: Prisma.contratoUpsertWithoutCredenciales_tvipInput;
    disconnect?: Prisma.contratoWhereInput | boolean;
    delete?: Prisma.contratoWhereInput | boolean;
    connect?: Prisma.contratoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.contratoUpdateToOneWithWhereWithoutCredenciales_tvipInput, Prisma.contratoUpdateWithoutCredenciales_tvipInput>, Prisma.contratoUncheckedUpdateWithoutCredenciales_tvipInput>;
};
export type contratoCreateWithoutEmpresaInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutContratosInput;
    plan?: Prisma.planCreateNestedOneWithoutContratosInput;
    facturas?: Prisma.facturaCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutEmpresaInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    facturas?: Prisma.facturaUncheckedCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput>;
};
export type contratoCreateManyEmpresaInputEnvelope = {
    data: Prisma.contratoCreateManyEmpresaInput | Prisma.contratoCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type contratoUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.contratoWhereUniqueInput;
    update: Prisma.XOR<Prisma.contratoUpdateWithoutEmpresaInput, Prisma.contratoUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutEmpresaInput, Prisma.contratoUncheckedCreateWithoutEmpresaInput>;
};
export type contratoUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.contratoWhereUniqueInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutEmpresaInput, Prisma.contratoUncheckedUpdateWithoutEmpresaInput>;
};
export type contratoUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.contratoScalarWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyWithoutEmpresaInput>;
};
export type contratoScalarWhereInput = {
    AND?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
    OR?: Prisma.contratoScalarWhereInput[];
    NOT?: Prisma.contratoScalarWhereInput | Prisma.contratoScalarWhereInput[];
    id_contrato?: Prisma.IntFilter<"contrato"> | number;
    id_cliente?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_plan?: Prisma.IntNullableFilter<"contrato"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"contrato"> | number | null;
    fecha_inicio?: Prisma.DateTimeFilter<"contrato"> | Date | string;
    dia_vencimiento?: Prisma.IntFilter<"contrato"> | number;
    estado?: Prisma.StringFilter<"contrato"> | string;
    fecha_suspension?: Prisma.DateTimeNullableFilter<"contrato"> | Date | string | null;
};
export type contratoCreateWithoutClienteInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    plan?: Prisma.planCreateNestedOneWithoutContratosInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutContratosInput;
    facturas?: Prisma.facturaCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutClienteInput = {
    id_contrato?: number;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    facturas?: Prisma.facturaUncheckedCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutClienteInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput>;
};
export type contratoCreateManyClienteInputEnvelope = {
    data: Prisma.contratoCreateManyClienteInput | Prisma.contratoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type contratoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.contratoWhereUniqueInput;
    update: Prisma.XOR<Prisma.contratoUpdateWithoutClienteInput, Prisma.contratoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutClienteInput, Prisma.contratoUncheckedCreateWithoutClienteInput>;
};
export type contratoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.contratoWhereUniqueInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutClienteInput, Prisma.contratoUncheckedUpdateWithoutClienteInput>;
};
export type contratoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.contratoScalarWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyWithoutClienteInput>;
};
export type contratoCreateWithoutPlanInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutContratosInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutContratosInput;
    facturas?: Prisma.facturaCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutPlanInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    facturas?: Prisma.facturaUncheckedCreateNestedManyWithoutContratoInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutPlanInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput>;
};
export type contratoCreateManyPlanInputEnvelope = {
    data: Prisma.contratoCreateManyPlanInput | Prisma.contratoCreateManyPlanInput[];
    skipDuplicates?: boolean;
};
export type contratoUpsertWithWhereUniqueWithoutPlanInput = {
    where: Prisma.contratoWhereUniqueInput;
    update: Prisma.XOR<Prisma.contratoUpdateWithoutPlanInput, Prisma.contratoUncheckedUpdateWithoutPlanInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutPlanInput, Prisma.contratoUncheckedCreateWithoutPlanInput>;
};
export type contratoUpdateWithWhereUniqueWithoutPlanInput = {
    where: Prisma.contratoWhereUniqueInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutPlanInput, Prisma.contratoUncheckedUpdateWithoutPlanInput>;
};
export type contratoUpdateManyWithWhereWithoutPlanInput = {
    where: Prisma.contratoScalarWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyWithoutPlanInput>;
};
export type contratoCreateWithoutFacturasInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutContratosInput;
    plan?: Prisma.planCreateNestedOneWithoutContratosInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutContratosInput;
    credenciales_tvip?: Prisma.credenciales_tvipCreateNestedOneWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutFacturasInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedCreateNestedOneWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutFacturasInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutFacturasInput, Prisma.contratoUncheckedCreateWithoutFacturasInput>;
};
export type contratoUpsertWithoutFacturasInput = {
    update: Prisma.XOR<Prisma.contratoUpdateWithoutFacturasInput, Prisma.contratoUncheckedUpdateWithoutFacturasInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutFacturasInput, Prisma.contratoUncheckedCreateWithoutFacturasInput>;
    where?: Prisma.contratoWhereInput;
};
export type contratoUpdateToOneWithWhereWithoutFacturasInput = {
    where?: Prisma.contratoWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutFacturasInput, Prisma.contratoUncheckedUpdateWithoutFacturasInput>;
};
export type contratoUpdateWithoutFacturasInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutContratosNestedInput;
    plan?: Prisma.planUpdateOneWithoutContratosNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutContratosNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutFacturasInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput;
};
export type contratoCreateWithoutCredenciales_tvipInput = {
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutContratosInput;
    plan?: Prisma.planCreateNestedOneWithoutContratosInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutContratosInput;
    facturas?: Prisma.facturaCreateNestedManyWithoutContratoInput;
};
export type contratoUncheckedCreateWithoutCredenciales_tvipInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
    facturas?: Prisma.facturaUncheckedCreateNestedManyWithoutContratoInput;
};
export type contratoCreateOrConnectWithoutCredenciales_tvipInput = {
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedCreateWithoutCredenciales_tvipInput>;
};
export type contratoUpsertWithoutCredenciales_tvipInput = {
    update: Prisma.XOR<Prisma.contratoUpdateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedUpdateWithoutCredenciales_tvipInput>;
    create: Prisma.XOR<Prisma.contratoCreateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedCreateWithoutCredenciales_tvipInput>;
    where?: Prisma.contratoWhereInput;
};
export type contratoUpdateToOneWithWhereWithoutCredenciales_tvipInput = {
    where?: Prisma.contratoWhereInput;
    data: Prisma.XOR<Prisma.contratoUpdateWithoutCredenciales_tvipInput, Prisma.contratoUncheckedUpdateWithoutCredenciales_tvipInput>;
};
export type contratoUpdateWithoutCredenciales_tvipInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutContratosNestedInput;
    plan?: Prisma.planUpdateOneWithoutContratosNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutContratosNestedInput;
    facturas?: Prisma.facturaUpdateManyWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutCredenciales_tvipInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    facturas?: Prisma.facturaUncheckedUpdateManyWithoutContratoNestedInput;
};
export type contratoCreateManyEmpresaInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_plan?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
};
export type contratoUpdateWithoutEmpresaInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutContratosNestedInput;
    plan?: Prisma.planUpdateOneWithoutContratosNestedInput;
    facturas?: Prisma.facturaUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutEmpresaInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    facturas?: Prisma.facturaUncheckedUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateManyWithoutEmpresaInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contratoCreateManyClienteInput = {
    id_contrato?: number;
    id_plan?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
};
export type contratoUpdateWithoutClienteInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    plan?: Prisma.planUpdateOneWithoutContratosNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutContratosNestedInput;
    facturas?: Prisma.facturaUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutClienteInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    facturas?: Prisma.facturaUncheckedUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateManyWithoutClienteInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_plan?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type contratoCreateManyPlanInput = {
    id_contrato?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    fecha_inicio: Date | string;
    dia_vencimiento: number;
    estado: string;
    fecha_suspension?: Date | string | null;
};
export type contratoUpdateWithoutPlanInput = {
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutContratosNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutContratosNestedInput;
    facturas?: Prisma.facturaUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateWithoutPlanInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    facturas?: Prisma.facturaUncheckedUpdateManyWithoutContratoNestedInput;
    credenciales_tvip?: Prisma.credenciales_tvipUncheckedUpdateOneWithoutContratoNestedInput;
};
export type contratoUncheckedUpdateManyWithoutPlanInput = {
    id_contrato?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    fecha_inicio?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    dia_vencimiento?: Prisma.IntFieldUpdateOperationsInput | number;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    fecha_suspension?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ContratoCountOutputType = {
    facturas: number;
};
export type ContratoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facturas?: boolean | ContratoCountOutputTypeCountFacturasArgs;
};
export type ContratoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContratoCountOutputTypeSelect<ExtArgs> | null;
};
export type ContratoCountOutputTypeCountFacturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
};
export type contratoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_contrato?: boolean;
    id_cliente?: boolean;
    id_plan?: boolean;
    id_empresa?: boolean;
    fecha_inicio?: boolean;
    dia_vencimiento?: boolean;
    estado?: boolean;
    fecha_suspension?: boolean;
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
    facturas?: boolean | Prisma.contrato$facturasArgs<ExtArgs>;
    credenciales_tvip?: boolean | Prisma.contrato$credenciales_tvipArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["contrato"]>;
export type contratoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_contrato?: boolean;
    id_cliente?: boolean;
    id_plan?: boolean;
    id_empresa?: boolean;
    fecha_inicio?: boolean;
    dia_vencimiento?: boolean;
    estado?: boolean;
    fecha_suspension?: boolean;
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["contrato"]>;
export type contratoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_contrato?: boolean;
    id_cliente?: boolean;
    id_plan?: boolean;
    id_empresa?: boolean;
    fecha_inicio?: boolean;
    dia_vencimiento?: boolean;
    estado?: boolean;
    fecha_suspension?: boolean;
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
}, ExtArgs["result"]["contrato"]>;
export type contratoSelectScalar = {
    id_contrato?: boolean;
    id_cliente?: boolean;
    id_plan?: boolean;
    id_empresa?: boolean;
    fecha_inicio?: boolean;
    dia_vencimiento?: boolean;
    estado?: boolean;
    fecha_suspension?: boolean;
};
export type contratoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_contrato" | "id_cliente" | "id_plan" | "id_empresa" | "fecha_inicio" | "dia_vencimiento" | "estado" | "fecha_suspension", ExtArgs["result"]["contrato"]>;
export type contratoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
    facturas?: boolean | Prisma.contrato$facturasArgs<ExtArgs>;
    credenciales_tvip?: boolean | Prisma.contrato$credenciales_tvipArgs<ExtArgs>;
    _count?: boolean | Prisma.ContratoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type contratoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
};
export type contratoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.contrato$clienteArgs<ExtArgs>;
    plan?: boolean | Prisma.contrato$planArgs<ExtArgs>;
    empresa?: boolean | Prisma.contrato$empresaArgs<ExtArgs>;
};
export type $contratoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "contrato";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        plan: Prisma.$planPayload<ExtArgs> | null;
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        facturas: Prisma.$facturaPayload<ExtArgs>[];
        credenciales_tvip: Prisma.$credenciales_tvipPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_contrato: number;
        id_cliente: number | null;
        id_plan: number | null;
        id_empresa: number | null;
        fecha_inicio: Date;
        dia_vencimiento: number;
        estado: string;
        fecha_suspension: Date | null;
    }, ExtArgs["result"]["contrato"]>;
    composites: {};
};
export type contratoGetPayload<S extends boolean | null | undefined | contratoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$contratoPayload, S>;
export type contratoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<contratoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContratoCountAggregateInputType | true;
};
export interface contratoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['contrato'];
        meta: {
            name: 'contrato';
        };
    };
    findUnique<T extends contratoFindUniqueArgs>(args: Prisma.SelectSubset<T, contratoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends contratoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, contratoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends contratoFindFirstArgs>(args?: Prisma.SelectSubset<T, contratoFindFirstArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends contratoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, contratoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends contratoFindManyArgs>(args?: Prisma.SelectSubset<T, contratoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends contratoCreateArgs>(args: Prisma.SelectSubset<T, contratoCreateArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends contratoCreateManyArgs>(args?: Prisma.SelectSubset<T, contratoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends contratoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, contratoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends contratoDeleteArgs>(args: Prisma.SelectSubset<T, contratoDeleteArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends contratoUpdateArgs>(args: Prisma.SelectSubset<T, contratoUpdateArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends contratoDeleteManyArgs>(args?: Prisma.SelectSubset<T, contratoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends contratoUpdateManyArgs>(args: Prisma.SelectSubset<T, contratoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends contratoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, contratoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends contratoUpsertArgs>(args: Prisma.SelectSubset<T, contratoUpsertArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends contratoCountArgs>(args?: Prisma.Subset<T, contratoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContratoCountAggregateOutputType> : number>;
    aggregate<T extends ContratoAggregateArgs>(args: Prisma.Subset<T, ContratoAggregateArgs>): Prisma.PrismaPromise<GetContratoAggregateType<T>>;
    groupBy<T extends contratoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: contratoGroupByArgs['orderBy'];
    } : {
        orderBy?: contratoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, contratoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContratoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: contratoFieldRefs;
}
export interface Prisma__contratoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.contrato$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    plan<T extends Prisma.contrato$planArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$planArgs<ExtArgs>>): Prisma.Prisma__planClient<runtime.Types.Result.GetResult<Prisma.$planPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa<T extends Prisma.contrato$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    facturas<T extends Prisma.contrato$facturasArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$facturasArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    credenciales_tvip<T extends Prisma.contrato$credenciales_tvipArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.contrato$credenciales_tvipArgs<ExtArgs>>): Prisma.Prisma__credenciales_tvipClient<runtime.Types.Result.GetResult<Prisma.$credenciales_tvipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface contratoFieldRefs {
    readonly id_contrato: Prisma.FieldRef<"contrato", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"contrato", 'Int'>;
    readonly id_plan: Prisma.FieldRef<"contrato", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"contrato", 'Int'>;
    readonly fecha_inicio: Prisma.FieldRef<"contrato", 'DateTime'>;
    readonly dia_vencimiento: Prisma.FieldRef<"contrato", 'Int'>;
    readonly estado: Prisma.FieldRef<"contrato", 'String'>;
    readonly fecha_suspension: Prisma.FieldRef<"contrato", 'DateTime'>;
}
export type contratoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where: Prisma.contratoWhereUniqueInput;
};
export type contratoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where: Prisma.contratoWhereUniqueInput;
};
export type contratoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
export type contratoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
export type contratoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
    orderBy?: Prisma.contratoOrderByWithRelationInput | Prisma.contratoOrderByWithRelationInput[];
    cursor?: Prisma.contratoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContratoScalarFieldEnum | Prisma.ContratoScalarFieldEnum[];
};
export type contratoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contratoCreateInput, Prisma.contratoUncheckedCreateInput>;
};
export type contratoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.contratoCreateManyInput | Prisma.contratoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type contratoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    data: Prisma.contratoCreateManyInput | Prisma.contratoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.contratoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type contratoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contratoUpdateInput, Prisma.contratoUncheckedUpdateInput>;
    where: Prisma.contratoWhereUniqueInput;
};
export type contratoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyInput>;
    where?: Prisma.contratoWhereInput;
    limit?: number;
};
export type contratoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.contratoUpdateManyMutationInput, Prisma.contratoUncheckedUpdateManyInput>;
    where?: Prisma.contratoWhereInput;
    limit?: number;
    include?: Prisma.contratoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type contratoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where: Prisma.contratoWhereUniqueInput;
    create: Prisma.XOR<Prisma.contratoCreateInput, Prisma.contratoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.contratoUpdateInput, Prisma.contratoUncheckedUpdateInput>;
};
export type contratoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where: Prisma.contratoWhereUniqueInput;
};
export type contratoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.contratoWhereInput;
    limit?: number;
};
export type contrato$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type contrato$planArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.planSelect<ExtArgs> | null;
    omit?: Prisma.planOmit<ExtArgs> | null;
    include?: Prisma.planInclude<ExtArgs> | null;
    where?: Prisma.planWhereInput;
};
export type contrato$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type contrato$facturasArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacturaScalarFieldEnum | Prisma.FacturaScalarFieldEnum[];
};
export type contrato$credenciales_tvipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.credenciales_tvipSelect<ExtArgs> | null;
    omit?: Prisma.credenciales_tvipOmit<ExtArgs> | null;
    include?: Prisma.credenciales_tvipInclude<ExtArgs> | null;
    where?: Prisma.credenciales_tvipWhereInput;
};
export type contratoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
};
