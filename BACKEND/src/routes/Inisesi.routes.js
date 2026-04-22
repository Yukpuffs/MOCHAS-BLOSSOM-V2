const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/inisesi.controllers');

router.get('/', ctrl.GetALL);        
router.post('/', ctrl.createlogin);        

module.exports = router;