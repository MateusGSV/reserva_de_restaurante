//import { db } from './firebase-config.js';
class TaskModel {
  constructor() {
    this.collection = db.collection('tasks');
  }

  async getTasks() {
    const snapshot = await this.collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async addTask(task) {
    await this.collection.add({ title: task });
  }

  async deleteTask(id) {
    await this.collection.doc(id).delete();
  }
}

//export default TaskModel;
