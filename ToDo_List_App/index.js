let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
window.onload = () => {
  renderTasks();
};
function addTask(){
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task){
        tasks.push({task: task, done: false});
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    taskInput.value = "";
    console.log(tasks);
    renderTasks();
}

function renderTasks(){
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((item,index)=>{
        let taskItem = document.createElement("div");
        taskItem.className = "d-flex justify-content-between align-items-center p-2 border rounded mb-2";
        
        let text = document.createElement("span");
        text.className = "task-text";
        text.innerText = item.task;
        if (item.done){
            text.style.textDecoration = "line-through";
        }

        let btnContainer = document.createElement("div");

        let doneBtn = document.createElement("button");
        doneBtn.className = "btn btn-sm btn-success me-1";
        if (item.done){
            doneBtn.innerText = "Undone";
        } else{
            doneBtn.innerText = "Done";
        }
        
        doneBtn.onclick = ()=>{
            tasks[index].done = !tasks[index].done;
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
    
        let deleteBtn = document.createElement("button");
        deleteBtn.className = "btn btn-sm btn-danger";
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = ()=>{
            tasks.splice(index,1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            renderTasks();
        }
        btnContainer.appendChild(doneBtn);
        btnContainer.appendChild(deleteBtn);
        taskItem.appendChild(text);
        taskItem.appendChild(btnContainer);
        console.log(taskItem);
        taskList.appendChild(taskItem);
    })
}
