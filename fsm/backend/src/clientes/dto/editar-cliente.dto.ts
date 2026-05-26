import { IsString, MaxLength, IsOptional, IsEmail, IsIn, IsBoolean } from 'class-validator';

export class EditarClienteDto {
  @IsOptional()
  @IsString()
  @MaxLength(120)
  nombre_completo?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsOptional()
  @IsIn(['ACTIVO', 'SUSPENDIDO', 'CORTADO', 'BAJA', 'PENDIENTE'])
  estado?: string;

  @IsOptional()
  @IsBoolean()
  es_conflictivo?: boolean;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  obs_conflictivo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  direccion_completa?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  comuna?: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  ciudad?: string;
}
