const express = require('express');
const router = express.Router();
const { verifyToken }  = require('../middlewares');
const server = express();
const cors = require('cors');



//Para que todos los endpoints puedan usar CORS, y sea mas seguro y heroku te deje hacerlo.
server.use(cors());

//Testing my CORS hypothesis bug solution
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000/"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Headers", "Authorization");

    next();
  });


//router.use(require('./LibrosRoutes'));
router.use(require('./PublicRoutes'));

//Desabilitar el Verify Token en Dev para no estar rebuscando todo el tiempo esta vaina, el ultimo test si hacerlo
router.use(verifyToken);
router.use(require('./PrivateRoutes')); 




module.exports = router;