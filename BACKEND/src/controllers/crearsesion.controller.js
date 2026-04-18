const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crearsesionModel = require('../models/crearsesion.models');

const getAll = async (req, res) => {
  try {
    const users = await crearsesionModel.getAll();
    res.json({ ok: true, data: users });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

const create = async (req, res) => {
  try {
    const { usuario, email, contraseña } = req.body;

    // 1. Validar campos
    if (!usuario || !email || !contraseña)
      return res.status(400).json({ ok: false, msg: 'Todos los campos son requeridos' });


    // 3. Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // 4. Crear el usuario
    const data = await crearsesionModel.create({ usuario, email, contraseña: hashedPassword });

    // 5. Generar JWT
    const token = jwt.sign(
      { userId: data.id, email },
      process.env.JWT_SECRET,
      { expiresIn: '2h' }
    );

    res.status(201).json({ ok: true, token });

  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

module.exports = { create , getAll};