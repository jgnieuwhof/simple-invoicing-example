import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'

import NavItem from './NavItem'

import { formatAmountCents } from '../helpers/currency'

const Header = ({ readyToPayInvoices, showHeader }) => {
  let totalInvoiceAmount = readyToPayInvoices.reduce((sum, invoice) => (sum + +invoice.amount_cents), 0)
  return (
    <Navbar collapseOnSelect>
      { showHeader && (
        <Navbar.Header>
          <Navbar.Brand>
            <Link to='/'>Jordan's Invoicing App</Link>
          </Navbar.Brand>
        </Navbar.Header>
      )}
      <Navbar.Collapse>
        <Nav>
          <NavItem href='/invoices'>Invoices</NavItem>
          <NavItem href='/pay'>Pay Now</NavItem>
          <NavItem href='/pay' disabled pullRight>
            { formatAmountCents(totalInvoiceAmount) }
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default connect(store => ({
  readyToPayInvoices: store.readyToPay.invoices,
}))(Header)
