import React, { Component } from 'react'
import { browserHistory, Route, Switch } from 'react-router-dom';
import UserHomePage from './components/UserHomePage'



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
        <Switch>
          <Route exact path='/users/:id' component={UserHomePage} />
          <Route path='/' component={Songbook}/>

        </Switch>
      </div>

    )
  }

}

export default Songbook;
