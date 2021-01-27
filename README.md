# Solución al Backend Coding Challenge

Solución desarrollada por Jorge Stiven Montenegro Pulido

- Se eligió el desarrollo de la aplicación en nodejs con ayuda del framework de Nestjs.
- Se eligió la base de datros de mongoDB, la elegí ya que con ella tengo mayor conocimiento a la hora de desarrollar apis, aunque eso no me límita a solo esa base de datos, el alojamiento de la base de datos se hizo en Mongo Atlas con una cuenta gratuita. 
**Link de conexión: mongodb+srv://assigments:poygOVGfaNJXXjem@cluster0.kvtam.mongodb.net/backAssigments?retryWrites=true&w=majority**
- Se realizó una nueva coleción en Postman para el testeo de la api, no se manejaron variables de entorno dentro de postman para hacer las pruebas para su facil inteerpretación.

# Puesta en marcha de la solución

- Para poner a correr el programa de debe de descargar el repositorio con la solución bridada
- seguido se dirije uno a la raiz del proyecto mediante consola
- digite el comando de "npm i" para instalar los paquetes necesarios para el correcto fucnionamiento del proyecto
- al finalizar cree un nuevo archivo en la raíz del proyecto llamado ".env" en él debe de ingresar la cadena de conexión de la siguiente manera: *MONGOBD=mongodb+srv://assigments:poygOVGfaNJXXjem@cluster0.kvtam.mongodb.net/backAssigments?retryWrites=true&w=majority*
- ya creado el enviroment con la cadena de conexión en la raíz del proyecto y en la consola ingrese el comando de "npm run start", esto le permitira correr el proyecto de manera local, cuando finalicé de correr en la consola le mostrará un mensaje de "Server is Running".

# Solución al problema plantado originalmente

El programa automatiza el servicio de asignación de problemas a agentes, primero permite la creación, modificación, aliminación y la consulta de agentes, siendo solo requerido el campo de "name" representando el nombre del agente.
Para los problemas se le permite la creación de nuevos problemas, en la cual valida si hay agentes disponibles y le asigna uno, del caso contrario se queda esperando que uno se encuentre libre para asignarle el problema.
en el caso de que el problema sea resuelto, se podrá dar solución mediante la ruta indicada lo cual cerrará el problema y dejará libre al agente, en caso de que haya un problema aún sin asignar, este lo asignara de inmediato al agente que quedó libre.


# Capacidades de la solución

La solución cuneta con diferentes distintivos, entre ellas está la validación de campos mediente el uso de "class validation" que me permite validar si un campo es requerido o con el formato correcto mientras devuelve un error descriptivo del mismo. También con validaciones logicos que permiten el correcto flujo de la app, validando posibles errores que pueda presentar a la hora de hacer las peticiones.

También la solución cuenta con integraciones join para los dos tipos de colecciones "agent" y "problems" para que en las consultas nos permita saber si un agente ya tiene problemas y saber cuáles son, igual pasa con un problema, nos permite saber si un problema ya tiene un agente asignado.

# Estructura de base de datos
## Agente
name -- requerido de tipo String (nombre del agente)
position -- no requerido de tipo string (cargo al que pertenece el agente)
isFree -- campo automatico de tipo booleano (si se encuentra disponible)
problem -- campo automatico de tipo mongoId (porblema que tiene actualmente relacionado)

## Problema
description -- requerido de tipo String (descripción del problema)
agent -- campo automatico de tipo string (agente que está asignado a ese problema, se conserva para tener un historial de quien lo solucionó)
solution -- no requerido de tipo string (solución del problema para dejar historial)
isClosed
--------------------------------------------------------------------------------------------------------------------------

# Backend Coding Challenge
Code Challenge para candidatos Backend para DocRed.

**IMPORTANTE**: Haz un *fork* de este repositorio para trabajar en la solución

## Contexto
El soporte de nuestros usuarios es muy importante en DocRed. Nuestros agentes quieren ser mas eficientes en la resolución de los problemas o consultas que nuestros usuarios puedan tener. Para eso, se decidio construir un software para automatizar el proceso - el software que tu vas a construir.

## Tu misión
Tu tarea es proveer una API para una aplicación frontend que satisfaga los requerimentos descriptos arriba.
Por favor, sigue los requerimentos del producto.
No debes implementar autorización o autenticación, ya que no es importante en este challenge.

## Requerimientos del producto
- Los usuarios de Docred pueden reportar un problema.
- Los problemas nuevos deben asignarse automáticamente, a un agente que esté libre.
- Cada agente debe trabajar en un problema a la vez.
- El agente puede marcar un problema como resuelto, de esta manera, el agente queda libre para tomar un nuevo problema.
- El sistema asignará automáticamente, un nuevo problema a un agente, cuando este se libere.

## Requerimientos técnicos
- Node.js
- Tests (calidad y cobertura).
- Eres libre de elegir cualquier framework, pero te recomendamos que uses uno con el que más te sientas cómodo.
- Eres libre de usar la base de datos que prefieras, sin embargo, debes justificar tu elección.
- Typescript es un plus.
- NestJS es un plus.
- **Puntos extra**: Provee una collección en Postman para testear tu solución.

## Instrucciones
- The challenge is on!
- Haz un fork de este repositorio
- Construye una solucion bien estructurada, limpia y facil de leer. Performance tambien es importante.
- Haz commit pronto y seguido. Queremos ser capazes de seguir tu progreso.
- Provee un README explicando como correr tu solucion *paso a paso*.
- Envianos un email con el link a tu repositorio cuando termines el challenge.
- El projecto debe ser "auto-suficiente". Es decir, Si usa una base de datos, la solución debe proveer una.
- Por favor, no te tomes mas de 1 dia.
