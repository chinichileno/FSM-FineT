import { Controller, Post, Get, Body, UseGuards, Ip } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { CambiarPasswordDto } from './dto/cambiar-password.dto.js';
import { CrearUsuarioDto } from './dto/crear-usuario.dto.js';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard.js';
import { RolesGuard } from '../common/guards/roles.guard.js';
import { Roles } from '../common/decorators/roles.decorator.js';
import { CurrentUser } from '../common/decorators/current-user.decorator.js';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto, @Ip() ip: string) {
    return this.authService.login(dto, ip);
  }

  @UseGuards(JwtAuthGuard)
  @Post('cambiar-password')
  cambiarPassword(@CurrentUser() user: { userId: number }, @Body() dto: CambiarPasswordDto) {
    return this.authService.cambiarPassword(user.userId, dto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post('usuarios')
  crearUsuario(@Body() dto: CrearUsuarioDto, @CurrentUser() user: { userId: number }) {
    return this.authService.crearUsuario(dto, user.userId);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Get('usuarios')
  listarUsuarios(@CurrentUser() user: { id_empresa: number }) {
    return this.authService.listarUsuarios(user.id_empresa);
  }
}
