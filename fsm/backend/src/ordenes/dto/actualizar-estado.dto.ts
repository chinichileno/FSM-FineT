import { IsIn, IsOptional, IsString, MaxLength } from 'class-validator';

export class ActualizarEstadoDto {
  @IsIn(['PENDIENTE', 'ASIGNADA', 'EN_CURSO', 'COMPLETADA', 'CANCELADA'])
  estado: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  obs_cancelacion?: string;
}
