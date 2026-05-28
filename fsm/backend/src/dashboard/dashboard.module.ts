import { Module, forwardRef } from '@nestjs/common';
import { OrdenesModule } from '../ordenes/ordenes.module.js';
import { DashboardController } from './dashboard.controller.js';
import { DashboardService } from './dashboard.service.js';
import { DashboardGateway } from './dashboard.gateway.js';

@Module({
  imports: [forwardRef(() => OrdenesModule)],
  controllers: [DashboardController],
  providers: [DashboardService, DashboardGateway],
  exports: [DashboardGateway],
})
export class DashboardModule {}
