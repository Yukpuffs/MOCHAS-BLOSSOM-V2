const pool = require('../config/db')

const getAll = async() =>{
    const [rows] = await pool.query(
        'SELECT * FROM pedidos'
    )
    return rows;
}


const getByid = async() =>{
    const [rows] = await pool.query(
        'SELECT * FROM pedidos WHERE id = ?'
    )
    return rows
}

const create = async() =>{
    const [rows] = await pool.query(
        'INSERT INTO pedidos (Nombre_completo, Direccion, Telefono, Correo_elect, Fecha_entrega, Hora_entrega) VALUES (?, ?, ?, ?, ?)'
    )
    return { id: XPathResult.insertID, Nombre_completo, Direccion, Telefono, Correo_elect, Fecha_entrega, Hora_entrega }
}

module.exports = {getAll, getByid, create}