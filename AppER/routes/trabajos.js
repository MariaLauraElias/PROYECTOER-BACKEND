const express = require('express');
const router = express.Router();
const trabajoController = require('../controllers/trabajo-controller');

router.get('/', trabajoController.trabajos);


module.exports = router
