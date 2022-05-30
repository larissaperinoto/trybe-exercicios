
//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault().
function button(event) {
  event.preventDefault();
  validationInput();
}

window.onload = function () {
  const buttonSend = document.querySelector('#send-btn');
  buttonSend.addEventListener('click', button);
  const buttonClear = document.querySelector('#clear-btn');
  buttonClear.addEventListener('click', clearInput);
  const agreement = document.querySelector('#promo');
  agreement.addEventListener('change', promotion);
}

function clearInput() { 
  const input = document.querySelectorAll('input');
  const textarea = document.querySelector('textarea');
  for (let enter of input) {
    enter.value = '';
    enter.checked = false;
    console.log('oi'  );
  }
  textarea.value = '';
}

function promotion() {
  const agreement = document.querySelector('#promo');
  const buttonSend = document.querySelector('#send-btn');
  buttonSend.disabled = !agreement.checked; //Se a propriedade estiver checked, o botão estará habilitado

}

function validationInput() { 
  const name = document.getElementById('inputName').value.length;
  const email = document.getElementById('inputEmail').value.length;
  const textarea = document.getElementById('answerText').value.length;
  if (name > 10 || name < 40) {
    alert ('Nome inválido!');
  }else if (email > 10 || email < 50) {
    alert ('E-mail inválido!');
  } else if (textarea > 500) {
    alert ('Texto inválidp!');
  } else {
    alert('Dados enviados com sucesso!');
  }
}