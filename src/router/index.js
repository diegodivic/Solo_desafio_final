// *** INICIO DAS IMPORTAÇÕES *** \\

const express = require('express')
//import express from 'express';

//Importação controllers dos models

const produtosController = require('../controller/produtosController.js');
const categoriaController = require('../controller/categoriaController.js');
const usuariosController = require('../controller/usuarioController.js');
const pedidoController = require('../controller/pedidoController.js');
const admController = require('../controller/admController.js');

/*import produtosController from '../controller/produtosController.js';
import categoriaController from '../controller/categoriaController.js';
import usuariosController from '../controller/usuarioController.js';
import pedidoController from '../controller/pedidoController.js';
import admController  from '../controller/admController.js'*/

//Importação  das validações

const usuarioCreateValidation = require('../validations/usuarios/create.js');
const produtoCreateValidation = require('../validations/produtos/create.js');
const pedidoCreateValidation = require('../validations/pedido/create.js')
const categoriaCreateValidation = require('../validations/categoria/create.js');
const authLoginValidation = require('../validations/auth/login.js');
const admCreateValidation = require('../validations/adm/create.js');

/*import usuarioCreateValidation from '../validations/usuarios/create.js';
import produtoCreateValidation from '../validations/produtos/create.js';
import pedidoCreateValidation from '../validations/pedido/create.js'
import categoriaCreateValidation from '../validations/categoria/create.js'
import authLoginValidation from '../validations/auth/login.js';
import admCreateValidation from '../validations/adm/create.js'*/

//Importação do controller do login

const authController = require('../controller/authController.js');
//import authController from '../controller/authController.js';


//Importação dos middlewares

const auth = require('../infra/middlewares/auth.js');
const authADM = require('../infra/middlewares/authADM.js');

/*import auth from '../infra/middlewares/auth.js';
import authADM from '../infra/middlewares/authADM.js';*/


// *** FIM DAS IMPORTAÇÕES *** \\


const routes = express.Router();

// *** INICIO DAS ROTAS *** \\

// *** ROTAS DOS PRODUTOS *** \\

routes.get("/produto", auth, produtosController.listarProduto);
routes.post("/produto", auth, authADM, produtoCreateValidation, produtosController.cadastrarProduto);
routes.delete("/produto/:id_produto", auth, authADM, produtosController.deletarProduto);
routes.put("/produto/:id_produto", auth, authADM, produtosController.atualizarProduto);

// *** ROTAS DAS CATEGORIAS *** \\

routes.get("/categoria", auth, categoriaController.listarCategoria);
routes.post("/categoria", auth, authADM, categoriaCreateValidation, categoriaController.cadastrarCategoria);
routes.delete("/categoria/:id_categoria", auth, authADM, categoriaController.deletarCategoria);
routes.put("/categoria/:id_categoria", auth, authADM, categoriaController.atualizarCategoria);

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

routes.get("/pedido", auth, pedidoController.listarPedido);
routes.post("/pedido", auth, pedidoCreateValidation, pedidoController.cadastrarPedido);
routes.delete("/pedido/:numero", auth, pedidoController.deletarPedido);
routes.put("/pedido/:numero", auth, pedidoController.atualizarPedido);

// *** FIM DAS ROTAS *** \\
module.exports = routes;