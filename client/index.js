import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import Add from './components/Add'
import List from './components/List'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/add' component={Add} />
        <Route path='/list' component={List} />
      </Router>
    ),
    document.getElementById('app')
  )
})
