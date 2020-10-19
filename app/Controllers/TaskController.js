import { ProxyState } from "../AppState.js"
import { taskService } from "../Services/TaskService.js";



export default class TaskController {
  constructor() {
  }

  checkBox(id) {
    taskService.checkBox(id)
  }

  create(e, listID, color) {
    e.preventDefault()
    taskService.create({
      title: e.target.title.value,
      listID,
      color
    })
    e.target.reset()
  }

  delete(id) {
    taskService.delete(id)
  }

}