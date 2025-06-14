const prompt = require('prompt-sync')();


// ask time from user
let countDown = prompt("Enter the countdown time in seconds:");

const interval = setInterval(() => {
  if (countDown > 0) {
    console.log(countDown);
    countDown--;
  } else {
    console.log("Time's up!");
    clearInterval(interval);
  }
}, 1000);