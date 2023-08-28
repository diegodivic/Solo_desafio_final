const { validate, Joi } = require('express-validation');

module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        link_foto: Joi.string().required(),
        preco: Joi.number().required(),
        descricao: Joi.string().required(),
        categoria_id: Joi.number().required(),
    })
})