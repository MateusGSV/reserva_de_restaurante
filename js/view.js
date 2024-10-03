class TaskView {
  constructor() {
    this.taskList = document.getElementById('taskList');
    this.newTaskInput = document.getElementById('newTask');
    this.addTaskButton = document.getElementById('addTaskButton');
  }

  displayTasks(tasks) {
    this.taskList.innerHTML = '';
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.innerHTML = `${task.title} <button data-id="${task.id}">Excluir</button>`;
      this.taskList.appendChild(li);
    });
  }

  bindAddTask(handler) {
    this.addTaskButton.addEventListener('click', () => {
      if (this.newTaskInput.value.trim()) {
        handler(this.newTaskInput.value);
        this.newTaskInput.value = '';
      }
    });
  }

  bindDeleteTask(handler) {
    this.taskList.addEventListener('click', (event) => {
      if (event.target.tagName === 'BUTTON') {
        const id = event.target.getAttribute('data-id');
        handler(id);
      }
    });
  }
}
