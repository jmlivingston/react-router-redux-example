import React from 'react'
import { push } from 'react-router-redux'

import store from '../config/store'

const Home = () => <div>
  <h1>Home</h1>
  <p>Example of a simple implementation using react-router-redux:</p>
  <ul>
    <li>Multi-page router</li>
    <li>Child routes in Blog</li>
    <li>Navigate by code (See buttons on Home, Contact, and About)</li>
    <li>404 - Page Not Found (See Broken Link)</li>
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
