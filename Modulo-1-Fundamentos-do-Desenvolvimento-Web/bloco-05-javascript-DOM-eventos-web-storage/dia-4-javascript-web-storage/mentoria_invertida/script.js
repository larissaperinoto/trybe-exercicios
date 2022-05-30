const number1 = document.getElementById('input1');
const number2 = document.getElementById('input2');
const output = document.querySelector('.resultado');

const soma = document.getElementById('buton_soma');
soma.addEventListener("click", function() {
   let resultado = parseInt(number1.value) + parseInt(number2.value);
   output.innerHTML = resultado;
});

const subtracao = document.getElementById('buton_subtacao');
subtracao.addEventListener("click", function() {
    let resultado = parseInt(number1.value) - parseInt(number2.value);
    output.innerHTML = resultado;
});

const divisao = document.getElementById('buton_divisao');
divisao.addEventListener("click", function() {
    let resultado = parseInt(number1.value) / parseInt(number2.value);
    output.innerHTML = resultado;
});

const multiplicacao = document.getElementById('buton_multiplicacao');
multiplicacao.addEventListener("click", function() {
    let resultado = parseInt(number1.value) * parseInt(number2.value);
    output.innerHTML = resultado;
});