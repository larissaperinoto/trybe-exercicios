const config = {
  username: 'root',
  password: 'root',
  database: 'exercicios_do_dia',
  host: '127.0.0.1',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};