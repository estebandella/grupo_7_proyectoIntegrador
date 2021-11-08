// nuestra fuente de datos
const express = require('express'); 
const app = express();

const path = require('path');

const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

//const productList = require('../data/products.json'); 
//const categories = require('../data/categories.json'); 

// objeto literal con las acciones para cada ruta
// cada propiedad de un objeto va a ser una respuesta a una ruta (no sabemos cual eso depende del enrutador)
const mainController = {
    //controlador para la ruta index
    index: (req,res) => {
        res.render('index', {products:products} );
    },
    //search: (req, res) => {
		//res.render("results", {products})

};


// Acá exportamos el resultado
module.exports = mainController;