import React from 'react'
import { push } from 'react-router-redux'

import store from '../config/store'

const About = () => <div>
  <h1>About</h1>
  <button onClick={() => store.dispatch(push('/'))}>
    Go To Home
    </button>
</div>

export default About
