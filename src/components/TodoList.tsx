import * as React from 'react'
import ITodo from '../models/Todo'
import Todo from './Todo'
import { deleteTodo } from '../actions/TodoActions'
interface IProps {
  todos: ITodo[]
  deleteTodo: typeof deleteTodo
}


class TodoList extends React.Component<IProps> {
  public render() {
    const { todos, deleteTodo } = this.props
    return (
      <div>
        {todos && todos.map(todo => {
          return (
            <Todo todo={todo}  key={todo.id} deleteTodo={deleteTodo} />
          )
        })}
      </div>
    );
  }
}

export default TodoList