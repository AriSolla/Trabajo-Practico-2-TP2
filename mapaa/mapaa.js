/****************************************************************/
/*                     MODO ASINCRONICO ASYNC AWAIT             */
/****************************************************************/


const fs = require('fs');

const leerGuardarArchivoAsyncAwait = async (rutaLectura, rutaGuardado) => {
    try {
        let datosStr = await fs.promises.readFile(rutaLectura,'utf-8')
        let archivoOjb = JSON.parse(datosStr)
        let size = Buffer.byteLength(datosStr);
        //declaro el objeto info
        let info = {
            contenidoStr: datosStr,
            contenidoObj: archivoOjb,
            size: size,
        }
        console.log(info);

        await fs.promises.writeFile(rutaGuardado, datosStr)
        console.log("Archivo escrito...(Modo asincronico async await)");
    }
    catch(error) {
        console.log(`Error en operación asincrónica de lectura: ${error.message}`)
    }
}

module.exports = {leerGuardarArchivoAsyncAwait}