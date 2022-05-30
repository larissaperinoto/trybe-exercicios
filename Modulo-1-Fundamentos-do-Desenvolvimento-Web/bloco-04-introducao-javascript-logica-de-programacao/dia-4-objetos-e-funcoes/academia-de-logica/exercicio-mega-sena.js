//Refazendo o sorteio da loteria usando funções
function divisaoResultadosConsole() {
  console.log("----------------------")
}

let jogos = {
  larissa: [34, 56, 4, 23, 32, 6],
  vitorio: [23, 54, 3, 2, 12, 5],
  henrique: [67, 5, 17, 32, 4, 6],
}

function ramdomSorteioLoteria() {
  return Math.floor(Math.random() * 61); //Sorteando os valores da loteria
}

function generateNumbers() {
  let sorteioLoteria = [];
  for (let index = 0; index < 6; index += 1) {
    sorteioLoteria.push(ramdomSorteioLoteria()); //Colocando os números sorteados e um array de tamanho 6
    for (let contador = 0; contador < (sorteioLoteria.length - 1); contador += 1) { //Verificando se há números repetidos
      if (sorteioLoteria[index] === sorteioLoteria[contador]) {
        sorteioLoteria[index] = ramdomSorteioLoteria();
      }
    }
  }
  return sorteioLoteria;
}

let numerosLoteria = generateNumbers(); //O array do sorteio está nesta variável

function megaSenaChecker(numerosSorteio, numerosJogo) { //Função para comparar os dois arrays
  let acertos = 0;
  for (let index = 0; index < numerosSorteio.length; index += 1) {
    for (let contador = 0; contador < numerosJogo.length; contador += 1) {
      if (numerosJogo[contador] === numerosSorteio[index]) {
        acertos += 1;
      }
    }
  }
  return acertos;
}

//Resultados
console.log("Valores da loteria " + numerosLoteria);
divisaoResultadosConsole();
console.log("Jogo da Larissa " + jogos.larissa);
console.log("Larissa teve " + megaSenaChecker(numerosLoteria, jogos.larissa) + " acertos!");
divisaoResultadosConsole();
console.log("Jogo do Vitório " + jogos.vitorio);
console.log("Vitório teve " + megaSenaChecker(numerosLoteria, jogos.vitorio) + " acertos!");
divisaoResultadosConsole();
console.log("Jogo do Henrique " + jogos.henrique);
console.log("Henrique teve " + megaSenaChecker(numerosLoteria, jogos.henrique) + " acertos!");
