const express = require('express');
const data = require('./data');

const app = express();

app.use(express.json());

app.get('', (_req, res) =>  res.status(200).json({ message: "Hello World!"}));

app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  const response  = data.find(({ id }) => id === Number(id));
  res.status(200).json(response);
});

app.get('/myActivities', (_req, res) =>  res.status(200).json({ data: data }));

app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;

  let newData = data;

  if (status) {
    newData = data.filter((item) = item.status === status);
  }

  res.status(200).json({ data: newData });

});

app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let response = [];


  if (q) {
    response = data.filter((element) => element.description.includes(search));
  }

  res.status(200).json({ data: response });
});

module.exports = app;
