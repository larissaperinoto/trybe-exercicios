//Exercício 5 - ângulos internos de um triângulo
const angulo1 = 23;
const angulo2 = 56;
const angulo3 = 67;

if ((angulo1 + angulo2 + angulo3) === 180) {
  console.log(true);
} else if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
  console.log("Angulos inválidos!");
} else {
  console.log(false);
}
