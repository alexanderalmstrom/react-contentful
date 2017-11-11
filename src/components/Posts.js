import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import Feature from './Feature'

import './Post.scss'

class Posts extends Component {
	componentWillMount () {
		this.props.loadEntries( { contentTypeId: 'post' } )
	}

	render () {
		return (
			<div>
					{
						Object.keys(this.props.posts.entries).map(slug => {
							return (
								<div key={slug} className="feature">
									<Feature entry={this.props.posts.entries[slug]}></Feature>
								</div>
							)
						})
					}
			</div>
		)
	}
}

Posts.propTypes = {
	app: PropTypes.object,
	posts: PropTypes.object,
	loadEntries: PropTypes.func
}

export default connectComponent(Posts)