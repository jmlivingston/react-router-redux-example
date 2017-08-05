import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import app from './AppReducer'
import blog from './BlogReducer'
import blogEpic from './BlogEpic'

export const reducers = combineReducers({ app, blog, router: routerReducer })
export const epics = combineEpics(blogEpic)
