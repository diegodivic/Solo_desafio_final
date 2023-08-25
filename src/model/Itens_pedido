const db = require("../database");
const { DataTypes } = require('sequelize');

const Itens_pedido = db.define("Itens_pedido", {
    seq: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quantidade:{
        type: DataTypes.INTEGER,
    },
    preco_unitario:{
        type: DataTypes.DOUBLE,
    },
    preco_final:{
        type: DataTypes.DOUBLE,
    },
    
},
{
    tableName: "itens_pedido",
    timestamps: false,

});

module.exports = Itens_pedido;