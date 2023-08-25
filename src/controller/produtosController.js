const { Produtos, Categoria } = require('../model');

const produtosController = {

    async cadastrarProduto(req, res) {
        const { nome, link_foto, preco, descricao, categoria_id} = req.body;

        const novoProduto = await Produtos.create({
            nome, 
            link_foto,
            preco,
            descricao,
            categoria_id,
        });

        res.status(201).json(novoProduto);
    },

    async listarProduto(req, res) {

        const listaDeProdutos = await Produtos.findAll({
            include: Categoria
        });

        res.json(listaDeProdutos);

    },

    async deletarProduto(req, res) {
        try{
        const { id_produto } = req.params;

        await Produtos.destroy({
            where:{
                id_produto,
            },
        });

        res.status(204);
    }catch(error){
        return res.status(500).json("Ocorreu algum problema")
    }
},

    async atualizarProduto (req, res) {
        const { id_produto } = req.params;
        const { nome, link_foto, preco, descricao, categoria_id} = req.body;

        if(!id) return res.status(400).json("id não enviado");
        
        const produtoAtualizado = await Produtos.update({
            nome,
            link_foto,
            preco,
            descricao,
            categoria_id,
        },
        {
            where: {
                id_produto,
            },
        }
        );

        res.json("Produto atualizado");
    },
};

module.exports = produtosController;