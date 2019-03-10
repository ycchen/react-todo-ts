import ITodo from '../models/Todo'

/*
* We are defining every action name constant here
* We are using Typescript's enum
* Typescript understand enum better
*/
export enum TodoActionTypes {
  GET_ALL = 'GET_ALL',
  // ADD_TODO = 'ADD_TODO',
  // TOGGLE_TODO = 'TOGGLE_TODO'
}


/*
* Define return types of our actions
* Every action returns a type and a payload
*/
export interface ITodoGetAllAction {
  type: TodoActionTypes.GET_ALL,
  todos: ITodo[]
}


// export interface IAddTodoAction {
//   type: TodoActionTypes.ADD_TODO,
//   payload: { todo: ITodo }
// }


// export interface IToggleTodoAction {
//   type: TodoActionTypes.TOGGLE_TODO,
//   payload: {todoId: number}
// }

export type TodoActions = ITodoGetAllAction;