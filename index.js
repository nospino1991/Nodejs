
const express= require("express") 
const app =express();

const router_lenguaje=require("./rutas/router_lenguaje")
const router_User=require("./rutas/router_user")
const util=require("./util/constants")

//Desde aca 
const bodyParser = require('body-parser')
app.use(
    bodyParser.urlencoded({
    extended: true,
})
)
app.use(bodyParser.json())

//Hasta aca 

app.use(router_lenguaje)
app.use(router_User)


let port =util.PORT
app.listen(port,()=>{
    console.log(`Nuestra aplicación esta prendida en el puerto ${port}`)
})
//CRUD
//CREAR
//READER
//UPDATE
//DELETE