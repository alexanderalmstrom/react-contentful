import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './Feature.scss'

function Feature ({ entry }) {
	if (entry && entry.fields && entry.fields.image) {
		return (
			<div>
				<Link to={`/${entry.fields.slug}`}>
					<img src={entry.fields.image.fields.file.url}
						alt={entry.fields.image.fields.title} />
					<h2 className="h6">{entry.fields.name}</h2>
				</Link>
			</div>
		)
	} else {
		return (
			<div>
				<p>Feature component was not found.</p>
			</div>
		)
	}
}

Feature.propTypes = {
	entry: PropTypes.object
}

export default Feature