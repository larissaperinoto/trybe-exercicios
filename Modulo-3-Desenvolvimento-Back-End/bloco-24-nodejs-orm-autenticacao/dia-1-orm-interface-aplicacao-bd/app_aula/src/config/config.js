require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: process.env.MYSQL_DIALECT,
  port: process.env.MYSQL_PORT,
};

// Temos as mesmas credenciais de conexões para cada ambiente da aplicação.
module.exports = {
  development: config,
  test: config,
  production: config,
};
