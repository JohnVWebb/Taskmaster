import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
    constructor({title, color, id = generateId()}) {
        this.title = title
        this.id = id
        this.color = color
    }

    get Template() {
        return /*html*/`
        <div style="background-color:${this.color}" class="col-12 border border-info rounded outline- text-center">
            <h1>${this.title}<button class="text-danger close mt-3"
            onclick="app.listController.delete('${this.id}')"><span>&times;</span></button> </h1>
            <form onsubmit="app.sublistController.create(event, '${this.id}')">
                <div class="form-group form-check">
                    <input type="text" autocomplete="off" name="title" placeholder="Enter task title...">
                    <button class="btn btn-primary" type="submit">Add Task</button>
                    <div class="row">
                    ${this.Sublists}
                    </div>
                </div>
            </form>
        </div>
`
    }

    get Sublists() {
        let template = ''
        let sublists = ProxyState.sublists.filter(s => s.listId == this.id)
        sublists.forEach(s => template += s.Template) 
        return template    
    }
}
