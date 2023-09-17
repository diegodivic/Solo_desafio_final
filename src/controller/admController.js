const { Usuarios } = require('../model/index.js');
const bcrypt = require('bcryptjs');

/*import { Usuarios } from '../model/index.js';
import bcrypt from 'bcryptjs';*/

const admController = {

    async cadastrarADM(req, res) {
        const { nome, email, senha, tipo_usuario } = req.body;

        const novaSenha =  bcrypt.hashSync(senha, 10);

        const novoADM = await Usuarios.create({
            nome, 
            email,
            senha: novaSenha,
            tipo_usuario,
        });

        res.status(201).json(novoADM);
    },
}

module.exports = admController;