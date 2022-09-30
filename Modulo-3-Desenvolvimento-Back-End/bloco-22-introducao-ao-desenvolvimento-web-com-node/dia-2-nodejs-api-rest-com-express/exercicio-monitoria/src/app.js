const express = require('express');
let personagens = require('./personagens');

const app = express();

app.use(express.json());

app.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = personagens.find((e) => e.id === Number(id))
  res.status(200).json(user);
});

app.get('/', (_req, res) => {
  res.status(200).json(personagens);
});

app.post('/', (req, res) => {
  const info = req.body;
  info.id = personagens.length + 1;
  personagens.push(info);
  return res.status(201).json(info);
});

app.delete('/:id', (req, res) => {
  const { id } = req.params;
  personagens = personagens.filter((pers) => pers.id !== Number(id));
  return res.status(204).json({ message: 'Deletado com sucesso!'});
});

app.path('/:id', (req, res) => {
  const { id } = req.params;
  const { name, house } = req.body;
  const item = personagens.findIndex((pers) => pers.id !== Number(id));
  personagens[index].name = name;
  personagens[index].house = house;
  return res.status(200).json(personagens[index]);
});

module.exports = app;
