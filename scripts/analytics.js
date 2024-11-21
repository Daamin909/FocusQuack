var comparativeChart;

var paragraphWebsiteAnalysisVariable = `
        <strong>${0}</strong> Minutes on <strong>FocusQuack.</strong><br>
        <strong>${0}</strong> Minutes on <strong>Pomodoro.</strong> <br> 
        <strong>${0}</strong> Minutes on <strong>Short Breaks.</strong> <br>
        <strong>${0}</strong> Minutes on <strong>Long Breaks.</strong> <br>
        <br>
Just think about what you could have achieved with that time instead:
<ul>
    <li>Achieved <strong>${0}</strong> blinks</li>
    <li>Had your heart beat <strong>${0}</strong> times</li>
    <li>Burped <strong>${0}</strong> times</li>
    <li>Farted <strong>${0}</strong> times</li>
    <li>Checked your phone <strong>${0}</strong> times</li>
</ul>

Instead of dedicating yourself to such a tragically pointless endeavor, you could have been embracing the absurdity of life—perfecting the fine art of excessive farting.<br>
`;
setInterval(() => {
  totalTime++;
}, 1000);
function showAnalyticsSection(sectionId) {
  const sections = document.querySelectorAll(".analytics-content");
  sections.forEach((section) => {
    if (section.id === sectionId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });

  const tabs = document.querySelectorAll(".analytics-tab");
  tabs.forEach((tab) => {
    if (tab.id === sectionId + "-btn") {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  showAnalyticsSection("home-content");
  const summaryAnalysis = document
    .getElementById("comparativeChart")
    .getContext("2d");
  comparativeChart = new Chart(summaryAnalysis, {
    type: "bar",
    data: {
      labels: [
        "FocusQuack",
        "Pomodoro Time",
        "Short Break Time",
        "Long Break Time",
      ],
      datasets: [
        {
          label: "Time Spent (minutes)",
          data: [
            totalTime / 60,
            pomodoroTime / 60,
            shortBTime / 60,
            longBTime / 60,
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
  const paragraphWebsiteAnalysis = document.getElementById("time-analysis");
  paragraphWebsiteAnalysis.innerHTML = paragraphWebsiteAnalysisVariable;
  setInterval(() => {
    paragraphWebsiteAnalysisVariable = `
        <strong>${(totalTime / 60).toFixed(
          2
        )}</strong> Minutes on <strong>FocusQuack.</strong><br>
        <strong>${(pomodoroTime / 60).toFixed(
          2
        )}</strong> Minutes on <strong>Pomodoro.</strong> <br> 
        <strong>${(shortBTime / 60).toFixed(
          2
        )}</strong> Minutes on <strong>Short Breaks.</strong> <br>
        <strong>${(longBTime / 60).toFixed(
          2
        )}</strong> Minutes on <strong>Long Breaks.</strong> <br>
        <br>
Just think about what you could have achieved with that time instead:
<ul>        
    <li>Achieved <strong>${(0.33 * totalTime).toFixed(2)}</strong> blinks</li>
    <li>Had your heart beat <strong>${(1.33 * totalTime).toFixed(
      2
    )}</strong> times</li>
    <li>Burped <strong>${(0.00028 * totalTime).toFixed(2)}</strong> times</li>
    <li>Farted <strong>${(0.00028 * totalTime).toFixed(2)}</strong> times</li>
    <li>Checked your phone <strong>${(0.0117 * totalTime).toFixed(
      2
    )}</strong> times</li>
</ul>

Instead of dedicating yourself to such a tragically pointless endeavor, you could have been embracing the absurdity of life—perfecting the fine art of excessive farting.<br>
    `;
    paragraphWebsiteAnalysis.innerHTML = paragraphWebsiteAnalysisVariable;
  }, 5 * 1000);
});
const accordions = document.querySelectorAll(
  ".accordionHome, .accordionWebsite, .accordionPomodoro, .accordionShortBreak, .accordionLongBreak"
);
accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    let content = this.nextElementSibling;
    document
      .querySelectorAll(
        ".accordionHome, .accordionWebsite, .accordionPomodoro, .accordionShortBreak, .accordionLongBreak"
      )
      .forEach((item) => {
        if (item !== this) {
          item.classList.remove("active");
          let otherContent = item.nextElementSibling;
          if (otherContent) {
            otherContent.style.visibility = "hidden";
            otherContent.style.opacity = "0";
          }
        }
      });
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      content.style.visibility = "visible";
      content.style.opacity = "1";
    } else {
      content.style.visibility = "hidden";
      content.style.opacity = "0";
    }
  });
});
const defaultOpenAccordion = document.querySelector(".accordionHome");
if (defaultOpenAccordion) {
  defaultOpenAccordion.classList.add("active");
  let firstContent = defaultOpenAccordion.nextElementSibling;
  if (firstContent) {
    firstContent.style.visibility = "visible";
    firstContent.style.opacity = "1";
  }
}
setInterval(() => {
  comparativeChart.data.datasets[0].data = [
    totalTime / 60,
    pomodoroTime / 60,
    shortBTime / 60,
    longBTime / 60,
  ];
  comparativeChart.update();
}, 5 * 1000);
