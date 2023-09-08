// *** INICIO DAS IMPORTAÇÕES *** \\

import express from 'express';

//Importação controllers dos models

import produtosController from '../controller/produtosController.js';
import categoriaController from '../controller/categoriaController.js';
import usuariosController from '../controller/usuarioController.js';
import pedidoController from '../controller/pedidoController.js';
import admController from '../controller/admController.js'

//Importação  das validações

import usuarioCreateValidation from '../validations/usuarios/create.js';
import produtoCreateValidation from '../validations/produtos/create.js';
import authLoginValidation from '../validations/auth/login.js';
import admCreateValidation from '../validations/adm/create.js'

//Importação do controller do login
import authController from '../controller/authController.js';


//Importação dos middlewares
import auth from '../middlewares/auth.js';
import authADM from '../middlewares/authADM.js';


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

// *** ROTAS DOS ADMINISTRADORES *** \\
routes.post("/adm", auth, authADM, admCreateValidation, admController.cadastrarADM);

// *** ROTAS DO LOGIN *** \\

routes.post("/login", authLoginValidation, authController.login);

// *** ROTAS DOS PEDIDOS *** \\

routes.get("/pedido", pedidoController.listarPedido);
routes.post("/pedido", pedidoController.cadastrarPedido);
routes.delete("/pedido/:numero", pedidoController.deletarPedido);
routes.put("/pedido/:numero", pedidoController.atualizarPedido);

// *** FIM DAS ROTAS *** \\

export default routes;