import { IsString, MinLength, MaxLength } from 'class-validator';

export class MarcarConflictivoDto {
  @IsString()
  @MinLength(10, { message: 'El motivo debe tener al menos 10 caracteres' })
  @MaxLength(500)
  motivo: string;
}
