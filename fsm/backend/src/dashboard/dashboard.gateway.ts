import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: process.env.FRONTEND_URL }, namespace: '/dashboard' })
export class DashboardGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private readonly logger = new Logger(DashboardGateway.name);

  afterInit() {
    this.logger.log('Dashboard WebSocket iniciado');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Cliente conectado: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Cliente desconectado: ${client.id}`);
  }

  @SubscribeMessage('join_empresa')
  handleJoinEmpresa(client: Socket, id_empresa: number) {
    const room = `empresa_${id_empresa}`;
    client.join(room);
    client.emit('joined', { room });
  }

  emitirActualizacion(id_empresa: number, datos: unknown) {
    this.server.to(`empresa_${id_empresa}`).emit('dashboard_update', datos);
  }
}
