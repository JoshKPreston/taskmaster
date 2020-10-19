import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";

//Public
class ListService {
  constructor() {
  }
  create(params) { 
    ProxyState.lists = [...ProxyState.lists, new List(params)]
  }
  delete(id) {

    let list = ProxyState.lists.find(list => list.id == id)
    let userConfirmsDelete = window.confirm(`Delete?: ${list.title}`)
    if (userConfirmsDelete) {
      ProxyState.lists = ProxyState.lists.filter(list => list.id != id)
      ProxyState.tasks = ProxyState.tasks.filter(task => task.listID != id)
    }
    
  }

}
export const listService = new ListService();


  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener