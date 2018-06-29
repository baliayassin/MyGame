import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App  duration={4}
proj="balias"/>, document.getElementById('root'));
registerServiceWorker();
