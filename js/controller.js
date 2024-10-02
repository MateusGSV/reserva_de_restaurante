class TaskController {
    constructor(model, view) {
      this.model = model;
      this.view = view;
    }
  
    init() {
      this.view.displayTasks(this.model.getTasks());
      this.view.bindAddTask(this.handleAddTask);
      this.view.bindDeleteTask(this.handleDeleteTask);
    }
  
    handleAddTask = (task) => {
      this.model.addTask(task);
      this.view.displayTasks(this.model.getTasks());
    }
  
    handleDeleteTask = (index) => {
      this.model.deleteTask(index);
      this.view.displayTasks(this.model.getTasks());
    }
  }
  