import { AuthService } from './auth.service.js';
import { LoginDto } from './dto/login.dto.js';
import { CambiarPasswordDto } from './dto/cambiar-password.dto.js';
import { CrearUsuarioDto } from './dto/crear-usuario.dto.js';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(dto: LoginDto, ip: string): Promise<{
        token: string;
        rol: string;
        id_empresa: number | null;
        cambiar_password: boolean;
    }>;
    cambiarPassword(user: {
        userId: number;
    }, dto: CambiarPasswordDto): Promise<void>;
    crearUsuario(dto: CrearUsuarioDto, user: {
        userId: number;
    }): Promise<{
        id_empresa: number | null;
        id_usuario: number;
        nombre_usuario: string | null;
        email: string | null;
        nombre_completo: string;
        password_hash: string;
        activo: boolean;
        fecha_creacion: Date;
        es_password_temporal: boolean;
    }>;
    listarUsuarios(user: {
        id_empresa: number;
    }): Promise<{
        id_usuario: number;
        nombre_completo: string;
        nombre_usuario: string | null;
        email: string | null;
        fecha_creacion: Date;
        rol: string;
    }[]>;
}
