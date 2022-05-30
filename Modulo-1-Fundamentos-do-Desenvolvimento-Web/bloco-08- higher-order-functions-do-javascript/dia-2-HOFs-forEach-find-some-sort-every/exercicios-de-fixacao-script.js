//Exercício do dia para fixar

//1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email) => {
  return `O email ${email} esta cadastrado em nosso banco de dados!`;
};

emailListInData.forEach( (email) => {
  showEmailList(email);
});

//2 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find( (number) => number % 3 === 0 &&  number % 5 === 0);
}

findDivisibleBy3And5();

//3 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const array = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return array.find((name) => name.length > 5);
}

findNameWithFiveLetters();

//4 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

function findMusic(id) {
  return musicas.find((musica) => musica.id === id);
}

findMusic('31031685');

//5 - Utilize a sort para ordenar o array pela idade das pessoas em ordem crescente.

const peopl = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

peopl.sort((a, b) => a.age - b.age); 

// Modifique o sort do exercício anterior para que ordene o array pela idade das pessoas em ordem decrescente.

peopl.sort((a, b) => b.age - a.age);


//6 - Escreva uma função que dado um array de nomes e um nome retorne true se ele estiver contido e caso contrário, retorne false, use some;
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((personName) => name === personName);
}

hasName(names, 'Ana');

//7 - Escreva uma função que dado um array de pessoas e uma idade mínima retorne true se todas tiverem a idade maior ou igual a mínima e caso contrário false, use every;
const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  return arr.every((age) => age.age >= minimumAge);
}

verifyAges(people, 18);
