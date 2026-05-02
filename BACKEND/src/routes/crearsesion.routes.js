const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/crearsesion.controller');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);

router.get('/', ctrl.Getini);        
router.post('/', ctrl.createlogin);  



module.exports = router;