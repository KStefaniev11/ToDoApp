let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    list.innerHTML += `
      <li>
        <span class="${task.done ? 'done' : ''}" onclick="toggleTask(${index})">
          ${task.text}
        </span>
        <button onclick="deleteTask(${index})">❌</button>
      </li>
    `;
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value;

  if (text === "") return;

  tasks.push({ text: text, done: false });
  input.value = "";

  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTask(index) {
  tasks[index].done = !tasks[index].done;
  renderTasks();
}

renderTasks();