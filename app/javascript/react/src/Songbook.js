import React, { Component } from 'react'
import { browserHistory, Route, Switch } from 'react-router-dom';

class Songbook extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <a href="/auth/google">Login to Google</a>
        {/* <Route exact path='/users/:id' component={Songbook} /> */}

      </div>

    )
  }

}

export default Songbook;
