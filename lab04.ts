let tasks: string[] = [];
const taskInput = document.getElementById("input") as HTMLInputElement;
const addButton = document.getElementById("addbutton") as HTMLButtonElement;
const tasklist = document.getElementById("Tlist") as HTMLDivElement;

function addTask() {
    let newTask = taskInput.value;
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
}

function renderTasks() {
    tasklist.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let ptask = document.createElement("p");
        ptask.innerText = tasks[i]; 
        tasklist.appendChild(ptask);
    }
}

addButton.addEventListener("click", addTask);