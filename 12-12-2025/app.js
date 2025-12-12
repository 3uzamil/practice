const taskInput = document.getElementById('addTaskInput');

taskInput.addEventListener('focus',()=>{
    setTimeout(()=>{
    taskInput.placeholder = "Enter a new task...";
    },400);
});

document.addEventListener('mousedown',(e)=>{
    if(e.target !== taskInput){
    taskInput.placeholder = "";
    }

});