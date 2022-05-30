if (n >= 1) {
  for (let contador = 1; contador <= n; contador = contador + 1) {
    let asterisco = "*";
    let espacos = " ";
    if (contador % 2 !== 0) {
      let numeroEspacos = (n - contador) / 2;
      let numeroAsteriscos = numeroEspacos - contador; // Terminar
      console.log(espacos.repeat(numeroEspacos) + asterisco.repeat(numeroAsteriscos));
    }
  }
}
