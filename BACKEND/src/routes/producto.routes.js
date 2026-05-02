const router = require('express').Router;
const {verificacionToken} = ('../middleware/authMiddleware');
const ctrl = require('../controllers/producto.controller');

router.get('/', verificacionToken, ctrl.GetALL);        // GET    /api/producto
router.get('/:id', verificacionToken, ctrl.GetByid);       // GET /api/producto/id
router.post('/', verificacionToken, ctrl.Create);         // POST   /api/producto

module.exports = router;