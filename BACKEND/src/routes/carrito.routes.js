const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/carrito.controller');
// GET  /api/carrito          
router.get('/', verificarToken, ctrl.getCarrito);
 
// POST /api/carrito/items    
router.post('/items', verificarToken, ctrl.addItem);
 
// PUT  /api/carrito/items/:id 
router.put('/items/:id', verificarToken, ctrl.updateItem);
 
// DELETE /api/carrito/items/:id 
router.delete('/items/:id', verificarToken, ctrl.deleteItem);
 
module.exports = router;