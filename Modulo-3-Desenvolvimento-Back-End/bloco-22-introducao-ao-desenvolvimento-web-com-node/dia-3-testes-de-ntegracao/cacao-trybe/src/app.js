const express = require('express');
const cacaoTrybe = require('./cacaoTrybe');

const app = express();

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacaoTrybe.getAllChocolates();

  const chocolateWithName = chocolates.filter((chocolate) => chocolate.name.includes(name))
  console.log(req.query);

  if (chocolateWithName) {
    res.status(200).json(chocolateWithName);
  } else {
    console.log('oi');
    res.status(404).json([]);

  }
});

app.get('/chocolates/total', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ 'totalChocolates': chocolates.length });
});

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});


module.exports = app;
