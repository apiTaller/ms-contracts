export const MS_USUARIOS = {
   NAME: 'MS_USUARIOS',
   HOST: 'localhost',
   PORT: 3002,

   PATTERNS: {
     CREAR: { cmd: 'crear_usuario'},
     LISTAR: { cmd: 'listar_usuario'},
     OBTENER: { cmd: 'obtener_usuario'},
     ACTUALIZAR: { cmd: 'actualizar_usuario'},
     BORRAR: { cmd: 'borrar_usuario'}
      }
}