const router = require('express').Router;
const {verificacionToken} = ('../middleware/authMiddleware');
const ctrl = require('../controllers/carrito.controller');

// GET  /api/carrito          
router.get('/', verificacionToken, carritocontrol.getCarrito);
 
// POST /api/carrito/items    
router.post('/items', verificacionToken, carritocontrol.addItem);
 
// PUT  /api/carrito/items/:id 
router.put('/items/:id', verificacionToken, carritocontrol.updateItem);
 
// DELETE /api/carrito/items/:id 
router.delete('/items/:id', verificacionToken, carritocontrol.deleteItem);
 
module.exports = router;