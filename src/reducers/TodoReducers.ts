import { Reducer } from 'redux'

import { 
  TodoActions,
  TodoActionTypes
} from '../types/TodoTypes'

import ITodo from '../models/Todo'

// define the Todo State Interface
export interface ITodoState {
  readonly todos: ITodo[]
}

export const initialTodoState: ITodoState = {
  todos: []
}

export const todoReducer: Reducer<ITodoState, TodoActions> = (
  state = initialTodoState, 
  action
  ) => {
    console.log('Todo action.type=', action.type)
    switch (action.type){
      case TodoActionTypes.GET_ALL: {
        return {
          ...state,
          todos: action.todos
        }
      }
      // case ActionTypes.TOGGLE_TODO {
      //   return {
      //     ...state
      //   }
      // }
      default:
        return state
    }
}