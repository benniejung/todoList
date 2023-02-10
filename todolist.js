const calContents = document.querySelector(".cal_content");
const selectDayEl = document.querySelector("#selectDay");
const defaultDay = `${changeMonth.getFullYear(today)}-${changeMonth.getMonth(today)+1}-${changeMonth.getDate(today)}`;

let todoBook_key = defaultDay;
selectDayEl.innerText = defaultDay;

calContents.addEventListener("click", (e) => {
    const regExp = /^\d*$/g;
    if(!regExp.test(e.target.textContent)) return;
    
    const calEachDiv = document.querySelectorAll(".cal_content div");
    [...calEachDiv].forEach((div)=> {
        if(div === e.target) {
            div.classList.add('select');
        } else {
            div.classList.remove('select');
        }
    })
    const selectDay = `${changeMonth.getFullYear()}-${changeMonth.getMonth()+1}-${e.target.outerText}`;

    selectDayEl.innerText = selectDay;

    todoBook_key = selectDay;
    findTodoLists(selectDay);

})



const toDoForm = document.querySelector("#todo_form");
const todoInput = document.querySelector("#todo_form input");
const toDoList = document.querySelector("#todo_list");

let todoLists = [];


function saveTodoLists(){
    localStorage.setItem(todoBook_key,JSON.stringify(todoLists));
}

function removeli(e) {
    const targetli = e.target.parentElement;
    targetli.remove();
    todoLists = todoLists.filter((newTodo) => newTodo.id !== parseInt(targetli.id));
    saveTodoLists();
}
function changeDoneTodo(e) {
    todoLists.map((todo) => {
        if(todo.id == e.target.value) {
            todo.done == false ? todo.done = true : todo.done = false;
        }
    })
    saveTodoLists();
}
function paintTodo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    li.id = newTodo.id;
    const btn = document.createElement("button");
    btn.innerText="❌"
    btn.addEventListener("click", removeli);
    const doneChk = document.createElement("input");
    doneChk.setAttribute("type","checkbox");
    doneChk.setAttribute("value",newTodo.id);
    doneChk.setAttribute("id",newTodo.id);
    doneChk.addEventListener("change", changeDoneTodo);
    
    const doneChkLab = document.createElement("label");
    doneChkLab.setAttribute("for",newTodo.id);

    li.append(doneChk,doneChkLab,span,btn);
    toDoList.appendChild(li);
    
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        done:false
    };
    paintTodo(newTodoObj);
    todoLists.push(newTodoObj);
    saveTodoLists();

}
function findTodoLists(selectDay) {
    const list_value = localStorage.getItem(selectDay);
    if(list_value !== null){
        const parsed= JSON.parse(list_value);
        todoLists = parsed;
        toDoList.innerHTML=''; // 눌렀을 때 내용 비우기
        todoLists.forEach(paintTodo);
    } else {
        toDoList.innerHTML=''; // 눌렀을 때 내용 비우기
    }
}


findTodoLists(todoBook_key);

toDoForm.addEventListener("submit", handleTodoSubmit);