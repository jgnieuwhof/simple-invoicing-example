
import currencyFormatter from 'currency-formatter'

export const formatAmountCents = (amount_cents) => (
  currencyFormatter.format(amount_cents / 100, { code: 'CAD' })
)
