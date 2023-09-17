const { validate, Joi } = require('express-validation');

//import { validate, Joi } from 'express-validation';

//export default
module.exports = validate({
    body: Joi.object({
        nome: Joi.string().required(),
        descricao: Joi.string().required(),
    })
})