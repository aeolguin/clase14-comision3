//Requerir los modulos que vamos a utilizar
const dbPaises = require('../db/db')
const midd = require('../middlewares/usuario.midd')
const middChk = require('../middlewares/informacion.midd')

//Exportar nuestras rutas para que trabajen en el servidor.

module.exports = (app)=> {

    //Iniciamos el endpoint
app.get('/', middChk.log, (req, res)=> {
    //Si llegamos hasta aca: Creamos una respuesta como OK
    dbPaises.Respuesta = {
        codigo: 200,
        error: true,
        mensaje: 'Punto de inicio'
    }
    res.send(dbPaises.Respuesta);
})

//Creamos una respuesta con datos de nuestra base de datos

app.get('/pais',  (req, res)=> {
    //Si llegamos hasta aca, respondemos lo que nos solicitan

    res.send(dbPaises.Paises)
})

app.post('/pais',middChk.log ,midd.usuarioValido, middChk.chequeoInformacion , (req, res)=> {

    dbPaises.nuevoPais(req.body.nombre, req.body.codigo_pais)

    dbPaises.Respuesta = {
            codigo: 200,
            error: false,
            mensaje: ' Pais creado correctamente',
            respuesta: dbPaises.Paises
    };
    
    res.send(dbPaises.Respuesta)
})

app.delete('/pais/:nombre', (req,res)=> {
    let nombrePais = req.params.nombre

    if (dbPaises.borrarPais(nombrePais)){
        dbPaises.Respuesta = {
            codigo: 200,
            error:false,
            mensaje: 'Pais eliminado correctamente de la DB'
        }
    }else {
        dbPaises.Respuesta = {
            codigo: 502,
            error:true,
            mensaje: 'El pais que intenta eliminar no existe en la DB'
        }
    }

    res.send(dbPaises.Respuesta)
})
}
