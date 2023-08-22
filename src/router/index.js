const express = require('express');

const routes = express.Router();


routes.get('/', (req, res)=>{
    res.send("Fala caceta");
});

routes.post("/cadastrar", (req, res)=>{
    
})


module.exports = routes;