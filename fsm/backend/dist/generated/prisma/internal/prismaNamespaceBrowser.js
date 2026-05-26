import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    empresa: 'empresa',
    usuario: 'usuario',
    rol: 'rol',
    usuario_rol: 'usuario_rol',
    log_auditoria: 'log_auditoria',
    cliente: 'cliente',
    direccion_servicio: 'direccion_servicio',
    plan: 'plan',
    contrato: 'contrato',
    factura: 'factura',
    pago: 'pago',
    ticket: 'ticket',
    plantilla_notificacion: 'plantilla_notificacion',
    log_notificacion: 'log_notificacion',
    tipo_equipo: 'tipo_equipo',
    unidad_equipo: 'unidad_equipo',
    caja_nap: 'caja_nap',
    orden_trabajo: 'orden_trabajo',
    historial_ot: 'historial_ot',
    categoria_falla: 'categoria_falla',
    uso_material_ot: 'uso_material_ot',
    evidencia_foto: 'evidencia_foto',
    llamada_cortes: 'llamada_cortes',
    lista_negra: 'lista_negra',
    bodega: 'bodega',
    stock_consumible: 'stock_consumible',
    proveedor: 'proveedor',
    orden_ingreso: 'orden_ingreso',
    detalle_orden_ingreso: 'detalle_orden_ingreso',
    historial_estado_equipo: 'historial_estado_equipo',
    movimiento_inventario: 'movimiento_inventario',
    prestamo_externo: 'prestamo_externo',
    baja_equipo: 'baja_equipo',
    sesion_portal: 'sesion_portal',
    intento_fallido: 'intento_fallido',
    punto_cobertura: 'punto_cobertura',
    consentimiento_cookies: 'consentimiento_cookies',
    configuracion_seo: 'configuracion_seo',
    tecnico_externo: 'tecnico_externo',
    olt: 'olt',
    tarjeta_pon: 'tarjeta_pon',
    mufa: 'mufa',
    puerto_nap: 'puerto_nap',
    monitoreo_ont: 'monitoreo_ont',
    historial_conexion_ont: 'historial_conexion_ont',
    prospecto: 'prospecto',
    cotizacion: 'cotizacion',
    canal_whatsapp: 'canal_whatsapp',
    plantilla_whatsapp: 'plantilla_whatsapp',
    mensaje_whatsapp: 'mensaje_whatsapp',
    conversacion_bot: 'conversacion_bot',
    mensaje_bot: 'mensaje_bot',
    credenciales_tvip: 'credenciales_tvip',
    transferencia_equipo: 'transferencia_equipo'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const EmpresaScalarFieldEnum = {
    id_empresa: 'id_empresa',
    nombre: 'nombre',
    rut_empresa: 'rut_empresa',
    esquema_db: 'esquema_db'
};
export const UsuarioScalarFieldEnum = {
    id_usuario: 'id_usuario',
    id_empresa: 'id_empresa',
    nombre_completo: 'nombre_completo',
    nombre_usuario: 'nombre_usuario',
    email: 'email',
    password_hash: 'password_hash',
    activo: 'activo',
    fecha_creacion: 'fecha_creacion',
    es_password_temporal: 'es_password_temporal'
};
export const RolScalarFieldEnum = {
    id_rol: 'id_rol',
    nombre_rol: 'nombre_rol',
    descripcion: 'descripcion'
};
export const Usuario_rolScalarFieldEnum = {
    id_usuario_rol: 'id_usuario_rol',
    id_usuario: 'id_usuario',
    id_rol: 'id_rol',
    fecha_asignacion: 'fecha_asignacion'
};
export const Log_auditoriaScalarFieldEnum = {
    id_log: 'id_log',
    id_usuario: 'id_usuario',
    accion: 'accion',
    entidad_afectada: 'entidad_afectada',
    id_entidad_afectada: 'id_entidad_afectada',
    valor_anterior: 'valor_anterior',
    valor_nuevo: 'valor_nuevo',
    ip_origen: 'ip_origen',
    fecha_hora: 'fecha_hora'
};
export const ClienteScalarFieldEnum = {
    id_cliente: 'id_cliente',
    id_empresa: 'id_empresa',
    rut: 'rut',
    nombre_completo: 'nombre_completo',
    email: 'email',
    telefono: 'telefono',
    password_portal_hash: 'password_portal_hash',
    estado: 'estado',
    es_conflictivo: 'es_conflictivo',
    obs_conflictivo: 'obs_conflictivo',
    importado_masivo: 'importado_masivo',
    fecha_creacion: 'fecha_creacion'
};
export const Direccion_servicioScalarFieldEnum = {
    id_direccion: 'id_direccion',
    id_cliente: 'id_cliente',
    direccion_completa: 'direccion_completa',
    comuna: 'comuna',
    ciudad: 'ciudad',
    es_principal: 'es_principal'
};
export const PlanScalarFieldEnum = {
    id_plan: 'id_plan',
    id_empresa: 'id_empresa',
    nombre_comercial: 'nombre_comercial',
    tipo_plan: 'tipo_plan',
    tipo_cliente: 'tipo_cliente',
    velocidad_mbps: 'velocidad_mbps',
    precio_mensual: 'precio_mensual',
    descripcion: 'descripcion',
    activo: 'activo'
};
export const ContratoScalarFieldEnum = {
    id_contrato: 'id_contrato',
    id_cliente: 'id_cliente',
    id_plan: 'id_plan',
    id_empresa: 'id_empresa',
    fecha_inicio: 'fecha_inicio',
    dia_vencimiento: 'dia_vencimiento',
    estado: 'estado',
    fecha_suspension: 'fecha_suspension'
};
export const FacturaScalarFieldEnum = {
    id_factura: 'id_factura',
    id_contrato: 'id_contrato',
    periodo_mes: 'periodo_mes',
    periodo_anio: 'periodo_anio',
    monto: 'monto',
    fecha_emision: 'fecha_emision',
    fecha_limite_pago: 'fecha_limite_pago',
    estado: 'estado'
};
export const PagoScalarFieldEnum = {
    id_pago: 'id_pago',
    id_factura: 'id_factura',
    id_cliente: 'id_cliente',
    monto: 'monto',
    fecha_pago: 'fecha_pago',
    codigo_transaccion: 'codigo_transaccion',
    pasarela: 'pasarela',
    token_transaccional: 'token_transaccional',
    comprobante_pdf_url: 'comprobante_pdf_url'
};
export const TicketScalarFieldEnum = {
    id_ticket: 'id_ticket',
    id_cliente: 'id_cliente',
    id_empresa: 'id_empresa',
    id_usuario_asignado: 'id_usuario_asignado',
    id_categoria: 'id_categoria',
    id_conversacion_bot: 'id_conversacion_bot',
    codigo_seguimiento: 'codigo_seguimiento',
    prioridad: 'prioridad',
    estado: 'estado',
    descripcion: 'descripcion',
    fecha_creacion: 'fecha_creacion',
    fecha_cierre: 'fecha_cierre',
    origen: 'origen',
    resuelto_remotamente: 'resuelto_remotamente'
};
export const Plantilla_notificacionScalarFieldEnum = {
    id_plantilla: 'id_plantilla',
    tipo_evento: 'tipo_evento',
    canal: 'canal',
    contenido_texto: 'contenido_texto',
    activa: 'activa'
};
export const Log_notificacionScalarFieldEnum = {
    id_notificacion: 'id_notificacion',
    id_cliente: 'id_cliente',
    id_plantilla: 'id_plantilla',
    canal: 'canal',
    fecha_envio: 'fecha_envio',
    estado_envio: 'estado_envio'
};
export const Tipo_equipoScalarFieldEnum = {
    id_tipo_equipo: 'id_tipo_equipo',
    id_empresa: 'id_empresa',
    nombre: 'nombre',
    categoria: 'categoria',
    requiere_serie_individual: 'requiere_serie_individual',
    ficha_tecnica_pdf_url: 'ficha_tecnica_pdf_url',
    activo: 'activo'
};
export const Unidad_equipoScalarFieldEnum = {
    id_unidad: 'id_unidad',
    id_tipo_equipo: 'id_tipo_equipo',
    id_empresa: 'id_empresa',
    numero_serie: 'numero_serie',
    modelo: 'modelo',
    estado: 'estado',
    fecha_adquisicion: 'fecha_adquisicion',
    fecha_venc_garantia: 'fecha_venc_garantia',
    diagnostico_tecnico: 'diagnostico_tecnico',
    id_cliente_instalado: 'id_cliente_instalado',
    id_bodega_actual: 'id_bodega_actual',
    numero_poste: 'numero_poste',
    id_caja_nap: 'id_caja_nap'
};
export const Caja_napScalarFieldEnum = {
    id_caja_nap: 'id_caja_nap',
    id_empresa: 'id_empresa',
    id_mufa: 'id_mufa',
    identificador_unico: 'identificador_unico',
    numero_poste: 'numero_poste',
    zona: 'zona',
    capacidad_puertos: 'capacidad_puertos',
    latitud: 'latitud',
    longitud: 'longitud'
};
export const Orden_trabajoScalarFieldEnum = {
    id_ot: 'id_ot',
    id_empresa: 'id_empresa',
    id_cliente: 'id_cliente',
    id_tecnico: 'id_tecnico',
    id_tecnico_externo: 'id_tecnico_externo',
    id_direccion: 'id_direccion',
    id_ticket: 'id_ticket',
    tipo_ot: 'tipo_ot',
    prioridad: 'prioridad',
    estado: 'estado',
    fecha_creacion: 'fecha_creacion',
    fecha_programada: 'fecha_programada',
    fecha_completada: 'fecha_completada',
    potencia_optica_dbm: 'potencia_optica_dbm',
    observaciones: 'observaciones',
    resuelto_remotamente: 'resuelto_remotamente'
};
export const Historial_otScalarFieldEnum = {
    id_historial_ot: 'id_historial_ot',
    id_ot: 'id_ot',
    id_usuario: 'id_usuario',
    estado_anterior: 'estado_anterior',
    estado_nuevo: 'estado_nuevo',
    observaciones: 'observaciones',
    fecha_hora: 'fecha_hora'
};
export const Categoria_fallaScalarFieldEnum = {
    id_categoria: 'id_categoria',
    nombre: 'nombre',
    sla_horas: 'sla_horas'
};
export const Uso_material_otScalarFieldEnum = {
    id_uso: 'id_uso',
    id_ot: 'id_ot',
    id_tipo_equipo: 'id_tipo_equipo',
    id_unidad: 'id_unidad',
    cantidad: 'cantidad'
};
export const Evidencia_fotoScalarFieldEnum = {
    id_foto: 'id_foto',
    id_ot: 'id_ot',
    url_cloudinary: 'url_cloudinary',
    formato: 'formato',
    tamano_kb: 'tamano_kb',
    fecha_subida: 'fecha_subida'
};
export const Llamada_cortesScalarFieldEnum = {
    id_llamada: 'id_llamada',
    id_ot: 'id_ot',
    resultado: 'resultado',
    observaciones: 'observaciones',
    fecha_llamada: 'fecha_llamada'
};
export const Lista_negraScalarFieldEnum = {
    id_vetado: 'id_vetado',
    id_cliente: 'id_cliente',
    rut_vetado: 'rut_vetado',
    direccion_vetada: 'direccion_vetada',
    motivo: 'motivo',
    fecha_registro: 'fecha_registro',
    id_usuario_registro: 'id_usuario_registro'
};
export const BodegaScalarFieldEnum = {
    id_bodega: 'id_bodega',
    id_empresa: 'id_empresa',
    nombre: 'nombre',
    direccion: 'direccion',
    activa: 'activa'
};
export const Stock_consumibleScalarFieldEnum = {
    id_stock: 'id_stock',
    id_tipo_equipo: 'id_tipo_equipo',
    id_bodega: 'id_bodega',
    cantidad_disponible: 'cantidad_disponible',
    umbral_minimo: 'umbral_minimo'
};
export const ProveedorScalarFieldEnum = {
    id_proveedor: 'id_proveedor',
    nombre_comercial: 'nombre_comercial',
    rut_proveedor: 'rut_proveedor',
    contacto: 'contacto',
    telefono: 'telefono',
    email: 'email'
};
export const Orden_ingresoScalarFieldEnum = {
    id_orden: 'id_orden',
    id_proveedor: 'id_proveedor',
    id_bodega: 'id_bodega',
    id_empresa: 'id_empresa',
    id_usuario_registro: 'id_usuario_registro',
    fecha_creacion: 'fecha_creacion',
    fecha_recepcion: 'fecha_recepcion',
    estado: 'estado',
    factura_proveedor: 'factura_proveedor'
};
export const Detalle_orden_ingresoScalarFieldEnum = {
    id_detalle: 'id_detalle',
    id_orden: 'id_orden',
    id_tipo_equipo: 'id_tipo_equipo',
    cantidad_solicitada: 'cantidad_solicitada',
    cantidad_recibida: 'cantidad_recibida'
};
export const Historial_estado_equipoScalarFieldEnum = {
    id_historial: 'id_historial',
    id_unidad: 'id_unidad',
    id_usuario: 'id_usuario',
    estado_anterior: 'estado_anterior',
    estado_nuevo: 'estado_nuevo',
    motivo: 'motivo',
    fecha_hora: 'fecha_hora'
};
export const Movimiento_inventarioScalarFieldEnum = {
    id_movimiento: 'id_movimiento',
    id_tipo_equipo: 'id_tipo_equipo',
    id_unidad: 'id_unidad',
    id_empresa_origen: 'id_empresa_origen',
    id_empresa_destino: 'id_empresa_destino',
    id_bodega_origen: 'id_bodega_origen',
    id_bodega_destino: 'id_bodega_destino',
    id_usuario: 'id_usuario',
    tipo_movimiento: 'tipo_movimiento',
    cantidad: 'cantidad',
    fecha: 'fecha',
    referencia_id: 'referencia_id'
};
export const Prestamo_externoScalarFieldEnum = {
    id_prestamo: 'id_prestamo',
    id_unidad: 'id_unidad',
    id_empresa_prestamista: 'id_empresa_prestamista',
    destinatario: 'destinatario',
    motivo: 'motivo',
    fecha_salida: 'fecha_salida',
    fecha_retorno_esperada: 'fecha_retorno_esperada',
    fecha_retorno_real: 'fecha_retorno_real',
    estado: 'estado',
    condicion_retorno: 'condicion_retorno'
};
export const Baja_equipoScalarFieldEnum = {
    id_baja: 'id_baja',
    id_unidad: 'id_unidad',
    id_usuario: 'id_usuario',
    motivo_baja: 'motivo_baja',
    tipo_baja: 'tipo_baja',
    donacion_destinatario: 'donacion_destinatario',
    fecha_baja: 'fecha_baja'
};
export const Sesion_portalScalarFieldEnum = {
    id_sesion: 'id_sesion',
    id_cliente: 'id_cliente',
    token: 'token',
    fecha_inicio: 'fecha_inicio',
    fecha_expiracion: 'fecha_expiracion',
    ip_origen: 'ip_origen'
};
export const Intento_fallidoScalarFieldEnum = {
    id_intento: 'id_intento',
    id_empresa: 'id_empresa',
    ip_address: 'ip_address',
    rut_intentado: 'rut_intentado',
    timestamp: 'timestamp',
    bloqueado_hasta: 'bloqueado_hasta'
};
export const Punto_coberturaScalarFieldEnum = {
    id_punto: 'id_punto',
    id_empresa: 'id_empresa',
    latitud: 'latitud',
    longitud: 'longitud',
    densidad_cobertura: 'densidad_cobertura',
    tipo_cobertura: 'tipo_cobertura'
};
export const Consentimiento_cookiesScalarFieldEnum = {
    id_consentimiento: 'id_consentimiento',
    id_cliente: 'id_cliente',
    ip_anonimizada: 'ip_anonimizada',
    version_documento: 'version_documento',
    fecha_aceptacion: 'fecha_aceptacion',
    acepto: 'acepto'
};
export const Configuracion_seoScalarFieldEnum = {
    id_seo: 'id_seo',
    id_empresa: 'id_empresa',
    seccion_url: 'seccion_url',
    meta_titulo: 'meta_titulo',
    meta_descripcion: 'meta_descripcion',
    og_tags: 'og_tags',
    fecha_actualizacion: 'fecha_actualizacion'
};
export const Tecnico_externoScalarFieldEnum = {
    id_tecnico_ext: 'id_tecnico_ext',
    nombre_completo: 'nombre_completo',
    empresa: 'empresa',
    telefono: 'telefono',
    activo: 'activo'
};
export const OltScalarFieldEnum = {
    id_olt: 'id_olt',
    id_empresa: 'id_empresa',
    nombre: 'nombre',
    ubicacion: 'ubicacion',
    ip_gestion: 'ip_gestion'
};
export const Tarjeta_ponScalarFieldEnum = {
    id_tarjeta: 'id_tarjeta',
    id_olt: 'id_olt',
    numero_tarjeta: 'numero_tarjeta',
    total_puertos: 'total_puertos'
};
export const MufaScalarFieldEnum = {
    id_mufa: 'id_mufa',
    id_tarjeta_pon: 'id_tarjeta_pon',
    identificador: 'identificador',
    ubicacion: 'ubicacion'
};
export const Puerto_napScalarFieldEnum = {
    id_puerto: 'id_puerto',
    id_caja_nap: 'id_caja_nap',
    numero_puerto: 'numero_puerto',
    estado: 'estado',
    id_cliente_asociado: 'id_cliente_asociado'
};
export const Monitoreo_ontScalarFieldEnum = {
    id_monitoreo: 'id_monitoreo',
    id_unidad: 'id_unidad',
    id_cliente: 'id_cliente',
    id_caja_nap: 'id_caja_nap',
    potencia_actual_dbm: 'potencia_actual_dbm',
    timestamp_medicion: 'timestamp_medicion',
    estado_conexion: 'estado_conexion'
};
export const Historial_conexion_ontScalarFieldEnum = {
    id_historial_ont: 'id_historial_ont',
    id_unidad: 'id_unidad',
    evento: 'evento',
    timestamp: 'timestamp'
};
export const ProspectoScalarFieldEnum = {
    id_prospecto: 'id_prospecto',
    id_empresa: 'id_empresa',
    id_usuario_comercial: 'id_usuario_comercial',
    id_cliente: 'id_cliente',
    rut: 'rut',
    nombre_completo: 'nombre_completo',
    email: 'email',
    telefono: 'telefono',
    direccion: 'direccion',
    estado_pipeline: 'estado_pipeline',
    motivo_perdida: 'motivo_perdida',
    tiempo_conversion_dias: 'tiempo_conversion_dias',
    fecha_creacion: 'fecha_creacion',
    fecha_conversion: 'fecha_conversion'
};
export const CotizacionScalarFieldEnum = {
    id_cotizacion: 'id_cotizacion',
    id_prospecto: 'id_prospecto',
    id_plan: 'id_plan',
    pdf_url: 'pdf_url',
    fecha_envio: 'fecha_envio',
    factibilidad_verificada: 'factibilidad_verificada'
};
export const Canal_whatsappScalarFieldEnum = {
    id_canal: 'id_canal',
    id_empresa: 'id_empresa',
    numero_telefono: 'numero_telefono',
    nombre_canal: 'nombre_canal',
    activo: 'activo'
};
export const Plantilla_whatsappScalarFieldEnum = {
    id_plantilla_wa: 'id_plantilla_wa',
    id_canal: 'id_canal',
    nombre_plantilla: 'nombre_plantilla',
    contenido: 'contenido',
    tipo_uso: 'tipo_uso'
};
export const Mensaje_whatsappScalarFieldEnum = {
    id_mensaje_wa: 'id_mensaje_wa',
    id_canal: 'id_canal',
    id_cliente: 'id_cliente',
    id_plantilla_wa: 'id_plantilla_wa',
    contenido: 'contenido',
    timestamp: 'timestamp',
    origen: 'origen',
    estado: 'estado'
};
export const Conversacion_botScalarFieldEnum = {
    id_conversacion: 'id_conversacion',
    id_cliente: 'id_cliente',
    id_canal_wa: 'id_canal_wa',
    plataforma: 'plataforma',
    fecha_inicio: 'fecha_inicio',
    fecha_fin: 'fecha_fin',
    derivada_humano: 'derivada_humano'
};
export const Mensaje_botScalarFieldEnum = {
    id_mensaje: 'id_mensaje',
    id_conversacion: 'id_conversacion',
    rol: 'rol',
    contenido: 'contenido',
    timestamp: 'timestamp',
    datos_sensibles: 'datos_sensibles'
};
export const Credenciales_tvipScalarFieldEnum = {
    id_credencial: 'id_credencial',
    id_contrato: 'id_contrato',
    usuario_tvip: 'usuario_tvip',
    password_tvip_hash: 'password_tvip_hash',
    fecha_generacion: 'fecha_generacion'
};
export const Transferencia_equipoScalarFieldEnum = {
    id_transferencia: 'id_transferencia',
    id_empresa_origen: 'id_empresa_origen',
    id_empresa_destino: 'id_empresa_destino',
    id_usuario_registro: 'id_usuario_registro',
    fecha_transferencia: 'fecha_transferencia',
    observaciones: 'observaciones'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map