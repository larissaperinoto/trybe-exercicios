const fs = require('fs');

async function list() {
  const personage = await fs.promises.readFile('./simpsons.json', 'utf-8');
}

async function main() {
  await list();
}

console.log(main());