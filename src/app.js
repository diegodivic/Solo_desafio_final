const express = require('express');
const routes = require('./router');
const handleError = require('./middlewares/handleError');

const db = require('./database');

const app = express();

const porta = 3000;

db.hasConection();

app.use(express.json());

app.use(routes);

app.use(handleError);

app.listen(porta, ()=> console.log(`Servidor rodando na porta ${porta}`))