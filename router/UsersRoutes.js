/* Lo de routs */
const express = require('express');
const router = express.Router();
const {UsersController} = require('../controller');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {


    try {
    
    //const token = req.headers.authorization; this is equivalent to the line below more clean code though
    const {authorization} = req.headers;
    const token = authorization.split(" ")[1];
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('You got it man', decoded);
    req.decoded = decoded;
	//Next es una funcion propia de Express meaning, you got what u need, go on to your next mission man
	next();
        
    } catch (error) {
        res.status(403).send( {message: "Error with token, madafaka", error} );
    }
 

}


//CREATE 
router.post('/users', UsersController.create  );

//GET (ALL)
router.get('/users', verifyToken, UsersController.find);

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

