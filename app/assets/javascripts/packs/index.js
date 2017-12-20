import React from 'react';
import ReactDOM from 'react-dom';
import Songbook from '../react/src/Songbook';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render((
    <BrowserRouter>
      <Songbook />
    </BrowserRouter> ), document.getElementById('app'));
})
