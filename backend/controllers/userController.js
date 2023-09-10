const User = require('../models/User.js');



const getAll = async (req, res, next) => {
    const users = await User.findAll();
    res.json(users);
};


const store = async (req, res, next) => {
    const user = await User.create(req.body);
    res.json(user);
}

const update = async (req, res, next) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
}


const deleteUser = async (req, res, next) =>{
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.destroy();
        res.json({
            message: 'User deleted'
        });
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
}

module.exports = {getAll, store, update, deleteUser};