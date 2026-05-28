import { IsInt, IsPositive, IsOptional, IsDateString } from 'class-validator';

export class AsignarTecnicoDto {
  @IsInt()
  @IsPositive()
  id_tecnico: number;

  @IsOptional()
  @IsDateString()
  bloque_horario?: string;
}
