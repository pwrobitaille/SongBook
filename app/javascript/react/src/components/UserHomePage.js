import React, { Component } from 'react'
import { browserHistory, Route, NavLink } from 'react-router-dom';

class UserHomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/users`, {
      credentials: "same-origin",
      headers: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({user: body})
    })
  }

  render(){
    return(
      <div>
        <div><NavLink to={`/users/${this.state.user.id}/add-song`} >Add Song</NavLink></div>
      </div>

    )
  }

}

export default UserHomePage;
