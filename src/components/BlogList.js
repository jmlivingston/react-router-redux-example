import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

class BlogList extends Component {
  componentDidMount () {
    this.props.get()
  }
  render () {
    const linkStyle = {
      style: {
        width: '250px',
        display: 'inline-block'
      }
    }
    return <div>
      <h1>Blog List</h1>
      <NavLink to={'/blog/new'}>New</NavLink>
      <ul>
        {
          this.props.items && Object.entries(this.props.items)
            .sort((a, b) => a[1].title.toUpperCase() > b[1].title.toUpperCase()).map(entry =>
              <li key={entry[0]}>
                <NavLink to={'/blog/' + entry[0]} {...linkStyle}>
                  {entry[1].title}
                </NavLink>
                &nbsp;&nbsp;
                <NavLink to={'/blog/' + entry[0] + '/edit'}>
                  Edit
                </NavLink>
                &nbsp;&nbsp;
                <a onClick={() => this.props.remove(entry[0])}>
                  Delete
                </a>
              </li>
            )
        }
      </ul>
    </div>
  }
}

export default BlogList
