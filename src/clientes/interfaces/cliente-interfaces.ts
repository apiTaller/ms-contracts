export interface ClienteInterface {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  puntosFidelidad?: number;
  createdAt?: Date;
  updatedAt?: Date;
}