//Cookies, Session Storage e Local Storage

//Para criarmos um cookie devemos informar uma chave e um valor;
//Para que o cookie não seja deletado quando fecharmos o navegador, usamos uma data para expirar
//O parâmetro path indica ao navegador qual caminho o cookie pertence, neste caso a página atual.
let myCoockie = document.cookie = 'email=larissa@email.com; expires=Thu, 17 Dec 2022 12:00:00 UTC; path=/';
console.log(myCoockie);   

//Local Storage: salva os dados sem data de expiração! 
localStorage.setItem('name', 'Larissa'); //Usamos o set item para adicionar informações ao Local Storage
//As informações são inseridas como chave=Name e valor=Larissa
localStorage.setItem('lastname', 'Perinoto');
localStorage.removeItem('name'); //Remove as entradas da chave lastname
let nome = localStorage.getItem('name'); //Podemos buscar um valor no Local Storage pela chave
console.log(nome);
let storageSize = localStorage.length; //Retorna o valor do Local Storage
console.log(storageSize);
localStorage.clear(); //Remove todos os dados armazenados

//Session Storage: salva dados na seção atual, que são removidos quando o usuário fecha a aba.
sessionStorage.setItem('name', 'Larissa'); //Adiciona itens como chave e valor
sessionStorage.getItem('name'); //Busca itens pela chave
sessionStorage.removeItem('name'); //Apaga itens pela chave
sessionStorage.length; //Quantidade de dados armazenados
sessionStorage.clear(); //Limpar os dados armazenados

//Obs: os valores salvos no Local Storage e no Session Storage serão sempre no formato string.

const objeto = {
    firtName: 'Larissa',
    age: 26,
}

//Para adicionar ao storage, usamos uma função para transformar em string
localStorage.setItem('myData', JSON.stringify(objeto));

//Para transformarmos novamente no objeto original, com string e number, usamos outra função
let data = JSON.parse(localStorage.getItem('myData'));
console.log(data);