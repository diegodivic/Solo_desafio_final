const { db } = require('../database');
const { DataTypes } = require('sequelize');
const Categoria = require('./Categoria.js');

/*import {db} from '../database/index.js';
import { DataTypes } from 'sequelize';
import Categoria from './Categoria.js';*/

const Produtos = db.instance.define("Produtos", {
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
            model: Categoria,
            key:'id_categoria'
        }
    },
},
{
    tableName: "produto",
    timestamps: false,

});

module.exports = Produtos;