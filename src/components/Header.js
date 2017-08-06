import React from 'react'

import HeaderLink from './HeaderLink'

const headerStyle = {
  style: {
    backgroundColor: '#ccc',
    paddingLeft: '15px',
    paddingRight: '15px',
    width: '100%'
  }
}

const Header = () => <div {...headerStyle}>
  <HeaderLink exact to='/' innerText='Home' />
  <HeaderLink to='/contact' innerText='Contact' />
  <HeaderLink to='/about' innerText='About' />
  <HeaderLink to='/blog' innerText='Blog' />
  <HeaderLink to='/foo' innerText='Broken Link' />
</div>

export default Header
