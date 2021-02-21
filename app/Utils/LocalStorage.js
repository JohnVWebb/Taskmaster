import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import Sublist from "../Models/Sublist.js";

export function saveState() {
    localStorage.setItem('taskmaster', JSON.stringify({
        lists: ProxyState.lists,
        sublists: ProxyState.sublists
    }))
}

export function loadState() {
    let data = JSON.parse(localStorage.getItem('taskmaster'))
    if (data) {
        ProxyState.lists = data.lists.map(l => new List(l))
        ProxyState.sublists = data.sublists.map(s => new Sublist(s))
    }
}