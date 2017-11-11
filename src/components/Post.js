import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import './Post.scss'

class Post extends Component {
	componentWillMount () {
		this.props.loadEntry('post', this.props.match.slug)
	}

	renderPost (post) {
		if (post && post.fields) {
			return (
				<div className="post">
					<img src={post.fields.image.fields.file.url}
						alt={post.fields.image.fields.title} />
					<h1>{post.fields.name}</h1>
					<p>{post.fields.description}</p>
				</div>
			)
		}
	}

	render () {
		const post = this.props.posts.entries[this.props.match.params.slug]

		return (
			<div>
				{this.renderPost(post)}
			</div>
		)
	}
}

Post.propTypes = {
	app: PropTypes.object,
	posts: PropTypes.object,
	loadEntry: PropTypes.func,
	params: PropTypes.object
}

export default connectComponent(Post)