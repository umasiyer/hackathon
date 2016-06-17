import {EventEmitter} from "events"
import Dispatcher from "../../dispatcher"
class Store extends EventEmitter{
    constructor(){
        super();
      }

      handleActions(action){
        
      }
}
const store = new Store;
Dispatcher.register(store.handleActions.bind(store));

export default store;
