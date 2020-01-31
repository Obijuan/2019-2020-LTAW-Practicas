const fs = require('fs');

//-- Leer el fichero
fs.readFile('test.txt', 'utf8', (err, data) => {
  //-- Esto comienza cuando se ha terminado de leer el fichero
  //-- Ignoramos los errores
  console.log("---> Comienzo del fichero leido")
  console.log(data)
  console.log("---> Final del fichero")
});
