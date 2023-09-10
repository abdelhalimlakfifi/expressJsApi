const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/arkadian'); // import the routes
const {generateToken} = require('./controllers/tokenController');
const {authenticationMiddleware} = require('./middleware/authenticationMiddleware.js');



const app = express();
const port = 3000;


const corsOptions = {
    origin: '*', // Replace with your frontend URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

};
app.use(cors(corsOptions));





app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


app.use(authenticationMiddleware)


// localhost:3000/users // POST
app.use('/', routes); //to use the routes


// Start server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);

    
    console.log(`Wait your Token ...`);

    generateToken().then((res) => {
        console.log(`Your Token is: ${res}`);
    })
});