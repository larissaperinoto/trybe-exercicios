const express = require('express');

const books = require('./controllers/books.controller');

const app = express();
const PORT = 3009;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));

app.get('/books/:id', books.getById);
app.get('/books', books.getAll);
app.post('/books', books.create);
app.put('/books/:id', books.update);
app.delete('/books/:id', books.remove);
