const pool = require('../config/db');

const getALL = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM crearsesion'
);
  return rows;
};

const patchcuenta = async (id, campos) => {
  const keys = Object.keys(campos);
  const values = Object.values(campos);

  const setClause = keys.map(k => `${k} = ?`).join(', ');

  const [result] = await pool.query(
    `UPDATE crearsesion SET ${setClause} WHERE id = ?`,
    [...values, id]
  );
  return result;
};

const eliminarCuenta = async (id) => {
  const [result] = await pool.query(
    'DELETE FROM crearsesion WHERE id = ?',
    [id]
  );
  return result;
};

module.exports = { patchcuenta, getALL, eliminarCuenta };