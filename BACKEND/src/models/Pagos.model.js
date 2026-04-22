const pool = require('../config/db')

const getAll = async() =>{
    const [rows] = await pool.query(
        'SELECT * FROM pedidos'
    )
    return rows;
}


const getById = async(id) =>{
    const [rows] = await pool.query(
        'SELECT * FROM pedidos WHERE id = ?'
    , [id])
    return rows[0]
}

const create = async(datos) =>{
    const {
        Nombre_completo,
        Direccion,
        Telefono,
        Correo_elect,
        Fecha_entrega,
        Hora_entrega
    } = datos;

    const [result] = await pool.query(
        'INSERT INTO pedidos (Nombre_completo, Direccion, Telefono, Correo_elect, Fecha_entrega, Hora_entrega) VALUES (?, ?, ?, ?, ?, ?)', [Nombre_completo, Direccion, Telefono, Correo_elect, Fecha_entrega, Hora_entrega]
    )
    return { id: result.insertId, Nombre_completo, Direccion, Telefono, Correo_elect, Fecha_entrega, Hora_entrega }
}

module.exports = {getAll, getById, create}
