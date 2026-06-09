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
