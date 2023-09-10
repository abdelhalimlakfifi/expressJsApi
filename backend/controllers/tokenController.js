const Token = require('../models/Token.js');



const generateToken = async () => {
    var half =  Math.random().toString(36).substr(2);



    const token = await Token.create({
        token: half + half
    });
    return half + half;
}


module.exports = {generateToken}