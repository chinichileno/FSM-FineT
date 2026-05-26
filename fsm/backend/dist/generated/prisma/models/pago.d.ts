import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type pagoModel = runtime.Types.Result.DefaultSelection<Prisma.$pagoPayload>;
export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type PagoAvgAggregateOutputType = {
    id_pago: number | null;
    id_factura: number | null;
    id_cliente: number | null;
    monto: runtime.Decimal | null;
};
export type PagoSumAggregateOutputType = {
    id_pago: number | null;
    id_factura: number | null;
    id_cliente: number | null;
    monto: runtime.Decimal | null;
};
export type PagoMinAggregateOutputType = {
    id_pago: number | null;
    id_factura: number | null;
    id_cliente: number | null;
    monto: runtime.Decimal | null;
    fecha_pago: Date | null;
    codigo_transaccion: string | null;
    pasarela: string | null;
    token_transaccional: string | null;
    comprobante_pdf_url: string | null;
};
export type PagoMaxAggregateOutputType = {
    id_pago: number | null;
    id_factura: number | null;
    id_cliente: number | null;
    monto: runtime.Decimal | null;
    fecha_pago: Date | null;
    codigo_transaccion: string | null;
    pasarela: string | null;
    token_transaccional: string | null;
    comprobante_pdf_url: string | null;
};
export type PagoCountAggregateOutputType = {
    id_pago: number;
    id_factura: number;
    id_cliente: number;
    monto: number;
    fecha_pago: number;
    codigo_transaccion: number;
    pasarela: number;
    token_transaccional: number;
    comprobante_pdf_url: number;
    _all: number;
};
export type PagoAvgAggregateInputType = {
    id_pago?: true;
    id_factura?: true;
    id_cliente?: true;
    monto?: true;
};
export type PagoSumAggregateInputType = {
    id_pago?: true;
    id_factura?: true;
    id_cliente?: true;
    monto?: true;
};
export type PagoMinAggregateInputType = {
    id_pago?: true;
    id_factura?: true;
    id_cliente?: true;
    monto?: true;
    fecha_pago?: true;
    codigo_transaccion?: true;
    pasarela?: true;
    token_transaccional?: true;
    comprobante_pdf_url?: true;
};
export type PagoMaxAggregateInputType = {
    id_pago?: true;
    id_factura?: true;
    id_cliente?: true;
    monto?: true;
    fecha_pago?: true;
    codigo_transaccion?: true;
    pasarela?: true;
    token_transaccional?: true;
    comprobante_pdf_url?: true;
};
export type PagoCountAggregateInputType = {
    id_pago?: true;
    id_factura?: true;
    id_cliente?: true;
    monto?: true;
    fecha_pago?: true;
    codigo_transaccion?: true;
    pasarela?: true;
    token_transaccional?: true;
    comprobante_pdf_url?: true;
    _all?: true;
};
export type PagoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    cursor?: Prisma.pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PagoCountAggregateInputType;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
    [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePago[P]> : Prisma.GetScalarType<T[P], AggregatePago[P]>;
};
export type pagoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithAggregationInput | Prisma.pagoOrderByWithAggregationInput[];
    by: Prisma.PagoScalarFieldEnum[] | Prisma.PagoScalarFieldEnum;
    having?: Prisma.pagoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PagoCountAggregateInputType | true;
    _avg?: PagoAvgAggregateInputType;
    _sum?: PagoSumAggregateInputType;
    _min?: PagoMinAggregateInputType;
    _max?: PagoMaxAggregateInputType;
};
export type PagoGroupByOutputType = {
    id_pago: number;
    id_factura: number | null;
    id_cliente: number | null;
    monto: runtime.Decimal;
    fecha_pago: Date;
    codigo_transaccion: string | null;
    pasarela: string;
    token_transaccional: string | null;
    comprobante_pdf_url: string | null;
    _count: PagoCountAggregateOutputType | null;
    _avg: PagoAvgAggregateOutputType | null;
    _sum: PagoSumAggregateOutputType | null;
    _min: PagoMinAggregateOutputType | null;
    _max: PagoMaxAggregateOutputType | null;
};
export type GetPagoGroupByPayload<T extends pagoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PagoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PagoGroupByOutputType[P]>;
}>>;
export type pagoWhereInput = {
    AND?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    OR?: Prisma.pagoWhereInput[];
    NOT?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    id_pago?: Prisma.IntFilter<"pago"> | number;
    id_factura?: Prisma.IntNullableFilter<"pago"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"pago"> | number | null;
    monto?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    codigo_transaccion?: Prisma.StringNullableFilter<"pago"> | string | null;
    pasarela?: Prisma.StringFilter<"pago"> | string;
    token_transaccional?: Prisma.StringNullableFilter<"pago"> | string | null;
    comprobante_pdf_url?: Prisma.StringNullableFilter<"pago"> | string | null;
    factura?: Prisma.XOR<Prisma.FacturaNullableScalarRelationFilter, Prisma.facturaWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
};
export type pagoOrderByWithRelationInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
    codigo_transaccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    pasarela?: Prisma.SortOrder;
    token_transaccional?: Prisma.SortOrderInput | Prisma.SortOrder;
    comprobante_pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    factura?: Prisma.facturaOrderByWithRelationInput;
    cliente?: Prisma.clienteOrderByWithRelationInput;
};
export type pagoWhereUniqueInput = Prisma.AtLeast<{
    id_pago?: number;
    codigo_transaccion?: string;
    AND?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    OR?: Prisma.pagoWhereInput[];
    NOT?: Prisma.pagoWhereInput | Prisma.pagoWhereInput[];
    id_factura?: Prisma.IntNullableFilter<"pago"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"pago"> | number | null;
    monto?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    pasarela?: Prisma.StringFilter<"pago"> | string;
    token_transaccional?: Prisma.StringNullableFilter<"pago"> | string | null;
    comprobante_pdf_url?: Prisma.StringNullableFilter<"pago"> | string | null;
    factura?: Prisma.XOR<Prisma.FacturaNullableScalarRelationFilter, Prisma.facturaWhereInput> | null;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
}, "id_pago" | "codigo_transaccion">;
export type pagoOrderByWithAggregationInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
    codigo_transaccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    pasarela?: Prisma.SortOrder;
    token_transaccional?: Prisma.SortOrderInput | Prisma.SortOrder;
    comprobante_pdf_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.pagoCountOrderByAggregateInput;
    _avg?: Prisma.pagoAvgOrderByAggregateInput;
    _max?: Prisma.pagoMaxOrderByAggregateInput;
    _min?: Prisma.pagoMinOrderByAggregateInput;
    _sum?: Prisma.pagoSumOrderByAggregateInput;
};
export type pagoScalarWhereWithAggregatesInput = {
    AND?: Prisma.pagoScalarWhereWithAggregatesInput | Prisma.pagoScalarWhereWithAggregatesInput[];
    OR?: Prisma.pagoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.pagoScalarWhereWithAggregatesInput | Prisma.pagoScalarWhereWithAggregatesInput[];
    id_pago?: Prisma.IntWithAggregatesFilter<"pago"> | number;
    id_factura?: Prisma.IntNullableWithAggregatesFilter<"pago"> | number | null;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"pago"> | number | null;
    monto?: Prisma.DecimalWithAggregatesFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeWithAggregatesFilter<"pago"> | Date | string;
    codigo_transaccion?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
    pasarela?: Prisma.StringWithAggregatesFilter<"pago"> | string;
    token_transaccional?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
    comprobante_pdf_url?: Prisma.StringNullableWithAggregatesFilter<"pago"> | string | null;
};
export type pagoCreateInput = {
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
    factura?: Prisma.facturaCreateNestedOneWithoutPagosInput;
    cliente?: Prisma.clienteCreateNestedOneWithoutPagosInput;
};
export type pagoUncheckedCreateInput = {
    id_pago?: number;
    id_factura?: number | null;
    id_cliente?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoUpdateInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura?: Prisma.facturaUpdateOneWithoutPagosNestedInput;
    cliente?: Prisma.clienteUpdateOneWithoutPagosNestedInput;
};
export type pagoUncheckedUpdateInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_factura?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoCreateManyInput = {
    id_pago?: number;
    id_factura?: number | null;
    id_cliente?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoUpdateManyMutationInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoUncheckedUpdateManyInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_factura?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PagoListRelationFilter = {
    every?: Prisma.pagoWhereInput;
    some?: Prisma.pagoWhereInput;
    none?: Prisma.pagoWhereInput;
};
export type pagoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type pagoCountOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
    codigo_transaccion?: Prisma.SortOrder;
    pasarela?: Prisma.SortOrder;
    token_transaccional?: Prisma.SortOrder;
    comprobante_pdf_url?: Prisma.SortOrder;
};
export type pagoAvgOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type pagoMaxOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
    codigo_transaccion?: Prisma.SortOrder;
    pasarela?: Prisma.SortOrder;
    token_transaccional?: Prisma.SortOrder;
    comprobante_pdf_url?: Prisma.SortOrder;
};
export type pagoMinOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_pago?: Prisma.SortOrder;
    codigo_transaccion?: Prisma.SortOrder;
    pasarela?: Prisma.SortOrder;
    token_transaccional?: Prisma.SortOrder;
    comprobante_pdf_url?: Prisma.SortOrder;
};
export type pagoSumOrderByAggregateInput = {
    id_pago?: Prisma.SortOrder;
    id_factura?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type pagoCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput> | Prisma.pagoCreateWithoutClienteInput[] | Prisma.pagoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutClienteInput | Prisma.pagoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.pagoCreateManyClienteInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput> | Prisma.pagoCreateWithoutClienteInput[] | Prisma.pagoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutClienteInput | Prisma.pagoCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.pagoCreateManyClienteInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput> | Prisma.pagoCreateWithoutClienteInput[] | Prisma.pagoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutClienteInput | Prisma.pagoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutClienteInput | Prisma.pagoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.pagoCreateManyClienteInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutClienteInput | Prisma.pagoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutClienteInput | Prisma.pagoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput> | Prisma.pagoCreateWithoutClienteInput[] | Prisma.pagoUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutClienteInput | Prisma.pagoCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutClienteInput | Prisma.pagoUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.pagoCreateManyClienteInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutClienteInput | Prisma.pagoUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutClienteInput | Prisma.pagoUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput> | Prisma.pagoCreateWithoutFacturaInput[] | Prisma.pagoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutFacturaInput | Prisma.pagoCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.pagoCreateManyFacturaInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUncheckedCreateNestedManyWithoutFacturaInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput> | Prisma.pagoCreateWithoutFacturaInput[] | Prisma.pagoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutFacturaInput | Prisma.pagoCreateOrConnectWithoutFacturaInput[];
    createMany?: Prisma.pagoCreateManyFacturaInputEnvelope;
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
};
export type pagoUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput> | Prisma.pagoCreateWithoutFacturaInput[] | Prisma.pagoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutFacturaInput | Prisma.pagoCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutFacturaInput | Prisma.pagoUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.pagoCreateManyFacturaInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutFacturaInput | Prisma.pagoUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutFacturaInput | Prisma.pagoUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoUncheckedUpdateManyWithoutFacturaNestedInput = {
    create?: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput> | Prisma.pagoCreateWithoutFacturaInput[] | Prisma.pagoUncheckedCreateWithoutFacturaInput[];
    connectOrCreate?: Prisma.pagoCreateOrConnectWithoutFacturaInput | Prisma.pagoCreateOrConnectWithoutFacturaInput[];
    upsert?: Prisma.pagoUpsertWithWhereUniqueWithoutFacturaInput | Prisma.pagoUpsertWithWhereUniqueWithoutFacturaInput[];
    createMany?: Prisma.pagoCreateManyFacturaInputEnvelope;
    set?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    disconnect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    delete?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    connect?: Prisma.pagoWhereUniqueInput | Prisma.pagoWhereUniqueInput[];
    update?: Prisma.pagoUpdateWithWhereUniqueWithoutFacturaInput | Prisma.pagoUpdateWithWhereUniqueWithoutFacturaInput[];
    updateMany?: Prisma.pagoUpdateManyWithWhereWithoutFacturaInput | Prisma.pagoUpdateManyWithWhereWithoutFacturaInput[];
    deleteMany?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
};
export type pagoCreateWithoutClienteInput = {
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
    factura?: Prisma.facturaCreateNestedOneWithoutPagosInput;
};
export type pagoUncheckedCreateWithoutClienteInput = {
    id_pago?: number;
    id_factura?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoCreateOrConnectWithoutClienteInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput>;
};
export type pagoCreateManyClienteInputEnvelope = {
    data: Prisma.pagoCreateManyClienteInput | Prisma.pagoCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type pagoUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.pagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pagoUpdateWithoutClienteInput, Prisma.pagoUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutClienteInput, Prisma.pagoUncheckedCreateWithoutClienteInput>;
};
export type pagoUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.pagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutClienteInput, Prisma.pagoUncheckedUpdateWithoutClienteInput>;
};
export type pagoUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.pagoScalarWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyWithoutClienteInput>;
};
export type pagoScalarWhereInput = {
    AND?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
    OR?: Prisma.pagoScalarWhereInput[];
    NOT?: Prisma.pagoScalarWhereInput | Prisma.pagoScalarWhereInput[];
    id_pago?: Prisma.IntFilter<"pago"> | number;
    id_factura?: Prisma.IntNullableFilter<"pago"> | number | null;
    id_cliente?: Prisma.IntNullableFilter<"pago"> | number | null;
    monto?: Prisma.DecimalFilter<"pago"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFilter<"pago"> | Date | string;
    codigo_transaccion?: Prisma.StringNullableFilter<"pago"> | string | null;
    pasarela?: Prisma.StringFilter<"pago"> | string;
    token_transaccional?: Prisma.StringNullableFilter<"pago"> | string | null;
    comprobante_pdf_url?: Prisma.StringNullableFilter<"pago"> | string | null;
};
export type pagoCreateWithoutFacturaInput = {
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
    cliente?: Prisma.clienteCreateNestedOneWithoutPagosInput;
};
export type pagoUncheckedCreateWithoutFacturaInput = {
    id_pago?: number;
    id_cliente?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoCreateOrConnectWithoutFacturaInput = {
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput>;
};
export type pagoCreateManyFacturaInputEnvelope = {
    data: Prisma.pagoCreateManyFacturaInput | Prisma.pagoCreateManyFacturaInput[];
    skipDuplicates?: boolean;
};
export type pagoUpsertWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.pagoWhereUniqueInput;
    update: Prisma.XOR<Prisma.pagoUpdateWithoutFacturaInput, Prisma.pagoUncheckedUpdateWithoutFacturaInput>;
    create: Prisma.XOR<Prisma.pagoCreateWithoutFacturaInput, Prisma.pagoUncheckedCreateWithoutFacturaInput>;
};
export type pagoUpdateWithWhereUniqueWithoutFacturaInput = {
    where: Prisma.pagoWhereUniqueInput;
    data: Prisma.XOR<Prisma.pagoUpdateWithoutFacturaInput, Prisma.pagoUncheckedUpdateWithoutFacturaInput>;
};
export type pagoUpdateManyWithWhereWithoutFacturaInput = {
    where: Prisma.pagoScalarWhereInput;
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyWithoutFacturaInput>;
};
export type pagoCreateManyClienteInput = {
    id_pago?: number;
    id_factura?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoUpdateWithoutClienteInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    factura?: Prisma.facturaUpdateOneWithoutPagosNestedInput;
};
export type pagoUncheckedUpdateWithoutClienteInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_factura?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoUncheckedUpdateManyWithoutClienteInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_factura?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoCreateManyFacturaInput = {
    id_pago?: number;
    id_cliente?: number | null;
    monto: runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago: Date | string;
    codigo_transaccion?: string | null;
    pasarela: string;
    token_transaccional?: string | null;
    comprobante_pdf_url?: string | null;
};
export type pagoUpdateWithoutFacturaInput = {
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cliente?: Prisma.clienteUpdateOneWithoutPagosNestedInput;
};
export type pagoUncheckedUpdateWithoutFacturaInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoUncheckedUpdateManyWithoutFacturaInput = {
    id_pago?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    monto?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    fecha_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    codigo_transaccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pasarela?: Prisma.StringFieldUpdateOperationsInput | string;
    token_transaccional?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    comprobante_pdf_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type pagoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pago?: boolean;
    id_factura?: boolean;
    id_cliente?: boolean;
    monto?: boolean;
    fecha_pago?: boolean;
    codigo_transaccion?: boolean;
    pasarela?: boolean;
    token_transaccional?: boolean;
    comprobante_pdf_url?: boolean;
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type pagoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pago?: boolean;
    id_factura?: boolean;
    id_cliente?: boolean;
    monto?: boolean;
    fecha_pago?: boolean;
    codigo_transaccion?: boolean;
    pasarela?: boolean;
    token_transaccional?: boolean;
    comprobante_pdf_url?: boolean;
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type pagoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_pago?: boolean;
    id_factura?: boolean;
    id_cliente?: boolean;
    monto?: boolean;
    fecha_pago?: boolean;
    codigo_transaccion?: boolean;
    pasarela?: boolean;
    token_transaccional?: boolean;
    comprobante_pdf_url?: boolean;
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
}, ExtArgs["result"]["pago"]>;
export type pagoSelectScalar = {
    id_pago?: boolean;
    id_factura?: boolean;
    id_cliente?: boolean;
    monto?: boolean;
    fecha_pago?: boolean;
    codigo_transaccion?: boolean;
    pasarela?: boolean;
    token_transaccional?: boolean;
    comprobante_pdf_url?: boolean;
};
export type pagoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_pago" | "id_factura" | "id_cliente" | "monto" | "fecha_pago" | "codigo_transaccion" | "pasarela" | "token_transaccional" | "comprobante_pdf_url", ExtArgs["result"]["pago"]>;
export type pagoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
};
export type pagoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
};
export type pagoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura?: boolean | Prisma.pago$facturaArgs<ExtArgs>;
    cliente?: boolean | Prisma.pago$clienteArgs<ExtArgs>;
};
export type $pagoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "pago";
    objects: {
        factura: Prisma.$facturaPayload<ExtArgs> | null;
        cliente: Prisma.$clientePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_pago: number;
        id_factura: number | null;
        id_cliente: number | null;
        monto: runtime.Decimal;
        fecha_pago: Date;
        codigo_transaccion: string | null;
        pasarela: string;
        token_transaccional: string | null;
        comprobante_pdf_url: string | null;
    }, ExtArgs["result"]["pago"]>;
    composites: {};
};
export type pagoGetPayload<S extends boolean | null | undefined | pagoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$pagoPayload, S>;
export type pagoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<pagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PagoCountAggregateInputType | true;
};
export interface pagoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['pago'];
        meta: {
            name: 'pago';
        };
    };
    findUnique<T extends pagoFindUniqueArgs>(args: Prisma.SelectSubset<T, pagoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends pagoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, pagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends pagoFindFirstArgs>(args?: Prisma.SelectSubset<T, pagoFindFirstArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends pagoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, pagoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends pagoFindManyArgs>(args?: Prisma.SelectSubset<T, pagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends pagoCreateArgs>(args: Prisma.SelectSubset<T, pagoCreateArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends pagoCreateManyArgs>(args?: Prisma.SelectSubset<T, pagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends pagoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, pagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends pagoDeleteArgs>(args: Prisma.SelectSubset<T, pagoDeleteArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends pagoUpdateArgs>(args: Prisma.SelectSubset<T, pagoUpdateArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends pagoDeleteManyArgs>(args?: Prisma.SelectSubset<T, pagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends pagoUpdateManyArgs>(args: Prisma.SelectSubset<T, pagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends pagoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, pagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends pagoUpsertArgs>(args: Prisma.SelectSubset<T, pagoUpsertArgs<ExtArgs>>): Prisma.Prisma__pagoClient<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends pagoCountArgs>(args?: Prisma.Subset<T, pagoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PagoCountAggregateOutputType> : number>;
    aggregate<T extends PagoAggregateArgs>(args: Prisma.Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>;
    groupBy<T extends pagoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: pagoGroupByArgs['orderBy'];
    } : {
        orderBy?: pagoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, pagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: pagoFieldRefs;
}
export interface Prisma__pagoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    factura<T extends Prisma.pago$facturaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pago$facturaArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    cliente<T extends Prisma.pago$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.pago$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface pagoFieldRefs {
    readonly id_pago: Prisma.FieldRef<"pago", 'Int'>;
    readonly id_factura: Prisma.FieldRef<"pago", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"pago", 'Int'>;
    readonly monto: Prisma.FieldRef<"pago", 'Decimal'>;
    readonly fecha_pago: Prisma.FieldRef<"pago", 'DateTime'>;
    readonly codigo_transaccion: Prisma.FieldRef<"pago", 'String'>;
    readonly pasarela: Prisma.FieldRef<"pago", 'String'>;
    readonly token_transaccional: Prisma.FieldRef<"pago", 'String'>;
    readonly comprobante_pdf_url: Prisma.FieldRef<"pago", 'String'>;
}
export type pagoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where: Prisma.pagoWhereUniqueInput;
};
export type pagoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where: Prisma.pagoWhereUniqueInput;
};
export type pagoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    cursor?: Prisma.pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type pagoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    cursor?: Prisma.pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type pagoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where?: Prisma.pagoWhereInput;
    orderBy?: Prisma.pagoOrderByWithRelationInput | Prisma.pagoOrderByWithRelationInput[];
    cursor?: Prisma.pagoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PagoScalarFieldEnum | Prisma.PagoScalarFieldEnum[];
};
export type pagoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pagoCreateInput, Prisma.pagoUncheckedCreateInput>;
};
export type pagoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.pagoCreateManyInput | Prisma.pagoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type pagoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    data: Prisma.pagoCreateManyInput | Prisma.pagoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.pagoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type pagoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pagoUpdateInput, Prisma.pagoUncheckedUpdateInput>;
    where: Prisma.pagoWhereUniqueInput;
};
export type pagoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyInput>;
    where?: Prisma.pagoWhereInput;
    limit?: number;
};
export type pagoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.pagoUpdateManyMutationInput, Prisma.pagoUncheckedUpdateManyInput>;
    where?: Prisma.pagoWhereInput;
    limit?: number;
    include?: Prisma.pagoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type pagoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where: Prisma.pagoWhereUniqueInput;
    create: Prisma.XOR<Prisma.pagoCreateInput, Prisma.pagoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.pagoUpdateInput, Prisma.pagoUncheckedUpdateInput>;
};
export type pagoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
    where: Prisma.pagoWhereUniqueInput;
};
export type pagoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
    limit?: number;
};
export type pago$facturaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where?: Prisma.facturaWhereInput;
};
export type pago$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type pagoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.pagoSelect<ExtArgs> | null;
    omit?: Prisma.pagoOmit<ExtArgs> | null;
    include?: Prisma.pagoInclude<ExtArgs> | null;
};
