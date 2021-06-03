const appHours = document.querySelector("#hours-js");
const appMinutes = document.querySelector("#minutes-js");
const appSeconds = document.querySelector("#seconds-js");
const clockDate = document.querySelector("#clockDate-js");
let deg = 6;
let appDate = new Date().toLocaleDateString();

const appClock = () => {
  let time = new Date();
  let hours = time.getHours() * 30;
  let minutes = time.getMinutes() * deg;
  let seconds = time.getSeconds() * deg;

  appHours.style.transform = `rotation(${hours+(minutes/12)}deg)`;
  appMinutes.style.transform = `rotate(${minutes}deg)`
  appSeconds.style.transform = `rotate(${seconds}deg)`
clockDate.textContent = `${appDate}`
  console.log();
};

setInterval(appClock, 1000);
console.log(appDate)