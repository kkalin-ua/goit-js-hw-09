// Напиши скрипт, який після натискання кнопки «Start», раз на секунду змінює колір фону 
// <body> на випадкове значення, використовуючи інлайн стиль. Натисканням на кнопку 
// «Stop» зміна кольору фону повинна зупинятися.

// Враховуй, що на кнопку «Start» можна натиснути нескінченну кількість разів. 
// Зроби так, щоб доки зміна теми запущена, кнопка «Start» була неактивною (disabled).


const startBtnEl = document.querySelector('button[data-start]');
console.log(startBtnEl);

const stopBtnEl = document.querySelector('button[data-stop]');
console.log(stopBtnEl);
stopBtnEl.disabled = true;

startBtnEl.addEventListener('click', onStartBtnClick);

function onStartBtnClick (event) {
  
  document.body.style.background = getRandomHexColor();
  startBtnEl.disabled = true;
  stopBtnEl.disabled = false;

  let intervalId = setInterval(() => {
    document.body.style.background = getRandomHexColor();
  }, 1000);


  stopBtnEl.addEventListener('click', onStopBtnClick);

  function onStopBtnClick (event) {
    clearInterval(intervalId);
    startBtnEl.disabled = false;
    stopBtnEl.disabled = true;
  }
}


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
