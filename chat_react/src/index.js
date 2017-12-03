import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Spachat from './Spachat';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
    <Spachat />
    </MuiThemeProvider>,
    document.getElementById('root'));
registerServiceWorker();
