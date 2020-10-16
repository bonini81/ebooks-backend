const express = require('express');
const server = express();
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { errors } = require('celebrate');


server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));


cloudinary.config ({
    
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,

});

//File Upload End Point
server.post('/upload', (req, res)=>{

    const file = req.files.photo;
    console.log("File Uploaded Madafaka!", file);

    cloudinary.uploader.upload(file.tempFilePath, function(error, result) {

        if(error)  {
            console.log(error);
            res.status(400).json(error);
        }

        if (result)  {
            console.log(result);
            console.log(result.url)
            res.status(200).json(result);
        }
    });
});

   // res.status(200).json('Cool!');
    




//Para que todos los endpoints puedan usar CORS, y sea mas seguro y heroku te deje hacerlo.
server.use(cors());

// Initial Endpoit
server.get('/', (req, res) => res.send('Hello World! Welcome to my Ebook World, Madafaka! Coño de tu manga'));


//Basicamente aqui pido el enrutador y desde ahi se delega lo mas, cada uno a lo suyo
server.use('/api/v1',  require('../router'));

//Errors for Celebrate Package
server.use(errors());

// exportar server para poder requerirlo desde otros archivos
module.exports = { server, PORT };