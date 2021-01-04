const express = require('express');
const router = express.Router();
const { verifyToken }  = require('../middlewares');



//router.use(require('./LibrosRoutes'));
router.use(require('./PublicRoutes'));

//Desabilitar el Verify Token en Dev para no estar rebuscando todo el tiempo esta vaina, el ultimo test si hacerlo
router.use(verifyToken);
router.use(require('./PrivateRoutes')); 




module.exports = router;