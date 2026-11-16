export interface UsuarioInterface {
  id: string;
  nombre: string;
  email: string;
  rol: string;
  isActive: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}