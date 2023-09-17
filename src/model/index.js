const Categoria = require('./Categoria.js');
const Produtos = require('./Produtos.js');
const Usuarios = require('./Usuarios.js');
const Pedido = require('./Pedido.js');

/*import Categoria from './Categoria.js';
import Produtos from './Produtos.js';
import Usuarios from './Usuarios.js';
import Pedido from './Pedido.js';*/

Produtos.belongsTo(Categoria,{
    foreignKey: "categoria_id",
});

Categoria.hasMany(Produtos,{
    foreignKey: "categoria_id",
});

Pedido.belongsTo(Usuarios,{
    foreignKey: "usuario_id",
});

Usuarios.hasMany(Pedido,{
    foreignKey: "usuario_id",
});

module.exports = {
    Categoria,
    Produtos,
    Usuarios,
    Pedido,
}