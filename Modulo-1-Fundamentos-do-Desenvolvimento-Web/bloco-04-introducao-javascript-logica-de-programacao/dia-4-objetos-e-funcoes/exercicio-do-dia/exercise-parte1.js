//Exercícios do dia
function divisaoResultadosConsole(){
    console.log("-----------------");
}
//Parte I - Objetos e For/In
//1 - Imprima no console uma mensagem de boas-vindas para a personagem, incluindo seu nome.

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

console.log("Boas-vindas, " + info.personagem);
divisaoResultadosConsole();

//2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

info.recorrente = "Sim";
console.table(info);
divisaoResultadosConsole();

//3 - Faça um for/in que mostre todas as chaves do objeto.

for(let key in info){
    console.log(key);
}
divisaoResultadosConsole();

//4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for(let key in info){
    console.log(info[key]);
}
divisaoResultadosConsole();

//5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

let infoDois = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim",
}

for(let key in info){
    let frase = info[key] + " e " + infoDois[key];
    if(info[key] === infoDois[key]){
        frase = "Ambos recorrentes";
    }
    console.log(frase);
}
divisaoResultadosConsole();

//6 - Acesse as chaves nome , sobrenome e titulo , que está dentro da chave livrosFavoritos , e faça um console.log no seguinte formato: 
//"O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

let fraseLeitor = "O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo;
console.log(fraseLeitor);

//7 - Adicione um novo livro favorito na chave livrosFavoritos , que é um array.

leitor.livrosFavoritos[1] = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}
console.table(leitor.livrosFavoritos);

//8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

let fraseLeitorDois = "Julia tem " + leitor.livrosFavoritos.length + " livros favoritos!";
console.log(fraseLeitorDois);