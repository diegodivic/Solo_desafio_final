module.exports = (req, res, next)=>{
    console.log(`o ip: ${req.ip} acessou a rota: ${req.originalUrl}`);
    next();

}