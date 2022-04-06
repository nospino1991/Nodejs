const express= require("express")
const router= express.Router();
const Controller_lenguaje=require("../Controladores/Controller_lenguaje")
const group_router="lenguaje"

router.get(`/${group_router}/`,Controller_lenguaje.findAll)
router.post(`/${group_router}/`,Controller_lenguaje.Save)



module.exports =router