//Desde Terminal
//npm init -y
//npm install express --save
//npm install -g nodemon

//Requerimos el Moudlo Express
const express = require('express');

//Ejecutamos la funcion y almacenamos e OBJETO
const app = express();

// me permite utilizar la funcion render 
app.set ('view engine', 'ejs');
app.set('views','src/views');

// llamamos al router 
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');

//EVIANDO UN ARCHIVO AL SERVIDOR
const path = require('path'); //unifica las rutas entre los distintos sistemas operativos


//Agrega un SERVIDOR de ESTATICOS y recibe como parametrto la direccion donde esta los arhcivos
app.use(express.static('public'));

//CARPETA ARCHIVOS ESTATICOS (PUBLIC)**************
//Le decimos a la aplicacion de express que queremos tenerer la carpeta public como un recurso de archivos estaticos para usarlos de manera simple
/*const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));*/

//************************************************
// rutas y después las vistas de EJS
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);


//Para poder trabajar con los datos que se envían desde el formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Levantamos el SERVIDOR
app.listen(3030,() => { 
    console.log('Servidor 3030 corriendo y escuchando bien')
});