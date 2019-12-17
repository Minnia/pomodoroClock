const MS_TO_MINUTE = 60000;
const getEndDate = minutes => new Date().getTime() + MS_TO_MINUTE * minutes;
const endDate = getEndDate(0.1);
let now = new Date();
let totalTimeRemaining = endDate - now;
let minutesRemaining = Math.floor(
  (totalTimeRemaining % (1000 * 60 * 60)) / (1000 * 60)
);

let secondsRemaining = Math.floor((totalTimeRemaining % (1000 * 60)) / 1000);

let timer = undefined;

function startTimer() {
  if (timer === undefined) {
    timer = setInterval(() => {
      let timesUp = totalTimeRemaining == 0;
      document.getElementById("paused").innerHTML = "";
      if (secondsRemaining === 0) {
        minutesRemaining--;
        secondsRemaining = 60;
      }

      if (totalTimeRemaining > 0) {
        minutesRemaining;
        secondsRemaining--;
        totalTimeRemaining = totalTimeRemaining - 1000;
        document.getElementById("timer-mins").innerHTML = minutesRemaining;
        document.getElementById("timer-secs").innerHTML = secondsRemaining;
      }
      if (timesUp) {
        pauseTimer();
      }
    }, 250);
  }
  return;
}

function addOneMinute() {
  minutesRemaining += 1;
}

function removeOneMinute() {
  minutesRemaining -= 1;
}

function pauseTimer() {
  document.getElementById("paused").innerHTML = "Paused";
  clearInterval(timer);
  timer = undefined;
}
