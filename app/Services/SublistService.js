import { ProxyState } from "../AppState.js";
import Sublist from "../Models/Sublist.js";
import { saveState } from "../Utils/LocalStorage.js";


export default class SublistService{
    constructor() {
     ProxyState.on('sublists', saveState)
    }
    create(rawSublist) {
         //same same
         //let temp = ProxyState.sublists
         //let newSublist = new Sublist(rawSublist)
         //temp.push(newSublist)
         //ProxyState.sublists = temp

        ProxyState.sublists = [new Sublist(rawSublist), ...ProxyState.sublists]
        console.log(ProxyState.sublists)
    }
    
    delete(sublistId) {
        // let temp = ProxyState.sublists
        // let sublistIndex = temp.findIndex(l => l.id == sublistId)
        // temp.splice(sublistIndex, 1)
        // ProxyState.sublists = temp
        ProxyState.sublists = ProxyState.sublists.filter(s => s.id != sublistId)

    }

}

//export const sublistService = new SublistService()