const { db } = require('../database');
const { DataTypes } = require('sequelize');

/*import {db} from '../database/index.js';
import { DataTypes } from 'sequelize';*/

const Usuarios = db.instance.define("Usuarios", {
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
},
{
    tableName: "usuario",
    timestamps: false,

});

module.exports = Usuarios;