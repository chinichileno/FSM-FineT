var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, MaxLength, IsOptional, IsEmail, IsInt, IsPositive, IsIn } from 'class-validator';
export class RegistrarClienteDto {
    rut;
    nombre_completo;
    email;
    telefono;
    direccion_completa;
    comuna;
    ciudad;
    id_plan;
    estado;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "rut", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(120),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "nombre_completo", void 0);
__decorate([
    IsOptional(),
    IsEmail(),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "email", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(20),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "telefono", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(200),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "direccion_completa", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(80),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "comuna", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(80),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "ciudad", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], RegistrarClienteDto.prototype, "id_plan", void 0);
__decorate([
    IsOptional(),
    IsIn(['ACTIVO', 'SUSPENDIDO', 'CORTADO', 'BAJA', 'PENDIENTE']),
    __metadata("design:type", String)
], RegistrarClienteDto.prototype, "estado", void 0);
//# sourceMappingURL=registrar-cliente.dto.js.map