import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import Invoices from './Invoices'
import ReadyToPay from './ReadyToPay'

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route exact path='/invoices' component={Invoices} />
    <Route exact path='/pay' component={ReadyToPay} />
  </Switch>
)

export default Main
