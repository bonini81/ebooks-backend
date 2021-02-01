const { LibrosService } = require('../services');
const utils = require('../utils'); // En este caso traigo el utils para subir la foto y el libro

module.exports = {


    //Create
    create: async (req, res) => {

        try {
          //before this const was const enlace not libro
        const libro = await LibrosService.create(req.body);
        res.status(201).send(libro);
        }
        catch (error) {

        res.status(400).send({ message: 'Error creating a Libro', err });
        
      }
        
    },

     //GET ALL MY MAN
  find: async (req, res) => {

    try {
      const enlace = await LibrosService.find();
      res.status(200).send(libro);
    }
    
    catch (error) {
      res.status(404).send({ message: 'Libros not found', err });
    }
      
  }



}