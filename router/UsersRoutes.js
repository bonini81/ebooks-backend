/* Lo de routs */
const express = require('express');
const router = express.Router();
const {UsersController} = require('../controller');
const { verifyToken } = require('../middlewares');


//Routes for SignUp Form and not Protected via Token, token not needed here
router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);

// RUTAS QUE ESTAN PROTEGIDAS POR TOKEN Y REQUIEREN VERIFICACION
router.use(verifyToken);

//CREATE 
router.post('/users', UsersController.create  );

//GET (ALL)
router.get('/users', UsersController.find);

// GET (ONE!)
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id', UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);





module.exports = router;

/*
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));*/

