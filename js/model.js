class TaskModel {
    constructor() {
      this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    }
  
    getTasks() {
      return this.tasks;
    }
  
    addTask(task) {
      this.tasks.push(task);
      this._commit();
    }
  
    deleteTask(index) {
      this.tasks.splice(index, 1);
      this._commit();
    }
  
    _commit() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }
  