import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import './Post.scss'

class Post extends Component {
	componentWillMount () {
		
	}

	render () {
		return (
			<div>
				Post
			</div>
		)
	}
}

export default connectComponent(Post)