import {db} from '../database/index.js';
import { DataTypes } from 'sequelize';
import Usuarios from './Usuarios.js';

const Pedido = db.instance.define("Pedido", {
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

export default Pedido;