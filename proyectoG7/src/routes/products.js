// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const productController = require('../controllers/productController.js');

// Acá definimos las rutas
router.get('/', productController.index);
router.get('/create', productController.create);


// Acá exportamos el resultado
module.exports = router;