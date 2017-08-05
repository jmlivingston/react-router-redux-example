import { applyMiddleware, compose, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'

import { epics, reducers } from '../reducers'
import history from './history'

const epicMiddleware = createEpicMiddleware(epics)
const historyMiddleware = routerMiddleware(history)
const storyEnhancer = applyMiddleware(epicMiddleware, historyMiddleware, thunk)
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancer(storyEnhancer)

const store = createStore(reducers, enhancer)

export default store
