import React from 'react'
import Form from './Form'
import TodoList from './TodoList'

let idx = 0
const getIdx = () => ++idx

const todos = [
  {
    name: 'Organize Garage',
    id: getIdx(),
    completed: true
  },
  {
    name: 'Bake Cookies',
    id: getIdx(),
    completed: true
  }
]

const initialState = {
  todos
}

export default class App extends React.Component {

state = initialState

changeInput = (key, value) => {
  this.setState({ 
    ...this.state,
    form: {
      ...this.state.todos,
      [key]: value
    }
   })
}

addTodo = (name) => {
  const newTodo = { name: name, id: getIdx(), completed: false }
  this.setState({
    ...this.state,
    todos: [ ...this.state.todos, newTodo ]
  })
}

handleComplete = () => {
  this.setState({
    ...this.state,
    todos: this.state.todos.filter(todo => {
      return (todo.completed === false);
    })
  })
}

handleToggle = (clickedID) => {
  this.setState({
    ...this.state,
    todos: this.state.todos.map(todo => {
      if (todo.id === clickedID) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    })
  })
}

  render() {
    return (
      <div>
        Todo App
        <h2>Todos:</h2>
        <ul>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </ul>
        <Form onChange={this.changeInput} values={this.state} addTodo={this.addTodo} />
        <button onClick={this.handleComplete}>Hide Completed</button>
      </div>
    )
  }
}
