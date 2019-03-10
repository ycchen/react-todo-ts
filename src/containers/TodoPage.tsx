import * as React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { IAppState } from '../store'
import ITodo from '../models/Todo'
import { RouteComponentProps } from 'react-router-dom'
import { bindActionCreators, Dispatch  } from 'redux'
import { getAllTodos } from '../actions/TodoActions'

export interface IProps extends RouteComponentProps {
  todos: ITodo[];
  getAllTodos: typeof getAllTodos
}

class TodoPage extends React.Component<IProps> {

  public componentDidMount() {
    console.log('====Todo Page com didm mount', this.props)
    this.props.getAllTodos()
  }
  public render() {
    console.log('this.props inside of TodoPage container', this.props)
    const { todos } = this.props
    return (
      <div>
        Todo Page
        <h4>Todo List</h4>
        {todos && todos.map(todo => {
          return(
            <div key={todo.id}>{todo.text}</div>
          )
        })}
        <TodoList todos={[]} />
      </div>
    );
  }
}

const mapStateToProps = (store: IAppState) => {
  return {
    todos: store.todoState.todos
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    ...bindActionCreators(
      {getAllTodos},
      dispatch
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)