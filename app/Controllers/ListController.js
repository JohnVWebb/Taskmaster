import { ProxyState } from "../AppState.js";
import { listService }  from "../Services/ListService.js";


//Private
function _draw() {
  let listsElem = document.getElementById("lists")
  let template = ""
  ProxyState.lists.forEach(list => template += list.Template)
  listsElem.innerHTML = template
}

//Public
export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("sublists", _draw);
  }

  create(event){
  event.preventDefault()
    let form = event.target
    let rawList = {
      title: form.title.value
    }
  listService.create(rawList)
  }

  delete(listId) {
    listService.delete(listId)
  }
}
