const { Usuarios } = require("../model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const secret = require("../configs/secret")

const authController = {
    async login(req, res){
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });

        if(!usuario){
            return res.status(400).json("Email não cadastrado!");
        }

        if(!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json("Senha invalida");
        }

        const token = jwt.sign(
            { 
                email: usuario.email, 
                tipo_usuario: usuario.tipo_usuario,
            },
            secret.key, 
            {
                //expiresIn: 60
                //expiresIn: 300
                //expiresIn: '1h'
                expiresIn: '7d'
            },
            )            
            /*console.log(jwt.decode(token))*/
        return res.status(200).json(token);
        
        
    },
};

module.exports = authController;