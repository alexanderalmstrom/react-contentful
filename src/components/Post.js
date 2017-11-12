import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { connectComponent } from '../connect'

import Block from './Block'

import './Post.scss'

class Post extends Component {
	componentDidMount () {
		this.props.loadPost(this.props.match.params.slug)
	}

	renderPost (post) {
		if (post && post.fields) {
			return (
				<div className="container">
					<div className="row">
						<div className="col-12">
							<img src={post.fields.image.fields.file.url}
								alt={post.fields.image.fields.title} />
							<h1>{post.fields.name}</h1>
							<p>{post.fields.description}</p>
						</div>
					</div>
				</div>
			)
		}
	}

	renderBlocks (post) {
		if (post && post.fields) {
			const blocks = post.fields.blocks

			if (blocks) {
				return (
					<div className="blocks">
						{
							blocks.map(block => {
								return (
									<Block key={block.sys.id} entry={block}></Block>
								)
							})
						}
					</div>
				)
			}
		}
	}

	render () {
		const post = this.props.posts.entries[this.props.match.params.slug]

		return (
			<article className="post">
				{this.renderPost(post)}
				{this.renderBlocks(post)}
			</article>
		)
	}
}

Post.propTypes = {
	app: PropTypes.object,
	posts: PropTypes.object,
	loadPost: PropTypes.func,
	params: PropTypes.object
}

export default connectComponent(Post)