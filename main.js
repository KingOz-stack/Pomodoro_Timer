const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");
const timeInput = document.getElementById("time-input");
const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");

let totalSeconds = 0;
let timerInterval;

function startTimer() {
  if (timerInterval) clearInterval(timerInterval);

  const inputMinutes = parseInt(timeInput.value, 10);

  if (isNaN(inputMinutes) || inputMinutes <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  totalSeconds = inputMinutes * 60;

  timerInterval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(timerInterval);
      alert("Time's up!");
      return;
    }

    totalSeconds--;
    updateTimerDisplay();
  }, 1000);

  updateTimerDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minutesDisplay.textContent = String(minutes).padStart(2, "0");
  secondsDisplay.textContent = String(seconds).padStart(2, "0");
}

function resetTimer() {
  clearInterval(timerInterval);
  totalSeconds = 0;
  minutesDisplay.textContent = "00";
  secondsDisplay.textContent = "00";
  timeInput.value = "";
}

startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
