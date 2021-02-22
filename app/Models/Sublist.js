import { generateId } from "../Utils/GenerateId.js";

export default class Sublist {
    constructor({ title, id = generateId(), listId })
    {
        this.title = title
        this.id = id
        this.listId = listId
    }

    get Template() {
        return /* html */`
        <div class="col-12">
            <h1 class="${this.title.includes() ? 'text-danger': ''}" >${this.title}<button type="button" class="text-danger close mt-3"
                    onclick="app.sublistController.delete('${this.id}')"><span>&times;</span></button> </h1>
        </div>
        `
    }
}