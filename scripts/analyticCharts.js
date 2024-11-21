var longBreakChart, pomodoroChart, timeSpentChart, shortBreakChart;
document.addEventListener("DOMContentLoaded", () => {
  const longBreakAnalysis = document
    .getElementById("longBreakChart")
    .getContext("2d");
  longBreakChart = new Chart(longBreakAnalysis, {
    type: "bar",
    data: {
      labels: [
        "Compiled Code",
        "Write Comment",
        "API Requests",
        "Think with your Butt",
      ],
      datasets: [
        {
          label: `You could've done this..`,
          data: [
            (longBTime / 60) * 1.5,
            (longBTime / 60) * 7,
            (longBTime / 60) * 300,
            (longBTime / 60) * 0,
          ],
          backgroundColor: ["#000000", "#000000", "#000000", "#000000"],
          borderColor: ["white", "white", "white", "white"],
          borderWidth: 2,
          borderRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "black",
            font: {
              size: 18,
              weight: "normal",
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  var paragraphLongBreakAnalysis = document.getElementById(
    "long-break-analysis"
  );
  paragraphLongBreakAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Long Breaks : <strong>${
      0 * 60000
    }</strong><br>
    <strong>Seconds</strong> spent during Long Breaks : <strong>${
      0 * 60
    }</strong> <br>
    <strong>Minutes</strong> spent during Long Breaks : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Long Breaks : <strong>${
      0 / 60
    }</strong> <br>
    <strong>Days</strong> spent during Long Breaks : <strong>${
      0 / (60 * 24)
    }</strong><br>
    <strong>Weeks</strong> spent during Long Breaks : <strong>${
      0 / (60 * 24 * 7)
    }</strong><br>
    <strong>Months</strong> spent during Long Breaks : <strong>${
      0 / (60 * 24 * 7 * 30)
    }</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Compiled code<strong> ${50 * 0}</strong> times.</li>
        <li>Wrote <strong>${8 * 0}</strong> comments.</li>
        <li><strong>${40 * 0}</strong> API requests to get fulfilled.</li>
        <li>Think using your butt <strong>${0 * 0}</strong> times.</li>
    </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
  setInterval(() => {
    longBreakChart.data.datasets[0].data = [
      (longBTime / 60) * 1.5,
      (longBTime / 60) * 7,
      (longBTime / 60) * 300,
      (longBTime / 60) * 0,
    ];
    longBreakChart.update();
    paragraphLongBreakAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Long Breaks : <strong>${
          (longBTime / 60) * 60000
        }</strong><br>
        <strong>Seconds</strong> spent during Long Breaks : <strong>${
          (longBTime / 60) * 60
        }</strong> <br>
        <strong>Minutes</strong> spent during Long Breaks : <strong>${
          longBTime / 60
        }</strong> <br>
        <strong>Hours</strong> spent during Long Breaks : <strong>${
          longBTime / 60 / 60
        }</strong> <br>
        <strong>Days</strong> spent during Long Breaks : <strong>${
          longBTime / 60 / (60 * 24)
        }</strong><br>
        <strong>Weeks</strong> spent during Long Breaks : <strong>${
          longBTime / 60 / (60 * 24 * 7)
        }</strong><br>
        <strong>Months</strong> spent during Long Breaks : <strong>${
          longBTime / 60 / (60 * 24 * 7 * 30)
        }</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Compiled code<strong> ${(1.5 * longBTime) / 60}</strong> times.</li>
        <li>Wrote <strong>${(7 * longBTime) / 60}</strong> comments.</li>
        <li><strong>${
          (300 * longBTime) / 60
        }</strong> API requests to get fulfilled.</li>
        <li>Think using your butt <strong>${0 * 0}</strong> times.</li>
    </ul>
        
        Instead of taking a break after you spent a <strong>LONG</strong> time doing productive work, you could've been doing sending API requests or something.`;
  }, 5 * 1000);
});
document.addEventListener("DOMContentLoaded", () => {
  const pomodoroAnalysis = document
    .getElementById("pomodoroChart")
    .getContext("2d");
  pomodoroChart = new Chart(pomodoroAnalysis, {
    type: "bar",
    data: {
      labels: [
        "Peel Bananas",
        "Crack Eggs",
        "Make sandwiches",
        "Digest using Foot",
      ],
      datasets: [
        {
          label: `You could've done this..`,
          data: [
            (pomodoroTime / 60) * 50,
            (pomodoroTime / 60) * 8,
            (pomodoroTime / 60) * 40,
            (pomodoroTime / 60) * 0,
          ],
          backgroundColor: ["#000000", "#000000", "#000000", "#000000"],
          borderColor: ["white", "white", "white", "white"],
          borderWidth: 2,
          borderRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "black",
            font: {
              size: 18,
              weight: "normal",
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  var paragraphPomodoroAnalysis = document.getElementById("pomodoro-analysis");
  paragraphPomodoroAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Pomodoro : <strong>${
      0 * 60000
    }</strong><br>
    <strong>Seconds</strong> spent during Pomodoro : <strong>${
      0 * 60
    }</strong> <br>
    <strong>Minutes</strong> spent during Pomodoro : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Pomodoro : <strong>${
      0 / 60
    }</strong> <br>
    <strong>Days</strong> spent during Pomodoro : <strong>${
      0 / (60 * 24)
    }</strong><br>
    <strong>Weeks</strong> spent during Pomodoro : <strong>${
      0 / (60 * 24 * 7)
    }</strong><br>
    <strong>Months</strong> spent during Pomodoro : <strong>${
      0 / (60 * 24 * 7 * 30)
    }</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
        <ul>        
            <li>Peeled a Banana <strong>${0}</strong> times.</li>
            <li>Crack <strong>${0}</strong> eggs.</li>
            <li>Make <strong>${0}</strong> sandwiches.</li>
            <li>Digest using your foot <strong>${0}</strong> times.</li>
        </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
  setInterval(() => {
    pomodoroChart.data.datasets[0].data = [
      (pomodoroTime / 60) * 15,
      (pomodoroTime / 60) * 23,
      (pomodoroTime / 60) * 7,
      (pomodoroTime / 60) * 0,
    ];
    pomodoroChart.update();
    paragraphPomodoroAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Pomodoro : <strong>${
          (pomodoroTime / 60) * 60000
        }</strong><br>
        <strong>Seconds</strong> spent during Pomodoro : <strong>${
          (pomodoroTime / 60) * 60
        }</strong> <br>
        <strong>Minutes</strong> spent during Pomodoro : <strong>${
          pomodoroTime / 60
        }</strong> <br>
        <strong>Hours</strong> spent during Pomodoro : <strong>${
          pomodoroTime / 60 / 60
        }</strong> <br>
        <strong>Days</strong> spent during Pomodoro : <strong>${
          pomodoroTime / 60 / (60 * 24)
        }</strong><br>
        <strong>Weeks</strong> spent during Pomodoro : <strong>${
          pomodoroTime / 60 / (60 * 24 * 7)
        }</strong><br>
        <strong>Months</strong> spent during Pomodoro : <strong>${
          pomodoroTime / 60 / (60 * 24 * 7 * 30)
        }</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
        <ul>        
            <li>Peeled a Banana <strong>${((15 * pomodoroTime) / 60).toFixed(
              1
            )}</strong> times.</li>
            <li>Crack <strong>${((23 * pomodoroTime) / 60).toFixed(
              1
            )}</strong> eggs.</li>
            <li>Make <strong>${((7 * pomodoroTime) / 60).toFixed(
              1
            )}</strong> sandwiches.</li>
            <li>Digest using your foot <strong>${(
              (0 * pomodoroTime) /
              60
            ).toFixed(1)}</strong> times.</li>
        </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
  }, 5 * 1000);
});
document.addEventListener("DOMContentLoaded", () => {
  const shortBreakAnalysis = document
    .getElementById("shortBreakChart")
    .getContext("2d");
  shortBreakChart = new Chart(shortBreakAnalysis, {
    type: "bar",
    data: {
      labels: ["Flush toilet", "Shower", "Wash hands", "Walk using Lungs"],
      datasets: [
        {
          label: `You could've done this..`,
          data: [
            (shortBTime / 60) * 3,
            (shortBTime / 60) * 0.33,
            (shortBTime / 60) * 4,
            (shortBTime / 60) * 0,
          ],
          backgroundColor: ["#000000", "#000000", "#000000", "#000000"],
          borderColor: ["white", "white", "white", "white"],
          borderWidth: 2,
          borderRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "black",
            font: {
              size: 18,
              weight: "normal",
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  var paragraphShortBreakAnalysis = document.getElementById(
    "short-break-analysis"
  );
  paragraphShortBreakAnalysis.innerHTML = `
    <strong>Miliseconds</strong> spent during Short Breaks : <strong>${
      0 * 60000
    }</strong><br>
    <strong>Seconds</strong> spent during Short Breaks : <strong>${
      0 * 60
    }</strong> <br>
    <strong>Minutes</strong> spent during Short Breaks : <strong>${0}</strong> <br>
    <strong>Hours</strong> spent during Short Breaks : <strong>${
      0 / 60
    }</strong> <br>
    <strong>Days</strong> spent during Short Breaks : <strong>${
      0 / (60 * 24)
    }</strong><br>
    <strong>Weeks</strong> spent during Short Breaks : <strong>${
      0 / (60 * 24 * 7)
    }</strong><br>
    <strong>Months</strong> spent during Short Breaks : <strong>${
      0 / (60 * 24 * 7 * 30)
    }</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Flush a toilet<strong> ${50 * 0}</strong> times..</li>
        <li>Take a shower <strong>${8 * 0}</strong> times.</li>
        <li>Wash your hands <strong>${40 * 0}</strong> times.</li>
        <li>Walk using your Lungs <strong>${0 * 0}</strong> times.</li>
    </ul>
    
    Instead of taking a small break after being productive and doing something with your life, you could've been doing these <strong>GREAT</strong> tasks.`;
  setInterval(() => {
    shortBreakChart.data.datasets[0].data = [
      (shortBTime / 60) * 3,
      (shortBTime / 60) * 0.33,
      (shortBTime / 60) * 4,
      (shortBTime / 60) * 0,
    ];
    shortBreakChart.update();
    paragraphShortBreakAnalysis.innerHTML = `
        <strong>Miliseconds</strong> spent during Short Breaks : <strong>${
          (shortBTime / 60) * 60000
        }</strong><br>
        <strong>Seconds</strong> spent during Short Breaks : <strong>${
          (shortBTime / 60) * 60
        }</strong> <br>
        <strong>Minutes</strong> spent during Short Breaks : <strong>${
          shortBTime / 60
        }</strong> <br>
        <strong>Hours</strong> spent during Short Breaks : <strong>${
          shortBTime / 60 / 60
        }</strong> <br>
        <strong>Days</strong> spent during Short Breaks : <strong>${
          shortBTime / 60 / (60 * 24)
        }</strong><br>
        <strong>Weeks</strong> spent during Short Breaks : <strong>${
          shortBTime / 60 / (60 * 24 * 7)
        }</strong><br>
        <strong>Months</strong> spent during Short Breaks : <strong>${
          shortBTime / 60 / (60 * 24 * 7 * 30)
        }</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
    <ul>        
        <li>Flush a toilet<strong> ${
          (3 * shortBTime) / 60
        }</strong> times..</li>
        <li>Take a shower <strong>${
          (0.33 * shortBTime) / 60
        }</strong> times.</li>
        <li>Wash your hands <strong>${
          (4 * shortBTime) / 60
        }</strong> times.</li>
        <li>Walk using your Lungs <strong>${0}</strong> times.</li>
    </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
  }, 5 * 1000);
});
document.addEventListener("DOMContentLoaded", () => {
  const timeSpentAnalysis = document
    .getElementById("timeSpentChart")
    .getContext("2d");
  timeSpentChart = new Chart(timeSpentAnalysis, {
    type: "bar",
    data: {
      labels: [
        "Type words",
        "Do Push Ups",
        "Eyebrow Raises",
        "Breath using Eyes",
      ],
      datasets: [
        {
          label: `You could've done this..`,
          data: [
            (totalTime / 60) * 50,
            (totalTime / 60) * 8,
            (totalTime / 60) * 40,
            (totalTime / 60) * 0,
          ],
          backgroundColor: ["#000000", "#000000", "#000000", "#000000"],
          borderColor: ["white", "white", "white", "white"],
          borderWidth: 2,
          borderRadius: 10,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "black",
            font: {
              size: 18,
              weight: "normal",
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
  var paragraphTimeSpentAnalysis = document.getElementById(
    "time-spent-analysis"
  );
  paragraphTimeSpentAnalysis.innerHTML = `
    <strong>Miliseconds</strong> on FocusQuack : <strong>${
      0 * 60000
    }</strong><br>
    <strong>Seconds</strong> on FocusQuack : <strong>${0 * 60}</strong> <br>
    <strong>Minutes</strong> on FocusQuack : <strong>${0}</strong> <br>
    <strong>Hours</strong> on FocusQuack : <strong>${0 / 60}</strong> <br>
    <strong>Days</strong> on FocusQuack : <strong>${0 / (60 * 24)}</strong><br>
    <strong>Weeks</strong> on FocusQuack : <strong>${
      0 / (60 * 24 * 7)
    }</strong><br>
    <strong>Months</strong> on FocusQuack : <strong>${
      0 / (60 * 24 * 7 * 30)
    }</strong> <br>
            <br>
    Just think about what you could have achieved with that time instead:
    <ul>        
        <li>You could've typed<strong> ${50 * 0}</strong> words.</li>
        <li>Done <strong>${8 * 0}</strong> push ups.</li>
        <li>Raised your eyebrow <strong>${40 * 0}</strong> times.</li>
        <li>Breathe using your eye <strong>${0 * 0}</strong> times.</li>
    </ul>
    
    Instead of being productive and doing something with your life, you could've been doing these things.`;
  setInterval(() => {
    timeSpentChart.data.datasets[0].data = [
      (totalTime / 60) * 50,
      (totalTime / 60) * 8,
      (totalTime / 60) * 40,
      (totalTime / 60) * 0,
    ];
    timeSpentChart.update();
    paragraphTimeSpentAnalysis.innerHTML = `
        <strong>Miliseconds</strong> on FocusQuack : <strong>${
          (totalTime / 60) * 60000
        }</strong><br>
        <strong>Seconds</strong> on FocusQuack : <strong>${
          (totalTime / 60) * 60
        }</strong> <br>
        <strong>Minutes</strong> on FocusQuack : <strong>${
          totalTime / 60
        }</strong> <br>
        <strong>Hours</strong> on FocusQuack : <strong>${
          totalTime / 60 / 60
        }</strong> <br>
        <strong>Days</strong> on FocusQuack : <strong>${
          totalTime / 60 / (60 * 24)
        }</strong><br>
        <strong>Weeks</strong> on FocusQuack : <strong>${
          totalTime / 60 / (60 * 24 * 7)
        }</strong><br>
        <strong>Months</strong> on FocusQuack : <strong>${
          totalTime / 60 / (60 * 24 * 7 * 30)
        }</strong> <br>
                <br>
        Just think about what you could have achieved with that time instead:
        <ul>        
            <li>You could've typed<strong> ${((50 * totalTime) / 60).toFixed(
              1
            )}</strong> words.</li>
            <li>Done <strong>${((8 * totalTime) / 60).toFixed(
              1
            )}</strong> push ups.</li>
            <li>Raised your eyebrow <strong>${((40 * totalTime) / 60).toFixed(
              1
            )}</strong> times.</li>
            <li>Breathe using your eye <strong>${((0 * totalTime) / 60).toFixed(
              1
            )}</strong> times.</li>
        </ul>
        
        Instead of being productive and doing something with your life, you could've been doing these things.`;
  }, 5 * 1000);
});
