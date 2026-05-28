export declare class FotoDto {
    url_cloudinary: string;
    formato: string;
    tamano_kb: number;
}
export declare class MaterialDto {
    id_tipo_equipo: number;
    cantidad: number;
    numero_serie?: string;
}
export declare class CerrarOtDto {
    fotos: FotoDto[];
    materiales: MaterialDto[];
    potencia_optica_dbm: number;
    resultado_llamada: string;
    obs_llamada?: string;
    resuelto_remotamente?: boolean;
}
