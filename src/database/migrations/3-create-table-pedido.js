'use strict';

const { DataTypes } = require('sequelize')


module.exports = {
    up: (queryInterface)=>{
        return queryInterface.createTable('pedido', {
        numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lista_produtos:{
        type: DataTypes.STRING,
    },
    valor_total:{
        type: DataTypes.DOUBLE,
    },
    usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model:{
                tableName: 'usuario',
                schema: ''
            },
            key:'id_usuario'
        },
    },
        })
    },
    down: (queryInterface) =>{
        return queryInterface.dropTable('pedido');
    },
}