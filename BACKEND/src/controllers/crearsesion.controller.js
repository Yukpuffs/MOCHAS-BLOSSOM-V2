const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crearsesionModel = require('../models/crearsesion.models');

//---------------------------------------------------------------Controller para registro------------------------------------------------------
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
      { expiresIn: process.env.JWT_SECRET_IN }
    );

    res.status(201).json({ ok: true, token, usuario: {email} });

  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

//---------------------------------------------------------------Controller para inicio------------------------------------------------------


const getini = async (req, res) => {
  try {
      const data = await usuarioModel.getAll();
      res.json({ ok: true, data });
  }catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }

}

const createlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validaciones básicas
    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        msg: 'Email y contraseña son requeridos'
      });
    }
    
    const usuario = await usuarioModel.findByEmailRegis(email);

    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: 'Correo inválido o no registrado'
      });
    }

    // Comparar contraseña 
    if (usuario.passwordd !== password) {
      return res.status(401).json({
        ok: false,
        msg: 'Contraseña incorrecta'
      });
    }

    // genera el token JWT
    const token = jwt.sign(
      { 
        id: usuario.idregis, 
        email: usuario.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_SECRET_IN }
    );

    // login exitoso
    res.json({
      ok: true,
      msg: 'Login exitoso',
      usuario: {
        id: usuario.idregis,
        email: usuario.email
      },
      token: token
    });

  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({
      ok: false,
      msg: 'Error en el servidor: ' + err.message
    });
  }
};

module.exports = { create , getAll, getini, createlogin};