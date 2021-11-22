const path = require('path'); 
const multer = require('multer');



//configuracion de multer
const storage =  multer.diskStorage({
    destination : (req, file, cb) => {
    cb(null, path.join(__dirname, '../../public/img/products'))
    },
    filename : (req, file, cb) => {
        const newFileName = file.filename + 'product-' + Date.now() + path.extname(file.originalname);
        cb(null, newFileName)
        }
});

// vamos a ejecutar esta configuracion
const upload = multer({storage:storage});

module.exports = upload;