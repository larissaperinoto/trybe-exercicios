// Exercícios do dia - Parte 2
const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

//Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
const customerInfo = (order) => {
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const name = order.name;
  const phone = order.phoneNumber;
  const street = order.address.street;
  const number = order.address.number;
  const apartment = order.address.apartment;
  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phone}, ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

//Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."

const orderModifier = (order) => {
  const name = order.name = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const drink = order.order.drinks.coke.type;
  const total = order.payment.total = '50';
  console.log(`Olá ${name}, o total do seu pedido de ${pizza} e ${drink} é R$${total}`);
}

orderModifier(order);

//Exercícios do dia - Parte 3

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const turnoNoite = (objeto, chave, valor) => {
  objeto[chave] = valor;
}

turnoNoite(lesson2, 'turno', 'noite');

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const keysList = (objeto) => {
  const keys = Object.keys(objeto);
  return keys;
}

keysList(lesson1);

//Crie uma função para mostrar o tamanho de um objeto.

const objectSize = (objeto) => {
  const size = Object.values(objeto).length;
  return size;
}

objectSize(lesson1);

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const objectValues = (objeto) => {
  const values = Object.values(objeto);
  return values;
}

objectValues(lesson1);

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

//Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const allStudants = (obj1, obj2, obj3) => {
  const students1 = parseInt(obj1.numeroEstudantes);
  const students2 = parseInt(obj2.numeroEstudantes);
  const students3 = parseInt(obj3.numeroEstudantes);

  const allStudants = students1 + students2 + students3;
  return allStudants;
}

allStudants(lesson1, lesson2, lesson3);

//Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

const position = (objeto, number) => Object.values(objeto)[number];

position(lesson1, 1);

//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.

const verifyObjetct = (objeto, key, value) => {
  const array = Object.entries(objeto);
  let result = false;
  for (let index in array) {
    if (array[index][0] == key && array[index][1] == value) {
      result = true;
    } 
  }
}

verifyObjetct(lesson1, 'materia', 'Matemática');

//bônus: Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const mathStudants = (allLessons) => {
  const array = Object.keys(allLessons);
  let studants = 0;
  for (let index in array) {
    if (allLessons[array[index]].materia === 'Matemática') {
      studants += parseInt(allLessons[array[index]].numeroEstudantes);
    }
  }
  return studants;
}

mathStudants(allLessons);

//bônus

const infos = (objeto, name) => {
  const lessons = [];
  let studants = 0;
  const values = Object.values(objeto);
  for (let index in values) {
    if (values[index].professor === name) {
      lessons.push(values[index].materia);
      studants += parseInt(values[index].numeroEstudantes);
    }
  }
  return {lessons, studants};
}

const relator = Object.assign({}, infos(allLessons, 'Maria Clara'));

console.log(relator);