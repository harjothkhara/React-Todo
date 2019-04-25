// will hold your input field and your Add Todo and Clear Completed buttons.
// Your input field should take in user input, and allow a user to press Enter or click 
// on the Submit Button to add a todo to your list.
// Once a todo is submitted, the Todo List should re-render and show the added todo.

import React from 'react';

const TodoForm = props => {
  return (
    <form onSubmit={props.addTodo}>
      <input
      type="text"
      value={props.task}
      onChange={props.handleChanges}
      name="task"
      placeholder="...Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  )
}

export default TodoForm;
