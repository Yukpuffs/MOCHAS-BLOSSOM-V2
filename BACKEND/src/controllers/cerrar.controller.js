const jwt = require('jsonwebtoken');
const { addToBlacklist, isBlacklisted, deleteExpired } = require('../models/cerrar.model');

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

    const expiresAt = new Date(decoded.exp * 1000);

    await addToBlacklist(token, expiresAt);
    await deleteExpired(); // limpiar tokens vencidos
    res.json({ ok: true, msg: 'Sesión cerrada correctamente' });

  } catch (err) {
    res.status(500).json({ ok: false, msg: err.message });
  }
};

module.exports = { cerrar };