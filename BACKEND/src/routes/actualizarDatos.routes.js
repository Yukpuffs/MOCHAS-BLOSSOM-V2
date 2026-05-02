const router = require('express').Router;
const {verificacionToken} = ('../middleware/authMiddleware');
const ctrl = require('../controllers/actualizarDatos.controller');

router.get('/', verificacionToken, ctrl.getALL);            // GET   /api/actualizarDatos
router.patch('/:id', verificacionToken, ctrl.Patch);          // PUT   /api/actualizarDatos/id

module.exports = router;