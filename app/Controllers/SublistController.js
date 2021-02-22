import  sublistService  from "../Services/SublistService.js";

export default class SublistController{

    create(event, listId) {
    event.preventDefault()        
        let form = event.target
        let rawSublist = {
            title: form.title.value,
            listId: listId
        }
    sublistService.create(rawSublist)       
    }

    delete(sublistId) {
        sublistService.delete(sublistId)
    }
}