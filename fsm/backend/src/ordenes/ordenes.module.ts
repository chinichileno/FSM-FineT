import { Module } from '@nestjs/common';
import { ClientesModule } from '../clientes/clientes.module.js';
import { OrdenesController } from './ordenes.controller.js';
import { OrdenesService } from './ordenes.service.js';

@Module({
  imports: [ClientesModule],
  controllers: [OrdenesController],
  providers: [OrdenesService],
  exports: [OrdenesService],
})
export class OrdenesModule {}
