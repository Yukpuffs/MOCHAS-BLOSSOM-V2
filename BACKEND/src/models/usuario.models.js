const pool = require('../config/db');

//modelo para obtener todos los usuarios
const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM regis'
  );
  return rows;
}

// Modelo para tabla ini_sesi (login)
const usuarioModel = {
  
  // Buscar usuario por email en regis
  findByEmailRegis: async (email) => {
    const [rows] = await pool.query(
      'SELECT * FROM regis WHERE email = ?',
      [email]
    );
    return rows[0];
  },
};

module.exports = {...usuarioModel ,  getAll };
