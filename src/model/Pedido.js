const db = require("../database");
const { DataTypes } = require('sequelize');
const Usuarios = require('./Usuarios')

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
    usuario_id:{
        type: DataTypes.INTEGER,
        references:{
            model: Usuarios,
            key:'id_usuario'
        }
    },

},
{
    tableName: "pedido",
    timestamps: false,
});

module.exports = Pedido;