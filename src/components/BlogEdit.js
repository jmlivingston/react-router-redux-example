import React from 'react'

const BlogEdit = ({ blog, change, save, updated }) => {
  const submit = e => {
    e.preventDefault()
    save(blog)
  }
  return <form onSubmit={submit}>
    <input name='title' value={blog.title} onChange={e => { change(e.target.name, e.target.value) }} />
    <input type='submit' value='Save' />
    {updated && <div className='success'>Updated</div>}
  </form>
}

export default BlogEdit
