const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/Pagos.controller');

router.get('/',  verificarToken, ctrl.getAll);
router.get('/:id', verificarToken,  ctrl.getById);
router.post('/', verificarToken,  ctrl.create)

module.exports = router