let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];

for (let contador3 = 0; contador3 < array.length; contador3 += 1) {
  if (array[contador3].length > maiorPalavra.length) {
    maiorPalavra = array[contador3];
  }
}

console.log("A maior palavra do array é " + maiorPalavra);

let menorPalavra = array[0];

for (let contador4 = 0; contador4 < array.length; contador4 += 1) {
  if (array[contador4].length < menorPalavra.length) {
    menorPalavra = array[contador4];
  }
}

console.log("A menor palavra do array é " + menorPalavra);
