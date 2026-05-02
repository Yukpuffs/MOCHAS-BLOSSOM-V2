const router = require('express').Router;
const {verificacionToken} = ('../middleware/authMiddleware');
const ctrl = require('../controllers/crearsesion.controller');

router.get('/', verificacionToken, ctrl.getAll);
router.post('/', verificacionToken, ctrl.create);

router.get('/', verificacionToken, ctrl.getini);        
router.post('/iniciar', verificacionToken, ctrl.createlogin);  

router.post('/', verificacionToken, ctrl.cerrar);

module.exports = router;