//Importar los modulos que voy a utilizar
const dbPaises = require('../db/db')

//Exportamos los modulos que necesitamos para nuestro servidor

module.exports.chequeoInformacion = (req,res,next)=> {
    if(!req.body.nombre || !req.body.codigo_pais) {
        dbPaises.Respuesta = {
            codigo : 502,
            error: true,
            mensaje: 'El campo de Nombre o Codigo de pais deben existir para poder darlo de alta en la DB'
        };
        res.send(dbPaises.Respuesta)
    }else {
        return next()
    }
}

module.exports.log = function (req, res, next) {
    const { method, path, query, body } = req;
    console.log(`${method} - ${path} - ${JSON.stringify(query)} - ${JSON.stringify(body)}`);
    next();
}