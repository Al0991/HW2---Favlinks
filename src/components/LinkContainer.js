import React from 'react'
import Table from './Table';
import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state = {
      favLinks: []
    }
  }

  removeLink = (index) => {
    let updatedArray = this.state.favLinks.filter(item => item !== this.state.favLinks[index])
    this.setState({favLinks: updatedArray})
  }

  handleSubmit = (favLink) => {
            //TODO - Create logic to setState and add new favLink to favLinks array in state
    this.setState({ favLinks: [...this.state.favLinks, favLink]})
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>        
        {
          <Table 
            linkData = {this.state.favLinks}
            removeLink = {this.removeLink}
          />/*TODO - Add Table Component */
        }

        <br />

        <h3>Add New</h3>
        {/*TODO - Add Form Component */}
        <Form handleSubmit = {this.handleSubmit}/>
      </div>
    )
  }
}

export default LinkContainer
