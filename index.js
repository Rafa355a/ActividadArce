const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON y datos de formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'static')));

// Usar las rutas definidas en routes.js
app.use('/', routes);

// Manejador de errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'static', '404.html'));
});

// Manejador de errores general
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, 'static', '500.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});