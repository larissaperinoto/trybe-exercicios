function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

  // Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

//Exercício 1
function createDays() {
  let createDayDaddy = document.getElementById('days');
  for(let day of dezDaysList) {
    let daysItem = document.createElement('li');
    
    if (day === 24 | day === 31 ) {
      daysItem.className = 'day holiday';
      daysItem.innerHTML = day;
      createDayDaddy.appendChild(daysItem);
    } else if (day === 4 | day === 11 | day === 18) {
      daysItem.className = 'day friday';
      daysItem.innerHTML = day;
      createDayDaddy.appendChild(daysItem);
    } else if (day === 25) {
      daysItem.className = 'day holiday friday';
      daysItem.innerHTML = day;
      createDayDaddy.appendChild(daysItem);
    } else {
      daysItem.className = 'day';
      daysItem.innerHTML = day;
      createDayDaddy.appendChild(daysItem);
    }
  }
}
createDays();

//Exercício 2
let containerButton = document.querySelector('.buttons-container');

function createButtonHoliday(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-holiday';
  containerButton.appendChild(button);
}
createButtonHoliday('Feriados');

//Exercício 3
function changeColorHoliday() {
  let buttonHoliday = document.getElementById('btn-holiday');
  let holidays = document.querySelectorAll('.holiday');

  buttonHoliday.addEventListener('click', function() {
   for (let index of holidays) {
      if (index.style.backgroundColor == 'orange') {
        index.style.backgroundColor = 'rgb(238,238,238)'
      } else {
        index.style.backgroundColor = 'orange'
      }
    }
  });
}
changeColorHoliday();

//Exercício 4
function createButtonFriday(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-friday';
  containerButton.appendChild(button);
}
createButtonFriday('Sexta-feira');

//Exercício 5
let fridayDays = [4, 11, 18, 25];

function changeTextFriday() {
  let buttonFriday = document.getElementById('btn-friday');
  let fridays = document.querySelectorAll('.friday');

  buttonFriday.addEventListener('click', function() {
   for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML !== 'Sextou') {
        fridays[index].innerHTML = 'Sextou';
      } else {
        fridays[index].innerHTML = fridayDays[index];
      }
    }
  });
}
changeTextFriday();

//Exercício 6
let getDay = document.getElementById('days');

function zoomEfect() {

  getDay.addEventListener('mouseover', function(event) {
  event.target.style.fontSize = '45px';
  });
}

function withoutZoom() {

  getDay.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });
}

zoomEfect();
withoutZoom();

//Exercício 7

function toDoList(tasks) {
  let toDoThings = document.querySelector('.my-tasks');
  let tasksSpan = document.createElement('span');
  tasksSpan.innerText = tasks;
  toDoThings.appendChild(tasksSpan);
};

toDoList('Exercícios do dia');

//Exercício 8
function colorLegend(string) {
  let toDoThings = document.querySelector('.my-tasks');
  let createDiv = document.createElement('div');
  createDiv.style.backgroundColor = string;
  createDiv.className = 'task';
  toDoThings.appendChild(createDiv);
}

colorLegend('orange');

//Exercício 9
/* function clickDiv() {
  let tagDiv = document.querySelector('task');
  tagDiv.addEventListener('click', function(){
    tagDiv.className = ''; 
  });
}

clickDiv(); */
