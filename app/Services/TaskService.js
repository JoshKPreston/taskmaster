import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";
import "../sweetalert2.all.min.js";


//Private


class TaskService {
  constructor() {

    // let tasks = ProxyState.tasks
    // tasks.forEach(task => {
    //   if (task.completed) {
    //     let checkBoxElem = document.getElementById(`chk_${task.id}`)
    //     // @ts-ignore
    //     checkBoxElem.checked = true
    //   }
    // })

  }

  checkBox(id) {
    let checkBoxElem = document.getElementById(`chk_${id}`)
    // @ts-ignore
    let task = ProxyState.tasks.find(task => task.id == id)
    let i = ProxyState.tasks.findIndex(task => task.id == id)

    checkBoxElem.addEventListener('change', () => {
      // @ts-ignore
      if (checkBoxElem.checked) {
        // @ts-ignore
        swal.fire({
          title: `Task Completed`,
          text: `${task.title}`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          task.completed = true
          ProxyState.tasks[i] = task
        })
      }
    })


  }
  create(params) {
    ProxyState.tasks = [...ProxyState.tasks, new Task(params)]
  }
  delete(id) {
    let task = ProxyState.tasks.find(task => task.id == id)
    document.getElementById(`${task.id}`).addEventListener('click',
      // @ts-ignore
      swal.fire({
        text: `Delete ${task.title}?`,
        icon: 'warning',
        confirmButtonText: 'Delete',
        showCancelButton: true,
        cancelButtonText: 'Cancel'
      }).then(isConfirm => {
        if (isConfirm.value) {
          ProxyState.tasks = ProxyState.tasks.filter(task => task.id != id)
        }
      })
    )
  }
}
export const taskService = new TaskService();



  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener