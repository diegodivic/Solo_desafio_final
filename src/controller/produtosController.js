import { Produtos, Categoria } from '../model/index.js';

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
        const { id_produto } = req.params;
        const produto = await Produtos.findByPk(id_produto)
        if(!produto) return res.status(404).json("Id não encontrado")
        try{
        
        await Produtos.destroy({
            where:{
                id_produto,
            },
        }).then(()=>{
            res.status(204).end();
        });

    }catch(error) {
        return res.status(500).json("Ocorreu algum problema")
    }
},

    async atualizarProduto (req, res) {
        const { id_produto } = req.params;
        const { nome, link_foto, preco, descricao, categoria_id} = req.body;

        if(!id_produto) return res.status(400).json("id não enviado");
        
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

export default produtosController;