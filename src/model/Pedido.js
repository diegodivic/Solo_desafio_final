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
        type: DataTypes.DOUBLE,
    },

},
{
    tableName: "pedido",
    timestamps: false,
});

module.exports = Pedido;