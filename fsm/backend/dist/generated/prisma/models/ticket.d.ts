import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ticketModel = runtime.Types.Result.DefaultSelection<Prisma.$ticketPayload>;
export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type TicketAvgAggregateOutputType = {
    id_ticket: number | null;
    id_cliente: number | null;
    id_empresa: number | null;
    id_usuario_asignado: number | null;
    id_categoria: number | null;
    id_conversacion_bot: number | null;
};
export type TicketSumAggregateOutputType = {
    id_ticket: number | null;
    id_cliente: number | null;
    id_empresa: number | null;
    id_usuario_asignado: number | null;
    id_categoria: number | null;
    id_conversacion_bot: number | null;
};
export type TicketMinAggregateOutputType = {
    id_ticket: number | null;
    id_cliente: number | null;
    id_empresa: number | null;
    id_usuario_asignado: number | null;
    id_categoria: number | null;
    id_conversacion_bot: number | null;
    codigo_seguimiento: string | null;
    prioridad: string | null;
    estado: string | null;
    descripcion: string | null;
    fecha_creacion: Date | null;
    fecha_cierre: Date | null;
    origen: string | null;
    resuelto_remotamente: boolean | null;
};
export type TicketMaxAggregateOutputType = {
    id_ticket: number | null;
    id_cliente: number | null;
    id_empresa: number | null;
    id_usuario_asignado: number | null;
    id_categoria: number | null;
    id_conversacion_bot: number | null;
    codigo_seguimiento: string | null;
    prioridad: string | null;
    estado: string | null;
    descripcion: string | null;
    fecha_creacion: Date | null;
    fecha_cierre: Date | null;
    origen: string | null;
    resuelto_remotamente: boolean | null;
};
export type TicketCountAggregateOutputType = {
    id_ticket: number;
    id_cliente: number;
    id_empresa: number;
    id_usuario_asignado: number;
    id_categoria: number;
    id_conversacion_bot: number;
    codigo_seguimiento: number;
    prioridad: number;
    estado: number;
    descripcion: number;
    fecha_creacion: number;
    fecha_cierre: number;
    origen: number;
    resuelto_remotamente: number;
    _all: number;
};
export type TicketAvgAggregateInputType = {
    id_ticket?: true;
    id_cliente?: true;
    id_empresa?: true;
    id_usuario_asignado?: true;
    id_categoria?: true;
    id_conversacion_bot?: true;
};
export type TicketSumAggregateInputType = {
    id_ticket?: true;
    id_cliente?: true;
    id_empresa?: true;
    id_usuario_asignado?: true;
    id_categoria?: true;
    id_conversacion_bot?: true;
};
export type TicketMinAggregateInputType = {
    id_ticket?: true;
    id_cliente?: true;
    id_empresa?: true;
    id_usuario_asignado?: true;
    id_categoria?: true;
    id_conversacion_bot?: true;
    codigo_seguimiento?: true;
    prioridad?: true;
    estado?: true;
    descripcion?: true;
    fecha_creacion?: true;
    fecha_cierre?: true;
    origen?: true;
    resuelto_remotamente?: true;
};
export type TicketMaxAggregateInputType = {
    id_ticket?: true;
    id_cliente?: true;
    id_empresa?: true;
    id_usuario_asignado?: true;
    id_categoria?: true;
    id_conversacion_bot?: true;
    codigo_seguimiento?: true;
    prioridad?: true;
    estado?: true;
    descripcion?: true;
    fecha_creacion?: true;
    fecha_cierre?: true;
    origen?: true;
    resuelto_remotamente?: true;
};
export type TicketCountAggregateInputType = {
    id_ticket?: true;
    id_cliente?: true;
    id_empresa?: true;
    id_usuario_asignado?: true;
    id_categoria?: true;
    id_conversacion_bot?: true;
    codigo_seguimiento?: true;
    prioridad?: true;
    estado?: true;
    descripcion?: true;
    fecha_creacion?: true;
    fecha_cierre?: true;
    origen?: true;
    resuelto_remotamente?: true;
    _all?: true;
};
export type TicketAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithRelationInput | Prisma.ticketOrderByWithRelationInput[];
    cursor?: Prisma.ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TicketCountAggregateInputType;
    _avg?: TicketAvgAggregateInputType;
    _sum?: TicketSumAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
    [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTicket[P]> : Prisma.GetScalarType<T[P], AggregateTicket[P]>;
};
export type ticketGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithAggregationInput | Prisma.ticketOrderByWithAggregationInput[];
    by: Prisma.TicketScalarFieldEnum[] | Prisma.TicketScalarFieldEnum;
    having?: Prisma.ticketScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketCountAggregateInputType | true;
    _avg?: TicketAvgAggregateInputType;
    _sum?: TicketSumAggregateInputType;
    _min?: TicketMinAggregateInputType;
    _max?: TicketMaxAggregateInputType;
};
export type TicketGroupByOutputType = {
    id_ticket: number;
    id_cliente: number | null;
    id_empresa: number | null;
    id_usuario_asignado: number | null;
    id_categoria: number;
    id_conversacion_bot: number | null;
    codigo_seguimiento: string | null;
    prioridad: string;
    estado: string;
    descripcion: string | null;
    fecha_creacion: Date;
    fecha_cierre: Date | null;
    origen: string | null;
    resuelto_remotamente: boolean;
    _count: TicketCountAggregateOutputType | null;
    _avg: TicketAvgAggregateOutputType | null;
    _sum: TicketSumAggregateOutputType | null;
    _min: TicketMinAggregateOutputType | null;
    _max: TicketMaxAggregateOutputType | null;
};
export type GetTicketGroupByPayload<T extends ticketGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketGroupByOutputType[P]>;
}>>;
export type ticketWhereInput = {
    AND?: Prisma.ticketWhereInput | Prisma.ticketWhereInput[];
    OR?: Prisma.ticketWhereInput[];
    NOT?: Prisma.ticketWhereInput | Prisma.ticketWhereInput[];
    id_ticket?: Prisma.IntFilter<"ticket"> | number;
    id_cliente?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_usuario_asignado?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_categoria?: Prisma.IntFilter<"ticket"> | number;
    id_conversacion_bot?: Prisma.IntNullableFilter<"ticket"> | number | null;
    codigo_seguimiento?: Prisma.StringNullableFilter<"ticket"> | string | null;
    prioridad?: Prisma.StringFilter<"ticket"> | string;
    estado?: Prisma.StringFilter<"ticket"> | string;
    descripcion?: Prisma.StringNullableFilter<"ticket"> | string | null;
    fecha_creacion?: Prisma.DateTimeFilter<"ticket"> | Date | string;
    fecha_cierre?: Prisma.DateTimeNullableFilter<"ticket"> | Date | string | null;
    origen?: Prisma.StringNullableFilter<"ticket"> | string | null;
    resuelto_remotamente?: Prisma.BoolFilter<"ticket"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_asignado?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    categoria?: Prisma.XOR<Prisma.Categoria_fallaScalarRelationFilter, Prisma.categoria_fallaWhereInput>;
    conversacion_bot?: Prisma.XOR<Prisma.Conversacion_botNullableScalarRelationFilter, Prisma.conversacion_botWhereInput> | null;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
};
export type ticketOrderByWithRelationInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigo_seguimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_cierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    resuelto_remotamente?: Prisma.SortOrder;
    cliente?: Prisma.clienteOrderByWithRelationInput;
    empresa?: Prisma.empresaOrderByWithRelationInput;
    usuario_asignado?: Prisma.usuarioOrderByWithRelationInput;
    categoria?: Prisma.categoria_fallaOrderByWithRelationInput;
    conversacion_bot?: Prisma.conversacion_botOrderByWithRelationInput;
    orden_trabajo?: Prisma.orden_trabajoOrderByWithRelationInput;
};
export type ticketWhereUniqueInput = Prisma.AtLeast<{
    id_ticket?: number;
    id_conversacion_bot?: number;
    codigo_seguimiento?: string;
    AND?: Prisma.ticketWhereInput | Prisma.ticketWhereInput[];
    OR?: Prisma.ticketWhereInput[];
    NOT?: Prisma.ticketWhereInput | Prisma.ticketWhereInput[];
    id_cliente?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_usuario_asignado?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_categoria?: Prisma.IntFilter<"ticket"> | number;
    prioridad?: Prisma.StringFilter<"ticket"> | string;
    estado?: Prisma.StringFilter<"ticket"> | string;
    descripcion?: Prisma.StringNullableFilter<"ticket"> | string | null;
    fecha_creacion?: Prisma.DateTimeFilter<"ticket"> | Date | string;
    fecha_cierre?: Prisma.DateTimeNullableFilter<"ticket"> | Date | string | null;
    origen?: Prisma.StringNullableFilter<"ticket"> | string | null;
    resuelto_remotamente?: Prisma.BoolFilter<"ticket"> | boolean;
    cliente?: Prisma.XOR<Prisma.ClienteNullableScalarRelationFilter, Prisma.clienteWhereInput> | null;
    empresa?: Prisma.XOR<Prisma.EmpresaNullableScalarRelationFilter, Prisma.empresaWhereInput> | null;
    usuario_asignado?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    categoria?: Prisma.XOR<Prisma.Categoria_fallaScalarRelationFilter, Prisma.categoria_fallaWhereInput>;
    conversacion_bot?: Prisma.XOR<Prisma.Conversacion_botNullableScalarRelationFilter, Prisma.conversacion_botWhereInput> | null;
    orden_trabajo?: Prisma.XOR<Prisma.Orden_trabajoNullableScalarRelationFilter, Prisma.orden_trabajoWhereInput> | null;
}, "id_ticket" | "id_conversacion_bot" | "codigo_seguimiento">;
export type ticketOrderByWithAggregationInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_empresa?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrderInput | Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrderInput | Prisma.SortOrder;
    codigo_seguimiento?: Prisma.SortOrderInput | Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_cierre?: Prisma.SortOrderInput | Prisma.SortOrder;
    origen?: Prisma.SortOrderInput | Prisma.SortOrder;
    resuelto_remotamente?: Prisma.SortOrder;
    _count?: Prisma.ticketCountOrderByAggregateInput;
    _avg?: Prisma.ticketAvgOrderByAggregateInput;
    _max?: Prisma.ticketMaxOrderByAggregateInput;
    _min?: Prisma.ticketMinOrderByAggregateInput;
    _sum?: Prisma.ticketSumOrderByAggregateInput;
};
export type ticketScalarWhereWithAggregatesInput = {
    AND?: Prisma.ticketScalarWhereWithAggregatesInput | Prisma.ticketScalarWhereWithAggregatesInput[];
    OR?: Prisma.ticketScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ticketScalarWhereWithAggregatesInput | Prisma.ticketScalarWhereWithAggregatesInput[];
    id_ticket?: Prisma.IntWithAggregatesFilter<"ticket"> | number;
    id_cliente?: Prisma.IntNullableWithAggregatesFilter<"ticket"> | number | null;
    id_empresa?: Prisma.IntNullableWithAggregatesFilter<"ticket"> | number | null;
    id_usuario_asignado?: Prisma.IntNullableWithAggregatesFilter<"ticket"> | number | null;
    id_categoria?: Prisma.IntWithAggregatesFilter<"ticket"> | number;
    id_conversacion_bot?: Prisma.IntNullableWithAggregatesFilter<"ticket"> | number | null;
    codigo_seguimiento?: Prisma.StringNullableWithAggregatesFilter<"ticket"> | string | null;
    prioridad?: Prisma.StringWithAggregatesFilter<"ticket"> | string;
    estado?: Prisma.StringWithAggregatesFilter<"ticket"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"ticket"> | string | null;
    fecha_creacion?: Prisma.DateTimeWithAggregatesFilter<"ticket"> | Date | string;
    fecha_cierre?: Prisma.DateTimeNullableWithAggregatesFilter<"ticket"> | Date | string | null;
    origen?: Prisma.StringNullableWithAggregatesFilter<"ticket"> | string | null;
    resuelto_remotamente?: Prisma.BoolWithAggregatesFilter<"ticket"> | boolean;
};
export type ticketCreateInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketUpdateInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketCreateManyInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketUpdateManyMutationInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketUncheckedUpdateManyInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type TicketListRelationFilter = {
    every?: Prisma.ticketWhereInput;
    some?: Prisma.ticketWhereInput;
    none?: Prisma.ticketWhereInput;
};
export type ticketOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ticketCountOrderByAggregateInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrder;
    codigo_seguimiento?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_cierre?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    resuelto_remotamente?: Prisma.SortOrder;
};
export type ticketAvgOrderByAggregateInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrder;
};
export type ticketMaxOrderByAggregateInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrder;
    codigo_seguimiento?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_cierre?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    resuelto_remotamente?: Prisma.SortOrder;
};
export type ticketMinOrderByAggregateInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrder;
    codigo_seguimiento?: Prisma.SortOrder;
    prioridad?: Prisma.SortOrder;
    estado?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    fecha_creacion?: Prisma.SortOrder;
    fecha_cierre?: Prisma.SortOrder;
    origen?: Prisma.SortOrder;
    resuelto_remotamente?: Prisma.SortOrder;
};
export type ticketSumOrderByAggregateInput = {
    id_ticket?: Prisma.SortOrder;
    id_cliente?: Prisma.SortOrder;
    id_empresa?: Prisma.SortOrder;
    id_usuario_asignado?: Prisma.SortOrder;
    id_categoria?: Prisma.SortOrder;
    id_conversacion_bot?: Prisma.SortOrder;
};
export type TicketNullableScalarRelationFilter = {
    is?: Prisma.ticketWhereInput | null;
    isNot?: Prisma.ticketWhereInput | null;
};
export type ticketCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput> | Prisma.ticketCreateWithoutEmpresaInput[] | Prisma.ticketUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutEmpresaInput | Prisma.ticketCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.ticketCreateManyEmpresaInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUncheckedCreateNestedManyWithoutEmpresaInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput> | Prisma.ticketCreateWithoutEmpresaInput[] | Prisma.ticketUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutEmpresaInput | Prisma.ticketCreateOrConnectWithoutEmpresaInput[];
    createMany?: Prisma.ticketCreateManyEmpresaInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput> | Prisma.ticketCreateWithoutEmpresaInput[] | Prisma.ticketUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutEmpresaInput | Prisma.ticketCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.ticketUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.ticketCreateManyEmpresaInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.ticketUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutEmpresaInput | Prisma.ticketUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketUncheckedUpdateManyWithoutEmpresaNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput> | Prisma.ticketCreateWithoutEmpresaInput[] | Prisma.ticketUncheckedCreateWithoutEmpresaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutEmpresaInput | Prisma.ticketCreateOrConnectWithoutEmpresaInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutEmpresaInput | Prisma.ticketUpsertWithWhereUniqueWithoutEmpresaInput[];
    createMany?: Prisma.ticketCreateManyEmpresaInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutEmpresaInput | Prisma.ticketUpdateWithWhereUniqueWithoutEmpresaInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutEmpresaInput | Prisma.ticketUpdateManyWithWhereWithoutEmpresaInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketCreateNestedManyWithoutUsuario_asignadoInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput> | Prisma.ticketCreateWithoutUsuario_asignadoInput[] | Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput | Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput[];
    createMany?: Prisma.ticketCreateManyUsuario_asignadoInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUncheckedCreateNestedManyWithoutUsuario_asignadoInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput> | Prisma.ticketCreateWithoutUsuario_asignadoInput[] | Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput | Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput[];
    createMany?: Prisma.ticketCreateManyUsuario_asignadoInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUpdateManyWithoutUsuario_asignadoNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput> | Prisma.ticketCreateWithoutUsuario_asignadoInput[] | Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput | Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutUsuario_asignadoInput | Prisma.ticketUpsertWithWhereUniqueWithoutUsuario_asignadoInput[];
    createMany?: Prisma.ticketCreateManyUsuario_asignadoInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutUsuario_asignadoInput | Prisma.ticketUpdateWithWhereUniqueWithoutUsuario_asignadoInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutUsuario_asignadoInput | Prisma.ticketUpdateManyWithWhereWithoutUsuario_asignadoInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketUncheckedUpdateManyWithoutUsuario_asignadoNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput> | Prisma.ticketCreateWithoutUsuario_asignadoInput[] | Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput | Prisma.ticketCreateOrConnectWithoutUsuario_asignadoInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutUsuario_asignadoInput | Prisma.ticketUpsertWithWhereUniqueWithoutUsuario_asignadoInput[];
    createMany?: Prisma.ticketCreateManyUsuario_asignadoInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutUsuario_asignadoInput | Prisma.ticketUpdateWithWhereUniqueWithoutUsuario_asignadoInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutUsuario_asignadoInput | Prisma.ticketUpdateManyWithWhereWithoutUsuario_asignadoInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput> | Prisma.ticketCreateWithoutClienteInput[] | Prisma.ticketUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutClienteInput | Prisma.ticketCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.ticketCreateManyClienteInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUncheckedCreateNestedManyWithoutClienteInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput> | Prisma.ticketCreateWithoutClienteInput[] | Prisma.ticketUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutClienteInput | Prisma.ticketCreateOrConnectWithoutClienteInput[];
    createMany?: Prisma.ticketCreateManyClienteInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput> | Prisma.ticketCreateWithoutClienteInput[] | Prisma.ticketUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutClienteInput | Prisma.ticketCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutClienteInput | Prisma.ticketUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.ticketCreateManyClienteInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutClienteInput | Prisma.ticketUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutClienteInput | Prisma.ticketUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketUncheckedUpdateManyWithoutClienteNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput> | Prisma.ticketCreateWithoutClienteInput[] | Prisma.ticketUncheckedCreateWithoutClienteInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutClienteInput | Prisma.ticketCreateOrConnectWithoutClienteInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutClienteInput | Prisma.ticketUpsertWithWhereUniqueWithoutClienteInput[];
    createMany?: Prisma.ticketCreateManyClienteInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutClienteInput | Prisma.ticketUpdateWithWhereUniqueWithoutClienteInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutClienteInput | Prisma.ticketUpdateManyWithWhereWithoutClienteInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketCreateNestedOneWithoutOrden_trabajoInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutOrden_trabajoInput, Prisma.ticketUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutOrden_trabajoInput;
    connect?: Prisma.ticketWhereUniqueInput;
};
export type ticketUpdateOneWithoutOrden_trabajoNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutOrden_trabajoInput, Prisma.ticketUncheckedCreateWithoutOrden_trabajoInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutOrden_trabajoInput;
    upsert?: Prisma.ticketUpsertWithoutOrden_trabajoInput;
    disconnect?: Prisma.ticketWhereInput | boolean;
    delete?: Prisma.ticketWhereInput | boolean;
    connect?: Prisma.ticketWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ticketUpdateToOneWithWhereWithoutOrden_trabajoInput, Prisma.ticketUpdateWithoutOrden_trabajoInput>, Prisma.ticketUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type ticketCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput> | Prisma.ticketCreateWithoutCategoriaInput[] | Prisma.ticketUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutCategoriaInput | Prisma.ticketCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ticketCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput> | Prisma.ticketCreateWithoutCategoriaInput[] | Prisma.ticketUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutCategoriaInput | Prisma.ticketCreateOrConnectWithoutCategoriaInput[];
    createMany?: Prisma.ticketCreateManyCategoriaInputEnvelope;
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
};
export type ticketUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput> | Prisma.ticketCreateWithoutCategoriaInput[] | Prisma.ticketUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutCategoriaInput | Prisma.ticketCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ticketUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ticketCreateManyCategoriaInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ticketUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutCategoriaInput | Prisma.ticketUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput> | Prisma.ticketCreateWithoutCategoriaInput[] | Prisma.ticketUncheckedCreateWithoutCategoriaInput[];
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutCategoriaInput | Prisma.ticketCreateOrConnectWithoutCategoriaInput[];
    upsert?: Prisma.ticketUpsertWithWhereUniqueWithoutCategoriaInput | Prisma.ticketUpsertWithWhereUniqueWithoutCategoriaInput[];
    createMany?: Prisma.ticketCreateManyCategoriaInputEnvelope;
    set?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    disconnect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    delete?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    connect?: Prisma.ticketWhereUniqueInput | Prisma.ticketWhereUniqueInput[];
    update?: Prisma.ticketUpdateWithWhereUniqueWithoutCategoriaInput | Prisma.ticketUpdateWithWhereUniqueWithoutCategoriaInput[];
    updateMany?: Prisma.ticketUpdateManyWithWhereWithoutCategoriaInput | Prisma.ticketUpdateManyWithWhereWithoutCategoriaInput[];
    deleteMany?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
};
export type ticketCreateNestedOneWithoutConversacion_botInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutConversacion_botInput;
    connect?: Prisma.ticketWhereUniqueInput;
};
export type ticketUncheckedCreateNestedOneWithoutConversacion_botInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutConversacion_botInput;
    connect?: Prisma.ticketWhereUniqueInput;
};
export type ticketUpdateOneWithoutConversacion_botNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutConversacion_botInput;
    upsert?: Prisma.ticketUpsertWithoutConversacion_botInput;
    disconnect?: Prisma.ticketWhereInput | boolean;
    delete?: Prisma.ticketWhereInput | boolean;
    connect?: Prisma.ticketWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ticketUpdateToOneWithWhereWithoutConversacion_botInput, Prisma.ticketUpdateWithoutConversacion_botInput>, Prisma.ticketUncheckedUpdateWithoutConversacion_botInput>;
};
export type ticketUncheckedUpdateOneWithoutConversacion_botNestedInput = {
    create?: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
    connectOrCreate?: Prisma.ticketCreateOrConnectWithoutConversacion_botInput;
    upsert?: Prisma.ticketUpsertWithoutConversacion_botInput;
    disconnect?: Prisma.ticketWhereInput | boolean;
    delete?: Prisma.ticketWhereInput | boolean;
    connect?: Prisma.ticketWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ticketUpdateToOneWithWhereWithoutConversacion_botInput, Prisma.ticketUpdateWithoutConversacion_botInput>, Prisma.ticketUncheckedUpdateWithoutConversacion_botInput>;
};
export type ticketCreateWithoutEmpresaInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutEmpresaInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketCreateOrConnectWithoutEmpresaInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput>;
};
export type ticketCreateManyEmpresaInputEnvelope = {
    data: Prisma.ticketCreateManyEmpresaInput | Prisma.ticketCreateManyEmpresaInput[];
    skipDuplicates?: boolean;
};
export type ticketUpsertWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.ticketWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticketUpdateWithoutEmpresaInput, Prisma.ticketUncheckedUpdateWithoutEmpresaInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutEmpresaInput, Prisma.ticketUncheckedCreateWithoutEmpresaInput>;
};
export type ticketUpdateWithWhereUniqueWithoutEmpresaInput = {
    where: Prisma.ticketWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutEmpresaInput, Prisma.ticketUncheckedUpdateWithoutEmpresaInput>;
};
export type ticketUpdateManyWithWhereWithoutEmpresaInput = {
    where: Prisma.ticketScalarWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyWithoutEmpresaInput>;
};
export type ticketScalarWhereInput = {
    AND?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
    OR?: Prisma.ticketScalarWhereInput[];
    NOT?: Prisma.ticketScalarWhereInput | Prisma.ticketScalarWhereInput[];
    id_ticket?: Prisma.IntFilter<"ticket"> | number;
    id_cliente?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_empresa?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_usuario_asignado?: Prisma.IntNullableFilter<"ticket"> | number | null;
    id_categoria?: Prisma.IntFilter<"ticket"> | number;
    id_conversacion_bot?: Prisma.IntNullableFilter<"ticket"> | number | null;
    codigo_seguimiento?: Prisma.StringNullableFilter<"ticket"> | string | null;
    prioridad?: Prisma.StringFilter<"ticket"> | string;
    estado?: Prisma.StringFilter<"ticket"> | string;
    descripcion?: Prisma.StringNullableFilter<"ticket"> | string | null;
    fecha_creacion?: Prisma.DateTimeFilter<"ticket"> | Date | string;
    fecha_cierre?: Prisma.DateTimeNullableFilter<"ticket"> | Date | string | null;
    origen?: Prisma.StringNullableFilter<"ticket"> | string | null;
    resuelto_remotamente?: Prisma.BoolFilter<"ticket"> | boolean;
};
export type ticketCreateWithoutUsuario_asignadoInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutUsuario_asignadoInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketCreateOrConnectWithoutUsuario_asignadoInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput>;
};
export type ticketCreateManyUsuario_asignadoInputEnvelope = {
    data: Prisma.ticketCreateManyUsuario_asignadoInput | Prisma.ticketCreateManyUsuario_asignadoInput[];
    skipDuplicates?: boolean;
};
export type ticketUpsertWithWhereUniqueWithoutUsuario_asignadoInput = {
    where: Prisma.ticketWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticketUpdateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedUpdateWithoutUsuario_asignadoInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedCreateWithoutUsuario_asignadoInput>;
};
export type ticketUpdateWithWhereUniqueWithoutUsuario_asignadoInput = {
    where: Prisma.ticketWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutUsuario_asignadoInput, Prisma.ticketUncheckedUpdateWithoutUsuario_asignadoInput>;
};
export type ticketUpdateManyWithWhereWithoutUsuario_asignadoInput = {
    where: Prisma.ticketScalarWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyWithoutUsuario_asignadoInput>;
};
export type ticketCreateWithoutClienteInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutClienteInput = {
    id_ticket?: number;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketCreateOrConnectWithoutClienteInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput>;
};
export type ticketCreateManyClienteInputEnvelope = {
    data: Prisma.ticketCreateManyClienteInput | Prisma.ticketCreateManyClienteInput[];
    skipDuplicates?: boolean;
};
export type ticketUpsertWithWhereUniqueWithoutClienteInput = {
    where: Prisma.ticketWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticketUpdateWithoutClienteInput, Prisma.ticketUncheckedUpdateWithoutClienteInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutClienteInput, Prisma.ticketUncheckedCreateWithoutClienteInput>;
};
export type ticketUpdateWithWhereUniqueWithoutClienteInput = {
    where: Prisma.ticketWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutClienteInput, Prisma.ticketUncheckedUpdateWithoutClienteInput>;
};
export type ticketUpdateManyWithWhereWithoutClienteInput = {
    where: Prisma.ticketScalarWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyWithoutClienteInput>;
};
export type ticketCreateWithoutOrden_trabajoInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutOrden_trabajoInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketCreateOrConnectWithoutOrden_trabajoInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutOrden_trabajoInput, Prisma.ticketUncheckedCreateWithoutOrden_trabajoInput>;
};
export type ticketUpsertWithoutOrden_trabajoInput = {
    update: Prisma.XOR<Prisma.ticketUpdateWithoutOrden_trabajoInput, Prisma.ticketUncheckedUpdateWithoutOrden_trabajoInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutOrden_trabajoInput, Prisma.ticketUncheckedCreateWithoutOrden_trabajoInput>;
    where?: Prisma.ticketWhereInput;
};
export type ticketUpdateToOneWithWhereWithoutOrden_trabajoInput = {
    where?: Prisma.ticketWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutOrden_trabajoInput, Prisma.ticketUncheckedUpdateWithoutOrden_trabajoInput>;
};
export type ticketUpdateWithoutOrden_trabajoInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutOrden_trabajoInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketCreateWithoutCategoriaInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    conversacion_bot?: Prisma.conversacion_botCreateNestedOneWithoutTicketInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutCategoriaInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketCreateOrConnectWithoutCategoriaInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput>;
};
export type ticketCreateManyCategoriaInputEnvelope = {
    data: Prisma.ticketCreateManyCategoriaInput | Prisma.ticketCreateManyCategoriaInput[];
    skipDuplicates?: boolean;
};
export type ticketUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ticketWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticketUpdateWithoutCategoriaInput, Prisma.ticketUncheckedUpdateWithoutCategoriaInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutCategoriaInput, Prisma.ticketUncheckedCreateWithoutCategoriaInput>;
};
export type ticketUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: Prisma.ticketWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutCategoriaInput, Prisma.ticketUncheckedUpdateWithoutCategoriaInput>;
};
export type ticketUpdateManyWithWhereWithoutCategoriaInput = {
    where: Prisma.ticketScalarWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyWithoutCategoriaInput>;
};
export type ticketCreateWithoutConversacion_botInput = {
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    cliente?: Prisma.clienteCreateNestedOneWithoutTicketsInput;
    empresa?: Prisma.empresaCreateNestedOneWithoutTicketsInput;
    usuario_asignado?: Prisma.usuarioCreateNestedOneWithoutTickets_asignadosInput;
    categoria: Prisma.categoria_fallaCreateNestedOneWithoutTicketsInput;
    orden_trabajo?: Prisma.orden_trabajoCreateNestedOneWithoutTicketInput;
};
export type ticketUncheckedCreateWithoutConversacion_botInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedCreateNestedOneWithoutTicketInput;
};
export type ticketCreateOrConnectWithoutConversacion_botInput = {
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
};
export type ticketUpsertWithoutConversacion_botInput = {
    update: Prisma.XOR<Prisma.ticketUpdateWithoutConversacion_botInput, Prisma.ticketUncheckedUpdateWithoutConversacion_botInput>;
    create: Prisma.XOR<Prisma.ticketCreateWithoutConversacion_botInput, Prisma.ticketUncheckedCreateWithoutConversacion_botInput>;
    where?: Prisma.ticketWhereInput;
};
export type ticketUpdateToOneWithWhereWithoutConversacion_botInput = {
    where?: Prisma.ticketWhereInput;
    data: Prisma.XOR<Prisma.ticketUpdateWithoutConversacion_botInput, Prisma.ticketUncheckedUpdateWithoutConversacion_botInput>;
};
export type ticketUpdateWithoutConversacion_botInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutConversacion_botInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketCreateManyEmpresaInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketUpdateWithoutEmpresaInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutEmpresaInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateManyWithoutEmpresaInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketCreateManyUsuario_asignadoInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketUpdateWithoutUsuario_asignadoInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutUsuario_asignadoInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateManyWithoutUsuario_asignadoInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketCreateManyClienteInput = {
    id_ticket?: number;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_categoria: number;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketUpdateWithoutClienteInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    categoria?: Prisma.categoria_fallaUpdateOneRequiredWithoutTicketsNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutClienteInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateManyWithoutClienteInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_categoria?: Prisma.IntFieldUpdateOperationsInput | number;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketCreateManyCategoriaInput = {
    id_ticket?: number;
    id_cliente?: number | null;
    id_empresa?: number | null;
    id_usuario_asignado?: number | null;
    id_conversacion_bot?: number | null;
    codigo_seguimiento?: string | null;
    prioridad: string;
    estado: string;
    descripcion?: string | null;
    fecha_creacion?: Date | string;
    fecha_cierre?: Date | string | null;
    origen?: string | null;
    resuelto_remotamente?: boolean;
};
export type ticketUpdateWithoutCategoriaInput = {
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    cliente?: Prisma.clienteUpdateOneWithoutTicketsNestedInput;
    empresa?: Prisma.empresaUpdateOneWithoutTicketsNestedInput;
    usuario_asignado?: Prisma.usuarioUpdateOneWithoutTickets_asignadosNestedInput;
    conversacion_bot?: Prisma.conversacion_botUpdateOneWithoutTicketNestedInput;
    orden_trabajo?: Prisma.orden_trabajoUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateWithoutCategoriaInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    orden_trabajo?: Prisma.orden_trabajoUncheckedUpdateOneWithoutTicketNestedInput;
};
export type ticketUncheckedUpdateManyWithoutCategoriaInput = {
    id_ticket?: Prisma.IntFieldUpdateOperationsInput | number;
    id_cliente?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_empresa?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_usuario_asignado?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    id_conversacion_bot?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    codigo_seguimiento?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    prioridad?: Prisma.StringFieldUpdateOperationsInput | string;
    estado?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    fecha_creacion?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    fecha_cierre?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    origen?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    resuelto_remotamente?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ticketSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_ticket?: boolean;
    id_cliente?: boolean;
    id_empresa?: boolean;
    id_usuario_asignado?: boolean;
    id_categoria?: boolean;
    id_conversacion_bot?: boolean;
    codigo_seguimiento?: boolean;
    prioridad?: boolean;
    estado?: boolean;
    descripcion?: boolean;
    fecha_creacion?: boolean;
    fecha_cierre?: boolean;
    origen?: boolean;
    resuelto_remotamente?: boolean;
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
    orden_trabajo?: boolean | Prisma.ticket$orden_trabajoArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type ticketSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_ticket?: boolean;
    id_cliente?: boolean;
    id_empresa?: boolean;
    id_usuario_asignado?: boolean;
    id_categoria?: boolean;
    id_conversacion_bot?: boolean;
    codigo_seguimiento?: boolean;
    prioridad?: boolean;
    estado?: boolean;
    descripcion?: boolean;
    fecha_creacion?: boolean;
    fecha_cierre?: boolean;
    origen?: boolean;
    resuelto_remotamente?: boolean;
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type ticketSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id_ticket?: boolean;
    id_cliente?: boolean;
    id_empresa?: boolean;
    id_usuario_asignado?: boolean;
    id_categoria?: boolean;
    id_conversacion_bot?: boolean;
    codigo_seguimiento?: boolean;
    prioridad?: boolean;
    estado?: boolean;
    descripcion?: boolean;
    fecha_creacion?: boolean;
    fecha_cierre?: boolean;
    origen?: boolean;
    resuelto_remotamente?: boolean;
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
}, ExtArgs["result"]["ticket"]>;
export type ticketSelectScalar = {
    id_ticket?: boolean;
    id_cliente?: boolean;
    id_empresa?: boolean;
    id_usuario_asignado?: boolean;
    id_categoria?: boolean;
    id_conversacion_bot?: boolean;
    codigo_seguimiento?: boolean;
    prioridad?: boolean;
    estado?: boolean;
    descripcion?: boolean;
    fecha_creacion?: boolean;
    fecha_cierre?: boolean;
    origen?: boolean;
    resuelto_remotamente?: boolean;
};
export type ticketOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id_ticket" | "id_cliente" | "id_empresa" | "id_usuario_asignado" | "id_categoria" | "id_conversacion_bot" | "codigo_seguimiento" | "prioridad" | "estado" | "descripcion" | "fecha_creacion" | "fecha_cierre" | "origen" | "resuelto_remotamente", ExtArgs["result"]["ticket"]>;
export type ticketInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
    orden_trabajo?: boolean | Prisma.ticket$orden_trabajoArgs<ExtArgs>;
};
export type ticketIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
};
export type ticketIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    cliente?: boolean | Prisma.ticket$clienteArgs<ExtArgs>;
    empresa?: boolean | Prisma.ticket$empresaArgs<ExtArgs>;
    usuario_asignado?: boolean | Prisma.ticket$usuario_asignadoArgs<ExtArgs>;
    categoria?: boolean | Prisma.categoria_fallaDefaultArgs<ExtArgs>;
    conversacion_bot?: boolean | Prisma.ticket$conversacion_botArgs<ExtArgs>;
};
export type $ticketPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ticket";
    objects: {
        cliente: Prisma.$clientePayload<ExtArgs> | null;
        empresa: Prisma.$empresaPayload<ExtArgs> | null;
        usuario_asignado: Prisma.$usuarioPayload<ExtArgs> | null;
        categoria: Prisma.$categoria_fallaPayload<ExtArgs>;
        conversacion_bot: Prisma.$conversacion_botPayload<ExtArgs> | null;
        orden_trabajo: Prisma.$orden_trabajoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id_ticket: number;
        id_cliente: number | null;
        id_empresa: number | null;
        id_usuario_asignado: number | null;
        id_categoria: number;
        id_conversacion_bot: number | null;
        codigo_seguimiento: string | null;
        prioridad: string;
        estado: string;
        descripcion: string | null;
        fecha_creacion: Date;
        fecha_cierre: Date | null;
        origen: string | null;
        resuelto_remotamente: boolean;
    }, ExtArgs["result"]["ticket"]>;
    composites: {};
};
export type ticketGetPayload<S extends boolean | null | undefined | ticketDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ticketPayload, S>;
export type ticketCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ticketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketCountAggregateInputType | true;
};
export interface ticketDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ticket'];
        meta: {
            name: 'ticket';
        };
    };
    findUnique<T extends ticketFindUniqueArgs>(args: Prisma.SelectSubset<T, ticketFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ticketFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ticketFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ticketFindFirstArgs>(args?: Prisma.SelectSubset<T, ticketFindFirstArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ticketFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ticketFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ticketFindManyArgs>(args?: Prisma.SelectSubset<T, ticketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ticketCreateArgs>(args: Prisma.SelectSubset<T, ticketCreateArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ticketCreateManyArgs>(args?: Prisma.SelectSubset<T, ticketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ticketCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ticketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ticketDeleteArgs>(args: Prisma.SelectSubset<T, ticketDeleteArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ticketUpdateArgs>(args: Prisma.SelectSubset<T, ticketUpdateArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ticketDeleteManyArgs>(args?: Prisma.SelectSubset<T, ticketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ticketUpdateManyArgs>(args: Prisma.SelectSubset<T, ticketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ticketUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ticketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ticketUpsertArgs>(args: Prisma.SelectSubset<T, ticketUpsertArgs<ExtArgs>>): Prisma.Prisma__ticketClient<runtime.Types.Result.GetResult<Prisma.$ticketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ticketCountArgs>(args?: Prisma.Subset<T, ticketCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketCountAggregateOutputType> : number>;
    aggregate<T extends TicketAggregateArgs>(args: Prisma.Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>;
    groupBy<T extends ticketGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ticketGroupByArgs['orderBy'];
    } : {
        orderBy?: ticketGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ticketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ticketFieldRefs;
}
export interface Prisma__ticketClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    cliente<T extends Prisma.ticket$clienteArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket$clienteArgs<ExtArgs>>): Prisma.Prisma__clienteClient<runtime.Types.Result.GetResult<Prisma.$clientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    empresa<T extends Prisma.ticket$empresaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket$empresaArgs<ExtArgs>>): Prisma.Prisma__empresaClient<runtime.Types.Result.GetResult<Prisma.$empresaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    usuario_asignado<T extends Prisma.ticket$usuario_asignadoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket$usuario_asignadoArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    categoria<T extends Prisma.categoria_fallaDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.categoria_fallaDefaultArgs<ExtArgs>>): Prisma.Prisma__categoria_fallaClient<runtime.Types.Result.GetResult<Prisma.$categoria_fallaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    conversacion_bot<T extends Prisma.ticket$conversacion_botArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket$conversacion_botArgs<ExtArgs>>): Prisma.Prisma__conversacion_botClient<runtime.Types.Result.GetResult<Prisma.$conversacion_botPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orden_trabajo<T extends Prisma.ticket$orden_trabajoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ticket$orden_trabajoArgs<ExtArgs>>): Prisma.Prisma__orden_trabajoClient<runtime.Types.Result.GetResult<Prisma.$orden_trabajoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ticketFieldRefs {
    readonly id_ticket: Prisma.FieldRef<"ticket", 'Int'>;
    readonly id_cliente: Prisma.FieldRef<"ticket", 'Int'>;
    readonly id_empresa: Prisma.FieldRef<"ticket", 'Int'>;
    readonly id_usuario_asignado: Prisma.FieldRef<"ticket", 'Int'>;
    readonly id_categoria: Prisma.FieldRef<"ticket", 'Int'>;
    readonly id_conversacion_bot: Prisma.FieldRef<"ticket", 'Int'>;
    readonly codigo_seguimiento: Prisma.FieldRef<"ticket", 'String'>;
    readonly prioridad: Prisma.FieldRef<"ticket", 'String'>;
    readonly estado: Prisma.FieldRef<"ticket", 'String'>;
    readonly descripcion: Prisma.FieldRef<"ticket", 'String'>;
    readonly fecha_creacion: Prisma.FieldRef<"ticket", 'DateTime'>;
    readonly fecha_cierre: Prisma.FieldRef<"ticket", 'DateTime'>;
    readonly origen: Prisma.FieldRef<"ticket", 'String'>;
    readonly resuelto_remotamente: Prisma.FieldRef<"ticket", 'Boolean'>;
}
export type ticketFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where: Prisma.ticketWhereUniqueInput;
};
export type ticketFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where: Prisma.ticketWhereUniqueInput;
};
export type ticketFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithRelationInput | Prisma.ticketOrderByWithRelationInput[];
    cursor?: Prisma.ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type ticketFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithRelationInput | Prisma.ticketOrderByWithRelationInput[];
    cursor?: Prisma.ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type ticketFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where?: Prisma.ticketWhereInput;
    orderBy?: Prisma.ticketOrderByWithRelationInput | Prisma.ticketOrderByWithRelationInput[];
    cursor?: Prisma.ticketWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketScalarFieldEnum | Prisma.TicketScalarFieldEnum[];
};
export type ticketCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketCreateInput, Prisma.ticketUncheckedCreateInput>;
};
export type ticketCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ticketCreateManyInput | Prisma.ticketCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ticketCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    data: Prisma.ticketCreateManyInput | Prisma.ticketCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ticketIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ticketUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketUpdateInput, Prisma.ticketUncheckedUpdateInput>;
    where: Prisma.ticketWhereUniqueInput;
};
export type ticketUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyInput>;
    where?: Prisma.ticketWhereInput;
    limit?: number;
};
export type ticketUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketUpdateManyMutationInput, Prisma.ticketUncheckedUpdateManyInput>;
    where?: Prisma.ticketWhereInput;
    limit?: number;
    include?: Prisma.ticketIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ticketUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where: Prisma.ticketWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketCreateInput, Prisma.ticketUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ticketUpdateInput, Prisma.ticketUncheckedUpdateInput>;
};
export type ticketDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
    where: Prisma.ticketWhereUniqueInput;
};
export type ticketDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketWhereInput;
    limit?: number;
};
export type ticket$clienteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.clienteSelect<ExtArgs> | null;
    omit?: Prisma.clienteOmit<ExtArgs> | null;
    include?: Prisma.clienteInclude<ExtArgs> | null;
    where?: Prisma.clienteWhereInput;
};
export type ticket$empresaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.empresaSelect<ExtArgs> | null;
    omit?: Prisma.empresaOmit<ExtArgs> | null;
    include?: Prisma.empresaInclude<ExtArgs> | null;
    where?: Prisma.empresaWhereInput;
};
export type ticket$usuario_asignadoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type ticket$conversacion_botArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.conversacion_botSelect<ExtArgs> | null;
    omit?: Prisma.conversacion_botOmit<ExtArgs> | null;
    include?: Prisma.conversacion_botInclude<ExtArgs> | null;
    where?: Prisma.conversacion_botWhereInput;
};
export type ticket$orden_trabajoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.orden_trabajoSelect<ExtArgs> | null;
    omit?: Prisma.orden_trabajoOmit<ExtArgs> | null;
    include?: Prisma.orden_trabajoInclude<ExtArgs> | null;
    where?: Prisma.orden_trabajoWhereInput;
};
export type ticketDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketSelect<ExtArgs> | null;
    omit?: Prisma.ticketOmit<ExtArgs> | null;
    include?: Prisma.ticketInclude<ExtArgs> | null;
};
