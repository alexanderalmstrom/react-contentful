import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'

import './App.scss'

class App extends Component {
	render () {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App