const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/crearsesion.controller');

// Obtener todos (requiere token)
router.get('/', verificarToken, ctrl.getAll);

// Registrarse (SIN token)
router.post('/registro', ctrl.create);

// Iniciar sesión (SIN token)
router.post('/login', ctrl.createlogin);

// Cerrar sesión (requiere token)
router.post('/logout', verificarToken, ctrl.cerrar);

module.exports = router;