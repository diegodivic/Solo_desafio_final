import { Categoria } from '../model/index.js';
import MESSAGE from '../constants/messages.js';

const categoriaController = {

    async cadastrarCategoria(req, res) {
        const { nome, descricao } = req.body;
        const consulta = await Categoria.findOne({
            where:{
                nome: req.body.nome
            }
        })
        if(consulta !== null ){
            return res.status(403).json(MESSAGE.ERROR.CAT_EXIST);
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
        if(!categoria) return res.status(404).json(MESSAGE.ERROR.NOT_ID)
        try{
        
        await Categoria.destroy({
            where:{
                id_categoria,
            },
        }).then(()=>{
            res.status(204).end();
        });

    }catch(error) {
        return res.status(500).json(MESSAGE.ERROR.ERR_500)
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

        res.json(MESSAGE.SUCESS.UPDATE);
    },
};

export default categoriaController;