/* Lo de routs */
const express = require('express');
const router = express.Router();
const {EnlacesController} = require('../controller');


//CREATE 
router.post('/enlaces', EnlacesController.create  );

//GET (ALL)
router.get('/enlaces', EnlacesController.find );

//GET (ALL)
router.get('/enlaces', EnlacesController.find );


module.exports = router;