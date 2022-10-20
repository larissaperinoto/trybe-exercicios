const Book = require('../models/book.model');
console.log(Book);

const getAll = async () => {
  const books = await Book.getAll();
  return books;
};

const getById = async (bookId) => {
  const book = await Book.findByPk(bookId);
  return book;
};

const create = async ({ title, author, pageQuantity }) => {
  const newBook = await Book.create({ title, author, pageQuantity });

  return newBook;
};

const update = async (bookId, { title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity }, { where: { id: bookId } });

  return updatedBook;
};

const remove = async (bookId) => {
  await Book.destroy({ where: { id: bookId } })
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};
