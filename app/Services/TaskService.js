import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";

//Public
class TaskService {
  constructor() {
  }
  create(params) { 
    ProxyState.tasks = [...ProxyState.tasks, new Task(params)] 
  }
  delete(id) { 
    let task = ProxyState.tasks.find(task => task.id == id)
    let userConfirmsDelete = window.confirm(`Delete?: ${task.taskDescription}`)
    if (userConfirmsDelete) {
      ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id) 
    }
  }
}
export const taskService = new TaskService();



  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener