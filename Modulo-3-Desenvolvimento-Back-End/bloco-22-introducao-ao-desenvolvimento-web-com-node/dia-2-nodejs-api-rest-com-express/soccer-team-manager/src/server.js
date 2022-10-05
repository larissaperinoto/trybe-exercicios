const app = require('./app');

// Dentro da nossa função expres() que foi aatribuida ao app, temos várias chaves e uma delas é a
// listen, a função listen recebe a porta (Aqui passamos 3001, mas poderia ser qualquer número não utilizado acima de 1023)
// E passams também uma função

app.listen(3001, () => console.log('Servidor online na porta 3001'));