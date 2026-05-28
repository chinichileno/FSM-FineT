import { Module, forwardRef } from '@nestjs/common';
import { ClientesModule } from '../clientes/clientes.module.js';
import { DashboardModule } from '../dashboard/dashboard.module.js';
import { OrdenesController } from './ordenes.controller.js';
import { OrdenesService } from './ordenes.service.js';

@Module({
  imports: [ClientesModule, forwardRef(() => DashboardModule)],
  controllers: [OrdenesController],
  providers: [OrdenesService],
  exports: [OrdenesService],
})
export class OrdenesModule {}
