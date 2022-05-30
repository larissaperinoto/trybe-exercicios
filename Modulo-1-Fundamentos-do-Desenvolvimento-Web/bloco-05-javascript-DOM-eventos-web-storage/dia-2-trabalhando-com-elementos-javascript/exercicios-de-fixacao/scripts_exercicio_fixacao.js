//Entendendo a diferença entre nextElementSibling e nextSibling
/* console.log(document.getElementById('start').nextSibling) // nó
console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p> */

//Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

//Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const pai = elementoOndeVoceEsta.parentElement;
pai.style.background = 'green';

//Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild ;
primeiroFilhoDoFilho.innerText = 'Adicionando texto ao primeiroFilhoDoFilho';

//Acesse o primeiroFilho a partir de pai.
const primeiroFilho = pai.firstElementChild;

//Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilhoDois = elementoOndeVoceEsta.previousElementSibling;

//Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
const atencao = elementoOndeVoceEsta.nextSibling;

//Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
const terceiroFilho = elementoOndeVoceEsta.nextElementSibling; 

//Agora acesse o terceiroFilho a partir de pai.
const terceiroFilhoDois = pai.lastElementChild.previousElementSibling; 

//Criando elementos HTML no JavaScript com o appendchild() e createElement();
//Crie um irmão para elementoOndeVoceEsta.
let irmaoElementoOndeVoceEsta = document.createElement('section'); //Criamos um elemento section
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta'; //Colocamos uma classe

pai.appendChild(irmaoElementoOndeVoceEsta); //Adicionamos ao HTML como filha do elemento pai

//Crie um filho para elementoOndeVoceEsta.
let filhoElementoOndeVoceEsta = document.createElement('section');
filhoElementoOndeVoceEsta.id = 'filhoElementoOndeVoceEsta';

elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

//Crie um filho para primeiroFilhoDoFilho.
let filhoDoPimeiroFilhoDoFilho = document.createElement('section');
filhoDoPimeiroFilhoDoFilho.id = 'filhoDoPimeiroFilhoDoFilho';

primeiroFilhoDoFilho.appendChild(filhoDoPimeiroFilhoDoFilho);

//A partir desse filho criado, acesse terceiroFilho .
const terceiroFilhoTres = filhoDoPimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling;


// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
    let comparaElementoId = pai.childNodes[index];

    if (comparaElementoId.id !== 'elementoOndeVoceEsta'){
        comparaElementoId.remove();
    }   
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();