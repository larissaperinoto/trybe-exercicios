let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Percorra o array imprimindo todos os valores nele contidos com a função console.log()
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

//Some todos os valores contidos no array e imprima o resultado
let soma = 0;

for (let index1 = 0; index1 < numbers.length; index1 += 1) {
  soma += numbers[index1]; // soma = soma + numero[index]
}

console.log(soma); //Imprimimos fora do laço de repetição pois queremos a soma de todos os números


//Calcule e imprima a média aritmética dos valores contidos no array
let soma2 = 0;

for (let index2 = 0; index2 < numbers.length; index2 += 1) {
  soma2 += numbers[index2]; // soma2 = soma2 + numero[index]
}

let mediaAritmetica = soma2 / numbers.length;
console.log(mediaAritmetica);


//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20,
//imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20"

if (mediaAritmetica > 20) {
  console.log("Valor maior que 20!");
} else {
  console.log("Valor menor ou igual a 20!");
}

//Descubra qual o maior valor contido no array e imprima-o

let posicaoNumero = numbers[0]; //Começamos com a variável valendo 5

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
  if (numbers[index3] > posicaoNumero) { //Comparamos as diversas posições do array
    posicaoNumero = numbers[index3]; //Atribuimos um novo valor para a variável posicaoNumero
  }
}

console.log("O maior número do array é " + posicaoNumero);

//Descubra quantos valores ímpares existem no array e imprima o resultado

let valoresImpares = 0;

for (let index4 = 0; index4 < numbers.length; index4 += 1) {
  if (numbers[index4] % 2 !== 0) {
    valoresImpares += 1;
  }
}

console.log("Temos " + valoresImpares + " números ímpares no array");

//Descubra qual o menor valor contido no array e imprima-o

let menorNumero = numbers[0]; //Começamos com a variável valendo 5

for (let index3 = 0; index3 < numbers.length; index3 += 1) {
  if (numbers[index3] < menorNumero) { //Comparamos as diversas posições do array
    menorNumero = numbers[index3]; //Atribuimos um novo valor para a variável menorNumero
  }
}

console.log("O menor número do array é " + menorNumero);
