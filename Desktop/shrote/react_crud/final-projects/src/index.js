import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IdeaList from './components/IdeaList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<IdeaList />, document.getElementById('root'));
registerServiceWorker();
