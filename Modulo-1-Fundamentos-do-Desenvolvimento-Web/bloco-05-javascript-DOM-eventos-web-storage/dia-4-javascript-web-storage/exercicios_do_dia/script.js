window.onload = function() {
    let body = document.getElementById('body');
    let paragraph = document.getElementById('paragraph');

//Cor de fundo
let changeBackgroundColor = document.querySelectorAll('.container_backgroundcolor button');
for (let button of changeBackgroundColor){
    button.addEventListener("click", function() {
        body.style.background = button.value;
        localStorage.setItem('backgroud-color', button.value);
    });
}
body.style.background = localStorage.getItem('backgroud-color');

//Tamanho da fonte
let changeFontSize = document.querySelectorAll('.container_fontsize button');
for (let button of changeFontSize){
    button.addEventListener("click", function() {
        paragraph.style.fontSize = button.textContent;
        localStorage.setItem('font-size', button.textContent);
    });
}
paragraph.style.fontSize = localStorage.getItem('font-size');

//Cor da fonte
let changeFontColor = document.querySelectorAll('.container_fontcolor button');
for (let button of changeFontColor){
    button.addEventListener("click", function() {
        body.style.color = button.value;
        localStorage.setItem('font-color', button.value);
    });
}
body.style.color = localStorage.getItem('font-color');

//Espaçamento do texto
let changeFontHeight = document.querySelectorAll('.container_fontheight button');
for (let button of changeFontHeight){
    button.addEventListener("click", function() {
        paragraph.style.lineHeight = button.textContent;
        localStorage.setItem('font-height', button.textContent);
    });
}
paragraph.style.lineHeight = localStorage.getItem('font-height');

//Mudar font family
let changeFontFamily = document.querySelectorAll('.container_fontfamily button');
for (let button of changeFontFamily){
    button.addEventListener("click", function() {
        body.style.fontFamily = button.textContent;
        localStorage.setItem('font-family', button.textContent);
    });
}
body.style.fontFamily = localStorage.getItem('font-family');

//Limpar formatação
let clearButton = document.querySelector('.clearButton');
clearButton.addEventListener('click', function(){
    localStorage.clear();
    body.style = null;
    paragraph.style = null;
});

}