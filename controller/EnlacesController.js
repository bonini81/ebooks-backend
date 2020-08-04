const { EnlacesService } = require('../services');

module.exports = {


    //Create
    create: async (req, res) => {

        try {
        const enlace = await EnlacesService.create(req.body);
        res.status(201).send(enlace);
        }
        catch (error) {
        res.status(400).send({ message: 'Error creating Enlace', err });
        }
        
    },

     //GET ALL MY MAN
  find: async (req, res) => {

    try {
      const enlace = await EnlacesService.find();
      res.status(200).send(enlace);
    }
    
    catch (error) {
      res.status(404).send({ message: 'Links not found', err });
    }
      
  }



}