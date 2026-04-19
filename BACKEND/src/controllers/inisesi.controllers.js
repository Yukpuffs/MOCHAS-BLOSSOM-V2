const usuarioModel = require('../models/usuario.models');
const jwt = require('jsonwebtoken');


// get /api/inisesi/ - Obtener todos los usuarios (para pruebas)
const GetALL = async (req, res) => {
  try {
      const data = await usuarioModel.getAll();
      res.json({ ok: true, data });
  }catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }

}

// POST /api/inisesi/ - Login
const Getlogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validaciones básicas
    if (!email || !password) {
      return res.status(400).json({
        ok: false,
        msg: 'Email y contraseña son requeridos'
      });
    }

   

    // validacion en la base de datos
    // Buscar usuario en tabla ini_sesi
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
      { expiresIn: '2h' } // Expira en 2
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



module.exports = { Getlogin, GetALL };