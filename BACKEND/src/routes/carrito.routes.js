const express = require('express');
const router  = express.Router();
 
const carritocontrol = require('../controller/carrito.controller');
 
// GET  /api/carrito          → ver todos los items del carrito
router.get('/', carritocontrol.getCarrito);
 
// POST /api/carrito/items    → agregar un producto al carrito
router.post('/items', carritocontrol.addItem);
 
// PUT  /api/carrito/items/:id → actualizar cantidad de un item
router.put('/items/:id', carritocontrol.updateItem);
 
// DELETE /api/carrito/items/:id → eliminar un item del carrito
router.delete('/items/:id', carritocontrol.deleteItem);
 
module.exports = router;