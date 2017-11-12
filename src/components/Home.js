import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import Posts from './Posts'

import './Home.scss'

class Home extends Component {
	render () {
		return (
			<Posts />
		)
	}
}

export default connectComponent(Home)