const express = require('express');
const produtosController = require('../controller/produtosController');
const categoriaController = require("../controller/categoriaController")
const routes = express.Router();


routes.get("/produto", produtosController.listarProduto);
routes.post("/produto", produtosController.cadastrarProduto);
routes.delete("/produto/:id_produto", produtosController.deletarProduto);
routes.put("/produto/:id_produto", produtosController.atualizarProduto);

routes.get("/categoria", categoriaController.listarCategoria);
routes.post("/categoria", categoriaController.cadastrarCategoria);
routes.delete("/categoria/:id_categoria", categoriaController.deletarCategoria);
routes.put("/categoria/:id_categoria", categoriaController.atualizarCategoria);


module.exports = routes;