import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {createStore, combineReducers} from 'redux';
import {Provider} from "react-redux";
import mainreducer from "./store/reducer/reducer";
import searchreducer from "./store/reducer/searchreducer";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";

import "bootstrap/dist/css/bootstrap.min.css"

const rootreducer = combineReducers({
    main: mainreducer,
    ser: searchreducer
});

const store = createStore(rootreducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
