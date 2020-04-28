import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './Redux/store';
import { Provider } from 'react-redux';
const rootEl = document.querySelector('#root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
