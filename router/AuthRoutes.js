/* Lo de routs */
const express = require('express');
const router = express.Router();
const {UsersController} = require('../controller');
//const {LibrosController} = require('../controller');

//Routes for SignUp Form and not Protected via Token, token not needed here
router.post('/users/signup', UsersController.signup);
router.post('/users/login', UsersController.login);
//router.post('/libros', LibrosController.create  );





module.exports = router;