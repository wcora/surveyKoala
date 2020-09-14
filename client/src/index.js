import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(
    reducers, // dummy reducer
    {}, // for our app we dont have initial state to load so empty object will do the work
    applyMiddleware(reduxThunk)
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


