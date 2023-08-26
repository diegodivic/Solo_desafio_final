const Categoria = require('./Categoria');
const Produtos = require('./Produtos');
const Usuarios = require('./Usuarios');
const Pedido = require('./pedido');

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

module.exports={
    Categoria,
    Produtos,
    Usuarios,
    Pedido,
}