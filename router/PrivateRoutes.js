const express = require('express');
const router = express.Router();

router.use(require('./LibrosRoutes'));
router.use(require('./UsersRoutes'));
router.use(require('./RolesRoutes'));

module.exports = router;