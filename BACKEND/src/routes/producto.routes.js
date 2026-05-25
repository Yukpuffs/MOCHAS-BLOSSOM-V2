const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/producto.controllers');

router.get('/', verificarToken, ctrl.GetALL);        // GET    /api/producto
router.get('/:id', verificarToken, ctrl.GetByid);       // GET /api/producto/id
router.post('/', verificarToken, ctrl.Create);         // POST   /api/producto

module.exports = router;