const express = require('express');
require('express-async-errors');
const error = require('./middlewares/error');
const routes = require('./routes/router');

const app = express();

app.use(express.json());

app.use('/course', routes);

app.use(error);

module.exports = app;
