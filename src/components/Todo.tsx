import * as React from 'react';
import ITodo from '../models/Todo'
import { deleteTodo } from '../actions/TodoActions'
interface IProps {
  todo: ITodo
  deleteTodo: typeof deleteTodo
}


const Todo: React.SFC<IProps> = (props) => {
  // console.log(props)
  const handleClick = (todoId: number) => {
    console.log('delete ', todoId)
    props.deleteTodo(todoId)  
  }

  const {id, text} = props.todo
  return (
    <div>
      <a className="list-group-item" 
          onClick={ () => handleClick(id)}
          >
        {text}
      </a>
    </div>
  )
};

export default Todo;