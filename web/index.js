import React from 'react';
import ReactDOM from 'react-dom';

import rootReducers from "../redux/rootReducers";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles.scss';
import Clicker from '../components/Clicker/Clicker';

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <Clicker />
  </Provider>,
  document.getElementById('root'),
);

module.hot.accept();