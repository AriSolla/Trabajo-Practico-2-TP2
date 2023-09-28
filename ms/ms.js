/****************************************************************/
/*                          MODO SINCRONICO                     */
/****************************************************************/


const fs = require('fs');

//Metodos guardar y leer
const leerArchivo = (rutaLectura) => {
    try {
        return fs.readFileSync(rutaLectura,"utf-8")
        
    } catch (error) {
        return "Error: " + error
    }
}
const guardarArchivo = (rutaGuardado, textoGuardar) =>{
    try{
        fs.writeFileSync(rutaGuardado, textoGuardar)
        console.log("Archivo escrito... (Modo sincronico)")
    }catch(error){
        console.log(error);
    } 
    
}

const leerGuardarArchivoSincronica = (rutaLectura, rutaGuardado) =>{
    //Guardo los valores para el objeto "info"
    let archivoStr = leerArchivo(rutaLectura)
    let archivoOjb = JSON.parse(archivoStr)
    let size = Buffer.byteLength(archivoStr);

    //declaro el objeto info
    let info = {
        contenidoStr: archivoStr,
        contenidoObj: archivoOjb,
        size: size,
       }
    console.log(info);

    guardarArchivo(rutaGuardado, archivoStr)

}

module.exports = {leerGuardarArchivoSincronica}