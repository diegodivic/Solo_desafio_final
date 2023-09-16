const authDB = {
   host: process.env.DB_HOST,
   port: process.env.DB_PORT,
   user: process.env.DB_USER,
   name: process.env.DB_NAME,
   pass: process.env.DB_PASS,
   //dialect: process.env.DB_DIALECT,
};

export default authDB;