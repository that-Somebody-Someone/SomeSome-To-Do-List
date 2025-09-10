document.getElementById('add-task-button').addEventListener('click', function() {
    const input = document.getElementById('task-input');
    const taskText = input.value.trim();
    if (taskText !== '') {
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        let x = 0;
        checkbox.id = "taskCheck";
        const label = document.createElement('label');
        label.innerText = taskText;
        const container = document.getElementById('tasks')
        container.appendChild(checkbox);
        container.appendChild(label);
    }
});