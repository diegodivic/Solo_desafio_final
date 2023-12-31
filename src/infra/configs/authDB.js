require('dotenv').config();


const authDB = {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   database: process.env.DB_NAME,
   username: process.env.DB_USER,
   password: process.env.DB_PASS,
   dialect: process.env.DB_DIALECT,
};


module.exports = authDB
   
