const jwt = require('jsonwebtoken')


const authADM = (req,res,next)=>{
    const jwtusuario = req.headers.authorization.split(' ')[1];
    const { tipo_usuario } = jwt.decode(jwtusuario);
    
    if( tipo_usuario == "administrador"){
     return  next();
    }
    
    res.status(401).json("Usuario não autorizado")
    
    
}
module.exports = authADM;