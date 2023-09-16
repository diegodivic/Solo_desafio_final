import { Produtos, Categoria } from '../model/index.js';
import MESSAGE from '../constants/messages.js';

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
        if(!produto) return res.status(404).json(MESSAGE.ERROR.NOT_ID)
        try{
        
        await Produtos.destroy({
            where:{
                id_produto,
            },
        }).then(()=>{
            res.status(204).end();
        });

    }catch(error) {
        return res.status(500).json(MESSAGE.ERROR.ERR_500)
    }
},

    async atualizarProduto (req, res) {
        const { id_produto } = req.params;
        const { nome, link_foto, preco, descricao, categoria_id} = req.body;

        if(!id_produto) return res.status(400).json(MESSAGE.ERROR.NOT_ID);
        
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

        res.json(MESSAGE.SUCESS.UPDATE);
    },
};

export default produtosController;