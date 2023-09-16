import Sequelize from 'sequelize';


/*const DB_NAME = authDB.database;
const DB_USER = authDB.username;
const DB_PASS = authDB.password;
const DB_CONFIG = {
    dialect: authDB.dialect,
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
});*/


class SequelizeDatabase{
    instance
    constructor(dbName, dbUser, dbPass, dbConfig) {
        this.instance = new Sequelize(dbName, dbUser, dbPass, dbConfig)
    }

    async hasConection() {
        try {
            await this.instance.authenticate();
            console.log("Banco de dados conectado");
        }   catch (error){
            console.error("Erro ao conectar com o banco de dados")
        }
    }
}



export default SequelizeDatabase;