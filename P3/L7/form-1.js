//-- Puerto donde recibir las peticiones
const PUERTO = 8080;

//-- Modulos a usar
const http = require('http');
const url = require('url');


//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {

  //-- Mostrar en la consola el recurso al que se accede
  const q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname)

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      content = `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>FORM 1</title>
          </head>
          <body>
            <form action="/myform" method="post">
              Nombre:
              <input type="text" name="Nombre"/> <br />
              <input type="submit" value="Enviar"/>
            </form>
          </body>
        </html>
      `
      res.statusCode = 200;
      break;

      //-- Pagina de acceso
      case "/myform":

        if (req.method === 'POST') {
          // Handle post info...

          var content = `
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <meta charset="utf-8">
              <title>FORM 1</title>
            </head>
            <body>
              <p>Recibido: `

          req.on('data', chunk => {
              //-- Leer los datos (convertir el buffer a cadena)
              data = chunk.toString();

              //-- Añadir los datos a la respuesta
              content += data;

              //-- Fin del mensaje. Enlace al formulario
              content += `
                  </p>
                  <a href="/">[Formulario]</a>
                </body>
              </html>
              `
              //-- Mostrar los datos en la consola del servidor
              console.log("Datos recibidos: " + data)
              res.statusCode = 200;
           });

           req.on('end', ()=> {
             //-- Generar el mensaje de respuesta
             res.setHeader('Content-Type', 'text/html')
             res.write(content);
             res.end();
           })
           return
        }

        break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
  }

  //-- Generar el mensaje de respuesta
  res.setHeader('Content-Type', 'text/html')
  res.write(content);
  res.end();

}

//-- Inicializar el servidor
//-- Cada vez que recibe una petición
//-- invoca a la funcion peticion para atenderla
const server = http.createServer(peticion)

//-- Configurar el servidor para escuchar en el
//-- puerto establecido
server.listen(PUERTO);

console.log("Servidor LISTO!")
console.log("Escuchando en puerto: " + PUERTO)
