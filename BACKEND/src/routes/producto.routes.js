const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/producto.controllers');

router.get('/', ctrl.GetALL);        // GET    /api/producto
router.get('/:id', ctrl.GetByid);       // GET /api/producto/id
router.post('/', ctrl.Create);         // POST   /api/producto

module.exports = router;