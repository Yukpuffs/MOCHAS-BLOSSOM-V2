const pool = require('../config/db');
const { cerrar } = require('../controllers/crearsesion.controller');

//----------------------------------------------Consultas registro de sesión-----------------------------------------------
const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM crearsesion'
  );
  return rows;
};


const create = async ({ usuario, email, contraseña }) => {
  const [result] = await pool.query(
    'INSERT INTO crearsesion (usuario, email, contraseña) VALUES (?, ?, ?)',
    [usuario, email, contraseña]
  );
  return { id: result.insertId, usuario, email, contraseña };
};

const findByEmail = async (email) => {
  const [rows] = await pool.query(
    'SELECT * FROM crearsesion WHERE email = ?',
      [email]
    );
      return rows[0];
    };

// ----------------------------------------------Consultas Inicio de sesión-----------------------------------------------

//modelo para obtener todos los usuarios
const getini = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM crearsesion'
  );
  return rows;
}

const updateToken = async (id, token) => {
  const [result] = await pool.query(
    'UPDATE crearsesion SET token = ? WHERE id = ?',
    [token, id]
  );
  return result;
};

// ----------------------------------------------Consultas cerrar sesión-----------------------------------------------

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


module.exports = {getAll, create, findByEmail, getini, updateToken, addToBlacklist, isBlacklisted,deleteExpired};