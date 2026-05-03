const express = require('express');
const app = express();
require('dotenv').config();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
const crearsesionRouter = require('./routes/crearsesion.routes');
app.use('/auth', crearsesionRouter);

const productoRouter = require('./routes/producto.routes');
app.use('/api/producto', productoRouter);

const actualizarDatosRouter = require('./routes/actualizarDatos.routes');
app.use('/api/actualizarDatos', actualizarDatosRouter);

const pagosrouter = require('./routes/Pagos.routes')
app.use('/api/pagos', pagosrouter)

const carritoRouter = require('./routes/carrito.routes');
app.use('/api/carrito', carritoRouter);

module.exports = app; 