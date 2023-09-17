'use strict';

const { DataTypes } = require('sequelize')


module.exports = {
    up: (queryInterface)=>{
        return queryInterface.bulkInsert('usuario', [{
            nome: 'Diego',
            email: 'diego@email.com',
            senha: '12345678',
            tipo_usuario: 'administrador'
        },
    ])
    },
    down: (queryInterface) =>{
        return queryInterface.bulkDelete('usuario', null, {});
    },
}