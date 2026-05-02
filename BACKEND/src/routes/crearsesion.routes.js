const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/crearsesion.controller');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);

router.get('/', ctrl.getini);        
router.post('/iniciar', ctrl.createlogin);  

router.post('/', ctrl.cerrar);

module.exports = router;