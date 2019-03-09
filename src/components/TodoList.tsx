import * as React from 'react';
import Todo from '../models/Todo'

interface IAppProps {
  todos: Todo[]
}

interface IState {
  todo: string
  todos: Todo[]
}

class TodoList extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props)
  
    this.state = {
      todo: '',
      todos: []
    }
  }
  

  public handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(this.state.todo)
    this.setState({todo: ''})
  }

  public handleInputChange = (e: any) => {
    this.setState({
      todo: e.target.value
    })
  }
  public renderTodos = () => {
    return (
      this.props.todos.map((todo: Todo, index: number) => {
        return (
          <div key={index}>{todo}</div>
        )
      })
    )
  }

  public render() {
    const { todo } = this.state
    return (
      <div>
        Todo list ({this.props.todos.length})
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="Add a Task"
            onChange={this.handleInputChange }
            value={ todo } />
          <button type="submit">Add Task</button>
        </form>

        <section>todos: { this.renderTodos()}</section>
      </div>
    );
  }
}

export default TodoList