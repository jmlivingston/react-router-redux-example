import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import reducers from '../reducers'
import history from './history'

const historyMiddleware = routerMiddleware(history)
const storyEnhancer = applyMiddleware(historyMiddleware, thunk)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancer(storyEnhancer)

const store = createStore(reducers, enhancer)

export default store
