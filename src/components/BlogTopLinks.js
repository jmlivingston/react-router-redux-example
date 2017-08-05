import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogTopLinks = ({ editMode, blogKey, remove }) => {
  return <div>
    {editMode === 'edit' && <NavLink className='a-inline' to={'/blog/' + blogKey}>View</NavLink>}
    {editMode === 'view' && <NavLink className='a-inline' to={'/blog/' + blogKey + '/edit'}>Edit</NavLink>}
    {editMode !== 'new' && <a href='' className='a-inline' onClick={remove}>Delete</a>}
    {editMode !== 'new' && <NavLink className='a-inline' to={'/blog/new'}>New</NavLink>}
  </div>
}

export default BlogTopLinks
