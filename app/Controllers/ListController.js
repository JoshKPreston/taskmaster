import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js";


//Private
let _draw = () => {

  let template = ''
  ProxyState.lists.forEach(list => template += list.Template)
  document.getElementById('lists').innerHTML = template

}


export default class ListController {
  constructor() {
    console.log('hello from ListController.js');

    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)


    _draw();

    

  }

  create(e) {
    e.preventDefault()
    listService.create({
      title: e.target.title.value,
      color: e.target.color.value
    })
    e.target.reset()
  }

  delete(id) { 
    listService.delete(id)
  }

}
