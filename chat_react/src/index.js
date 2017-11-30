import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spachat from './Spachat';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Spachat />, document.getElementById('root'));
registerServiceWorker();
