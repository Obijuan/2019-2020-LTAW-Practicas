console.log("Ejecutando cliente JS...");

//-- Obtener los elementos del DOM
const display = document.getElementById("display");

//-- Crear un websocket. Se establece la conexión con el servidor
const socket = io();

//-- Se ha recibido el evento 'hello':
//-- Es el mensaje de bienvenida del servidor
socket.on('hello', (msg) => {

  //-- Mostrarlo en la consola del navegador, para
  //-- depurar
  console.log("Mensaje del servidor: " + msg);

  //-- Ponerlo en el párrafo display
  display.innerHTML = msg;
});
