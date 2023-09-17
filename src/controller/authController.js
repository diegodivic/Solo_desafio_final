const { Usuarios } = require('../model/index.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../infra/configs/secret.js');
const MESSAGE = require('../constants/messages.js');


/*import { Usuarios } from '../model/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import secret from '../infra/configs/secret.js'
import MESSAGE from '../constants/messages.js'*/

const authController = {
    async login(req, res){
        const { email, senha } = req.body;

        const usuario = await Usuarios.findOne({
            where: {
                email,
            },
        });

        if(!usuario){
            return res.status(400).json(MESSAGE.ERROR.EMAIL_INVALID);
        }

        if(!bcrypt.compareSync(senha, usuario.senha)) {
            return res.status(401).json(MESSAGE.ERROR.PASS_INVALID);
        }

        const token = jwt.sign(
            { 
                id: usuario.id_usuario,
                nome: usuario.nome,
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