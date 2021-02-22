import { ProxyState } from "../AppState.js";
import Sublist from "../Models/Sublist.js";
import { saveState } from "../Utils/LocalStorage.js";

class SublistService{
    constructor() {
     ProxyState.on('sublists', saveState)
    }
    create(rawSublist) {
        ProxyState.sublists = [new Sublist(rawSublist), ...ProxyState.sublists]
        console.log(ProxyState.sublists)
    }
    
    delete(sublistId) {
        ProxyState.sublists = ProxyState.sublists.filter(s => s.id != sublistId)
    }
}

export const sublistService = new SublistService()