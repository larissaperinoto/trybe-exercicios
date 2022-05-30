### Exercícios para fixação do conteúdo do dia

## Spread Operator
1 - Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens, faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread.

## Parâmetro rest  e Object Destructuing
2 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise. Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

`const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
}; 
`

3 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.

## Array Destructuring

4 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.

` 
saudacoes[1](saudacoes[0]); // Olá 
`

5 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.

`
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';
`

Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo.

6 - Array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

`
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
`

## Default Destructuring

7 - Ajuste a função GetNationality para que a chamada GetNationality(person) retorne João is Brazilian.

## Object Property Shorthand

8 - Altere a função getPosition utilizando a property shorthand.

## Default Parameters

9 - Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.