const express = require('express'); //import express


const router  = express.Router(); 


// const tokenController = require('../controllers/tokenController'); 
const userController = require('../controllers/userController'); 






router.get('/users', userController.getAll);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.deleteUser);


module.exports = router;