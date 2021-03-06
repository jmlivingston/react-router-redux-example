import { Route, Switch } from 'react-router'
import React from 'react'

import About from './About'
import BlogListContainer from '../containers/BlogListContainer'
import BlogContainer from '../containers/BlogContainer'
import Contact from './Contact'
import Home from './Home'
import PageNotFound from './PageNotFound'

const useThunk = true

const Router = () => <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
  <Route exact path='/blog' render={props => <BlogListContainer useThunk={useThunk} />} />
  <Route exact path='/blog/new' render={props => <BlogContainer editMode='new' blogKey='new' {...props} useThunk={useThunk} />} />
  <Route exact path='/blog/:blogKey' render={props => <BlogContainer editMode='view' {...props} useThunk={useThunk} />} />
  <Route exact path='/blog/:blogKey/edit' render={props => <BlogContainer editMode='edit' {...props} useThunk={useThunk} />} />
  <Route path='/page-not-found' component={PageNotFound} />
  <Route component={PageNotFound} />
</Switch>

export default Router
