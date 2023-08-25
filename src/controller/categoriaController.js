const { Categoria } = require('../model');

const categoriaController = {

    async cadastrarCategoria(req, res) {
        const { nome, descricao } = req.body;

        const novaCategoria = await Categoria.create({
            nome, 
            descricao,
        });

        res.json(novaCategoria);
    },

    async listarCategoria(req, res) {

        const listaDeCategoria = await Categoria.findAll();

        res.json(listaDeCategoria);

    },

    async deletarCategoria(req, res) {
        const { id_categoria } = req.params;

        await Categoria.destroy({
            where:{
                id_categoria,
            },
        });

        res.json("Categoria deletada");
    },

    async atualizarCategoria (req, res) {
        const { id_categoria } = req.params;
        const { nome, descricao} = req.body;

        const categoriaAtualizada = await Categoria.update({
            nome,
            descricao,
        },
        {
            where: {
                id_categoria,
            },
        }
        );

        res.json("Categoria atualizada");
    },
};

module.exports = categoriaController;