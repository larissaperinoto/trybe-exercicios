const express = require('express');

const peopleRoutes = require('../src/routes/peopleRoutes');

const app = express();

// Middleware de inicialização
app.use(express.json()); // Usamos essa configuração para requisições tipo POST e PUT

app.use('/people', peopleRoutes)

module.exports = app;
