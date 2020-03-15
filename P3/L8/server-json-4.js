//-- Modulos utilizados
const http = require('http');
const url = require('url');
const fs = require('fs');

//-- Puerto donde recibir las peticiones
const PUERTO = 8080;

//-- Array con los productos disponibles
let productos = ["FPGA-1", "RISC-V", "74ls00", "FPGA-2"];

//-- Funcion para atender a una Peticion
//-- req: Mensaje de solicitud
//-- res: Mensaje de respuesta
function peticion(req, res) {
  //-- Mostrar en la consola el recurso al que se accede
  const q = url.parse(req.url, true);
  console.log("Petición: " + q.pathname);

  //-- Segun el recurso al que se accede
  switch (q.pathname) {

    //-- Pagina principal
    case "/":
      fs.readFile("./index4.html", (err, data) => {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
        return
      });
      break;

    //-- Fichero js cliente
    case "/client-4.js":
      fs.readFile("./client-4.js", (err, data) => {
        //-- Generar el mensaje de respuesta
        res.writeHead(200, {'Content-Type': 'application/javascript'});
        res.write(data);
        res.end();
        return
      });
      break;


    //-- Acceso al recurso JSON
    case "/myquery":

      //-- Leer los parámetros recibidos en la peticion
      const params = q.query;

      //-- No hacemos nada con ellos, simplemente los mostramos en
      //-- la consola
      console.log("Parametros: " +params.param1);

      //-- Crear array vacio, donde se meteran lo elementos de la búscqueda
      search = new Array;

      //-- Recorrer el array de productos. Se añaden en el array de busqueda
      //-- todos aquellos cuyas primeras letras coincidan con lo pasado por
      //-- el parametro param1
      for (let i=0; i<productos.length; i++) {

        //-- Si el producto comienza por param1: añadirlo
        if (productos[i].search(params.param1)==0) {
          search.push(productos[i]);
        }
      }

      //-- Contenido en formato JSON
      //-- Es lo que se va a devolver en la petición
      content = JSON.stringify(search) + '\n';

      //-- Generar el mensaje de respuesta
      //-- IMPORTANTE! Hay que indicar que se trata de un objeto JSON
      //-- en la cabecera Content-Type
      res.setHeader('Content-Type', 'application/json')
      res.write(content);
      res.end();
      return
      break

    //-- Se intenta acceder a un recurso que no existe
    default:
      content = "Error";
      res.statusCode = 404;
      //-- Generar el mensaje de respuesta
      res.setHeader('Content-Type', 'text/html')
      res.write(content);
      res.end();
  }

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
