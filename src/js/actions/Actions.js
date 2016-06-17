//actions dispactch to the dispatcher with an action name
import Dispatcher from "../../dispatcher"
export function createTodo(text){
    Dispatcher.dispatch({type:"CREATE_TODO",text})
}