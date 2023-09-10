const {Sequelize,Model,DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});




class Token extends Model {}
Token.init({
    token:DataTypes.STRING
}, {
    sequelize,
    modelName: 'token'
});




sequelize.sync();


module.exports = Token;