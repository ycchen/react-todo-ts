import * as React from 'react';
import TodoList from '../components/TodoList'
import { connect } from 'react-redux'
import { IAppState } from '../store'
import ITodo from '../models/Todo'
import { RouteComponentProps } from 'react-router-dom'
import { bindActionCreators, Dispatch  } from 'redux'
import { getAllTodos, addTodo, deleteTodo } from '../actions/TodoActions'
import TodoForm from '../components/TodoForm'

export interface IProps extends RouteComponentProps {
  todos: ITodo[];
  getAllTodos: typeof getAllTodos
  addTodo: typeof addTodo
  deleteTodo: typeof deleteTodo
}

class TodoPage extends React.Component<IProps> {

  public componentDidMount() {
    console.log('====Todo Page com didm mount', this.props)
    this.props.getAllTodos()
  }
  public render() {
    console.log('this.props inside of TodoPage container', this.props)
    const { todos, addTodo, deleteTodo } = this.props
    return (
      <div>
        Todo Page
        <h4>Todo List ({todos && todos.length})</h4>
        <TodoForm handleAddTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
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
      {getAllTodos, addTodo, deleteTodo},
      dispatch
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoPage)