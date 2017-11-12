import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import ContentBlock from './ContentBlock'

import './Block.scss'

class Block extends Component {
	render () {
		const entry = this.props.entry

		if (entry && entry.fields) {
			return (
				<div className={"block " + entry.sys.contentType.sys.id}>
					{ (() => {
						switch (entry.sys.contentType.sys.id) {
							case 'content_block':
								return <ContentBlock entry={entry} />
							default:
								null
						}
					})() }
				</div>
			)
		} else {
			return (
				<div className="container">
					<p>Block component was not found.</p>
				</div>
			)
		}
	}
}

Block.propTypes = {
	entry: PropTypes.object
}

export default Block