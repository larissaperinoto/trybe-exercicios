//Exercícios com operadores if/else: atriubuindo aprovação ou reprovação
const nota = 89;

if (nota >= 80){
  console.log("Parabéns, você foi aprovada(o)!");
} else if (nota >= 60 && nota < 80){
  console.log("Você está na nossa lista de espera");
} else{
  console.log("Você foi reprovada(o)");
}

// Conhecendo operadores lógicos &&, ||  e !

const comida = 'esfiha';
const bebida = 'cafézinho';

if (bebida === 'cafézinho' && comida === 'pão na chapa') {
  console.log('Muito obrigado pela refeição :)');
} else {
  console.log('Acho que houve um engano com meu pedido');
}

// Exemplo 1:Quando usamos && todas as condições devem ser atendidas
const conditionOne = true;
const conditionTwo = false;

//Exemplo 2
const cenouras = true;
const leite = true;
const arroz = true;
const feijao = true;

const listaDeCompras = cenouras && leite && arroz && feijao;

//Exemplo 3
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//Exercício: que horas são?

const currenthour = 15;
let message = "";

if (currenthour >= 22){
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currenthour >= 18 && currenthour < 22){
  message = "Rango da noite, vamos jantar :D";
} else if (currenthour >= 14 && currenthour < 18){
  message = "Vamos fazer um bolo pro café da tarde";
} else if (currenthour >=11 && currenthour < 14){
  message = "Hora do almoço!!!";
} else if (currenthour >= 4 && currenthour < 11){
  message = "Hmmm, cheiro de café recém passado";
} else {
  message = "Será que está na hora do lanche?"
}

//Conhecendo o operador OR

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//Exercício: dias da semana

let weekDay ="Quarta-feira";

if (weekDay ==="Segunda-feira" || weekDay === "Terça-feira" || weekDay === "Quarta-feira" || weekDay === "Quinta-feira" || weekDay === "Sexta-feira"){
  console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else if (weekDay === "Sábado" || weekDay === "Domingo"){
  console.log("FINALMENTE, descanso merecido UwU");
}
