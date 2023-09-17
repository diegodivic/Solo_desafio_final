const dotenv = require('dotenv/config');

//import "dotenv/config"


const authDB = {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   username: process.env.DB_USER,
   database: process.env.DB_NAME,
   password: process.env.DB_PASS,
   dialect: 'mysql',
};

module.exports = authDB;