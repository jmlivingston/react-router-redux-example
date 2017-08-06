import Header from './Header'
import Router from './Router'

import { ConnectedRouter } from 'react-router-redux'
import React from 'react'

import history from '../config/history'

const contentStyle = {
  style: {
    paddingLeft: '15px',
    paddingRight: '15px'
  }
}

const App = () => <ConnectedRouter history={history}>
  <div>
    <Header />
    <div {...contentStyle}>
      <Router />
    </div>
  </div>
</ConnectedRouter>

export default App
