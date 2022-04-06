
const data_lenguaje=require("../util/datos")

const util=require("../util/apisexternas")

exports.findAll=(req,resp)=>{ 
        let data = data_lenguaje.getLenguajes();  
        return resp.send({"REFACTORIZACIONMODULO":data})
}


exports.findbyId=()=>{


}

exports.Save=(req,resp)=>{
    let data = data_lenguaje.getLenguajes(); 

  

    const {id,name,complejidad} = req.body
    data.push({id:id,name:name,complejidad:complejidad})

    return  resp.send(data)


}

exports.Edit=()=>{
   // let datosObtener=util.API_USUARIO+"/ruta"
}


