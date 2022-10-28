const config = {
  username: 'root',
  password: 'root',
  database: 'exercicios_do_dia',
  host: 'localhost',
  dialect: 'mysql',
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
