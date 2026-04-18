const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/cerrar.controller');

router.post('/', ctrl.cerrar);

module.exports = router;