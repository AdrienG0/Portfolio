document.addEventListener('DOMContentLoaded', () => {
    const todoFormulier = document.getElementById('todo-formulier');
    const todoInput = document.getElementById('todo-input');
    const todoLijst = document.getElementById('todo-lijst');

    todoFormulier.addEventListener('submit', function(event) {
        event.preventDefault();
        addTodo(todoInput.value);
        todoInput.value = '';
    });

    function addTodo(task) {
        const todoItem = document.createElement('li');
        todoItem.textContent = task;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Done';
        completeButton.addEventListener('click', () => {
            todoItem.classList.toggle('completed');
        });

        const verwijderButton = document.createElement('button');
        verwijderButton.textContent = 'Delete';
        verwijderButton.addEventListener('click', () => {
            todoItem.remove();
        });
        
        todoItem.appendChild(completeButton);
        todoItem.appendChild(verwijderButton);
        todoLijst.appendChild(todoItem);
    }
});
