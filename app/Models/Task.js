import { generateId } from "../Utils/GenerateId.js";

export default class Task {

  constructor(params) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.taskDescription = params.taskDescription || 'Task title...'
    this.color = params.color
    this.listID = params.listID
    // this.completed = params.completed
    this.id = params.id || generateId();
  }

  get Template() {
    return /*html*/ `

      <div id="${this.id}" class="task-div col-12 text-light border-top" style="background-color: ${this.color}">
        <div class="form-group row align-items-center">
          <input type="checkbox" class="col-2 form-check-input p-2" name="" id="" value="checkedValue">
          <h5 class="col-8 m-auto">${this.taskDescription}</h5>
          <button class="col-2 text-light close float-right" onclick="app.taskController.delete('${this.id}')"><span class="d-block">&times;</span></button>
        </div>
      </div> 

    `
  };

  //Be sure to add the methods needed to create the view template for this model

}