//Exercícios do dia

//Exercício 1
const employer = (string) => {
  const email = `${string.replace(/ /g, '_')}@trybe.com`;
  const obj = {
    name: string,
    email: email,
  };
  return obj;
}

const newEmployees = (object) => {
  const employees = {
    id1: employer('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employer('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employer('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

//Exercício 2

const verify = (number, numberSort) => number === numberSort ? true : false;

const sorteio = (number, verify) => {
  const numberSort = Math.floor(Math.random() *6);
  if (verify(number, numberSort) === false) {
    return 'Tente novamente!';
  } else {
    return 'Parabéns você ganhou!';
  }
}

// Exercícío 3

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkResult = (gabarito, respostas) => {
  if (gabarito === respostas) {
    return 1;
  } 
  if (respostas === 'N.A') {
    return 0
  } 
  return -0.5;
}

const result = (gabarito, respostas, resultado) => {
  let pontos = 0;
  for (let index = 0; index < gabarito.length; index += 1) {
    const retorn = resultado(gabarito[index], respostas[index]);
    pontos += retorn;
  }
  return pontos;
}

console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkResult))