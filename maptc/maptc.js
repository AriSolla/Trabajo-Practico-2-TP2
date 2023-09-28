/****************************************************************/
/*                 MODO ASINCRONICO THEN CATCH                  */
/****************************************************************/

const fs = require('fs')

function leerArchivoPromesa(rutaLectura) {
    return new Promise((res,rej) => {
        fs.readFile(rutaLectura,'utf-8', (error, datos) => {
            if(error) rej(error)
            else res(datos)
        })
    })
}

function guardarArchivoPromesa(rutaGuardado, textoGuardar) {
    return new Promise((res,rej) => {
        fs.writeFile(rutaGuardado, textoGuardar, error => {
            if(error) rej(error)
            else {
                res()
                console.log("Archivo escrito...(Modo asincronico then catch)");
            }
        })
    })
}

const leerGuardarArchivoThenCatch = (rutaLectura, rutaGuardado) =>{
    leerArchivoPromesa(rutaLectura).then((textoGuardar) => {
        let archivoOjb = JSON.parse(textoGuardar)
        let size = Buffer.byteLength(textoGuardar);
        
        //declaro el objeto info
        let info = {
            contenidoStr: textoGuardar,
            contenidoObj: archivoOjb,
            size: size,
        }
        console.log(info);
        return textoGuardar
    })
    .then((textoGuardar) =>{
        guardarArchivoPromesa(rutaGuardado, textoGuardar)
    })
    .catch((err) => {
    console.error('Error al obtener el tamaño del archivo:', err);
  });
}

module.exports = {leerGuardarArchivoThenCatch}