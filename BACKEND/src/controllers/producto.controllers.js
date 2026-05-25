const productoModel = require('../models/producto.model');

const GetALL = async (req, res) => {
    try {
      const data = await productoModel.getAll();
        res.json({ ok: true, data });
    }catch (err) {
        res.status(500).json({ ok: false, msg: err.message });
    }
};

const GetByid = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await productoModel.getById(id);
        res.json({ ok: true, data });
    }catch (err) {
        res.status(500).json({ ok: false, msg: err.message });
  }
};

const Create = async (req, res) => {
    try {
        const { sabor, relleno, tamano, cobertura, decoracion} = req.body;
        if (!sabor || !relleno || !tamano || !cobertura || !decoracion) 
            return res.status(400).json({ ok: false, msg: 'Todos los campos son requeridos' });
        const data = await productoModel.Create(sabor, relleno, tamano, cobertura, decoracion);
        res.status(201).json({ ok: true, data });
    }catch (err) {
        res.status(500).json({ ok: false, msg: err.message });
    }
};

module.exports = {GetALL, GetByid, Create};