const { Pedido, Usuarios } = require('../model');

const pedidoController = {

    async cadastrarPedido(req, res) {
        const { lista_produtos, valor_total, usuario_id } = req.body;

        const novoPedido = await Pedido.create({
            lista_produtos, 
            valor_total,
            usuario_id
        });

        res.status(201).json(novoPedido);
    },

    async listarPedido(req, res) {

        const listaDePedidos = await Pedido.findAll({
            include: Usuarios
        });

        res.json(listaDePedidos);

    },

    async deletarPedido(req, res) {
        try{
        const { numero } = req.params;

        await Pedido.destroy({
            where:{
                numero,
            },
        });

        res.status(204);
    }catch(error){
        return res.status(500).json("Ocorreu algum problema")
    }
},

    async atualizarPedido (req, res) {
        const { numero } = req.params;
        const { lista_produtos, valor_total, usuario_id } = req.body;

        if(!numero) return res.status(400).json("Numero do pedido não enviado");
        
        const usuarioAtualizado = await Usuarios.update({
            lista_produtos,
            valor_total,
            usuario_id
        },
        {
            where: {
                numero,
            },
        }
        );

        res.json("Pedido atualizado");
    },
};

module.exports = pedidoController;