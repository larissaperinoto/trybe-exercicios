let cinquenta = [];
for (let contador5 = 0; contador5 <= 50; contador5 += 1) {
  cinquenta.push(contador5);
}

let numerosPrimos = [];
let divisaoArray = 0;
let divisaoPorUm = 0;

for (let contador6 = 0; contador6 < cinquenta.length; contador6 += 1) {
  divisaoArray = cinquenta[contador6] / cinquenta[contador6];
  divisaoPorUm = cinquenta[contador6] / 1
  if (divisaoArray === 1) {
    numerosPrimos.push(cinquenta[contador6]);
  }
}
