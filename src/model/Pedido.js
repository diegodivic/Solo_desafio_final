const db = require("../database");
const { DataTypes } = require('sequelize');

const Pedido = db.define("Pedido", {
    numero: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    lista_produtos:{
        type: DataTypes.STRING,
    },
    valor_total:{
        type: DataTypes.INTEGER,
    },
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    },
},
{
    tableName: "pedido",

});

module.exports = Pedido;