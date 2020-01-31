const http = require('http');
const PUERTO = 8080

//-- Configurar el servidor. Cada vez que llegue una peteicion
//-- se notifica en la consola
http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
}).listen(PUERTO);

console.log("Arrancando servidor...")
console.log("Puerto: " + PUERTO)
