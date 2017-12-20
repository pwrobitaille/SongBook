import React from 'react'
import ReactDOM from 'react-dom'
import Songbook from '../react/src/Songbook'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Songbook /> , document.getElementById('app'));
})
