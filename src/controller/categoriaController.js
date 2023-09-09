import { Categoria } from '../model/index.js';

const categoriaController = {

    async cadastrarCategoria(req, res) {
        const { nome, descricao } = req.body;
        const consulta = await Categoria.findOne({
            where:{
                nome: req.body.nome
            }
        })
        if(consulta !== null ){
            return res.status(403).json("Categoria já cadastrada");
        }
        const novaCategoria = await Categoria.create({
            nome, 
            descricao,
        });


        res.status(201).json(novaCategoria);
    },

    async listarCategoria(req, res) {

        const listaDeCategoria = await Categoria.findAll();

        res.json(listaDeCategoria);

    },
    async deletarCategoria(req, res) {
        const { id_categoria } = req.params;
        const categoria = await Categoria.findByPk(id_categoria)
        if(!categoria) return res.status(404).json("Id não encontrado")
        try{
        
        await Categoria.destroy({
            where:{
                id_categoria,
            },
        }).then(()=>{
            res.status(204).end();
        });

    }catch(error) {
        return res.status(500).json("Ocorreu algum problema")
    }
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

export default categoriaController;