'use strict';

const { DataTypes } = require('sequelize')


module.exports = {
    up: (queryInterface)=>{
        return queryInterface.createTable('usuario', {
        id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
         },
        nome:{
        type: DataTypes.STRING,
         },
        email:{
        type: DataTypes.STRING,
            },
        senha:{
        type: DataTypes.STRING,
         },
        tipo_usuario:{
        type: DataTypes.STRING
         },
        })
    },
    down: (queryInterface) =>{
        return queryInterface.dropTable('usuario');
    },
}