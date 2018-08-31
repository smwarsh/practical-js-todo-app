var todoList = {
  todos: [],
  displayTodos: function() {
    // displayTodos should tell you if .todos is empty
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
      // displayTodos should show .todoText
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
        
        // displayTodos should show .completed
        if (this.todos[i].completed) {
          console.log('(x)', this.todos[i].todoText);
        } else {
          console.log('( )', this.todos[i].todoText);
        }
        
      } // end for loop
    } // end else
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
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
    
    this.displayTodos();
  }
};

var handlers = {
  displayTodos: function () {
    todoList.displayTodos();
  },
  addTodo: function () {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
  },
  changeTodo: function () {
    var changeTodoPosition = document.getElementById('changeTodoPosition');
    var changeTodoNewText = document.getElementById('changeTodoNewText');
    todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoNewText.value);
    
    // reset input fields to empty
    changeTodoPosition.value = '';
    changeTodoNewText.value = '';
  },
  deleteTodo: function () {
    var deleteTodoPosition = document.getElementById('deleteTodoPosition');
    todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
    
    deleteTodoPosition.value = '';
  },
  toggleCompleted: function () {
    var toggleTodoPosition = document.getElementById('toggleTodoPosition');
    todoList.toggleCompleted(toggleTodoPosition.valueAsNumber);
    
    toggleTodoPosition.value = '';
  },
  toggleAll: function () {
    todoList.toggleAll();
  }
};

var view = {
  displayTodos: function () {
    
    var todosUL = document.querySelector('ul');
    todosUL.innerHTML = '';
    
    for (var i = 0; i < todoList.todos.length; i++) {
      var todoLI = document.createElement('li');
      todoLI.textContent = todoList.todos[i].todoText;
      todosUL.appendChild(todoLI);
    }
  }
};








