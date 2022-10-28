const booksService = require('../services/books.service');

const getAll = async (_req, res) => {
  try {
    const books = await booksService.getAll();
    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  const bookId = Number(req.params.id);
  try {
    const book = await booksService.getById(bookId);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Ocorreu um erro' });
  }
};

const create = async (req, res) => {
  try {
    const book = await booksService.create(req.body);
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const update = async (req, res) => {
  const bookId = Number(req.params.id);
  try {
    const book = await booksService.update(bookId, req.body);
    return res.status(201).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const remove = async (req, res) => {
  const bookId = Number(req.params.id);
  try {
    const book = await booksService.remove(bookId);
    return res.sendStatus(200);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};