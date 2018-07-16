import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Portfolio from './components/portfolio';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();
