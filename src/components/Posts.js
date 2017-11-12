import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import Feature from './Feature'

import './Post.scss'

class Posts extends Component {
	componentWillMount () {
		this.props.loadPosts()
	}

	render () {
		return (
			<div className="container">
				<div className="row">
						{
							Object.keys(this.props.posts.entries).map(slug => {
								return (
									<div key={slug} className="col-md-6">
										<Feature entry={this.props.posts.entries[slug]}></Feature>
									</div>
								)
							})
						}
				</div>
			</div>
		)
	}
}

Posts.propTypes = {
	app: PropTypes.object,
	contentType: PropTypes.string,
	posts: PropTypes.object,
	loadPosts: PropTypes.func
}

export default connectComponent(Posts)