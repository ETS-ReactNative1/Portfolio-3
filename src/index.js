import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import Portfolio from './components/portfolio';

import './index.css';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
