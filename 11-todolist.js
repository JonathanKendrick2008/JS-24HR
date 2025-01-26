const todoList =[{name: 'make dinner',dueDate: '2022-12-22'},
{name:'wash dishes',dueDate: '2022-12-22'}];

renderTodoList();
function renderTodoList(){
  let todoListHTML ='';
  for(let i = 0; i < todoList.length; i++){
  const todoObject = todoList[i];
  const name = todoObject.name;
  const dueDate = todoObject.dueDate;
  const html =`
  <p>
  <div>${name}</div>
  <div>${dueDate}</div>
  <button onclick="
  todolist.splice(${i},1);
  renderTodoList();
  class="delete-todo-button"
  ">delete</button>
  </p>
  `;
  todoListHTML += html;
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;}

function addTodo(){
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});


  inputElement.value = '';
  

  renderTodolist();
}