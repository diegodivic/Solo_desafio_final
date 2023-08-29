const { Usuarios } = require('../model');
const bcrypt = require("bcryptjs")

const usuariosController = {

    async cadastrarUsuario(req, res) {
        const { nome, email, senha, tipo_usuario } = req.body;

        const novaSenha =  bcrypt.hashSync('senha', 10);

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
        try{
        const { id_usuario } = req.params;

        await Usuarios.destroy({
            where:{
                id_usuario,
            },
        });

        res.status(204);
    }catch(error){
        return res.status(500).json("Ocorreu algum problema")
    }
},

    async atualizarUsuario (req, res) {
        const { id_usuario } = req.params;
        const { nome, email, senha, tipo_usuario } = req.body;

        if(!id_usuario) return res.status(400).json("id não enviado");
        
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

        res.json("Usuario atualizado");
    },
};

module.exports = usuariosController;