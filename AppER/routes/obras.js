const express = require('express');
const router = express.Router();
const obraController = require('../controllers/obra-controller');

router.get('/', obraController.obras);


module.exports = router