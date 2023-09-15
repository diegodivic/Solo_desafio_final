import { validate, Joi } from 'express-validation';

export default validate({
    body: Joi.object({
        lista_produtos: Joi.string().required(),
        valor_total: Joi.number().required(),
        usuario_id: Joi.number().required(),
    })
})