
let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];

let searchForFirstTask = tasksList[0];

let searchForLastTask = tasksList[tasksList.length - 1];

//Adicionando elementos ao final array
tasksList.push('Fazer exercícios da Trybe');  // adiciona mais uma tarefa

//Adicionando elementos ao inicio do array
tasksList.unshift('Estudar o conteúdo do site');
//console.log(tasksList);

//Para removermos o primeiro elemento do array
tasksList.shift();

//Para removermos o último item do array
tasksList.pop();

//Para encontrarmos o índice de um elemento no array
let posicaoNoArray = tasksList.indexOf('Reunião');
//console.log(posicaoNoArray);

//Exercício 1 - Obtenha o valor serviços
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

//console.log(menu[1]);

//Exercício 2 - Procure o índice
let menu2 = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu2.indexOf('Portfólio') ;

//console.log(indexOfPortfolio);

//Exercício 3 - Adicione um valor
let menu3 = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu3.push('Contatos');

//console.log(menu3);

//Conhecendo o laço FOR

let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

//Exercício 1 - Utilize o for para imprimir os elementos da lista groceryList com o console.log()
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (let index = 0; index < groceryList.length; index += 1){
    console.log(groceryList[index]);
}

//Conhecendo o FOR/OF
let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

//Exercício 1 - Utilize o for/of para imprimir os elementos da lista names com o console.log()
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let nomes of names){
    console.log(nomes);
}
