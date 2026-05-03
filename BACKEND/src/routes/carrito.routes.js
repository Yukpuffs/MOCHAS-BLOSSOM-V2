const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middleware/authMiddleware');
const ctrl = require('../controllers/carrito.controller');
// GET  /api/carrito          
router.get('/', verificarToken, carritocontrol.getCarrito);
 
// POST /api/carrito/items    
router.post('/items', verificarToken, carritocontrol.addItem);
 
// PUT  /api/carrito/items/:id 
router.put('/items/:id', verificarToken, carritocontrol.updateItem);
 
// DELETE /api/carrito/items/:id 
router.delete('/items/:id', verificarToken, carritocontrol.deleteItem);
 
module.exports = router;