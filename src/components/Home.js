import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Home.scss'

class Home extends Component {
	render () {
		return (
			<div>
				<h1>Home</h1>
				<Link to="/about">About</Link>
			</div>
		)
	}
}

export default Home