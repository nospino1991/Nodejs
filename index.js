
const express= require("express") 
const app =express();

const router_lenguaje=require("./rutas/router_lenguaje")
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

let port =util.PORT
app.listen(port,()=>{
    console.log(`Nuestra aplicación esta prendida en el puerto ${port}`)
})
