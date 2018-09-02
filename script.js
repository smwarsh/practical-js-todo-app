var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    // Count completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completedTodos++;
      }
    }
    
    // Case 1: If everything's true, make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    // Case 2: Otherwise, make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
  }
};

var handlers = {
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function () {
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    var changeTodoNewText = document.getElementById('changeTodoNewText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoNewText.value);
    
    // reset input fields to empty
    changeTodoPosition.value = '';
    changeTodoNewText.value = '';
    view.displayTodos();
  },
  deleteTodo: function () {
    var deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    
    deleteTodoPosition.value = '';
    view.displayTodos();
  },
  toggleCompleted: function () {
    var toggleTodoPosition = document.getElementById('toggleTodoPosition');
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    
    toggleTodoPosition.value = '';
    view.displayTodos();
  },
  toggleAll: function () {
    todoList.toggleAll();
    view.displayTodos();
  }
};

var view = {
  displayTodos: function () {
    
    var todosUL = document.querySelector('ul');
    todosUL.innerHTML = '';
    
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLI = document.createElement('li');
      var todo = todoList.todos[i];
      var todoTextWithCompletion = '';
      
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLI.textContent = todoTextWithCompletion;
      todosUL.appendChild(todoLI);
    }
  }
};








