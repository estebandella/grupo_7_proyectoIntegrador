// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const usersController = require('../controllers/users.js');

// Acá definimos las rutas
router.get('/', usersController.login);

router.get('/register', usersController.register);


// Acá exportamos el resultado
module.exports = router;