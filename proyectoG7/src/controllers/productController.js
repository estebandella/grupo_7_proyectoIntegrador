// nuestra fuente de datos
const express = require('express'); 
const app = express();

const path = require('path');

// objeto literal con las acciones para cada ruta
// cada propiedad de un objeto va a ser una respuesta a una ruta (no sabemos cual eso depende del enrutador)
const productController = {
    //controlador para la ruta index
    index: (req,res) => {
        res.render('index');
    },
    create: (req,res) => {
        res.render('create');
    }

};

// Acá exportamos el resultado
module.exports = productController;