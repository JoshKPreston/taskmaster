import { ProxyState } from "../AppState.js"
import { listService } from "../Services/ListService.js";

//Private
function _drawLists() {

  let template = ''
  ProxyState.lists.forEach(l => template += l.ListTemplate)
  document.getElementById("lists").innerHTML = template

 }

//Public
export default class ListController {
  constructor() {
    console.log('hello from ListController.js');

    ProxyState.on('lists', _drawLists)

    _drawLists();
  }

  create(data) {
    listService.create(data)
  }

  delete(data) {
    listService.delete()
  }
  
    
}
