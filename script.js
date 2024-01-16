"use strict";

const startButton = document.querySelector(".start-button");
const field = document.querySelector(".field");
const again = document.querySelector(".again");
const startScreen = document.querySelector(".start-screen");
const digit = document.querySelectorAll(".digit");
let values = [];
let j = 0;
const timer = document.querySelector(".timer");
let win = 0;
const winScreen = document.querySelector(".win-screen");
let min;
let seconds;
let timer2;
// let time1
// let time2
const reference = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
];

let random = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // Максимум и минимум включаются
};

const start = function () {
  (startScreen.style.opacity = 0), (startScreen.style.zIndex = -1);
  field.style.opacity = 1;
  field.style.zIndex = 1;
  generation()}

const generation = function () {
  for (let i = 1; i <= 16; i++) {
    while (values.length < 16) {
      let a = random(1, 16);
      if (!values.includes(a)) {
        values.push(a);
      }
    }
    digit[i - 1].textContent = values[i - 1];
    digit[i - 1].style.backgroundColor = 'gray'
  }
  // time1 = new Date()
  // setInterval ( () => {
  //   time2 = new Date
  //   timer.textContent = time2.getSeconds - time1.getSeconds
  // }, 1000)
  countdown();
}


const game = function () {
  for (let i = 0; i < 16; i++) {
    digit[i].addEventListener("click", () => {
      
      console.log(digit[i].textContent, reference[j], win + 1);
      (digit[i].textContent === reference[j]
        ? ((digit[i].style.backgroundColor = "green"),
          j++,
          win++)
        : ((digit[i].style.backgroundColor = "red"),
          setTimeout(() => {
            digit[i].style.backgroundColor = "gray";
          }, 100))) 
      if (win === 16) {
        winScreen.style.opacity = 1;
        winScreen.style.zIndex = 2
        winScreen.textContent = `Победа! Твоё время ${min}:${seconds}`;
        clearInterval(timer2);
        j = 0
        win = 0
      }}
     )
    }
};

// if (win === 2) {
//   winScreen.style.opacity = 1;
//   winScreen.style.zIndex = 2
//   winScreen.textContent = `Победа! Твоё время ${min}:${seconds}`
//   clearInterval(countdown);
// }

function countdown() {
  let time = 0;

  function tick() {
    min = String(Math.trunc(time / 60)).padStart(2, 0);
    seconds = String(time % 60).padStart(2, 0);

    timer.textContent = `${min}:${seconds}`;

    // if (time == 0) {
    //   clearInterval(timer);
    //   containerApp.style.opacity = 0;
    // }
    time++;
  }

  tick();
  timer2 = setInterval(tick, 1000);
  //return timer2;
}

startButton.addEventListener("click", () => start(), game());
again.addEventListener("click", () => {
  values = [];
  //j = 0;
  //win = 0;
  // min;
  // seconds;
  // timer2;
  clearInterval(timer2);
  location.reload()
  //start();
  generation()
  game()
});
