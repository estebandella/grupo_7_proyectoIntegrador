// nuestra fuente de datos
const express = require('express'); 
const app = express();

const path = require('path');


const fs = require('fs');
const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const coloursFilePath = path.join(__dirname, '../data/colours.json');
const colours = JSON.parse(fs.readFileSync(coloursFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

// objeto literal con las acciones para cada ruta
// cada propiedad de un objeto va a ser una respuesta a una ruta (no sabemos cual eso depende del enrutador)
const productsController = {
    //controlador para la ruta index
    // Root - Show all products
	index: (req, res) => {

		res.render("products", {products: products})
	},

	// Detail - Detail from one product
	detail: (req, res) => { 
		const product = products.find(prod => prod.id == req.params.id);
		res.render("detail", {product})
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
        res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {	
		const nuevoProducto= {
			id: products[products.length - 1].id + 1,
			...req.body,
			imagen: req.file ? req.file.filename :' '

		};

		const nuevoProductoLista = [...products, nuevoProducto];
	
		fs.writeFileSync(productsFilePath,JSON.stringify(nuevoProductoLista, null,' '));

		res.redirect('/');
		//res.send("producto creado")
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
		const productToEdit = products.find(prod => prod.id == req.params.id);
		res.render("product-edit-form", {productToEdit, colours})
	},

	// Update - Method to update
	update: (req, res) => {
		// Do the magic

		//const productIndex = products.findIndex(prodI => prodI.id == req.params.id);

		//const updatedProduct= {
			//products[products.length - 1],
			//...req.body,
			//imagen: req.file ? req.file.filename :' '

		//};






		res.send("producto editado!!!")
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		
		// Buscar la posición actual del producto a eliminar
		const productIndice = products.findIndex((producto) => {
			return (producto.id = req.params.id)
		}); 

		// Mediante el método Splice Recortar el array sin ese producto
		products.splice(productIndice, 1);

		//Escribimos en el JSON
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

		//Volvemos a la página de productos
		res.redirect('/');
		
		//res.send("producto eliminado, id: " + req.params.id, index)
	},

    shoppingCart : (req, res) => {
		// Do the magic
		res.render("shoppingCart")

	}

};


// Acá exportamos el resultado
module.exports = productsController;