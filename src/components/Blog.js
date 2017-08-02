import React from 'react'
import { NavLink } from 'react-router-dom'

const Blog = (props) => {
  return <div>
    <h1>Blog Post #{props.match.params.id} ({props.editMode})</h1>
    {props.editMode !== 'new' &&
      <span>
        {props.editMode === 'edit' && <span><NavLink to={'/blog/' + props.match.params.id}>View</NavLink>&nbsp;&nbsp;</span> }
        {props.editMode === 'view' && <span><NavLink to={'/blog/' + props.match.params.id + '/edit'}>Edit</NavLink>&nbsp;&nbsp;</span> }
        <NavLink to='/blog/new'>New</NavLink>&nbsp;&nbsp;
      </span>
    }
    <NavLink to='/blog'>Return to Blog</NavLink>
  </div>
}

export default Blog
