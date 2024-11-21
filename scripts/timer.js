var totalTime = 0,
  pomodoroTime = 0,
  shortBTime = 0,
  longBTime = 0;

const showMessage = (message, isError = false) => {
  const messageBox = document.createElement("div");
  messageBox.textContent = message;
  messageBox.style.position = "fixed";
  messageBox.style.bottom = "10vh";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translateX(-50%)";
  messageBox.style.backgroundColor = isError ? "#f44336" : "#4caf50";
  messageBox.style.color = "white";
  messageBox.style.padding = "10px 20px";
  messageBox.style.borderRadius = "5px";
  messageBox.style.zIndex = "10000000";
  messageBox.style.fontSize = "18px";
  document.body.appendChild(messageBox);
  const soundFX = isError
    ? new Audio("../assets/Sound effects/error-message.mp3")
    : new Audio("../assets/Sound effects/happy-message.mp3");
  soundFX.play();
  setTimeout(() => {
    messageBox.remove();
  }, 3000);
};
function saveToLocalStorage() {
  localStorage.setItem("totalTime", totalTime);
  localStorage.setItem("pomodoroTime", pomodoroTime);
  localStorage.setItem("shortBTime", shortBTime);
  localStorage.setItem("longBTime", longBTime);
}

function loadFromLocalStorage() {
  totalTime = parseInt(localStorage.getItem("totalTime")) || 0;
  pomodoroTime = parseInt(localStorage.getItem("pomodoroTime")) || 0;
  shortBTime = parseInt(localStorage.getItem("shortBTime")) || 0;
  longBTime = parseInt(localStorage.getItem("longBTime")) || 0;
}

window.addEventListener("load", loadFromLocalStorage);
window.addEventListener("beforeunload", saveToLocalStorage);
let pomodoroTimer, shortBTimer, longBTimer;
let pomodoroTimeLeft = 0,
  shortBTimeLeft = 0,
  longBTimeLeft = 0;

const pomodoroMinutes = document.getElementById("pomodoro-minutes");
const shortBMinutes = document.getElementById("short-break-minutes");
const longBMinutes = document.getElementById("long-break-minutes");
const pomodoroSeconds = document.getElementById("pomodoro-seconds");
const shortBSeconds = document.getElementById("short-break-seconds");
const longBSeconds = document.getElementById("long-break-seconds");
const pomodoroStart = document.getElementById("start");
const pomodoroStop = document.getElementById("stop");
const shortBStart = document.getElementById("start-short");
const shortBStop = document.getElementById("stop-short");
const longBStart = document.getElementById("start-long");
const longBStop = document.getElementById("stop-long");

let pomodoroElapsedTime = 0,
  shortBElapsedTime = 0,
  longBElapsedTime = 0;

function validateInputs(minutes, seconds) {
  if (isNaN(minutes) || minutes < 0 || minutes > 180) {
    showMessage("Minutes must be between 0 and 180", true);
    return false;
  }
  if (isNaN(seconds) || seconds < 0 || seconds > 59) {
    showMessage("Seconds must be between 0 and 59", true);
    return false;
  }
  return true;
}

pomodoroStart.addEventListener("click", (e) => {
  e.preventDefault();
  const mins = parseInt(pomodoroMinutes.value, 10);
  const secs = parseInt(pomodoroSeconds.value, 10);
  if (!validateInputs(mins, secs)) return;
  pomodoroTimeLeft = mins * 60 + secs;
  pomodoroElapsedTime = pomodoroTimeLeft;

  toggleInputs(
    pomodoroStart,
    pomodoroStop,
    pomodoroMinutes,
    pomodoroSeconds,
    true
  );
  startTimer("pomodoro");
});

shortBStart.addEventListener("click", (e) => {
  e.preventDefault();
  const mins = parseInt(shortBMinutes.value, 10);
  const secs = parseInt(shortBSeconds.value, 10);
  if (!validateInputs(mins, secs)) return;
  shortBTimeLeft = mins * 60 + secs;
  shortBElapsedTime = shortBTimeLeft;

  toggleInputs(shortBStart, shortBStop, shortBMinutes, shortBSeconds, true);
  startTimer("shortb");
});

longBStart.addEventListener("click", (e) => {
  e.preventDefault();
  const mins = parseInt(longBMinutes.value, 10);
  const secs = parseInt(longBSeconds.value, 10);
  if (!validateInputs(mins, secs)) return;
  longBTimeLeft = mins * 60 + secs;
  longBElapsedTime = longBTimeLeft;

  toggleInputs(longBStart, longBStop, longBMinutes, longBSeconds, true);
  startTimer("longb");
});

