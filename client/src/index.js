/**
 * Dependencies
 */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux'

/**
 * Render component to DOM
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));
