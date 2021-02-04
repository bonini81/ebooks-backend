// El indice se encarga de pedir archivos e importarlos
const { UsersService } = require('../services');
const utils = require('../utils');


module.exports = {

  //CRUDs
 
//Create
  create: async (req, res) => {
    try {
      const user = await UsersService.create(req.body);

   
      res.status(201).send(user);
    }
    catch (err) {
      res.status(400).send({ message: 'Error creating user', err });
    }
     
  },

  //GET ALL
  find: async (req, res) => {

    try {
      const users = await UsersService.find();
      res.status(200).send(users);
    }
    
    catch (err) {
      res.status(404).send({ message: 'Users not found', err });
    }
      
  },
  

 //GET by ID
 findById: async (req, res) => {

  const { id } = req.params;

  try {
    const user = await UsersService.findById(id);
    res.status(200).send(user);
  }
  
  catch (err) {
    res.status(404).send({ message: 'Users not found', err });
  }
    
},


//Update by ID

findByIdAndUpdate: async (req, res) => {

if (req.files) {
 
  const { photo } = req.files;
  console.log("Hello", photo);
  const upload = await utils.uploadFile(photo.tempFilePath);
  if (upload) req.body.profile_img = upload.url;
  
}
const { id } = req.params;
const { body } = req;

  try {
    const user = await UsersService.findById(id);
    const updatedUser = await UsersService.update(user, body)
    res.status(200).send(updatedUser)
  }
  
  catch (err) {
  
    res.status(404).send({ message: 'Users not found wey', err });
  
  }

},
    
//Update by Delete, aqui cambiamos el estado del user de activo a falso

findByIdAndDelete: async (req, res) => {

  const { id } = req.params;

  try {
    const user = await UsersService.findById(id);
    const updatedUser = await UsersService.update(user, { is_active: false })
    res.status(204).send();

  }
  
  catch (err) {
  
    res.status(404).send({ message: 'Users not found', err });
  }


},


//User SignUp
signup: async (req, res) => {
  try {

    
    const user = await UsersService.create(req.body);

    
    res.status(201).send(  {message: "Sign Up Succesfull Madafaka my Bonini Man",  user});
  }
  catch (err) {
    res.status(400).send({ message: 'Error creating user', err });
  }
   
},


//Login User 

login: async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UsersService.findByEmail(email);
    if (!user) res.status(404).send({ message: 'User not found' });
    console.log('Yahoo', user); 
    const isMatch = UsersService.comparePasswords(password, user.password);
    
    if (!isMatch) res.status(400).send({ message: 'Invalid credentials' });
//Puede ser que aqui este el error
    const token = utils.createToken({

      id: user._id,
      name: user.first_name,
      email: user.email,
      
      });

    res.status(200).send({ message: "step inside, brother", token });
  } catch (err) { 
    console.log(err);
    res.status(400).send({ message: 'Error on login', err });
  }
}


}
