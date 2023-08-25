const Categoria = require('./Categoria');
const Produtos = require('./Produtos');

Produtos.belongsTo(Categoria,{
    foreignKey: "categoria_id",
});

Categoria.hasMany(Produtos,{
    foreignKey: "categoria_id",
});

module.exports={
    Categoria,
    Produtos,
}