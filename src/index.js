import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
    <App><link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"/></App>, 
    document.getElementById('root')
);

registerServiceWorker();