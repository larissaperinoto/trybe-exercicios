//Exercício 10 - Cálculo de lucro
const custo = 45;
const venda = 55;
const quantidade = 1000;

if (custo > 0 && venda > 0) {
  const impostoSobreCusto = custo * 0.2;
  const lucro = (venda - (custo + impostoSobreCusto)) / quantidade;
  console.log(lucro)
} else {
  console.log("Valores inválidos!")
}
