//Exercise 1

const specialFruit = ['Banana', 'Abacate', 'Manga'];

const additionalItens = ['Leite condensado', 'Granola', 'Linhaça'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional];

fruitSalad(specialFruit, additionalItens);

//Exercise 2
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const generalInfos = {
  ...user, 
  ...jobInfos
};

//Exercise 3

const {name, age, nationality, profession, squad, squadInitials} = generalInfos;

const apresentation = `Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;

//Exercise 4

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [first, second] = saudacoes;

second(first);

//Exercise 5

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

//Exercise 6

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

//Exercise 7

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

getNationality(otherPerson); // Ivan is Russian
getNationality(person);

//Exercise 8

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude});

getPosition(-19.8157, -43.9542);

//Exercise 9

const multiply = (number, value = 1) => {
  return number * value;
};

multiply(8);
