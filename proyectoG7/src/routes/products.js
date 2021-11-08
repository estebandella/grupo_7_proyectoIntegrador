// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const productsController = require('../controllers/products.js');

// Acá definimos las rutas
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 
router.get('/shoppingCart', productsController.shoppingCart); 
//router.get('/shoppingCart', productsController.shoppingCart); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //es para mostrar un formulario
router.post('/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 
router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 

/*** SHOPIING CART***/ 




// Acá exportamos el resultado
module.exports = router;