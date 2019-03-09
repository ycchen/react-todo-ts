import { Action, ActionTypes  } from '../actions/TodoActions'
import Todo from '../models/Todo'

export interface IState {
  todos: Todo[]
}
export const initialState: IState = {
  todos: []
}

export function todoReducer(state: IState = initialState, 
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