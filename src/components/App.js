import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { initClient } from '../services/contentfulClient'
import { connectComponent } from '../connect'

import Home from './Home'
import Post from './Post'

import './App.scss'

class App extends Component {
	componentWillMount () {
		initClient().then(
			() => this.props.setAppClientState('success'),
			() => this.props.setAppClientState('error')
		)
	}

	render () {
		return (
			<div>
				{ (() => {
					if (this.props.app.authState === 'success') {
						return (
							<BrowserRouter>
								<Switch>
									<Route exact path="/" component={Home}></Route>
									<Route path="/:slug" component={Post}></Route>
								</Switch>
							</BrowserRouter>
						)
					}

					if (this.props.app.authState === 'error') {
						return (
							<div>
								<p>The connection to Contentful could not be established.</p>
								<p>Please check your delivery access token and space id</p>
							</div>
						)
					}
				})() }
			</div>
		)
	}
}

App.propTypes = {
	app: PropTypes.object,
	setAppClientState: PropTypes.func
}

export default connectComponent(App)