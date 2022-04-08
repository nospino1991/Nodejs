const express= require("express")
const router= express.Router();
const Controller_User=require("../Controladores/Controller_User")
const group_router="User"

router.get(`/${group_router}/`,Controller_User.FindAll)
router.post(`/${group_router}/`,Controller_User.save)



module.exports =router