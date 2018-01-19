import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

const Header = () => (
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Jordan's Invoicing App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>
          <Link to='/invoices'>Invoices</Link>
        </NavItem>
        <NavItem>
          <Link to='/pay'>Pay Now</Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Header
