import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Songbook from '../react/src/Songbook'
import UserHomePage from '../react/src/components/UserHomePage'




document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <Songbook />
    </BrowserRouter> ), document.getElementById('app'));
})
