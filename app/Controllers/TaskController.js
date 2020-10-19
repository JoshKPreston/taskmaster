import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js";


export default class TaskController {
  constructor() {
    console.log('hello from TaskController.js');
  }

  create(e, listID, color) {
    e.preventDefault()
    taskService.create({
      taskDescription: e.target.title.value,
      listID,
      color
    })
    e.target.reset()
  }

  delete(id) {
    taskService.delete(id)
  }

}