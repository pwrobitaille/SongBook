import React, { Component } from 'react'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }

  render(){

    return(
      <div>
          <a href="/auth/google" className="register-button button">
            Sign In
          </a>
      </div>  
    )
  }
}
export default Home
