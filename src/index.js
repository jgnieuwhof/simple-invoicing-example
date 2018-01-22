import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';

import './index.scss';
import App from './components/App';
import finalReducer from './reducers/reduce'

const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const STORE = finalCreateStore(finalReducer)

ReactDOM.render((
  <Provider store={STORE}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
