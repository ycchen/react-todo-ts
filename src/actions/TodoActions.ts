import Todo from '../models/Todo'

// import axios from 'axios'

// const apiUrl = 'https://5c6ac9b9d98e3600141cab70.mockapi.io/api/todos'

/*
* In order to automatically generate id for our todos
*/ 
let nextId = 0

/*
* We are defining every action name constant here
* We are using Typescript's enum
* Typescript understand enum better
*/
export enum ActionTypes {
  ADD_TODO = '[todos] ADD_TODO',
  TOGGLE_TODO = '[todos] TOGGLE_TODO'
}


/*
* Define return types of our actions
* Every action returns a type and a payload
*/

export interface IAddTodoAction {
  type: ActionTypes.ADD_TODO,
  payload: { todo: Todo }
}


export interface IToggleTodoAction {
  type: ActionTypes.TOGGLE_TODO,
  payload: {todoId: number}
}

/*
* Define our action creators
* We are returning the right Action for each function
*/

export const addTodo = (text: string): IAddTodoAction => {
  return {
    type: ActionTypes.ADD_TODO,
    payload: {
      todo: {
          id: nextId++,
          text
      }
    }
  }  
}

export const toggleTodo = (todoId: number): IToggleTodoAction {
  return {
    type: ActionTypes.TOGGLE_TODO,
    payload: {
      todoId
    }
  }
}
export type Action = IAddTodoAction | IToggleTodoAction

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