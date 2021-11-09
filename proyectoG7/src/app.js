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

//Agrega un SERVIDOR de ESTATICOS y recibe como parametrto la direccion donde esta los arhcivos
app.use(express.static('public'));

//Para poder trabajar con los datos que se envían desde el formulario
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// llamamos al router 
const mainRouter = require('./routes/main');
const productsRouter = require('./routes/products');
const usersRouter = require('./routes/users');
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE


//EVIANDO UN ARCHIVO AL SERVIDOR
const path = require('path'); //unifica las rutas entre los distintos sistemas operativos

//CARPETA ARCHIVOS ESTATICOS (PUBLIC)**************
//Le decimos a la aplicacion de express que queremos tenerer la carpeta public como un recurso de archivos estaticos para usarlos de manera simple
/*const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));*/

app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE


//************************************************
// rutas y después las vistas de EJS
app.use('/', mainRouter);
app.use('/products', productsRouter);
app.use('/users', usersRouter);



//Levantamos el SERVIDOR
app.listen(3030,() => { 
    console.log('Servidor 3030 corriendo y escuchando bien')
});