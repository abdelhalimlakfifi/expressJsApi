const express = require('express');
const bodyParser = require('body-parser');
const {
    Sequelize,
    Model,
    DataTypes
} = require('sequelize');

const app = express();
const port = 3000;


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});


class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cin: DataTypes.STRING
}, {
    sequelize,
    modelName: 'user'
});


sequelize.sync();


app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(console.log("sss"));

app.post('/users', async (req, res) => {
    console.log(req.body);
    const user = await User.create(req.body);
    res.json(user);
});

app.get('/users', async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    res.json(user);
});


app.put('/users/:id', async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if (user) {
        await user.update(req.body);
        res.json(user);
    } else {
        res.status(404).json({
            message: 'User not found'
        });
    }
});

app.delete('/users/:id', async (req, res) => {
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
});

// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});