import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

import NavItem from './NavItem'

const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Jordan's Invoicing App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem href='/invoices'>Invoices</NavItem>
        <NavItem href='/pay'>Pay Now</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
