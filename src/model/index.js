import Categoria from './Categoria.js';
import Produtos from './Produtos.js';
import Usuarios from './Usuarios.js';
import Pedido from './Pedido.js';

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

export {
    Categoria,
    Produtos,
    Usuarios,
    Pedido,
}