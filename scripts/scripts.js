var currentSection;
document.addEventListener("DOMContentLoaded", function () {
  window.showSection = function (sectionId) {
    currentSection = sectionId;
    const sections = document.querySelectorAll(".tab-content");
    sections.forEach((section) => {
      if (section.id === sectionId) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
      if (section.id !== "todo-list") {
        vx = 2.5;
        vy = 3.5;
      }
    });
  };
  showSection("get-started");
});
const IDs = [
  "titleButtonHome",
  "titleButtonPomodoro",
  "titleButtonTodo-list",
  "titleButtonAnalytics",
];
function editView(elementIDButton) {
  var button = document.getElementById(elementIDButton);
  button.style.color = "#54976A";
  button.style.fontWeight = 900;
  for (x = 0; x < IDs.length; x++) {
    if (elementIDButton != IDs[x]) {
      var reChange = document.getElementById(IDs[x]);
      reChange.style.color = "black";
      reChange.style.fontWeight = "bold";
    }
  }
}
editView("titleButtonHome");

