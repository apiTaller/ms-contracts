import { IsString, IsNotEmpty, IsEmail, MinLength, MaxLength, IsIn, IsBoolean, IsOptional } from 'class-validator';

export class CreateUsuariosDto {
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  @IsNotEmpty()
  nombre!: string;

  @IsEmail({}, { message: 'Debe ser un email válido' })
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @IsNotEmpty()
  password!: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(['admin', 'camarero', 'cocinero', 'repartidor'], { message: 'El rol asignado no es válido' })
  rol!: string;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}