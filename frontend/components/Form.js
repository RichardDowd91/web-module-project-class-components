import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: " "
    }
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.input)
  }

  onChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
     <form onSubmit={this.onSubmit} onChange={this.onChange} >
       <input />
       <button>Submit</button>
     </form>
    )
  }
}
