const express = require('express');
const app = express();
require('dotenv').config();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
const crearsesionRouter = require('./routes/crearsesion.routes');
app.use('/auth/registro', crearsesionRouter);

const cerrarsesionRouter = require('./routes/cerrar.route');
app.use('/auth/cerrar', cerrarsesionRouter);

const inisesiRouter = require('./routes/Inisesi.routes');
app.use('/api/inisesi', inisesiRouter);

const productoRouter = require('./routes/producto.routes');
app.use('/api/producto', productoRouter);

const actualizarDatosRouter = require('./routes/actualizarDatos.routes');
app.use('/api/actualizarDatos', actualizarDatosRouter);

module.exports = app;