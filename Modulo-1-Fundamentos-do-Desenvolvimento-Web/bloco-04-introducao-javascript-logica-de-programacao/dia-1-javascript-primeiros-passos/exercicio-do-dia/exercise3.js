//Exercício 3 - O maior de três números
const numbe1 = 45;
const numbe2 = 435;
const numbe3 = 89138;

if (numbe1 > numbe2 && numbe1 > numbe3) {
  console.log(numbe1 + " É o maior!");
} else if (numbe2 > numbe3 && numbe2 > numbe1) {
  console.log(numbe2 + " É o maior!");
} else {
  console.log(numbe3 + " É o maior!");
}
