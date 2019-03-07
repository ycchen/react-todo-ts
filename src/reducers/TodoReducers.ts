import { Action, ActionTypes  } from '../actions/TodoActions'
import Todo from '../models/Todo'

export interface State {
  todos: Todo[]
}
export const initialState: State = {
  todos: []
}

export function todoReducer(state: State = initialState, 
  action: Action) {

    switch (action.type){
      case ActionTypes.ADD_TODO {
        return {
          ...state
        }
      }
      case ActionTypes.TOGGLE_TODO {
        return {
          ...state
        }
      }
      default:
        return state
    }
}