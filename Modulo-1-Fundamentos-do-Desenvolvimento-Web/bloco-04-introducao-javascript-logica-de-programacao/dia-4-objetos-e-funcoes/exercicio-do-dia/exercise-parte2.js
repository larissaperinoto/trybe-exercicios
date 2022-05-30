//Exercícios do dia
function divisorResultadosConsole(){
    console.log("---------------");
}
//Parte II - Funções
//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalidromo(string){
    for(let indice in string){ //Com o for in percorremos a string como se fose um array
        if(string[indice] !== string[(string.length - 1) - indice]){ //Comparamos as posições do inicio ao fim
            return false;
        }
    }
    return true;
}

let resultado = verificaPalidromo("arara");
console.log(resultado);
divisorResultadosConsole();

//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let arrayValores = [45, 3, 6, 23, 90];

function recebeInteiros(array){
    let maiorIndice = 0; //Começamos com a posição 0
    for(let indice in array){ //Percorremos o array
        if(array[maiorIndice] < array[indice]){ //Comparamos o valor das outras posições do array com o da posição 0
            maiorIndice = indice; //Substituimos o valor do maiorIndice pela posição onde está o maior valor
        }
    }
    return maiorIndice;
}
console.log(recebeInteiros(arrayValores));
divisorResultadosConsole();

//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

function recebeArray(array){
    let menorIndice = 0; //Começamos com a posição 0
    for(let indice in array){ //Percorremos o array
        if(array[menorIndice] > array[indice]){ //Comparamos o valor das outras posições do array com o da posição 0
            menorIndice = indice; //Substituimos o valor do menorIndice pela posição onde está o maior valor
        }
    }
    return menorIndice;
}

console.log(recebeArray(arrayValores));
divisorResultadosConsole();

//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let arrayTesteNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Alessandra', 'Joana']; 

function verificaNomes(arrayNomes){
    let maiorNomes = arrayNomes[0];
    for(let indice in arrayNomes){
        if(maiorNomes.split("").length < arrayNomes[indice].split('').length){
            maiorNomes = arrayNomes[indice];
        }
    }
    return maiorNomes;
}
console.log(verificaNomes(arrayTesteNomes));
divisorResultadosConsole();

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

let numero = 5;

function somatorio(n){
    let somaNumero = 0;
    if(n >=1){
        for(let index = 0; index <= n; index += 1){
            somaNumero = somaNumero + index;
        }
    }
    return somaNumero;
}
console.log("O fatorial de " + numero + " é " + somatorio(numero) + "!");

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . 
// Considere que a string ending sempre será menor que a string word .

let word = "trybe";
let ending = "be";

function verificaString(stringWord, stringEnding){
    let arrayWord = stringWord.split("");
    let arrayEnding = stringEnding.split("");
    let tamanhoArrayWord = arrayWord.length;
    let tamanhoArrayEnding = arrayEnding.length;
    if (tamanhoArrayEnding < tamanhoArrayWord){
        return true;
    } else {
        return false;
    }
}

let resultados = verificaString(word,ending);
console.log(resultados);