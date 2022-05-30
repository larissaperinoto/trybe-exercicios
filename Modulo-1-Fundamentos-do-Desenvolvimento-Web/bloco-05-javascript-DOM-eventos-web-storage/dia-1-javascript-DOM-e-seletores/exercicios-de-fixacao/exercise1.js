//DOM

//Fixação - getElementByID
//1. Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerText = "Testando o getElementeByID no título";
//2. Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
const paragraph = document.getElementById("paragraph");
      paragraph.style.color = "purple";
let paragrafoDois = document.getElementById("second-paragraph");
    paragrafoDois.style.backgroundColor = "black";
    paragrafoDois.style.color = "white";

//3. Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Testando o getElementeByID no subtítulo";

//Fixação - getElementsByClassName
//Adicione uma classe igual para os dois parágrafos.
//Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
const alterarEstilo = document.getElementsByClassName("paragrafo")[0];
//Altere algum estilo do primeiro deles.
    alterarEstilo.style.backgroundColor = "blue";
    alterarEstilo.style.color = "black";
//5. Recupere o subtítulo e altere a cor dele usando a função getElementsByTagName .
const titulo = document.getElementsByTagName("h2")[0];
    titulo.style.color = "red";
