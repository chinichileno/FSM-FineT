var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';
export class CambiarPasswordDto {
    nueva_password;
    confirmar_password;
}
__decorate([
    IsString(),
    MinLength(8, { message: 'Mínimo 8 caracteres' }),
    Matches(/^(?=.*[A-Z])(?=.*\d)/, { message: 'Debe tener al menos 1 mayúscula y 1 número' }),
    __metadata("design:type", String)
], CambiarPasswordDto.prototype, "nueva_password", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CambiarPasswordDto.prototype, "confirmar_password", void 0);
//# sourceMappingURL=cambiar-password.dto.js.map