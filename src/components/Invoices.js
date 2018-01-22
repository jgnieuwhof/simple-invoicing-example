import React, { Component } from 'react'
import { Button, Checkbox, Row, Table } from 'react-bootstrap'

class Invoices extends Component {
  state = {
    invoices: [
      { number: '12345', amount_cents: '10000' },
      { number: '12345', amount_cents: '10000' },
      { number: '12345', amount_cents: '10000' },
      { number: '12345', amount_cents: '10000' },
      { number: '12345', amount_cents: '10000' },
    ],
  }

  render() {
    let { invoices } = this.state
    return (
      <div className="invoices-container">
        <Row><Button>Mark for Payment</Button></Row>
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
                    <Checkbox />
                  </td>
                  <td>{ x.number }</td>
                  <td>{ x.amount_cents }</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </div>
    )
  }
}

export default Invoices
