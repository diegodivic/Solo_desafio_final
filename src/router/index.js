const express = require('express');
const produtosController = require('../controller/produtosController');
const routes = express.Router();


routes.get("/produto", produtosController.listarProduto);
routes.post("/produto/criar", produtosController.cadastrarProduto);
routes.delete("/produto/:id_produto/deletar", produtosController.deletarProduto);
routes.put("/produto/:id_produto/atualizar", produtosController.atualizarProduto);


module.exports = routes;