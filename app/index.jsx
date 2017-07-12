import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import app from 'redux/app';

import style from 'styles/base.sass';

import Counter from 'components/container.js';

// Create redux store from app reducers, router reducer, and apply thunk middleware.
const store = createStore(
  app,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

// Create enhanced history using browserHistory and redux store.
const history = syncHistoryWithStore(browserHistory, store);

let App = props => {
	return (
		<Counter />
	);
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
);