const express = require('express'); //import express


const router  = express.Router(); 



const userController = require('../controllers/userController'); 





// localhost:3000/users (GET)  ==> to get All users
// localhost:3000/users (POST)  ==> to store a user
// localhost:3000/users/{id} (PUT)  ==> to update a user
// localhost:3000/users/{id} (DELETE)  ==> to Delete a user
router.get('/users', userController.getAll);
router.post('/users', userController.store);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.deleteUser);


module.exports = router;