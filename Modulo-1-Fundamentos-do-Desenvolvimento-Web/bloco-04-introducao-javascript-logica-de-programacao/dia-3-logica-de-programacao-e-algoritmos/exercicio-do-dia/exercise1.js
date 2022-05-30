//O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.

let arrayFatorial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let fatorial = 1;

for (let contador = 0; contador < arrayFatorial.length; contador += 1) {
  fatorial = fatorial * arrayFatorial[contador];
}

//Outra solução

let fatorial2 = 1;
for (contador1 = 10; contador1 > 0; contador1 -= 1) {
  fatorial2 *= contador1;
}