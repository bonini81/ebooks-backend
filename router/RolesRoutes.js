const express = require('express');
const router = express.Router();
const { RolesController } = require('../controller');
const { RolesValidator } = require('../validators');

//CREATE 
router.post('/users/:id/roles',  RolesValidator.create, RolesController.create );

//GET (ALL)
router.get('/users/:id/roles', RolesController.find);
/* Si quiero seguir con esto de path y delete seria cintra negra clase 7 2h35min  */
//router.patch('/users/:id/roles/:idRole',  RolesValidator.update, RolesController.findByIdAndUpdate);
//router.delete('/users/:id/roles/:idRole', RolesController.findByIdAndDelete);






module.exports = router;
