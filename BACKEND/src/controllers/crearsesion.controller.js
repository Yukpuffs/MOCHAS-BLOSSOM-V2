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

    // 2. Verificar si el email ya existe
    const usuarioExistente = await crearsesionModel.findByEmail(email);
    if (usuarioExistente) {
      return res.status(400).json({ ok: false, msg: 'El email ya está registrado' });
    }

    // 3. Hashear la contraseña
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // 4. Crear el usuario
    const data = await crearsesionModel.create({ usuario, email, contraseña: hashedPassword });

    // 5. Generar JWT
    const token = jwt.sign(
      { userId: data.id, email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(201).json({ 
      ok: true, 
      msg: 'Usuario registrado exitosamente',
      token, 
      usuario: { id: data.id, email } 
    });

  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

//---------------------------------------------------------------Controller para inicio de sesión------------------------------------------------------
const getini = async (req, res) => {
  try {
    const data = await crearsesionModel.getAll(); // Cambié usuarioModel por crearsesionModel
    res.json({ ok: true, data });
  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

const createlogin = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    // Validaciones básicas
    if (!email || !contraseña) {
      return res.status(400).json({
        ok: false,
        msg: 'Email y contraseña son requeridos'
      });
    }
    
    const usuario = await crearsesionModel.findByEmail(email);
    if (!usuario) {
      return res.status(401).json({
        ok: false,
        msg: 'Email o contraseña incorrecto'
      });
    }

    // 2. Compara la contraseña con bcrypt
    const passwordValida = await bcrypt.compare(contraseña, usuario.contraseña); // Cambié passwordd por contraseña
    
    if (!passwordValida) {
      return res.status(401).json({
        ok: false,
        msg: 'Email o contraseña incorrecta'
      });
    }

    // 3. Genera el token JWT
    const token = jwt.sign(
      { 
        id: usuario.id, 
        email: usuario.email 
      },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    // 4. Guarda el token en la BD
    const guarda = await crearsesionModel.updateToken(usuario.id, token);

    // 5. Login exitoso
    res.json({
      ok: true,
      msg: 'Login exitoso',
      usuario: {
        id: usuario.id,
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

// ----------------------------------------------Controller cerrar sesión-----------------------------------------------

const cerrar = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer '))
      return res.status(400).json({ ok: false, msg: 'Sin token válido' });

    // Extraer el token correctamente
    const token = authHeader.split(' ')[1];

    // Verificar y decodificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    if (!decoded || !decoded.exp)
      return res.status(400).json({ ok: false, msg: 'Token inválido' });

    // Eliminar token de la BD (logout)
    await crearsesionModel.updateToken(decoded.id, null);
    
    res.json({ ok: true, msg: 'Sesión cerrada correctamente' });

  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};


module.exports = { getAll, create, getini, createlogin, cerrar };