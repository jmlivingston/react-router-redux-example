import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './AppReducer'
import blog from './BlogReducer'

const reducers = combineReducers({ app, blog, router: routerReducer })

export default reducers
