var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, MaxLength, IsOptional, IsEmail, IsIn, IsBoolean } from 'class-validator';
export class EditarClienteDto {
    nombre_completo;
    email;
    telefono;
    estado;
    es_conflictivo;
    obs_conflictivo;
    direccion_completa;
    comuna;
    ciudad;
}
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(120),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "nombre_completo", void 0);
__decorate([
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(20),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "telefono", void 0);
__decorate([
    IsOptional(),
    IsIn(['ACTIVO', 'SUSPENDIDO', 'CORTADO', 'BAJA', 'PENDIENTE']),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "estado", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], EditarClienteDto.prototype, "es_conflictivo", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(500),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "obs_conflictivo", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(200),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "direccion_completa", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "comuna", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], EditarClienteDto.prototype, "ciudad", void 0);
//# sourceMappingURL=editar-cliente.dto.js.map