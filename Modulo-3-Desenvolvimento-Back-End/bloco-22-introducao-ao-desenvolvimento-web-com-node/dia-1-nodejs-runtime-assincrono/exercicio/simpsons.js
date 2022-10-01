// Exercício 6.1
const fs = require('fs').promises;
const path = require('path');

async function list() {
  const fileContent = await fs.readFile(path.resolve(__dirname, './simpsons.json'), 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const format = simpsons.map(({ id, name}) => `${id} - ${name}`);
  format.forEach((string) => console.log(string));
}

async function main() {
  await list();
}

main();

// Exercício 6.2

async function searhCharacter (id) {
  const fileContent = await fs.readFile(path.resolve(__dirname, './simpsons.json'), 'utf-8');
  const characters = JSON.parse(fileContent);
  const findCharacter = characters.find((character) => Number(character.id) === Number(id));
  console.log(findCharacter.name);
}

searhCharacter(1);

// Exercício 6.3

async function removeCharacter () {
  const fileContent = await fs.readFile(path.resolve(__dirname, './simpsons.json'), 'utf-8');
  const characters = JSON.parse(fileContent)
    .filter((character) => Number(character.id) !== 6 && Number(character.id) !== 10);
  console.log(characters);
}

removeCharacter();

// Exercício 6.4

async function createFile () {
  const fileContent = await fs.readFile(path.resolve(__dirname, './simpsons.json'), 'utf-8');
  const characters = JSON.parse(fileContent)
    .filter((character) => Number(character.id) === 1 && Number(character.id) === 4);
  await fs.writeFile(path.resolve(__dirname, './simpsons.json'), JSON.stringify(characters));
}

createFile();

// Exercício 6.5

async function addCharacter () {
  const fileContent = await fs.readFile(path.resolve(__dirname, './simpsons.json'), 'utf-8');
  const characters = JSON.parse(fileContent);
  const newCharacter = {id: 11, name: 'Nelson Muntz' };
  await fs.writeFile(path.resolve(__dirname, './simpsons.json'),
    JSON.stringify([...characters, newCharacter]));
}

addCharacter();
