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
import { Controller, Get, Post, Patch, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ClientesService } from './clientes.service.js';
import { RegistrarClienteDto } from './dto/registrar-cliente.dto.js';
import { EditarClienteDto } from './dto/editar-cliente.dto.js';
import { MarcarConflictivoDto } from './dto/marcar-conflictivo.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';
let ClientesController = class ClientesController {
    clientesService;
    constructor(clientesService) {
        this.clientesService = clientesService;
    }
    listarClientes(user, page, limit) {
        return this.clientesService.listarClientes(user.id_empresa, page ?? 1, limit ?? 20);
    }
    listarPlanes(user) {
        return this.clientesService.listarPlanes(user.id_empresa);
    }
    consultarPorRut(rut, user) {
        return this.clientesService.consultarPorRut(rut, user.id_empresa);
    }
    registrarCliente(dto, user) {
        return this.clientesService.registrarCliente(dto, user.userId, user.id_empresa);
    }
    editarFicha(id, dto, user) {
        return this.clientesService.editarFicha(+id, dto, user.userId);
    }
    marcarConflictivo(id, dto, user) {
        return this.clientesService.marcarConflictivo(+id, dto, user.userId);
    }
};
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Get(),
    __param(0, CurrentUser()),
    __param(1, Query('page')),
    __param(2, Query('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number, Number]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "listarClientes", null);
__decorate([
    Get('planes'),
    __param(0, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "listarPlanes", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO', 'TECNICO'),
    Get('rut/:rut'),
    __param(0, Param('rut')),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "consultarPorRut", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Post(),
    __param(0, Body()),
    __param(1, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegistrarClienteDto, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "registrarCliente", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Patch(':id'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, EditarClienteDto, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "editarFicha", null);
__decorate([
    Roles('ADMIN', 'JEFE_TECNICO'),
    Post(':id/conflictivo'),
    __param(0, Param('id')),
    __param(1, Body()),
    __param(2, CurrentUser()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, MarcarConflictivoDto, Object]),
    __metadata("design:returntype", void 0)
], ClientesController.prototype, "marcarConflictivo", null);
ClientesController = __decorate([
    UseGuards(JwtAuthGuard, RolesGuard),
    Controller('clientes'),
    __metadata("design:paramtypes", [ClientesService])
], ClientesController);
export { ClientesController };
//# sourceMappingURL=clientes.controller.js.map