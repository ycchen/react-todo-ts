import Todo from '../models/Todo'

export interface State {
  todos: Todo[]
}
export const initialState: State = {
  todos: []
}
