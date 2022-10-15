const connection = require('./db/connection');
const snakeize = require('snakeize');

const insert = async (person) => {
  const columns = Object.keys(snakeize(person))
    .map((key) => `${key}`)
    .join(', ');

  const placeholders = Object.keys(person)
    .map((_key) => '?')
    .join(', ');

    console.log(person);

  const response = await connection.execute(
    `INSERT INTO people (${columns}) VALUE (${placeholders})`,
    [...Object.values(person)],
  );

  return response;
};

module.exports = {
  insert,
};
