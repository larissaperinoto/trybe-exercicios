if (n >= 1) {
  for (let contador = 1; contador <= n; contador = contador + 1) {
    let asterisco = "*";
    let espacos = " ";
    let numeroEspacos = n - contador;
    console.log(espacos.repeat(numeroEspacos) + asterisco.repeat(contador));
  }
}
