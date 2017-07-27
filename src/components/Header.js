import React from 'react'

import HeaderLink from './HeaderLink'

const Header = () => <div>
    <HeaderLink exact={true} to='/' innerText='Home' />
    <HeaderLink to='/contact' innerText='Contact' />
    <HeaderLink to='/about' innerText='About' />
    <HeaderLink to='/blog' innerText='Blog' />
    <HeaderLink to='/foo' innerText='Broken Link' />
</div>

export default Header
