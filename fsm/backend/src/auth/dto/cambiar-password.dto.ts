import { IsString, IsNotEmpty, MinLength, Matches } from 'class-validator';

export class CambiarPasswordDto {
  @IsString()
  @MinLength(8, { message: 'Mínimo 8 caracteres' })
  @Matches(/^(?=.*[A-Z])(?=.*\d)/, { message: 'Debe tener al menos 1 mayúscula y 1 número' })
  nueva_password: string;

  @IsString()
  @IsNotEmpty()
  confirmar_password: string;
}
