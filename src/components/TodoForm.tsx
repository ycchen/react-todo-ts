import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom'
import { addTodo } from '../actions/TodoActions'

interface IProps {
  handleAddTodo: typeof addTodo
}

interface IState {
  text: string
}
export default class TodoForm extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props)
  
    this.state = {
      text: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  public handleSubmit = (e: any) => {
    e.preventDefault()
    if (!this.state.text.trim()) {
      console.log('return',this.state.text)
      return
    } 
    console.log(this.state.text)
    this.props.handleAddTodo(this.state.text)
    this.setState({text: ''})
  }

  public handleInputChange = (value: string) => {
    this.setState({text: value})
    console.log(value)
  }
  public render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" 
            placeholder="Add a task"
            onChange={(e) => this.handleInputChange(e.target.value)}
            value={this.state.text}
          />
          <button type="submit">Add Task</button>
        </form>        
      </div>
    );
  }
}
