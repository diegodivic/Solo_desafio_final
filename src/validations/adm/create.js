const { validate, Joi } = require('express-validation');

//import { validate, Joi } from 'express-validation';

//export default
module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required(),
        tipo_usuario: Joi.string().lowercase().valid("administrador")
    })
})