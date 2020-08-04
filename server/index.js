const express = require('express');
const server = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(express.json());

//Para que todos los endpoints puedan usar CORS, y sea mas seguro y heroku te deje hacerlo.
server.use(cors());

// Initial Endpoit
server.get('/', (req, res) => res.send('Hello World! My man'));


//Basicamente aqui pido el enrutador y desde ahi se delega lo mas, cada uno a lo suyo
server.use('/api/v1',  require('../router'));

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };