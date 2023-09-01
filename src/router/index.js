const express = require('express');
const produtosController = require('../controller/produtosController');
const categoriaController = require("../controller/categoriaController");
const usuariosController = require('../controller/usuarioController');
const pedidoController = require('../controller/pedidoController');
const usuarioCreateValidation = require('../validations/usuarios/create');
const produtoCreateValidation = require('../validations/produtos/create');
const authLoginValidation = require("../validations/auth/login");
const authController = require("../controller/authController");
const auth = require("../middlewares/auth")
const routes = express.Router();


routes.get("/produto", produtosController.listarProduto);
routes.post("/produto", auth, produtoCreateValidation, produtosController.cadastrarProduto);
routes.delete("/produto/:id_produto", produtosController.deletarProduto);
routes.put("/produto/:id_produto", produtosController.atualizarProduto);

routes.get("/categoria", categoriaController.listarCategoria);
routes.post("/categoria", categoriaController.cadastrarCategoria);
routes.delete("/categoria/:id_categoria", categoriaController.deletarCategoria);
routes.put("/categoria/:id_categoria", categoriaController.atualizarCategoria);

routes.get("/usuario", usuariosController.listarUsuario);
routes.post("/usuario", usuarioCreateValidation, usuariosController.cadastrarUsuario);
routes.delete("/usuario/:id_usuario", usuariosController.deletarUsuario);
routes.put("/usuario/:id_usuario", usuariosController.atualizarUsuario);

routes.post("/login", authLoginValidation, authController.login);

routes.get("/pedido", pedidoController.listarPedido);
routes.post("/pedido", pedidoController.cadastrarPedido);
routes.delete("/pedido/:numero", pedidoController.deletarPedido);
routes.put("/pedido/:numero", pedidoController.atualizarPedido);


module.exports = routes;