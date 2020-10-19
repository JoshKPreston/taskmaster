import ListController from "./Controllers/ListController.js"
import TaskController from "./Controllers/TaskController.js"
import { loadState } from "./Utils/LocalStorage.js"

// let grid = document.querySelector('.grid')
// let msnry = new Masonry( grid, {
//     itemSelector: '.grid-item',
//     columnWidth: 300,
//     gutter: 30
// })


class App {
  listController = new ListController()
  taskController = new TaskController()
}

window["app"] = new App();
loadState()



// Swal.fire({
//   title: 'Are you sure?',
//   text: 'Delete?',
//   icon: 'warning',
//   confirmButtonText: 'Delete',
//   cancelButtonText: 'Cancel'
// })