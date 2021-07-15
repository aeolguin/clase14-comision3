//Modulos requeridos
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors')
const paisesRoutes = require('./routes/paises.routes')


//configuramos nuestro servidor
app.use(express.json())
//Esto es para poder acer las consultas entre servidores - 
app.use(cors())



//Iniciamos nuestro servidor
app.listen(process.env.PORT , ()=> {
    console.log(`servidor iniciado en http://${process.env.HOST}:${process.env.PORT}`)
})

//Implementamos nuestras rutas.
paisesRoutes(app)