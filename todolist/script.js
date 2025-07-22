let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskName = input.value.trim();

  if (!taskName) return;

  const task = {
    id: Date.now(),
    name: taskName,
    completed: false
  };

  tasks.push(task);
  saveTasks();
  listTasks();
  console.log(`✅ Task added: "${taskName}"`);
  input.value = "";
}

function listTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = task.completed ? "completed" : "";
    li.innerHTML = `
      ${task.name}
      <div class="action-buttons">
        <button class="complete-btn" onclick="markCompleted(${task.id})">✅</button>
        <button class="delete-btn" onclick="removeTask(${task.id})">🗑️</button>
      </div>
    `;
    list.appendChild(li);
  });
}

function removeTask(taskId) {
  const index = tasks.findIndex(t => t.id === taskId);

  if (index !== -1) {
    console.log(`🗑️ Task removed: "${tasks[index].name}"`);
    tasks.splice(index, 1);
    saveTasks();
    listTasks();
  } else {
    console.log("⚠️ Task not found.");
  }
}

function markCompleted(taskId) {
  const task = tasks.find(t => t.id === taskId);

  if (task) {
    task.completed = true;
    console.log(`🎉 Task marked as completed: "${task.name}"`);
    saveTasks();
    listTasks();
  }
}

// Load existing tasks on page load
document.addEventListener("DOMContentLoaded", listTasks);
