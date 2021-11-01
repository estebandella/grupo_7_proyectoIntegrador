// nuestra fuente de datos
const express = require('express'); 
const app = express();

const path = require('path');

const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productList = require('../data/products.json'); 
// objeto literal con las acciones para cada ruta
// cada propiedad de un objeto va a ser una respuesta a una ruta (no sabemos cual eso depende del enrutador)
const mainController = {
    //controlador para la ruta index
    index: (req,res) => {
        res.render('index', {productList:productList} );
    },
    login: (req,res) => {
        res.render('login');
    },
    productDetail: (req,res) => {
        const product = productList.find(product => (product.id == req.params.id)) || products[0];
        res.render('productDetail', {product:product});
    },
    register: (req,res) => {
        res.render('register');
    },
    shoppingCart: (req,res) => {
        res.render('shoppingCart');
    },
    editproduct: (req,res) => {
        res.render('editproduct');
    },
    createProduct: (req,res) => {
        const newProduct = [ ];
        for (let i=0; i<products.length; i++) {
            if (products[i].id != products.id) {
                newProduct.push(products[i])
            }
        }
        res.render('createProduct', {products});
    }

};

// Acá exportamos el resultado
module.exports = mainController;