import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      submittedData: [...this.state.submittedData, {firstName: this.state.firstName, lastName: this.state.lastName}]
    })
  }

  handleSignups = () => {
    const signups = document.getElementById("list-of-signups")
    this.state.submittedData.forEach(signup => {
       signups.append(signup.firstName)
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <button type="submit">Submit</button>
        </form>

        <ul id="list-of-signups">
          {this.handleSignups()}
        </ul>
      </div>
    )
  }
}

export default Form;