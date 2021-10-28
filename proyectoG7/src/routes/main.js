// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const mainController = require('../controllers/main.js');

// Acá definimos las rutas
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productDetail', mainController.productDetail);
router.get('/register', mainController.register);
router.get('/shoppingCart', mainController.shoppingCart);


// Acá exportamos el resultado
module.exports = router;