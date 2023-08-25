const db = require("../database");
const { DataTypes } = require('sequelize');

const Usuarios = db.define("Usuarios", {
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
    createdAt:{
        type: DataTypes.DATE,
    },
    updatedAt:{
        type: DataTypes.DATE,
    },
},
{
    tableName: "usuario",

});

module.exports = Usuarios;