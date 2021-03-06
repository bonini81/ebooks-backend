const express = require('express');
const server = express();
const fileUpload = require('express-fileupload');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');



server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));


//File Upload End Point


//Para que todos los endpoints puedan usar CORS, y sea mas seguro y heroku te deje hacerlo.
server.use(cors());

//Agregrand permisos especificos , en caso que fastidien el server que no puedes entrar por CORS Header permissions
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Authorization");
    next();
  });


// Initial Endpoit
server.get('/', (req, res) => res.send('Hello World! Welcome to my Ebook World, Madafaka! Coño de tu manga'));


//Basicamente aqui pido el enrutador y desde ahi se delega lo mas, cada uno a lo suyo
server.use('/api/v1',  require('../router'));

//Errors for Celebrate Package
server.use(errors());

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };