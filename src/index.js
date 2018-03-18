import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routing from './config/router';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Routing/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
