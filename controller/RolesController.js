// El indice se encarga de pedir archivos e importarlos
const { UsersService, RolesService } = require('../services');
const utils = require('../utils');


module.exports = {

  //CRUDs
 
//Create
  create: async (req, res) => {

    const { id } = req.params;
    const { body } = req;

    try {
      const user = await UsersService.findById(id);
      const role = await RolesService.create(body);
      const userWithRole = await UsersService.addRole(user, role);
      res.status(201).send(userWithRole);
    }
    catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error adding role to user Madafaka', err });
    }
     
  },



  //GET
  find: async (req, res) => {

    const { id } = req.params;

    try {
      const user = await UsersService.findById(id);
      res.status(201).send(user.roles);
    }
    catch (err) {
      console.log(err);
      res.status(400).send({ message: 'Error getting user roles', err });
    }
     
  }


}
