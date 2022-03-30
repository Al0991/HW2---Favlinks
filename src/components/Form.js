import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

            //TODO - set initial state for link name and URL 
    this.state = {
      name: "",
      URL: ""
    }
  }

  handleNameChange = (event) => {
          //  TODO - Logic for changing state based on form changes
    this.setState({
      name: event.target.value
    })
  }

  handleURLChange = (event) => {
            //TODO - Logic for changing state based on form changes
    this.setState({
      URL: event.target.value
    })
  }

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    //Logic for calling props to handle submission and setting state changes
    const name = event.target.name.value
    const url = event.target.URL.value
    let newLink = {name: name, URL: url}
    this.props.handleSubmit(newLink)

    this.setState({
      name: "",
      URL: ""
    })

  }

  render() {
    return (
      /* TODO - Logic for returning a form element with labels and inputs for link name and URL */
      <form onSubmit={this.onFormSubmit}>
          <label>Name</label>
          <input name="name" id="name" type="text" value={this.state.name}  onChange={this.handleNameChange}/>
          <label>URL</label>
          <input name="URL" id="URL" type="url" value={this.state.URL} onChange={this.handleURLChange}/>
          <input type="submit"/> 
      </form>
    )
  }
}

export default Form
