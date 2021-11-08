const express = require('express'); 
const app = express();

const path = require('path');

const fs = require('fs');
const usersFilePath = path.join(__dirname, '../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));

//const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const usersController = {
    //controlador para la ruta index
    login: (req,res) => {
        res.render('login');
    },
    register: (req,res) => {
        res.render('register');
    }

};


// Acá exportamos el resultado
module.exports = usersController;