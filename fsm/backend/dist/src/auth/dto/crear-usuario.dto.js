var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, MaxLength, MinLength, Matches, IsIn, IsInt, IsPositive, IsOptional } from 'class-validator';
export class CrearUsuarioDto {
    nombre_completo;
    nombre_usuario;
    password_temporal;
    rol;
    id_empresa;
    zona;
    empresa_contratista;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(80),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "nombre_completo", void 0);
__decorate([
    IsString(),
    Matches(/^[a-z]+\.[a-z]+$/, { message: 'Formato: nombre.apellido en minúsculas' }),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "nombre_usuario", void 0);
__decorate([
    IsString(),
    MinLength(8),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "password_temporal", void 0);
__decorate([
    IsIn(['ADMIN', 'JEFE_TECNICO', 'TECNICO', 'COORDINADOR', 'COMERCIAL']),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "rol", void 0);
__decorate([
    IsInt(),
    IsPositive(),
    __metadata("design:type", Number)
], CrearUsuarioDto.prototype, "id_empresa", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "zona", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CrearUsuarioDto.prototype, "empresa_contratista", void 0);
//# sourceMappingURL=crear-usuario.dto.js.map