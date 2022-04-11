import React from 'react'

export default class Todo extends React.Component {
  handleClick = () => {
    this.props.handleToggle(this.props.todo.id);
  }

  render() {
    const { name, id, completed } = this.props.todo
    return (
      <li onClick={this.handleClick} className='todo' key={id} >
        {name}
        {completed?<span> ✔️ </span> : <span></span>}
      </li>
    )
  }
}
