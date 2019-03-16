import * as React from 'react'
import ITodo from '../models/Todo'
import Todo from './Todo'
interface IProps {
  todos: ITodo[]
}


class TodoList extends React.Component<IProps> {
  public render() {
    const { todos } = this.props
    return (
      <div>
        {todos && todos.map(todo => {
          return (
            <Todo todo={todo}  key={todo.id} />
          )
        })}
      </div>
    );
  }
}

export default TodoList