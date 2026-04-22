const CarritoModel = require('../models/carrito.models');
 
// GET /api/carrito
// Trae todos los elementos que el usuario tiene en el carrito
const getCarrito = async (req, res) => {
  try {
    const data = await CarritoModel.getAll();
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
 
// POST /api/carrito/items
// Agrega un producto al carrito (o suma cantidad si ya existe)
const addItem = async (req, res) => {
  try {
    const { producto_id, nombre, precio, cantidad } = req.body;
 
    // Validaciones básicas
    if (!producto_id || !nombre || !precio) {
      return res.status(400).json({
        ok: false,
        msg: 'Los campos producto_id, nombre y precio son obligatorios',
      });
    }
 
    if (precio <= 0) {
      return res.status(400).json({
        ok: false,
        msg: 'El precio debe ser mayor a 0',
      });
    }
 
    if (cantidad !== undefined && cantidad <= 0) {
      return res.status(400).json({
        ok: false,
        msg: 'La cantidad debe ser mayor a 0',
      });
    }
 
    const data = await CarritoModel.addItem({ producto_id, nombre, precio, cantidad });
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
 
// PUT /api/carrito/items/:id
// Edita o actualiza la cantidad de un item del carrito
const updateItem = async (req, res) => {
  try {
    const { cantidad } = req.body;
 
    if (!cantidad || cantidad <= 0) {
      return res.status(400).json({
        ok: false,
        msg: 'La cantidad debe ser un número mayor a 0',
      });
    }
 
    const affected = await CarritoModel.updateCantidad(req.params.id, cantidad);
 
    if (!affected) {
      return res.status(404).json({
        ok: false,
        msg: `No se encontró el item con id ${req.params.id}`,
      });
    }
 
    res.json({ ok: true, msg: 'Cantidad actualizada correctamente' });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
 
// DELETE /api/carrito/items/:id
// Elimina un producto del carrito
const deleteItem = async (req, res) => {
  try {
    const affected = await CarritoModel.removeItem(req.params.id);
 
    if (!affected) {
      return res.status(404).json({
        ok: false,
        msg: `No se encontró el item con id ${req.params.id}`,
      });
    }
 
    res.json({ ok: true, msg: 'Producto eliminado del carrito' });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
 
module.exports = { getCarrito, addItem, updateItem, deleteItem };