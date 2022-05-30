/* function testingScope(escopo) {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
      console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

  testingScope(true); */

/* 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
   - Modifique a estrutura da função para que ela seja uma arrow function.
   - Modifique as concatenações para template literals. */

const testingScope = escopo => {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}
    
/* 2 - Faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o métodoarray.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
 */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordena = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;
  return oddsAndEvens;
}

const arrayOrdenado = ordena ();
console.log(`Os números ${arrayOrdenado} se encontram ordenados de forma crescente!`); 

// Outra forma de resolver
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);

// PARTE 2
//1 - Crie uma função que receba um número e retorne seu fatorial.

const fatorial = number => {
  let fatorando = 1;
  for (let index = 1; index <= number; index += 1) {
    fatorando *= index;
  }

  return fatorando;
}

console.log(fatorial(5));

//Crie uma função que receba uma frase e retorne qual a maior palavra.

const stringSize = string => {
  const arrayString = string.split(' ');
  let maiorpalavra = arrayString[0];
  for (let index of arrayString) {
    if (index.split('').length > arrayString[0].split('').length) {
      maiorpalavra = index;
    }
  }

  console.log(maiorpalavra);
}

stringSize("Antonio foi no banheiro e não sabemos o que aconteceu");

//4 - Crie um código JavaScript com a seguinte especificação:
// Função 1: Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. 
//Sua função deve retornar essa nova string.
let skills = ['organização', 'determinação', 'responsabilidade', 'criatividade', 'comunicação assertiva']

const procuraX = string => (`Tryber ${string} aqui!`);

const concatenaArray = (funcaoString) =>
  ` ${funcaoString} 

  Minhas cinco principais habilidades são: ${skills.sort()} #goTrybe`;

console.log(concatenaArray(procuraX('Larissa')));