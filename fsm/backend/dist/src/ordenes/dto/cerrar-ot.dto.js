var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsArray, ValidateNested, IsNumber, IsNotEmpty, IsIn, IsOptional, IsString, MaxLength, IsBoolean, ArrayMinSize, } from 'class-validator';
import { Type } from 'class-transformer';
export class FotoDto {
    url_cloudinary;
    formato;
    tamano_kb;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], FotoDto.prototype, "url_cloudinary", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], FotoDto.prototype, "formato", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], FotoDto.prototype, "tamano_kb", void 0);
export class MaterialDto {
    id_tipo_equipo;
    cantidad;
    numero_serie;
}
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], MaterialDto.prototype, "id_tipo_equipo", void 0);
__decorate([
    IsNumber(),
    __metadata("design:type", Number)
], MaterialDto.prototype, "cantidad", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], MaterialDto.prototype, "numero_serie", void 0);
export class CerrarOtDto {
    fotos;
    materiales;
    potencia_optica_dbm;
    resultado_llamada;
    obs_llamada;
    resuelto_remotamente;
}
__decorate([
    IsArray(),
    ArrayMinSize(1),
    ValidateNested({ each: true }),
    Type(() => FotoDto),
    __metadata("design:type", Array)
], CerrarOtDto.prototype, "fotos", void 0);
__decorate([
    IsArray(),
    ValidateNested({ each: true }),
    Type(() => MaterialDto),
    __metadata("design:type", Array)
], CerrarOtDto.prototype, "materiales", void 0);
__decorate([
    IsNumber(),
    IsNotEmpty(),
    __metadata("design:type", Number)
], CerrarOtDto.prototype, "potencia_optica_dbm", void 0);
__decorate([
    IsIn(['CONFORME', 'NO_CONFORME']),
    __metadata("design:type", String)
], CerrarOtDto.prototype, "resultado_llamada", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], CerrarOtDto.prototype, "obs_llamada", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CerrarOtDto.prototype, "resuelto_remotamente", void 0);
//# sourceMappingURL=cerrar-ot.dto.js.map