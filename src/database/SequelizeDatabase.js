import Sequelize from 'sequelize';

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