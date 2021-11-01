// express y el router
const express = require('express');

const router = express.Router ();

// traemos el controller
const mainController = require('../controllers/main.js');

// Acá definimos las rutas
router.get('/', mainController.index);
router.get('/login', mainController.login);
router.get('/productDetail/:id', mainController.productDetail);
router.get('/register', mainController.register);
router.get('/shoppingCart', mainController.shoppingCart);
router.get('/edit', mainController.editproduct);
router.get('/create', mainController.createProduct);

router.post("/create/product", (req, res) => {
    let newProduct = {
        id: req.body.id,     
        nombre: req.body.nombre,
        precio: req.body.precio,
        cuotas: req.body.cuotas,
        descripcion: req.body.descripcion,
        medidas: req.body.medidas,
        cuidados: req.body.cuidados,
        colores: req.body.colores,
        imagen: req.body.imagen
    };
    res.send(newProduct);
});

// Acá exportamos el resultado
module.exports = router;