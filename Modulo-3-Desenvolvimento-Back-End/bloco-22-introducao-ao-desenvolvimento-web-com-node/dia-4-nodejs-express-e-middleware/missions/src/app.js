const express = require('express');
const path = require('path')
const fs = require('fs').promises;

const app = express();

app.use(express.json());

app.get('/missions', async (_req, res) => {
  const data = await fs.readFile(path.resolve(__dirname, './data.json'), 'utf-8');
  const missions = JSON.parse(data);
  res.status(200).json(missions);
});

module.exports = app;
