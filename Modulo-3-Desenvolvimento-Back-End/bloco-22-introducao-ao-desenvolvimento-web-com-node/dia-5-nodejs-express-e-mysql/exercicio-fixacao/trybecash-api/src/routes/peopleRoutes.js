const express = require('express');
const router = express.Router();

const peopleModel = require('../model/peopleModel');

router.post('/', async (req, res) => {
  const person = req.body;
  try {
    const result = await peopleModel.insert(person);
    res.status(201).json({ message: 'Pessoa cadastrada com sucesso!'});
  } catch (error) {
    res.status(500).json({ message: 'Ocorreu um erro ao inserir uma nova pessoa!'});
  }
});

module.exports = router;
