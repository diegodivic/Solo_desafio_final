'use strict';

const { DataTypes } = require('sequelize')


module.exports = {
    up: (queryInterface)=>{
        return queryInterface.createTable('produto', {
        id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome:{
        type: DataTypes.STRING,
    },
    link_foto:{
        type: DataTypes.STRING,
    },
    preco:{
        type: DataTypes.DOUBLE,
    },
    descricao:{
        type: DataTypes.TEXT,
    },
    categoria_id:{
        type: DataTypes.INTEGER,
        references:{
            model:{
                tableName: 'categoria',
                schema: ''
            },
            key:'id_categoria'
        }
    },
        })
    },
    down: (queryInterface) =>{
        return queryInterface.dropTable('produto');
    },
}