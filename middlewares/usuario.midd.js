//Importar los modulos que voy a utilizar
const {Usuarios} = require('../db/db')

//Exportar los modulos que quiero utilizar
module.exports.usuarioValido = (req,res,next)=> {
    let usr = req.body.usuario
    console.log('Ingreso a nuestro Middleware')
    console.log(usr)

    if(usr.usr === Usuarios.usr[0]) {
        if(usr.categoria === Usuarios.categoria[0]){
            return next()
        }else {
            res.json('Usted no tiene permisos de administrador para ver esta seccion')
        }
        
    }else {
        res.json('Usuario no valido para esta API')
    }

    
}