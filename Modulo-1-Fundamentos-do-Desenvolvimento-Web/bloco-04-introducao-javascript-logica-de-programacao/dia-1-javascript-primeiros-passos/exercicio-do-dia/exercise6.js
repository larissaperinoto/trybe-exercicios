//Exercício 6 - Peças de xadrez
const xadrez = "Cavalo";
switch (xadrez) {
  case "Bispo":
    console.log("Diagonal");
    break;
  case "Rainha":
    console.log("Todas as direções, quantas casas quiser");
    break;
  case "Rei":
    console.log("Todas as direções, apenas uma casa por vez");
    break;
  case "Torre":
    console.log("Linha reta, quantas casas quiser");
    break;
  case "Cavalo":
    console.log("Faz uma movimentação em L");
    break;
  case "Peão":
    console.log("Uma casa para frente, duas casas no primeiro movimento");
    break;
  default: "Peça inválida!";
}
