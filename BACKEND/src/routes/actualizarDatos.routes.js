const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/actualizarDatos.controllers');

router.get('/', ctrl.getALL);            // GET   /api/actualizarDatos/id
router.patch('/:id', ctrl.Patch);          // PUT   /api/actualizarDatos/id

module.exports = router;