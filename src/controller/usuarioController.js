import { Usuarios } from '../model/index.js';
import bcrypt from 'bcryptjs';
import MESSAGE from '../constants/messages.js';

const usuariosController = {

    async cadastrarUsuario(req, res) {
        const { nome, email, senha, tipo_usuario } = req.body;

        const novaSenha =  bcrypt.hashSync(senha, 10);

        const novoUsuario = await Usuarios.create({
            nome, 
            email,
            senha: novaSenha,
            tipo_usuario,
        });

        res.status(201).json(novoUsuario);
    },

    async listarUsuario(req, res) {

        const listaDeUsuarios = await Usuarios.findAll();

        res.json(listaDeUsuarios);

    },

    async deletarUsuario(req, res) {
        const { id_usuario } = req.params;
        const usuario = await Usuarios.findByPk(id_usuario)
        if(!usuario) return res.status(404).json(MESSAGE.ERROR.NOT_ID)
        try{
        
        await Usuarios.destroy({
            where:{
                id_usuario,
            },
        }).then(()=>{
            res.status(204).end();
        });

    }catch(error) {
        return res.status(500).json(MESSAGE.ERROR.ERR_500)
    }
},

    async atualizarUsuario (req, res) {
        const { id_usuario } = req.params;
        const { nome, email, senha, tipo_usuario } = req.body;

        if(!id_usuario) return res.status(400).json(MESSAGE.ERROR.NOT_ID);
        
        const usuarioAtualizado = await Usuarios.update({
            nome,
            email,
            senha,
            tipo_usuario,
        },
        {
            where: {
                id_usuario,
            },
        }
        );

        res.json(MESSAGE.SUCESS.UPDATE);
    },
};

export default usuariosController;