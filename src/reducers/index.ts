import { combineReducers} from 'redux'
import * as fromTodos from './TodoReducers'


/*
 * This is the root state of the app
 * It contains every substate of the app
 */

 export interface State {
   todos: fromTodos.State
 }

/*
 * initialState of the app
 */

 export const initialState: State = {
   todos: fromTodos.initialState
 }

 /*
 * Root reducer of the app
 * returns reducer will be of type Reducer<State></State>
 */

 export const rootReducer = combineReducers({
   todos: fromTodos.todoReducer
 })

