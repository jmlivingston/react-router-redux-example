import React from 'react'

const BlogEdit = ({ blog, change, save, updated }) => {
  const submit = e => {
    e.preventDefault()
    save(blog)
  }
  return <form onSubmit={submit}>
    <br />
    <input type='textbox' name='title' value={blog.title} onChange={e => { change(e.target.name, e.target.value) }} />
    <button type='submit'>Save</button>
    <br />
    {updated && <div className='success'>Updated!</div>}
    <br />
  </form>
}

export default BlogEdit
