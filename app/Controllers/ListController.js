import { ProxyState } from "../AppState.js";
import { listService }  from "../Services/ListService.js";

function _draw() {
  let listsElem = document.getElementById("lists")
  let template = ""
  ProxyState.lists.forEach(list => template += list.Template)
  listsElem.innerHTML = template
}

export default class ListController {
  constructor() {
    ProxyState.on("lists", _draw)
    ProxyState.on("sublists", _draw);
  }

  create(event){
  event.preventDefault()
    let form = event.target
    let rawList = {
      title: form.title.value,
      color: form.color.value
    }
  listService.create(rawList)
  }

  delete(listId) {
    confirm('Are you sure?')
    listService.delete(listId)
  }
}
