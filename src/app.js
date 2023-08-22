const express = require('express');
const routes = require('./router')
const app = express();

const porta = 3000;


app.use(express.json())
app.use(routes);

app.listen(porta, ()=> console.log(`Servidor rodando na porta ${porta}`))