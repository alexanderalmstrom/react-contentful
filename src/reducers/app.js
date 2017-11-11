import { makeReducer } from './util'
import { postTypeId } from '../../config'

export const app = makeReducer(function (action) {
	switch (action.type) {
		case 'LOADED_CLIENT':
			return { authState: action.authState }
	}
}, { authState: 'loading' })