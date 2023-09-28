/****************************************************************/
/*                   MODO ASINCRONICO CALLBACKS                 */
/****************************************************************/

const fs = require('fs');


function leerGuardarArchivoAsincronica(rutaLectura, rutaGuardado) {

    fs.readFile(rutaLectura,'utf-8', (error, datos) => {
        if(error) throw Error(`Error en operación de lectura: ${error.message}`)
       
        
        let archivoOjb = JSON.parse(datos)
        let size = Buffer.byteLength(datos);
        //declaro el objeto info
        let info = {
            contenidoStr: datos,
            contenidoObj: archivoOjb,
            size: size,
           }
        console.log(info);

        fs.writeFile(rutaGuardado, datos, error => {
            if(error) throw Error(`Error en operación de escritura: ${error.message}`)
            console.log('Archivo Escrito...(Modo asincronico callbacks')
        })
    })
}

module.exports = {leerGuardarArchivoAsincronica}