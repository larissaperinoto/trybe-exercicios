require('dotenv').config();

const config = {
  username: process.env.MYSQL_USER,
  password:  process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  host: process.env.HOST,
  dialect: process.env.DIALECT,
};

module.exports = {
  development: config,
  test: config,
  production: config,
};