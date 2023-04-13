/* Escribe una aplicación que cree diferentes objetos Usuario/a. 
La aplicación podrá crear diferentes Temas y suscribir a los usuarios/as a ellos. 
Cuando un Usuario/a añada un mensaje a un Tema se enviará una alerta por la consola desde el Tema. 
También lo mostrarán por consola cada uno de los Usuarios/as que estén suscritos al Tema (recibirán el mensaje). 
Crea un Tema con un Usuario/a y otro con dos y muestra la recepción de los mensajes por los usuarios/as. Utiliza el módulo eventos.
 */

const { newUser, newTopic } = require("./functions");
const { Topic } = require("./Clases/Clase_temas");

const a = { a: 1 };
const history = new Topic();
history.on(`newMess`, (msg) => console.log(msg));
history.addMesagge(a, "txt");
