const { db } = require('../database');
const { DataTypes } = require('sequelize');

/*import {db} from '../database/index.js';
import { DataTypes } from 'sequelize';*/

const Categoria = db.instance.define("Categoria", {
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
},
{
    tableName: "categoria",
    timestamps: false,

});

module.exports = Categoria;