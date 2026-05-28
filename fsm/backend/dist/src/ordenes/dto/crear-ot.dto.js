var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, IsIn, IsOptional, IsInt, IsPositive, IsDateString, MaxLength, } from 'class-validator';
export class CrearOtDto {
    rut_cliente;
    tipo_ot;
    prioridad;
    id_tecnico;
    bloque_horario;
    id_direccion;
    observaciones;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CrearOtDto.prototype, "rut_cliente", void 0);
__decorate([
    IsIn(['INSTALACION', 'REPARACION', 'REEMPLAZO', 'PREVENTIVO', 'BAJA']),
    __metadata("design:type", String)
], CrearOtDto.prototype, "tipo_ot", void 0);
__decorate([
    IsOptional(),
    IsIn(['CRITICA', 'ALTA', 'MEDIA', 'BAJA']),
    __metadata("design:type", String)
], CrearOtDto.prototype, "prioridad", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], CrearOtDto.prototype, "id_tecnico", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CrearOtDto.prototype, "bloque_horario", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    __metadata("design:type", Number)
], CrearOtDto.prototype, "id_direccion", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CrearOtDto.prototype, "observaciones", void 0);
//# sourceMappingURL=crear-ot.dto.js.map