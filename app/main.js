import ListController from "./Controllers/ListController.js";
import SublistController from "./Controllers/SublistController.js"
import { loadState } from "./utils/LocalStorage.js"
class App {
  listController = new ListController();
  sublistController = new SublistController()
}

window["app"] = new App();
loadState()