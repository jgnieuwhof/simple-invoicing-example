import u from 'updeep'

import { readyToPay as readyToPayActions } from '../actions'

// ============================================================================
// ReadyToPay Action Creators
// ============================================================================

export const markInvoicesForPayment = ({ invoices }) => (
  { type: readyToPayActions.MARK_FOR_PAYMENT, payload: { invoices } }
)

// ============================================================================
// App Reducer
// ============================================================================

const defaultState = {
  invoices: [],
}

export default function (state = defaultState, action) {
  let update

  switch (action.type) {
    // ------------------------------------------------------------------------
    case readyToPayActions.MARK_FOR_PAYMENT:
      let { invoices } = action.payload
      update = { invoices }
      break

    // ------------------------------------------------------------------------
    default: // do nothing
  }

  return update ? u(update, state) : state
}
