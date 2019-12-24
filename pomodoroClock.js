const MS_TO_MINUTE = 60000;
const getEndDate = minutes => new Date().getTime() + MS_TO_MINUTE * minutes;
const endDate = getEndDate(25);
let now = new Date();
let totalTimeRemaining = endDate - now;
const minutesRemaining = () =>
  Math.floor((totalTimeRemaining % (1000 * 60 * 60)) / (1000 * 60));

const secondsRemaining = () =>
  Math.floor((totalTimeRemaining % (1000 * 60)) / 1000);

let timer = undefined;

function startTimer() {
  if (timer === undefined) {
    timer = setInterval(() => {
      let timesUp = totalTimeRemaining == 0;
      document.getElementById("paused").innerHTML = "";

      if (totalTimeRemaining > 0) {
        totalTimeRemaining = totalTimeRemaining - 1000;
        document.getElementById("timer-mins").innerHTML = minutesRemaining();
        document.getElementById("timer-secs").innerHTML = secondsRemaining();
      }
      if (timesUp) {
        pauseTimer();
      }
    }, 1000);
  }
  return;
}

const addOneMinute = () => {
  totalTimeRemaining += MS_TO_MINUTE;
};

const removeOneMinute = () => {
  totalTimeRemaining -= MS_TO_MINUTE;
};

const pauseTimer = () => {
  document.getElementById("paused").innerHTML = "Paused";
  clearInterval(timer);
  timer = undefined;
};

const restartTimer = () => {
  clearInterval(timer);
  totalTimeRemaining = getEndDate(25) - new Date();
  timer = undefined;
  startTimer();
};
