import { IsString, IsNotEmpty, MaxLength, IsOptional, IsEmail, IsInt, IsPositive, IsIn } from 'class-validator';

export class RegistrarClienteDto {
  @IsString()
  @IsNotEmpty()
  rut: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(120)
  nombre_completo: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  telefono?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  direccion_completa: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  comuna: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  ciudad?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  id_plan?: number;

  @IsOptional()
  @IsIn(['ACTIVO', 'SUSPENDIDO', 'CORTADO', 'BAJA', 'PENDIENTE'])
  estado?: string;
}
