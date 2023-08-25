const Produtos = require('../model/Produtos');

const produtosController = {

    async cadastrarProduto(req, res) {
        const { nome, link_foto, preco, descricao} = req.body;

        const novoProduto = await Produtos.create({
            nome, 
            link_foto,
            preco,
            descricao,
        });

        res.json(novoProduto);
    },

    async listarProduto(req, res) {

        const listaDeProdutos = await Produtos.findAll();

        res.json(listaDeProdutos);

    },

    async deletarProduto(req, res) {
        const { id_produto } = req.params;

        await Produtos.destroy({
            where:{
                id_produto,
            },
        });

        res.json("Produto deletado");
    },

    async atualizarProduto (req, res) {
        const { id_produto } = req.params;
        const { nome, link_foto, preco, descricao} = req.body;

        const produtoAtualizado = await Produtos.update({
            nome,
            link_foto,
            preco,
            descricao,
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