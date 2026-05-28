var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards, ForbiddenException, } from '@nestjs/common';
import { OrdenesService } from './ordenes.service.js';
import { CrearOtDto } from './dto/crear-ot.dto.js';
import { AsignarTecnicoDto } from './dto/asignar-tecnico.dto.js';
import { ActualizarEstadoDto } from './dto/actualizar-estado.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
let OrdenesController = class OrdenesController {
    ordenesService;
    constructor(ordenesService) {
        this.ordenesService = ordenesService;
    }
    listarOT(user, estado, tipo_ot, prioridad, page, limit) {
        const filtros = {
            estado,
            tipo_ot,
            prioridad,
            page: page ? +page : 1,
            limit: limit ? +limit : 20,
        };
        if (user.rol === 'TECNICO') {
            filtros.id_tecnico = user.userId;
        }
        return this.ordenesService.listarOT(user.id_empresa, filtros);
    }
    listarTecnicos(user) {
        return this.ordenesService.listarTecnicos(user.id_empresa);
    }
    obtenerOT(id, user) {
        return this.ordenesService.obtenerOT(+id, user.id_empresa);
    }
    crearOT(dto, user) {
        return this.ordenesService.crearOT(dto, user.userId, user.id_empresa);
    }
    asignarTecnico(id, dto, user) {
        return this.ordenesService.asignarTecnico(+id, dto, user.userId, user.id_empresa);
    }
    async actualizarEstado(id, dto, user) {
        if (user.rol === 'TECNICO') {
            const ot = await this.ordenesService.obtenerOT(+id, user.id_empresa);
            const idTecnico = ot.id_tecnico;
            if (idTecnico !== user.userId) {
                throw new ForbiddenException('Solo puedes actualizar OT asignadas a ti');
            }
        }
        return this.ordenesService.actualizarEstado(+id, dto, user.userId, user.id_empresa);
    }
};
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO', 'TECNICO'),
    Get(),
    __param(0, CurrentUser()),
    __param(1, Query('estado')),
    __param(2, Query('tipo_ot')),
    __param(3, Query('prioridad')),
    __param(4, Query('page')),
    __param(5, Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "listarOT", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Get('tecnicos'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "listarTecnicos", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO', 'TECNICO'),
    Get(':id'),
    __param(0, Param('id')),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "obtenerOT", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CrearOtDto, Object]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "crearOT", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Patch(':id/asignar'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, AsignarTecnicoDto, Object]),
    __metadata("design:returntype", void 0)
], OrdenesController.prototype, "asignarTecnico", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO', 'TECNICO'),
    Patch(':id/estado'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, ActualizarEstadoDto, Object]),
    __metadata("design:returntype", Promise)
], OrdenesController.prototype, "actualizarEstado", null);
OrdenesController = __decorate([
    UseGuards(JwtAuthGuard, RolesGuard),
    Controller('ordenes'),
    __metadata("design:paramtypes", [OrdenesService])
], OrdenesController);
export { OrdenesController };
//# sourceMappingURL=ordenes.controller.js.map