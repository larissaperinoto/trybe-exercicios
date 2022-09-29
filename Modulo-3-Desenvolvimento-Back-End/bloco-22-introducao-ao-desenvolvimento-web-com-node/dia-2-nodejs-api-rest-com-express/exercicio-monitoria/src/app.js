const express = require('express');
let data = require('./personagens');

const app = express();

app.use(express.json());

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = data.find((e) => e.id === Number(id))
  res.status(200).json(user);
});

app.get('/', (_req, res) => {
  res.status(200).json(data);
});

app.post('/', (req, res) => {
  const info = req.body;
  info.id = data.length + 1;
  data.push(info);
  return res.status(201).json(info);
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  data = data.filter((pers) => pers.id !== Number(id));
  return res.status(204).json({ message: 'Deletado com sucesso!'});
});

app.path('/:id', (req, res) => {
  const { id } = req.params;
  const { name, house } = req.body;
  const item = data.findIndex((pers) => pers.id !== Number(id));
  data[index].name = name;
  data[index].house = house;
  return res.status(200).json(data[index]);
});

module.exports = app;
