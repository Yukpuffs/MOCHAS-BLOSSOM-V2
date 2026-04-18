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

module.exports = app;