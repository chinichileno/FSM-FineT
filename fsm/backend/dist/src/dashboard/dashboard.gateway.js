var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var DashboardGateway_1;
import { Logger } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer, SubscribeMessage, } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
let DashboardGateway = DashboardGateway_1 = class DashboardGateway {
    server;
    logger = new Logger(DashboardGateway_1.name);
    afterInit() {
        this.logger.log('Dashboard WebSocket iniciado');
    }
    handleConnection(client) {
        this.logger.log(`Cliente conectado: ${client.id}`);
    }
    handleDisconnect(client) {
        this.logger.log(`Cliente desconectado: ${client.id}`);
    }
    handleJoinEmpresa(client, id_empresa) {
        const room = `empresa_${id_empresa}`;
        client.join(room);
        client.emit('joined', { room });
    }
    emitirActualizacion(id_empresa, datos) {
        this.server.to(`empresa_${id_empresa}`).emit('dashboard_update', datos);
    }
};
__decorate([
    WebSocketServer(),
    __metadata("design:type", Server)
], DashboardGateway.prototype, "server", void 0);
__decorate([
    SubscribeMessage('join_empresa'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Socket, Number]),
    __metadata("design:returntype", void 0)
], DashboardGateway.prototype, "handleJoinEmpresa", null);
DashboardGateway = DashboardGateway_1 = __decorate([
    WebSocketGateway({ cors: { origin: process.env.FRONTEND_URL }, namespace: '/dashboard' })
], DashboardGateway);
export { DashboardGateway };
//# sourceMappingURL=dashboard.gateway.js.map