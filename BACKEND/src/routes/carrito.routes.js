const express = require('express');
const router  = express.Router();
 
const carritocontrol = require('../controller/carrito.controller');
 
// GET  /api/carrito          
router.get('/', carritocontrol.getCarrito);
 
// POST /api/carrito/items    
router.post('/items', carritocontrol.addItem);
 
// PUT  /api/carrito/items/:id 
router.put('/items/:id', carritocontrol.updateItem);
 
// DELETE /api/carrito/items/:id 
router.delete('/items/:id', carritocontrol.deleteItem);
 
module.exports = router;