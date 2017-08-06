import React from 'react'
import { push } from 'react-router-redux'

import store from '../config/store'

const Home = () => <div>
  <h1>Home</h1>
  <p>Example of a simple implementation using react-router-redux:</p>
  <ul>
    <li>Router
      <ul>
        <li>Multi-Page (See buttons on Home, Contact, and About)</li>
        <li>404 - Page Not Found (Try Broken Link)</li>
      </ul>
    </li>
    <li>
      Blog
      <ul>
        <li>Child routes in Blog</li>
        <li>CRUD routes for Blog</li>
        <li>redux-thunk and redux-observable examples<br />(Note: Change useThunk variable in Router.js to change)</li>
        <li>Data Persistence Local Storage</li>
      </ul>
    </li>

    <li>More modularized than basic example:
      <ul>
        <li>Header and HeaderLink Components</li>
        <li>Store and History split out under config</li>
        <li>Router Component - more centralized</li>
        <li>Reducer - routerReducer pulled into index</li>
      </ul>
    </li>
  </ul>
  <button onClick={() => store.dispatch(push('/about'))}>
    Go To About
    </button>
</div>

export default Home
