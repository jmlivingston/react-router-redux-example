import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import BlogTopLinks from './BlogTopLinks'
import BlogEdit from './BlogEdit'
import BlogView from './BlogView'

class Blog extends Component {
  componentDidMount () {
    this.props.get()
  }
  componentDidUpdate (prevProps) {
    if (this.props.blogKey !== prevProps.blogKey || this.props.editMode !== prevProps.editMode) {
      this.props.get()
    }
  }
  render () {
    return <div>
      <br />
      <BlogTopLinks {...this.props} />
      {this.props.editMode === 'new' && <BlogEdit {...this.props} />}
      {this.props.editMode === 'edit' && <BlogEdit {...this.props} />}
      {this.props.editMode === 'view' && <BlogView {...this.props} />}
      <NavLink className='a-inline' to='/blog'>Return to Blog</NavLink>
      <hr />
    </div>
  }
}

export default Blog
