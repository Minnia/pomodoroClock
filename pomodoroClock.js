const MS_TO_MINUTE = 60000;
const getEndDate = minutes => new Date().getTime() + MS_TO_MINUTE * minutes;
const endDate = getEndDate(25);
let now = new Date();
let totalTimeRemaining = endDate - now;
let minutesRemaining = Math.floor(
  (totalTimeRemaining % (1000 * 60 * 60)) / (1000 * 60)
);
let secondsRemaining = Math.floor((totalTimeRemaining % (1000 * 60)) / 1000);

const timer = setInterval(() => {
  if (secondsRemaining === 0) {
    minutesRemaining--;
    secondsRemaining = 60;
  }

  if (totalTimeRemaining >= 0) {
    minutesRemaining;
    secondsRemaining--;
    document.getElementById("timer-mins").innerHTML = (
      "0" + minutesRemaining
    ).slice(-2);

    document.getElementById("timer-secs").innerHTML = (
      "0" + secondsRemaining
    ).slice(-2);
  } else {
    document.getElementById("timer").innerHTML = "The countdown is over!";
  }
}, 1000);

function addOneMinute() {
  minutesRemaining += 1;
}
