import React, { Component } from 'react'
import { browserHistory, Route, Switch } from 'react-router-dom';
import AddSong from './components/AddSong'
import UserHomePage from './components/UserHomePage'
import Home from './components/Home'


class Songbook extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <Switch>
          <Route exact path='/users/:id/add-song' component={AddSong} />
          <Route exact path='/users/:id' component={UserHomePage} />
          <Route path='/' component={Home} />
        </Switch>
      </div>

    )
  }

}

export default Songbook;
