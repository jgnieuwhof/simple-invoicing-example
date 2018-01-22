import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

import NavItem from './NavItem'

const Header = ({ invoices }) => {
  return (
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
          <NavItem href='/pay' disabled pullRight>
            { invoices.reduce((sum, invoice) => (sum + +invoice.amount_cents), 0) }
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default connect(state => ({
  invoices: state.readyToPay.invoices,
}))(Header)
