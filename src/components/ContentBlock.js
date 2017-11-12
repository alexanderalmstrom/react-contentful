import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ContentBlock extends Component {
	render () {
		const entry = this.props.entry

		return (
			<div className="container">
				<div className="row">
					{
						entry.fields.columns.map(column => {
							return (
								<div key={column.sys.id}
									className={column.fields.size ? "col-md-" + column.fields.size : "col-12"}>
									<p>{column.fields.content}</p>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}

ContentBlock.propTypes = {
	entry: PropTypes.object
}

export default ContentBlock