//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//event functions
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

//functions

function addTodo(event) {
    if (todoInput.value == ""){
        alert('невалидно');
    }
    else{    
        event.preventDefault();
        //todo div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        //create li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        //checkmark buttton
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        //checktrash buttton
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        //append to list
        todoList.appendChild(todoDiv);
        todoInput.value = "";
    }
}

function deleteCheck(event){
    const item = event.target;
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        item.remove();
        todo.style.textDecoration = "line-through";
    }
}