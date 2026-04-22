const PedidosModel = require('../models/pedidos.models');
 
const getAll = async (req, res) => {
  try {
    const data = await PedidosModel.getAll();
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};
 
const getById = async (req, res) => {
  try {
    const data = await PedidosModel.getById(req.params.id);
    if (!data) {
      return res.status(404).json({ ok: false, msg: 'Pedido no encontrado' });
    }
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const datos = req.body;
 
    if (!datos.Nombre_completo || !datos.Correo_elect || !datos.Direccion) {
      return res.status(400).json({
        ok: false,
        msg: 'Nombre, email y dirección son requeridos'
      });
    }
 
    const data = await PedidosModel.create(datos);
    res.status(201).json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

module.exports = {getAll, getById, create}