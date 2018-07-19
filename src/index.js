import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import './index.css';
import Portfolio from './components/portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Portfolio />
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
