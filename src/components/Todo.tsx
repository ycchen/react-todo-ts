import * as React from 'react';

interface AppProps {
  todo: {
    text: string
  }
}

const Todo: React.SFC<AppProps> = (props) => {
  return (
    <a>{props.todo.text}</a>
  )
};

export default Todo;