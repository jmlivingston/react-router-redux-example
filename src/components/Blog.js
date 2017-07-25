import React from 'react'

const Blog = ({ match }) => <div>
  <h1>Blog Post #{match.params.id}</h1>
  <a href='/blog'>Return to Blog</a>
</div>

export default Blog
