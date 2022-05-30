let numbersNovos = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let contador1 = 0; contador1 < numbersNovos.length; contador1 += 1) { //Percorrendo o array
  for (let contador2 = 0; contador2 < numbersNovos.length; contador2 += 1) { //Percorrendo o mesmo array
    if (numbersNovos[contador1] < numbersNovos[contador2]) { //Comparando os valores das posições
      let posicao = numbersNovos[contador1];
      numbersNovos[contador1] = numbersNovos[contador2];
      numbersNovos[contador2] = posicao;
    }
  }
}

for (let contador3 = 0; contador3 < numbersNovos.length; contador3 += 1) { //Percorrendo o array
  for (let contador4 = 0; contador4 < numbersNovos.length; contador4 += 1) { //Percorrendo o mesmo array
    if (numbersNovos[contador3] > numbersNovos[contador4]) { //Comparando os valores das posições
      let posicao = numbersNovos[contador3];
      numbersNovos[contador3] = numbersNovos[contador4];
      numbersNovos[contador4] = posicao;
    }
  }
}

let arrayMultipicado = [];
let conta = 0;

for (let contador5 = 0; contador5 < numbersNovos.length; contador5 += 1) {
  if (contador5 < (numbersNovos.length - 1)) {
    conta = numbersNovos[contador5] * numbersNovos[contador5 + 1];
    arrayMultipicado.push(conta);
  } else {
    conta = numbersNovos[contador5] * 2;
    arrayMultipicado.push(conta);
  }
}
