const express = require('express');
const router = express.Router();
const { UsersController } = require('../controller');
const { UsersValidator } = require('../validators');
//agregando los utils de cloudinary y multer
const utils = require('../utils');
//const upload = require('../utils/multer');

//CREATE 
router.post('/users',  UsersValidator.create, UsersController.create );
// Multer version router.post('/users',  UsersValidator.create,  upload.single('profilePic'),  UsersController.create );

//GET (ALL)
router.get('/users', UsersController.find);
// GET (ONE!)
router.get('/users/:id', UsersController.findById);
router.patch('/users/:id',  UsersController.findByIdAndUpdate);
router.delete('/users/:id', UsersController.findByIdAndDelete);






module.exports = router;

/*
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// Endpoints
server.get('/', (req, res) => res.send('Hello World!'));*/

