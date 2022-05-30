let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  condition: ['novo', 'usado', 'batido', 'apreendido'],
};

//Podemos acessar um item do objeto de duas formas:
console.log("Meu carro é um " + car.type + " e ele é " + car.condition[1]); //Dot notation (notação por ponto)
console.log("Meu carro é um " + car['type'] + " e ele é " + car['condition'][2]); //Bracked notation (notação por colchete)

//Remover propriedades de um objeto

delete car.type;
