/* Lo de routs */
const express = require('express');
const router = express.Router();
const {LibrosController} = require('../controller');


//CREATE 
router.post('/libros', LibrosController.create  );

//GET (ALL)
router.get('/libros', LibrosController.find );

//GET (ALL)
router.get('/libros', LibrosController.find );


module.exports = router;