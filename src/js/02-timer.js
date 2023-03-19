// Виконуй це завдання у файлах 02-timer.html і 02-timer.js. Напиши скрипт 
// таймера, який здійснює зворотний відлік до певної дати. Такий таймер може 
// використовуватися у блогах та інтернет-магазинах, сторінках реєстрації подій,
//  під час технічного обслуговування тощо. Подивися демо-відео роботи таймера.


import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
const dateTimeInputEl = document.querySelector('#datetime-picker');
const btnStartEl = document.querySelector('button[data-start]');
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';


// console.log(dateTimeInputEl);
// console.log(btnStartEl);
// console.log(dataDaysEl);
// console.log(dataHoursEl);
// console.log(dataNinutesEl);
// console.log(dataSecondsEl);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}







flatpickr('#datetime-picker', {
  enableTime: true,
  allowInput: true,
  dateFormat: "m/d/Y h:i K",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
});




let options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    

    let dateNum = selectedDates[0]-0;
    let curentDate = Date.now()
    // console.log(btnStartEl);
    // console.log(dateNum);
    // console.log(Date.now())
    // console.log(selectedDates[0]-0);

    if (selectedDates[0] < new Date()) {
      Notify.failure('Please choose a date in the future');
      return;
    }

    btnStartEl.addEventListener('click', onBtnClick);

    function onBtnClick(event) {
      event.preventDefault();
    
      console.log(`Вибраная дата: ${dateNum-0}`);
      // console.log(options.defaultDate-0);
      // console.log(`Текущая дата: ${curentDate-0}`);
      // console.log(dateDelta);
      let dateDelta = (dateNum - curentDate);
      // let { days, hours, minutes, seconds } = convertMs(dateDelta)
      console.log(`Разница дат: ${dateDelta-0}`);
      // console.log(`${pad(days)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);

      let intervalId = setInterval(() => {
      dateDelta = dateNum - Date.now();
      let { days, hours, minutes, seconds } = convertMs(dateDelta);

      if (dateDelta < 1) {
        clearInterval(intervalId);
      }
      // console.log(`${pad(days)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`)

      const dataDaysEl = document.querySelector('span[data-days]');
      dataDaysEl.innerHTML = days;
      const dataHoursEl = document.querySelector('span[data-hours]');
      dataHoursEl.innerHTML = hours;
      const dataNinutesEl = document.querySelector('span[data-minutes]');
      dataNinutesEl.innerHTML = minutes;
      const dataSecondsEl = document.querySelector('span[data-seconds]');
      dataSecondsEl.innerHTML = seconds;
    }, 1000);
   }
  },
};


flatpickr('#datetime-picker', { ...options });

// const dataDaysEl2 = document.querySelector('span[data-days]');
// console.log(dataDaysEl2.innerHTML);



// function pad(value) {
//   return String(value).padStart(2, '0');
// }




// dateTimeInputEl.addEventListener('input', onDateInput);
// function onDateInput(event) {
//   const sss = event.target.value;
//   // console.log(sss-0);
// }


// const curentDate = Date.now()
// const timer = {
//   start() {
//     const startTime = Date.now();
//     // console.log(startTime)
//       setInterval(() => {
//         const curentDate = Date.now();
//         // console.log(curentDate)
//         const deltaDate = curentDate - startTime;
//         const { days, hours, minutes, seconds } = convertMs(deltaDate);

//         console.log(`${pad(days)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`);
//         // console.log(convertMs(deltaDate));
//       }, 1000);
//   }
// }



// timer.start();
// console.log(timer.start);






