const express = require('express');
const app = express();
const PORT = 3009;

app.use(express.json());

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));