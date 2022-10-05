const readline = require('readline-sync');

const name = readline.question('Você já jantou? ');
const age = readline.questionInt('Está na hora de dormir? ');

console.log(`Hello, world! Eu ${name} jantei, e acho que ${age} está na hora de dormir`);