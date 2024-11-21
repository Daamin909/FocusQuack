let tasks = [];

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("new-task");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");
  const addTaskButtonPomodoro = document.getElementById("AddTaskPomodoro");
  const addTaskInputPomodoro = document.getElementById("task-inputPomodoro");
  const taskCompleteSound = new Audio(
    "assets/Sound effects/taskComplete_fart.mp3"
  );
  const taskDeleteSound = new Audio(
    "assets/Sound effects/taskDelete_cancelled.mp3"
  );

  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
    renderTasks();
  }

  addTaskButton.addEventListener("click", () => DoAddTask("todo-list"));
  addTaskButtonPomodoro.addEventListener("click", () => {
    DoAddTask("pomodoro");
    editView("titleButtonTodo-list");
    addTaskInputPomodoro.value = "";
  });

  taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      DoAddTask("todo-list");
    }
  });

  addTaskInputPomodoro.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      DoAddTask("pomodoro");
      editView("titleButtonTodo-list");
      addTaskInputPomodoro.value = "";
    }
  });

  function DoAddTask(checker) {
    if (checker === "todo-list") {
      const taskText = taskInput.value.trim();
      if (taskText === "") return;
      addTask(taskText);
    } else if (checker === "pomodoro") {
      const taskText = addTaskInputPomodoro.value.trim();
      if (taskText === "") return;
      addTask(taskText);
      showSection("todo-list");
    }
  }

  function addTask(taskText) {
    const taskId = tasks.length + 1;
    tasks.push({ id: taskId, name: taskText, status: "todo" });
    const li = document.createElement("li");
    const taskSpan = document.createElement("div");
    taskSpan.textContent = taskText;
    taskSpan.title = taskText;
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", (e) => toggleComplete(e, taskId));
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (e) => deleteTask(e, taskId));
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);
    taskList.appendChild(li);
    taskInput.value = "";
    const added = new Audio("assets/Sound effects/taskAdded.mp3");
    added.play();
    saveTasks();
  }

  function deleteTask(e, taskId) {
    const task = e.target.closest("li");
    tasks = tasks.filter((t) => t.id !== taskId);
    task.remove();
    taskDeleteSound.play();
    saveTasks();
  }

  function toggleComplete(e, taskId) {
    const task = e.target.closest("li");
    const taskIndex = tasks.findIndex((t) => t.id === taskId);
    if (taskIndex > -1) {
      const taskStatus = tasks[taskIndex].status;
      tasks[taskIndex].status = taskStatus === "todo" ? "done" : "todo";
    }
    task.classList.toggle("completed");
    taskCompleteSound.play();
    saveTasks();
  }

  function renderTasks() {
    tasks.forEach((task) => {
      const li = document.createElement("li");
      const taskSpan = document.createElement("div");
      taskSpan.textContent = task.name;
      taskSpan.title = task.name;
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = task.status === "done";
      checkbox.addEventListener("change", (e) => toggleComplete(e, task.id));
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", (e) => deleteTask(e, task.id));
      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteButton);
      if (task.status === "done") {
        li.classList.add("completed");
      }
      taskList.appendChild(li);
    });
  }

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  window.addEventListener("beforeunload", saveTasks);
});
