const http = require('http');
const PUERTO = 8080

//-- Configurar el servidor
http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
  console.log("---> Cabecera de la petición:")
  console.log("HOST: " + req.headers.host)
  console.log("USER AGENT: " + req.headers['user-agent'])
  console.log("ACCEPT:" + req.headers['accept-language'])
  console.log("ACCEPT-ENCODING:" + req.headers['accept-encoding'])
  console.log("CONNECTION: " + req.headers.connection)
  console.log("UPGRADE-INSECURE-REQUEST: " + req.headers['upgrade-insecure-requests'])
}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
