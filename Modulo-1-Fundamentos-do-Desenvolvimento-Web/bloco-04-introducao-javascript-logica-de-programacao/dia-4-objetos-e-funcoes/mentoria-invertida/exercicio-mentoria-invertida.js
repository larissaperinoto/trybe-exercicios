// Exercício 1
function calculoAreaPerimetro(base, altura) {
  let objetoQuadrilatero = {
    perimetro: 0,
    area: 0,
  }
  objetoQuadrilatero.perimetro = (base * 2) + (altura * 2);
  objetoQuadrilatero.area = base * altura;
  return objetoQuadrilatero;
}


// Exercício 2
let arrayNumeros = [45, 76, 2, 4, 545, 9, 12];

function numeroImparesPares(numeros) {
  let objeto = {
    pares: 0,
    impares: 0
  }

  for (var key of numeros) {
    if (numeros[key] % 2 !== 0) {
      objeto.impares += 1;
    } else {
      objeto.pares += 1;
    }
  }
  return objeto;
}

let resultado = numeroImparesPares(arrayNumeros);


// Exercício 3
let word = "trybe";
let ending = "be";

function verificaString(stringWord, stringEnding) {
  let arrayWord = stringWord.split("");
  let arrayEnding = stringEnding.split("");
  let tamanhoArrayWord = arrayWord.length;
  let tamanhoArrayEnding = arrayEnding.length;
  if (tamanhoArrayEnding < tamanhoArrayWord) {
    return true;
  } else {
    return false;
  }
}

let resultados = verificaString(word, ending);
