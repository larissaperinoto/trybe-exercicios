const mysql = require('mysql/promise');

const connection = mysql.createPolol({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: 'root',
  database: 'trybecashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
