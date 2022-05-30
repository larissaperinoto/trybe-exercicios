//Execício 11 - Salário líquido
let descontoInss;
let descontoImpostoDeRenda;

const salarioBruto = 3000;

if (salarioBruto <= 1556.96) {
  descontoInss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  descontoInss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  descontoInss = salarioBruto * 0.11;
} else {
  descontoInss = 570.88;
}

const salarioBase = salarioBruto - descontoInss;

if (salarioBase <= 1903.98) {
  descontoImpostoDeRenda = salarioBase;
} else if (salarioBase <= 2826.65) {
  descontoImpostoDeRenda = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  descontoImpostoDeRenda = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  descontoImpostoDeRenda = (salarioBase * 0.225) - 636.13;
} else {
  descontoImpostoDeRenda = (salarioBase * 0.275) - 869.36;
}

const salarioLiquido = salarioBase - descontoImpostoDeRenda;
