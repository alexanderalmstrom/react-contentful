import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './Home'
import About from './About'

class Root extends Component {
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

export default Root