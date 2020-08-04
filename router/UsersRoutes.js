/* Lo de routs */
const express = require('express');
const router = express.Router();
const {UsersController} = require('../controller');

//CREATE 
router.post('/users', UsersController.create  );

//GET (ALL)
router.get('/users', UsersController.find);

// GET (ONE!)
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id', UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);


//Routes for SignUp Form
router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);


module.exports = router;

/*
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));*/

