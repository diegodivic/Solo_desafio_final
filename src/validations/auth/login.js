const { validate, Joi } = require('express-validation');

//import { validate, Joi } from 'express-validation';

//export default
module.exports = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().required(),
    })
});