import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class BlogList extends Component {
  componentDidMount () {
    this.props.get()
  }
  render () {
    return <div>
      <h1>Blog List</h1>
      <NavLink to={'/blog/new'}>New</NavLink>
      <ul>
        {
          this.props.items && Object.entries(this.props.items)
            .sort((a, b) => a[1].title.toUpperCase() > b[1].title.toUpperCase()).map(entry =>
              <li key={entry[0]}>
                <NavLink to={'/blog/' + entry[0]}>
                  {entry[1].title}
                </NavLink>
              </li>
            )
        }
      </ul>
    </div>
  }
}

export default BlogList
