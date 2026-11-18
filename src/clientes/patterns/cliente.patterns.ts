export const MS_CLIENTES = {
   NAME: 'MS_CLIENTES',
   HOST: 'localhost',
   PORT: 3002,

   PATTERNS: {
     CREAR: { cmd: 'crear_cliente'},
     LISTAR: { cmd: 'listar_cliente'},
     OBTENER: { cmd: 'obtener_cliente'},
     ACTUALIZAR: { cmd: 'actualizar_cliente'},
     BORRAR: { cmd: 'borrar_cliente'}
      }
}