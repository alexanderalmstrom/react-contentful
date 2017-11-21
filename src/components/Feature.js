import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Feature.scss'

function Feature ({ entry }) {
	if (entry && entry.fields && entry.fields.image) {
		return (
			<article className="col-md-6 feature">
				<Link to={`/${entry.fields.slug}`}>
					<img src={entry.fields.image.fields.file.url}
						alt={entry.fields.image.fields.title} />
					<h2 className="h6">{entry.fields.name}</h2>
				</Link>
			</article>
		)
	} else {
		return (
			<div className="container">
				<p>Feature component was not found.</p>
			</div>
		)
	}
}

Feature.propTypes = {
	entry: PropTypes.object
}

export default Feature
