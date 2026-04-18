const pool = require('../config/db');

// Guardar token en blacklist
const addToBlacklist = async (token, expiresAt) => {
  const [result] = await pool.query(
    'INSERT INTO token_blacklist (token, expires_at) VALUES (?, ?)',
    [token, expiresAt]
  );
  return result;
};

// Verificar si token está en blacklist
const isBlacklisted = async (token) => {
  const [rows] = await pool.query(
    'SELECT * FROM token_blacklist WHERE token = ?',
    [token]
  );
  return rows.length > 0;
};

// Eliminar tokens que ya expiraron
const deleteExpired = async () => {
  const [result] = await pool.query(
    'DELETE FROM token_blacklist WHERE expires_at < NOW()'
  );
  return result;
};

module.exports = { addToBlacklist, isBlacklisted, deleteExpired };