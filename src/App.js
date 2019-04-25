import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';


const list = [
  
  {
    task: 'Weekly Groceries',
    id: 1,
    completed: false
  },

  {
    task: 'Yard work',
    id: 2,
    completed: false
  },

  {
    task: 'Taxes',
    id: 3,
    completed: false
  },

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers 
    // you need to work with your state

  constructor() {
    //this.keyword references our class
    super();
    this.state = {
        list: list,
      //listOnState: list
      task: '',
      id: '',
      completed:''

    }
  }

  addTodo = event => {
    event.preventDefault();

    const newTodo ={
      task:this.state.task,
      id: this.state.id,
      completed:this.state.completed
    };

    this.setState({
      list: [...this.state.list, newTodo],
      task:'',
      id: '',
      completed:''
    })
  }


  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

    
  render() {
    return (
      <div>
        <Todo task="Organize Garage"/>
        <TodoList list={this.state.list} />
        <TodoForm addTodo={this.addTodo} handleChanges={this.handleChanges}
        name={this.state.task}
        />
      </div>
    );
  }
}

export default App;

// will hold all the data needed for this project. It will also be the container 
// for your Todo Components.
// All of your application data will be stored here on <App />.
// All of your handler functions should live here on <App />.