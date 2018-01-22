import { combineReducers } from 'redux'

import reduceReadyToPay from './reduceReadyToPay'

let reducers = {
  readyToPay: reduceReadyToPay,
}

let finalReducer = combineReducers(reducers)

export default finalReducer
