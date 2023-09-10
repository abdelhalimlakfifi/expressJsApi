const Token = require('../models/Token.js');


const authenticationMiddleware = async (req, res, next) => {

    const token = await Token.findOne({ where: { token: req.headers.authentication } });
    console.log(token);
    if (token === null) 
    {
        res.status(403).json({message: "Forbidden", status: 403})
    }else{
        next()
    }
}



module.exports = {authenticationMiddleware}