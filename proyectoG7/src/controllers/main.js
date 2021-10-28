// nuestra fuente de datos
const express = require('express'); 
const app = express();

const path = require('path');

// objeto literal con las acciones para cada ruta
const mainController = {
    //controlador para la ruta index
    index: (req,res) => {
            res.render('index');
    },
    login: (req,res) => {
            res.render('login');
    },
    productDetail: (req,res) => {
        res.render('productDetail');
    },
    register: (req,res) => {
        res.render('register');
    },
    shoppingCart: (req,res) => {
        res.render('shoppingCart');
    }

};

// Acá exportamos el resultado
module.exports = mainController;