const express = require('express');

const app = express(); // inicia o programa com a função express.

app.get('/', (req, res) => res.status(200).json({ message: 'Olá Mundo!' }));

module.exports = app;