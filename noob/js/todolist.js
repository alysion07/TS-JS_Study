const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    // update 'toDos'
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveTodos();
}

function printToDo(newToDoObj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const button = document.createElement("button");
    li.id = newToDoObj.id;
    span.innerText = newToDoObj.text;
    button.innerText = "❌";
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    printToDo(newToDoObj);
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach((item) => printToDo(item));
}
