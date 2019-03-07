import * as React from 'react';
import TodoList from '../components/TodoList'

// interface IAppProps {
//   todos: {}
// }

export default class TodoPage extends React.Component<{},{}> {
  public render() {
    return (
      <div>
        Todo Page
        <h4>Todo List</h4>
        <TodoList todos={[]} />
      </div>
    );
  }
}
