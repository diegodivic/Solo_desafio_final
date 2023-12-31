const jwt = require('jsonwebtoken');
const MESSAGE = require('../../constants/messages.js');

/*import jwt from 'jsonwebtoken';
import MESSAGE from '../../constants/messages.js';*/

const authADM = (req,res,next)=>{
    const jwtusuario = req.headers.authorization.split(' ')[1];
    const { tipo_usuario } = jwt.decode(jwtusuario);
    
    if( tipo_usuario == "administrador"){
     return  next();
    }
    
    res.status(401).json(MESSAGE.ERROR.UNAUT_USER)
    
    
}
module.exports = authADM;