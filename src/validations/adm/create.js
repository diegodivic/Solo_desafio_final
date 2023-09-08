import { validate, Joi } from 'express-validation';

export default validate({
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).required(),
        tipo_usuario: Joi.string().lowercase().valid("administrador")
    })
})