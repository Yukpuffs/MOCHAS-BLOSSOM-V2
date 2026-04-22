const pool = require('../config/db');
 
// GET — obtener todos los items del carrito
const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM carrito_items ORDER BY creado_en DESC'
  );
  return rows;
};
 
// POST — agregar un item al carrito
// Si el producto ya existe, incrementa la cantidad
const addItem = async ({ producto_id, nombre, precio, cantidad }) => {
  // Verificar si el producto ya está en el carrito
  const [existing] = await pool.query(
    'SELECT * FROM carrito_items WHERE producto_id = ?',
    [producto_id]
  );
 
  if (existing.length > 0) {
    // Producto ya en carrito → sumar cantidad
    const nuevaCantidad = existing[0].cantidad + (cantidad || 1);
    await pool.query(
      'UPDATE carrito_items SET cantidad = ? WHERE producto_id = ?',
      [nuevaCantidad, producto_id]
    );
    const [updated] = await pool.query(
      'SELECT * FROM carrito_items WHERE producto_id = ?',
      [producto_id]
    );
    return updated[0];
  }
 
  // Producto nuevo → insertar
  const [result] = await pool.query(
    `INSERT INTO carrito_items (producto_id, nombre, precio, cantidad)
     VALUES (?, ?, ?, ?)`,
    [producto_id, nombre, precio, cantidad || 1]
  );
 
  const [newItem] = await pool.query(
    'SELECT * FROM carrito_items WHERE id = ?',
    [result.insertId]
  );
  return newItem[0];
};
 
// PUT — actualizar la cantidad de un item por su id
const updateCantidad = async (id, cantidad) => {
  const [result] = await pool.query(
    'UPDATE carrito_items SET cantidad = ? WHERE id = ?',
    [cantidad, id]
  );
  return result.affectedRows; // 0 si no existe
};
 
// DELETE — eliminar un item del carrito por su id
const removeItem = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM carrito_items WHERE id = ?',
    [id]
  );
  return result.affectedRows; // 0 si no existía
};
 
module.exports = { getAll, addItem, updateCantidad, removeItem };