// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

let player = {
  name: 'Marta',
  lasName: 'Silva',
  age: 34,
  medals: {
    golden: 2,
    silver: 3
  },
};

console.log("A Jogadora " + player.name + " " + player.lasName + " tem " + player.age + " anos de idade ");

player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.table(player);
console.log("A jogadora " + player.name + " " + player.lasName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.lenght + " vezes!")
console.log(player.bestInTheWorld.lenght);
console.log("A jogadora possui " + player.medals.golden + " medalhas de ouro e " + player.medals.silver + " medalhas de prata");
