import Header from './Header'
import Router from './Router'

import { ConnectedRouter } from 'react-router-redux'
import React from 'react'

import history from '../config/history'

const App = () => <ConnectedRouter history={history}>
  <div>
    <Header />
    <Router />
  </div>
</ConnectedRouter>

export default App
