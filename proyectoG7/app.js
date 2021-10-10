//Desde Terminal
//npm init -y
//npm install express --save
//npm instal -g nodemon

//Requerimos el Moudlo Express
const express = require('express');

//Ejecutamos la funcion y almacenamos e OBJETO
const app = express();

//EVIANDO UN ARCHIVO AL SERVIDOR
const path = require('path'); //unifica las rutas entre los distintos sistemas operativos

//Levantamos el SERVIDOR
app.listen(3030,() => { 
    console.log('Servidor 3030 corriendo y escuchando bien')
});

//Agrega un SERVIDOR de ESTATICOS y recibe como parametrto la direccion donde esta los arhcivos
app.use(express.static('public'));

//CARPETA ARCHIVOS ESTATICOS (PUBLIC)**************
//Le decimos a la aplicacion de express que queremos tenerer la carpeta public como un recurso de archivos estaticos para usarlos de manera simple
const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

//************************************************

app.get('/home', (req,res) => {
    const archivo = path.join(__dirname,'/views/index.html');
    res.sendFile(archivo);//via un arhcivo al navegador
});

