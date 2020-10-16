import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js";

export default class TaskController {
  constructor () {
    console.log('hello from TaskController.js');
  }

  get Template () {
    return
  }
  
  create(data) {
    taskService.create()
  }

  delete(data) {
    taskService.delete()
  }
}