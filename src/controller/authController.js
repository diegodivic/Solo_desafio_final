const { Usuarios } = require("../model");
const bcrypt = require('bcryptjs');

const authController = {
    async login(req, res){
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({
            where: {
                email,
            }
        });

        if(!usuario){
            return res.status(400).json("Email não cadastrado!")
        }

        if(bcrypt.compareSync(senha, usuario.senha)) {
            return res.json("Logado")
        }

        return res.status(401).json("Senha invalida");
    },
};

module.exports = authController;