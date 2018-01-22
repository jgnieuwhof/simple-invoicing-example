import React, { Component } from 'react'
import { Button, Checkbox, Row, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import { formatAmountCents } from '../helpers/currency'
import { markInvoicesForPayment } from '../reducers/reduceReadyToPay'

class Invoices extends Component {
  state = {
    invoices: [
      { number: '1', amount_cents: '1000' },
      { number: '2', amount_cents: '2000' },
      { number: '3', amount_cents: '3000' },
      { number: '4', amount_cents: '4000' },
      { number: '5', amount_cents: '5000' },
    ],
    selectedInvoices: [],
  }

  selectInvoice = (e, invoice) => {
    this.setState({
      selectedInvoices: e.target.checked ?
        [...this.state.selectedInvoices, invoice] :
        this.state.selectedInvoices.filter(x => x !== invoice)
    })
  }

  submitMarkedInvoices = () => {
    let { dispatch } = this.props
    dispatch(markInvoicesForPayment({ invoices: this.state.selectedInvoices }))
  }

  render() {
    let { invoices } = this.state
    return (
      <div className="invoices-container">
        <Row><Button onClick={this.submitMarkedInvoices}>Mark for Payment</Button></Row>
        <Row className='top-buffer'>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th></th>
                <th>Invoice Number</th>
                <th>Invoice Amount</th>
              </tr>
            </thead>
            <tbody>
              { invoices.map((x,i) => (
                <tr key={i}>
                  <td>
                    <Checkbox onClick={(e) => { this.selectInvoice(e,x) }} />
                  </td>
                  <td>{ x.number }</td>
                  <td>{ formatAmountCents(x.amount_cents) }</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

export default connect()(Invoices)
