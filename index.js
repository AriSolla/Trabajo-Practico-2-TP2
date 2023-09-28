//Ejecutar en la terminal con ' node index.js '

const {leerGuardarArchivoSincronica} = require('./ms/ms.js')
const {leerGuardarArchivoAsincronica} = require('./mac/mac.js')
const {leerGuardarArchivoThenCatch} = require('./maptc/maptc.js')
const {leerGuardarArchivoAsyncAwait} = require('./mapaa/mapaa.js')

//Lectura del package.json y guardado del txt
const rutaArchivo = './package.json';
const rutaTxt = "./info.txt"

//Modo sincronico
leerGuardarArchivoSincronica(rutaArchivo, rutaTxt)

// //Modo asincronico Callback
// leerGuardarArchivoAsincronica(rutaArchivo, rutaTxt)

// //Modo asincronico then catch
// leerGuardarArchivoThenCatch(rutaArchivo, rutaTxt)

// //Modo asincronico async await
// leerGuardarArchivoAsyncAwait(rutaArchivo, rutaTxt)

