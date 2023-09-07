// *** INICIO DAS IMPORTAÇÕES *** \\

const express = require('express');

//Importação controllers dos models
const produtosController = require('../controller/produtosController');
const categoriaController = require("../controller/categoriaController");
const usuariosController = require('../controller/usuarioController');
const pedidoController = require('../controller/pedidoController');

//Importação  das validações
const usuarioCreateValidation = require('../validations/usuarios/create');
const produtoCreateValidation = require('../validations/produtos/create');
const authLoginValidation = require("../validations/auth/login");

//Importação do controller do login
const authController = require("../controller/authController");

//Importação dos middlewares
const auth = require("../middlewares/auth");
const authADM = require('../middlewares/authADM')


// *** FIM DAS IMPORTAÇÕES *** \\


const routes = express.Router();

// *** INICIO DAS ROTAS *** \\

// *** ROTAS DOS PRODUTOS *** \\

routes.get("/produto", produtosController.listarProduto);
routes.post("/produto", auth, authADM, produtoCreateValidation, produtosController.cadastrarProduto);
routes.delete("/produto/:id_produto", produtosController.deletarProduto);
routes.put("/produto/:id_produto", produtosController.atualizarProduto);

// *** ROTAS DAS CATEGORIAS *** \\

routes.get("/categoria", categoriaController.listarCategoria);
routes.post("/categoria", categoriaController.cadastrarCategoria);
routes.delete("/categoria/:id_categoria", categoriaController.deletarCategoria);
routes.put("/categoria/:id_categoria", categoriaController.atualizarCategoria);

// *** ROTAS DOS USUARIOS *** \\

routes.get("/usuario", auth, usuariosController.listarUsuario);
routes.post("/usuario", usuarioCreateValidation, usuariosController.cadastrarUsuario);
routes.delete("/usuario/:id_usuario", auth, usuariosController.deletarUsuario);
routes.put("/usuario/:id_usuario", auth, usuariosController.atualizarUsuario);

// *** ROTAS DO LOGIN *** \\

routes.post("/login", authLoginValidation, authController.login);

// *** ROTAS DOS PEDIDOS *** \\

routes.get("/pedido", pedidoController.listarPedido);
routes.post("/pedido", pedidoController.cadastrarPedido);
routes.delete("/pedido/:numero", pedidoController.deletarPedido);
routes.put("/pedido/:numero", pedidoController.atualizarPedido);

// *** FIM DAS ROTAS *** \\

module.exports = routes;