const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/actualizarDatos.controllers');

router.get('/', verificarToken, ctrl.getALL);            // GET   /api/actualizarDatos
router.patch('/:id', verificarToken, ctrl.Patch);          // PUT   /api/actualizarDatos/id
router.delete('/:id', verificarToken, ctrl.Delete);
module.exports = router;