const form =  document.getElementById("form-tarefa");
const taskList = document.getElementById("tarefas");

form.onsubmit = function (e) {
    e.preventDefault();
    const inputField = document.getElementById("input-tarefa");
    addTask(inputField.value);
    form.reset();
}

function addTask(description) {
    const taskContainer = document.createElement('div');
    const newTask = document.createElement('input');
    const taskLabel = document.createElement('label');
    const taskDescriptionNode = document.createTextNode(description);

    newTask.setAttribute('type', 'checkbox');
    newTask.setAttribute('name', description);
    newTask.setAttribute('id', description);

    taskLabel.setAttribute('for', description);
    taskLabel.appendChild(taskDescriptionNode);

    taskContainer.classList.add('item-tarefa');
    taskContainer.appendChild(newTask);
    taskContainer.appendChild(taskLabel);

    taskList.appendChild(taskContainer);

}