pomodoroStop.addEventListener("click", (e) => {
  e.preventDefault();
  stopTimer(pomodoroTimer, "pomodoro");
  toggleInputs(
    pomodoroStart,
    pomodoroStop,
    pomodoroMinutes,
    pomodoroSeconds,
    false
  );
});

shortBStop.addEventListener("click", (e) => {
  e.preventDefault();
  stopTimer(shortBTimer, "shortb");
  toggleInputs(shortBStart, shortBStop, shortBMinutes, shortBSeconds, false);
});

longBStop.addEventListener("click", (e) => {
  e.preventDefault();
  stopTimer(longBTimer, "longb");
  toggleInputs(longBStart, longBStop, longBMinutes, longBSeconds, false);
});

function startTimer(timer) {
  let timerRef, timeLeft, minutesInput, secondsInput;

  if (timer === "pomodoro") {
    timerRef = pomodoroTimer;
    timeLeft = pomodoroTimeLeft;
    minutesInput = pomodoroMinutes;
    secondsInput = pomodoroSeconds;
    pomodoroElapsedTime = 0;
  } else if (timer === "shortb") {
    timerRef = shortBTimer;
    timeLeft = shortBTimeLeft;
    minutesInput = shortBMinutes;
    secondsInput = shortBSeconds;
    shortBElapsedTime = 0;
  } else {
    timerRef = longBTimer;
    timeLeft = longBTimeLeft;
    minutesInput = longBMinutes;
    secondsInput = longBSeconds;
    longBElapsedTime = 0;
  }

  toggleInputs(
    timer === "pomodoro"
      ? pomodoroStart
      : timer === "shortb"
      ? shortBStart
      : longBStart,
    timer === "pomodoro"
      ? pomodoroStop
      : timer === "shortb"
      ? shortBStop
      : longBStop,
    minutesInput,
    secondsInput,
    true
  );

  timerRef = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateTimerDisplay(minutesInput, secondsInput, timeLeft);

      if (timer === "pomodoro") {
        pomodoroElapsedTime++;
        pomodoroTime++;
      }
      if (timer === "shortb") {
        shortBElapsedTime++;
        shortBTime++;
      }
      if (timer === "longb") {
        longBElapsedTime++;
        longBTime++;
      }
    } else {
      clearInterval(timerRef);
      showMessage("Time's up!");
      toggleInputs(
        timer === "pomodoro"
          ? pomodoroStart
          : timer === "shortb"
          ? shortBStart
          : longBStart,
        timer === "pomodoro"
          ? pomodoroStop
          : timer === "shortb"
          ? shortBStop
          : longBStop,
        minutesInput,
        secondsInput,
        false
      );
    }
  }, 1000);

  if (timer === "pomodoro") pomodoroTimer = timerRef;
  if (timer === "shortb") shortBTimer = timerRef;
  if (timer === "longb") longBTimer = timerRef;
}

function stopTimer(timer, type) {
  clearInterval(timer);

  toggleInputs(
    type === "pomodoro"
      ? pomodoroStart
      : type === "shortb"
      ? shortBStart
      : longBStart,
    type === "pomodoro"
      ? pomodoroStop
      : type === "shortb"
      ? shortBStop
      : longBStop,
    type === "pomodoro"
      ? pomodoroMinutes
      : type === "shortb"
      ? shortBMinutes
      : longBMinutes,
    type === "pomodoro"
      ? pomodoroSeconds
      : type === "shortb"
      ? shortBSeconds
      : longBSeconds,
    false
  );
}

function toggleInputs(
  startButton,
  stopButton,
  minutesInput,
  secondsInput,
  disable
) {
  startButton.disabled = disable;
  stopButton.disabled = !disable;
  minutesInput.readOnly = disable;
  secondsInput.readOnly = disable;
}

function updateTimerDisplay(minutesInput, secondsInput, timeLeft) {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  minutesInput.value = String(minutes).padStart(2, "0");
  secondsInput.value = String(seconds).padStart(2, "0");
}

const rabs = document.querySelectorAll(".rab");
const rabContents = document.querySelectorAll(".rab-content");

rabs.forEach((rab) => {
  rab.addEventListener("click", () => {
    rabs.forEach((t) => t.classList.remove("active"));
    rabContents.forEach((tc) => tc.classList.remove("active"));
    rab.classList.add("active");
    document.getElementById(rab.dataset.target).classList.add("active");
  });
});
