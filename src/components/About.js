import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './About.scss'

class About extends Component {
	render () {
		return (
			<div className="about">
				<h1>About</h1>
				<Link to="/">Home</Link>
			</div>
		)
	}
}

export default About