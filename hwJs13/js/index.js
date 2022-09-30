const images = document.querySelectorAll(".image-to-show");
const stopP = document.querySelector(".stop");
const start = document.querySelector(".start");
const timer = document.querySelector(".timer");

let second = +(3.0).toFixed(2);
let position = 1;
let imgTimerIID = setInterval(showImg, 3000);
let stopWatchID = setInterval(stopWatch, 10);

function showImg() {
  images.forEach((element, index) => {
    element.classList.add("hidden");
    element.classList.remove("show");
    if (index === position) {
      element.classList.remove("hidden");
      element.classList.add("show");
    }
  });
  if (position < images.length - 1) {
    position++;
  } else position = 0;
}

function stopWatch() {
  timer.innerHTML = second.toFixed(2);
  if (second < 0) {
    second = +(3.0).toFixed(2);
  }
  second -= 0.01;
}

stopP.addEventListener("click", (e) => {
  clearInterval(imgTimerIID);
  clearInterval(stopWatchID);
});

start.addEventListener("click", (e) => {
  imgTimerIID = setInterval(showImg, 3000);
  stopWatchID = setInterval(stopWatch, 10);
});

// Опишіть своїми словами різницю між функціями setTimeout() і setInterval()`.
// setTimeout() дозволяє визвати функцію один раз через деякий час
// setInterval() дозволяє викликати функцію багато разів , через різний часовий термін
// Що станеться, якщо в функцію setTimeout() передати нульову затримку? Чи спрацює вона миттєво і чому?
// функція планується до запуску “відразу після” поточного скрипту.
// тобто якщо в нас у коді буде алерт , то спочатку вийде алерт а тільки після цього буде виконаний 0 сеттайм
// Чому важливо не забувати викликати функцію clearInterval(), коли раніше створений цикл запуску вам вже не потрібен?
// clearInterval() зупиняє подальше виконання функції.
