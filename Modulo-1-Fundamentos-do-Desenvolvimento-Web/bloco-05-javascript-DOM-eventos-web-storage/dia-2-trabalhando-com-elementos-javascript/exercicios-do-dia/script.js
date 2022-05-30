//Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body.
let body = document.getElementsByTagName('body')[0];
let tagH1 = document.createElement('h1');
tagH1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(tagH1);

//Adicione a tag main com a classe main-content como filho da tag body.
let main = document.createElement('main');
main.className = 'main-content';
body.appendChild(main);

//Adicione a tag section com a classe center-content como filho da tag main criada no passo 2.
let sectionCenterContent = document.createElement('section');
sectionCenterContent.className = 'center-content';
main.appendChild(sectionCenterContent);

//Adicione a tag p como filho do section criado no passo 3 e coloque algum texto.
let p = document.createElement('p');
p.innerText = 'Este é um parágrafo';
sectionCenterContent.appendChild(p);

//Adicione a tag section com a classe left-content como filho da tag main criada no passo 2.
let sectionLeftContent = document.createElement('section');
sectionLeftContent.className = 'left-content';
main.appendChild(sectionLeftContent);

//Adicione a tag section com a classe right-content como filho da tag main criada no passo 2.
let sectionRightContent = document.createElement('section');
sectionRightContent.className = 'right-content';
main.appendChild(sectionRightContent);

//Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image.
//Esse elemento deve ser filho do section criado no passo 5.
let imgClassSmall = document.createElement('img');
imgClassSmall.src = 'https://picsum.photos/200';
sectionLeftContent.appendChild(imgClassSmall);

//Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. 
//Essa lista deve ser filha do section criado no passo 6.
let listNotOrden = document.createElement('ul'); //Criamos o elemento ul
let numbersList = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez'];

for (let index of numbersList){
    let createLi = document.createElement('li'); //Criamos cada li da lista ul
    createLi.innerHTML = index; //Atribuimos um valor para cada li
    listNotOrden.appendChild(createLi); 
}
sectionRightContent.appendChild(listNotOrden);

//Adicione 3 tags h3, todas sendo filhas do main criado no passo 2.
for (let index = 1; index <= 3; index += 1){
    let titleH3 = document.createElement('h3');
    titleH3.innerHTML = index;
    main.appendChild(titleH3);
}

//Agora que você criou muita coisa, vamos fazer algumas alterações e remoções:
//Adicione a classe title na tag h1 criada.
tagH1.className = 'title';

//Adicione a classe description nas 3 tags h3 criadas.
let titleh3Captura = document.getElementsByTagName('h3');

for (let index = 0; index < 3; index += 1) {
    titleh3Captura[index].className = 'description';
} 

//Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild().
const leftContetSection = document.getElementsByClassName('left-content')[0];
main.removeChild(leftContetSection);    

//Centralize a section criado no passo 6 (aquele que possui a classe right-content). 
//Dica: para centralizar, basta configurar o margin-right: auto da section ;
sectionRightContent.style.marginRight = 'auto';

//Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
main.style.background = 'green';

//Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
listNotOrden.lastChild.remove(); //Remove o último item da lista 'Dez'
listNotOrden.lastChild.remove(); //Agora o último item da lista é nove, e então removemos ele da mesma forma.

