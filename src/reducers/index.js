import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './AppReducer'

const reducers = combineReducers({ app, router: routerReducer })

export default reducers
