const SequelizeDatabase = require('./SequelizeDatabase.js');
const authDB = require('../infra/configs/authDB.js');

/*import SequelizeDatabase from "./SequelizeDatabase.js";
import authDB from '../infra/configs/authDB.js'*/

const DB_NAME = authDB.database;
const DB_USER = authDB.username;
const DB_PASS = authDB.password;
const DB_CONFIG = {
    dialect: authDB.dialect,
    host: authDB.host,
    port: authDB.port,
};

const db = new SequelizeDatabase(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

module.exports = { db }