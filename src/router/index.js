const express = require('express');
const usuarioController = require('../controller/usuarioController')
const routes = express.Router();


routes.get('/usuario/lista', usuarioController.listarUsuario);

routes.post("/cadastrar", (req, res)=>{

})


module.exports = routes;