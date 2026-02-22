const http = require("http");

const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "..")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"..", "html", "cuenta.html"));
})

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
})

/*---------------------------------------------------------Base de datos--------------------------------------------------------------------------------- */
const sqlite = require("sqlite3");
let sql = "";

const db = new sqlite.Database("../mochas_blossoms.db", sqlite.OPEN_READWRITE | sqlite.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err);
    }
});

/*---------------------------------------------------------mi cuenta--------------------------------------------------------------------------------- */



sql = `CREATE TABLE IF NOT EXISTS cuenta (
    id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, corre_E TEXT, telefono TEXT, direccion TEXT, num_tarj TEXT 
    )`;

app.post("/guardar", (req, res) => {
    const { nombre, correo, telefono, direccion, tarjeta } = req.body;

    db.run(
        `INSERT INTO cuenta (nombre, corre_E, telefono, direccion, num_tarj)
         VALUES (?, ?, ?, ?, ?)`,
        [nombre, correo, telefono, direccion, tarjeta],
        (err) => {
            if (err) return res.status(500).send(err.message);
            res.send("Datos guardados");
        }
    );
});

/*---------------------------------------------------------iniciar sesion--------------------------------------------------------------------------------- */
sql = `CREATE TABLE IF NOT EXISTS iniciar_sesion (
    id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, contrasena TEXT
    )`;

db.run(sql, (err) => {
    if (err) {
        console.error(err);
    }
})

sql = `INSERT INTO iniciar_sesion (usuario, contrasena) VALUES(?, ?)`;
sql = `UPDATE iniciar_sesion SET usuario = ?, contrasena = ? WHERE id = ?`;

    
/*---------------------------------------------------------pedidos--------------------------------------------------------------------------------- */

sql = `CREATE TABLE IF NOT EXISTS pedidos (
id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, direccion INTEGER, telefono INTEGER, email TEXT, fecha DATE, hora TIME, metodo_pago TEXT, num_tarj INTEGER, cvv INTEGER, fech_cad DATE)`;

db.run(sql, (err) => {
    if (err) {
        console.error(err);
    }
})

sql = `INSERT INTO pedidos (nombre, direccion, telefono, email, fecha, hora, metodo_pago, num_tarj, cvv, fech_cad) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

/*---------------------------------------------------------personalizacion--------------------------------------------------------------------------------- */

sql = `CREATE TABLE IF NOT EXISTS personalizacion (
id INTEGER PRIMARY KEY AUTOINCREMENT, sabor TEXT, rel TEXT, tamano TEXT, cober TEXT, decor TEXT)`;

db.run(sql, (err) => {
    if (err) {
        console.error(err);
    }
})

sql = `INSERT INTO personalizacion (sabor, rel, tamano, cober, decor) VALUES(?, ?, ?, ?, ?)`;

/*---------------------------------------------------------Registrarse--------------------------------------------------------------------------------- */
sql = `CREATE TABLE IF NOT EXISTS registrarse (
    id INTEGER PRIMARY KEY AUTOINCREMENT, usuario TEXT, contrasena TEXT, correo_E TEXT
    )`;

db.run(sql, (err) => {
    if (err) {
        console.error(err);
    }
})

sql = `INSERT INTO registrarse (usuario, contrasena, correo_E) VALUES(?, ?, ?)`;



