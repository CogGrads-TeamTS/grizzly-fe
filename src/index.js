import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

import './index.css';
import App from './App';

import { loadVendors } from './actions/vendorActions';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadVendors());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
