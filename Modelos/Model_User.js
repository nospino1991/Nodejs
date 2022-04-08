const sequelize=require('sequelize');


const Sequelize=require('../DB/tedios');// Conexión 

const user=Sequelize.define('User',{
     id:{
            type:sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
      },
      nombre:{
        type:sequelize.STRING, 
     },direccion:{
        type:sequelize.STRING,
     },is_delete:{
           type:sequelize.INTEGER,
    }},
    {   timestamps: false,
        tableName: 'USUARIO_API',
        createdAt: false,
        updatedAt: false
    });
  

module.exports= user;