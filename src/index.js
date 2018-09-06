import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

import JonathanRiggs from './components/jonathan-riggs';

ReactDOM.render(<JonathanRiggs />, document.getElementById('root'));
registerServiceWorker();
