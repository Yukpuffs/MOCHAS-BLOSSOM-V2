const pool = require('../config/db');

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
