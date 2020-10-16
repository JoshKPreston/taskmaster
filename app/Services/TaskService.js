import Task from "../Models/Task.js";

//Public
class TaskService {
  
  constructor () {
    
    console.log('hello from TaskService.js');
  }

  create() {
    
  }

  delete () {
    
  }
  //TODO  Here is where we handle all of our business logic,
  //given the information you need in the controller,
  //what methods will you need to do when this class is first 'constructed'?
  //NOTE You will need this code to persist your data into local storage, be sure to call saveState everytime you change the state in any way, you can register saveState as a listener
}

export const taskService = new TaskService();
