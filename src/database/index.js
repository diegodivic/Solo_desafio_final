import Sequelize from 'sequelize';
import authDB from '../configs/authDB.js';

const DB_NAME = authDB.name;
const DB_USER = authDB.user;
const DB_PASS = authDB.pass;
const DB_CONFIG = {
    dialect: "mysql",
    host: authDB.host,
    port: authDB.port,
};

let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}catch (error) {
    console.error("Erro ao tentar uma conexão com banco de dados")
}

async function hasConection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado");
    }catch (error){
        console.error("Erro ao conectar com o banco de dados")
    }
}

Object.assign(db, {
    hasConection,
});


export default db;