import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GenerateId.js";

export default class List {

  constructor(params) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.title = params.title || 'New List';
    this.color = params.color || '#272727'
    this.id = params.id || generateId();
  }

  get Template() {
    return /*html*/ `

    <div class="col-12 col-md-4 list-div">
    <div class="card text-light">

        <div class="card-body rounded" style="background-color: ${this.color}">
          <div class="form-group row align-items-center">
            <h4 class="col-10 card-title border-bottom border-light">${this.title}</h4>
            <button class="col-2 text-light close float-right" onclick="app.listController.delete('${this.id}')">&times;</button>
          </div>
          <form class="form-group row align-items-center" id="${this.id}" onsubmit="app.taskController.create(event, '${this.id}', '${this.color}')">
              <input class="col-9 text-center text-dark" type="text" name="title" placeholder="Task title...">
              <button class="col-3 float-right text-light text-center" type="submit"
                  style="background-color: ${this.color}">&plus;</button>
          </form>
        </div>

        ${this.Tasks}

    </div>
</div>

    `
  };

  get Tasks() {
    let template = ''
    ProxyState.tasks.filter(task => task.listID == this.id).forEach(task => template += task.Template)
    return template
  }

  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
