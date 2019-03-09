import * as React from 'react';

interface IAppProps {
  todo: {
    text: string
  }
}

const Todo: React.SFC<IAppProps> = (props) => {
  return (
    <a>{props.todo.text}</a>
  )
};

export default Todo;