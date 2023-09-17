const { expressjwt } = require('express-jwt');
const secret = require('../configs/secret.js');

/*import { expressjwt } from 'express-jwt'
import secret from '../configs/secret.js'*/

module.exports = expressjwt({
    secret: secret.key,
    algorithms: ["HS256"],
}); 