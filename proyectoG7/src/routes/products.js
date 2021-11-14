// express y el router
const express = require('express');

const router = express.Router ();
const multer = require('multer');

const path = require('path'); 

// traemos el controller
const productsController = require('../controllers/products.js');

//configuracion de multer
const storage =  multer.diskStorage({
    destination : (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/img/products'))
    },
    filename : (req, file, cb) => {
        const newFileName = file.filename + 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
        }
});

// vamos a ejecutar esta configuracion
const upload = multer({storage:storage})


// Acá definimos las rutas
/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 
router.get('/shoppingCart', productsController.shoppingCart); 
//router.get('/shoppingCart', productsController.shoppingCart); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create', productsController.create); //es para mostrar un formulario
router.post('/', upload.single('imagenProducto'), productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', productsController.edit); 

router.put('/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/:id', productsController.destroy); 




// Acá exportamos el resultado
module.exports = router;