import React from 'react'
import { push } from 'react-router-redux'

import store from '../config/store'

const Contact = () => <div>
    <h1>Contact</h1>
    <button onClick={() => store.dispatch(push('/'))}>
        Go To Home
    </button>
</div>

export default Contact
