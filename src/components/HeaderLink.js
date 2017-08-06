import React from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
  style: {
    textDecoration: 'none',
    padding: '15px',
    backgroundColor: '#ccc',
    display: 'inline-block',
    color: '#000'
  },
  activeStyle: {
    fontWeight: 'bold',
    backgroundColor: '#000',
    color: '#fff',
    cursor: 'not-allowed'
  }
}

const HeaderLink = ({ exact = false, innerText, to }) =>
  <NavLink exact={exact} to={to} {...linkStyle}>
    {innerText}
  </NavLink>

export default HeaderLink
