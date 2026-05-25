const actualizarDatosModel = require('../models/actualizarDatos.model');

const getALL = async (req, res) => {
  try {
    const data = await actualizarDatosModel.getALL();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Patch = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, corre_E, telefono, direccion, num_tarj } = req.body;
    
    const camposactualizar = {};
    if (nombre) camposactualizar.nombre = nombre;
    if (corre_E) camposactualizar.corre_E = corre_E;
    if (telefono) camposactualizar.telefono = telefono;
    if (direccion) camposactualizar.direccion = direccion;
    if (num_tarj) camposactualizar.num_tarj = num_tarj;

    const data = await actualizarDatosModel.patchcuenta(id, camposactualizar);
    if (data.affectedRows === 0) 
      return res.status(404).json({ message: 'Usuario no encontrado' });
    res.json({ok: true, message: 'Datos actualizados correctamente'});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { Patch, getALL };