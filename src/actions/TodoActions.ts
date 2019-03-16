
import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from 'redux-thunk'
import axios from 'axios'
import {
  ITodoGetAllAction,
  ITodoAddTodoAction,
  TodoActionTypes
} from '../types/TodoTypes'
import { ITodoState } from '../reducers/TodoReducers'
const apiUrl = 'https://5c6ac9b9d98e3600141cab70.mockapi.io/api/todos'

export const getAllTodos: ActionCreator<
  ThunkAction<Promise<any>, ITodoState, null, ITodoGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('before Todo axios.get = ', Date.now().toString())
      const response = await axios.get(apiUrl)
      console.log('after Todo axios.get = ', Date.now().toString())
      console.log('todos response=',response.data)
      dispatch({
        type: TodoActionTypes.GET_ALL,
        todos: response.data
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export const addTodo: ActionCreator<
  ThunkAction<Promise<any>, ITodoState, null, ITodoAddTodoAction>
> = (todo: string) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log('todo=', todo)
      console.log('before Todo axios.post = ', Date.now().toString())
      const response = await axios.post(apiUrl, {text: todo})
      console.log('after Todo axios.post = ', Date.now().toString())
      console.log('add todo response = ', response.data)
      dispatch({
        type: TodoActionTypes.ADD_TODO,
        todo: response.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

/*
* In order to automatically generate id for our todos
*/ 
// let nextId = 0

/*
* Define our action creators
* We are returning the right Action for each function
*/

// export const addTodo = (text: string): IAddTodoAction => {
//   return {
//     type: ActionTypes.ADD_TODO,
//     payload: {
//       todo: {
//           id: nextId++,
//           text
//       }
//     }
//   }  
// }

// export const toggleTodo = (todoId: number): IToggleTodoAction {
//   return {
//     type: ActionTypes.TOGGLE_TODO,
//     payload: {
//       todoId
//     }
//   }
// }
// export type Action = IAddTodoAction | IToggleTodoAction

// export const createTodo = (todo: string) => {
//   return(dispatch: any) => {
//     return axios.post(apiUrl, {text: todo})
//       .then(response => {
//         console.log('after post todo to apiUrl', response.data)
//       })
//       .catch(error => {
//         throw(error)
//       })
//   }
// }