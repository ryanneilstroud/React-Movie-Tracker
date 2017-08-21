import React from 'react'
import { render } from 'react-dom'
import './styles/ui.scss'
import { App } from './components/App'
import { NotFound404 } from './components/NotFound404'
import { Router, Route, hashHistory } from 'react-router'

window.React = React

render(
  <Router history={hashHistory}>
    <Router path="/" component={App}></Router>
    <Router path="*" component={NotFound404}></Router>
  </Router>,
  document.getElementById('react-container')
)
