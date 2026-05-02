const pool = require('../config/db');

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

module.exports = {getAll, create};

// ----------------------------------------------Consultas Inicio de sesión-----------------------------------------------

//modelo para obtener todos los usuarios
const getini = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM crearsesion'
  );
  return rows;
}

// Modelo para tabla ini_sesi (login)
const usuarioModel = {
  
  // Buscar usuario por email en regis
  findByEmailRegis: async (email) => {
    const [rows] = await pool.query(
      'SELECT * FROM crearsesion WHERE email = ?',
      [email]
    );
    return rows[0];
  },
};

module.exports = {getAll, create, usuarioModel , getini};