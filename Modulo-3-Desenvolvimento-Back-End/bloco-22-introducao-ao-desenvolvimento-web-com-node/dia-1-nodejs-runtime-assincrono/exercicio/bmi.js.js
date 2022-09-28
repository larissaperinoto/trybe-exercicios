const myQuestion = require('readline-sync');

const height = myQuestion.questionFloat('How tall are you?');
const weight = myQuestion.questionInt('what is your weight?');

const imc = weight / (height ^ 2);

if (imc < 18.5) {
  console.log('Abaixo do peso (magreza)');
} else if (imc >=18.5 || imc <= 24.9) {
  console.log('Peso normal');
} else if (imc >= 25 || imc <= 29.9) {
  console.log('Acima do peso (sobrepeso)');
} else if (imc >= 30 || imc <= 34.9) {
  console.log('Obesidade grau I');
} else if (imc >= 35.5 || imc <= 39.9) {
  console.log('Obesidade grau II');
} else {
  console.log('Obesidade grau III e IV');
}