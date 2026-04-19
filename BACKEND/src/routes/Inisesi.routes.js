const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/inisesi.controllers');

router.get('/', ctrl.GetALL);        // GET    /api/inisesi
router.post('/', ctrl.Getlogin);          // POST   /api/inisesi/login

module.exports = router;