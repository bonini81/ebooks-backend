const express = require('express');
const router = express.Router();
const { verifyToken }  = require('../middlewares');
const {errors} = require('celebrate');


//router.use(require('./LibrosRoutes'));
router.use(require('./PublicRoutes'));

router.use(verifyToken);
router.use(require('./PrivateRoutes')); 

router.use(errors());


module.exports = router;