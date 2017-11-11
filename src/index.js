import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import { configureStore } from './store'

const store = configureStore()

import Main from './components/Main'

const render = Component => {
	ReactDOM.render(
		<Provider store={store}>
			<AppContainer>
				<Component />
			</AppContainer>
		</Provider>,
		document.getElementById('app')
	)
}

render(Main)

if (module.hot) {
	module.hot.accept('./components/Main', () => { render(Main) })
}