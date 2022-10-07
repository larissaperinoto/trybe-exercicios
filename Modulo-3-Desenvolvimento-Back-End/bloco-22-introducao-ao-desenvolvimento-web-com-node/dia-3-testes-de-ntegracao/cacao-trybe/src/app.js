const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  console.log(chocolates.length);
  res.status(200).json({ 'totalChocolates': chocolates.length });
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});


module.exports = app;
