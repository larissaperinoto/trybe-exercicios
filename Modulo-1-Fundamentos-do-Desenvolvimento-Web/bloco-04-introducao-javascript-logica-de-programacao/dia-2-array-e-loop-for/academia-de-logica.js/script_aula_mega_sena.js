// Exercício realizado durante a aula ao vivo. 
// Sorteando números na mega sena

//Algoritmo:
// Sortear 6 números entre 0 a 60
// Escolher outros 6 números que seriam a escolha do jogador, também entre 0 e 60
// Comparar se os números são iguais
// Informar ao jogador se ele ganhou ou não

// Realizando o jogo

let jogoLarissa = [19, 24, 33, 17, 9, 51]; //Números escolhidos pelo jogador
let sorteioMegaSena = []; //Array para os números sorteados
let acertos = 0; //Contador de acertos
let numerosIguais = []; //Números iguais


for(let loteria = 0; loteria < 6; loteria = loteria + 1){
    sorteioMegaSena.push(Math.floor(Math.random() * 61)); // Sorteando 6 números aleatórios na loteria
    for(let index = 0; index < (sorteioMegaSena.length -1); index = index + 1){
        if(sorteioMegaSena[loteria] === sorteioMegaSena[index]){ //Sorteando novamente os números repetidos
            sorteioMegaSena[loteria] = (Math.floor(Math.random() * 61)); 
        }    
    }
    for(let contador = 0; contador < jogoLarissa.length; contador = contador + 1){ //Percorrendo o array do jogo
        if (jogoLarissa[contador] === sorteioMegaSena[loteria]){ //Comparando os dois arrays
            acertos = acertos + 1;
            numerosIguais.push(jogoLarissa[contador]);
        }
    }
}

console.log("Jogo da Larissa: " + jogoLarissa);
console.log("Números sorteados na Mega: " + sorteioMegaSena);
console.log("Você teve " + acertos + " acertos!");
console.log(numerosIguais);