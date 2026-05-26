var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, MinLength, MaxLength } from 'class-validator';
export class MarcarConflictivoDto {
    motivo;
}
__decorate([
    IsString(),
    MinLength(10, { message: 'El motivo debe tener al menos 10 caracteres' }),
    MaxLength(500),
    __metadata("design:type", String)
], MarcarConflictivoDto.prototype, "motivo", void 0);
//# sourceMappingURL=marcar-conflictivo.dto.js.map