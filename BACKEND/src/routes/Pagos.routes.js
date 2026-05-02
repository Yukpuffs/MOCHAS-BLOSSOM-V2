const router = require('express').Router;
const {verificacionToken} = ('../middleware/authMiddleware');
const ctrl = require('../controllers/Pagos.controller');

router.get('/',  verificacionToken, ctrl.getAll);
router.get('/:id', verificacionToken,  ctrl.getById);
router.post('/', verificacionToken,  ctrl.create)

module.exports = router