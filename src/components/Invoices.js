import React from 'react'
import { Button, Checkbox, Row, Table } from 'react-bootstrap'

const invoiceData = [
  { number: '12345', amount_cents: '10000' },
  { number: '12345', amount_cents: '10000' },
  { number: '12345', amount_cents: '10000' },
  { number: '12345', amount_cents: '10000' },
  { number: '12345', amount_cents: '10000' },
]

const Invoices = () => (
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
          { invoiceData.map((x,i) => (
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

export default Invoices
