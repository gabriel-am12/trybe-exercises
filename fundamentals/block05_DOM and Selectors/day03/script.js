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
  //1
function monthdays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    const daysTag = document.querySelector('#days');
    for(let index = 0; index < dezDaysList.length; index += 1) {
        const days = dezDaysList[index];
        const dayListItem = document.createElement('li');
    
        if (days === 24 || days === 31) {
            dayListItem.className = 'day holiday';
            dayListItem.innerHTML = days;
            daysTag.appendChild(dayListItem);
        } else if (days === 4 || days === 11 || days === 18) {
            dayListItem.className = 'day friday';
            dayListItem.innerHTML = days;
            daysTag.appendChild(dayListItem);
        } else if (days === 25) {
            dayListItem.className = 'day holiday friday';
            dayListItem.innerHTML = days;
            daysTag.appendChild(dayListItem);
        } else {
            dayListItem.className = 'day';
            dayListItem.innerHTML = days;
            daysTag.appendChild(dayListItem);
        }
    };
};
monthdays();
//2
function createHolidayButton(string) {
    const holidayButton = document.createElement('button');
    holidayButton.innerHTML = string;
    holidayButton.id= 'btn-holiday';

    const buttonsContainerClass = document.querySelector('.buttons-container');
    buttonsContainerClass.appendChild(holidayButton);
};
createHolidayButton('Feriados');
//3
function changeHolidaysBC() {
    let getHolidayButtonId = document.querySelector('#btn-holiday');
    let getHolidaysClass = document.querySelectorAll('.holiday');
    let newBackgroundColor = 'rgb(238,238,238)';
    let stdColor = 'white';

    getHolidayButtonId.addEventListener('click',function() {
        for(let index = 0; index < getHolidaysClass.length; index += 1) {
            if(getHolidaysClass[index].style.backgroundColor === stdColor) {
                getHolidaysClass[index].style.backgroundColor = newBackgroundColor;
            } else {
                getHolidaysClass[index].style.backgroundColor = stdColor;
            }
        }
    })
};
changeHolidaysBC();
//4
function createFridayButton(string) {
    const fridayButton = document.createElement('button');
    fridayButton.innerHTML = string;
    fridayButton.id= 'btn-friday';

    const buttonsContainerClass = document.querySelector('.buttons-container');
    buttonsContainerClass.appendChild(fridayButton);
};
createFridayButton('Sexta-Feira');
//5
function changeFridaysBtn(array) {
    let getFridayButtonId = document.querySelector('#btn-friday');
    let getFridaysClass = document.querySelectorAll('.friday');
    let newText = "Sexta-Feira";

    getFridayButtonId.addEventListener('click',function() {
        for(let index = 0; index < getFridaysClass.length; index += 1) {
            if (getFridaysClass[index].innerHTML !== newText) {
                getFridaysClass[index].innerHTML = newText;
            } else {
                getFridaysClass[index].innerHTML = array[index];
            }
        }
    })
};
let arrayOfFridays = [4,11,18,25];
changeFridaysBtn(arrayOfFridays);
//6
function MouseonDay() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseover', function(event) {
        event.target.style.transform = 'scale(1.08)';
    })
};
function MouseoutDay() {
    let days = document.querySelector('#days');

    days.addEventListener('mouseout', function(event) {
        event.target.style.transform = 'scale(1.0)';
    })
};
MouseonDay();
MouseoutDay();
//7
function createTaskSpan(string) {
    const task = document.createElement('span');
    task.innerHTML = string;

    const myTasksClass = document.querySelector('.my-tasks');
    myTasksClass.appendChild(task);
}
createTaskSpan('cozinhar');
//8
function subtitleWithColor(string) {
    const newDivOfTask = document.createElement('div');
    newDivOfTask.className = 'task';
    newDivOfTask.style.backgroundColor = string;

    const myTasksClass = document.querySelector('.my-tasks');
    myTasksClass.appendChild(newDivOfTask);
}
subtitleWithColor('purple');
