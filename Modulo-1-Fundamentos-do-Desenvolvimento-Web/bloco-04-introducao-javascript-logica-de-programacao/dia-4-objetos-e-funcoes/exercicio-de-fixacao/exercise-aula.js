//Aula ao vivo

function sum(numero1, numero2) {
  return numero1 + numero2
}

console.log(sum(1, 2)); //Atribuimos valores ao numero1 e numero2

function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(max(45, 34));

function avarage(num1, num2, num3) {
  return (num1 + num2 + num3) / 3;
}

console.log(avarage(3, 3, 3))

function generateArray() {
  let array = [];
  for (let index = 0; index <= 100; index += 1) {
    array.push(index);
  }
  return array;
}
