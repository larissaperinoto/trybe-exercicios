const checkin = document.querySelector('.inputCheckin');  
const checkout = document.querySelector('.inputCheckout'); 
const bedroom = document.querySelectorAll('.bedroom'); 
const select = document.querySelector('.nPessoas'); 
const textArea = document.querySelector('.obs'); 
const btnSubmit = document.querySelector('#submit-btn');
const btnClear = document.querySelector('#clear-btn');
const ol = document.querySelector('ol');

function getQuarto(){
  for (let i = 0; i <bedroom.length; i++) {
    if (bedroom[i].checked) {
      return bedroom[i].value;
    }
  }
}

function getPessoas(){
  return select.options[select.selectedIndex].value;
}

function getData(value){ 
  const valueDate = value + 'T03:00:00.000Z'
  data = new Date(valueDate)
  dataFormatada = data.toLocaleDateString('pt-BR') ; 
  return dataFormatada;
}

function bookingFunc(event) {
  event.preventDefault();
  const li = document.createElement('li');
  const date = `Reserva para o dia  ${getData(checkin.value)} até o dia ${getData(checkout.value)}`;
  const room = ' - Quarto ' +  getQuarto() + ' para ' + getPessoas() + ' pessoas - ';
  const observation = 'Obs: ' + textArea.value;
  const booking = date + room + observation;
  li.textContent = booking;
  ol.appendChild(li);
  localStorage.setItem('bookings', JSON.stringify(ol.innerHTML));
}

function bookingReload() {
  const bookingReservation = JSON.parse(localStorage.getItem('bookings'));
  ol.innerHTML = bookingReservation;
}

function clearForms() {
  const bookings = document.querySelectorAll('li');
  for (let li = 0; li < bookings.length; li += 1) {
    bookings[li].remove();
    localStorage.removeItem('bookings');  
  }
}

btnSubmit.addEventListener('click', bookingFunc);
btnClear.addEventListener('click', clearForms);

window.onload = function () {
  bookingReload();
}