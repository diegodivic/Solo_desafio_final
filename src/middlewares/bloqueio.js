const Usuarios = require('../model/Usuarios');

module.exports = (req, res, next)=>{
    const { tipo_usuario } = req.body;

    if(tipo_usuario !== "administrador"){
        return res.json("Acesso restrito");
    };
    next();


};