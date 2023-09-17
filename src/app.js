const express = require('express');
const routes = require('./router');
const handleError = require('./infra/middlewares/handleError.js')
const { db } = require('./database')
require('dotenv').config();

/*import express from 'express'
import routes from './router/index.js'
import handleError from './infra/middlewares/handleError.js'
import {db} from './database/index.js'*/


const app = express();

const porta = process.env.PORT;

db.hasConection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(porta, ()=> console.log(`Servidor rodando na porta ${porta}`))