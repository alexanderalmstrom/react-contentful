import { createStore, applyMiddleware, compose } from 'redux'
import { connect } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import promiseMiddleware from 'redux-promise-middleware'

import rootReducer from './reducers/index'

const middleware = applyMiddleware(promiseMiddleware(), thunkMiddleware, createLogger())

function RunDevToolExtensionIfNotInProduction () {
	const shouldExposeState = (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production')
				&& window.devToolsExtension

	return (shouldExposeState ? window.devToolsExtension() : (f) => f)
}

export function configureStore(initialState) {
	const store = createStore(rootReducer, compose(middleware, RunDevToolExtensionIfNotInProduction()));

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			const nextRootReducer = require('./reducers/index');
			store.replaceReducer(nextRootReducer);
		})
	}

	return store
}