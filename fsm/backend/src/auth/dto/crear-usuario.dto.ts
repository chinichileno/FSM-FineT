import { IsString, IsNotEmpty, MaxLength, MinLength, Matches, IsIn, IsInt, IsPositive, IsOptional } from 'class-validator';

export class CrearUsuarioDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  nombre_completo: string;

  @IsString()
  @Matches(/^[a-z]+\.[a-z]+$/, { message: 'Formato: nombre.apellido en minúsculas' })
  nombre_usuario: string;

  @IsString()
  @MinLength(8)
  password_temporal: string;

  @IsIn(['ADMIN', 'JEFE_TECNICO', 'TECNICO', 'COORDINADOR', 'COMERCIAL'])
  rol: string;

  @IsInt()
  @IsPositive()
  id_empresa: number;

  @IsOptional()
  @IsString()
  zona?: string;

  @IsOptional()
  @IsString()
  empresa_contratista?: string;
}
