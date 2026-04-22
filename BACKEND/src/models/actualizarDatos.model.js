const pool = require('../config/db');

const getALL = async () => {
  const [rows] = await pool.query(
    'SELECT * FROM cuenta'
);
  return rows;
};

const patchcuenta = async (id, campos) => {
  const keys = Object.keys(campos);
  const values = Object.values(campos);

  const setClause = keys.map(k => `${k} = ?`).join(', ');

  const [result] = await pool.query(
    `UPDATE cuenta SET ${setClause} WHERE id = ?`,
    [...values, id]
  );
  return result;
};

module.exports = { patchcuenta, getALL };