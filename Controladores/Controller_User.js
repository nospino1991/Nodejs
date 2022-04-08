const Model_User=require("../Modelos/Model_User")

exports.save=async(req,resp)=>{
    try {
          let {nombre_user,direc,estate}=req.body

          if (!nombre_user || !direc || !estate)  {
             return resp.send({"Mensaje":"Me estás enviando el cuerpo de la petición mal"}) 
          }

          let response=await Model_User.create({
                nombre:nombre_user,
                direccion:direc,
                is_delete:estate
    
          })

          return resp.send(response) 
    } catch (error) {
           console.log(error)
           return resp.send(error)
    } 
}

exports.FindAll=async (req,resp)=>{
    try {
          let user= await Model_User.findAll({
            attributes: ['nombre', 'direccion','is_delete']
          });
          return resp.send(user)
    } catch (error) {
          console.log("error",error)
          return resp.send(error)
    }
}

exports.edit=(req,resp)=>{

}

exports.Delete=(req,resp)=>{

}

//Un modelo herada todos los métodos y propiedades de su ORM