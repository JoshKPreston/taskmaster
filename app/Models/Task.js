import { generateId } from "../Utils/GenerateId.js";

export default class Task {

  constructor(params) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your task here is a freebie, it will set the id it is provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = params.title || 'Task title...'
    this.color = params.color
    this.listID = params.listID
    this.completed = params.completed || false
    this.id = params.id || generateId();
  }



  get Template() {


    return /*html*/ `

      <div id="${this.id}" class="task-div col-12 text-light border-top" style="background-color: ${this.color}">
        <div class="form-group row align-items-center">
          <input id="chk_${this.id}" type="checkbox" class="col-2 form-check-input p-2" onclick="app.taskController.checkBox('${this.id}')" value="checkedValue">
          <h5 class="col-8 m-auto">${this.title}</h5>
          <button class="col-2 text-light close float-right" onclick="app.taskController.delete('${this.id}')"><span class="d-block">&times;</span></button>
        </div>
      </div> 

    `
  };

  //Be sure to add the methods needed to create the view template for this model

}