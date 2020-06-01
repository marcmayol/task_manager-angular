Para esta prueba se requiere la creación de un gestor de tareas,para un usuario con el 6, pero  a pesar de no que no es requerido  crearé también un sistema de login  sin conexión para dar mejor apariencia a la aplicación, que automáticamente setea en cookie el id 6.

He empezado realizando una serie de pruebas el el postman para comprobar en qué formatos vienen los retornos de la api y los posibles errores de validación.

Una vez creado el repositorio con el angular cli y haber configurado el routing (para simular una aplicación completa), he escogido css normal para los estilos para no dar problemas con la compilación ya que se necesitaría disponer de los complementos de nom y angular para los demás formatos. Además tambien se ha incorpodrado la libreria https://ng-bootstrap.github.io/#/home, que consiste en un bootstrap cuyas animaciones ya están integradas dentro de angular y es una forma mucho más efectiva de usar sus estilos.

Lo primero fue darme cuenta de que no disponía de url para obtener una tarea de forma individual por lo que decidí ejecutar el updateComponent dentro del home, simulado una navegación.
Despues decidi tirar casi todo el peso de la aplicación contra la home a base de funciones  y eventos.

El filtrado no sea aplicado a través de un pipe o de un filtro angular porque al ser un true o false era mucho más efectivo utilizar un array paralelo para aplicar todos los filtros deseados.

Para iniciar la sesión  simplemente  ejecutar en  ng serve o complicar y ejecutar, después de asegurarse de que todas las dependencias de npm y angular cli estén disponibles e instaladas. 
 Iniciar sesión en login con un email válido y una contraseña con este Patrón “Pass123#” 8 caracteres una mayúscula y un símbolo. Se setea en el localstorage el id 6 (para simular en lo máximo posible una aplicación real. y desde aquí se podrá testear toda la aplicación.

Hay muchos detalles como la navegación simulada para el update sobre la home o  la lógica para que el update en el select indicara el valor correcto.

A lo que a estilos se refiere me he basado obviamente en bootstrap pero he  imitado un poco sin abundar en los estilos de la página obs.tv

¿eL back era node.js sobre mongoDB verdad? He reconocido los formados de datos.

