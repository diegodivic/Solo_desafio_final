'use strict';

const { DataTypes } = require('sequelize')


module.exports = {
    up: (queryInterface)=>{
        return queryInterface.createTable('categoria', {
        id_categoria: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    descricao:{
        type: DataTypes.TEXT,
    },
        })
    },
    down: (queryInterface) =>{
        return queryInterface.dropTable('categoria');
    },
}