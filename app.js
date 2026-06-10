const STORAGE_KEY = "todos";

let state={
  todos:[],
filter:"all";
};

const list=document.getElementById("todo-list");

//load Saved Data
function loadTodos(){
  const saved= localStorage getItem(STORAGE_KEY);

if(saved) {
  state.todos=JSON parse(saved);
}
}

//Save data
function saveTodos(){
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state.todos)
    ); 
}

//Create task
function addTodo(text){
  state.todos:push({
    id:Date.now(),
    text,
    completed:false
  });

  saveTodos();
  render();
}

//Update Task
function editTodo(id){
  const todo = state.todos.find(t=>t.id===id);

  const newText=prompt("Edit task:",todo.text);

  if(!newText) return;

  todo.text=newText;

  saveTodos();
  render();
}


//Toggle Complete
function toggleTodo(id){
  const  todo = state.todos.find(t=>t.id===id);
   todo completed=!todo completed;
  saveTodos();
  render();
}


//Delete Task
function deleteTodo(id){
  state.todos=state.todos.filter(
    todo=>todo.id!==id
    );
  saveTodos();
  render();
}

//Filter Task
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
    <span>${todo.text}</span>

               <div class="actions">
               <button class="toggle">
               ${todo.completed ? "Undo" : "Done"}
  </button>

  <button class="edit">
    Edit
    </button>

  <button class="delete">
     Delete
    </button>
    </div>
  ;

  list.appendChild(li);
});
}





















  
