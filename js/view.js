class TaskView {
    constructor() {
      this.taskList = document.getElementById('taskList');
      this.newTaskInput = document.getElementById('newTask');
      this.addTaskButton = document.getElementById('addTaskButton');
    }
  
    displayTasks(tasks) {
      this.taskList.innerHTML = '';
      tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${task} <button data-index="${index}">Excluir</button>`;
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
          const index = event.target.getAttribute('data-index');
          handler(index);
        }
      });
    }
  }
  