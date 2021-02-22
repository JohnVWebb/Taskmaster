import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js"
class ListService {
    constructor(){
      ProxyState.on("lists", saveState)
    }
  create(rawList){
    ProxyState.lists = [new List(rawList), ...ProxyState.lists]
  }
  delete(listId){
    ProxyState.lists =  ProxyState.lists.filter(l => l.id != listId)
    ProxyState.sublists = ProxyState.sublists.filter(s => s.listId != listId)
  }
}

export const listService = new ListService()

