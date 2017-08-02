import { Route, Switch } from 'react-router'
import React from 'react'

import About from './About'
import Blog from './Blog'
import BlogList from './BlogList'
import Contact from './Contact'
import Home from './Home'
import PageNotFound from './PageNotFound'

const Router = () => <Switch>
  <Route exact path='/' component={Home} />
  <Route path='/about' component={About} />
  <Route path='/contact' component={Contact} />
  <Route exact path='/blog' component={BlogList} />
  <Route exact path='/blog/new' render={props => <Blog editMode='new' {...props} />} />  
  <Route exact path='/blog/:id' render={props => <Blog editMode='view' {...props} />} />
  <Route exact path='/blog/:id/edit' render={props => <Blog editMode='edit' {...props} />} />
  <Route component={PageNotFound} />
</Switch>

export default Router
