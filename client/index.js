import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory} from 'react-router'

import App from './components/App'
import Add from './components/Add'
import List from './components/List'
import DonorTicket from './components/DonorTicket'
import RecipientTicket from './components/RecipientTicket'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history={hashHistory}>
        <Route path='/' component={App} />
        <Route path='/add' component={Add} />
        <Route path='/list' component={List} />
        <Route path='/ticket/donor/:ticket' component={DonorTicket} />
        <Route path='/ticket/recipient/:ticket' component={RecipientTicket} />
      </Router>
    ),
    document.getElementById('app')
  )
})
