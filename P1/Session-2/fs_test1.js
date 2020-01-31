//-- Acceso al módulo fs, para lectura de ficheros
const fs = require('fs');

//-- Funcion llamada cuando se ha terminado de leer el fichero
function show_file(err, data) {

    //-- Mostrar el contenido del fichero
    console.log(data)
}

//-- Leer el fichero. Al terminar se invoca a la función show_file
fs.readFile('test2.txt', 'utf8', show_file);
