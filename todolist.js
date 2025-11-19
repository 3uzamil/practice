const title = document.getElementById('title');
const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


// Function for adding task
addBtn.addEventListener('click',()=>{
    const taskText = input.value.trim();

    if(taskText === ""){
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement('li');
    li.textContent = taskText;
    todoList.appendChild(li);
    input.value = "";
    input.focus();

});

// Function for complete task
todoList.addEventListener('click',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.classList.toggle('complete');
    }

});

// Function for delete task
todoList.addEventListener('dblclick',(e)=>{
    if(e.target.tagName === "LI"){
        e.target.remove();
    }

});
