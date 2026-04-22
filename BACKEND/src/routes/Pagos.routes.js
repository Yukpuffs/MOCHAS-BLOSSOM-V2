const express = requiere('express');
const router = express.router()
const ctrl = requiere('../controllers.controller')


router.get('/', ctrl.getAll);
router.get('/:id', ctrl.getByid);
router.post('/', ctrl.create)