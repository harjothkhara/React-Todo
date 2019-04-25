// is a component that takes in the todo data and displays the task to the screen.

import React from 'react';


const Todo = props => {
  return (
    <div onClick={() => props.toggleItem(props.id)}>
       <li> {props.task}</li>
    </div>
  )
}

export default Todo;