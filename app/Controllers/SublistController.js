import { sublistService } from "../Services/SublistService.js";

export default class SublistController{

    create(event, listId) {
    event.preventDefault()        
        let form = event.target
        let rawSublist = {
            title: form.title.value,
            listId: listId
        }
        //NOTE
    sublistService.create(rawSublist)       
    }

    delete(sublistId) {
        confirm("Are you sure?")
        sublistService.delete(sublistId)
    }
}