const pool = require('../config/db');

//modelo para obtener todos los productos
const getAll = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM personalizacio'
  );
  return rows;
}

const getById = async (id) => {
  const [rows] = await pool.query(
    'SELECT * FROM personalizacio WHERE id = ?', 
    [id]
  );
  return rows;
}

const Create = async (sabor, relleno, tamano, cobertura, decoracion) => {
  const [result] = await pool.query(
    'INSERT INTO personalizacio (sabor, relleno, tamano, cobertura, decoracion) VALUES (?, ?, ?, ?, ?)',
    [sabor, relleno, tamano, cobertura, decoracion]
  );
  return { id: result.insertId, sabor, relleno, tamano, cobertura, decoracion };
};

module.exports = {getAll,getById, Create};