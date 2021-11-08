// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const mainController = require('../controllers/main.js');

// Acá definimos las rutas
router.get('/', mainController.index);



// Acá exportamos el resultado
module.exports = router;