import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type facturaModel = runtime.Types.Result.DefaultSelection<Prisma.$facturaPayload>;
export type AggregateFactura = {
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type FacturaAvgAggregateOutputType = {
    id_factura: number | null;
    id_contrato: number | null;
    periodo_mes: number | null;
    periodo_anio: number | null;
    monto: runtime.Decimal | null;
};
export type FacturaSumAggregateOutputType = {
    id_factura: number | null;
    id_contrato: number | null;
    periodo_mes: number | null;
    periodo_anio: number | null;
    monto: runtime.Decimal | null;
};
export type FacturaMinAggregateOutputType = {
    id_factura: number | null;
    id_contrato: number | null;
    periodo_mes: number | null;
    periodo_anio: number | null;
    monto: runtime.Decimal | null;
    fecha_emision: Date | null;
    fecha_limite_pago: Date | null;
    estado: string | null;
};
export type FacturaMaxAggregateOutputType = {
    id_factura: number | null;
    id_contrato: number | null;
    periodo_mes: number | null;
    periodo_anio: number | null;
    monto: runtime.Decimal | null;
    fecha_emision: Date | null;
    fecha_limite_pago: Date | null;
    estado: string | null;
};
export type FacturaCountAggregateOutputType = {
    id_factura: number;
    id_contrato: number;
    periodo_mes: number;
    periodo_anio: number;
    monto: number;
    fecha_emision: number;
    fecha_limite_pago: number;
    estado: number;
    _all: number;
};
export type FacturaAvgAggregateInputType = {
    id_factura?: true;
    id_contrato?: true;
    periodo_mes?: true;
    periodo_anio?: true;
    monto?: true;
};
export type FacturaSumAggregateInputType = {
    id_factura?: true;
    id_contrato?: true;
    periodo_mes?: true;
    periodo_anio?: true;
    monto?: true;
};
export type FacturaMinAggregateInputType = {
    id_factura?: true;
    id_contrato?: true;
    periodo_mes?: true;
    periodo_anio?: true;
    monto?: true;
    fecha_emision?: true;
    fecha_limite_pago?: true;
    estado?: true;
};
export type FacturaMaxAggregateInputType = {
    id_factura?: true;
    id_contrato?: true;
    periodo_mes?: true;
    periodo_anio?: true;
    monto?: true;
    fecha_emision?: true;
    fecha_limite_pago?: true;
    estado?: true;
};
export type FacturaCountAggregateInputType = {
    id_factura?: true;
    id_contrato?: true;
    periodo_mes?: true;
    periodo_anio?: true;
    monto?: true;
    fecha_emision?: true;
    fecha_limite_pago?: true;
    estado?: true;
    _all?: true;
};
export type FacturaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithRelationInput | Prisma.facturaOrderByWithRelationInput[];
    cursor?: Prisma.facturaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FacturaCountAggregateInputType;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type GetFacturaAggregateType<T extends FacturaAggregateArgs> = {
    [P in keyof T & keyof AggregateFactura]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFactura[P]> : Prisma.GetScalarType<T[P], AggregateFactura[P]>;
};
export type facturaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    orderBy?: Prisma.facturaOrderByWithAggregationInput | Prisma.facturaOrderByWithAggregationInput[];
    by: Prisma.FacturaScalarFieldEnum[] | Prisma.FacturaScalarFieldEnum;
    having?: Prisma.facturaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacturaCountAggregateInputType | true;
    _avg?: FacturaAvgAggregateInputType;
    _sum?: FacturaSumAggregateInputType;
    _min?: FacturaMinAggregateInputType;
    _max?: FacturaMaxAggregateInputType;
};
export type FacturaGroupByOutputType = {
    id_factura: number;
    id_contrato: number | null;
    periodo_mes: number;
    periodo_anio: number;
    monto: runtime.Decimal | null;
    fecha_emision: Date | null;
    fecha_limite_pago: Date;
    estado: string;
    _count: FacturaCountAggregateOutputType | null;
    _avg: FacturaAvgAggregateOutputType | null;
    _sum: FacturaSumAggregateOutputType | null;
    _min: FacturaMinAggregateOutputType | null;
    _max: FacturaMaxAggregateOutputType | null;
};
export type GetFacturaGroupByPayload<T extends facturaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacturaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacturaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacturaGroupByOutputType[P]>;
}>>;
export type facturaWhereInput = {
    AND?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    OR?: Prisma.facturaWhereInput[];
    NOT?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    id_factura?: Prisma.IntFilter<"factura"> | number;
    id_contrato?: Prisma.IntNullableFilter<"factura"> | number | null;
    periodo_mes?: Prisma.IntFilter<"factura"> | number;
    periodo_anio?: Prisma.IntFilter<"factura"> | number;
    monto?: Prisma.DecimalNullableFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"factura"> | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFilter<"factura"> | Date | string;
    estado?: Prisma.StringFilter<"factura"> | string;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
    pagos?: Prisma.PagoListRelationFilter;
};
export type facturaOrderByWithRelationInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_limite_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    contrato?: Prisma.contratoOrderByWithRelationInput;
    pagos?: Prisma.pagoOrderByRelationAggregateInput;
};
export type facturaWhereUniqueInput = Prisma.AtLeast<{
    id_factura?: number;
    AND?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    OR?: Prisma.facturaWhereInput[];
    NOT?: Prisma.facturaWhereInput | Prisma.facturaWhereInput[];
    id_contrato?: Prisma.IntNullableFilter<"factura"> | number | null;
    periodo_mes?: Prisma.IntFilter<"factura"> | number;
    periodo_anio?: Prisma.IntFilter<"factura"> | number;
    monto?: Prisma.DecimalNullableFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"factura"> | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFilter<"factura"> | Date | string;
    estado?: Prisma.StringFilter<"factura"> | string;
    contrato?: Prisma.XOR<Prisma.ContratoNullableScalarRelationFilter, Prisma.contratoWhereInput> | null;
    pagos?: Prisma.PagoListRelationFilter;
}, "id_factura">;
export type facturaOrderByWithAggregationInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_limite_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    _count?: Prisma.facturaCountOrderByAggregateInput;
    _avg?: Prisma.facturaAvgOrderByAggregateInput;
    _max?: Prisma.facturaMaxOrderByAggregateInput;
    _min?: Prisma.facturaMinOrderByAggregateInput;
    _sum?: Prisma.facturaSumOrderByAggregateInput;
};
export type facturaScalarWhereWithAggregatesInput = {
    AND?: Prisma.facturaScalarWhereWithAggregatesInput | Prisma.facturaScalarWhereWithAggregatesInput[];
    OR?: Prisma.facturaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.facturaScalarWhereWithAggregatesInput | Prisma.facturaScalarWhereWithAggregatesInput[];
    id_factura?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    id_contrato?: Prisma.IntNullableWithAggregatesFilter<"factura"> | number | null;
    periodo_mes?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    periodo_anio?: Prisma.IntWithAggregatesFilter<"factura"> | number;
    monto?: Prisma.DecimalNullableWithAggregatesFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableWithAggregatesFilter<"factura"> | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeWithAggregatesFilter<"factura"> | Date | string;
    estado?: Prisma.StringWithAggregatesFilter<"factura"> | string;
};
export type facturaCreateInput = {
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
    contrato?: Prisma.contratoCreateNestedOneWithoutFacturasInput;
    pagos?: Prisma.pagoCreateNestedManyWithoutFacturaInput;
};
export type facturaUncheckedCreateInput = {
    id_factura?: number;
    id_contrato?: number | null;
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
    pagos?: Prisma.pagoUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaUpdateInput = {
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    contrato?: Prisma.contratoUpdateOneWithoutFacturasNestedInput;
    pagos?: Prisma.pagoUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    id_contrato?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    pagos?: Prisma.pagoUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaCreateManyInput = {
    id_factura?: number;
    id_contrato?: number | null;
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
};
export type facturaUpdateManyMutationInput = {
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type facturaUncheckedUpdateManyInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    id_contrato?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FacturaListRelationFilter = {
    every?: Prisma.facturaWhereInput;
    some?: Prisma.facturaWhereInput;
    none?: Prisma.facturaWhereInput;
};
export type facturaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type facturaCountOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
    fecha_limite_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type facturaAvgOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type facturaMaxOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
    fecha_limite_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type facturaMinOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
    fecha_emision?: Prisma.SortOrder;
    fecha_limite_pago?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
};
export type facturaSumOrderByAggregateInput = {
    id_factura?: Prisma.SortOrder;
    id_contrato?: Prisma.SortOrder;
    periodo_mes?: Prisma.SortOrder;
    periodo_anio?: Prisma.SortOrder;
    monto?: Prisma.SortOrder;
};
export type FacturaNullableScalarRelationFilter = {
    is?: Prisma.facturaWhereInput | null;
    isNot?: Prisma.facturaWhereInput | null;
};
export type facturaCreateNestedManyWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput> | Prisma.facturaCreateWithoutContratoInput[] | Prisma.facturaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutContratoInput | Prisma.facturaCreateOrConnectWithoutContratoInput[];
    createMany?: Prisma.facturaCreateManyContratoInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUncheckedCreateNestedManyWithoutContratoInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput> | Prisma.facturaCreateWithoutContratoInput[] | Prisma.facturaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutContratoInput | Prisma.facturaCreateOrConnectWithoutContratoInput[];
    createMany?: Prisma.facturaCreateManyContratoInputEnvelope;
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
};
export type facturaUpdateManyWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput> | Prisma.facturaCreateWithoutContratoInput[] | Prisma.facturaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutContratoInput | Prisma.facturaCreateOrConnectWithoutContratoInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutContratoInput | Prisma.facturaUpsertWithWhereUniqueWithoutContratoInput[];
    createMany?: Prisma.facturaCreateManyContratoInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutContratoInput | Prisma.facturaUpdateWithWhereUniqueWithoutContratoInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutContratoInput | Prisma.facturaUpdateManyWithWhereWithoutContratoInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type facturaUncheckedUpdateManyWithoutContratoNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput> | Prisma.facturaCreateWithoutContratoInput[] | Prisma.facturaUncheckedCreateWithoutContratoInput[];
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutContratoInput | Prisma.facturaCreateOrConnectWithoutContratoInput[];
    upsert?: Prisma.facturaUpsertWithWhereUniqueWithoutContratoInput | Prisma.facturaUpsertWithWhereUniqueWithoutContratoInput[];
    createMany?: Prisma.facturaCreateManyContratoInputEnvelope;
    set?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    disconnect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    delete?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    connect?: Prisma.facturaWhereUniqueInput | Prisma.facturaWhereUniqueInput[];
    update?: Prisma.facturaUpdateWithWhereUniqueWithoutContratoInput | Prisma.facturaUpdateWithWhereUniqueWithoutContratoInput[];
    updateMany?: Prisma.facturaUpdateManyWithWhereWithoutContratoInput | Prisma.facturaUpdateManyWithWhereWithoutContratoInput[];
    deleteMany?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
};
export type NullableDecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type facturaCreateNestedOneWithoutPagosInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutPagosInput, Prisma.facturaUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutPagosInput;
    connect?: Prisma.facturaWhereUniqueInput;
};
export type facturaUpdateOneWithoutPagosNestedInput = {
    create?: Prisma.XOR<Prisma.facturaCreateWithoutPagosInput, Prisma.facturaUncheckedCreateWithoutPagosInput>;
    connectOrCreate?: Prisma.facturaCreateOrConnectWithoutPagosInput;
    upsert?: Prisma.facturaUpsertWithoutPagosInput;
    disconnect?: Prisma.facturaWhereInput | boolean;
    delete?: Prisma.facturaWhereInput | boolean;
    connect?: Prisma.facturaWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.facturaUpdateToOneWithWhereWithoutPagosInput, Prisma.facturaUpdateWithoutPagosInput>, Prisma.facturaUncheckedUpdateWithoutPagosInput>;
};
export type facturaCreateWithoutContratoInput = {
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
    pagos?: Prisma.pagoCreateNestedManyWithoutFacturaInput;
};
export type facturaUncheckedCreateWithoutContratoInput = {
    id_factura?: number;
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
    pagos?: Prisma.pagoUncheckedCreateNestedManyWithoutFacturaInput;
};
export type facturaCreateOrConnectWithoutContratoInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput>;
};
export type facturaCreateManyContratoInputEnvelope = {
    data: Prisma.facturaCreateManyContratoInput | Prisma.facturaCreateManyContratoInput[];
    skipDuplicates?: boolean;
};
export type facturaUpsertWithWhereUniqueWithoutContratoInput = {
    where: Prisma.facturaWhereUniqueInput;
    update: Prisma.XOR<Prisma.facturaUpdateWithoutContratoInput, Prisma.facturaUncheckedUpdateWithoutContratoInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutContratoInput, Prisma.facturaUncheckedCreateWithoutContratoInput>;
};
export type facturaUpdateWithWhereUniqueWithoutContratoInput = {
    where: Prisma.facturaWhereUniqueInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutContratoInput, Prisma.facturaUncheckedUpdateWithoutContratoInput>;
};
export type facturaUpdateManyWithWhereWithoutContratoInput = {
    where: Prisma.facturaScalarWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyWithoutContratoInput>;
};
export type facturaScalarWhereInput = {
    AND?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
    OR?: Prisma.facturaScalarWhereInput[];
    NOT?: Prisma.facturaScalarWhereInput | Prisma.facturaScalarWhereInput[];
    id_factura?: Prisma.IntFilter<"factura"> | number;
    id_contrato?: Prisma.IntNullableFilter<"factura"> | number | null;
    periodo_mes?: Prisma.IntFilter<"factura"> | number;
    periodo_anio?: Prisma.IntFilter<"factura"> | number;
    monto?: Prisma.DecimalNullableFilter<"factura"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.DateTimeNullableFilter<"factura"> | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFilter<"factura"> | Date | string;
    estado?: Prisma.StringFilter<"factura"> | string;
};
export type facturaCreateWithoutPagosInput = {
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
    contrato?: Prisma.contratoCreateNestedOneWithoutFacturasInput;
};
export type facturaUncheckedCreateWithoutPagosInput = {
    id_factura?: number;
    id_contrato?: number | null;
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
};
export type facturaCreateOrConnectWithoutPagosInput = {
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateWithoutPagosInput, Prisma.facturaUncheckedCreateWithoutPagosInput>;
};
export type facturaUpsertWithoutPagosInput = {
    update: Prisma.XOR<Prisma.facturaUpdateWithoutPagosInput, Prisma.facturaUncheckedUpdateWithoutPagosInput>;
    create: Prisma.XOR<Prisma.facturaCreateWithoutPagosInput, Prisma.facturaUncheckedCreateWithoutPagosInput>;
    where?: Prisma.facturaWhereInput;
};
export type facturaUpdateToOneWithWhereWithoutPagosInput = {
    where?: Prisma.facturaWhereInput;
    data: Prisma.XOR<Prisma.facturaUpdateWithoutPagosInput, Prisma.facturaUncheckedUpdateWithoutPagosInput>;
};
export type facturaUpdateWithoutPagosInput = {
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    contrato?: Prisma.contratoUpdateOneWithoutFacturasNestedInput;
};
export type facturaUncheckedUpdateWithoutPagosInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    id_contrato?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type facturaCreateManyContratoInput = {
    id_factura?: number;
    periodo_mes: number;
    periodo_anio: number;
    monto?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Date | string | null;
    fecha_limite_pago: Date | string;
    estado: string;
};
export type facturaUpdateWithoutContratoInput = {
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    pagos?: Prisma.pagoUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateWithoutContratoInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    pagos?: Prisma.pagoUncheckedUpdateManyWithoutFacturaNestedInput;
};
export type facturaUncheckedUpdateManyWithoutContratoInput = {
    id_factura?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_mes?: Prisma.IntFieldUpdateOperationsInput | number;
    periodo_anio?: Prisma.IntFieldUpdateOperationsInput | number;
    monto?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    fecha_emision?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    fecha_limite_pago?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type FacturaCountOutputType = {
    pagos: number;
};
export type FacturaCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    pagos?: boolean | FacturaCountOutputTypeCountPagosArgs;
};
export type FacturaCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacturaCountOutputTypeSelect<ExtArgs> | null;
};
export type FacturaCountOutputTypeCountPagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.pagoWhereInput;
};
export type facturaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_factura?: boolean;
    id_contrato?: boolean;
    periodo_mes?: boolean;
    periodo_anio?: boolean;
    monto?: boolean;
    fecha_emision?: boolean;
    fecha_limite_pago?: boolean;
    estado?: boolean;
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
    pagos?: boolean | Prisma.factura$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type facturaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_factura?: boolean;
    id_contrato?: boolean;
    periodo_mes?: boolean;
    periodo_anio?: boolean;
    monto?: boolean;
    fecha_emision?: boolean;
    fecha_limite_pago?: boolean;
    estado?: boolean;
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type facturaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_factura?: boolean;
    id_contrato?: boolean;
    periodo_mes?: boolean;
    periodo_anio?: boolean;
    monto?: boolean;
    fecha_emision?: boolean;
    fecha_limite_pago?: boolean;
    estado?: boolean;
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
}, ExtArgs["result"]["factura"]>;
export type facturaSelectScalar = {
    id_factura?: boolean;
    id_contrato?: boolean;
    periodo_mes?: boolean;
    periodo_anio?: boolean;
    monto?: boolean;
    fecha_emision?: boolean;
    fecha_limite_pago?: boolean;
    estado?: boolean;
};
export type facturaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_factura" | "id_contrato" | "periodo_mes" | "periodo_anio" | "monto" | "fecha_emision" | "fecha_limite_pago" | "estado", ExtArgs["result"]["factura"]>;
export type facturaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
    pagos?: boolean | Prisma.factura$pagosArgs<ExtArgs>;
    _count?: boolean | Prisma.FacturaCountOutputTypeDefaultArgs<ExtArgs>;
};
export type facturaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
};
export type facturaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    contrato?: boolean | Prisma.factura$contratoArgs<ExtArgs>;
};
export type $facturaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "factura";
    objects: {
        contrato: Prisma.$contratoPayload<ExtArgs> | null;
        pagos: Prisma.$pagoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_factura: number;
        id_contrato: number | null;
        periodo_mes: number;
        periodo_anio: number;
        monto: runtime.Decimal | null;
        fecha_emision: Date | null;
        fecha_limite_pago: Date;
        estado: string;
    }, ExtArgs["result"]["factura"]>;
    composites: {};
};
export type facturaGetPayload<S extends boolean | null | undefined | facturaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$facturaPayload, S>;
export type facturaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<facturaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacturaCountAggregateInputType | true;
};
export interface facturaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['factura'];
        meta: {
            name: 'factura';
        };
    };
    findUnique<T extends facturaFindUniqueArgs>(args: Prisma.SelectSubset<T, facturaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends facturaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, facturaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends facturaFindFirstArgs>(args?: Prisma.SelectSubset<T, facturaFindFirstArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends facturaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, facturaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends facturaFindManyArgs>(args?: Prisma.SelectSubset<T, facturaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends facturaCreateArgs>(args: Prisma.SelectSubset<T, facturaCreateArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends facturaCreateManyArgs>(args?: Prisma.SelectSubset<T, facturaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends facturaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, facturaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends facturaDeleteArgs>(args: Prisma.SelectSubset<T, facturaDeleteArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends facturaUpdateArgs>(args: Prisma.SelectSubset<T, facturaUpdateArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends facturaDeleteManyArgs>(args?: Prisma.SelectSubset<T, facturaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends facturaUpdateManyArgs>(args: Prisma.SelectSubset<T, facturaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends facturaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, facturaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends facturaUpsertArgs>(args: Prisma.SelectSubset<T, facturaUpsertArgs<ExtArgs>>): Prisma.Prisma__facturaClient<runtime.Types.Result.GetResult<Prisma.$facturaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends facturaCountArgs>(args?: Prisma.Subset<T, facturaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacturaCountAggregateOutputType> : number>;
    aggregate<T extends FacturaAggregateArgs>(args: Prisma.Subset<T, FacturaAggregateArgs>): Prisma.PrismaPromise<GetFacturaAggregateType<T>>;
    groupBy<T extends facturaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: facturaGroupByArgs['orderBy'];
    } : {
        orderBy?: facturaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, facturaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacturaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: facturaFieldRefs;
}
export interface Prisma__facturaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    contrato<T extends Prisma.factura$contratoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.factura$contratoArgs<ExtArgs>>): Prisma.Prisma__contratoClient<runtime.Types.Result.GetResult<Prisma.$contratoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    pagos<T extends Prisma.factura$pagosArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.factura$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$pagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface facturaFieldRefs {
    readonly id_factura: Prisma.FieldRef<"factura", 'Int'>;
    readonly id_contrato: Prisma.FieldRef<"factura", 'Int'>;
    readonly periodo_mes: Prisma.FieldRef<"factura", 'Int'>;
    readonly periodo_anio: Prisma.FieldRef<"factura", 'Int'>;
    readonly monto: Prisma.FieldRef<"factura", 'Decimal'>;
    readonly fecha_emision: Prisma.FieldRef<"factura", 'DateTime'>;
    readonly fecha_limite_pago: Prisma.FieldRef<"factura", 'DateTime'>;
    readonly estado: Prisma.FieldRef<"factura", 'String'>;
}
export type facturaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type facturaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type facturaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type facturaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.facturaCreateInput, Prisma.facturaUncheckedCreateInput>;
};
export type facturaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.facturaCreateManyInput | Prisma.facturaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type facturaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    data: Prisma.facturaCreateManyInput | Prisma.facturaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.facturaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type facturaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.facturaUpdateInput, Prisma.facturaUncheckedUpdateInput>;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyInput>;
    where?: Prisma.facturaWhereInput;
    limit?: number;
};
export type facturaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.facturaUpdateManyMutationInput, Prisma.facturaUncheckedUpdateManyInput>;
    where?: Prisma.facturaWhereInput;
    limit?: number;
    include?: Prisma.facturaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type facturaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
    create: Prisma.XOR<Prisma.facturaCreateInput, Prisma.facturaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.facturaUpdateInput, Prisma.facturaUncheckedUpdateInput>;
};
export type facturaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
    where: Prisma.facturaWhereUniqueInput;
};
export type facturaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.facturaWhereInput;
    limit?: number;
};
export type factura$contratoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.contratoSelect<ExtArgs> | null;
    omit?: Prisma.contratoOmit<ExtArgs> | null;
    include?: Prisma.contratoInclude<ExtArgs> | null;
    where?: Prisma.contratoWhereInput;
};
export type factura$pagosArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type facturaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.facturaSelect<ExtArgs> | null;
    omit?: Prisma.facturaOmit<ExtArgs> | null;
    include?: Prisma.facturaInclude<ExtArgs> | null;
};
