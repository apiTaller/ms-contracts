import { IsString, IsNotEmpty, IsEmail, IsOptional, IsNumber, MinLength, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateClientesDto {
  @IsString({ message: 'El nombre debe ser una cadena de texto' })
  @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
  @MaxLength(50, { message: 'El nombre no puede superar los 50 caracteres' })
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre!: string;

  @IsEmail({}, { message: 'El formato del correo electrónico no es válido' })
  @IsNotEmpty({ message: 'El email es obligatorio' })
  email!: string;

  @IsString()
  @IsOptional()
  telefono?: string;

  @IsNumber({}, { message: 'Los puntos de fidelidad deben ser numéricos' })
  @IsOptional()
  @Type(() => Number)
  puntosFidelidad?: number;
}