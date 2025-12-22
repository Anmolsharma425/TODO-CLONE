const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = taskText;
    span.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const actions = document.createElement("div");
    actions.className = "actions";

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.className = "edit";
    editBtn.addEventListener("click", () => editTask(span));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete";
    deleteBtn.addEventListener("click", () => li.remove());

    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(span);
    li.appendChild(actions);
    taskList.appendChild(li);

    taskInput.value = "";
}

function editTask(taskSpan) {
    const updatedTask = prompt("Edit task", taskSpan.textContent);
    if (updatedTask !== null && updatedTask.trim() !== "") {
        taskSpan.textContent = updatedTask.trim();
    }
}
