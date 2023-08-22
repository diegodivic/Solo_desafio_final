const usuarioController = {
    listarUsuario(req, res){
        res.json([{ nome: "Usuario 1"}])

    }
}

module.exports = usuarioController;