const STORAGE_KEY = "todos";

let state={
  todos:[];
filter:"a";
};

function loadTodos(){
  const saved= localStorage getItem(STORAGE_KEY);

if(saved) {
  state.todos=JSON parse(saved);
}
}

function saveTodos(){
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state.todos)
    ); 
}

function addTodo(text){
  state.todos:push({
    id:Date.now(),
    text,
    completed:false
  });

  saveTodos();
  render();
}


function editTodo(id){
  const todo = state.todos.find(t=>t.id===id);

  const newText=prompt("Edit task:",todo.text);

  if(!newText) return;

  todo.text=newText;

  saveTodos();
  render();
}

function toggleTodo(id){
  const  todo = state.todos.find(t=>t.id===id);
   todo completed=!todo completed;
  saveTodos();
  render();
}

function deleteTodo(id){
  state.todos=state.todos.filter(
    todo=>todo.id!==id
    );
  saveTodos();
  render();
}


function getFilteredTodos(){
  switch(state.filter){
      case"active";
      return state.todos.filter(
        todo=>todo.completed
        );
    default:
      return state.todos;
  }
}

const list = document.getElementById("todo-list");

function render(){
  list.innerHTML ="";
   const todos=getFilteredTodos();

  todosforEach(todo=>{
    const li=document.createElement("li");

    li.dataset.id=todo.id;

    if(todo.completed){
      li.classList.add("completed");  
    }

    li.innerHTML="";

    const todos = getFilteredTodos();

    todos.forEach(todo =>{

 




















  
