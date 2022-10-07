# Instituto Educativo

## Cambios a base de datos

El id_tema de materiales a id_curso ya que en los casos de uso dice que los materiales son del curso
Agregamos el atributo fecha_nacimiento a los alumnos
Agregarmos el atributo stock a los materiales


## Cambios backend

Terminamos eliminando las relaciones entre la mayoria de las entidades en el backend para que funcione el frontend todo con llamadas al servidor.
Solo dejamos conectado el curso con el tema ya que solo se visualiza el tema, si estaban conectados no podiamos hacer el update.
Agregamos metodos para sacar los materiales de id curso por ejemplo, para que se maneje por una llamada al backend.
Sabiamos que no era lo mejor pero no lo podiamos solucionar, nos adaptamos.

## Cambios frontend

Utilizamos partes del proyecto que presentaron en clase pero simplificamos algunas cosas que no pudimos hacer funcionar, como los mensajes
Terminamos optando por usar alert() y confirm() para mostrar al usuario mensajes y pedirle que confirme ciertas acciones.
En los formularios optamos por usar #nombreInput y (click) para llamar a las funciones.