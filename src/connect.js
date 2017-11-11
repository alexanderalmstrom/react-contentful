import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actionCreators from './actions/actionCreators'

export const mapStateToProps = state => state

function mapDispatchToProps (dispatch) {
	return bindActionCreators(actionCreators, dispatch)
}

export function connectComponent (component) {
	return connect(mapStateToProps, mapDispatchToProps)(component)
}