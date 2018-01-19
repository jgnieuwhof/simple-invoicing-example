import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
  let { href, children, onClick } = props
  return (
    <li>
      <Link to={href} onClick={onClick}>
        {children}
      </Link>
    </li>
  )
}

export default NavItem
