import Todo from '../models/Todo'

export interface IState {
  todos: Todo[]
}
export const initialState: IState = {
  todos: []
}
