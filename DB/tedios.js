const Sequelize=require("sequelize")

const conf_db=require('../util/constants');

 const sequalize=new Sequelize(conf_db.V_NAME_BD_PORTL_AUD,conf_db.V_USER_PORTAL_PORTAL_AUD,conf_db.V_PASSWORD_PORTAL_AUD, {
        
         host: conf_db.V_HOST_PORTAL_AUD,
       
          dialect: 'mssql',

          pool: {
            max: 5,
            min: 0,
            idle: 10000
          },

        'dialectOptions': {
          " requestTimeout " :  300000,
            "options": { 
             
                "instanceName":conf_db.V_INST_PORTAL_AUD,
              
            }
        }
  }
)
  module.exports=sequalize;
