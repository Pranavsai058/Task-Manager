const API_URL = "http://localhost:5000/api/tasks";

const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filterStatus = document.getElementById("filterStatus");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const statusInput = document.getElementById("status");

let allTasks = [];
let editingTaskId = null;

// Fetch tasks from backend
const fetchTasks = async () => {
  const res = await fetch(API_URL);
  allTasks = await res.json();
  applyFilter();
};

// Render tasks
const renderTasks = (tasks) => {
  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${task.title}</strong> (${task.status})
      <p>${task.description || ""}</p>
      <button onclick="editTask('${task._id}')">Edit</button>
      <button onclick="deleteTask('${task._id}')">Delete</button>
    `;

    taskList.appendChild(li);
  });
};

// Apply status filter
const applyFilter = () => {
  const filter = filterStatus.value;

  if (filter === "all") {
    renderTasks(allTasks);
  } else {
    renderTasks(allTasks.filter(t => t.status === filter));
  }
};

// Create or update task
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const taskData = {
    title: titleInput.value,
    description: descriptionInput.value,
    status: statusInput.value
  };

  if (editingTaskId) {
    await fetch(`${API_URL}/${editingTaskId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
    editingTaskId = null;
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taskData)
    });
  }

  taskForm.reset();
  fetchTasks();
});

// Edit task
const editTask = (id) => {
  const task = allTasks.find(t => t._id === id);
  if (!task) return;

  titleInput.value = task.title;
  descriptionInput.value = task.description || "";
  statusInput.value = task.status;

  editingTaskId = id;
};

// Delete task
const deleteTask = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
  fetchTasks();
};

// Filter change
filterStatus.addEventListener("change", applyFilter);

// Initial load
fetchTasks();
